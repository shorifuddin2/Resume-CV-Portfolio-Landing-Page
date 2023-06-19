/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
      mytheme: {
      
              "primary": "#d7e258",
            },
    
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}