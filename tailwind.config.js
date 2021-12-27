module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI",],
      },
      colors: {
        'primary': '#0489C7',
      },
      minWidth: {
        19: '19rem',
      },
    },
  },
  plugins: [],
}
