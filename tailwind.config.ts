import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#f7e018",
        'dark-theme': "#000",
        'dark-gray': "#313538"
      },
      gridTemplateColumns: {
        'auto-1': ' repeat(1, minmax(0, auto))',
        'auto-2': ' repeat(2, minmax(0, auto))',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
export default config;

