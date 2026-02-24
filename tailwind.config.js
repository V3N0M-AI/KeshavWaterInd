/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#001B3D',
        },
        ocean: {
          900: '#1E3A8A',
        },
        cyanLux: {
          600: '#0891B2',
        },
        aquaLux: {
          50: '#ECFEFF',
        },
        water: {
          50: '#F9FBFF',
          100: '#E0F2FE',
        },
        porcelain: '#FFFFFF',
        liquid: '#E0F2FE',
        charcoal: '#001B3D',
      },
      borderRadius: {
        organic: '40px',
        organicLg: '60px',
      },
      boxShadow: {
        glass: '0 18px 60px rgba(0, 27, 61, 0.12)',
      },
      letterSpacing: {
        airy: '0.05em',
      },
      fontFamily: {
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

