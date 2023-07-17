/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  theme: {
    extend: {
      colors: {
        brand1: "#021F23",
        "brand1-content": "#E6E9E9",
        brand2: "#290038",
        "brand2-content": "#EAE6EB",
        brand3: "#001D32",
        "brand3-content": "#CBE5FF",
        brand4: "#1D1C16",
        "brand4-content": "#D4C951",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    fontSize: {
      sm: "1rem",
      base: "1.5rem",
      xl: "1.75rem",
      "2xl": ['2.5rem', { lineHeight: "normal", }],
      "3xl": ["3rem", { lineHeight: "normal", }],
      "4xl": ["3.5rem", { lineHeight: "normal", }],
      "5xl": "4rem",
      "6xl": "5rem",
    },
    fontFamily: {
      display: ["DM Sans", "Montserrat", "sans-serif"],
      body: ["Open Sans", "Lato", "sans-serif"],
    },
    borderRadius: {
      sm: '3rem',
      lg: '5rem'
    },
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#A5A1FF",
          "primary-content": "#1B1B1F",
          secondary: "#2900E8",
          "secondary-content": "#FFFFFF",
          accent: "#FFF480",
          "accent-content": "#1B1B1F",
          "base-100": "#000000",
          "base-200": "#1B1B1F",
          "base-200-content": "#A5A1FF",
          "base-content": "#ffffff",
          neutral: "#1B1B1F",
        },
      },
    ],
  },
};
