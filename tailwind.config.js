/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing:
      {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors:
      {
        "White": "hsl(0, 0%, 100%)",
        "Lightgray": "hsl(212, 45%, 89%)",
        "Grayishblue": "hsl(220, 15%, 55%)",
        "Darkblue": "hsl(218, 44%, 22%)"
      },
      fontSize:
      {
        'body': '15px'
      },
    },
  },
  plugins: [],
}

