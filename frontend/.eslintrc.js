module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-case-declarations": "warn",
    "no-extra-boolean-cast": "warn",
    "no-useless-escape": "warn",
    "no-prototype-builtins": "warn",
    "no-dupe-keys": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "warn"

  }
};
