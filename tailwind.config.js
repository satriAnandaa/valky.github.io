module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0'
          }
        }
      },
      animation: {
        'floating': 'floating 6s linear infinite'
      }
    }
  },
  plugins: [],
}