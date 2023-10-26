import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22C55E",
          hover: "#15803d",
        },
      },
    },
  },
};
export default config;
