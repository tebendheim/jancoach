/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "rgb(210,190,210)",
        background: "rgb(210,190,210",
        "dark-green": "#31473A",
        "light-grey": "#EDF4F2",
        "terracotta-red": "#B85042",
        "light-beige": "#E7E8D1",
        "muted-teal": "#A7BEAE",
        "less-muted-teal": "#9bb09d",
        "new-dark-green": "#254336",
        skog: "#6B8A7A",
        spygroenn: "#B7B597",
        sofa: "#DAD3BE",
        // "nav-dark": "#0E1C16",
        // "section-beige": "#737369",
        // "section-green": "#2A3D34",
        "nav-dark": "#182C25",
        "section-beige": "#455B55",
        "section-green": "#182C25",
      },
      gridAutoRows: {
        3: "auto 1fr auto auto / auto 1fr",
        "4-auto": "auto auto auto auto",
      },
      backgroundImage: {
        "gradient-to-terracotta-red":
          "linear-gradient(to left, #C46852, #B85042)",
        "gradient-button-dark-mode":
          "linear-gradient(to right, #550F04, #550F05)",
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
      margin: {
        m22: "25px",
      },
    },
  },
  plugins: [],
};
