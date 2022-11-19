module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/ui/components/$1",
    "^pages/(.*)$": "<rootDir>/src/ui/pages/$1",
    "^hooks/(.*)$": "<rootDir>/src/ui/hooks/$1",
    "@types": "<rootDir>/src/types",
    "@figma": "<rootDir>/src/plugin/figma",
    "@theme": "<rootDir>/src/plugin/theme",
    "^@test$": "<rootDir>/test/helpers",
    "ui-test-utils": "<rootDir>/test/ui-test-utils",
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
};
