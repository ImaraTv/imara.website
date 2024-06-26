import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        '10xl': '0px 4px 28px 3px #0000001A',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
} satisfies Config

export default config
