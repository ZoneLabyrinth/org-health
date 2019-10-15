module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.base.js"
      }
    }
  },
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    "indent": ["error", 4],
    "no-tabs": "off",
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [2, 4],
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-mixed-spaces-and-tabs": "off",
    "react/prefer-stateless-function": 0,
    "import/no-unresolved": 0,
    "no-extraneous-dependencies": 0,
    "react/no-array-index-key": 0,
    "react/jsx-indent-props": [2, 4],
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}