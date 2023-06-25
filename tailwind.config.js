/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '500px',
      },
    },
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
