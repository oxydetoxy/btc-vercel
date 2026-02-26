import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        // BTC brand palette (COLOUR PALETTE)
        "btc-hot": "#DD3860", // Hot Pink – energy, passion, transformation
        pastel: "#FFE9EA",     // Pastel Pink – compassion, nurturing, love
        mint: "#CDF9F5",       // Mint Green – growth, renewal, balance
        teal: "#0DA694",      // Biseliri Green – trust, peace, clarity
        golden: "#E0A404",    // Golden – luxury, success, wisdom
        // Semantic mapping
        cream: "#FFE9EA",     // pastel pink (main bg)
        bone: "#CDF9F5",      // mint (borders, alt bg)
        ink: "#0A2522",       // dark teal (text, dark sections)
        charcoal: "#061A18",  // darker teal (hero bg, overlays)
        stone: "#5A7A76",     // muted teal (secondary text)
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,8vw,6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem,4vw,4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem,3vw,2.5rem)", { lineHeight: "1.1" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
