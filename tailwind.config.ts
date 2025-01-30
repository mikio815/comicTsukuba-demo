import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // 青系のカスタムカラー
        secondary: "#9333EA", // 紫系のカスタムカラー
      },
    },
  },
  plugins: [],
};

export default config;
