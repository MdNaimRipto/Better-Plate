/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#c00a27",
      secondary: "#f4b618",
      white: "#ffffff",
      coal: "#1a1a1a",
      black: "#3a3a3a",
      gray: "#686464",
      lightGray: "#e7e6e6",
      info: "#2F80ED",
      success: "#219653",
      error: "#EB5757",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "4rem",
        lg: "3rem",
        xl: "4rem",
        xxl: "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
