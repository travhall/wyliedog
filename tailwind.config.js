/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'brand-primary': {
          DEFAULT: "hsl(var(--brand-primary-500))",
          50: 'hsl(var(--brand-primary-50))',
          100: 'hsl(var(--brand-primary-100))',
          200: 'hsl(var(--brand-primary-200))',
          300: 'hsl(var(--brand-primary-300))',
          400: 'hsl(var(--brand-primary-400))',
          500: 'hsl(var(--brand-primary-500))',
          600: 'hsl(var(--brand-primary-600))',
          700: 'hsl(var(--brand-primary-700))',
          800: 'hsl(var(--brand-primary-800))',
          900: 'hsl(var(--brand-primary-900))',
          950: 'hsl(var(--brand-primary-950))',
        },
        'brand-secondary': {
          DEFAULT: "hsl(var(--brand-secondary-500))",
          50: 'hsl(var(--brand-secondary-50))',
          100: 'hsl(var(--brand-secondary-100))',
          200: 'hsl(var(--brand-secondary-200))',
          300: 'hsl(var(--brand-secondary-300))',
          400: 'hsl(var(--brand-secondary-400))',
          500: 'hsl(var(--brand-secondary-500))',
          600: 'hsl(var(--brand-secondary-600))',
          700: 'hsl(var(--brand-secondary-700))',
          800: 'hsl(var(--brand-secondary-800))',
          900: 'hsl(var(--brand-secondary-900))',
          950: 'hsl(var(--brand-secondary-950))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};