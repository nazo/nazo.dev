module.exports = {
  root: true,
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    quotes: ["error", "double"],
    "semi": "off",
    "@typescript-eslint/semi": ["error"]
  }
};
