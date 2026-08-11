import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E17",
          deep: "#060812",
        },
        surface: {
          DEFAULT: "#121826",
          raised: "#1A2233",
          border: "rgba(232, 236, 244, 0.08)",
        },
        ink: {
          DEFAULT: "#E8ECF4",
          dim: "#8B96AC",
          faint: "#5B6478",
        },
        line: {
          DEFAULT: "#C9A227",
          soft: "#E0BE4C",
          dim: "rgba(201, 162, 39, 0.35)",
        },
        brass: {
          DEFAULT: "#C9A227",
          soft: "#E0BE4C",
        },
        status: {
          live: "#4CAF7D",
          progress: "#D9A441",
          planned: "#5B6478",
          danger: "#E0575A",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "meridian-grid":
          "linear-gradient(rgba(232,236,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        drift: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "48px 96px" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 60s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
