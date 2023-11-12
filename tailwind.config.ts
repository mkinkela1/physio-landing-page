import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: "#22C55E",
          DEFAULT: "#3B82F6",
          light: "#60a5fa",
          // hover: "#15803d",
        },
      },
    },
  },
};
export default config;
