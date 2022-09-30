module.exports = {
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"ignorePatterns": ["gulpfile.js", "src/@types", "src/ux-framework"],
	"globals": {
        "MFiles": "readonly"
    },
	"env": {
        "browser": true
    },
	"rules": {
		/* Project specific rules. */
		"no-console": "error",
		"no-empty": ["warn", { "allowEmptyCatch": true }],
		"comma-dangle": [
			"warn",
			{
				"imports": "never",
				"exports": "never",
				"functions": "never",
				"objects": "ignore",
				"arrays": "ignore"
			}
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/semi": "error",
		// Turn this on if you start using prop-types
		"react/prop-types": "off",
		"new-parens": "warn"
	}
}