export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/vitest.setup.ts'],
  include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
};
