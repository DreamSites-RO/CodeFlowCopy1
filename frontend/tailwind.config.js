import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
      },
      fontSize: {
        small: "14px",
        medium: "16px",
        large: "18px",
      },
      backgroundImage: {
        "welcome-gradient":
          "linear-gradient(180deg, rgba(255, 255, 0, 0) 40%, rgba(2, 6, 23, 0.85) 70%, rgba(2, 6, 23, 1) 100%)", //Folosesc
        "gradient-radial":
          "radial-gradient(circle at 50% 50%, rgba(4, 15, 26, 1) 60%, rgba(2, 6, 23, 1) 100%)", //Folosesc
      },
      colors: {
        "bg-princ": "#020617",
        "regal-gray": "#F3F2EF",
        "text-gray": "#DBE4E7", //Folosesc
        "yellow-ok": "#E9BC0B", //Galben Fundal Buton
        "yellow-meh": "#FFCB00", //Folosesc
        "orange-border": "#D57D02",
        "gray-deschis": "#EEEEEE", //Gri text mai asa
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        codeflow: {
          primary: "#0A66C2", // LinkedIn Blue
          secondary: "#DBE4E7", // White
          accent: "#7FC15E", // LinkedIn Green (for accents)
          neutral: "#000000", // Black (for text)
          "base-100": "#F3F2EF", // Light Gray (background)
          info: "#5E5E5E", // Dark Gray (for secondary text)
          success: "#057642", // Dark Green (for success messages)
          warning: "#F5C75D", // Yellow (for warnings)
          error: "#CC1016", // Red (for errors)
        },
      },
    ],
  },
};
