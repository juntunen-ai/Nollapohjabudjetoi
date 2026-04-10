const test = require("node:test");
const assert = require("node:assert/strict");

const { loadGameModel } = require("../scripts/load-game-model");

const {
  decisions,
  metricMeta,
  roleOptions,
  priorityOptions,
  maxSelectedPriorities,
  topPriorityCount,
  maxLiberalScore,
  calculateState,
} = loadGameModel();

const metricKeys = metricMeta.map((metric) => metric.key);

const neutralGovernance = {
  roleId: "steering-state",
  priorities: ["fiscal-stability", "service-access", "education-science", "rule-of-law"],
  topPriorities: ["fiscal-stability", "service-access"],
};

function toReadoutMap(modelReadout) {
  return Object.fromEntries(modelReadout.map((item) => [item.id, item.value]));
}

function outcomeFingerprint(result) {
  return JSON.stringify({
    metrics: result.metrics,
    readout: toReadoutMap(result.modelReadout),
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

function archetype(pattern, governance = neutralGovernance) {
  const answers = {};
  decisions.forEach((decision, index) => {
    answers[decision.id] = decision.choices[pattern[index] - 1].id;
  });
  return calculateState(answers, governance);
}

test("pelissä on 11 kysymystä, 4 roolia ja 10 prioriteettia", () => {
  assert.equal(decisions.length, 11);
  assert.equal(roleOptions.length, 4);
  assert.equal(priorityOptions.length, 10);
  assert.equal(maxSelectedPriorities, 4);
  assert.equal(topPriorityCount, 2);
  decisions.forEach((decision) => {
    assert.equal(
      decision.choices.length,
      4,
      `Päätöksessä ${decision.id} pitäisi olla 4 vaihtoehtoa.`,
    );
  });
});

test("jokaisen kysymyksen vaihtoehdot tuottavat uniikit lopputulokset", () => {
  decisions.forEach((decision) => {
    const fingerprints = decision.choices.map((choice) =>
      outcomeFingerprint(calculateState({ [decision.id]: choice.id }, neutralGovernance)),
    );
    assert.equal(
      new Set(fingerprints).size,
      decision.choices.length,
      `Päätöksen ${decision.id} vaihtoehdoista ainakin kaksi johtaa samaan lopputulokseen.`,
    );
  });
});

test("jokaisessa kysymyksessä vaihtoehtojen väliin jää näkyvä vaikutusero", () => {
  decisions.forEach((decision) => {
    const vectors = decision.choices.map((choice) =>
      metricVector(calculateState({ [decision.id]: choice.id }, neutralGovernance)),
    );
    let minDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < vectors.length; i += 1) {
      for (let j = i + 1; j < vectors.length; j += 1) {
        minDistance = Math.min(minDistance, manhattanDistance(vectors[i], vectors[j]));
      }
    }

    assert.ok(
      minDistance >= 6,
      `Päätöksen ${decision.id} vähintään kaksi vaihtoehtoa ovat liian lähellä toisiaan (etäisyys ${minDistance}).`,
    );
  });
});

test("aikajänteet vaikuttavat oikeasti ainakin yhteen vaihtoehtoon joka kysymyksessä", () => {
  decisions.forEach((decision) => {
    const hasLaggedChoice = decision.choices.some((choice) => {
      const result = calculateState({ [decision.id]: choice.id }, neutralGovernance);
      return metricKeys.some(
        (key) => result.timeline.year.metrics[key] !== result.timeline.postTerm.metrics[key],
      );
    });

    assert.ok(hasLaggedChoice, `Päätöksessä ${decision.id} ei näy aikajänne-eroa.`);
  });
});

test("erilaiset budjettiprofiilit erkanevat selvästi toisistaan", () => {
  const cautious = archetype([3, 3, 3, 3, 3, 2, 1, 2, 2, 2, 3], {
    roleId: "producer-state",
    priorities: ["social-floor", "service-access", "regional-vitality", "rule-of-law"],
    topPriorities: ["social-floor", "service-access"],
  });
  const compromise = archetype([2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2], neutralGovernance);
  const reform = archetype([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], {
    roleId: "enabling-state",
    priorities: ["fiscal-stability", "work-enterprise", "education-science", "individual-freedom"],
    topPriorities: ["work-enterprise", "individual-freedom"],
  });
  const debtBrake = archetype([3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1], {
    roleId: "enabling-state",
    priorities: ["fiscal-stability", "work-enterprise", "external-security", "rule-of-law"],
    topPriorities: ["fiscal-stability", "work-enterprise"],
  });

  const cautiousVector = metricVector(cautious);
  const compromiseVector = metricVector(compromise);
  const reformVector = metricVector(reform);
  const debtBrakeVector = metricVector(debtBrake);

  assert.ok(manhattanDistance(cautiousVector, reformVector) >= 40);
  assert.ok(manhattanDistance(compromiseVector, reformVector) >= 30);
  assert.ok(manhattanDistance(cautiousVector, debtBrakeVector) >= 30);

  assert.ok(reform.hiddenLiberalScore > compromise.hiddenLiberalScore);
  assert.ok(compromise.hiddenLiberalScore > cautious.hiddenLiberalScore);
  assert.ok(reform.hiddenLiberalScore <= maxLiberalScore);
});
