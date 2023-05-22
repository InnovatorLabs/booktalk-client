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
        fadeOut: {
          from: { opacity: 0.5 },
          to: { opacity: 0 },
        },
        skeleton: {
          '0%': { opacity: 0.7 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.7 },
        },
        search: {
          '0%': { translate: '0px 0px' },
          '20%': { translate: '10px -5px' },
          '40%': { translate: '5px -10px' },
          '60%': { translate: '5px 10px' },
          '80%': { translate: '20px 10px' },
          '100%': { translate: '0px 0px' },
        },
        alarm: {
          '0%': {
            transform: 'scale(0.9)', //
          },
          '50%': {
            transform: 'rotate(0deg)', //
          },
          '60%': {
            transform: 'rotate(10deg)', //
          },
          '70%': {
            transform: 'scale(1)',
            transform: 'rotate(0deg)', //
          },
          '80%': {
            transform: 'rotate(10deg)', //
          },
          '90%': {
            transform: 'rotate(0deg)', //
          },
          '100%': {
            transform: 'scale(0.9)', //
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
