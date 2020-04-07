// eslint-disable-next-line
module.exports = {
  testPathIgnorePatterns: ['dist/'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
