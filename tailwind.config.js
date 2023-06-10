/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        dark: "#101010",
        light: "#ffffff",
        panel: "#E4E4E4",
        primary: "#80FB8D",
        fontSoft: "#323232",
        card: "#F4F4F4",
      },
    },
    // All Fonts
    fontFamily: {
      // SANS
      sans: ["IBM Plex Sans Regular", "sans-serif"],
      sansLight: ["IBM Plex Sans Light", "sans-serif"],
      sansMedium: ["IBM Plex Sans Medium", "sans-serif"],
      sansBold: ["IBM Plex Sans Bold", "sans-serif"],

      // SERIF
      serif: ["Cardo Regular", "sans-serif"],
      serifBold: ["Cardo Bold", "sans-serif"],
    },
  },
  plugins: [],
};
