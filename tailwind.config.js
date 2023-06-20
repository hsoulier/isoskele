/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ui: {
          black: "#1e1e1e",
          white: "#f2f2f2",
          gray: "#656565",
          turquoise: "#9cd9ce",
          violet: {
            base: "#aec5f2",
            100: "#f1f3fe",
            200: "#cecbff",
          },
          blue: "#7887f2",
          yellow: "#fcefd5",
          orange: "#f2c8a2",
        },
      },
      fontSize: {
        ui: {
          base: "1rem",
          lg: "1.25rem",
          xl: "2.5rem",
          "2xl": "3.125rem",
          "3xl": "6rem",
        },
      },
      fontFamily: {
        body: ["Raleway", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        xs: "0.18540890514850616rem",
        sm: "0.25rem",
        default: "0.375rem",
        lg: "0.5rem",
        xl: "0.6875rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "1.5625rem",
        "6xl": "1.875rem",
        "7xl": "2.5rem",
        "8xl": "2.8125rem",
        "9xl": "3.125rem",
      },
    },
  },
  plugins: [],
}
