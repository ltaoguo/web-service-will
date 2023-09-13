module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "browser": true,
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
        "sourceType": "module",
        "ecmaFeature": {
            jsx: true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        indent: [2, 4, { SwitchCase: 1 }],
        "react/react-in-jsx-scope": 0,
        "no-unused-vars": 2,
        "no-const-assign": 2,
        "no-console": "error"
    }
}
