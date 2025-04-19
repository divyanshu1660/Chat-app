module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3F4F6',
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#187594',
          500: '#4B5563',
          600: '#adb340',
          700: '#1F2937',
          800: '#b07168',
          900: '#0C111B',
        },
      },
    },
  },
  plugins: [],
};
