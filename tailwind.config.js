/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        appear: "appear 2s ease-in-out",
        'appear-250': "appear 2s ease-in-out 0.25s",
        'appear-500': "appear 2s ease-in-out 0.5s",
        'appear-750': "appear 2s ease-in-out 0.75s",
        'appear-1000': "appear 2s ease-in-out 1s",
      },
      keyframes: {
        appear: {
          "0%": {
            transform: "translateY(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
