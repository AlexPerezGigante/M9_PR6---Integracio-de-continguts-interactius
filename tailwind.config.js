/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      
      extend: {
        fontFamily:{
          "source-sans3": ['Source Sans 3', 'sans-serif']
        },
        keyframes: {
          'raton': {
            '0%': { transform: ' translateY(0%) ',
                    opacity: '1'},
            '100%': { transform: 'translateY(400%) ',
                      opacity: '0'},

          }
        },
        animation:{
          'raton':'raton 1s ease infinite'
        }
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  }