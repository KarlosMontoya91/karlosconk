/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0d",
        card: "#1a1a1a",
        accent: {
          coral: "#ffb6b6",
          lilac: "#e0c3fc",
          mint: "#a8e6cf",
          sky: "#bae1ff",
          sand: "#fdfd96"
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'solid': '4px 4px 0px 0px rgba(0,0,0,1)',
        'solid-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
