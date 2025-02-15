import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors
        'background-secondary': '#F3F4F6',
        darkerNavy: "var(--darker-navy)",
        vintageNavy: "var(--vintage-navy)",
        darkerBlack: "var(--darker-black)",
        deepBlack: "var(--black)",
        deepGray: "var(--deep-gray)",
        softWhite: "var(--white)",
        mutedBlue: "var(--blue)",
        fadedBlue: "var(--light-blue)",
        dustyBlue: "var(--dusty-blue)",
        buttonBlue: "var(--button-blue)",
        hoverButtonBlue: "var(--hover-button-blue)",
        warmGray: "var(--warm-gray)",
        sageGreen: "var(--sage-green)",

        'menu-overlay': 'rgba(142, 179, 237, 1)', // vintageNavy with opacity
        'menu-border': 'rgba(255, 255, 255, 0.1)',
        'menu-divider': 'rgba(255, 255, 255, 0.2)',
        'menu-text-primary': 'rgba(250, 249, 246, 0.9)', // softWhite with opacity
        'menu-text-secondary': 'rgba(250, 249, 246, 0.6)',

        // New vintage colors for the dropdown component
        vintageCream: "var(--vintage-cream)",       // warm off-white cream
        vintageBurgundy: "var(--vintage-burgundy)",    // deep vintage burgundy
        vintageGold: "var(--vintage-gold)",          // muted antique gold
        vintageGrey: "var(--vintage-grey)",          // soft vintage grey

        'vintage-menu-overlay': 'rgba(164, 191, 237, 1)', // vintage-style overlay
      },
      fontFamily: {
        handlee: ["var(--font-handlee)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
