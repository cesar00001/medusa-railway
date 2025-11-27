const path = require("path")

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        // color palette
        primary: {
          50: "#f4f1ef", // warm cream (secondary)
          100: "#ede8dc",
          200: "#ddd1b8",
          300: "#c8b08d",
          400: "#a8906b",
          500: "#8c7550",
          600: "#705c3f",
          700: "#5a4a34",
          800: "#2d3a2a", // deep forest green (primary)
          900: "#1d1e1c", // charcoal (text)
        },
        accent: {
          50: "#feffe8", // off-white
          100: "#f4f1ef", // warm cream
          200: "#e5dacf", // cream
          300: "#d7d8ce", // light gray
          400: "#cfcb99", // pale yellow
          500: "#b6c800", // bright green/yellow (accent)
          600: "#6e9b04", // lime green
          700: "#efb525", // golden yellow
          800: "#f3ad00", // amber
          900: "#c28614", // gold
        },
        sage: {
          50: "#f0f9f4",
          100: "#e0d4c7", // warm beige
          200: "#a3af9b", // sage green
          300: "#7f8774", // moss green
          400: "#637c3f", // grass green
          500: "#5b6a64", // muted green
          600: "#545f41", // olive green
          700: "#477459", // forest green
          800: "#2d9d5c",
          900: "#1d673c",
        },
        warm: {
          50: "#fefefe",
          100: "#f4a5a6", // soft pink
          200: "#e0d4c7", // warm beige
          300: "#d4b6a2", // taupe
          400: "#b4d3da", // light blue
          500: "#a3af9b", // sage green
          600: "#8b694e", // brown
          700: "#837364", // taupe
          800: "#789ba5", // slate blue
          900: "#4f5565", // charcoal gray
        },
        vibrant: {
          50: "#fefefe",
          100: "#fb3700", // orange
          200: "#f60", // orange
          300: "#efb525", // golden yellow
          400: "#c28614", // gold
          500: "#b6c800", // bright green
          600: "#62aedf", // blue
          700: "#502b45", // burgundy
          800: "#8d0025", // maroon
          900: "#02302f", // dark teal
        },
        // Legacy colors for compatibility
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
        earth: {
          50: "#f7f5f0",
          100: "#ede8dc",
          200: "#ddd1b8",
          300: "#c8b08d",
          400: "#a8906b",
          500: "#8c7550",
          600: "#705c3f",
          700: "#5a4a34",
          800: "#483c2c",
          900: "#3d3326",
        },
        forest: {
          50: "#f0f9f4",
          100: "#dcf2e4",
          200: "#bae6c9",
          300: "#87d4a2",
          400: "#4eba78",
          500: "#2d9d5c",
          600: "#228048",
          700: "#1d673c",
          800: "#185332",
          900: "#15442b",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        "rounded-lg": "10px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        serif: [
          "var(--font-caslon-ionic)",
          "Crimson Text",
          "Times New Roman",
          "serif",
        ],
        display: [
          "var(--font-champion)",
          "Playfair Display",
          "Times New Roman",
          "serif",
        ],
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}
