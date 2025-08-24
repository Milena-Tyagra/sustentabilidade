/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#486A4A",  // Verde folha bananeira
          200: "#4A5F3F",  // Verde oliva (usado na fonte cursiva)
        },
        secondary: {
          100: "#F3E9DB",
          200: '#e6d0b3'
        },
        gray: {
          700: '#2D2D2D'
        },
        // "#C7A473",  // Papel kraft
        white: "#ffffff",
        black: "#1C1C1C"
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'sans-serif'], // Para títulos modernos
        script: ['"Dancing Script"', 'Pacifico', 'cursive'], // Para “fibra de bananeira”
        serif: ['Prata', 'Times New Roman', 'serif'], // Opcional, caso queira variação
      },
    },
  },
  plugins: [],
}
