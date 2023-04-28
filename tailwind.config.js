/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        search: {
          '0%': { translate: '0px 0px' },
          '20%': { translate: '10px -5px' },
          '40%': { translate: '5px -10px' },
          '60%': { translate: '5px 10px' },
          '80%': { translate: '20px 10px' },
          '100%': { translate: '0px 0px' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
