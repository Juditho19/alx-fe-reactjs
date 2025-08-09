/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ensures all JSX/TSX files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
