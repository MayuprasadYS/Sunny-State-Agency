/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '95': '96%',
      },
      fontFamily : {
        custom1 : ['NH-Md65'],
        custom2 : ['h-semiBold'],
        custom3 : ['NH-RD55'],
      },
    },
  },
  plugins: [],
}

