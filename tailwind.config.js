module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '60px': '60px', // Adds a custom spacing value for gap
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'], // Add Merriweather with a fallback to serif
      },
    },
  },
  plugins: [],
};
