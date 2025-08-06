/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // agrega esto
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // agrega esto también
  ],
}

