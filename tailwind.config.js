/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '99xl': {'max': '2015px'},
      // => @media (max-width: 1535px) { ... }

      '3xl': {'max': '1815px'},
      // => @media (max-width: 1535px) { ... }

      '21xl': {'max': '1600px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'lg1': {'max': '853px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'md1': {'max': '730px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      'sm1': {'max': '530px'},
      // => @media (max-width: 639px) { ... }

      'sm2': {'max': '460px'},
      // => @media (max-width: 639px) { ... }

      'sm3': {'max': '400px'},
      // => @media (max-width: 639px) { ... }

    },

    
  },
  plugins: [],
}