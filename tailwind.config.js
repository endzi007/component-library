/** @type {import('tailwindcss').Config} */
const resolveConfig = require('tailwindcss/resolveConfig');

function invertColor(col, shade, bw) {
  const fullConfig = resolveConfig(config);
  let hex = fullConfig.theme.colors[col][shade];

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}
const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': {
          DEFAULT: '#CA8E46',
          '50': '#E4C49F',
          '100': '#E1BE95',
          '200': '#DBB281',
          '300': '#D5A66E',
          '400': '#D09A5A',
          '500': '#CA8E46',
          '600': '#B47933',
          '700': '#94642A',
          '800': '#744F21',
          '900': '#553918'
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

      },
      fontFamily: {
        // Add your custom fonts and enjoy.
        'Oswald': ["Oswald", "Sans-serif"],
        'Macondo': ["Macondo", "Sans-serif"],
        'Allura': ['Allura', "cursive"],
        'Lora': ['Lora', 'serif']
      },
    }
  },
  plugins: [],
}

module.exports = config;



