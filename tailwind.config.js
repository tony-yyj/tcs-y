/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        },
        second: {
          DEFAULT: "rgb(var(--color-second) / <alpha-value>)",
        },
        tertiary: {
          DEFAULT: "rgb(var(--color-tertiary) / <alpha-value>)",
        },
        quaternary: {
          DEFAULT: "rgb(var(--color-quaternary) / <alpha-value>)",
        }
      },
      fontSize: {

        xs: ['12px', '14px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}

