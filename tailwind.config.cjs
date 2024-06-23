/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "rgb(210,190,210)",
        background: "rgb(210,190,210",
        "light-beige": "#E7E8D1", //denne er i bruk
        "slightly-darker-beige": "#D1D2BB",
        "new-dark-green": "#254336", // denne er i bruk
        skog: "#6B8A7A", //denne er i bruk
        "nav-dark": "#182C25",
        "section-beige": "#455B55", //denne er i bruk (darkMode)
        "section-green": "#182C25", //denne er i bruk (darkMode)
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
      aspectRatio: {
        "4/3": "4 / 3",
      },
      width: {
        150: "38rem",
        120: "30rem",
      },
      backgroundPosition: {
        "top-10": "top 10%",
        "bottom-10": "bottom 10%",
        "left-10": "left 10%",
        "right-10": "right 10%",
        "test-left": "0% 60%",
        "left-center": "left center",
      },
      backgroundSize: {
        "180-percent": "180%",
        "150-percent": "150%",
        "120-percent": "120%",
      },
      inset: {
        "-2": "-10px",
      },
      screens: {
        xs: "450px", // Example custom breakpoint
      },
    },
  },
};
