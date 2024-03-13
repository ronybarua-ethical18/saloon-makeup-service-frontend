module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          800: '#4d3ca3',
        },
        paragraph: {
          400: '#eee',
        },
      },
      boxShadow: {
        'custom-shadow': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
        'simple-shadow': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
}
