/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3E3327',  // Deep Sand-Dune Bronze / Espresso
          accent: '#C3A37A',   // Golden Beach Sand / Warm Brass
          dark: '#241E17',     // Dark Espresso Wood (for high-contrast dark text)
          light: '#F8F6F2',    // Elegant soft sandy beach white (Alabaster)
          subtle: '#EAE5DC',   // Warm Sand Beige (Backgrounds & borders)
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
