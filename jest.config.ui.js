const sharedConfig = require("./jest.config");

module.exports = {
  ...sharedConfig,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/betaUI/**/*.ts"],
  testMatch: ["**/?(*.)+(spec|test).ui.ts?(x)"],
};
