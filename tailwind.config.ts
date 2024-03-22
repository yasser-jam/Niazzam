/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#5885A3",
          secondary: "#74A9F0",
          warning: '#FBBF0A',
          info: "#74A9F0",
          neutral: '#5A5DA7',
          neutralContent: '#edf3ff'
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
        primary: '#5885A3',
        // info: '#4A00FF',
        info: '#74A9F0',
        warning: '#F75C14',
        error: '#DD626A'
      }
    },
  },
  plugins: [require("daisyui")],
};
