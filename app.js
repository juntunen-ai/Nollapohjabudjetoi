const initialMetrics = {
  debt: 54,
  growth: 45,
  wellbeing: 58,
  freedom: 41,
  externalSecurity: 52,
  internalSecurity: 56,
  justice: 49,
  education: 61,
  resilience: 47,
  regionalVitality: 50,
};

const metricMeta = [
  {
    key: "debt",
    label: "Valtion velka",
    tone: "meter-debt",
    description: "Matalampi ja vakaampi velka on parempi.",
  },
  {
    key: "growth",
    label: "Talouskasvu",
    tone: "meter-growth",
    description: "Kannusteet, investoinnit ja tuottavuus.",
  },
  {
    key: "wellbeing",
    label: "Kansalaisten hyvinvointi",
    tone: "meter-wellbeing",
    description: "Arjen turvallisuus, terveys ja ostovoima.",
  },
  {
    key: "freedom",
    label: "Yrittäjien vapaus",
    tone: "meter-freedom",
    description: "Verotuksen ja sääntelyn joustavuus.",
  },
  {
    key: "externalSecurity",
    label: "Ulkoinen turvallisuus",
    tone: "meter-external-security",
    description: "Puolustuskyky, varautuminen ja kansainvälinen pelote.",
  },
  {
    key: "internalSecurity",
    label: "Sisäinen turvallisuus",
    tone: "meter-internal-security",
    description: "Poliisi, rajat, arjen turvallisuus ja häiriönsieto.",
  },
  {
    key: "justice",
    label: "Oikeuslaitos",
    tone: "meter-justice",
    description: "Tuomioistuimet, oikeusturva ja käsittelyn sujuvuus.",
  },
  {
    key: "education",
    label: "Koulutus",
    tone: "meter-education",
    description: "Osaamispohja, oppimistulokset ja tuleva kasvu.",
  },
  {
    key: "resilience",
    label: "Huoltovarmuus",
    tone: "meter-resilience",
    description: "Energia, logistiikka, varastot ja kriisinkestävyys.",
  },
  {
    key: "regionalVitality",
    label: "Alueellinen elinvoima",
    tone: "meter-regional-vitality",
    description: "Työ, palvelut ja investoinnit eri puolilla Suomea.",
  },
];

const metricKeys = metricMeta.map((metric) => metric.key);

function impact(overrides) {
  return Object.fromEntries(metricKeys.map((key) => [key, overrides[key] ?? 0]));
}

const decisions = [
  {
    id: "income-tax",
    topic: "Verotus",
    title: "Mitä teet työn verotukselle?",
    summary:
      "Suomen työn verotus on korkea. Kevennys voi vahvistaa kasvua ja yrittämistä, mutta samalla rahaa on vähemmän palveluihin tai velan hillintään.",
    framing:
      "Tämä kysymys punnitsee erityisesti kasvua, yrittäjien vapautta ja budjetin kestävyyttä.",
    choices: [
      {
        id: "broad-cut",
        title: "Kevennä tuntuvasti koko palkkahaitaria",
        copy:
          "Lasketaan ansiotuloveroa selvästi. Tavoitteena on lisätä työnteon kannusteita ja vauhdittaa talouden dynamiikkaa nopeasti.",
        deltas: impact({
          debt: -8,
          growth: 12,
          wellbeing: 1,
          freedom: 14,
          externalSecurity: -2,
          internalSecurity: -2,
          justice: -2,
          education: -4,
          resilience: -2,
          regionalVitality: 1,
        }),
        hiddenLiberal: 16,
      },
      {
        id: "targeted-cut",
        title: "Kohdenna kevennys pieni- ja keskituloisille",
        copy:
          "Rajattu veronkevennys helpottaa arkea ja tukee työn tarjontaa, mutta menopuolelta tarvitaan silti jonkin verran sopeutusta.",
        deltas: impact({
          debt: -4,
          growth: 7,
          wellbeing: 8,
          freedom: 7,
          externalSecurity: -1,
          internalSecurity: -1,
          education: -1,
          regionalVitality: 3,
        }),
        hiddenLiberal: 11,
      },
      {
        id: "hold-line",
        title: "Pidä taso nykyisenä ja suojaa palvelut",
        copy:
          "Verotusta ei kevennetä nyt. Ratkaisulla suojataan julkista taloutta lyhyellä aikavälillä ja vältetään lisäsopeutus heti.",
        deltas: impact({
          debt: 6,
          growth: -4,
          wellbeing: 5,
          freedom: -6,
          externalSecurity: 2,
          internalSecurity: 1,
          justice: 2,
          education: 3,
          resilience: 2,
        }),
        hiddenLiberal: 3,
      },
    ],
  },
  {
    id: "business-subsidies",
    topic: "Yritystuet",
    title: "Mitä teet yritystuilla?",
    summary:
      "Yritystukia maksetaan Suomessa monella perusteella. Osa voi tukea investointeja, osa taas vain ylläpitää vanhaa rakennetta.",
    framing:
      "Tämä kysymys koskee valtion roolia markkinoilla: pidetäänkö tukijärjestelmä laajana vai keskitytäänkö vain harvoihin poikkeuksiin.",
    choices: [
      {
        id: "phase-out",
        title: "Leikkaa suurin osa tuista",
        copy:
          "Pidetään vain aidosti strategiset poikkeukset. Muut yritystuet puretaan ja säästö käytetään velan hillintään ja ydinvaltion tehtäviin.",
        deltas: impact({
          debt: 10,
          growth: 4,
          wellbeing: -1,
          freedom: 10,
          justice: 1,
          education: 2,
          resilience: -2,
          regionalVitality: -4,
        }),
        hiddenLiberal: 15,
      },
      {
        id: "retarget",
        title: "Karsi tehottomat ja painota TKI:tä",
        copy:
          "Karsitaan heikot tuet, mutta suunnataan osa rahasta tutkimukseen, innovaatioihin ja nuoriin kasvuyrityksiin.",
        deltas: impact({
          debt: 5,
          growth: 9,
          wellbeing: 1,
          freedom: 6,
          justice: 1,
          education: 5,
          resilience: 1,
          regionalVitality: 1,
        }),
        hiddenLiberal: 12,
      },
      {
        id: "keep",
        title: "Säilytä nykyinen tukitaso",
        copy:
          "Nykyinen tukijärjestelmä pidetään pitkälti ennallaan, jotta yritykset ja alueet välttyvät äkkinäisiltä muutoksilta.",
        deltas: impact({
          debt: -4,
          growth: -1,
          wellbeing: 2,
          freedom: -5,
          externalSecurity: 1,
          resilience: 3,
          regionalVitality: 5,
        }),
        hiddenLiberal: 2,
      },
    ],
  },
  {
    id: "municipal-finance",
    topic: "Kunnat ja sote",
    title: "Miten rahoitat kunnat ja hyvinvointialueet?",
    summary:
      "Kuntien ja hyvinvointialueiden rahoitus on budjetin suurimpia kokonaisuuksia. Jokainen ratkaisu vaikuttaa sekä palveluihin että paikalliseen päätösvaltaan.",
    framing:
      "Tässä puntaroidaan paikallista autonomiaa, alueellista tasausta ja sitä, kuinka paljon valtion pitää ohjata arjen palveluja.",
    choices: [
      {
        id: "local-autonomy",
        title: "Lisää paikallista vastuuta ja kevennä valtionosuuksia",
        copy:
          "Valtio vetäytyy askelen taakse. Kunnille jää enemmän vastuuta verotuksesta, priorisoinneista ja palvelurakenteen uudistamisesta.",
        deltas: impact({
          debt: 9,
          growth: 4,
          wellbeing: -7,
          freedom: 8,
          internalSecurity: -2,
          justice: -1,
          education: -4,
          regionalVitality: -5,
        }),
        hiddenLiberal: 14,
      },
      {
        id: "targeted-model",
        title: "Karsi hallintoa ja kohdista tuki tarpeen mukaan",
        copy:
          "Hallintoa puretaan, mutta valtion tukea suunnataan edelleen niille alueille, joilla oma veropohja on heikoin.",
        deltas: impact({
          debt: 5,
          growth: 2,
          wellbeing: 3,
          freedom: 4,
          education: 1,
          regionalVitality: 1,
        }),
        hiddenLiberal: 10,
      },
      {
        id: "state-finance",
        title: "Säilytä laaja valtion rahoitusmalli",
        copy:
          "Valtio kantaa edelleen suuren vastuun peruspalvelujen rahoituksesta koko maassa, vaikka velkapainetta syntyy lisää.",
        deltas: impact({
          debt: -6,
          growth: -2,
          wellbeing: 8,
          freedom: -4,
          internalSecurity: 1,
          justice: 1,
          education: 3,
          resilience: 1,
          regionalVitality: 5,
        }),
        hiddenLiberal: 1,
      },
    ],
  },
  {
    id: "education-rdi",
    topic: "Koulutus ja tutkimus",
    title: "Miten painotat koulutusta ja tutkimusta?",
    summary:
      "Koulutus ja TKI vaikuttavat hitaasti mutta syvästi. Lyhyen aikavälin säästö voi helpottaa budjettia, mutta heikentää kasvupohjaa myöhemmin.",
    framing:
      "Tässä kysymyksessä näkyy hyvin Liberaalipuolueelle tyypillinen jännite: säästä muualla, mutta suojaa osaamista.",
    choices: [
      {
        id: "invest-hard",
        title: "Siirrä rahaa kouluihin, korkeakouluihin ja TKI:hin",
        copy:
          "Rahoitusta vahvistetaan uudelleenkohdentamalla menoja muualta budjetista. Painotus on osaamisessa, tutkimuksessa ja tulevassa kasvussa.",
        deltas: impact({
          debt: 1,
          growth: 10,
          wellbeing: 5,
          freedom: 2,
          externalSecurity: 1,
          education: 14,
          resilience: 2,
          regionalVitality: 2,
        }),
        hiddenLiberal: 13,
      },
      {
        id: "protect-current",
        title: "Suojaa nykyinen taso ilman suurta lisäpanostusta",
        copy:
          "Koulutusta ei leikata, mutta lisärahaa ei myöskään jaeta paljon. Ratkaisu pitää suunnan vakaana ja välttää suuret siirrot.",
        deltas: impact({
          growth: 4,
          wellbeing: 3,
          education: 6,
        }),
        hiddenLiberal: 8,
      },
      {
        id: "freeze-save",
        title: "Jäädytä taso ja painota lyhyen aikavälin säästöä",
        copy:
          "Koulutuksen ja tutkimuksen kasvua ei rahoiteta nyt. Tavoitteena on helpottaa budjettipainetta nopeasti, vaikka pidemmän aikavälin kustannus voi kasvaa.",
        deltas: impact({
          debt: 5,
          growth: -5,
          wellbeing: -4,
          freedom: -1,
          education: -10,
          resilience: -1,
          regionalVitality: -2,
        }),
        hiddenLiberal: 1,
      },
    ],
  },
  {
    id: "justice-security",
    topic: "Poliisi, rajat ja oikeus",
    title: "Panostatko poliisiin, rajoihin ja oikeuslaitokseen?",
    summary:
      "Liberaalissa ajattelussa valtio voi olla pieni, mutta sen ydintehtävien pitää toimia. Sisäinen turvallisuus ja oikeusturva ovat juuri tällaisia kohtia.",
    framing:
      "Tämä kysymys erottaa hyvin hallinnon yleisen paisuttamisen ja ydinvaltion vahvistamisen toisistaan.",
    choices: [
      {
        id: "boost-core-state",
        title: "Vahvista poliisia, rajoja ja tuomioistuimia",
        copy:
          "Lisätään resursseja näihin ydintoimintoihin ja karsitaan samalla muuta hallintoa. Tavoite on nopeampi oikeus ja turvallisempi arki.",
        deltas: impact({
          debt: 3,
          growth: 1,
          wellbeing: 4,
          freedom: 2,
          externalSecurity: 2,
          internalSecurity: 12,
          justice: 14,
          resilience: 3,
        }),
        hiddenLiberal: 13,
      },
      {
        id: "moderate-modernize",
        title: "Tee maltillinen lisäys ja digitalisoi prosesseja",
        copy:
          "Panostetaan jonkin verran henkilöstöön ja teknologiaan, mutta ilman suurta menolisäystä tai hallinnon laajentamista.",
        deltas: impact({
          growth: 1,
          wellbeing: 3,
          freedom: 1,
          externalSecurity: 1,
          internalSecurity: 7,
          justice: 8,
          resilience: 1,
        }),
        hiddenLiberal: 10,
      },
      {
        id: "hold-current",
        title: "Pidä nykyinen taso",
        copy:
          "Uusia panostuksia ei tehdä tässä vaiheessa. Tällä vältetään lisämenoja, mutta jonot ja vasteajat voivat pysyä pitkään korkeina.",
        deltas: impact({
          debt: 2,
          internalSecurity: -3,
          justice: -4,
        }),
        hiddenLiberal: 4,
      },
    ],
  },
  {
    id: "defense-resilience",
    topic: "Puolustus ja huoltovarmuus",
    title: "Miten vahvistat Suomen kriisinkestävyyttä?",
    summary:
      "Puolustusmenot, varautuminen ja huoltovarmuus ovat nousseet pysyvästi politiikan ytimeen. Kysymys kuuluu, kuinka pitkälle olet valmis menemään.",
    framing:
      "Tässä mitataan sekä ulkoista turvallisuutta että sitä, kuinka hyvin yhteiskunta kestää energia-, logistiikka- ja toimitusketjujen häiriöitä.",
    choices: [
      {
        id: "major-boost",
        title: "Nosta puolustusta ja varmuusvarastoja selvästi",
        copy:
          "Panostetaan puolustuskykyyn, ammusvarastoihin, energiaomavaraisuuteen ja kriisiajan logistiikkaan nyt, vaikka budjetista pitää löytää muita säästöjä.",
        deltas: impact({
          debt: 1,
          wellbeing: -1,
          externalSecurity: 15,
          internalSecurity: 3,
          education: -1,
          resilience: 15,
        }),
        hiddenLiberal: 11,
      },
      {
        id: "targeted-boost",
        title: "Tee kohdennettu vahvistus",
        copy:
          "Vahvistetaan puolustusta ja kriisinkestävyyttä vain kaikkein kiireellisimmissä kohdissa. Menolisäys pysyy maltillisena.",
        deltas: impact({
          externalSecurity: 10,
          internalSecurity: 2,
          resilience: 9,
        }),
        hiddenLiberal: 9,
      },
      {
        id: "stay-course",
        title: "Pysy nykyisellä linjalla",
        copy:
          "Suurta lisäpanostusta ei tehdä. Budjetti säästyy, mutta haavoittuvuudet eivät pienene nopeasti.",
        deltas: impact({
          debt: 3,
          externalSecurity: -6,
          internalSecurity: -1,
          resilience: -8,
        }),
        hiddenLiberal: 2,
      },
    ],
  },
  {
    id: "housing",
    topic: "Asuminen ja rakentaminen",
    title: "Miten helpotat asumista ja rakentamista?",
    summary:
      "Asumisen hinta syö ostovoimaa ja jarruttaa työn perässä liikkumista. Rakentamisen sääntelyllä on iso vaikutus ilman, että budjettiin tarvitsee aina kaataa lisää rahaa.",
    framing:
      "Tämä on hyvä esimerkki kysymyksestä, jossa budjetti ja norminpurku kohtaavat: kaikki ratkaisut eivät ole pelkkää menojen lisäämistä.",
    choices: [
      {
        id: "deregulate",
        title: "Pura kaavoituksen ja rakentamisen esteitä",
        copy:
          "Nopeutetaan lupia, höllennetään pysäköinti- ja rakentamisnormeja ja annetaan markkinoiden vastata kysyntään nopeammin.",
        deltas: impact({
          debt: 2,
          growth: 8,
          wellbeing: 6,
          freedom: 12,
          regionalVitality: 8,
        }),
        hiddenLiberal: 16,
      },
      {
        id: "mixed-model",
        title: "Yhdistä maltillinen norminpurku ja kohdennettu tuki",
        copy:
          "Puretaan pahimpia esteitä, mutta käytetään myös rajattuja tukia siellä, missä markkina ei yksin vastaa kysyntään.",
        deltas: impact({
          debt: -1,
          growth: 5,
          wellbeing: 7,
          freedom: 6,
          regionalVitality: 6,
        }),
        hiddenLiberal: 10,
      },
      {
        id: "subsidize-demand",
        title: "Säilytä nykyinen malli ja tue kysyntää",
        copy:
          "Rakentamisen sääntöjä ei juuri muuteta. Pääpaino pidetään tuissa ja olemassa olevan mallin vakaudessa.",
        deltas: impact({
          debt: -4,
          growth: -2,
          wellbeing: 2,
          freedom: -6,
          regionalVitality: 2,
        }),
        hiddenLiberal: 1,
      },
    ],
  },
  {
    id: "vat",
    topic: "ALV ja kulutusverot",
    title: "Mitä teet ALV:lle ja kulutuksen verotukselle?",
    summary:
      "Kulutusverot tuovat paljon rahaa, mutta ne voivat osua erityisesti pienituloisiin. Muutos voi kuitenkin mahdollistaa muita verokevennyksiä tai velan hallintaa.",
    framing:
      "Viimeinen kysymys pakottaa valitsemaan, kerätäänkö budjetti kasaan laajalla veropohjalla vai lykätäänkö päätös tulevaisuuteen.",
    choices: [
      {
        id: "broaden-base",
        title: "Laajenna veropohjaa ja kompensoi pienituloisille",
        copy:
          "ALV:n pohjaa laajennetaan ja samalla suojataan pienituloisia tulonsiirroilla tai tuloverotuksen kautta. Kokonaisuus pyrkii sekä tasapainoon että selkeyteen.",
        deltas: impact({
          debt: 9,
          growth: 1,
          wellbeing: 2,
          freedom: 3,
          externalSecurity: 1,
          education: 1,
          resilience: 1,
          regionalVitality: -1,
        }),
        hiddenLiberal: 12,
      },
      {
        id: "small-rise",
        title: "Nosta ALV:tä hieman ilman isoa uudistusta",
        copy:
          "Tehdään maltillinen veronkorotus ja kerätään lisätuloja nopeasti, mutta verojärjestelmän rakenteeseen ei kosketa juuri lainkaan.",
        deltas: impact({
          debt: 6,
          wellbeing: -1,
        }),
        hiddenLiberal: 7,
      },
      {
        id: "no-change",
        title: "Pidä ALV ennallaan ja ota lisävelkaa",
        copy:
          "Kulutusveroja ei kiristetä. Ratkaisu välttää välittömän hintapaineen, mutta jättää budjettiin enemmän rahoitettavaa velalla.",
        deltas: impact({
          debt: -7,
          wellbeing: 3,
          resilience: -1,
        }),
        hiddenLiberal: 0,
      },
    ],
  },
];

const maxLiberalScore = decisions.reduce(
  (total, decision) => total + Math.max(...decision.choices.map((choice) => choice.hiddenLiberal)),
  0,
);

const state = {
  step: "home",
  currentDecisionIndex: 0,
  answers: {},
};

const app = document.querySelector("#app");

const clamp = (value) => Math.max(0, Math.min(100, value));

function getDecision(index) {
  return decisions[index];
}

function getChoice(decision, choiceId) {
  return decision.choices.find((choice) => choice.id === choiceId);
}

function getAnsweredCount() {
  return decisions.filter((decision) => state.answers[decision.id]).length;
}

function getFirstUnansweredIndex() {
  const index = decisions.findIndex((decision) => !state.answers[decision.id]);
  return index === -1 ? 0 : index;
}

function calculateState() {
  const metrics = { ...initialMetrics };
  const completedChoices = [];
  let hiddenLiberalScore = 0;

  for (const decision of decisions) {
    const choiceId = state.answers[decision.id];

    if (!choiceId) {
      continue;
    }

    const choice = getChoice(decision, choiceId);

    if (!choice) {
      continue;
    }

    for (const metric of metricMeta) {
      metrics[metric.key] = clamp(metrics[metric.key] + choice.deltas[metric.key]);
    }

    hiddenLiberalScore += choice.hiddenLiberal;
    completedChoices.push({ decision, choice });
  }

  return { metrics, hiddenLiberalScore, completedChoices };
}

function metricCards(metrics, options = {}) {
  const { compact = false } = options;

  return metricMeta
    .map((metric) => {
      const value = metrics[metric.key];

      return `
        <article class="metric-card ${compact ? "metric-card-compact" : ""}">
          <div class="metric-head">
            <strong>${metric.label}</strong>
            <span class="metric-value">${value}/100</span>
          </div>
          <div class="meter ${metric.tone}">
            <span style="width: ${value}%"></span>
          </div>
          ${compact ? "" : `<span>${metric.description}</span>`}
        </article>
      `;
    })
    .join("");
}

function choiceDeltaPills(deltas, limit = 5) {
  const impacted = metricMeta
    .map((metric) => ({
      label: metric.label,
      value: deltas[metric.key] ?? 0,
    }))
    .filter((item) => item.value !== 0)
    .sort((left, right) => Math.abs(right.value) - Math.abs(left.value));

  const visible = impacted.slice(0, limit);
  const remaining = impacted.length - visible.length;

  const pills = visible.map((item) => {
    const deltaSign = item.value > 0 ? "+" : "";
    const deltaClass = item.value >= 0 ? "delta-positive" : "delta-negative";

    return `<span class="delta-pill ${deltaClass}">${item.label}: ${deltaSign}${item.value}</span>`;
  });

  if (remaining > 0) {
    pills.push(`<span class="delta-pill delta-neutral">+${remaining} muuta vaikutusta</span>`);
  }

  return pills.join("");
}

function resultCards(beforeMetrics, afterMetrics) {
  return metricMeta
    .map((metric) => {
      const before = beforeMetrics[metric.key];
      const after = afterMetrics[metric.key];
      const delta = after - before;
      const deltaSign = delta > 0 ? "+" : "";
      const deltaClass = delta >= 0 ? "delta-positive" : "delta-negative";

      return `
        <article class="result-card">
          <strong>${metric.label}</strong>
          <span>${before} -> ${after}</span>
          <div class="choice-deltas">
            <span class="delta-pill ${deltaClass}">${deltaSign}${delta}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDecisionProgress() {
  return `
    <div class="progress-card">
      <div class="progress-head">
        <strong>Vastattu ${getAnsweredCount()} / ${decisions.length}</strong>
        <span>${state.currentDecisionIndex + 1}. kysymys</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span style="width: ${((state.currentDecisionIndex + 1) / decisions.length) * 100}%"></span>
      </div>
    </div>
  `;
}

function getLiberalProfile(scorePercent) {
  if (scorePercent >= 70) {
    return {
      title: "Liberaali uudistaja",
      copy:
        "Budjettisi nojaa vahvasti työn, yrittämisen ja norminpurun vahvistamiseen. Se osuu lähelle Liberaalipuolueen talouslinjaa.",
    };
  }

  if (scorePercent >= 45) {
    return {
      title: "Uudistava tasapainottaja",
      copy:
        "Haet muutosta, mutta jätät valtiolle vahvan roolin useassa kohdassa. Budjettisi sisältää paljon liberaaleja elementtejä, muttei puhtainta markkinalinjaa.",
    };
  }

  if (scorePercent >= 25) {
    return {
      title: "Varovainen korjaaja",
      copy:
        "Haluat korjata järjestelmää, mutta suojaat olemassa olevia rakenteita usein muutokselta. Talousajattelusi on sekoitus vakauden ja uudistusten välillä.",
    };
  }

  return {
    title: "Säilyttävä budjetoija",
    copy:
      "Pidit suuren osan nykyisestä mallista ennallaan. Vakaus painoi valinnoissasi enemmän kuin markkinaehtoisuus tai laaja rakenteellinen uudistus.",
  };
}

function renderHome() {
  app.innerHTML = `
    <section class="screen screen-grid">
      <div>
        <p class="hero-kicker">Nopea budjettitesti</p>
        <h2 class="hero-title">Rakenna Suomen budjetti kahdeksalla päätöksellä.</h2>
        <p class="hero-copy">
          Nollapohjabudjetoi on kevyt poliittinen peli, jossa rakennat valtion budjettia isoilla
          arvovalinnoilla. Kahdeksan kysymystä riittää siihen, että lopputuloksesta näkyy jo selvä suunta.
        </p>
        <div class="cta-row">
          <button class="button" data-action="go-metrics">Aloita testi</button>
          <button class="ghost-button" data-action="start-questions">Siirry kysymyksiin</button>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="stepper" aria-label="Pelin vaiheet">
          <span class="step-dot active"></span>
          <span class="step-dot"></span>
          <span class="step-dot"></span>
        </div>

        <div class="hero-stats">
          <article class="stat-pill">
            <strong>5-8 minuuttia</strong>
            <span>Lyhyt, jaettava ja uudelleenpelattava kierros.</span>
          </article>
          <article class="stat-pill">
            <strong>8 päätöstä</strong>
            <span>Yksi suuri budjettivalinta kerrallaan.</span>
          </article>
          <article class="stat-pill">
            <strong>10 mittaria</strong>
            <span>Talous, turvallisuus, koulutus ja alueiden veto.</span>
          </article>
          <article class="stat-pill">
            <strong>Tulos lopussa</strong>
            <span>Liberaalipiste paljastuu vasta viimeisellä ruudulla.</span>
          </article>
        </div>

        <p class="mini-note">
          Tämä ei väitä olevansa täydellinen talousmalli. Se näyttää nopeasti, millaisia suuntia
          erilaiset budjettivalinnat voivat tuottaa.
        </p>
      </aside>
    </section>
  `;
}

function renderMetrics() {
  const { metrics } = calculateState();

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="metric-panel">
        <p class="section-kicker">Ennen ensimmäistä päätöstä</p>
        <h2 class="section-title">Näitä kymmentä mittaria seuraat koko pelin ajan.</h2>
        <p class="section-copy">
          Mittarit ovat yksinkertaistettu prototyyppi. Ne yhdistävät velkakestävyyden, kasvun,
          turvallisuuden, oikeusvaltion, koulutuksen ja alueellisen elinvoiman samaan näkymään.
        </p>

        <div class="metric-grid">
          ${metricCards(metrics)}
        </div>
      </div>

      <aside class="sidebar-panel">
        <div class="stepper" aria-label="Pelin vaiheet">
          <span class="step-dot active"></span>
          <span class="step-dot active"></span>
          <span class="step-dot"></span>
        </div>

        <div class="side-note">
          <h3>Miten peli toimii?</h3>
          <p class="tile-copy">
            Saat kahdeksan poliittisesti kiinnostavaa kysymystä. Jokainen vastaus muuttaa mittareita
            heti, ja lopuksi saat tulkinnan omasta budjettisuunnastasi.
          </p>
        </div>

        <div class="side-note">
          <h3>Mikä pysyy piilossa?</h3>
          <p class="tile-copy">
            Ideologinen profiili ei näy kesken pelin. Pelaaja saa ensin pohtia seurauksia ja vasta
            lopuksi nähdä, kuinka lähelle Liberaalipuolueen budjettiajattelua oma tulos osui.
          </p>
        </div>

        <div class="nav-row">
          <button class="button" data-action="start-questions">Aloita ensimmäinen kysymys</button>
          <button class="ghost-button" data-action="go-home">Takaisin</button>
        </div>
      </aside>
    </section>
  `;
}

function renderDecision() {
  const decision = getDecision(state.currentDecisionIndex);

  if (!decision) {
    state.step = "final";
    render();
    return;
  }

  const { metrics } = calculateState();
  const selectedChoiceId = state.answers[decision.id] ?? "";
  const isLastDecision = state.currentDecisionIndex === decisions.length - 1;

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="decision-panel">
        <p class="section-kicker">${decision.topic}</p>
        <div class="decision-tag">Päätös ${state.currentDecisionIndex + 1} / ${decisions.length}</div>
        <h2 class="section-title">${decision.title}</h2>
        <p class="decision-copy">${decision.summary}</p>
        <p class="mini-note">${decision.framing}</p>

        <div class="choice-grid">
          ${decision.choices
            .map(
              (choice) => `
                <button
                  class="choice-button ${selectedChoiceId === choice.id ? "selected" : ""}"
                  data-action="select-choice"
                  data-choice-id="${choice.id}"
                >
                  <div class="choice-title-row">
                    <strong>${choice.title}</strong>
                  </div>
                  <p class="choice-copy">${choice.copy}</p>
                  <div class="choice-deltas">
                    ${choiceDeltaPills(choice.deltas)}
                  </div>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <aside class="summary-panel">
        ${renderDecisionProgress()}

        <div class="side-note">
          <h3>Mittarit juuri nyt</h3>
          <p class="tile-copy">
            Sivupalkki näyttää kertymän tähän asti. Jokainen valintasi jää voimaan ja näkyy myös seuraavissa kysymyksissä.
          </p>
        </div>

        <div class="metric-grid metric-grid-compact">
          ${metricCards(metrics, { compact: true })}
        </div>

        <div class="nav-row">
          <button class="button" data-action="next-decision" ${selectedChoiceId ? "" : "disabled"}>
            ${isLastDecision ? "Näytä tulokseni" : "Seuraava kysymys"}
          </button>
          <button class="ghost-button" data-action="${state.currentDecisionIndex === 0 ? "go-metrics" : "previous-decision"}">
            ${state.currentDecisionIndex === 0 ? "Takaisin mittareihin" : "Edellinen kysymys"}
          </button>
        </div>
      </aside>
    </section>
  `;
}

function renderFinal() {
  const { metrics, hiddenLiberalScore, completedChoices } = calculateState();
  const scorePercent = Math.round((hiddenLiberalScore / maxLiberalScore) * 100);
  const profile = getLiberalProfile(scorePercent);

  const rankedMetrics = metricMeta
    .map((metric) => ({
      ...metric,
      value: metrics[metric.key],
    }))
    .sort((left, right) => right.value - left.value);

  const strengths = rankedMetrics.slice(0, 3);
  const weakest = [...rankedMetrics].reverse().slice(0, 3);

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="result-panel">
        <p class="section-kicker">Valmis budjetti</p>
        <h2 class="section-title">${profile.title}</h2>
        <p class="section-copy">${profile.copy}</p>

        <div class="result-banner score-banner">
          <span class="score-label">Liberaalipisteesi</span>
          <strong class="score-value">${scorePercent} / 100</strong>
          <p class="tile-copy">
            Piste kertoo, kuinka lähelle valintasi osuvat Liberaalipuolueen markkinaliberaalia ja ydinvaltiota painottavaa suuntaa.
          </p>
        </div>

        <div class="result-grid">
          ${resultCards(initialMetrics, metrics)}
        </div>
      </div>

      <aside class="summary-panel">
        <div class="side-note">
          <h3>Budjettisi vahvuudet</h3>
          <ul class="muted-list">
            ${strengths.map((metric) => `<li>${metric.label}: ${metric.value}/100</li>`).join("")}
          </ul>
        </div>

        <div class="side-note">
          <h3>Eniten painetta jäi</h3>
          <ul class="muted-list">
            ${weakest.map((metric) => `<li>${metric.label}: ${metric.value}/100</li>`).join("")}
          </ul>
        </div>

        <div class="side-note">
          <h3>Valintasi kierros kierrokselta</h3>
          <ul class="muted-list answer-list">
            ${completedChoices
              .map(
                ({ decision, choice }, index) =>
                  `<li><strong>${index + 1}. ${decision.topic}</strong><span>${choice.title}</span></li>`,
              )
              .join("")}
          </ul>
        </div>

        <div class="nav-row">
          <button class="button" data-action="restart">Aloita alusta</button>
          <button class="ghost-button" data-action="edit-answers">Muokkaa vastauksia</button>
        </div>
      </aside>
    </section>
  `;
}

function render() {
  switch (state.step) {
    case "metrics":
      renderMetrics();
      break;
    case "decision":
      renderDecision();
      break;
    case "final":
      renderFinal();
      break;
    case "home":
    default:
      renderHome();
      break;
  }
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === "go-home") {
    state.step = "home";
    render();
    return;
  }

  if (action === "go-metrics") {
    state.step = "metrics";
    render();
    return;
  }

  if (action === "start-questions") {
    state.currentDecisionIndex = getAnsweredCount() === decisions.length ? 0 : getFirstUnansweredIndex();
    state.step = "decision";
    render();
    return;
  }

  if (action === "select-choice") {
    const decision = getDecision(state.currentDecisionIndex);

    if (!decision) {
      return;
    }

    state.answers[decision.id] = target.dataset.choiceId;
    render();
    return;
  }

  if (action === "next-decision") {
    const decision = getDecision(state.currentDecisionIndex);

    if (!decision || !state.answers[decision.id]) {
      return;
    }

    if (state.currentDecisionIndex === decisions.length - 1) {
      state.step = "final";
      render();
      return;
    }

    state.currentDecisionIndex += 1;
    state.step = "decision";
    render();
    return;
  }

  if (action === "previous-decision") {
    state.currentDecisionIndex = Math.max(0, state.currentDecisionIndex - 1);
    state.step = "decision";
    render();
    return;
  }

  if (action === "edit-answers") {
    state.currentDecisionIndex = 0;
    state.step = "decision";
    render();
    return;
  }

  if (action === "restart") {
    state.step = "home";
    state.currentDecisionIndex = 0;
    state.answers = {};
    render();
  }
});

render();
