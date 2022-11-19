const sharedConfig = require("./jest.config");

module.exports = {
  ...sharedConfig,
  testEnvironment: "jest-bench/environment",
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-node",
  },
  reporters: ["default", "jest-bench/reporter"],
  testRegex: "(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$",
};
