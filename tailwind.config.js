/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // COLORS
      colors: {
        dark: "#101010",
        light: "#ffffff",
        panel: "#E4E4E4",
        primary: "#80FB8D",
        secondary: "#56B4D3",
        soft: "#323232",
        card: "#F4F4F4",
      },
    },

    // ALL FONTS
    fontFamily: {
      // Sans
      sans: ["IBM Plex Sans Regular", "sans-serif"],
      sansLight: ["IBM Plex Sans Light", "sans-serif"],
      sansMedium: ["IBM Plex Sans Medium", "sans-serif"],
      sansBold: ["IBM Plex Sans Bold", "sans-serif"],

      // Serif
      serif: ["Cardo Regular", "sans-serif"],
      serifBold: ["Cardo Bold", "sans-serif"],
    },
  },
  plugins: [],
};
