module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        "x-2830-3f": "var(--x-2830-3f)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "10-regular": "var(--10-regular-font-family)",
        "12-bold": "var(--12-bold-font-family)",
        "12-regular": "var(--12-regular-font-family)",
        "14-bold": "var(--14-bold-font-family)",
        "14-extra-bold": "var(--14-extra-bold-font-family)",
        "14-medium-uppercase": "var(--14-medium-uppercase-font-family)",
        "14-regular-20": "var(--14-regular-20-font-family)",
        "16-bold": "var(--16-bold-font-family)",
        "16-extra-bold": "var(--16-extra-bold-font-family)",
        "16-regular": "var(--16-regular-font-family)",
        "18-extra-bold": "var(--18-extra-bold-font-family)",
        "20-bold": "var(--20-bold-font-family)",
        "20-medium-28": "var(--20-medium-28-font-family)",
        "20-regular": "var(--20-regular-font-family)",
        "24-bold-uppercase": "var(--24-bold-uppercase-font-family)",
        "28-medium": "var(--28-medium-font-family)",
        "28-regular-36": "var(--28-regular-36-font-family)",
        "32-bold": "var(--32-bold-font-family)",
        "32-bold-upper-case": "var(--32-bold-upper-case-font-family)",
        "36-extrabold": "var(--36-extrabold-font-family)",
        "8-semi-bold": "var(--8-semi-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
