module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'system-ui'],
      },
      display: ['group-hover'],
      keyframes: {
        left: {
          '0%': { transform: 'translate(-40px)', opacity: '0' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        },
        right: {
          '0%': { transform: 'translate(40px)', opacity: '0' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        },
      },
      animation: {
        left: 'left .5s ease-in-out',
        right: 'right .5s ease-in-out',
      },
    },
  },
  plugins: [],
};
