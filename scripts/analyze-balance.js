const { loadGameModel } = require("./load-game-model");

const {
  decisions,
  metricMeta,
  horizonMeta,
  calculateState,
  maxLiberalScore,
} = loadGameModel();

const metricKeys = metricMeta.map((metric) => metric.key);
const sampleCount = Number.parseInt(process.env.BALANCE_SAMPLES ?? "12000", 10);
const seed = Number.parseInt(process.env.BALANCE_SEED ?? "20260410", 10);

function mulberry32(initialSeed) {
  let state = initialSeed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomInt(random, max) {
  return Math.floor(random() * max);
}

function toReadoutMap(modelReadout) {
  return Object.fromEntries(modelReadout.map((item) => [item.id, item.value]));
}

function outcomeFingerprint(result) {
  const readout = toReadoutMap(result.modelReadout);
  return JSON.stringify({
    metrics: result.metrics,
    readout,
    score: result.hiddenLiberalScore,
    year: result.timeline.year.metrics,
    postTerm: result.timeline.postTerm.metrics,
  });
}

function metricVector(result) {
  const readout = toReadoutMap(result.modelReadout);
  return [
    ...metricKeys.map((key) => result.metrics[key]),
    readout.budgetExecution,
    readout.reformCapacity,
    readout.servicePressure,
    result.hiddenLiberalScore,
  ];
}

function manhattanDistance(left, right) {
  return left.reduce((sum, value, index) => sum + Math.abs(value - right[index]), 0);
}

function composite(metrics) {
  return metrics.debt + metrics.growth + metrics.wellbeing + metrics.freedom;
}

function runSingleDecisionAnalysis() {
  return decisions.map((decision) => {
    const choiceResults = decision.choices.map((choice) => {
      const result = calculateState({ [decision.id]: choice.id });
      return {
        choiceId: choice.id,
        title: choice.title,
        result,
        vector: metricVector(result),
      };
    });

    let minDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < choiceResults.length; i += 1) {
      for (let j = i + 1; j < choiceResults.length; j += 1) {
        minDistance = Math.min(
          minDistance,
          manhattanDistance(choiceResults[i].vector, choiceResults[j].vector),
        );
      }
    }

    const composites = choiceResults.map((entry) => composite(entry.result.metrics));
    const uniqueOutcomes = new Set(choiceResults.map((entry) => outcomeFingerprint(entry.result))).size;
    const hasTimelineLag = choiceResults.some((entry) => {
      const year = entry.result.timeline.year.metrics;
      const postTerm = entry.result.timeline.postTerm.metrics;
      return metricKeys.some((key) => year[key] !== postTerm[key]);
    });

    return {
      decision,
      uniqueOutcomes,
      minDistance,
      compositeSpread: Math.max(...composites) - Math.min(...composites),
      hasTimelineLag,
      choiceResults,
    };
  });
}

function runMonteCarloAnalysis() {
  const random = mulberry32(seed);
  const sums = new Map();

  decisions.forEach((decision) => {
    decision.choices.forEach((choice) => {
      sums.set(`${decision.id}:${choice.id}`, {
        count: 0,
        composite: 0,
        liberalScore: 0,
        metrics: Object.fromEntries(metricKeys.map((key) => [key, 0])),
      });
    });
  });

  for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex += 1) {
    const answers = {};

    decisions.forEach((decision) => {
      const choice = decision.choices[randomInt(random, decision.choices.length)];
      answers[decision.id] = choice.id;
    });

    const result = calculateState(answers);

    decisions.forEach((decision) => {
      const key = `${decision.id}:${answers[decision.id]}`;
      const bucket = sums.get(key);
      bucket.count += 1;
      bucket.composite += composite(result.metrics);
      bucket.liberalScore += result.hiddenLiberalScore;
      metricKeys.forEach((metricKey) => {
        bucket.metrics[metricKey] += result.metrics[metricKey];
      });
    });
  }

  return decisions.map((decision) => {
    const rows = decision.choices
      .map((choice) => {
        const bucket = sums.get(`${decision.id}:${choice.id}`);
        return {
          choiceId: choice.id,
          title: choice.title,
          avgComposite: bucket.composite / bucket.count,
          avgLiberalScore: bucket.liberalScore / bucket.count,
          avgMetrics: Object.fromEntries(
            metricKeys.map((metricKey) => [metricKey, bucket.metrics[metricKey] / bucket.count]),
          ),
        };
      })
      .sort((left, right) => right.avgComposite - left.avgComposite);

    return {
      decision,
      rows,
      dominanceGap:
        rows.length > 1 ? rows[0].avgComposite - rows[1].avgComposite : 0,
    };
  });
}

function printDecisionSection(singleDecisionResults) {
  console.log("Yksittäiskysymysten erottuvuus");
  console.log("=============================");
  singleDecisionResults.forEach((entry, index) => {
    console.log(
      `${index + 1}. ${entry.decision.title} | uniikit lopputulokset ${entry.uniqueOutcomes}/4 | minietäisyys ${entry.minDistance} | composite-spread ${entry.compositeSpread} | aikaviive ${entry.hasTimelineLag ? "kyllä" : "ei"}`,
    );
  });
  console.log("");
}

function printMonteCarloSection(monteCarloResults) {
  console.log(`Monte Carlo -balanssiraportti (${sampleCount} satunnaista budjettia, seed ${seed})`);
  console.log("================================================================");
  monteCarloResults.forEach((entry, index) => {
    const leader = entry.rows[0];
    const runnerUp = entry.rows[1];
    console.log(
      `${index + 1}. ${entry.decision.topic} | korkein keskiarvokomposiitti: ${leader.choiceId} (${leader.avgComposite.toFixed(2)}) | seuraava ${runnerUp.choiceId} (${runnerUp.avgComposite.toFixed(2)}) | gap ${entry.dominanceGap.toFixed(2)}`,
    );
    entry.rows.forEach((row) => {
      console.log(
        `   - ${row.choiceId}: debt ${row.avgMetrics.debt.toFixed(2)}, growth ${row.avgMetrics.growth.toFixed(2)}, wellbeing ${row.avgMetrics.wellbeing.toFixed(2)}, freedom ${row.avgMetrics.freedom.toFixed(2)}, liberal ${row.avgLiberalScore.toFixed(2)}`,
      );
    });
  });
  console.log("");
}

function printArchetypeSection() {
  const archetypes = {
    "Varovainen suojelija": [3, 3, 3, 3, 3, 2, 1, 2, 2, 3],
    "Tasainen kompromissi": [2, 2, 2, 2, 2, 1, 2, 2, 1, 2],
    Reformisti: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    Velkajarru: [3, 1, 1, 1, 1, 3, 3, 3, 3, 1],
  };

  console.log("Arkkityyppien erot");
  console.log("==================");

  Object.entries(archetypes).forEach(([name, pattern]) => {
    const answers = {};
    decisions.forEach((decision, index) => {
      answers[decision.id] = decision.choices[pattern[index] - 1].id;
    });

    const result = calculateState(answers);
    const scorePercent = Math.round((result.hiddenLiberalScore / maxLiberalScore) * 100);
    const readout = toReadoutMap(result.modelReadout);

    console.log(
      `${name}: pisteet ${scorePercent} %, velka ${result.metrics.debt}, kasvu ${result.metrics.growth}, hyvinvointi ${result.metrics.wellbeing}, vapaus ${result.metrics.freedom}, toteutuvuus ${readout.budgetExecution}, uudistusvara ${readout.reformCapacity}, palvelut ${readout.servicePressure}`,
    );
    horizonMeta.forEach((horizon) => {
      const metrics = result.timeline[horizon.id].metrics;
      console.log(
        `   ${horizon.label}: velka ${metrics.debt}, kasvu ${metrics.growth}, hyvinvointi ${metrics.wellbeing}, vapaus ${metrics.freedom}`,
      );
    });
  });
  console.log("");
}

function printWarnings(singleDecisionResults, monteCarloResults) {
  const warnings = [];

  singleDecisionResults.forEach((entry) => {
    if (entry.uniqueOutcomes !== entry.decision.choices.length) {
      warnings.push(`${entry.decision.id}: kaksi vaihtoehtoa näyttää tuottavan saman lopputuloksen.`);
    }
    if (entry.minDistance < 6) {
      warnings.push(
        `${entry.decision.id}: vähintään kaksi vaihtoehtoa ovat hyvin lähellä toisiaan (minietäisyys ${entry.minDistance}).`,
      );
    }
    if (!entry.hasTimelineLag) {
      warnings.push(`${entry.decision.id}: aikajänteet eivät erotu riittävästi.`);
    }
  });

  monteCarloResults.forEach((entry) => {
    if (entry.dominanceGap >= 4) {
      warnings.push(
        `${entry.decision.id}: yksi vaihtoehto näyttää Monte Carlo -ajossa poikkeuksellisen vahvalta (gap ${entry.dominanceGap.toFixed(2)}).`,
      );
    }
  });

  console.log("Huomiot");
  console.log("=======");
  if (!warnings.length) {
    console.log("Ei kovia varoituksia. Malli näyttää tuottavan aidosti eri lopputuloksia.");
    return;
  }

  warnings.forEach((warning) => {
    console.log(`- ${warning}`);
  });
}

const singleDecisionResults = runSingleDecisionAnalysis();
const monteCarloResults = runMonteCarloAnalysis();

printDecisionSection(singleDecisionResults);
printMonteCarloSection(monteCarloResults);
printArchetypeSection();
printWarnings(singleDecisionResults, monteCarloResults);
