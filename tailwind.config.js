/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tagesschrift: ['"Tagesschrift"', "system-ui"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        loopet: ['"Playwrite DK Loopet"', "cursive"],
        noto: ['"Noto Sans KR"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
