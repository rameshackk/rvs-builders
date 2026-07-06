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
          primary: '#ffffff',  // White (for headings and primary contrast)
          accent: '#D4A853',   // Premium Gold (for accents, buttons, highlights)
          dark: '#e5e5e5',     // Off-White / Light Gray (for body text)
          light: '#0a0a0a',    // Deep Black (for main backgrounds)
          subtle: '#1a1a1a',   // Dark Gray (for cards, borders, secondary backgrounds)
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
