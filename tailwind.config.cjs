/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode:"class",
	content: ['index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors:{
				"nav":"rgb(210,190,210)",
				"background": "rgb(210,190,210",
			},
		},
	},
	plugins: [],
};
