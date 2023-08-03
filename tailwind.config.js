/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Navbar/index.jsx",
    "./src/components/Sidebar/index.jsx",
    "./src/components/Sidebar/util/menuItem.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}