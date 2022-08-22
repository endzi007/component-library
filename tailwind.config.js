/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': {
          DEFAULT: '#6366F1',
          '50': '#FFFFFF',
          '100': '#F9F9FE',
          '200': '#D3D4FB',
          '300': '#AEAFF8',
          '400': '#888BF4',
          '500': '#6366F1',
          '600': '#3034EC',
          '700': '#1317D1',
          '800': '#0E119E',
          '900': '#0A0C6A'
        },
        'secondary-color': {
          DEFAULT: '#9F2A2A',
          '50': '#F8EBE4',
          '100': '#F2D7CC',
          '200': '#E5AC9C',
          '300': '#D87B6C',
          '400': '#CB463B',
          '500': '#9F2A2A',
          '600': '#83232A',
          '700': '#661B26',
          '800': '#4A1420',
          '900': '#2E0C16'
        },
      }
    }
  },
  plugins: [],
}
