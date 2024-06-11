/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "rgb(210,190,210)",
        background: "rgb(210,190,210",
      },
      gridAutoRows: {
        3: "auto 1fr auto auto / auto 1fr",
        "4-auto": "auto auto auto auto",
      },
      gridTemplateRows: {
        navBar2: "4rem auto",
        navBar1: "4rem",
        12: "repeat(12,1fr)",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  plugins: [],
};
