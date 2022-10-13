/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2130",
        "primary-blue": "#6B7CFF",
        "light-violet": "#E0E4FC",
        "gradient-rose": "#d798e1",
        "gradient-light-green": "#9bffa5",
        "gradient-extra-light-blue": "#aed3ff",
      },
      fontFamily: {
        roboto: "Roboto",
        "roboto-bold": "roboto-bold",
      },
      fontSize: {
        paragraph: "16px",
        "heading-2xl": "56px",
        "heading-xl": "48px",
        "heading-2md": "32px",
        "heading-md": "24px",
      },
      borderRadius: {
        xsm: "12px",
        sm: "20px",
      },
      backgroundImage: {
        "header-gradien": "url('./assets/images/vectors/Blur Gradient.svg')",
      },
    },
  },
  plugins: [],
}
