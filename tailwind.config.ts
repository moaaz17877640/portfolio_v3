import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      colors: {
        neon: {
          blue: '#1b2a4a',
          cyan: '#00e5ff',
          violet: '#8a2be2',
          pink: '#ff2da1',
          glow: '#7df9ff'
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.15), transparent 40%), radial-gradient(circle at 80% 30%, rgba(138,43,226,0.12), transparent 40%), radial-gradient(circle at 60% 80%, rgba(255,45,161,0.10), transparent 35%)',
        'neon-gradient': 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(138,43,226,0.15))'
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.35)',
        'glow-strong': '0 0 40px rgba(138, 43, 226, 0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtils = {
        '.glass': {
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'saturate(160%) blur(6px)',
          border: '1px solid rgba(255,255,255,0.12)'
        },
        '.glass-dark': {
          background: 'rgba(0,0,0,0.28)',
          backdropFilter: 'saturate(160%) blur(6px)',
          border: '1px solid rgba(255,255,255,0.12)'
        }
      }
      addUtilities(newUtils as Record<string, any>)
    })
  ]
} satisfies Config
