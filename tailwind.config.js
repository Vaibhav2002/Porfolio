/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],

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
