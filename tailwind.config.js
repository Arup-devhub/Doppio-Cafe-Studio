/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F3EA',
          50: '#FDFAF4',
          100: '#FAF5EC',
          200: '#F7F3EA',
          300: '#EDE4D1',
          400: '#E1D3B8',
        },
        forest: {
          DEFAULT: '#263E32',
          light: '#355444',
          dark: '#1A2C23',
          deep: '#13211B',
        },
        olive: {
          DEFAULT: '#66745A',
          light: '#7D8E6F',
          dark: '#515D47',
        },
        beige: {
          DEFAULT: '#D8CBB7',
          light: '#E8DFD1',
          dark: '#C4B39B',
        },
        coffee: {
          DEFAULT: '#76513A',
          light: '#8E6347',
          dark: '#593C29',
          roast: '#3D281B',
        },
        charcoal: {
          DEFAULT: '#242620',
          dark: '#181A16',
          muted: '#3A3D34',
        },
        terracotta: {
          DEFAULT: '#C87D55',
          light: '#D9946E',
          soft: '#E8BEA6',
        },
        gold: {
          DEFAULT: '#D4AF37',
          warm: '#E2B855',
          accent: '#C59B27',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(36, 38, 32, 0.08)',
        'luxury-lg': '0 25px 50px -12px rgba(36, 38, 32, 0.16)',
        'glow': '0 0 30px rgba(226, 184, 85, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
