import nextJest from 'next/jest.js';
import type { Config } from 'jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coverageProvider: "v8",
};

export default createJestConfig(config);
