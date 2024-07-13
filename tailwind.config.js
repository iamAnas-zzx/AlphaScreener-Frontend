/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FBEAEB',
        customLightBlue : {
          500 : '#CADCFC',
          700 : '#d5e3fd'
        },
        customDarkBlue : {
          500 : '#36bfec',
          700 : '#72d2f2',
          900 : '#1a3a6e',
          1100: '#11284e'
        },
        customBlack : {
          100: '#1a202c',
          300: '#151a23',
          700: '#0a0d12',
          900: '#050609',
        }
      },
    },
  },
  plugins: [],
})

