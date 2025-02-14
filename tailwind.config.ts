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
        'background-secondary': '#F3F4F6',
        vintageNavy: "var(--vintage-navy)",      // A deeper, richer blue for main elements
        deepBlack: "var(--black)",               // Your existing black
        deepGray: "var(--deep-gray)",             // Your existing dark gray
        softWhite: "var(--white)",               // Your existing white
        mutedBlue: "var(--blue)",                // Your existing blue
        fadedBlue: "var(--light-blue)",          // Your existing light blue
        dustyBlue: "var(--dusty-blue)",          // New softer blue for subtle elements
        buttonBlue: "var(--button-blue)",          // New blue for buttons
        hoverButtonBlue: "var(--hover-button-blue)",      // New blue for button hover
        warmGray: "var(--warm-gray)",            // New warm gray for text
        sageGreen: "var(--sage-green)",          // New accent color option
      },
      fontFamily: {
        handlee: ["var(--font-handlee)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
