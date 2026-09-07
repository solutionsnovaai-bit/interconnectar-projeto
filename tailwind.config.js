/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050D17',
          900: '#0B233B',
          800: '#122D49',
          700: '#1A3C5E',
          600: '#254E77',
        },
        gold: {
          300: '#F0D28C',
          400: '#E0B563',
          500: '#D4AF5A',
          600: '#C9A227',
          700: '#A87E1E',
        },
        cream: '#F6F1E7',
        paper: '#FBF8F2',
        ink: '#101820',
        smoke: '#5B6672',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        micro: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: { soft: 'cubic-bezier(.22,.68,.16,1)' },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'none' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        pulseSoft: { '0%,100%': { opacity: .5 }, '50%': { opacity: 1 } },
        barGo: { '0%': { width: '0%' }, '100%': { width: '100%' } },
      },
      animation: {
        fadeUp: 'fadeUp .8s cubic-bezier(.22,.68,.16,1) forwards',
        marquee: 'marquee 38s linear infinite',
        pulseSoft: 'pulseSoft 2.2s ease-in-out infinite',
        barGo: 'barGo 1.4s cubic-bezier(.22,.68,.16,1) .5s forwards',
      },
    },
  },
  plugins: [],
};
