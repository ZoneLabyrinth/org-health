module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "env":{
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
    "rules":{
        "indent":["error",4],
        "no-tabs": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [2,4],
        "no-mixed-spaces-and-tabs": "off",    
        "react/prefer-stateless-function": 0,
        "import/no-unresolved": 0,
        "no-extraneous-dependencies": 0,
        "react/no-array-index-key": 0,
        "react/jsx-indent-props": [2, 4],
    }
}