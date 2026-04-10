const scenario = {
  name: "Suomi keväällä 2026",
  description:
    "Kevään 2026 tilannekuva, joka nojaa VM:n, Tilastokeskuksen, VTV:n, Talouspolitiikan arviointineuvoston, IMF:n, OECD:n ja EU:n Suomi-kuvaan.",
};

const executiveSummaryItems = [
  {
    title: "Velka ja alijäämä",
    copy:
      "Julkinen talous on keväällä 2026 yhä kireä. Velka ei ole enää vain tulevaisuuden ongelma, vaan se rajaa jo tämän päivän poliittista liikkumatilaa.",
  },
  {
    title: "Palvelut ovat paineessa",
    copy:
      "Sote, koulutus, oikeusketju ja kuntien arki kamppailevat jonojen, henkilöstöpulan ja kustannusten kanssa samaan aikaan.",
  },
  {
    title: "Kasvu on liian heikkoa",
    copy:
      "Työllisyys, investoinnit ja tuottavuus eivät riitä kantamaan menoja. Siksi työn, yrittämisen ja osaamisen kannusteilla on iso merkitys.",
  },
  {
    title: "Teknologia jakaa mahdollisuudet ja riskit",
    copy:
      "Tekoäly ja automaatio voivat nostaa tuottavuutta nopeasti, mutta ilman osaamista, siirtymäturvaa ja luottamusta ne voivat myös kasvattaa eroja.",
  },
  {
    title: "Turvallisuus sitoo resursseja",
    copy:
      "Puolustus, rajat, energia ja huoltovarmuus vaativat pysyvästi enemmän huomiota kuin vielä muutama vuosi sitten.",
  },
];

const metricMeta = [
  {
    key: "debt",
    label: "Velan kehitys",
    tone: "meter-debt",
    description: "Kasvaako velka nopeammin vai saadaanko velkaantumisen suuntaa hillittyä.",
  },
  {
    key: "growth",
    label: "Talouskasvu",
    tone: "meter-growth",
    description: "Miten valintasi vaikuttavat työn, investointien ja tuottavuuden näkymiin.",
  },
  {
    key: "wellbeing",
    label: "Kansalaisten hyvinvointi",
    tone: "meter-wellbeing",
    description: "Arjen turvallisuus, palvelujen saatavuus ja ostovoiman kokonaistunnelma.",
  },
  {
    key: "freedom",
    label: "Yrittäjien vapaus",
    tone: "meter-freedom",
    description: "Verotus, sääntely ja päätösten ennakoitavuus yritysten näkökulmasta.",
  },
  {
    key: "externalSecurity",
    label: "Ulkoinen turvallisuus",
    tone: "meter-external-security",
    description: "Puolustuskyky, pelote ja kyky toimia vaikeassa turvallisuusympäristössä.",
  },
  {
    key: "internalSecurity",
    label: "Sisäinen turvallisuus",
    tone: "meter-internal-security",
    description: "Poliisi, rajat, rikosprosessit ja arjen järjestys.",
  },
  {
    key: "justice",
    label: "Oikeuslaitos",
    tone: "meter-justice",
    description: "Käsittelyajat, oikeusturva ja koko oikeusketjun toimintakyky.",
  },
  {
    key: "education",
    label: "Koulutus",
    tone: "meter-education",
    description: "Osaamispohja, korkeakoulutus ja kyky vastata työmarkkinan tarpeisiin.",
  },
  {
    key: "resilience",
    label: "Huoltovarmuus",
    tone: "meter-resilience",
    description: "Energia, logistiikka, toimitusketjut ja kriisinkestävyys.",
  },
  {
    key: "regionalVitality",
    label: "Alueellinen elinvoima",
    tone: "meter-regional-vitality",
    description: "Pysyvätkö työ, palvelut ja investoinnit elossa koko Suomessa.",
  },
];

const hiddenBase = {
  fiscalSpace: 42,
  debtSustainability: 38,
  serviceCapacity: 50,
  socialFloor: 52,
  targetingQuality: 44,
  growthPotential: 43,
  entrepreneurClimate: 46,
  technologyReadiness: 47,
  transitionCapacity: 43,
  publicSectorProductivity: 41,
  digitalTrust: 48,
  externalSecurityCapacity: 59,
  internalSecurityCapacity: 55,
  justiceCapacity: 49,
  educationCapital: 54,
  resilienceCapacity: 53,
  regionalVitality: 49,
  equity: 52,
  implementationCapacity: 57,
  budgetExecution: 62,
  reformPressure: 24,
  roleClarity: 50,
  priorityFit: 50,
};

const hiddenDimensionMeta = [
  { key: "fiscalSpace", label: "Fiskaalinen liikkumatila" },
  { key: "debtSustainability", label: "Velkakestävyys" },
  { key: "serviceCapacity", label: "Palvelukyky" },
  { key: "socialFloor", label: "Heikoimpien turva" },
  { key: "targetingQuality", label: "Kohdentamisen laatu" },
  { key: "growthPotential", label: "Kasvupotentiaali" },
  { key: "entrepreneurClimate", label: "Yrittämisen ilmasto" },
  { key: "technologyReadiness", label: "Teknologinen valmius" },
  { key: "transitionCapacity", label: "Siirtymäkyky" },
  { key: "publicSectorProductivity", label: "Julkisen sektorin tuottavuus" },
  { key: "digitalTrust", label: "Digitaalinen luottamus" },
  { key: "externalSecurityCapacity", label: "Ulkoisen turvallisuuden kapasiteetti" },
  { key: "internalSecurityCapacity", label: "Sisäisen turvallisuuden kapasiteetti" },
  { key: "justiceCapacity", label: "Oikeuslaitoksen kapasiteetti" },
  { key: "educationCapital", label: "Koulutuspääoma" },
  { key: "resilienceCapacity", label: "Huoltovarmuuden kapasiteetti" },
  { key: "regionalVitality", label: "Alueellinen elinvoima" },
  { key: "equity", label: "Jakovaikutusten tasapaino" },
  { key: "implementationCapacity", label: "Toimeenpanokyky" },
  { key: "budgetExecution", label: "Budjetin toteutuvuus" },
  { key: "reformPressure", label: "Reformipaine" },
  { key: "roleClarity", label: "Valtion roolin selkeys" },
  { key: "priorityFit", label: "Prioriteettien johdonmukaisuus" },
];

const hiddenLabelMap = Object.fromEntries(
  hiddenDimensionMeta.map((dimension) => [dimension.key, dimension.label]),
);

const backgroundPressureMeta = [
  { key: "fiscalSpace", delta: -1.2 },
  { key: "debtSustainability", delta: -1.4 },
  { key: "serviceCapacity", delta: -0.8 },
  { key: "socialFloor", delta: -0.4 },
  { key: "targetingQuality", delta: -0.3 },
  { key: "growthPotential", delta: -0.2 },
  { key: "technologyReadiness", delta: -0.3 },
  { key: "transitionCapacity", delta: -0.4 },
  { key: "publicSectorProductivity", delta: -0.3 },
  { key: "digitalTrust", delta: -0.2 },
  { key: "externalSecurityCapacity", delta: -0.6 },
  { key: "internalSecurityCapacity", delta: -0.2 },
  { key: "justiceCapacity", delta: -0.4 },
  { key: "educationCapital", delta: -0.4 },
  { key: "resilienceCapacity", delta: -0.5 },
  { key: "regionalVitality", delta: -0.4 },
  { key: "equity", delta: -0.7 },
  { key: "budgetExecution", delta: 1.2 },
  { key: "reformPressure", delta: -1.3 },
  { key: "roleClarity", delta: -0.3 },
  { key: "priorityFit", delta: -0.4 },
];

const horizonMeta = [
  {
    id: "year",
    label: "Vuosi",
    weight: 0.25,
    pressureScale: 1,
    description: "Ensimmäinen budjettivuosi painottaa välittömiä vaikutuksia velkaan, palveluihin ja toteutukseen.",
  },
  {
    id: "term",
    label: "Vaalikausi",
    weight: 0.45,
    pressureScale: 2.2,
    description: "Vaalikaudella osa uudistuksista ehtii jo näkyä, mutta myös julkisen talouden ja palvelujen paine jatkuu.",
  },
  {
    id: "postTerm",
    label: "Ylivaalikausi",
    weight: 0.3,
    pressureScale: 3.4,
    description: "Ylivaalikaudella näkyvät erityisesti rakenteelliset vaikutukset kasvuun, koulutukseen ja velkakestävyyteen.",
  },
];

const structuralRealisationShares = {
  fiscalSpace: { term: 0.65, postTerm: 0.35 },
  debtSustainability: { term: 0.45, postTerm: 0.55 },
  serviceCapacity: { term: 0.55, postTerm: 0.45 },
  socialFloor: { term: 0.6, postTerm: 0.4 },
  targetingQuality: { term: 0.55, postTerm: 0.45 },
  growthPotential: { term: 0.4, postTerm: 0.6 },
  entrepreneurClimate: { term: 0.6, postTerm: 0.4 },
  technologyReadiness: { term: 0.45, postTerm: 0.55 },
  transitionCapacity: { term: 0.6, postTerm: 0.4 },
  publicSectorProductivity: { term: 0.5, postTerm: 0.5 },
  digitalTrust: { term: 0.55, postTerm: 0.45 },
  externalSecurityCapacity: { term: 0.55, postTerm: 0.45 },
  internalSecurityCapacity: { term: 0.6, postTerm: 0.4 },
  justiceCapacity: { term: 0.6, postTerm: 0.4 },
  educationCapital: { term: 0.35, postTerm: 0.65 },
  resilienceCapacity: { term: 0.55, postTerm: 0.45 },
  regionalVitality: { term: 0.5, postTerm: 0.5 },
  equity: { term: 0.5, postTerm: 0.5 },
  implementationCapacity: { term: 0.6, postTerm: 0.4 },
  budgetExecution: { term: 0.8, postTerm: 0.2 },
  reformPressure: { term: 0.5, postTerm: 0.5 },
};

const visibleMetricFormulaMeta = [
  {
    key: "debt",
    label: "Velan kehitys",
    formula:
      "round(fiscalSpace * 0.38 + debtSustainability * 0.33 + publicSectorProductivity * 0.08 + budgetExecution * 0.08 + priorityFit * 0.07 + roleClarity * 0.04 + growthPotential * 0.05 + technologyReadiness * 0.03 - max(0, reformPressure - implementationCapacity) * 0.18)",
  },
  {
    key: "growth",
    label: "Talouskasvu",
    formula:
      "round(growthPotential * 0.34 + entrepreneurClimate * 0.2 + educationCapital * 0.12 + regionalVitality * 0.08 + resilienceCapacity * 0.04 + technologyReadiness * 0.12 + publicSectorProductivity * 0.05 + transitionCapacity * 0.05)",
  },
  {
    key: "wellbeing",
    label: "Kansalaisten hyvinvointi",
    formula:
      "round(serviceCapacity * 0.24 + equity * 0.16 + socialFloor * 0.18 + targetingQuality * 0.14 + educationCapital * 0.08 + internalSecurityCapacity * 0.06 + justiceCapacity * 0.05 + regionalVitality * 0.04 + transitionCapacity * 0.05)",
  },
  {
    key: "freedom",
    label: "Yrittäjien vapaus",
    formula:
      "round(entrepreneurClimate * 0.55 + growthPotential * 0.1 + budgetExecution * 0.08 + implementationCapacity * 0.04 + technologyReadiness * 0.1 + digitalTrust * 0.08 + targetingQuality * 0.05)",
  },
  {
    key: "externalSecurity",
    label: "Ulkoinen turvallisuus",
    formula: "round(externalSecurityCapacity * 0.7 + resilienceCapacity * 0.3)",
  },
  {
    key: "internalSecurity",
    label: "Sisäinen turvallisuus",
    formula: "round(internalSecurityCapacity * 0.45 + justiceCapacity * 0.35 + serviceCapacity * 0.2)",
  },
  {
    key: "justice",
    label: "Oikeuslaitos",
    formula: "round(justiceCapacity * 0.68 + implementationCapacity * 0.12 + equity * 0.08 + digitalTrust * 0.12)",
  },
  {
    key: "education",
    label: "Koulutus",
    formula: "round(educationCapital * 0.58 + growthPotential * 0.14 + regionalVitality * 0.08 + technologyReadiness * 0.1 + transitionCapacity * 0.1)",
  },
  {
    key: "resilience",
    label: "Huoltovarmuus",
    formula: "round(resilienceCapacity * 0.55 + externalSecurityCapacity * 0.18 + publicSectorProductivity * 0.12 + budgetExecution * 0.15)",
  },
  {
    key: "regionalVitality",
    label: "Alueellinen elinvoima",
    formula: "round(regionalVitality * 0.42 + serviceCapacity * 0.14 + growthPotential * 0.08 + educationCapital * 0.12 + socialFloor * 0.08 + targetingQuality * 0.08 + transitionCapacity * 0.08)",
  },
];

const modelReadoutFormulaMeta = [
  {
    id: "budgetExecution",
    label: "Budjetin toteutuvuus",
    formula: "round(budgetExecution)",
  },
  {
    id: "reformCapacity",
    label: "Uudistusvara",
    formula: "clamp(round(implementationCapacity - reformPressure + 50))",
  },
  {
    id: "servicePressure",
    label: "Palvelut",
    formula: "clamp(round(100 - (serviceCapacity * 0.6 + socialFloor * 0.2 + targetingQuality * 0.1 + publicSectorProductivity * 0.1)))",
  },
  {
    id: "governanceFit",
    label: "Prioriteettien johdonmukaisuus",
    formula: "clamp(round(roleClarity * 0.4 + priorityFit * 0.6))",
  },
];

const hiddenKeys = Object.keys(hiddenBase);
const metricKeys = metricMeta.map((metric) => metric.key);
const fiscalKeys = new Set(["fiscalSpace", "debtSustainability"]);
const visibleMetricLimit = 35;
const visibleReadoutLimit = 60;

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));
const round = (value) => Math.round(value);

function hiddenImpact(overrides = {}) {
  return Object.fromEntries(hiddenKeys.map((key) => [key, overrides[key] ?? 0]));
}

function mergeHiddenImpacts(...effectSets) {
  return Object.fromEntries(
    hiddenKeys.map((key) => [
      key,
      effectSets.reduce((sum, effectSet) => sum + (effectSet?.[key] ?? 0), 0),
    ]),
  );
}

const maxSelectedPriorities = 4;
const topPriorityCount = 2;

const roleOptions = [
  {
    id: "producer-state",
    title: "Tuottava valtio",
    copy:
      "Valtio tuottaa ja järjestää paljon itse. Palvelujen jatkuvuus on tärkeämpää kuin tuotantotavan joustavuus.",
    hiddenLiberal: 1,
    baseImpact: hiddenImpact({
      serviceCapacity: 4,
      socialFloor: 2,
      equity: 1,
      entrepreneurClimate: -3,
      publicSectorProductivity: -1,
      implementationCapacity: -1,
      roleClarity: 4,
    }),
    supportWeights: {
      serviceCapacity: 1.2,
      socialFloor: 1,
      equity: 0.8,
      internalSecurityCapacity: 0.5,
      justiceCapacity: 0.4,
    },
  },
  {
    id: "steering-state",
    title: "Järjestävä valtio",
    copy:
      "Valtio vastaa palveluista ja oikeuksista, mutta voi käyttää eri tuotantotapoja, kilpailua ja tulosohjausta.",
    hiddenLiberal: 7,
    baseImpact: hiddenImpact({
      serviceCapacity: 2,
      targetingQuality: 2,
      publicSectorProductivity: 2,
      implementationCapacity: 2,
      budgetExecution: 1,
      roleClarity: 4,
    }),
    supportWeights: {
      serviceCapacity: 0.8,
      targetingQuality: 1,
      publicSectorProductivity: 1,
      budgetExecution: 0.8,
      implementationCapacity: 0.8,
      justiceCapacity: 0.4,
    },
  },
  {
    id: "guaranteeing-state",
    title: "Takaava valtio",
    copy:
      "Valtio takaa perusturvan, oikeudet ja vähimmäistason, mutta ei pidä itse tuottaa kaikkea samalla tavalla kaikkialla.",
    hiddenLiberal: 10,
    baseImpact: hiddenImpact({
      socialFloor: 4,
      targetingQuality: 4,
      equity: 3,
      serviceCapacity: 1,
      entrepreneurClimate: 1,
      roleClarity: 4,
    }),
    supportWeights: {
      socialFloor: 1.2,
      targetingQuality: 1.2,
      equity: 1,
      serviceCapacity: 0.6,
      entrepreneurClimate: 0.4,
      digitalTrust: 0.4,
    },
  },
  {
    id: "enabling-state",
    title: "Mahdollistava valtio",
    copy:
      "Valtio keskittyy ydintehtäviin, poistaa esteitä ja antaa enemmän tilaa ihmisille, yrityksille ja yhteisöille.",
    hiddenLiberal: 18,
    baseImpact: hiddenImpact({
      entrepreneurClimate: 4,
      growthPotential: 2,
      publicSectorProductivity: 2,
      technologyReadiness: 2,
      serviceCapacity: -1,
      equity: -1,
      roleClarity: 4,
    }),
    supportWeights: {
      entrepreneurClimate: 1.2,
      growthPotential: 1,
      publicSectorProductivity: 0.8,
      technologyReadiness: 0.8,
      fiscalSpace: 0.6,
      debtSustainability: 0.6,
    },
  },
];

const priorityOptions = [
  {
    id: "fiscal-stability",
    title: "Valtiontalouden vakaus",
    copy: "Velka, alijäämä ja kriisinkestävä julkinen talous ovat politiikan tärkein reunaehto.",
    hiddenLiberal: 4,
    baseImpact: hiddenImpact({
      fiscalSpace: 2,
      debtSustainability: 3,
      budgetExecution: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      fiscalSpace: 1.3,
      debtSustainability: 1.3,
      budgetExecution: 0.8,
      publicSectorProductivity: 0.6,
    },
  },
  {
    id: "external-security",
    title: "Ulkoinen turvallisuus ja puolustus",
    copy: "Valtion ykköstehtävä on turvata maa, pelote ja varautuminen vaikeassa turvallisuusympäristössä.",
    hiddenLiberal: 2,
    baseImpact: hiddenImpact({
      externalSecurityCapacity: 3,
      resilienceCapacity: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      externalSecurityCapacity: 1.3,
      resilienceCapacity: 1,
      fiscalSpace: 0.3,
    },
  },
  {
    id: "rule-of-law",
    title: "Sisäinen turvallisuus ja oikeusvaltio",
    copy: "Poliisi, tuomioistuimet, rajat ja oikeusturva ovat valtion kovaa ydintä.",
    hiddenLiberal: 3,
    baseImpact: hiddenImpact({
      internalSecurityCapacity: 2,
      justiceCapacity: 2,
      digitalTrust: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      internalSecurityCapacity: 1.1,
      justiceCapacity: 1.1,
      digitalTrust: 0.6,
      serviceCapacity: 0.3,
    },
  },
  {
    id: "social-floor",
    title: "Heikoimpien turva",
    copy: "Valtion on pidettävä huolta siitä, että kukaan ei putoa turvaverkon läpi muutosten keskellä.",
    hiddenLiberal: 2,
    baseImpact: hiddenImpact({
      socialFloor: 3,
      targetingQuality: 3,
      equity: 2,
      priorityFit: 2,
    }),
    supportWeights: {
      socialFloor: 1.3,
      targetingQuality: 1.1,
      equity: 1,
      transitionCapacity: 0.5,
    },
  },
  {
    id: "service-access",
    title: "Toimivat sote- ja peruspalvelut",
    copy: "Arjen tärkein mittari on se, pääseekö ihminen palveluun ajoissa ja toimiiko perusarki.",
    hiddenLiberal: 1,
    baseImpact: hiddenImpact({
      serviceCapacity: 3,
      publicSectorProductivity: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      serviceCapacity: 1.2,
      publicSectorProductivity: 0.7,
      socialFloor: 0.6,
      targetingQuality: 0.5,
    },
  },
  {
    id: "education-science",
    title: "Koulutus, tiede ja osaaminen",
    copy: "Valtio rakentaa pitkää kasvua osaamisella, tutkimuksella ja kyvyllä uudistua.",
    hiddenLiberal: 3,
    baseImpact: hiddenImpact({
      educationCapital: 3,
      technologyReadiness: 1,
      growthPotential: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      educationCapital: 1.2,
      technologyReadiness: 0.8,
      growthPotential: 0.8,
      transitionCapacity: 0.6,
    },
  },
  {
    id: "work-enterprise",
    title: "Työ, yrittäminen ja investoinnit",
    copy: "Valtion tärkeä tehtävä on varmistaa, että työnteko, yrittäminen ja investoinnit kannattavat Suomessa.",
    hiddenLiberal: 5,
    baseImpact: hiddenImpact({
      entrepreneurClimate: 3,
      growthPotential: 2,
      technologyReadiness: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      entrepreneurClimate: 1.3,
      growthPotential: 1.1,
      technologyReadiness: 0.8,
      publicSectorProductivity: 0.4,
      regionalVitality: 0.4,
    },
  },
  {
    id: "resilience-infra",
    title: "Huoltovarmuus, energia ja infra",
    copy: "Valtion pitää pitää yhteiskunta käynnissä kriiseissäkin: energia, data, logistiikka ja infra ovat osa ydintä.",
    hiddenLiberal: 3,
    baseImpact: hiddenImpact({
      resilienceCapacity: 3,
      publicSectorProductivity: 1,
      regionalVitality: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      resilienceCapacity: 1.2,
      publicSectorProductivity: 0.7,
      regionalVitality: 0.6,
      externalSecurityCapacity: 0.4,
    },
  },
  {
    id: "regional-vitality",
    title: "Alueellinen elinvoima koko Suomessa",
    copy: "Valtion pitää huolehtia, ettei maa jakaudu pysyvästi menestyviin keskuksiin ja kuihtuviin alueisiin.",
    hiddenLiberal: 1,
    baseImpact: hiddenImpact({
      regionalVitality: 3,
      serviceCapacity: 1,
      educationCapital: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      regionalVitality: 1.3,
      serviceCapacity: 0.8,
      educationCapital: 0.5,
      socialFloor: 0.4,
    },
  },
  {
    id: "individual-freedom",
    title: "Yksilönvapaus ja valinnanmahdollisuudet",
    copy: "Valtion tehtävä ei ole ratkaista kaikkea itse, vaan myös antaa ihmisille enemmän valtaa päättää omasta elämästään.",
    hiddenLiberal: 5,
    baseImpact: hiddenImpact({
      entrepreneurClimate: 2,
      digitalTrust: 2,
      targetingQuality: 1,
      priorityFit: 2,
    }),
    supportWeights: {
      entrepreneurClimate: 0.9,
      digitalTrust: 1.1,
      targetingQuality: 0.7,
      technologyReadiness: 0.6,
      equity: 0.4,
    },
  },
];

function splitStructuralImpact(structural) {
  const term = {};
  const postTerm = {};

  hiddenKeys.forEach((key) => {
    const delta = structural[key] ?? 0;

    if (!delta) {
      term[key] = 0;
      postTerm[key] = 0;
      return;
    }

    const shares = structuralRealisationShares[key] ?? { term: 0.5, postTerm: 0.5 };
    term[key] = delta * shares.term;
    postTerm[key] = delta * shares.postTerm;
  });

  return {
    term: hiddenImpact(term),
    postTerm: hiddenImpact(postTerm),
  };
}

function buildChoiceHorizonEffects(choice) {
  const splitStructural = splitStructuralImpact(choice.structural);

  return {
    year: hiddenImpact(choice.immediate),
    term: mergeHiddenImpacts(choice.immediate, splitStructural.term),
    postTerm: mergeHiddenImpacts(choice.immediate, choice.structural),
  };
}

const decisions = [
  {
    id: "income-tax",
    topic: "Työn verotus",
    title: "Mitä teet työn verotukselle?",
    summary:
      "Suomi yrittää vahvistaa kasvua samaan aikaan kun velka ja palvelupaine kiristyvät. Työn verotus on yksi näkyvimmistä keinoista vaikuttaa kannusteisiin, mutta se myös maksaa nopeasti budjetissa.",
    framing:
      "Mallissa tämä päätös osuu erityisesti kasvuun, yrittäjien vapauteen, jakovaikutuksiin ja velkakestävyyteen.",
    situation:
      "OECD Taxing Wages 2025:n mukaan Suomen verokiila oli keskituloiselle yksinasuvalle palkansaajalle 41,9 % vuonna 2024, kun OECD-keskiarvo oli 34,9 %. OECD:n Economic Survey Finland 2025 taas arvioi, että Suomen kasvu laahaa yhä pohjoismaisia verrokkeja jäljessä.",
    sources: "OECD Taxing Wages 2025; OECD Economic Surveys: Finland 2025",
    choices: [
      {
        id: "broad-cut",
        title: "Kevennä työn verotusta laajasti",
        copy:
          "Työn kannusteet vahvistuvat nopeasti, mutta veronkevennys repii heti aukon budjettiin ja tekee myöhemmistä palveluvalinnoista vaikeampia.",
        immediate: hiddenImpact({
          fiscalSpace: -7,
          debtSustainability: -6,
          entrepreneurClimate: 8,
          equity: -5,
          serviceCapacity: -1,
        }),
        structural: hiddenImpact({
          growthPotential: 6,
          entrepreneurClimate: 6,
          regionalVitality: 2,
          equity: -2,
        }),
        reformLoad: 1,
        hiddenLiberal: 14,
      },
      {
        id: "targeted-cut",
        title: "Kohdenna kevennys pieni- ja keskituloisille",
        copy:
          "Ratkaisu helpottaa arkea ja parantaa työn kannusteita, mutta liikkumatila julkisessa taloudessa heikkenee silti näkyvästi.",
        immediate: hiddenImpact({
          fiscalSpace: -4,
          debtSustainability: -3,
          entrepreneurClimate: 4,
          equity: 1,
          regionalVitality: 1,
        }),
        structural: hiddenImpact({
          growthPotential: 5,
          entrepreneurClimate: 3,
          regionalVitality: 1,
          equity: 1,
        }),
        reformLoad: 1,
        hiddenLiberal: 9,
      },
      {
        id: "hold-line",
        title: "Pidä verotus ennallaan ja suojaa budjettia",
        copy:
          "Julkinen talous saa hengähdystauon, mutta työn, investointien ja osaajien kannusteet jäävät paikoilleen juuri silloin kun kasvu laahaa.",
        immediate: hiddenImpact({
          fiscalSpace: 4,
          debtSustainability: 3,
          entrepreneurClimate: -3,
          equity: 1,
          serviceCapacity: 1,
        }),
        structural: hiddenImpact({
          growthPotential: -3,
          entrepreneurClimate: -3,
          serviceCapacity: 1,
        }),
        reformLoad: 0,
        hiddenLiberal: 2,
      },
      {
        id: "tax-shift-reform",
        title: "Leikkaa työn veroa ja rahoita se veropohjan isolla remontilla",
        copy:
          "Tämä on selvä rakenneuudistus: työn veroja kevennetään, poikkeuksia karsitaan ja veropohjaa levennetään. Siirtymä sattuu, mutta pitkän aikavälin vaikutus voi olla vahvin.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          entrepreneurClimate: 5,
          equity: -5,
          serviceCapacity: -1,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 3,
          growthPotential: 8,
          entrepreneurClimate: 6,
          regionalVitality: 2,
          equity: -2,
        }),
        reformLoad: 5,
        hiddenLiberal: 22,
      },
    ],
  },
  {
    id: "social-security",
    topic: "Sosiaaliturva",
    title: "Miten uudistat sosiaaliturvaa ja työn kannusteita?",
    summary:
      "Työllisyys, julkinen talous ja hyvinvointi kohtaavat sosiaaliturvassa. Samat muutokset voivat vahvistaa työn vastaanottamisen kannusteita, mutta samalla lisätä painetta heikoimmassa asemassa oleville.",
    framing:
      "Mallissa tämä päätös vaikuttaa erityisesti kasvuun, hyvinvointiin, alueelliseen elinvoimaan ja julkisen talouden kestoon.",
    situation:
      "Euroopan komission 4.6.2025 maaraportin mukaan Suomen työllisyysaste laski 77,0 %:iin vuonna 2024 ja komissio suosittaa uudistamaan sosiaaliturvaa niin, että työnteon kannusteet paranevat samalla kun haavoittuvat ryhmät suojataan. OECD nostaa saman teeman keskeiseksi osaksi julkisen talouden vakauttamista.",
    sources: "Euroopan komissio 4.6.2025; OECD Economic Surveys: Finland 2025",
    choices: [
      {
        id: "tighten-benefits",
        title: "Kiristä etuuksia ja vahvista työn vastaanoton kannusteita",
        copy:
          "Työllisyyskannusteet vahvistuvat nopeasti, mutta uudistus osuu heti niihin kotitalouksiin, joilla puskurit ovat jo valmiiksi ohuet.",
        immediate: hiddenImpact({
          fiscalSpace: 4,
          debtSustainability: 3,
          entrepreneurClimate: 2,
          equity: -6,
          regionalVitality: -2,
          budgetExecution: -3,
          serviceCapacity: -1,
        }),
        structural: hiddenImpact({
          growthPotential: 7,
          entrepreneurClimate: 4,
          equity: -2,
          regionalVitality: 1,
        }),
        reformLoad: 4,
        hiddenLiberal: 12,
      },
      {
        id: "balanced-reform",
        title: "Tee kannustavampi mutta pehmeämpi uudistus",
        copy:
          "Etuuksia yksinkertaistetaan ja työn vastaanottamista helpotetaan, mutta säästö ja kannustevahvistus jäävät rajallisemmiksi kuin kovemmassa mallissa.",
        immediate: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 1,
          entrepreneurClimate: 2,
          equity: -2,
          budgetExecution: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 2,
          growthPotential: 5,
          entrepreneurClimate: 3,
          equity: 1,
          regionalVitality: 1,
          socialFloor: 1,
          targetingQuality: 3,
          publicSectorProductivity: 1,
        }),
        reformLoad: 3,
        hiddenLiberal: 8,
      },
      {
        id: "protect-model",
        title: "Suojaa nykyinen etuusmalli",
        copy:
          "Ratkaisu pehmentää välittömiä sosiaalisia riskejä, mutta jättää työllisyys- ja julkistalouden ongelmia selvemmin seuraaville vuosille.",
        immediate: hiddenImpact({
          fiscalSpace: -4,
          debtSustainability: -3,
          equity: 5,
          serviceCapacity: 2,
          regionalVitality: 2,
        }),
        structural: hiddenImpact({
          growthPotential: -4,
          entrepreneurClimate: -3,
          equity: 2,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "unified-security-reform",
        title: "Yhdistä etuuksia ja rakenna yhtenäisempi kannustava perusturva",
        copy:
          "Laajempi reformi yrittää korjata sekä byrokratiaa että kannustinloukkuja. Se on poliittisesti raskas ja toimeenpanoltaan vaikea, mutta onnistuessaan vaikutus on muita malleja suurempi.",
        immediate: hiddenImpact({
          fiscalSpace: -1,
          debtSustainability: -1,
          entrepreneurClimate: 4,
          equity: -1,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 4,
          debtSustainability: 6,
          growthPotential: 8,
          entrepreneurClimate: 5,
          equity: 3,
          regionalVitality: 2,
          budgetExecution: 2,
          socialFloor: 2,
          targetingQuality: 4,
          publicSectorProductivity: 1,
        }),
        reformLoad: 6,
        hiddenLiberal: 22,
      },
    ],
  },
  {
    id: "vat",
    topic: "ALV ja veropohja",
    title: "Mitä teet ALV:lle ja kulutuksen verotukselle?",
    summary:
      "Kulutusvero on budjetin kannalta tehokas, mutta poliittisesti hankala väline. Samalla kysymys kytkeytyy siihen, rahoitetaanko velan hillintää laajalla veropohjalla vai velalla.",
    framing:
      "Mallissa tämä päätös vaikuttaa heti budjettitasapainoon, mutta myös hyvinvointiin ja kulutuskysyntään.",
    situation:
      "OECD Economic Survey Finland 2025 käyttää havainnollisena uudistuksena alennetun 14 % ALV-kannan nostamista yleiseen 25,5 %:iin useimmissa tuoteryhmissä. OECD:n mukaan lisäsopeutusta tarvitaan edelleen, jotta velka saadaan uskottavasti hallintaan.",
    sources: "OECD Economic Surveys: Finland 2025",
    choices: [
      {
        id: "broaden-base",
        title: "Laajenna veropohjaa ja kompensoi pienituloisille",
        copy:
          "Budjetti vahvistuu nopeasti, mutta hintapaine osuu silti kotitalouksiin ennen kuin kompensaatioiden teho on täysin uskottava.",
        immediate: hiddenImpact({
          fiscalSpace: 6,
          debtSustainability: 5,
          equity: -3,
          budgetExecution: 1,
        }),
        structural: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 2,
          entrepreneurClimate: 1,
          equity: 1,
          growthPotential: -1,
        }),
        reformLoad: 1,
        hiddenLiberal: 10,
      },
      {
        id: "small-rise",
        title: "Nosta ALV:tä hieman ilman isoa rakennemuutosta",
        copy:
          "Ratkaisu tuo lisätuloja nopeasti, mutta jättää verojärjestelmän rakenteen epäselväksi ja heikentää ostovoimaa ilman kunnollista reformia.",
        immediate: hiddenImpact({
          fiscalSpace: 4,
          debtSustainability: 3,
          equity: -3,
        }),
        structural: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 1,
          growthPotential: -2,
          equity: -1,
        }),
        reformLoad: 0,
        hiddenLiberal: 5,
      },
      {
        id: "keep-vat",
        title: "Pidä ALV ennallaan ja ota enemmän velkaa",
        copy:
          "Kotitaloudet välttyvät välittömältä hintapaineelta, mutta budjettia paikataan selvästi lisääntyvällä velalla.",
        immediate: hiddenImpact({
          fiscalSpace: -6,
          debtSustainability: -5,
          equity: 2,
          serviceCapacity: 1,
        }),
        structural: hiddenImpact({
          debtSustainability: -3,
          growthPotential: -1,
        }),
        reformLoad: 0,
        hiddenLiberal: 0,
      },
      {
        id: "full-tax-shift",
        title: "Tee laaja verosiirto kulutukseen ja siivoa poikkeuksia kovalla kädellä",
        copy:
          "Tämä on selvä markkinaliberaali veroremontti: työn verotusta helpotetaan ja kulutuksen verotusta yhtenäistetään. Lyhyellä aikavälillä se tuntuu kuluttajissa ja politiikassa kovaa.",
        immediate: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 1,
          entrepreneurClimate: 4,
          equity: -5,
          budgetExecution: -3,
          implementationCapacity: -1,
        }),
        structural: hiddenImpact({
          fiscalSpace: 5,
          debtSustainability: 6,
          growthPotential: 5,
          entrepreneurClimate: 6,
          equity: -1,
          regionalVitality: 1,
        }),
        reformLoad: 5,
        hiddenLiberal: 21,
      },
    ],
  },
  {
    id: "business-subsidies",
    topic: "Yritystuet",
    title: "Mitä teet yritystuilla?",
    summary:
      "Yritystuet ovat klassinen poliittinen rajapinta. Ne voivat auttaa alueita ja toimialoja lyhyellä aikavälillä, mutta ne voivat myös sitoa julkista rahaa heikosti tuottaviin rakenteisiin.",
    framing:
      "Mallissa tämä päätös osuu kasvuun, yrittäjien vapauteen, aluepolitiikkaan ja budjetin tehokkuuteen.",
    situation:
      "OECD Economic Survey Finland 2025 arvioi, että yritystuista osa ei vahvista tuottavuutta ja niiden karsiminen voisi parantaa julkista taloutta. Euroopan komissio korostaa samalla, että Suomen ongelma ei ole vain tutkimuspanosten määrä vaan innovaatioiden kaupallistaminen ja skaalaus.",
    sources: "OECD Economic Surveys: Finland 2025; Euroopan komissio 4.6.2025",
    choices: [
      {
        id: "cut-broadly",
        title: "Leikkaa tuet, jotka eivät nosta tuottavuutta",
        copy:
          "Säästöjä syntyy ja markkina vääristyy vähemmän, mutta osa alueista ja toimialoista ottaa iskun heti vastaan.",
        immediate: hiddenImpact({
          fiscalSpace: 3,
          debtSustainability: 3,
          entrepreneurClimate: 4,
          regionalVitality: -4,
          resilienceCapacity: -2,
          budgetExecution: -3,
          equity: -1,
        }),
        structural: hiddenImpact({
          fiscalSpace: 3,
          debtSustainability: 3,
          growthPotential: 6,
          entrepreneurClimate: 6,
          regionalVitality: -1,
        }),
        reformLoad: 2,
        hiddenLiberal: 13,
      },
      {
        id: "retarget-rdi",
        title: "Karsi tehottomat tuet ja suuntaa osaaminen- ja TKI-kohteisiin",
        copy:
          "Ratkaisu yrittää yhdistää tuottavuuden ja teollisen uudistumisen, mutta samalla säästö jää maltilliseksi ja aluekysymys jää osin auki.",
        immediate: hiddenImpact({
          fiscalSpace: 0,
          debtSustainability: 0,
          entrepreneurClimate: 2,
          educationCapital: 2,
          resilienceCapacity: 1,
          regionalVitality: -1,
          budgetExecution: -2,
        }),
        structural: hiddenImpact({
          growthPotential: 7,
          entrepreneurClimate: 3,
          educationCapital: 4,
          resilienceCapacity: 2,
          regionalVitality: 1,
        }),
        reformLoad: 3,
        hiddenLiberal: 9,
      },
      {
        id: "keep-supports",
        title: "Säilytä nykyinen tukitaso",
        copy:
          "Tällä vältetään nopea shokki aloille ja alueille, mutta budjettiin jää vähemmän liikkumatilaa ja tuottavuusongelmat jäävät eloon.",
        immediate: hiddenImpact({
          fiscalSpace: -4,
          debtSustainability: -3,
          regionalVitality: 4,
          resilienceCapacity: 2,
          equity: 1,
          entrepreneurClimate: -2,
        }),
        structural: hiddenImpact({
          growthPotential: -3,
          entrepreneurClimate: -4,
          regionalVitality: 1,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "sunset-supports",
        title: "Aja alas iso osa tuista ja korvaa ne kilpailua avaavilla reformeilla",
        copy:
          "Tämä on kova rakennemuutos: yritystukia leikataan tuntuvasti, niiden tilalle ei luvata uutta rahaa vaan enemmän kilpailua, avoimuutta ja markkinakuria.",
        immediate: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 2,
          entrepreneurClimate: 5,
          regionalVitality: -5,
          resilienceCapacity: -2,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 5,
          debtSustainability: 5,
          growthPotential: 10,
          entrepreneurClimate: 8,
          regionalVitality: 1,
          resilienceCapacity: 1,
          educationCapital: 2,
        }),
        reformLoad: 5,
        hiddenLiberal: 22,
      },
    ],
  },
  {
    id: "county-finance",
    topic: "Kunnat ja hyvinvointialueet",
    title: "Miten rahoitat kunnat ja hyvinvointialueet?",
    summary:
      "Tässä kohtaa Suomen budjetin suurin poliittinen jännite näkyy kirkkaasti: jos rahaa kiristetään liikaa, palvelut heikkenevät. Jos rahaa lisätään liikaa, velka jatkaa nousuaan.",
    framing:
      "Mallissa tämä päätös osuu suoraan velkaan, palvelukykyyn, alueelliseen elinvoimaan ja oikeastaan kaikkiin arjen mittareihin.",
    situation:
      "Talouspolitiikan arviointineuvoston 2.2.2026 raportin mukaan vain harva hyvinvointialue näyttäisi pystyvän kattamaan alijäämänsä alkuperäisessä aikataulussa ilman suuria lisäsäästöjä vuonna 2026. OECD:n vuoden 2025 surveyssa VM:n arvioidaan pitävän kaikkia hyvinvointialueita riskissä joutua arviointimenettelyyn.",
    sources: "Talouspolitiikan arviointineuvosto 2.2.2026; OECD Economic Surveys: Finland 2025",
    choices: [
      {
        id: "tighten-local-responsibility",
        title: "Kiristä rahoitusta ja lisää paikallista vastuuta",
        copy:
          "Velkapaine helpottaa nopeasti, mutta heikomman veropohjan alueet joutuvat kovaan väliin ja palvelupaine kasvaa näkyvästi.",
        immediate: hiddenImpact({
          fiscalSpace: 7,
          debtSustainability: 6,
          serviceCapacity: -7,
          equity: -5,
          regionalVitality: -5,
          internalSecurityCapacity: -1,
          educationCapital: -2,
        }),
        structural: hiddenImpact({
          growthPotential: 2,
          entrepreneurClimate: 3,
          serviceCapacity: 1,
          regionalVitality: -1,
        }),
        reformLoad: 3,
        hiddenLiberal: 12,
      },
      {
        id: "targeted-steering",
        title: "Tiukempi valtion ohjaus, mutta rahoitus tarpeen mukaan",
        copy:
          "Valtio yrittää pitää budjettikurin käsissä, mutta samalla rahoituksen kohdentaminen tekee mallista entistä monimutkaisemman.",
        immediate: hiddenImpact({
          fiscalSpace: 3,
          debtSustainability: 2,
          serviceCapacity: -2,
          budgetExecution: -2,
          regionalVitality: -1,
        }),
        structural: hiddenImpact({
          serviceCapacity: 4,
          regionalVitality: 1,
          implementationCapacity: 2,
          equity: 1,
        }),
        reformLoad: 2,
        hiddenLiberal: 7,
      },
      {
        id: "patch-deficits",
        title: "Paikkaa alijäämiä ja suojaa palveluja",
        copy:
          "Ratkaisu tuo helpotusta palveluihin ja alueille heti, mutta kasvattaa painetta velkaan ja lykkää vaikeat rakennekysymykset myöhemmäksi.",
        immediate: hiddenImpact({
          fiscalSpace: -6,
          debtSustainability: -5,
          serviceCapacity: 6,
          equity: 4,
          regionalVitality: 5,
          internalSecurityCapacity: 1,
          educationCapital: 2,
        }),
        structural: hiddenImpact({
          growthPotential: -3,
          debtSustainability: -2,
          serviceCapacity: 1,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "structural-county-reform",
        title: "Avaa tuotantoa, sido rahoitus tuloksiin ja tee alueista oikeasti vastuullisempia",
        copy:
          "Laaja rakenneuudistus lupaa pidemmän aikavälin kestävyyttä, mutta siirtymävaiheessa palveluissa, aluepolitiikassa ja toimeenpanossa on paljon poliittista kitkaa.",
        immediate: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 1,
          serviceCapacity: -4,
          equity: -4,
          regionalVitality: -2,
          budgetExecution: -5,
          implementationCapacity: -2,
          entrepreneurClimate: 1,
        }),
        structural: hiddenImpact({
          fiscalSpace: 6,
          debtSustainability: 6,
          serviceCapacity: 6,
          growthPotential: 2,
          entrepreneurClimate: 3,
          regionalVitality: 2,
          internalSecurityCapacity: 1,
          equity: 1,
          budgetExecution: 2,
        }),
        reformLoad: 6,
        hiddenLiberal: 20,
      },
    ],
  },
  {
    id: "sote-reform",
    topic: "Sote-palvelut",
    title: "Miten uudistat sosiaali- ja terveyspalvelujen arkea?",
    summary:
      "Rahoitus ei yksin ratkaise soten ongelmia. Saatavuus, jonot, henkilöstö, digitalisaatio ja johtaminen vaikuttavat kaikki siihen, näkyykö lisäraha oikeasti kansalaiselle asti.",
    framing:
      "Mallissa tämä päätös vaikuttaa voimakkaasti hyvinvointiin, alueisiin, budjetin toteutuvuuteen ja siihen, kuinka nopeasti säästöt realisoituvat.",
    situation:
      "Euroopan komission 4.6.2025 maaraportin mukaan Suomessa täyttymättömät hoidon tarpeet nousivat 8,5 %:iin vuonna 2024, kun EU-keskiarvo oli 2,5 %. Komissio korostaa, että tiukempi talousohjaus, digitaalisten palvelujen laajempi käyttö ja parempi tiedolla johtaminen voivat nostaa tuottavuutta, jos saatavuus ja laatu turvataan.",
    sources: "Euroopan komissio 4.6.2025; EU:n care guarantee -investointikuvaus",
    choices: [
      {
        id: "digital-primary-care",
        title: "Digitalisoi, yhdistä palveluketjuja ja siirrä painoa perustasolle",
        copy:
          "Aluksi tarvitaan investointeja ja muutos väsyttää organisaatiota, mutta onnistuessaan reformi voi parantaa saatavuutta ja hillitä kustannuksia myöhemmin.",
        immediate: hiddenImpact({
          fiscalSpace: -2,
          debtSustainability: -2,
          serviceCapacity: 2,
          equity: 1,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 5,
          debtSustainability: 5,
          serviceCapacity: 7,
          internalSecurityCapacity: 1,
          equity: 3,
          regionalVitality: 1,
        }),
        reformLoad: 4,
        hiddenLiberal: 10,
      },
      {
        id: "temporary-service-push",
        title: "Pura jonoja määräaikaisella lisärahoituksella",
        copy:
          "Ratkaisu näkyy kansalaiselle nopeasti, mutta pysyvä kustannusrakenne ei muutu juuri silloin kun velkapelko kasvaa.",
        immediate: hiddenImpact({
          fiscalSpace: -5,
          debtSustainability: -4,
          serviceCapacity: 6,
          equity: 3,
          internalSecurityCapacity: 1,
        }),
        structural: hiddenImpact({
          serviceCapacity: 2,
          budgetExecution: 1,
        }),
        reformLoad: 1,
        hiddenLiberal: 2,
      },
      {
        id: "freeze-and-fees",
        title: "Jäädytä menot ja siirrä painetta maksu- ja omavastuulinjalle",
        copy:
          "Budjettia helpotetaan nopeasti, mutta riski hoitojonojen, alue-erojen ja eriarvoisuuden kasvuun on erittäin korkea.",
        immediate: hiddenImpact({
          fiscalSpace: 5,
          debtSustainability: 4,
          serviceCapacity: -6,
          equity: -7,
          internalSecurityCapacity: -1,
          regionalVitality: -1,
        }),
        structural: hiddenImpact({
          serviceCapacity: -4,
          growthPotential: -1,
          regionalVitality: -2,
        }),
        reformLoad: 1,
        hiddenLiberal: 5,
      },
      {
        id: "open-provider-model",
        title: "Avaa tuotantoa kilpailulle, mittaa tuloksia ja siirrä painoa perustasolle",
        copy:
          "Laajempi rakenteellinen sote-remontti voi onnistua erittäin hyvin tai mennä sekavaksi siirtymäksi. Se on pelin vaikeimpia mutta myös palkitsevimpia ratkaisuja.",
        immediate: hiddenImpact({
          fiscalSpace: -1,
          debtSustainability: -1,
          serviceCapacity: -2,
          equity: -3,
          entrepreneurClimate: 2,
          budgetExecution: -5,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 7,
          debtSustainability: 7,
          serviceCapacity: 6,
          growthPotential: 2,
          entrepreneurClimate: 4,
          equity: 1,
          internalSecurityCapacity: 1,
          budgetExecution: 2,
        }),
        reformLoad: 6,
        hiddenLiberal: 22,
      },
    ],
  },
  {
    id: "education-rdi",
    topic: "Koulutus ja TKI",
    title: "Miten painotat koulutusta, korkeakouluja ja tutkimusta?",
    summary:
      "Suomessa koulutus nähdään edelleen vahvuutena, mutta viralliset vertailut näyttävät suunnan heikentyneen. Päätös on klassinen trade-off: säästö nyt vai kasvupohja myöhemmin.",
    framing:
      "Mallissa tämä päätös osuu ennen kaikkea kasvuun, osaamispohjaan, alueiden vetovoimaan ja pitkän aikavälin tuottavuuteen.",
    situation:
      "OECD Education at a Glance 2025:n mukaan Suomen 25–34-vuotiaiden korkea-asteen tutkinnon suorittaneiden osuus oli vuonna 2024 vain 39 %, kun OECD-keskiarvo oli 48 %. Euroopan komissio huomauttaa 4.6.2025 maaraportissaan, että osaajapula uhkaa jo terveydenhuoltoa ja vihreää siirtymää.",
    sources: "OECD Education at a Glance 2025; Euroopan komissio 4.6.2025",
    choices: [
      {
        id: "boost-skills-rdi",
        title: "Panosta korkeakoulutukseen, osaajapolkuun ja TKI:hin",
        copy:
          "Budjetti kiristyy lyhyellä aikavälillä, mutta kasvupohja ja alueiden veto vahvistuvat, jos rahat todella kääntyvät osaamiseksi.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          educationCapital: 6,
          growthPotential: 2,
          regionalVitality: 1,
        }),
        structural: hiddenImpact({
          growthPotential: 9,
          educationCapital: 9,
          entrepreneurClimate: 2,
          regionalVitality: 2,
          equity: 1,
        }),
        reformLoad: 2,
        hiddenLiberal: 11,
      },
      {
        id: "target-shortages",
        title: "Kohdenna lisäys vain pahimpiin osaajapuloihin",
        copy:
          "Ratkaisu on halvempi ja tarkemmin rajattu, mutta koko koulutusjärjestelmän suunta ei käänny yhtä vahvasti eikä alueellinen ongelma juuri ratkea.",
        immediate: hiddenImpact({
          fiscalSpace: -1,
          debtSustainability: -1,
          educationCapital: 3,
          growthPotential: 2,
          regionalVitality: 1,
        }),
        structural: hiddenImpact({
          growthPotential: 5,
          educationCapital: 5,
          regionalVitality: 1,
        }),
        reformLoad: 1,
        hiddenLiberal: 7,
      },
      {
        id: "freeze-education",
        title: "Jäädytä taso ja painota säästöä",
        copy:
          "Budjetti helpottuu nyt, mutta osaamispohjan heikkeneminen näkyy viiveellä työllisyydessä, kasvussa ja alueiden vetovoimassa.",
        immediate: hiddenImpact({
          fiscalSpace: 5,
          debtSustainability: 4,
          educationCapital: -5,
          equity: -3,
          regionalVitality: -1,
        }),
        structural: hiddenImpact({
          growthPotential: -7,
          educationCapital: -8,
          regionalVitality: -2,
          entrepreneurClimate: -1,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "talent-system-reform",
        title: "Siirrä rahaa vaikuttavaan osaamiseen, tulosrahoitukseen ja kansainvälisiin osaajiin",
        copy:
          "Ratkaisu siirtää painoa vaikuttavuuteen eikä vain euroihin. Se voi vahvistaa kasvua paljon, mutta muutos herättää myös kovaa vastarintaa järjestelmän sisällä.",
        immediate: hiddenImpact({
          fiscalSpace: -1,
          debtSustainability: 0,
          educationCapital: 2,
          entrepreneurClimate: 2,
          equity: -3,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 2,
          growthPotential: 11,
          educationCapital: 8,
          entrepreneurClimate: 5,
          regionalVitality: 3,
          equity: 1,
        }),
        reformLoad: 5,
        hiddenLiberal: 21,
      },
    ],
  },
  {
    id: "ai-transition",
    topic: "Tekoäly ja työ",
    title: "Miten vastaat tekoälyn ja automaation murrokseen?",
    summary:
      "Tekoäly voi nostaa tuottavuutta nopeasti, mutta se voi myös siirtää työpaikkoja, keskittää hyötyjä ja muuttaa julkisten palvelujen tapaa toimia. Siksi kysymys ei ole vain teknologiasta, vaan siitä kuka kantaa muutoksen riskin ja kuka hyötyy siitä.",
    framing:
      "Mallissa tämä päätös vaikuttaa erityisesti kasvuun, yrittäjien vapauteen, hyvinvointiin, koulutukseen ja julkisen sektorin tuottavuuteen.",
    situation:
      "Tilastokeskuksen 27.11.2025 julkaisun mukaan 38 % suomalaisista yrityksistä käytti tekoälyteknologioita keväällä 2025. IMF:n 30.1.2026 Suomen maaraportin taustapaperi arvioi, että tekoäly voi hyödyttää suurta osaa Suomen työmarkkinoista, mutta samalla osa työstä ja työntekijöistä on merkittävässä siirtymäriskissä. Euroopan komission Digital Decade 2025 -maaraportti taas kuvaa Suomea EU:n kärkimaihin kuuluvaksi AI-valmiudessa.",
    sources:
      "Tilastokeskus 27.11.2025; IMF Selected Issues Paper Finland 30.1.2026; European Commission Digital Decade Finland 2025",
    choices: [
      {
        id: "fast-adoption",
        title: "Anna yritysten ja virastojen ottaa AI nopeasti käyttöön",
        copy:
          "Tuottavuus voi nousta nopeasti, mutta ilman siirtymäturvaa osa työntekijöistä ja alueista jää muutoksessa helpommin jälkeen.",
        immediate: hiddenImpact({
          entrepreneurClimate: 4,
          technologyReadiness: 6,
          publicSectorProductivity: 2,
          digitalTrust: -3,
          transitionCapacity: -4,
          equity: -2,
        }),
        structural: hiddenImpact({
          growthPotential: 9,
          entrepreneurClimate: 4,
          publicSectorProductivity: 4,
          technologyReadiness: 4,
          transitionCapacity: -1,
          regionalVitality: -1,
        }),
        reformLoad: 3,
        hiddenLiberal: 14,
      },
      {
        id: "skills-safety",
        title: "Panosta osaamiseen, uudelleenkoulutukseen ja turvalliseen käyttöönottoon",
        copy:
          "Muutos etenee hieman hitaammin ja maksaa nyt, mutta työmarkkinan siirtymä on hallitumpi ja hyväksyttävyys korkeampi.",
        immediate: hiddenImpact({
          fiscalSpace: -2,
          debtSustainability: -2,
          educationCapital: 2,
          transitionCapacity: 5,
          digitalTrust: 3,
          technologyReadiness: 2,
          equity: 1,
        }),
        structural: hiddenImpact({
          growthPotential: 6,
          technologyReadiness: 4,
          transitionCapacity: 5,
          publicSectorProductivity: 3,
          educationCapital: 3,
          equity: 1,
        }),
        reformLoad: 2,
        hiddenLiberal: 10,
      },
      {
        id: "regulate-cautiously",
        title: "Sääntele varovaisesti ennen laajaa käyttöönottoa",
        copy:
          "Riskit ja väärinkäytökset voivat jäädä pienemmiksi, mutta myös tuottavuus- ja kasvuhyötyjä menetetään, jos käyttöönotto jää hitaaksi.",
        immediate: hiddenImpact({
          digitalTrust: 4,
          socialFloor: 1,
          technologyReadiness: -3,
          entrepreneurClimate: -2,
          publicSectorProductivity: -1,
        }),
        structural: hiddenImpact({
          growthPotential: -3,
          technologyReadiness: -4,
          transitionCapacity: 1,
          digitalTrust: 2,
        }),
        reformLoad: 1,
        hiddenLiberal: 2,
      },
      {
        id: "national-ai-reform",
        title: "Tee kansallinen AI-reformi: nopea käyttöönotto, siirtymäturva ja julkisen sektorin tuottavuus",
        copy:
          "Laajin paketti yrittää ottaa teknologian hyödyt nopeasti käyttöön, mutta samalla pehmentää muutoksen kustannuksia ihmisille ja palveluille. Onnistuminen vaatii poikkeuksellisen hyvää johtamista.",
        immediate: hiddenImpact({
          fiscalSpace: -1,
          debtSustainability: -1,
          technologyReadiness: 4,
          transitionCapacity: 3,
          publicSectorProductivity: 3,
          digitalTrust: -1,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 4,
          growthPotential: 10,
          entrepreneurClimate: 4,
          technologyReadiness: 7,
          transitionCapacity: 6,
          publicSectorProductivity: 8,
          digitalTrust: 3,
          serviceCapacity: 2,
          equity: 1,
        }),
        reformLoad: 6,
        hiddenLiberal: 20,
      },
    ],
  },
  {
    id: "justice-security",
    topic: "Poliisi ja oikeus",
    title: "Miten hoidat poliisin, syyttäjät ja tuomioistuimet?",
    summary:
      "Sujuva rikosketju ei ole vain turvallisuuskysymys, vaan myös oikeusvaltion uskottavuuskysymys. Tämän kohdan ongelmat eivät ratkea yhdellä määräraharivillä, vaan myös yhteistyöllä ja prosesseilla.",
    framing:
      "Mallissa tämä päätös vaikuttaa sisäiseen turvallisuuteen, oikeuslaitokseen, hyvinvointiin ja uudistusten toimeenpanokykyyn.",
    situation:
      "VTV:n 19.6.2025 tarkastuksen mukaan rikosasioiden pitkittyneet käsittelyprosessit ovat laaja ja monitahoinen ongelma, eikä viranomaisyhteistyö toimi vielä riittävän vaikuttavasti. Euroopan komission oikeusvaltiokehikko seuraa Suomessa erityisesti oikeusjärjestelmän tehokkuutta, laatua ja riippumattomuutta.",
    sources: "VTV 19.6.2025; Euroopan komission 2025 Rule of Law Report",
    choices: [
      {
        id: "digital-chain",
        title: "Digitalisoi koko rikosketjua ja vahvista viranomaisyhteistyötä",
        copy:
          "Muutos on vaikea ja vie aikaa, mutta onnistuessaan se nopeuttaa prosesseja enemmän kuin pelkkä lisäraha yksittäiseen virastoon.",
        immediate: hiddenImpact({
          fiscalSpace: -2,
          debtSustainability: -1,
          budgetExecution: -2,
          implementationCapacity: -1,
          internalSecurityCapacity: 1,
          justiceCapacity: 1,
        }),
        structural: hiddenImpact({
          internalSecurityCapacity: 5,
          justiceCapacity: 8,
          fiscalSpace: 3,
          debtSustainability: 3,
          entrepreneurClimate: 1,
        }),
        reformLoad: 5,
        hiddenLiberal: 13,
      },
      {
        id: "boost-core-agencies",
        title: "Lisää resursseja poliisille, syyttäjille ja tuomioistuimille",
        copy:
          "Ratkaisu näkyy turvallisuudessa nopeammin, mutta pysyvät tuottavuushyödyt jäävät pienemmiksi ja budjettia kiristää jälleen yksi menoerä lisää.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          internalSecurityCapacity: 5,
          justiceCapacity: 5,
          serviceCapacity: 1,
        }),
        structural: hiddenImpact({
          internalSecurityCapacity: 4,
          justiceCapacity: 5,
        }),
        reformLoad: 1,
        hiddenLiberal: 7,
      },
      {
        id: "hold-current",
        title: "Pidä taso nykyisenä",
        copy:
          "Budjetti säästyy, mutta pitkittyneet prosessit, jonot ja oikeusturvan laatu pysyvät todennäköisesti paineessa.",
        immediate: hiddenImpact({
          fiscalSpace: 3,
          debtSustainability: 2,
          internalSecurityCapacity: -3,
          justiceCapacity: -3,
        }),
        structural: hiddenImpact({
          internalSecurityCapacity: -4,
          justiceCapacity: -5,
          serviceCapacity: -1,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "liberal-prioritisation",
        title: "Keskitä resurssit vakavaan rikollisuuteen ja kevennä uhrittomien rikosten taakkaa",
        copy:
          "Tämä on liberaalimpi rakenteellinen linja: poliisin aikaa vapautetaan vakavampiin tehtäviin ja prosesseja suoristetaan. Poliittinen vastareaktio voi olla silti kova.",
        immediate: hiddenImpact({
          fiscalSpace: 0,
          debtSustainability: 0,
          internalSecurityCapacity: -2,
          justiceCapacity: -1,
          entrepreneurClimate: 1,
          equity: -1,
          budgetExecution: -5,
          implementationCapacity: -3,
        }),
        structural: hiddenImpact({
          fiscalSpace: 2,
          debtSustainability: 2,
          internalSecurityCapacity: 3,
          justiceCapacity: 7,
          entrepreneurClimate: 2,
        }),
        reformLoad: 5,
        hiddenLiberal: 20,
      },
    ],
  },
  {
    id: "defence-resilience",
    topic: "Puolustus ja huoltovarmuus",
    title: "Miten vahvistat Suomen turvallisuutta ja kriisinkestävyyttä?",
    summary:
      "Puolustus, energia, logistiikka ja varautuminen ovat nyt pysyvä osa talouspolitiikkaa. Kysymys ei ole siitä, lisätäänkö menoja lainkaan, vaan siitä, missä muodossa ja kuinka nopeasti.",
    framing:
      "Mallissa tämä päätös vaikuttaa ulkoiseen turvallisuuteen, huoltovarmuuteen, velkaan ja osin myös kasvuun.",
    situation:
      "IMF nosti 21.1.2025 puolustusmenot yhdeksi Suomen velkapaineen keskeiseksi ajuriksi. VTV:n vuoden 2025 finanssipolitiikan valvonnan raportti arvioi, että puolustusmenojen kasvulle on perustelut, mutta ne on sovitettava yhteen muun julkisen talouden kestävyyden kanssa.",
    sources: "IMF 21.1.2025; VTV finanssipolitiikan valvonnan raportti 2025",
    choices: [
      {
        id: "targeted-resilience",
        title: "Panosta puolustuksen lisäksi energiaan, logistiikkaan ja varastoihin",
        copy:
          "Turvallisuus vahvistuu laajasti, mutta lisäraha sitoo budjettia samaan aikaan kun muutkin sektorit huutavat rahoitusta.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          externalSecurityCapacity: 4,
          resilienceCapacity: 5,
          entrepreneurClimate: 1,
        }),
        structural: hiddenImpact({
          externalSecurityCapacity: 5,
          resilienceCapacity: 7,
          growthPotential: 2,
          regionalVitality: 2,
        }),
        reformLoad: 2,
        hiddenLiberal: 8,
      },
      {
        id: "major-defence-push",
        title: "Nosta puolustus- ja varautumismenoja voimakkaasti",
        copy:
          "Pelote kasvaa nopeasti, mutta muiden politiikkasektorien liikkumatila kapenee tuntuvasti ja budjettia pitää kiristää muualta.",
        immediate: hiddenImpact({
          fiscalSpace: -5,
          debtSustainability: -4,
          externalSecurityCapacity: 8,
          resilienceCapacity: 7,
          regionalVitality: 1,
        }),
        structural: hiddenImpact({
          externalSecurityCapacity: 6,
          resilienceCapacity: 6,
          growthPotential: 0,
        }),
        reformLoad: 1,
        hiddenLiberal: 6,
      },
      {
        id: "minimalist-line",
        title: "Pysy mahdollisimman lähellä nykyistä tasoa",
        copy:
          "Budjetti kiittää lyhyellä aikavälillä, mutta turvallisuusympäristön muutos jää selvästi vajaasti huomioiduksi.",
        immediate: hiddenImpact({
          fiscalSpace: 4,
          debtSustainability: 3,
          externalSecurityCapacity: -6,
          resilienceCapacity: -5,
          regionalVitality: -1,
        }),
        structural: hiddenImpact({
          externalSecurityCapacity: -4,
          resilienceCapacity: -5,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "market-reserve-model",
        title: "Kytke puolustus, energia, logistiikka ja reservi yhteen pitkäksi varautumismalliksi",
        copy:
          "Laaja rakenneuudistus ei lisää vain menoja vaan muuttaa koko varautumisen organisointia. Se voi tehdä Suomesta vahvemman, mutta siirtymä on hidas ja hallinnollisesti raskas.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          externalSecurityCapacity: 3,
          resilienceCapacity: 4,
          entrepreneurClimate: 2,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          externalSecurityCapacity: 8,
          resilienceCapacity: 9,
          growthPotential: 3,
          regionalVitality: 3,
          entrepreneurClimate: 2,
        }),
        reformLoad: 5,
        hiddenLiberal: 16,
      },
    ],
  },
  {
    id: "housing-regions",
    topic: "Asuminen ja alueet",
    title: "Miten helpotat rakentamista ja tuet alueellista elinvoimaa?",
    summary:
      "Asumisen kustannukset, korkea velkaantuneisuus ja rakennusalan heikkous osuvat samaan aikaan moniin alueisiin hyvin eri tavalla. Tässä kohtaa talous, arki ja aluepolitiikka limittyvät.",
    framing:
      "Mallissa tämä päätös vaikuttaa kasvuun, hyvinvointiin, yrittäjien vapauteen, alueisiin ja osittain huoltovarmuuteen.",
    situation:
      "OECD:n vuoden 2025 maasurvey kuvaa asumisinvestointien romahtaneen korkojen nousun jälkeen ja huomauttaa, että yli 90 % Suomen asuntolainoista on sidottu Euriboriin. Euroopan komissio korosti 18.2.2026 myös itäisten raja-alueiden taloudellista ja demografista painetta.",
    sources: "OECD Economic Surveys: Finland 2025; Euroopan komissio 18.2.2026",
    choices: [
      {
        id: "deregulate-build",
        title: "Pura rakentamisen esteitä ja nopeuta investointeja",
        copy:
          "Norminpurku ja nopeammat luvat helpottavat tarjontaa ja investointeja, mutta kaikki alueet eivät hyödy markkinaehtoisesta ratkaisusta yhtä paljon.",
        immediate: hiddenImpact({
          fiscalSpace: 1,
          debtSustainability: 1,
          entrepreneurClimate: 7,
          regionalVitality: 3,
          growthPotential: 4,
          equity: -3,
          budgetExecution: -2,
        }),
        structural: hiddenImpact({
          growthPotential: 8,
          entrepreneurClimate: 7,
          regionalVitality: 5,
          serviceCapacity: 1,
          equity: 1,
        }),
        reformLoad: 3,
        hiddenLiberal: 17,
      },
      {
        id: "mixed-regional-support",
        title: "Yhdistä maltillinen norminpurku ja kohdennettu alue- ja asuntotuki",
        copy:
          "Ratkaisu yrittää helpottaa tarjontaa siellä missä markkina toimii, mutta samalla rahaa palaa taas kohdennettuihin tukiin ja siirtymäjärjestelyihin.",
        immediate: hiddenImpact({
          fiscalSpace: -3,
          debtSustainability: -2,
          regionalVitality: 5,
          equity: 2,
          serviceCapacity: 1,
          growthPotential: 1,
        }),
        structural: hiddenImpact({
          growthPotential: 5,
          entrepreneurClimate: 3,
          regionalVitality: 6,
          resilienceCapacity: 1,
        }),
        reformLoad: 2,
        hiddenLiberal: 8,
      },
      {
        id: "demand-support",
        title: "Säilytä nykyinen malli ja tue kysyntää",
        copy:
          "Kotitalouksia ja alueita tuetaan enemmän suoraan, mutta rakentamisen pullonkaulat ja pitkän aikavälin tarjontaongelmat jäävät melkein ennalleen.",
        immediate: hiddenImpact({
          fiscalSpace: -4,
          debtSustainability: -3,
          equity: 3,
          regionalVitality: 3,
          serviceCapacity: 1,
          entrepreneurClimate: -2,
        }),
        structural: hiddenImpact({
          growthPotential: -3,
          entrepreneurClimate: -4,
          regionalVitality: -1,
          debtSustainability: -1,
        }),
        reformLoad: 0,
        hiddenLiberal: 1,
      },
      {
        id: "land-use-big-bang",
        title: "Uudista kaavoitus, normit ja tukimalli kerralla",
        copy:
          "Tämä on pelin selkein asuntomarkkinoiden rakenneuudistus. Se voi vapauttaa kasvua paljon, mutta siirtymä satuttaa heti erityisesti niitä, jotka elävät jo tiukassa markkinassa.",
        immediate: hiddenImpact({
          fiscalSpace: 0,
          debtSustainability: 0,
          entrepreneurClimate: 8,
          regionalVitality: 2,
          growthPotential: 4,
          equity: -5,
          serviceCapacity: -1,
          budgetExecution: -4,
          implementationCapacity: -2,
        }),
        structural: hiddenImpact({
          fiscalSpace: 3,
          debtSustainability: 4,
          growthPotential: 11,
          entrepreneurClimate: 9,
          regionalVitality: 6,
          equity: 1,
          resilienceCapacity: 1,
        }),
        reformLoad: 6,
        hiddenLiberal: 23,
      },
    ],
  },
];

const maxPriorityLiberalScore = [...priorityOptions]
  .sort((left, right) => right.hiddenLiberal - left.hiddenLiberal)
  .slice(0, maxSelectedPriorities)
  .reduce((sum, priority) => sum + priority.hiddenLiberal, 0);

const maxGovernanceLiberalScore =
  Math.max(...roleOptions.map((role) => role.hiddenLiberal)) + maxPriorityLiberalScore;

const maxLiberalScore = decisions.reduce(
  (sum, decision) => sum + Math.max(...decision.choices.map((choice) => choice.hiddenLiberal)),
  0,
) + maxGovernanceLiberalScore;

decisions.forEach((decision) => {
  decision.choices.forEach((choice) => {
    choice.horizonEffects = buildChoiceHorizonEffects(choice);
  });
});

function getRoleOption(roleId) {
  return roleOptions.find((role) => role.id === roleId);
}

function getPriorityOption(priorityId) {
  return priorityOptions.find((priority) => priority.id === priorityId);
}

function createEmptyGovernanceSelection() {
  return {
    roleId: "",
    priorities: [],
    topPriorities: [],
  };
}

const priorityOrder = Object.fromEntries(priorityOptions.map((priority, index) => [priority.id, index]));

function sortUnique(values = []) {
  return [...new Set(values)].sort((left, right) => {
    const leftOrder = priorityOrder[left];
    const rightOrder = priorityOrder[right];

    if (leftOrder !== undefined && rightOrder !== undefined) {
      return leftOrder - rightOrder;
    }

    return `${left}`.localeCompare(`${right}`);
  });
}

function normaliseGovernance(governance = {}) {
  const priorities = sortUnique(governance.priorities).filter((priorityId) => getPriorityOption(priorityId));
  const topPriorities = sortUnique(governance.topPriorities)
    .filter((priorityId) => priorities.includes(priorityId))
    .slice(0, topPriorityCount);

  return {
    roleId: getRoleOption(governance.roleId)?.id ?? "",
    priorities: priorities.slice(0, maxSelectedPriorities),
    topPriorities,
  };
}

function isGovernanceComplete(governance = state.governance) {
  const normalised = normaliseGovernance(governance);
  return (
    Boolean(normalised.roleId) &&
    normalised.priorities.length === maxSelectedPriorities &&
    normalised.topPriorities.length === topPriorityCount
  );
}

function mergeSupportWeights(...weightSets) {
  const merged = {};

  weightSets.forEach((weights) => {
    Object.entries(weights ?? {}).forEach(([key, value]) => {
      merged[key] = (merged[key] ?? 0) + value;
    });
  });

  return merged;
}

function scaleSupportWeights(weights = {}, factor = 1) {
  return Object.fromEntries(
    Object.entries(weights).map(([key, value]) => [key, value * factor]),
  );
}

function getGovernanceContext(governance = state.governance) {
  const selection = normaliseGovernance(governance);
  const role = getRoleOption(selection.roleId);
  const priorities = selection.priorities.map((priorityId) => getPriorityOption(priorityId));
  const topPriorityIds = new Set(selection.topPriorities);

  const setupImpact = mergeHiddenImpacts(
    role?.baseImpact ?? hiddenImpact(),
    ...priorities.map((priority) =>
      hiddenImpact(
        Object.fromEntries(
          Object.entries(priority.baseImpact).map(([key, value]) => [
            key,
            topPriorityIds.has(priority.id) ? value : value * 0.65,
          ]),
        ),
      ),
    ),
  );

  const roleWeights = role?.supportWeights ?? {};
  const priorityWeights = mergeSupportWeights(
    ...priorities.map((priority) =>
      scaleSupportWeights(
        priority.supportWeights,
        topPriorityIds.has(priority.id) ? 1 : 0.6,
      ),
    ),
  );

  const governanceLiberalScore =
    (role?.hiddenLiberal ?? 0) +
    priorities.reduce((sum, priority) => sum + (priority?.hiddenLiberal ?? 0), 0);

  return {
    selection,
    role,
    priorities,
    setupImpact,
    roleWeights,
    priorityWeights,
    governanceLiberalScore,
  };
}

const state = {
  step: "home",
  currentDecisionIndex: 0,
  answers: {},
  governance: createEmptyGovernanceSelection(),
};

const app = document.querySelector("#app");
const viewToggles = [...document.querySelectorAll("[data-view-toggle]")];
const explainPanel = document.querySelector("#behind-panel");
const views = {
  game: app,
  behind: explainPanel,
};

function setActiveView(nextView, options = {}) {
  if (!views.game || !views.behind) {
    return;
  }

  Object.entries(views).forEach(([viewName, element]) => {
    element.hidden = viewName !== nextView;
  });

  viewToggles.forEach((toggle) => {
    toggle.setAttribute("aria-selected", toggle.dataset.viewToggle === nextView ? "true" : "false");
  });

  if (options.scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scrollToTop(behavior = "smooth") {
  if (typeof window?.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior });
  }
}

function applyEffectSet(hidden, deltas, baseFactor, executionFactor, implementationFactor) {
  for (const key of hiddenKeys) {
    const delta = deltas[key] ?? 0;

    if (!delta) {
      continue;
    }

    let factor = baseFactor;

    if (delta > 0 && key !== "reformPressure") {
      factor *= implementationFactor;
    }

    if (delta > 0 && fiscalKeys.has(key)) {
      factor *= executionFactor;
    }

    hidden[key] = clamp(hidden[key] + delta * factor);
  }
}

function applyStaticImpact(hidden, deltas) {
  hiddenKeys.forEach((key) => {
    const delta = deltas[key] ?? 0;

    if (!delta) {
      return;
    }

    hidden[key] = clamp(hidden[key] + delta);
  });
}

function applyGovernanceAlignment(hidden, deltas, governanceContext) {
  const { roleWeights, priorityWeights } = governanceContext;
  let rolePositive = 0;
  let roleNegative = 0;
  let priorityPositive = 0;
  let priorityNegative = 0;

  hiddenKeys.forEach((key) => {
    const delta = deltas[key] ?? 0;
    const roleWeight = roleWeights[key] ?? 0;
    const priorityWeight = priorityWeights[key] ?? 0;

    if (!delta || (!roleWeight && !priorityWeight)) {
      return;
    }

    if (delta > 0) {
      rolePositive += delta * roleWeight;
      priorityPositive += delta * priorityWeight;
      hidden[key] = clamp(hidden[key] + delta * (roleWeight * 0.05 + priorityWeight * 0.04));
      return;
    }

    roleNegative += Math.abs(delta) * roleWeight;
    priorityNegative += Math.abs(delta) * priorityWeight;
    hidden[key] = clamp(hidden[key] + delta * (roleWeight * 0.03 + priorityWeight * 0.025));
  });

  hidden.roleClarity = clamp(hidden.roleClarity + rolePositive * 0.35 - roleNegative * 0.4);
  hidden.priorityFit = clamp(hidden.priorityFit + priorityPositive * 0.3 - priorityNegative * 0.35);
  hidden.budgetExecution = clamp(
    hidden.budgetExecution +
      rolePositive * 0.12 +
      priorityPositive * 0.12 -
      roleNegative * 0.14 -
      priorityNegative * 0.16,
  );
  hidden.implementationCapacity = clamp(
    hidden.implementationCapacity +
      rolePositive * 0.06 +
      priorityPositive * 0.08 -
      roleNegative * 0.08 -
      priorityNegative * 0.1,
  );
  hidden.reformPressure = clamp(
    hidden.reformPressure -
      rolePositive * 0.03 -
      priorityPositive * 0.03 +
      roleNegative * 0.06 +
      priorityNegative * 0.08,
  );
}

function applyChoiceForHorizon(hidden, choice, horizonId, governanceContext) {
  const executionFactor = 0.65 + hidden.budgetExecution / 200;
  const overload = Math.max(0, hidden.reformPressure - hidden.implementationCapacity);
  const implementationFactor = Math.max(0.5, 1 - overload / 90);
  const deltas = choice.horizonEffects?.[horizonId] ?? hiddenImpact();

  applyEffectSet(hidden, deltas, 1, executionFactor, implementationFactor);
  applyGovernanceAlignment(hidden, deltas, governanceContext);
  hidden.reformPressure = clamp(hidden.reformPressure + (choice.reformLoad ?? 0));
}

function applyBackgroundPressure(hidden, scale = 1) {
  backgroundPressureMeta.forEach((item) => {
    hidden[item.key] = clamp(hidden[item.key] + item.delta * scale);
  });
}

function deriveAbsoluteMetrics(hidden) {
  const reformOverload = Math.max(0, hidden.reformPressure - hidden.implementationCapacity);

  return {
    debt: clamp(
      round(
        hidden.fiscalSpace * 0.38 +
          hidden.debtSustainability * 0.33 +
          hidden.publicSectorProductivity * 0.08 +
          hidden.budgetExecution * 0.08 +
          hidden.priorityFit * 0.07 +
          hidden.roleClarity * 0.04 +
          hidden.growthPotential * 0.05 +
          hidden.technologyReadiness * 0.03 -
          reformOverload * 0.18,
      ),
    ),
    growth: clamp(
      round(
        hidden.growthPotential * 0.34 +
          hidden.entrepreneurClimate * 0.2 +
          hidden.educationCapital * 0.12 +
          hidden.regionalVitality * 0.08 +
          hidden.resilienceCapacity * 0.04 +
          hidden.technologyReadiness * 0.12 +
          hidden.publicSectorProductivity * 0.05 +
          hidden.transitionCapacity * 0.05,
      ),
    ),
    wellbeing: clamp(
      round(
        hidden.serviceCapacity * 0.24 +
          hidden.equity * 0.16 +
          hidden.socialFloor * 0.18 +
          hidden.targetingQuality * 0.14 +
          hidden.educationCapital * 0.08 +
          hidden.internalSecurityCapacity * 0.06 +
          hidden.justiceCapacity * 0.05 +
          hidden.regionalVitality * 0.04 +
          hidden.transitionCapacity * 0.05,
      ),
    ),
    freedom: clamp(
      round(
        hidden.entrepreneurClimate * 0.55 +
          hidden.growthPotential * 0.1 +
          hidden.budgetExecution * 0.08 +
          hidden.implementationCapacity * 0.04 +
          hidden.technologyReadiness * 0.1 +
          hidden.digitalTrust * 0.08 +
          hidden.targetingQuality * 0.05,
      ),
    ),
    externalSecurity: clamp(
      round(hidden.externalSecurityCapacity * 0.7 + hidden.resilienceCapacity * 0.3),
    ),
    internalSecurity: clamp(
      round(
        hidden.internalSecurityCapacity * 0.45 +
          hidden.justiceCapacity * 0.35 +
          hidden.serviceCapacity * 0.2,
      ),
    ),
    justice: clamp(
      round(
        hidden.justiceCapacity * 0.68 +
          hidden.implementationCapacity * 0.12 +
          hidden.equity * 0.08 +
          hidden.digitalTrust * 0.12,
      ),
    ),
    education: clamp(
      round(
        hidden.educationCapital * 0.58 +
          hidden.growthPotential * 0.14 +
          hidden.regionalVitality * 0.08 +
          hidden.technologyReadiness * 0.1 +
          hidden.transitionCapacity * 0.1,
      ),
    ),
    resilience: clamp(
      round(
        hidden.resilienceCapacity * 0.55 +
          hidden.externalSecurityCapacity * 0.18 +
          hidden.publicSectorProductivity * 0.12 +
          hidden.budgetExecution * 0.15,
      ),
    ),
    regionalVitality: clamp(
      round(
        hidden.regionalVitality * 0.42 +
          hidden.serviceCapacity * 0.14 +
          hidden.growthPotential * 0.08 +
          hidden.educationCapital * 0.12 +
          hidden.socialFloor * 0.08 +
          hidden.targetingQuality * 0.08 +
          hidden.transitionCapacity * 0.08,
      ),
    ),
  };
}

function deriveAbsoluteModelReadout(hidden) {
  return [
    {
      id: "budgetExecution",
      label: "Budjetin toteutuvuus",
      value: round(hidden.budgetExecution),
      description: "Miten nopeasti päätöksistä luvatut säästöt, siirrot ja investoinnit ehtivät näkyä oikeasti.",
    },
    {
      id: "reformCapacity",
      label: "Uudistusvara",
      value: clamp(round(hidden.implementationCapacity - hidden.reformPressure + 50)),
      description: "Mitä enemmän vaikeita reformeja päällekkäin, sitä enemmän osa hyödyistä viivästyy tai haihtuu.",
    },
    {
      id: "servicePressure",
      label: "Palvelut",
      value: clamp(
        round(
          100 -
            (hidden.serviceCapacity * 0.6 +
              hidden.socialFloor * 0.2 +
              hidden.targetingQuality * 0.1 +
              hidden.publicSectorProductivity * 0.1),
        ),
      ),
      description:
        "Yksinkertaistettu palvelujen suunta: paranevatko palvelut vai heikkenevätkö ne lähtötilanteeseen verrattuna.",
    },
    {
      id: "governanceFit",
      label: "Prioriteettien johdonmukaisuus",
      value: clamp(round(hidden.roleClarity * 0.4 + hidden.priorityFit * 0.6)),
      description:
        "Kertoo, kuinka hyvin myöhemmät budjettivalinnat vastaavat juuri valitsemaasi valtion roolia ja tärkeimpiä tehtäviä.",
    },
  ];
}

const baselineAbsoluteMetrics = deriveAbsoluteMetrics(hiddenBase);
const baselineAbsoluteModelReadout = deriveAbsoluteModelReadout(hiddenBase);
const zeroMetrics = Object.fromEntries(metricKeys.map((key) => [key, 0]));

function deriveMetrics(hidden) {
  const absoluteMetrics = deriveAbsoluteMetrics(hidden);

  return Object.fromEntries(
    metricKeys.map((key) => [key, round(absoluteMetrics[key] - baselineAbsoluteMetrics[key])]),
  );
}

function deriveModelReadout(hidden) {
  const absoluteReadout = deriveAbsoluteModelReadout(hidden);

  return absoluteReadout.map((item, index) => ({
    ...item,
    value:
      item.id === "servicePressure"
        ? round(baselineAbsoluteModelReadout[index].value - item.value)
        : round(item.value - baselineAbsoluteModelReadout[index].value),
  }));
}

function getDecision(index) {
  return decisions[index];
}

function getChoice(decision, choiceId) {
  return decision.choices.find((choice) => choice.id === choiceId);
}

function getAnsweredCount(answers = state.answers) {
  return decisions.filter((decision) => answers[decision.id]).length;
}

function getFirstUnansweredIndex(answers = state.answers) {
  const index = decisions.findIndex((decision) => !answers[decision.id]);
  return index === -1 ? 0 : index;
}

function calculateState(answers = state.answers, governance = state.governance) {
  const governanceContext = getGovernanceContext(governance);
  const hiddenByHorizon = Object.fromEntries(
    horizonMeta.map((horizon) => [horizon.id, { ...hiddenBase }]),
  );
  const completedChoices = [];
  let hiddenLiberalScore = governanceContext.governanceLiberalScore;

  horizonMeta.forEach((horizon) => {
    applyStaticImpact(hiddenByHorizon[horizon.id], governanceContext.setupImpact);
  });

  const answeredEntries = decisions
    .map((decision) => ({
      decision,
      choiceId: answers[decision.id],
    }))
    .filter((entry) => entry.choiceId);

  answeredEntries.forEach((entry) => {
    const choice = getChoice(entry.decision, entry.choiceId);

    if (!choice) {
      return;
    }

    horizonMeta.forEach((horizon) => {
      const hidden = hiddenByHorizon[horizon.id];
      applyChoiceForHorizon(hidden, choice, horizon.id, governanceContext);
      applyBackgroundPressure(hidden, horizon.pressureScale);
    });

    hiddenLiberalScore += choice.hiddenLiberal;
    completedChoices.push({ decision: entry.decision, choice });
  });

  const timeline = Object.fromEntries(
    horizonMeta.map((horizon) => {
      const hidden = hiddenByHorizon[horizon.id];

      return [
        horizon.id,
        {
          ...horizon,
          hidden,
          absoluteMetrics: deriveAbsoluteMetrics(hidden),
          metrics: deriveMetrics(hidden),
          modelReadout: deriveModelReadout(hidden),
        },
      ];
    }),
  );

  const hidden = Object.fromEntries(
    hiddenKeys.map((key) => [
      key,
      horizonMeta.reduce((sum, horizon) => sum + timeline[horizon.id].hidden[key] * horizon.weight, 0),
    ]),
  );

  return {
    hidden,
    absoluteMetrics: deriveAbsoluteMetrics(hidden),
    metrics: deriveMetrics(hidden),
    modelReadout: deriveModelReadout(hidden),
    timeline,
    hiddenLiberalScore,
    completedChoices,
    governanceContext,
  };
}

function formatSignedValue(value) {
  if (value > 0) {
    return `+${value}`;
  }

  if (value < 0) {
    return `${value}`;
  }

  return "0";
}

function formatExactValue(value) {
  if (Number.isInteger(value)) {
    return `${value}`;
  }

  return value.toFixed(2).replace(/\.?0+$/, "");
}

function formatSignedExactValue(value) {
  if (value > 0) {
    return `+${formatExactValue(value)}`;
  }

  if (value < 0) {
    return `${formatExactValue(value)}`;
  }

  return "0";
}

function getHiddenLabel(key) {
  return hiddenLabelMap[key] ?? key;
}

function getDeltaClass(value) {
  if (value > 0) {
    return "delta-positive";
  }

  if (value < 0) {
    return "delta-negative";
  }

  return "delta-neutral";
}

function getMeterFill(value, limit) {
  const width = clamp((Math.abs(value) / limit) * 50, 0, 50);
  const left = value >= 0 ? 50 : 50 - width;
  const tone =
    value > 0
      ? "meter-fill-positive"
      : value < 0
        ? "meter-fill-negative"
        : "meter-fill-neutral";

  return `<span class="meter-fill ${tone}" style="left: ${left}%; width: ${width}%"></span>`;
}

function getReadoutMeaning(item) {
  const { id, value } = item;

  if (id === "budgetExecution") {
    if (value <= -10) {
      return "Budjetti on selvästi lähtötilannetta vaikeampi toteuttaa. Osa säästöistä tai investointien hyödyistä voi viivästyä paljon.";
    }

    if (value <= -3) {
      return "Budjetti on hieman lähtötilannetta vaikeampi toteuttaa. Kaikki vaikutukset eivät välttämättä näy nopeasti.";
    }

    if (value < 3) {
      return "Budjetin toteutuvuus on suunnilleen lähtötilanteen tasolla.";
    }

    if (value < 10) {
      return "Budjetti näyttää hieman lähtötilannetta helpommalta toteuttaa käytännössä.";
    }

    return "Budjetti näyttää poikkeuksellisen toteuttamiskelpoiselta suhteessa lähtötilanteeseen.";
  }

  if (id === "reformCapacity") {
    if (value <= -20) {
      return "Olet kasannut pöydälle monta isoa uudistusta yhtä aikaa. Poliittinen ja hallinnollinen kapasiteetti alkaa olla tiukilla.";
    }

    if (value <= -6) {
      return "Uudistuspaketti on lähtötilannetta raskaampi. Jokainen lisäreformi kasvattaa epäonnistumisen tai viivästymisen riskiä.";
    }

    if (value < 6) {
      return "Uudistusvara on lähellä lähtötilannetta. Paketti on vaativa, mutta ei vielä ylikuormittunut.";
    }

    if (value < 20) {
      return "Uudistuksille on hieman enemmän liikkumatilaa kuin lähtötilanteessa.";
    }

    return "Uudistusvaraa on poikkeuksellisen paljon. Uusia muutoksia mahtuisi vielä mukaan ilman suurta ylikuormaa.";
  }

  if (id === "governanceFit") {
    if (value <= -10) {
      return "Budjettivalinnat ovat selvästi ristiriidassa valitsemasi valtion roolin ja prioriteettien kanssa. Paketti näyttää sisältäpäin hajanaiselta.";
    }

    if (value <= -3) {
      return "Valitun roolin ja käytännön budjettiratkaisujen välillä on näkyvää jännitettä. Kaikki ei vedä samaan suuntaan.";
    }

    if (value < 3) {
      return "Valtion rooli ja budjettiratkaisut ovat suunnilleen samassa suunnassa, mutta linja ei ole erityisen terävä.";
    }

    if (value < 10) {
      return "Budjettivalinnat tukevat melko hyvin valitsemaasi valtion roolia ja tärkeimpiä tehtäviä.";
    }

    return "Paketissa on poikkeuksellisen selkeä punainen lanka: valtion tehtävät, prioriteetit ja budjettiratkaisut tukevat toisiaan.";
  }

  if (value >= 10) {
    return "Palvelut paranisivat selvästi lähtötilanteeseen verrattuna. Jonot, henkilöstökuorma ja saatavuus näyttäisivät helpottuvan.";
  }

  if (value >= 3) {
    return "Palvelut paranisivat hieman lähtötilanteeseen verrattuna.";
  }

  if (value > -3) {
    return "Palvelut pysyisivät käytännössä lähtötilanteen tasolla.";
  }

  if (value > -10) {
    return "Palvelut heikkenisivät hieman lähtötilanteeseen verrattuna. Tämä voisi näkyä jonossa, saatavuudessa tai arjen kitkana.";
  }

  return "Palvelut heikkenisivät selvästi lähtötilanteeseen verrattuna. Riski näkyville heikennyksille kasvaa.";
}

function getReadoutValue(readout, id) {
  return readout.find((item) => item.id === id)?.value ?? 0;
}

function getOutcomeMeaning(metricKey, value) {
  if (metricKey === "debt") {
    if (value >= 10) {
      return "Velan kasvu hidastuu selvästi. Budjettisi hillitsee velkaantumista lähtötilannetta paremmin.";
    }

    if (value >= 3) {
      return "Velan kasvu hidastuu hieman. Velkaantuminen on lähtötilannetta hallitumpaa.";
    }

    if (value > -3) {
      return "Velan kehitys pysyy lähellä lähtötilannetta. Budjetti ei juuri muuta velkakeskustelun perusasetelmaa.";
    }

    if (value > -10) {
      return "Velka kasvaa hieman lähtötilannetta nopeammin. Ratkaisusi nojaavat enemmän menojen tai veronkevennysten riskiin kuin velan hillintään.";
    }

    return "Velka kasvaa selvästi lähtötilannetta nopeammin. Budjettisi tekee julkisen talouden suunnasta vaikeamman.";
  }

  if (metricKey === "growth") {
    if (value >= 10) {
      return "Kasvunäkymä vahvistuu selvästi. Päätöksesi tukevat työn, investointien ja tuottavuuden nousua.";
    }

    if (value >= 3) {
      return "Kasvunäkymä vahvistuu hieman. Peli tulkitsee valintasi lähtötilannetta kasvumyönteisemmiksi.";
    }

    if (value > -3) {
      return "Kasvunäkymä pysyy lähellä lähtötilannetta. Paketti ei muuta talouden perussuuntaa paljon.";
    }

    if (value > -10) {
      return "Kasvunäkymä heikkenee hieman. Budjetti suojaa jotakin muuta tavoitetta kasvun kustannuksella.";
    }

    return "Kasvunäkymä heikkenee selvästi. Päätöksesi painavat investointeja, työn kannusteita tai tuottavuuden kehitystä.";
  }

  return "";
}

function getBudgetImpactAnalysis(metrics, modelReadout, governanceContext) {
  const budgetExecution = getReadoutValue(modelReadout, "budgetExecution");
  const reformCapacity = getReadoutValue(modelReadout, "reformCapacity");
  const servicePressure = getReadoutValue(modelReadout, "servicePressure");
  const governanceFit = getReadoutValue(modelReadout, "governanceFit");

  let publicFinance;
  if (metrics.debt >= 10) {
    publicFinance =
      "Julkinen talous vakautuisi selvästi lähtötilannetta paremmin. Budjettisi hidastaa velan kasvua tavalla, joka antaisi valtiolle enemmän liikkumatilaa myöhempiin kriiseihin ja investointeihin.";
  } else if (metrics.debt >= 3) {
    publicFinance =
      "Julkinen talous paranisi jonkin verran. Velkaura olisi hallitumpi kuin kevään 2026 perusuralla, mutta kovin suurta puskuria ei vielä syntyisi.";
  } else if (metrics.debt > -3) {
    publicFinance =
      "Julkinen talous jäisi lähelle lähtötilannetta. Budjettisi ei juuri muuta sitä, kuinka vaikealta velkakeskustelu näyttää seuraavina vuosina.";
  } else if (metrics.debt > -10) {
    publicFinance =
      "Julkinen talous heikkenisi hieman. Velkapaine jäisi lähtötilannetta suuremmaksi, mikä pakottaisi todennäköisesti myöhempiin lisäsopeutuksiin.";
  } else {
    publicFinance =
      "Julkinen talous heikkenisi selvästi. Budjettisi kasvattaisi velkaa niin paljon, että markkinoiden, hallituksen ja virkamiesten katse kääntyisi nopeasti uusiin korjaustoimiin.";
  }

  let growthAndEnterprise;
  if (metrics.growth >= 10) {
    growthAndEnterprise =
      "Kasvunäkymä vahvistuisi selvästi. Työn kannusteet, investointiedellytykset ja tuottavuuden perusta liikkuisivat suuntaan, joka voisi näkyä työllisyydessä ja yritysten investoinneissa jo hallituskaudella.";
  } else if (metrics.growth >= 3) {
    growthAndEnterprise =
      "Kasvunäkymä vahvistuisi jonkin verran. Budjettisi tukee ainakin osaa työn, yritystoiminnan ja osaamisen edellytyksistä, vaikka vaikutus ei olisi välitön eikä räjähtävä.";
  } else if (metrics.growth > -3) {
    growthAndEnterprise =
      "Kasvunäkymä pysyisi suunnilleen lähtötilanteen tasolla. Budjetti siirtää painoa muihin tavoitteisiin enemmän kuin varsinaiseen kasvuloikkaan.";
  } else if (metrics.growth > -10) {
    growthAndEnterprise =
      "Kasvunäkymä heikkenisi hieman. Investoinnit, työn kannusteet tai osaamispohja jäisivät lähtötilannetta heikommiksi, mikä näkyisi todennäköisesti hitaampana talouskasvuna.";
  } else {
    growthAndEnterprise =
      "Kasvunäkymä heikkenisi selvästi. Budjettisi söisi työn, yritysten tai koulutuksen kautta juuri niitä tekijöitä, joilla Suomen pitäisi kasvattaa tuotantoaan tulevina vuosina.";
  }

  let societyAndServices;
  if (metrics.wellbeing >= 3 && servicePressure >= 0) {
    societyAndServices =
      "Kotitalouksien ja palvelujen näkökulmasta kokonaisuus olisi suhteellisen vakaa. Hyvinvointi ei perustu vain rahaan, mutta tässä budjetissa arjen paine ei näyttäisi pahenevan olennaisesti.";
  } else if (metrics.wellbeing <= -3 && servicePressure <= -3) {
    societyAndServices =
      "Palvelujen ja arjen näkökulmasta budjetti olisi kova. Jonot, henkilöstöpaine, ostovoiman kiristyminen tai alueellinen eriytyminen voisivat näkyä tavallisen kansalaisen arjessa melko nopeasti.";
  } else {
    societyAndServices =
      "Palvelujen ja arjen näkökulmasta tulos on ristiriitainen. Osa päätöksistä suojaa hyvinvointia, mutta samalla jokin toinen valinta lisää painetta palveluihin, alueisiin tai kotitalouksien arkeen.";
  }

  let macroTitle;
  let macroCopy;
  if (metrics.debt >= 3 && metrics.growth >= 3) {
    macroTitle = "Jos tämä budjetti toteutuisi oikeasti";
    macroCopy =
      "Kansantaloudellisesti tämä olisi vakauttava mutta kasvua hakeva budjetti. Lyhyellä aikavälillä osa päätöksistä voisi tuntua kireiltä, mutta jos uudistukset menisivät läpi, yhdistelmä voisi parantaa sekä julkisen talouden uskottavuutta että yritysten investointihalukkuutta.";
  } else if (metrics.debt >= 3 && metrics.growth < 3) {
    macroTitle = "Jos tämä budjetti toteutuisi oikeasti";
    macroCopy =
      "Kansantaloudellisesti tämä olisi ennen kaikkea vakauttava budjetti. Julkinen talous näyttäisi terveemmältä, mutta kasvu jäisi osin muiden tavoitteiden varjoon, jolloin pitkän aikavälin ongelmat eivät poistuisi kokonaan.";
  } else if (metrics.debt < 3 && metrics.growth >= 3) {
    macroTitle = "Jos tämä budjetti toteutuisi oikeasti";
    macroCopy =
      "Kansantaloudellisesti tämä olisi kasvua hakeva mutta velkariskisempi budjetti. Se voisi parantaa investointien ja työn dynamiikkaa, mutta samalla altistaisi julkisen talouden uudelle sopeutuspaineelle myöhemmin.";
  } else {
    macroTitle = "Jos tämä budjetti toteutuisi oikeasti";
    macroCopy =
      "Kansantaloudellisesti tämä olisi vaikea yhdistelmä. Budjetti ei hidastaisi velan kasvua riittävästi eikä parantaisi kasvun edellytyksiä, joten seuraava hallitus joutuisi todennäköisesti korjaamaan samaa pakettia uudelleen.";
  }

  let implementationCopy;
  if (budgetExecution <= -10 || reformCapacity <= -20) {
    implementationCopy =
      "Suurin riski olisi toteutuksessa. Olet kasannut niin paljon vaikeita muutoksia samaan aikaan, että todellinen vaikutus jäisi todennäköisesti paperilla näkyvää heikommaksi ainakin ensimmäisinä vuosina.";
  } else if (budgetExecution <= -3 || reformCapacity <= -6) {
    implementationCopy =
      "Toteutus olisi mahdollinen mutta kivulias. Osa hyödyistä näkyisi todennäköisesti viiveellä, koska hallinnollinen ja poliittinen kapasiteetti olisi kovalla kuormalla.";
  } else if (budgetExecution >= 3 && reformCapacity >= 3) {
    implementationCopy =
      "Toteutus näyttäisi suhteellisen uskottavalta. Vaikka vaikutukset eivät koskaan tule heti, paketti ei ole erityisen ylikuormitettu hallinnollisesti tai poliittisesti.";
  } else {
    implementationCopy =
      "Toteutus näyttäisi keskivaikealta. Budjetti ei kaatuisi pelkkään hallinnolliseen kuormaan, mutta osa vaikutuksista riippuisi paljon siitä, miten hyvin uudistukset valmistellaan.";
  }

  let governanceCopy;
  if (governanceFit >= 6) {
    governanceCopy =
      "Budjettisi pysyy melko uskollisena sille valtion roolille ja niille ydintehtäville, jotka itse valitsit. Pelaajan ilmoittama suunta ja käytännön eurovalinnat tukevat toisiaan.";
  } else if (governanceFit <= -6) {
    governanceCopy =
      "Budjettisi ajautuu ristiriitaan oman valtionäkemyksesi kanssa. Nostit tietyt tehtävät tärkeiksi, mutta eurot ja reformit vievät lopulta osin toiseen suuntaan.";
  } else {
    governanceCopy =
      "Valtion rooli ja budjettivalinnat ovat osittain samassa suunnassa, mutta paketti jää jännitteiseksi. Osa prioriteeteista näkyy hyvin, osa taas jää toissijaisiksi.";
  }

  return {
    publicFinance,
    growthAndEnterprise,
    societyAndServices,
    governanceCopy,
    macroTitle,
    macroCopy,
    implementationCopy,
  };
}

function getHorizonSummary(horizonId, metrics, modelReadout) {
  const servicePressure = getReadoutValue(modelReadout, "servicePressure");
  const reformCapacity = getReadoutValue(modelReadout, "reformCapacity");

  if (horizonId === "year") {
    if (metrics.debt >= 3 && metrics.wellbeing >= 0) {
      return "Ensimmäinen vuosi näyttäisi suhteellisen hallitulta: velka ei kasvaisi hallitsemattomasti ja arjen hyvinvointi pysyisi ainakin kohtuullisena.";
    }

    if (metrics.debt < 0 && servicePressure < 0) {
      return "Ensimmäisen vuoden kuva olisi kireä: sekä julkinen talous että palvelujen paine näyttäisivät vaikeilta heti.";
    }

    return "Ensimmäisen vuoden vaikutukset olisivat ristiriitaisia: osa päätöksistä näkyisi nopeasti, mutta kaikki hyödyt eivät ehtisi realisoitua vielä budjettivuoden aikana.";
  }

  if (horizonId === "term") {
    if (metrics.growth >= 3 && reformCapacity >= -5) {
      return "Vaalikaudella budjetti alkaisi näyttää uudistusohjelmalta, jossa kasvu ja julkisen talouden suunta voisivat vahvistua samaan aikaan.";
    }

    if (metrics.growth < 0 && reformCapacity < -5) {
      return "Vaalikaudella paketti näyttäisi raskaalta: uudistuksia on paljon, mutta kasvun ja palvelujen hyöty jää vaatimattomaksi.";
    }

    return "Vaalikaudella osa valinnoista ehtisi vaikuttaa, mutta tulos riippuisi paljon siitä, miten hyvin uudistukset todella toteutetaan.";
  }

  if (metrics.growth >= 3 || metrics.education >= 3) {
    return "Ylivaalikaudella rakenteelliset vaikutukset alkaisivat näkyä selvemmin, etenkin kasvussa, osaamisessa ja velkakestävyydessä.";
  }

  if (metrics.growth < 0 && metrics.debt < 0) {
    return "Ylivaalikaudella budjetin ongelmat kasaantuisivat: ilman vahvempaa kasvua myös velka jäisi pitkäksi aikaa nopeaan nousuun.";
  }

  return "Ylivaalikaudella ratkaisevaa olisi, kääntyvätkö rakenteelliset uudistukset oikeasti kasvuksi, vai jäävätkö vaikutukset puolitiehen.";
}

function renderTimelineCards(timeline) {
  return `
    <div class="timeline-grid">
      ${horizonMeta
        .map((horizon) => {
          const snapshot = timeline[horizon.id];
          const servicePressure = getReadoutValue(snapshot.modelReadout, "servicePressure");

          return `
            <article class="timeline-card">
              <div class="timeline-head">
                <strong>${horizon.label}</strong>
                <span class="timeline-weight">Paino koontituloksessa ${round(horizon.weight * 100)} %</span>
              </div>
              <p class="tile-copy">${horizon.description}</p>
              <div class="timeline-kpis">
                <span class="delta-pill ${getDeltaClass(snapshot.metrics.debt)}">Velan kehitys ${formatSignedValue(snapshot.metrics.debt)}</span>
                <span class="delta-pill ${getDeltaClass(snapshot.metrics.growth)}">Kasvu ${formatSignedValue(snapshot.metrics.growth)}</span>
                <span class="delta-pill ${getDeltaClass(snapshot.metrics.wellbeing)}">Hyvinvointi ${formatSignedValue(snapshot.metrics.wellbeing)}</span>
                <span class="delta-pill ${getDeltaClass(servicePressure)}">Palvelut ${formatSignedValue(servicePressure)}</span>
              </div>
              <p class="timeline-copy">${getHorizonSummary(horizon.id, snapshot.metrics, snapshot.modelReadout)}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function getChoiceKeyImpactCopy(metricKey, value) {
  if (metricKey === "debt") {
    if (value > 0) {
      return "hidastaa velan kasvua tässä paketissa";
    }

    if (value < 0) {
      return "kiihdyttää velan kasvua tässä paketissa";
    }

    return "ei juuri muuta velan kehitystä tässä paketissa";
  }

  if (value > 0) {
    return "vahvistaa kasvua tässä paketissa";
  }

  if (value < 0) {
    return "heikentää kasvua tässä paketissa";
  }

  return "ei juuri muuta kasvunäkymää tässä paketissa";
}

function renderChoiceKeyImpacts(beforeMetrics, afterMetrics) {
  const keyMetrics = [
    { key: "debt", label: "Velan kehitys" },
    { key: "growth", label: "Talouskasvu" },
  ];

  return `
    <div class="choice-key-grid">
      ${keyMetrics
        .map((metric) => {
          const value = round(afterMetrics[metric.key] - beforeMetrics[metric.key]);
          const semanticClass = getDeltaClass(value);

          return `
            <article class="key-impact-card ${semanticClass}">
              <div class="key-impact-head">
                <span class="key-impact-label">${metric.label}</span>
                <strong>${formatSignedValue(value)}</strong>
              </div>
              <span class="key-impact-copy">${getChoiceKeyImpactCopy(metric.key, value)}</span>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMetricLegend(options = {}) {
  const { compact = false } = options;

  return `
    <p class="legend-note ${compact ? "legend-note-compact" : ""}">
      Kaikki luvut ovat muutoksia lähtötilanteeseen. <strong>Plussa on aina hyvä, miinus huono.</strong>
      <strong>Velan kehitys</strong>: plussa tarkoittaa, että velan kasvu hidastuu. <strong>Talouskasvu</strong>:
      plussa tarkoittaa vahvempaa kasvunäkymää. <strong>Palvelut</strong>: plussa tarkoittaa, että palvelut
      paranevat, miinus että palvelut heikkenevät.
    </p>
  `;
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
            <span class="metric-value ${getDeltaClass(value)}">${formatSignedValue(value)}</span>
          </div>
          <div class="meter ${metric.tone}">
            ${getMeterFill(value, visibleMetricLimit)}
          </div>
          ${compact ? "" : `<span>${metric.description}</span>`}
        </article>
      `;
    })
    .join("");
}

function metricDeltaPills(beforeMetrics, afterMetrics, options = {}) {
  const { limit = 5, excludeKeys = [] } = options;
  const deltas = metricMeta
    .map((metric) => ({
      key: metric.key,
      label: metric.label,
      value: round(afterMetrics[metric.key] - beforeMetrics[metric.key]),
    }))
    .filter((item) => !excludeKeys.includes(item.key))
    .filter((item) => item.value !== 0)
    .sort((left, right) => Math.abs(right.value) - Math.abs(left.value));

  const visible = deltas.slice(0, limit);
  const remaining = deltas.length - visible.length;

  const pills = visible.map((item) => {
    const deltaClass = getDeltaClass(item.value);

    return `<span class="delta-pill ${deltaClass}">${item.label}: ${formatSignedValue(item.value)}</span>`;
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
      const delta = round(after - before);
      const deltaClass = getDeltaClass(delta);

      return `
        <article class="result-card">
          <strong>${metric.label}</strong>
          <span>${formatSignedValue(before)} -> ${formatSignedValue(after)}</span>
          <div class="choice-deltas">
            <span class="delta-pill ${deltaClass}">${formatSignedValue(delta)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderModelReadout(readout) {
  return `
    <div class="system-grid">
      ${readout
        .map(
          (item) => `
            <article class="system-card">
              <strong>${item.label}</strong>
              <span class="system-value ${getDeltaClass(item.value)}">${formatSignedValue(item.value)}</span>
              <div class="meter meter-system">
                ${getMeterFill(item.value, visibleReadoutLimit)}
              </div>
              <p class="tile-copy">${item.description}</p>
              <p class="system-meaning"><strong>Mitä tämä tarkoittaa:</strong> ${getReadoutMeaning(item)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderHiddenEffectsList(deltas) {
  const items = hiddenDimensionMeta
    .filter((dimension) => (deltas[dimension.key] ?? 0) !== 0)
    .map(
      (dimension) =>
        `<li><strong>${dimension.label}</strong>: ${formatSignedExactValue(deltas[dimension.key])}</li>`,
    );

  if (!items.length) {
    return `<p class="tile-copy">Ei suoraa muutosta näihin taustamuuttujiin.</p>`;
  }

  return `<ul class="muted-list open-model-list">${items.join("")}</ul>`;
}

function renderSupportWeightsList(weights = {}) {
  const items = Object.entries(weights)
    .filter(([, value]) => value !== 0)
    .sort((left, right) => right[1] - left[1])
    .map(
      ([key, value]) =>
        `<li><strong>${getHiddenLabel(key)}</strong>: painokerroin ${formatExactValue(value)}</li>`,
    );

  if (!items.length) {
    return `<p class="tile-copy">Ei erillisiä kohdennuspainoja tässä valinnassa.</p>`;
  }

  return `<ul class="muted-list open-model-list">${items.join("")}</ul>`;
}

function renderBackgroundPressureList() {
  return `
    <ul class="muted-list open-model-list">
      ${backgroundPressureMeta
        .map(
          (item) =>
            `<li><strong>${getHiddenLabel(item.key)}</strong>: ${formatSignedExactValue(item.delta)} / vastattu kysymys</li>`,
        )
        .join("")}
    </ul>
  `;
}

function buildAnswersFromPattern(pattern = []) {
  const answers = {};
  decisions.forEach((decision, index) => {
    const selectedChoice = decision.choices[pattern[index] - 1] ?? decision.choices[0];
    answers[decision.id] = selectedChoice.id;
  });
  return answers;
}

function getPlayerProfileShowcase() {
  const profileExamples = [
    {
      range: "0-24 / 100",
      governance: {
        roleId: "producer-state",
        priorities: ["social-floor", "service-access", "regional-vitality", "rule-of-law"],
        topPriorities: ["social-floor", "service-access"],
      },
      pattern: [3, 3, 3, 3, 3, 2, 1, 2, 2, 2, 3],
      angle:
        "Suojaa nykyisiä rakenteita ja palveluja enemmän kuin hakee kasvua tai laajaa markkinareformia.",
    },
    {
      range: "25-44 / 100",
      governance: {
        roleId: "steering-state",
        priorities: ["fiscal-stability", "service-access", "education-science", "rule-of-law"],
        topPriorities: ["fiscal-stability", "service-access"],
      },
      pattern: [2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2],
      angle:
        "Tekee korjauksia useaan kohtaan, mutta varoo liian kovaa yhtäaikaista reformiaaltoa.",
    },
    {
      range: "45-69 / 100",
      governance: {
        roleId: "guaranteeing-state",
        priorities: ["social-floor", "work-enterprise", "education-science", "individual-freedom"],
        topPriorities: ["social-floor", "work-enterprise"],
      },
      pattern: [2, 3, 4, 3, 3, 2, 4, 2, 4, 4, 4],
      angle:
        "Painottaa kasvua, veropohjan remonttia ja yritysmyönteisiä muutoksia, mutta rakenteelliset uudistukset jäävät hieman vaisuiksi.",
    },
    {
      range: "70-100 / 100",
      governance: {
        roleId: "enabling-state",
        priorities: ["fiscal-stability", "work-enterprise", "education-science", "individual-freedom"],
        topPriorities: ["work-enterprise", "individual-freedom"],
      },
      pattern: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      angle:
        "Nojaa vahvasti rakenteellisiin uudistuksiin, työn ja yrittämisen kannusteisiin sekä valtion roolin karsimiseen.",
    },
  ];

  return profileExamples.map((example) => {
    const answers = buildAnswersFromPattern(example.pattern);
    const result = calculateState(answers, example.governance);
    const scorePercent = round((result.hiddenLiberalScore / maxLiberalScore) * 100);
    const profile = getLiberalProfile(scorePercent);
    const readout = Object.fromEntries(result.modelReadout.map((item) => [item.id, item.value]));
    const governanceContext = getGovernanceContext(example.governance);

    return {
      ...example,
      scorePercent,
      title: profile.title,
      copy: profile.copy,
      metrics: result.metrics,
      readout,
      governanceContext,
    };
  });
}

function renderPlayerProfiles() {
  const root = document.querySelector("#player-profiles");

  if (!root) {
    return;
  }

  const profiles = getPlayerProfileShowcase();

  root.innerHTML = `
    <div class="profile-table-wrap">
      <table class="profile-table">
        <thead>
          <tr>
            <th>Profiili</th>
            <th>Pistealue</th>
            <th>Kuvaus</th>
            <th>Velan kehitys</th>
            <th>Talouskasvu</th>
            <th>Hyvinvointi</th>
            <th>Yrittäjien vapaus</th>
            <th>Palvelut</th>
            <th>Toteutuvuus</th>
          </tr>
        </thead>
        <tbody>
          ${profiles
            .map(
              (profile) => `
                <tr>
                  <td data-label="Profiili">
                    <strong>${profile.title}</strong>
                    <span class="profile-subline">Esimerkkitulos ${profile.scorePercent} / 100</span>
                  </td>
                  <td data-label="Pistealue"><span class="profile-range">${profile.range}</span></td>
                  <td data-label="Kuvaus">
                    <p class="profile-copy">${profile.copy}</p>
                    <p class="profile-copy profile-copy-muted">${profile.angle}</p>
                    <p class="profile-copy profile-copy-muted">
                      <strong>Valtion rooli:</strong> ${profile.governanceContext.role?.title ?? "Ei valittu"}
                    </p>
                    <p class="profile-copy profile-copy-muted">
                      <strong>Kärkiprioriteetit:</strong> ${profile.governanceContext.selection.topPriorities
                        .map((priorityId) => getPriorityTitle(priorityId))
                        .join(", ")}
                    </p>
                  </td>
                  <td data-label="Velan kehitys"><span class="profile-delta ${getDeltaClass(profile.metrics.debt)}">${formatSignedValue(profile.metrics.debt)}</span></td>
                  <td data-label="Talouskasvu"><span class="profile-delta ${getDeltaClass(profile.metrics.growth)}">${formatSignedValue(profile.metrics.growth)}</span></td>
                  <td data-label="Hyvinvointi"><span class="profile-delta ${getDeltaClass(profile.metrics.wellbeing)}">${formatSignedValue(profile.metrics.wellbeing)}</span></td>
                  <td data-label="Yrittäjien vapaus"><span class="profile-delta ${getDeltaClass(profile.metrics.freedom)}">${formatSignedValue(profile.metrics.freedom)}</span></td>
                  <td data-label="Palvelut"><span class="profile-delta ${getDeltaClass(profile.readout.servicePressure)}">${formatSignedValue(profile.readout.servicePressure)}</span></td>
                  <td data-label="Toteutuvuus"><span class="profile-delta ${getDeltaClass(profile.readout.budgetExecution)}">${formatSignedValue(profile.readout.budgetExecution)}</span></td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <p class="mini-note">
      Taulukon luvut ovat edustavia esimerkkibudjetteja tämän version laskentamallista, eivät ainoita mahdollisia
      lopputuloksia kullekin pistehaarukalle.
    </p>
  `;
}

function renderOpenModel() {
  const openModelRoot = document.querySelector("#open-model");

  if (!openModelRoot) {
    return;
  }

  const baselineMetricLookup = Object.fromEntries(
    metricMeta.map((metric) => [metric.key, baselineAbsoluteMetrics[metric.key]]),
  );
  const baselineReadoutLookup = Object.fromEntries(
    baselineAbsoluteModelReadout.map((item) => [item.id, item.value]),
  );

  openModelRoot.innerHTML = `
    <div class="open-model">
      <section class="open-model-section">
        <h4>Ennen budjettia: valtion rooli ja tärkeimmät tehtävät</h4>
        <p class="tile-copy">
          Ennen yhtätoista budjettikysymystä pelaaja tekee vielä perustavan poliittisen valinnan: mikä on valtion
          rooli ja mitkä tehtävät ovat kaikkein tärkeimmät. Tämä ei ratkaise peliä automaattisesti, mutta se
          muuttaa lähtötasoa ja sitä, miten myöhemmät budjettiratkaisut istuvat yhteen pelaajan oman linjan kanssa.
        </p>

        <div class="open-model-grid">
          <article class="open-model-card">
            <h5>Governance-vaiheen säännöt</h5>
            <pre class="formula-block"><code>1. Valitse 1 rooli / 4
2. Valitse 4 prioriteettia / 10
3. Nosta näistä 2 tärkeimmäksi

setupImpact = role.baseImpact + sum(priority.baseImpact * scale)
scale = 1.0 jos prioriteetti on top-2
scale = 0.65 jos prioriteetti on valittu mutta ei top-2

alignmentWeights = role.supportWeights + sum(priority.supportWeights * scale)
scale = 1.0 jos prioriteetti on top-2
scale = 0.6 jos prioriteetti on valittu mutta ei top-2</code></pre>
            <p class="tile-copy">
              Top-2-prioriteetit siis kallistavat mallia voimakkaammin kuin kaksi muuta valittua tehtävää.
            </p>
          </article>

          <article class="open-model-card">
            <h5>Miten governance vaikuttaa pisteisiin ja toteutukseen</h5>
            <pre class="formula-block"><code>governanceLiberalScore = role.hiddenLiberal + sum(selectedPriority.hiddenLiberal)
hiddenLiberalScore = governanceLiberalScore + sum(choice.hiddenLiberal)

when decision effect matches selected role/priorities:
- roleClarity and priorityFit improve
- budgetExecution and implementationCapacity improve

when decision effect conflicts with selected role/priorities:
- roleClarity and priorityFit weaken
- reformPressure grows faster</code></pre>
            <p class="tile-copy">
              Top-2-prioriteetit eivät tuo erillistä lisäpistemäärää, mutta ne vahvistavat selvästi sitä, miten peli
              arvioi valitsemasi budjettiratkaisujen johdonmukaisuutta.
            </p>
          </article>
        </div>

        <div class="open-model-grid">
          <article class="open-model-card">
            <h5>Valtion roolit</h5>
            <div class="open-choice-list">
              ${roleOptions
                .map(
                  (role) => `
                    <section class="open-choice-card">
                      <div class="open-choice-head">
                        <h6>${role.title}</h6>
                        <div class="open-choice-meta">
                          <span class="open-model-chip">Liberaalipisteet ${role.hiddenLiberal}</span>
                        </div>
                      </div>
                      <p class="tile-copy">${role.copy}</p>
                      <div class="open-model-grid">
                        <article class="open-effect-card">
                          <span class="source-heading">Lähtövaikutus</span>
                          ${renderHiddenEffectsList(role.baseImpact)}
                        </article>
                        <article class="open-effect-card">
                          <span class="source-heading">Mitä tämä suosii</span>
                          ${renderSupportWeightsList(role.supportWeights)}
                        </article>
                      </div>
                    </section>
                  `,
                )
                .join("")}
            </div>
          </article>

          <article class="open-model-card">
            <h5>10 mahdollista prioriteettia</h5>
            <div class="open-choice-list">
              ${priorityOptions
                .map(
                  (priority) => `
                    <section class="open-choice-card">
                      <div class="open-choice-head">
                        <h6>${priority.title}</h6>
                        <div class="open-choice-meta">
                          <span class="open-model-chip">Liberaalipisteet ${priority.hiddenLiberal}</span>
                        </div>
                      </div>
                      <p class="tile-copy">${priority.copy}</p>
                      <div class="open-model-grid">
                        <article class="open-effect-card">
                          <span class="source-heading">Lähtövaikutus</span>
                          ${renderHiddenEffectsList(priority.baseImpact)}
                        </article>
                        <article class="open-effect-card">
                          <span class="source-heading">Mitä tämä painottaa</span>
                          ${renderSupportWeightsList(priority.supportWeights)}
                        </article>
                      </div>
                    </section>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>

      <section class="open-model-section">
        <h4>Lähtöarvot</h4>
        <div class="open-model-grid">
          <article class="open-model-card">
            <h5>Piilomuuttujien lähtötaso</h5>
            <p class="tile-copy">
              Nämä ovat mallin 0-100 -asteikolla kulkevat taustamuuttujat ennen ensimmäistä vastausta.
            </p>
            <ul class="muted-list open-model-list">
              ${hiddenDimensionMeta
                .map(
                  (dimension) =>
                    `<li><strong>${dimension.label}</strong>: ${formatExactValue(hiddenBase[dimension.key])}</li>`,
                )
                .join("")}
            </ul>
          </article>

          <article class="open-model-card">
            <h5>Näkyvien mittareiden lähtötaso</h5>
            <p class="tile-copy">
              Jokainen näkyvä mittari lasketaan ensin absoluuttisena 0-100 -lukuna. Pelaajalle näytetään siitä
              muutos suhteessa tähän baselineen, joten aloitus on aina 0.
            </p>
            <ul class="muted-list open-model-list">
              ${visibleMetricFormulaMeta
                .map(
                  (metric) =>
                    `<li><strong>${metric.label}</strong>: absoluuttinen baseline ${formatExactValue(baselineMetricLookup[metric.key])}, pelaajalle näkyvä lähtöarvo 0</li>`,
                )
                .join("")}
            </ul>
          </article>
        </div>
      </section>

      <section class="open-model-section">
        <h4>Kierroslogiikka</h4>
        <p class="tile-copy">
          Jokainen vastattu kysymys käsitellään täsmälleen tässä järjestyksessä. Positiiviset vaikutukset voivat
          jäädä vajaiksi, jos budjetin toteutuvuus tai toimeenpanokyky on heikko. Negatiiviset vaikutukset osuvat
          mallissa täysimääräisemmin.
        </p>
        <pre class="formula-block"><code>executionFactor = 0.65 + budgetExecution / 200
overload = max(0, reformPressure - implementationCapacity)
implementationFactor = max(0.5, 1 - overload / 90)

1. apply immediate effects with baseFactor = 1
2. reformPressure += choice.reformLoad
3. roundsAfterChoice = totalAnswered - answeredIndex - 1
4. maturity = min(1, 0.25 + roundsAfterChoice * 0.25)
5. apply structural effects with baseFactor = maturity
6. apply background pressure once after every answered question

When an effect delta is positive:
- multiply by implementationFactor
          - if key is fiscalSpace or debtSustainability, multiply also by executionFactor

When an effect delta is negative:
- apply it without those bonuses</code></pre>

        <div class="open-model-grid">
          <article class="open-model-card">
            <h5>Aikajänteet ja painot</h5>
            <p class="tile-copy">
              Jokainen vastaus lasketaan kolmella aikajänteellä. Näkyvä koontitulos on näiden aikajänteiden
              painotettu yhdistelmä.
            </p>
            <ul class="muted-list open-model-list">
              ${horizonMeta
                .map(
                  (horizon) =>
                    `<li><strong>${horizon.label}</strong>: paino ${round(
                      horizon.weight * 100,
                    )} %, taustapainekerroin ${formatExactValue(horizon.pressureScale)}. ${horizon.description}</li>`,
                )
                .join("")}
            </ul>
            <pre class="formula-block"><code>aggregateHidden = year * 0.25 + term * 0.45 + postTerm * 0.30
visibleMetrics = deriveMetrics(aggregateHidden)
modelReadout = deriveModelReadout(aggregateHidden)</code></pre>
          </article>

          <article class="open-model-card">
            <h5>Automaattinen taustapaine</h5>
            <p class="tile-copy">
              Tämä paine ajetaan jokaisen vastatun kysymyksen jälkeen, vaikka pelaaja ei valitsisi mitään uutta
              säästöä tai lisäpanostusta. Eri aikajänteillä paine kerrotaan omalla aikakertoimellaan.
            </p>
            ${renderBackgroundPressureList()}
          </article>

          <article class="open-model-card">
            <h5>Liberaalipisteet</h5>
            <p class="tile-copy">
              Jokaisella roolilla, jokaisella valitulla prioriteetilla ja jokaisella budjettivaihtoehdolla on oma
              piilotettu liberaalipistemäärä. Lopussa ne summataan ja skaalataan prosentiksi suhteessa kovimpaan
              mahdolliseen liberaaliin polkuun.
            </p>
            <pre class="formula-block"><code>hiddenLiberalScore =
  role.hiddenLiberal +
  sum(selectedPriority.hiddenLiberal) +
  sum(choice.hiddenLiberal)
scorePercent = round((hiddenLiberalScore / ${maxLiberalScore}) * 100)</code></pre>
            <p class="tile-copy">
              Tämän version maksimi on ${maxLiberalScore} pistettä, jos pelaaja valitsee yhden liberaaleimman roolin,
              neljä eniten pisteitä tuottavaa prioriteettia ja jokaisesta kysymyksestä suurimman liberaalipistemäärän
              tuottavan vaihtoehdon.
            </p>
          </article>
        </div>
      </section>

      <section class="open-model-section">
        <h4>Rakenteellisten vaikutusten jakautuminen aikajänteille</h4>
        <p class="tile-copy">
          Jokaisen vaihtoehdon välitön vaikutus näkyy kaikilla aikajänteillä. Rakenteellinen viivevaikutus jaetaan
          ensin vaalikaudelle ja ylivaalikaudelle piilomuuttujakohtaisilla toteutumisosuuksilla. Ylivaalikaudella
          käytetään täyttä rakenteellista vaikutusta.
        </p>
        <div class="open-model-grid">
          <article class="open-model-card">
            <h5>Aikajännekaavat</h5>
            <pre class="formula-block"><code>yearEffect = immediate
termEffect = immediate + structural * termShare[key]
postTermEffect = immediate + structural

yearState uses pressureScale 1.0
termState uses pressureScale 2.2
postTermState uses pressureScale 3.4</code></pre>
          </article>
          <article class="open-model-card">
            <h5>Rakenteellisten vaikutusten osuudet</h5>
            <ul class="muted-list open-model-list">
              ${hiddenDimensionMeta
                .map((dimension) => {
                  const shares = structuralRealisationShares[dimension.key] ?? { term: 0.5, postTerm: 0.5 };
                  return `<li><strong>${dimension.label}</strong>: vaalikausi ${round(
                    shares.term * 100,
                  )} %, ylivaalikausi ${round(shares.postTerm * 100)} %</li>`;
                })
                .join("")}
            </ul>
          </article>
        </div>
      </section>

      <section class="open-model-section">
        <h4>Näkyvien mittareiden kaavat</h4>
        <div class="open-model-grid">
          ${visibleMetricFormulaMeta
            .map(
              (metric) => `
                <article class="open-model-card">
                  <h5>${metric.label}</h5>
                  <pre class="formula-block"><code>${metric.formula}</code></pre>
                  <p class="tile-copy">
                    Pelissä näkyvä arvo = nykyinen absoluuttinen luku - baseline ${formatExactValue(
                      baselineMetricLookup[metric.key],
                    )}.
                  </p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="open-model-section">
        <h4>Taustalukujen kaavat</h4>
        <div class="open-model-grid">
          ${modelReadoutFormulaMeta
            .map(
              (item) => `
                <article class="open-model-card">
                  <h5>${item.label}</h5>
                  <pre class="formula-block"><code>${item.formula}</code></pre>
                  <p class="tile-copy">
                    ${
                      item.id === "servicePressure"
                        ? `Pelissä näkyvä arvo = baseline ${formatExactValue(
                            baselineReadoutLookup[item.id],
                          )} - nykyinen absoluuttinen luku, jotta plussa tarkoittaa palvelujen paranemista.`
                        : `Pelissä näkyvä arvo = nykyinen absoluuttinen luku - baseline ${formatExactValue(
                            baselineReadoutLookup[item.id],
                          )}.`
                    }
                  </p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="open-model-section">
        <h4>Kaikki päätösvaikutukset</h4>
        <p class="tile-copy">
          Alla on jokaisen ${decisions.length} kysymyksen jokainen vaihtoehto täsmälleen niillä vaikutuksilla, joilla peli niitä laskee.
          Tässä ne on avattu aikajänteittäin: mitä vaikutus tarkoittaa vuoden sisällä, vaalikaudella ja
          ylivaalikaudella.
        </p>

        <div class="open-decision-list">
          ${decisions
            .map(
              (decision, index) => `
                <article class="open-decision-card">
                  <div class="open-decision-head">
                    <div>
                      <p class="hero-kicker">${decision.topic}</p>
                      <h5>${index + 1}. ${decision.title}</h5>
                    </div>
                    <span class="open-model-chip">4 vaihtoehtoa</span>
                  </div>

                  <p class="tile-copy">${decision.summary}</p>
                  <p class="source-line">Lähdepohja: ${decision.sources}</p>

                  <div class="open-choice-list">
                    ${decision.choices
                      .map(
                        (choice) => `
                          <section class="open-choice-card">
                            <div class="open-choice-head">
                              <h6>${choice.title}</h6>
                              <div class="open-choice-meta">
                                <span class="open-model-chip">Reformikuorma ${choice.reformLoad}</span>
                                <span class="open-model-chip">Liberaalipisteet ${choice.hiddenLiberal}</span>
                              </div>
                            </div>

                            <p class="tile-copy">${choice.copy}</p>

                            <div class="open-effect-grid">
                              <article class="open-effect-card">
                                <span class="source-heading">Vuosi</span>
                                ${renderHiddenEffectsList(choice.horizonEffects.year)}
                              </article>

                              <article class="open-effect-card">
                                <span class="source-heading">Vaalikausi</span>
                                ${renderHiddenEffectsList(choice.horizonEffects.term)}
                              </article>

                              <article class="open-effect-card">
                                <span class="source-heading">Ylivaalikausi</span>
                                ${renderHiddenEffectsList(choice.horizonEffects.postTerm)}
                              </article>
                            </div>
                          </section>
                        `,
                      )
                      .join("")}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderDecisionProgress(options = {}) {
  const {
    answeredCount = getAnsweredCount(),
    currentLabel = `${state.currentDecisionIndex + 1}. kysymys`,
    progress = ((state.currentDecisionIndex + 1) / decisions.length) * 100,
  } = options;

  return `
    <div class="progress-card">
      <div class="progress-head">
        <strong>Vastattu ${answeredCount} / ${decisions.length}</strong>
        <span>${currentLabel}</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span style="width: ${progress}%"></span>
      </div>
    </div>
  `;
}

function getLiberalProfile(scorePercent) {
  if (scorePercent >= 70) {
    return {
      title: "Liberaali uudistaja",
      copy:
        "Ratkaisusi nojaavat vahvasti työn, yrittämisen, ydinvaltion ja rakenteellisten uudistusten suuntaan. Budjettisi osuu lähelle Liberaalipuolueen ajattelutapaa.",
    };
  }

  if (scorePercent >= 45) {
    return {
      title: "Uudistava tasapainottaja",
      copy:
        "Rakennat markkinaehtoisempaa Suomea, mutta jätät julkiselle vallalle myös vahvan korjaavan roolin. Tulos on liberaalin politiikan suuntainen.",
    };
  }

  if (scorePercent >= 25) {
    return {
      title: "Varovainen korjaaja",
      copy:
        "Haet muutosta, mutta suojaat monia nykyisiä rakenteita. Budjettisi yrittää uudistaa ilman että järjestelmä heiluu liikaa.",
    };
  }

  return {
    title: "Säilyttävä budjetoija",
    copy:
      "Valinnoissasi painoivat vakaus, suojakerrokset ja nykyisen mallin varovainen ylläpito enemmän kuin laaja markkinaliberaali reformi.",
  };
}

function getPriorityTitle(priorityId) {
  return getPriorityOption(priorityId)?.title ?? priorityId;
}

function renderSelectedPriorityList(priorityIds = []) {
  if (!priorityIds.length) {
    return `<p class="mini-note">Et ole vielä valinnut prioriteetteja.</p>`;
  }

  return `
    <ul class="muted-list answer-list">
      ${priorityIds.map((priorityId) => `<li><strong>${getPriorityTitle(priorityId)}</strong></li>`).join("")}
    </ul>
  `;
}

function renderGovernance() {
  const governance = normaliseGovernance(state.governance);
  state.governance = governance;

  const governanceState = calculateState({}, governance);
  const selectedRole = getRoleOption(governance.roleId);
  const prioritiesComplete = governance.priorities.length === maxSelectedPriorities;
  const topPrioritiesReady = governance.topPriorities.length === topPriorityCount;

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="decision-panel">
        <p class="section-kicker">Ennen budjettia</p>
        <div class="decision-tag">Valtion rooli ja tärkeimmät tehtävät</div>
        <h2 class="section-title">Millaisen valtion haluat rakentaa?</h2>
        <p class="decision-copy">
          Ennen kuin alat siirtää euroja, sinun täytyy päättää mitä valtion ylipäänsä kuuluu tehdä. Tämä valinta
          vaikuttaa siihen, miten peli tulkitsee myöhempiä budjettiratkaisuja.
        </p>
        <p class="mini-note">
          Valitse ensin valtion rooli. Sen jälkeen valitse neljä tärkeintä tehtävää kymmenestä ja nosta niistä vielä
          kaksi kaikkein tärkeimmäksi.
        </p>

        <article class="source-card">
          <strong class="source-heading">1. Valtion rooli</strong>
          <p class="tile-copy">
            Roolivalinta ei ole sama asia kuin budjetin koko. Se kertoo, tekeekö valtio itse paljon, takaako se
            palvelut eri tuotantotavoilla vai keskittyykö se vahvemmin ytimeen ja mahdollistamiseen.
          </p>
          <div class="governance-grid">
            ${roleOptions
              .map(
                (role) => `
                  <button
                    class="choice-button governance-button ${governance.roleId === role.id ? "selected" : ""}"
                    data-action="select-role"
                    data-role-id="${role.id}"
                    aria-pressed="${governance.roleId === role.id ? "true" : "false"}"
                  >
                    <div class="choice-title-row">
                      <strong>${role.title}</strong>
                    </div>
                    <p class="choice-copy">${role.copy}</p>
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>

        <article class="source-card">
          <strong class="source-heading">2. Valitse 4 valtion tärkeintä tehtävää</strong>
          <p class="tile-copy">
            Tässä kohtaa et voi valita kaikkea. Juuri tämä priorisointi kertoo, mitä budjetti yrittää ennen kaikkea
            suojata tai vahvistaa.
          </p>
          <div class="priority-grid">
            ${priorityOptions
              .map(
                (priority) => `
                  <button
                    class="priority-button ${governance.priorities.includes(priority.id) ? "selected" : ""}"
                    data-action="toggle-priority"
                    data-priority-id="${priority.id}"
                    aria-pressed="${governance.priorities.includes(priority.id) ? "true" : "false"}"
                  >
                    <strong>${priority.title}</strong>
                    <span>${priority.copy}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <p class="mini-note">Valittu ${governance.priorities.length} / ${maxSelectedPriorities}</p>
        </article>

        <article class="source-card ${prioritiesComplete ? "" : "source-card-muted"}">
          <strong class="source-heading">3. Nosta 2 tärkeimmäksi</strong>
          <p class="tile-copy">
            Nämä kaksi tehtävää painavat eniten, kun peli arvioi sopivatko myöhemmät budjettiratkaisusi omaan
            valitsemaasi valtion linjaan.
          </p>
          <div class="priority-grid priority-grid-compact">
            ${governance.priorities
              .map(
                (priorityId) => `
                  <button
                    class="priority-button ${governance.topPriorities.includes(priorityId) ? "top-selected" : ""}"
                    data-action="toggle-top-priority"
                    data-priority-id="${priorityId}"
                    aria-pressed="${governance.topPriorities.includes(priorityId) ? "true" : "false"}"
                    ${prioritiesComplete ? "" : "disabled"}
                  >
                    <strong>${getPriorityTitle(priorityId)}</strong>
                    <span>${governance.topPriorities.includes(priorityId) ? "Tärkein prioriteetti" : "Nosta tärkeimmäksi"}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <p class="mini-note">Valittu ${governance.topPriorities.length} / ${topPriorityCount}</p>
        </article>
      </div>

      <aside class="summary-panel">
        <div class="stepper" aria-label="Pelin vaiheet">
          <span class="step-dot active"></span>
          <span class="step-dot active"></span>
          <span class="step-dot active"></span>
          <span class="step-dot"></span>
        </div>

        <div class="side-note">
          <h3>Nykyinen valintasi</h3>
          <p class="tile-copy">
            ${selectedRole ? `Valtion rooli: <strong>${selectedRole.title}</strong>.` : "Et ole vielä valinnut valtion roolia."}
          </p>
          <p class="tile-copy">Valitut tehtävät:</p>
          ${renderSelectedPriorityList(governance.priorities)}
          <p class="tile-copy">Kaksi tärkeintä:</p>
          ${renderSelectedPriorityList(governance.topPriorities)}
        </div>

        <div class="side-note">
          <h3>Miten tämä vaikuttaa peliin?</h3>
          <p class="tile-copy">
            Valtion rooli ja prioriteetit eivät anna suoraan “oikeita vastauksia”, mutta ne muuttavat sitä, miten
            uskottavasti myöhemmät budjettiratkaisut toteutuvat ja mitä hyvinvointi tässä mallissa tarkoittaa.
          </p>
        </div>

        <div class="metric-grid metric-grid-compact">
          ${metricCards(governanceState.metrics, { compact: true })}
        </div>

        ${renderModelReadout(governanceState.modelReadout)}

        <div class="nav-row">
          <button class="button" data-action="start-questions" ${isGovernanceComplete(governance) ? "" : "disabled"}>
            Siirry päättämään
          </button>
          <button class="ghost-button" data-action="go-metrics">Takaisin</button>
        </div>

        <p class="mini-note">
          ${isGovernanceComplete(governance)
            ? "Pohjavalinnat ovat valmiit. Seuraavaksi alat rakentaa budjettia niiden päälle."
            : "Et pääse budjettikysymyksiin ennen kuin valitset roolin, 4 tehtävää ja 2 tärkeintä prioriteettia."}
        </p>
      </aside>
    </section>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="screen screen-grid">
      <div>
        <p class="hero-kicker">Suomi keväällä 2026</p>
        <h2 class="hero-title">Rakenna Suomen budjetti <span class="hero-title-tail">11 päätöksellä.</span></h2>
        <p class="hero-copy">
          Tämä peli alkaa tilanteesta, jossa Suomi yrittää samaan aikaan hillitä velkaa, pitää palvelut pystyssä,
          vahvistaa kasvua ja vastata turvallisuusympäristön muutokseen.
        </p>
        <p class="section-copy">
          Et aloita puolueen nimestä vaan valinnoista. Ensin näet tilannekatsauksen, sitten määrittelet valtion roolin
          ja tärkeimmät tehtävät, teet 11 päätöstä ja
          lopuksi saat pisteet, mittarit ja analyysin siitä, mitä budjettisi tarkoittaisi oikeassa
          kansantaloudessa.
        </p>
        <div class="cta-row">
          <button class="button" data-action="go-metrics">Aloita peli</button>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="stepper" aria-label="Pelin vaiheet">
          <span class="step-dot active"></span>
          <span class="step-dot"></span>
          <span class="step-dot"></span>
          <span class="step-dot"></span>
        </div>

        <div class="hero-stats">
          <article class="stat-pill">
            <strong>1. Tilannekatsaus</strong>
            <span>Näet ensin tiiviin kuvan Suomen velasta, palveluista, kasvusta ja turvallisuudesta.</span>
          </article>
          <article class="stat-pill">
            <strong>2. Valitse valtion rooli</strong>
            <span>Päätät ensin, mitä valtion kuuluu ensisijaisesti tehdä ja mitä tehtäviä se priorisoi.</span>
          </article>
          <article class="stat-pill">
            <strong>3. Tee 11 päätöstä</strong>
            <span>Verotus, sote, koulutus, tekoäly, turvallisuus ja aluepolitiikka ovat mukana samassa kierroksessa.</span>
          </article>
          <article class="stat-pill">
            <strong>4. Saat analyysin</strong>
            <span>Peli arvioi myös liberaalipisteet ja selittää, mitä budjettisi tarkoittaisi kansantaloudessa.</span>
          </article>
        </div>

        <p class="mini-note">
          ${scenario.description}
        </p>
      </aside>
    </section>
  `;
}

function renderMetrics() {
  const { metrics, modelReadout } = calculateState();

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="metric-panel">
        <p class="section-kicker">${scenario.name}</p>
        <h2 class="section-title">Tilannekatsaus</h2>
        <p class="section-copy">
          Suomen ongelma ei ole vain yksi menokohta tai yksi vero. Keväällä 2026 samaan aikaan kiristyvät julkinen
          talous, palvelujen tilanne, heikko kasvu ja turvallisuusmenot. Tätä kokonaisuutta vasten peli lukee valintasi.
        </p>

        <div class="analysis-grid">
          ${executiveSummaryItems
            .map(
              (item) => `
                <article class="analysis-card">
                  <strong>${item.title}</strong>
                  <p class="tile-copy">${item.copy}</p>
                </article>
              `,
            )
            .join("")}
        </div>

        <article class="side-note">
          <h3>Näillä mittareilla peli arvioi budjettia</h3>
          <p class="tile-copy">
            Tilannekatsauksessa kaikki mittarit alkavat arvosta 0, koska 0 tarkoittaa kevään 2026 lähtötilannetta.
            Seuraavassa vaiheessa valitset valtion roolin ja tärkeimmät tehtävät, jotka alkavat jo kallistaa tätä
            lähtöasetelmaa ennen varsinaisia budjettipäätöksiä.
          </p>
          ${renderMetricLegend({ compact: true })}
        </article>

        <div class="metric-grid">
          ${metricCards(metrics)}
        </div>
      </div>

      <aside class="sidebar-panel">
        <div class="stepper" aria-label="Pelin vaiheet">
          <span class="step-dot active"></span>
          <span class="step-dot active"></span>
          <span class="step-dot"></span>
          <span class="step-dot"></span>
        </div>

        <div class="side-note">
          <h3>Mitä mittarien alla tapahtuu?</h3>
          <p class="tile-copy">
            Jokaisella päätöksellä on välitön ja viivästetty vaikutus. Lisäksi taustalla kulkevat
            budjetin toteutuvuus, uudistusvara ja palvelujen suunta, joten kaikki säästöt tai hyödyt eivät näy heti.
          </p>
          <p class="tile-copy">
            Peli laskee jokaisen vastauksen kolmella aikajänteellä: vuosi, vaalikausi ja ylivaalikausi. Näkyvä
            mittaristo on näiden kolmen aikajänteen painotettu koonti.
          </p>
        </div>

        ${renderModelReadout(modelReadout)}

        <div class="nav-row">
          <button class="button" data-action="go-governance">Määritä valtion rooli</button>
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

  const baseAnswers = { ...state.answers };
  delete baseAnswers[decision.id];

  const baseState = calculateState(baseAnswers);
  const activeState = calculateState(state.answers);
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

        <article class="source-card">
          <strong class="source-heading">Tilannekuva</strong>
          <p class="tile-copy">${decision.situation}</p>
          <p class="source-line">Lähdepohja: ${decision.sources}</p>
        </article>

        <div class="choice-grid">
          ${decision.choices
            .map((choice) => {
              const projectedState = calculateState({
                ...baseAnswers,
                [decision.id]: choice.id,
              });

              return `
                <button
                  class="choice-button ${selectedChoiceId === choice.id ? "selected" : ""}"
                  data-action="select-choice"
                  data-choice-id="${choice.id}"
                  aria-pressed="${selectedChoiceId === choice.id ? "true" : "false"}"
                >
                  <div class="choice-title-row">
                    <strong>${choice.title}</strong>
                  </div>
                  <p class="choice-copy">${choice.copy}</p>
                  ${renderChoiceKeyImpacts(baseState.metrics, projectedState.metrics)}
                  <div class="choice-deltas">
                    ${metricDeltaPills(baseState.metrics, projectedState.metrics, {
                      limit: 4,
                      excludeKeys: ["debt", "growth"],
                    })}
                  </div>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>

      <aside class="summary-panel">
        ${renderDecisionProgress()}

        <div class="side-note">
          <h3>Mittarit juuri nyt</h3>
          <p class="tile-copy">
            Kun valitset vaihtoehdon, näet saman tien sen kertyvän vaikutuksen tähän mennessä annettuihin vastauksiin.
          </p>
          <p class="tile-copy">
            Tämä näkymä on kolmen aikajänteen koonti: vuosi, vaalikausi ja ylivaalikausi lasketaan erikseen ja
            yhdistetään yhdeksi tulosnäkymäksi.
          </p>
          ${renderMetricLegend({ compact: true })}
        </div>

        <div class="metric-grid metric-grid-compact">
          ${metricCards(activeState.metrics, { compact: true })}
        </div>

        ${renderModelReadout(activeState.modelReadout)}

        <div class="nav-row">
          <button class="button" data-action="next-decision" ${selectedChoiceId ? "" : "disabled"}>
            ${isLastDecision ? "Näytä tulokseni" : "Seuraava kysymys"}
          </button>
          <button class="ghost-button" data-action="${state.currentDecisionIndex === 0 ? "go-governance" : "previous-decision"}">
            ${state.currentDecisionIndex === 0 ? "Takaisin valtion rooliin" : "Edellinen kysymys"}
          </button>
        </div>
      </aside>
    </section>
  `;
}

function renderFinal() {
  const {
    hidden,
    metrics,
    modelReadout,
    timeline,
    hiddenLiberalScore,
    completedChoices,
    governanceContext,
  } = calculateState();
  const scorePercent = round((hiddenLiberalScore / maxLiberalScore) * 100);
  const profile = getLiberalProfile(scorePercent);
  const analysis = getBudgetImpactAnalysis(metrics, modelReadout, governanceContext);

  const rankedMetrics = metricMeta
    .map((metric) => ({
      ...metric,
      value: metrics[metric.key],
    }))
    .sort((left, right) => right.value - left.value);

  const strengths = rankedMetrics.slice(0, 3);
  const weakest = [...rankedMetrics].reverse().slice(0, 3);
  const debtMeaning = getOutcomeMeaning("debt", metrics.debt);
  const growthMeaning = getOutcomeMeaning("growth", metrics.growth);

  app.innerHTML = `
    <section class="screen screen-grid">
      <div class="result-panel">
        <p class="section-kicker">${scenario.name}</p>
        <h2 class="section-title">${profile.title}</h2>
        <p class="section-copy">
          ${profile.copy} Lopputulos arvioitiin Suomi keväällä 2026 -lähtötilannetta vasten, jossa velka,
          palvelujen tilanne, osaajapula ja turvallisuusmenot kehittyvät myös ilman uusia poliittisia päätöksiä.
        </p>

        <div class="result-banner score-banner">
          <span class="score-label">Liberaalipisteesi</span>
          <strong class="score-value">${scorePercent} / 100</strong>
          <p class="tile-copy">
            Piste kuvaa sitä, kuinka lähelle valtion rooli, tärkeimmät tehtävät ja budjettivalinnat yhdessä osuvat
            Liberaalipuolueen markkinaliberaalia ja ydinvaltiota korostavaa kokonaislinjaa.
          </p>
        </div>

        <div class="side-note">
          <h3>Aikajänteet mukana tuloksessa</h3>
          <p class="tile-copy">
            Tämä koontiraportti painottaa aikajänteitä näin: vuosi 25 %, vaalikausi 45 % ja ylivaalikausi 30 %.
            Näin nopeat vaikutukset näkyvät mukana, mutta kaikkea ei arvioida vain yhden budjettivuoden perusteella.
          </p>
        </div>

        ${renderTimelineCards(timeline)}

        <div class="key-outcome-grid">
          <article class="key-outcome-card ${getDeltaClass(metrics.debt)}">
            <span class="key-outcome-label">Koontitulos: velan kehitys ${formatSignedValue(metrics.debt)}</span>
            <p class="tile-copy">${debtMeaning}</p>
          </article>
          <article class="key-outcome-card ${getDeltaClass(metrics.growth)}">
            <span class="key-outcome-label">Koontitulos: talouskasvu ${formatSignedValue(metrics.growth)}</span>
            <p class="tile-copy">${growthMeaning}</p>
          </article>
        </div>

        <div class="analysis-grid">
          <article class="analysis-card">
            <strong>Julkinen talous</strong>
            <p class="tile-copy">${analysis.publicFinance}</p>
          </article>
          <article class="analysis-card">
            <strong>Kasvu ja yritystoiminta</strong>
            <p class="tile-copy">${analysis.growthAndEnterprise}</p>
          </article>
          <article class="analysis-card">
            <strong>Palvelut ja arki</strong>
            <p class="tile-copy">${analysis.societyAndServices}</p>
          </article>
          <article class="analysis-card">
            <strong>Valtion tehtävät</strong>
            <p class="tile-copy">${analysis.governanceCopy}</p>
          </article>
          <article class="analysis-card">
            <strong>Toteutettavuus</strong>
            <p class="tile-copy">${analysis.implementationCopy}</p>
          </article>
        </div>

        <div class="result-banner">
          <span class="score-label">${analysis.macroTitle}</span>
          <p class="tile-copy">${analysis.macroCopy}</p>
        </div>

        ${renderMetricLegend()}

        <div class="result-grid">
          ${resultCards(zeroMetrics, metrics)}
        </div>
      </div>

      <aside class="summary-panel">
        ${renderModelReadout(modelReadout)}

        <div class="side-note">
          <h3>Vahvimmat kohdat</h3>
          <ul class="muted-list">
            ${strengths.map((metric) => `<li>${metric.label}: ${formatSignedValue(metric.value)}</li>`).join("")}
          </ul>
        </div>

        <div class="side-note">
          <h3>Eniten painetta jäi</h3>
          <ul class="muted-list">
            ${weakest.map((metric) => `<li>${metric.label}: ${formatSignedValue(metric.value)}</li>`).join("")}
          </ul>
        </div>

        <div class="side-note">
          <h3>Valtion rooli ja tärkeimmät tehtävät</h3>
          <ul class="muted-list">
            <li>Valtion rooli: ${governanceContext.role?.title ?? "Ei valittu"}</li>
            <li>4 tehtävää: ${governanceContext.priorities.map((priority) => priority.title).join(", ") || "Ei valittu"}</li>
            <li>2 tärkeintä: ${governanceContext.selection.topPriorities.map((priorityId) => getPriorityTitle(priorityId)).join(", ") || "Ei valittu"}</li>
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

        <div class="side-note">
          <h3>Taustamallin tila lopussa</h3>
          <ul class="muted-list">
            <li>Fiskaalinen liikkumatila: ${formatSignedValue(round(hidden.fiscalSpace - hiddenBase.fiscalSpace))}</li>
            <li>Palvelukyky: ${formatSignedValue(round(hidden.serviceCapacity - hiddenBase.serviceCapacity))}</li>
            <li>Kasvupotentiaali: ${formatSignedValue(round(hidden.growthPotential - hiddenBase.growthPotential))}</li>
            <li>Toteutuspaine: ${formatSignedValue(round(hidden.reformPressure - hiddenBase.reformPressure))}</li>
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
    case "governance":
      renderGovernance();
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
    scrollToTop();
    return;
  }

  if (action === "go-metrics") {
    state.step = "metrics";
    render();
    scrollToTop();
    return;
  }

  if (action === "go-governance") {
    state.step = "governance";
    render();
    scrollToTop();
    return;
  }

  if (action === "start-questions") {
    if (!isGovernanceComplete()) {
      return;
    }

    state.currentDecisionIndex =
      getAnsweredCount() === decisions.length ? 0 : getFirstUnansweredIndex();
    state.step = "decision";
    render();
    scrollToTop();
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

  if (action === "select-role") {
    state.governance = {
      ...state.governance,
      roleId: target.dataset.roleId,
    };
    render();
    return;
  }

  if (action === "toggle-priority") {
    const priorityId = target.dataset.priorityId;
    const governance = normaliseGovernance(state.governance);
    const selected = governance.priorities.includes(priorityId);
    const priorities = selected
      ? governance.priorities.filter((item) => item !== priorityId)
      : governance.priorities.length < maxSelectedPriorities
        ? [...governance.priorities, priorityId]
        : governance.priorities;
    const topPriorities = governance.topPriorities.filter((item) => priorities.includes(item));

    state.governance = {
      ...governance,
      priorities,
      topPriorities,
    };
    render();
    return;
  }

  if (action === "toggle-top-priority") {
    const priorityId = target.dataset.priorityId;
    const governance = normaliseGovernance(state.governance);

    if (!governance.priorities.includes(priorityId)) {
      return;
    }

    const selected = governance.topPriorities.includes(priorityId);
    const topPriorities = selected
      ? governance.topPriorities.filter((item) => item !== priorityId)
      : governance.topPriorities.length < topPriorityCount
        ? [...governance.topPriorities, priorityId]
        : governance.topPriorities;

    state.governance = {
      ...governance,
      topPriorities,
    };
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
      scrollToTop();
      return;
    }

    state.currentDecisionIndex += 1;
    render();
    scrollToTop();
    return;
  }

  if (action === "previous-decision") {
    state.currentDecisionIndex = Math.max(0, state.currentDecisionIndex - 1);
    state.step = "decision";
    render();
    scrollToTop();
    return;
  }

  if (action === "edit-answers") {
    state.currentDecisionIndex = 0;
    state.step = "decision";
    render();
    scrollToTop();
    return;
  }

  if (action === "restart") {
    state.step = "home";
    state.currentDecisionIndex = 0;
    state.answers = {};
    state.governance = createEmptyGovernanceSelection();
    render();
    scrollToTop();
  }
});

if (viewToggles.length) {
  viewToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      setActiveView(toggle.dataset.viewToggle, { scroll: true });
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && explainPanel && !explainPanel.hidden) {
    setActiveView("game");
  }
});

renderPlayerProfiles();
renderOpenModel();
setActiveView("game");
render();
