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

          },
          'bote': {
            '0%': {transform: 'scale(40%)'},
            '100%':{transform: 'scale(100%)'}
          },
          'quitabote': {
            '0%': {transform: 'scale(100%)'},
            '99%':{transform: 'scale(0%)'},
            '100%':{transform: 'scale(100%)'}

          }
        },
        animation:{
          'raton':'raton 1s ease infinite',
          'bote':'bote 0.2s ease-out',
          'quitabote':'quitabote 1s ease-out'
        }
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  }