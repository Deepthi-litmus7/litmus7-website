module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '4': '1rem', // 16px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
      },
      fontSize: {
        'mob-xs': '0.625rem',      // 10px
        'mob-sm': '0.75rem',       // 12px
        'mob-base': '0.875rem',    // 14px
        'mob-md': '1rem',          // 16px
        'mob-lg': '1.25rem',       // 20px
        'mob-xl': '1.5rem',        // 24px
        'mob-2xl': '2.5rem',       // 40px
        'mob-3xl': '3.75rem',      // 60px
        'desk-xs': '1rem',         // 16px
        'desk-sm': '1.25rem',      // 20px
        'desk-base': '1.75rem',    // 28px
        'desk-md': '2rem',         // 32px
        'desk-lg': '3.75rem',      // 60px
        'desk-xl': '5rem',         // 80px
        'desk-2xl': '6.25rem',     // 100px
        'desk-3xl': '8.75rem',     // 140px
      },

      fontFamily: {
        // Define custom classes for each weight
        'albert-light': ['var(--font-albert-sans-light)'],
        'albert-regular': ['var(--font-albert-sans-regular)'],
        'albert-medium': ['var(--font-albert-sans-medium)'],
        'albert-semibold': ['var(--font-albert-sans-semibold)'],
        'albert-bold': ['var(--font-albert-sans-bold)'],
        'merri-lightitalic': ['var(--merriLightItalic)'],
        'merri-italic': ['var(--merriItalic)'],
      },
    },
  },
  plugins: [],
};
