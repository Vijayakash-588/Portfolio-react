/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aurora-primary': 'var(--aurora-primary)',
        'aurora-secondary': 'var(--aurora-secondary)',
        'aurora-accent': 'var(--aurora-accent)',
        'aurora-royal': 'var(--aurora-royal)',
        'aurora-indigo': 'var(--aurora-secondary)',
        'aurora-violet': 'var(--aurora-royal)',
        violet: '#8b5cf6',
        dark: {
          950: '#030014',
          900: '#0a0a1a',
          800: '#111127',
          700: '#1a1a3e',
          600: '#252550',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(10px, 10px) scale(1.05)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(99, 102, 241, 0.3)' },
          '50%': { borderColor: 'rgba(99, 102, 241, 0.6)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'float-gentle': 'float-gentle 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 4s ease infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-gradient': 'linear-gradient(135deg, #6366f1, #8b5cf6, #f59e0b)',
        'aurora-text': 'linear-gradient(90deg, #6366f1, #8b5cf6, #f59e0b, #6366f1)',
      },
    },
  },
  plugins: [
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
          'background': 'rgba(255, 255, 255, 0.02)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.glass-strong': {
          'background': 'rgba(10, 10, 26, 0.8)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
        },
        '.shadow-aurora': {
          'box-shadow': '0 0 40px rgba(99, 102, 241, 0.05), 0 0 80px rgba(139, 92, 246, 0.02)',
        },
      })
    },
  ],
}