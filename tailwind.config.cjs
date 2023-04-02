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
			gridAutoRows:{
				"3":"auto 1fr auto auto / auto 1fr"
			},
			gridTemplateRows:{
				"navBar2":"4rem auto",
				"navBar1":"4rem"
			},
			
		},
	},
	plugins: [],
};
