/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      Robato: ["'Quantico', sans-serif"],
      RobatoTwo: ["'Roboto', sans-serif"],
      RobatoCondensed: ["'Roboto Condensed', sans-serif"],
      cormorant: ["'Cormorant Infant', serif"],
      cormantThiner: ["'Cormorant Infant', serif"],
      Barlow: ["'Barlow', sans-serif"],
      dinlack: ["dinblack"],
      popins:["'Poppins', sans-serif"]
    },
    fontSize: {
      thirtyfivepixls: "35px",
    },
  },
};
export const plugins = [];
