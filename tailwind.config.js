/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    colors: { primaryDarker: "#0f0f19", background: "#18033c", secondaryLighter: "#641ae6", greenLighter: "#04c33a",  greenDarker: "#00875f"}
  }, textColor: {
    dark: "#717171",
    white: '#fff'
  },
  plugins: [require("daisyui")]
}
