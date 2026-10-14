import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#05070B",
        surface: "#0A0D14",
        "surface-raised": "#101522",
        "surface-border": "#1A2234",
        cyber: {
          cyan: "#00F0FF",
          turquoise: "#00E5BC",
          violet: "#9D4EDD",
          purple: "#7928CA",
          magenta: "#FF007F",
          crimson: "#FF2A54",
          blood: "#DC2626",
          gold: "#FFB703",
          amber: "#F59E0B",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "monospace", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "glitch-subtle": "glitchSubtle 4s infinite",
        "flicker": "flicker 0.15s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "drop-shadow(0 0 15px currentColor)" },
          "50%": { opacity: "0.9", filter: "drop-shadow(0 0 35px currentColor)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        glitchSubtle: {
          "0%, 94%, 100%": { transform: "translate(0)" },
          "95%": { transform: "translate(-2px, 1px)" },
          "96%": { transform: "translate(2px, -1px)" },
          "97%": { transform: "translate(-1px, -1px)" },
          "98%": { transform: "translate(1px, 2px)" },
          "99%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
