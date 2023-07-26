/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        cold: "url(@/assets/cold-bg.jpg)",
        warm: "url(@/assets/warm-bg.jpg)",
      },
      colors: {
        "regal-blue": " rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75);",
      },
    },
  },
  plugins: [],
};
