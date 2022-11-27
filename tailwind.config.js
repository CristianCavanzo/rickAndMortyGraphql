/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat'],
		},
		colors: {
			black: '#010409',
			white: '#ffffff',
			'blue-dark': '#2D5469',
			blue: '#65BDEC',
		},
	},
	plugins: [],
};
