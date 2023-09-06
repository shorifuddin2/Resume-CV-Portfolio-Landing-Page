/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "",
  //         "secondary": "",
          
  //       },
  //     },
  //     "light",
  //     "cupcake",
  //   ],
  // },

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff9341",
          "secondary": "#0c0a5d",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}