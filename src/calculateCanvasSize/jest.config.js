module.exports = {
  testEnvironment: "node",
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
};

