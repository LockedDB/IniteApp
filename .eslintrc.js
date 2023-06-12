module.exports = {
  root: true,
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0, // TODO: Define type checking strategy
    'default-case': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-extraneous-dependencies': 0,
    'import/no-self-import': 0,
    'react/require-default-props': 0,
    'react/jsx-no-leaked-render': [
      'error',
      { validStrategies: ['coerce', 'ternary'] },
    ],
    'react/display-name': 2, // Enforces displayName to be readable
    'consistent-return': 0, // Allow arrow functions to not return nothing.
    'no-restricted-syntax': 0, // Don't disable generators/async await syntax.
    'import/prefer-default-export': 0, // Enable any kind exports.
    'import/named': 0, // TODO: Check on Tech meeting Takes very long
    'prefer-arrow-callback': 0, // Reenable it?
    'jest/expect-expect': 0, // don't play well with expectSaga
    'jest/no-mocks-import': 0, // TODO: on our case __mocks__ are objects not the instance(most of the time)
    'import/no-unresolved': 0, // TODO: Do we need if we use tsc?
    'import/no-relative-packages': 0, // TODO: Check on Tech meeting
    'react/function-component-definition': 0, // TODO: Check on Tech meeting
    'arrow-body-style': 0, // TODO: Check on Tech meeting
    'react/no-unstable-nested-components': 0, // Reenable it?
    'no-constructor-return': 0, // Reenable it?
    'prefer-exponentiation-operator': 0, // Reenable it?
    '@typescript-eslint/no-unnecessary-type-constraint': 0, // Reenable it?
    'default-param-last': 0, // Reenable it
    'react/jsx-no-constructed-context-values': 0,
    quotes: 1,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ], // Enable it for slice.ts files
    'react/jsx-filename-extension': [
      1,
      { extensions: [`${FLAVOR}.ts`, `${FLAVOR}.tsx`, '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  extends: '@react-native-community',
};
