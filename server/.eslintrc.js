module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true /* for Jest tests */ 
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime" /* from React 17 */
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],

    "rules": {
        "no-undef": "off",
        "react/react-in-jsx-scope": "off",
    },
    "settings": {
        "react": {
            "version": "detect" /* React version detection */
        }
    }
}
