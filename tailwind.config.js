/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // my custom colors 
        'primary': '#E11D48', 
        'secondary': '#004767', 
        'third': '#F7EBEC', 
        'background': '#E7F0FD',
        'paragraph': '#1D306D',
        'footerBG': '#26292E',
        'footerBottom': '#36393F',
        'footerText': '#cacaca'
      },
      fontSize: {
        // my custom font sizes 
        'h1': '36px',
        'h2': '25px',
        'h3': '20px',
        'dashboardHeader': '22px',
        'paragraph': '15px',
         'h5': '16px',
        'h6': '14px',
        'p': '12px',
        
         'h4': '18px'
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
  
}
