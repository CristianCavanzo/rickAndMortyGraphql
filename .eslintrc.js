module.exports = {
	env: {
		es6: true,
		node: true,
		amd: true,
		browser: true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'next',
		'next/core-web-vitals',
	],
	rules: {
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['to'],
			},
		],
	},
};
