module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",      // package.jsonのeslintConfig から移動
        "react-app/jest", // package.jsonのeslintConfig から移動
        "plugin:react/recommended",
        "airbnb",
      ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-filename-extension": ["warn", {"extensions": [ ".jsx", ".tsx" ]}]
      }
}
