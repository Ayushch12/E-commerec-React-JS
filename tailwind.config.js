// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'screen': '100vh',
      },
      flexGrow: {
        'default': 1,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

