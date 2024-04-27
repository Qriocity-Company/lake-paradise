/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:["Barlow Condensed","sans-serif"],
        arhivo:["Archivo","sans-serif"],
        bartleen:["bartleen","sans-serif"],
      },
      screens: {
        mac: "945px", // Add custom breakpoint
      },
    },
  },
  plugins: [],
}