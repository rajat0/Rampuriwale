/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      zoom: 'zoom 8s infinite ',
      slidein: 'slidein 3s'
    },
    keyframes: {
      zoom: {
        '0%': {
          transform: 'scale(1,1)'
        },
        '100%': {
          transform: 'scale(1.1, 1.1)', opacity: '1'
        },
      },
      slidein: {

      }
    },
  },
  plugins: [],
};
