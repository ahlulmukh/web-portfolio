module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#06b6d4',
        dark : '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
      fontFamily: {
        robot: ['Roboto']
      },
    },
  },
  plugins: [],
}