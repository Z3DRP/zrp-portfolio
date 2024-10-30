/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dgreen": "#16423c",
        "mgreen": "#767f7d",
        "lgreen": "#c4dad2",
        "gwhite": "#e9efec",
        "ddgreen": "#1e201e",
        "dmgreen": "#3c3d37",
        "dlgreen": "#697565",
        "dgwhite": "#ecdfcc"
      }, 
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      }
    },
  },
  plugins: [],
}

