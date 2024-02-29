/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': 'hsl(75, 94%, 57%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-grey': 'hsl(0, 0%, 20%)',
        'custom-darkgrey': 'hsl(0, 0%, 12%)',
        'custom-offblack': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'inter': ['Inter'],
      },
    },
    screens: {
      'desktop': '1440px',
      // => @media (min-width: 640px) { ... }
    },
    plugins: [],
  }
}