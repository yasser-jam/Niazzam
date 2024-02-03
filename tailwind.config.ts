/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2E3192",
          secondary: "#74A9F0",
          wraning: '#FBBF0A',
          neutral: '#5A5DA7'
        },
      }
    ]
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E3192',
        // info: '#4A00FF',
        info: '#74A9F0',
        warning: '#F9B914',
        error: '#DD626A'
      }
    },
  },
  plugins: [require("daisyui")],
};
