import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Exact CometChat Figma Colors
        cosmic: {
          DEFAULT: "hsl(var(--cosmic))",
          50: "hsl(var(--cosmic-50))",
          100: "hsl(var(--cosmic-100))",
          200: "hsl(var(--cosmic-200))",
          300: "hsl(var(--cosmic-300))",
          400: "hsl(var(--cosmic-400))",
          500: "hsl(var(--cosmic-500))",
          600: "hsl(var(--cosmic-600))",
          700: "hsl(var(--cosmic-700))",
          800: "hsl(var(--cosmic-800))",
          900: "hsl(var(--cosmic-900))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          50: "hsl(var(--orange-50))",
          100: "hsl(var(--orange-100))",
          200: "hsl(var(--orange-200))",
          300: "hsl(var(--orange-300))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))",
          600: "hsl(var(--orange-600))",
          700: "hsl(var(--orange-700))",
          800: "hsl(var(--orange-800))",
          900: "hsl(var(--orange-900))",
        },
        // Figma Brand Colors
        brand: {
          primary: "hsl(var(--brand-primary))",
          secondary: "hsl(var(--brand-secondary))",
        },
        grayscale: {
          dark: {
            1: "hsl(var(--grayscale-dark-01))",
            12: "hsl(var(--grayscale-dark-12))",
          },
          light: {
            1: "hsl(var(--grayscale-light-01))",
          },
        },
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, hsl(var(--cosmic-900)) 0%, hsl(var(--cosmic-800)) 50%, hsl(var(--cosmic-700)) 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at top left, hsl(var(--cosmic-800)) 0%, hsl(var(--cosmic-900)) 50%, transparent 80%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(250, 250, 255, 0.08) 0%, rgba(250, 250, 255, 0.04) 100%)",
        "orange-gradient":
          "linear-gradient(135deg, hsl(var(--orange-500)) 0%, hsl(var(--orange-600)) 100%)",
        "figma-gradient":
          "linear-gradient(290.03deg, #FCB8A8 12.63%, #B968A4 45.85%, #756CF7 81.21%)",
        "cosmic-orb":
          "linear-gradient(227.49deg, #FCB8A8 1.76%, rgba(252, 184, 168, 0.12) 55.61%, rgba(252, 184, 168, 0) 72.49%), linear-gradient(55.5deg, #5343A5 15.38%, rgba(83, 67, 165, 0.05) 42.82%, rgba(83, 67, 165, 0) 53.67%), #B968A4",
        "orange-orb":
          "linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(2deg)" },
          "50%": { transform: "translateY(-30px) rotate(0deg)" },
          "75%": { transform: "translateY(-15px) rotate(-2deg)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--orange-500)/0.3)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow:
              "0 0 40px hsl(var(--orange-500)/0.6), 0 0 60px hsl(var(--cosmic-500)/0.3)",
            transform: "scale(1.05)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 127, 62, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(255, 127, 62, 0.6), 0 0 60px rgba(104, 82, 214, 0.3)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up-delayed": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        morph: {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "25%": { borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%" },
          "50%": { borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
          "75%": { borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%" },
          "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
        },
        "cosmic-drift": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(240deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-delayed":
          "slide-up-delayed 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "rotate-slow": "rotate-slow 20s linear infinite",
        morph: "morph 8s ease-in-out infinite",
        "cosmic-drift": "cosmic-drift 15s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
        shine: "shine 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
