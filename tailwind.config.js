/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'principal':['"Be Vietnam Pro"', 'sans-serif']
      },
      colors:{
        'steel-blue': {
          '50': '#f2f8fd',
          '100': '#e5eff9',
          '200': '#c4def3',
          '300': '#90c3e9',
          '400': '#55a4db',
          '500': '#2f89c8',
          '600': '#206da9',
          '700': '#1b5789',
          '800': '#1a4a72',
          '900': '#1b3f5f',
          '950': '#12283f',
      },
      'perl':{
        '100': '#fcfcf7'
      }
      },
      
      backgroundImage:{
        'close-menu': "url('../img/close-menu.svg')",
        'open-menu': "url('../img/open-menu.svg')",
      },
      screens: {
        'mobile-m':'325px',
        'mobile-l': '425px'
      },
    },
  },
  
}

