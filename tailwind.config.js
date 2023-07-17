/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ttt_gray_100: "#101010",
        ttt_dark_blue_500: "#395174",
        ttt_blue_500: "#3578F6",
        ttt_aqua_500: "#85E5D5",
        ttt_orange_500: "#FA7034",
        ttt_orange_700: "#F1DD77",
      },
      backgroundImage: {
        ttt_gradient:
          "linear-gradient(90deg, #5AC9B6 0%, #3578F6 30.53%, #3578F6 66.15%, #5AC9B6 97.68%)",
      },
      boxShadow: {
        ttt_sm: "0px 2px 8px 0px rgba(21, 47, 85, 0.49);",
        ttt_md: "0px 2px 10px 0px rgba(21, 47, 85, 0.49);",
        ttt_lg: "0px 2px 45px 0px rgba(21, 47, 85, 0.49);",
      },
    },
  },
  plugins: [],
};
