/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "640px", // For small screens like phones
        md: "768px", // For medium screens like tablets
        lg: "1024px", // For large screens like laptops
        xl: "1280px", // For extra-large screens like desktops
      },
    },
  },
  plugins: [],
};
