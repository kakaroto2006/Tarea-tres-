/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        customRed: {
          150: "#ffe5e5",
          340: "#ff9999",
          530: "#ff4d4d",
          720: "#cc0000",
          910: "#660000",
        },
      },
      spacing: {
        '72': '25rem',
      },
      screens: {
        'apple-watch': '352px',
      }
    },
  },
  plugins: [],
}
