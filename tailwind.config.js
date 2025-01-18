/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'custom-blue': '#051d40',
        'custom-ash':'#d9dce0',
      },
    },
    fontFamily: {
      second_font: ["Agbalumo"],
    },
  },
  plugins: [require("daisyui")],
};
