/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#A6BC95',
        'secondary': '#1A454A',
        'terniary': '#0D383D',
      },
      textColor: {
        'primary': '#0D383D',
        'secondary': '#A6BC95'
      },
      borderColor: {
        'primary': '#BACFA9'
      }
    },
  },
  plugins: [],
}
