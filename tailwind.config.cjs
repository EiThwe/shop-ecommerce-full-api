/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shippori: ["Shippori Mincho B1", "serif"],
      },
      screens: {
        xxs: "300px",
        xs: "400px",
        md: "821px",
      },
    },
  },
  plugins: [],
};
