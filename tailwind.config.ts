import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#174A7E",
          50: "#F0F5FB",
          100: "#D6E4F2",
          200: "#ADC9E5",
          300: "#7AADD4",
          400: "#4A8FC2",
          500: "#2B72AD",
          600: "#174A7E",
          700: "#0F3560",
          800: "#0D2F4F",
          900: "#081E35",
        },
        secondary: {
          DEFAULT: "#F47C20",
          50: "#FFF5EB",
          100: "#FEE4C7",
          200: "#FCC68F",
          300: "#F9A357",
          400: "#F68C35",
          500: "#F47C20",
          600: "#D9610C",
          700: "#B34E0A",
          800: "#8C3D08",
          900: "#6B2E06",
        },
        accent: {
          DEFAULT: "#25d366",
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#25d366",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
