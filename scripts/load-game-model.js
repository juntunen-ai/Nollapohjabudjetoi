const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function createStubElement() {
  return {
    dataset: {},
    hidden: false,
    innerHTML: "",
    addEventListener() {},
    querySelector() {
      return createStubElement();
    },
    querySelectorAll() {
      return [];
    },
    closest() {
      return null;
    },
    classList: {
      add() {},
      remove() {},
      toggle() {},
    },
  };
}

function loadGameModel(projectRoot = path.resolve(__dirname, "..")) {
  const appPath = path.join(projectRoot, "app.js");
  const source = fs.readFileSync(appPath, "utf8");
  const context = {
    console,
    Math,
    setTimeout,
    clearTimeout,
    document: {
      querySelector() {
        return createStubElement();
      },
      querySelectorAll() {
        return [];
      },
      addEventListener() {},
    },
    window: {
      scrollTo() {},
    },
  };

  vm.createContext(context);
  vm.runInContext(
    `${source}
this.__exports = {
  scenario,
  metricMeta,
  horizonMeta,
  hiddenBase,
  decisions,
  maxLiberalScore,
  calculateState
};`,
    context,
    { filename: appPath },
  );

  return context.__exports;
}

module.exports = {
  loadGameModel,
};
