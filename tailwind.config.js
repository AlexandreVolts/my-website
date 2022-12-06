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
