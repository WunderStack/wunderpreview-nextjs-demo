const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'print': {'raw': 'print'},
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    colors: {
      ...colors,
      primary: colors.gray[700],
      accent: '#09D6A5',
      'accent-gradient': '#00E0FF',
      // shades of gray
      silver: {
        lt: colors.gray[100],
        md: colors.gray[200],
        dk: colors.gray[300],
      },
      slate: {
        lt: colors.gray[400],
        md: colors.gray[500],
        dk: colors.gray[600],
      },
      charcoal: {
        lt: colors.gray[700],
        md: colors.gray[800],
        dk: colors.gray[900],
      },
      red: colors.red[500],
      // bw
      'black': '#000',
      'white': '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
