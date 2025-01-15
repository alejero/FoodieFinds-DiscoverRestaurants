/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Add paths to your files
  theme: {
    extend: {
      colors: {
        primary: "#5c67f2", // Soft blue
        secondary: "#82d9b2", // Soft green
        background: "rgb(245, 247, 251)", // Light gray
        textPrimary: "#333333", // Dark gray
        textSecondary: "#666666", // Medium gray
      },
    },
  },
  plugins: [],
};
