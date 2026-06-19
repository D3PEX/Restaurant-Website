import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff8ef",
        ink: "#1c1a17",
        olive: "#6f7d4f",
        terracotta: "#b65f3a",
        gold: "#c99a4a"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(28, 26, 23, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
