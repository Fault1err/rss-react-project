module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
  },
  coverage: {
    include: ['**/*.tsx'], 
    exclude: [
      '**/node_modules/**', 
      '**/*.test.tsx',      
      '**/*.spec.tsx',     
      'src/__tests__/setup.ts', 
    ],
  },
};