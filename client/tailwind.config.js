/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // ---- Design tokens ----
      colors: {
        // Base surfaces — driven by CSS vars in index.css so they flip with the `.dark` class.
        base: {
          950: "rgb(var(--base-950) / <alpha-value>)",
          900: "rgb(var(--base-900) / <alpha-value>)",
          800: "rgb(var(--base-800) / <alpha-value>)",
          700: "rgb(var(--base-700) / <alpha-value>)",
        },
        // Bold blue accent palette
        accent: {
          paper: "#A5C8FF", // Light sky blue
          antique: "#553F2D", // Antique Brown
          hunter: "#162E70", // Deep navy
          rooster: "#331111", // Black Rooster
          sheep: "#0F0D0D", // Black Sheep
          cream: "#D7E6FF", // Light ice highlight
          terracotta: "#2F7CFF", // Bold blue accent
        },
        glow: "#2F7CFF",
      },
      fontFamily: {
        display: ["'Sora'", "system-ui", "sans-serif"],
        body: ["'Manrope'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #2F7CFF 0%, #2F7CFF 100%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(47, 124, 255, 0.45)",
        "glow-sm": "0 0 20px -6px rgba(47, 124, 255, 0.4)",
        "glow-soft": "0 0 80px -24px rgba(47, 124, 255, 0.35)",
        card: "0 10px 40px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      spacing: {
        section: "7rem",
      },
    },
  },
  plugins: [],
};