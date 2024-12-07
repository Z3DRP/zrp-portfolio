/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  import: true,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primorange: "#f97316",
        porange: "#C05621",
        dgreen: "#16423c",
        mgreen: "#767f7d",
        lgreen: "#c4dad2",
        gwhite: "#e9efec",
        ddgreen: "#1e201e",
        dmgreen: "#3c3d37",
        dlgreen: "#697565",
        dgwhite: "#ecdfcc",
      },
      fontFamily: {
        sans: ["Ubuntu Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
