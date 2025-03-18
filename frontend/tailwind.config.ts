import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // 青系のカスタムカラー
        secondary: "#9333EA", // 紫系のカスタムカラー
      },
      borderWidth: {
        0.5: "0.5px",
        0.3: "0.3px"
      },
      fontFamily: {
        custom: ['DelaSukoGothic', 'sans-serif'],
        nav: ['Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        'text-outline': '0 0 5px rgba(0, 0, 0, 0.7)'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
