/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",   // Adjust the path according to your structure
    "./public/**/*.js",     // Include any JS files that might contain classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
