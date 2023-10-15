const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}' ,   "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'text': '#0c0908',
        'background': '#fbf9f9',
        'primary': '#7998a0',
        'secondary': '#ccc9d9',
        'accent': '#59767d',
       },
    },
  },
  plugins: [nextui()],
}
