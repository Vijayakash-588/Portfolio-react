/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          emerald: '#10b981',
          orange: '#fe5617',
        },
        dark: {
          900: '#050505',
          800: '#111111',
          700: '#1a1a1a',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scan: {
          '0%': { top: '0%', opacity: 0 },
          '5%': { opacity: 1 },
          '95%': { opacity: 1 },
          '100%': { top: '100%', opacity: 0 },
        },
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
        float: 'float 6s ease-in-out infinite',
        glitch: 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) infinite',
        scan: 'scan 4s linear infinite',
        reveal: 'reveal 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [
    // This plugin adds the 'perspective' utilities for 3D effects
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.03)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-glow-cyan': {
          'text-shadow': '0 0 10px rgba(6, 182, 212, 0.5)',
        },
        '.shadow-neon-cyan': {
          'box-shadow': '0 0 20px rgba(6, 182, 212, 0.3)',
        }
      })
    },
  ],
}