// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,ts,jsx,tsx}", // Scans all files in src
//     "./public/**/*.html",              // Scans HTML files in public
//     "./index.html",                    // Scans the root index.html
//   ],
//   // ...
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans everything in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
