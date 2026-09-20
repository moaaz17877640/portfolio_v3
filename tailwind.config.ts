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
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace']
      },
      colors: {
        dark: {
          950: '#04060c',
          900: '#070a14',
          850: '#0b1022',
          800: '#111833',
          700: '#1a2246'
        },
        neon: {
          blue: '#1b2a4a',
          cyan: '#00f2fe',
          teal: '#00e5ff',
          violet: '#8a2be2',
          purple: '#7928ca',
          pink: '#ff2da1',
          rose: '#ff0080',
          glow: '#7df9ff',
          emerald: '#10b981'
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 15%, rgba(0,242,254,0.12), transparent 45%), radial-gradient(circle at 85% 25%, rgba(121,40,202,0.12), transparent 40%), radial-gradient(circle at 50% 85%, rgba(255,45,161,0.08), transparent 45%)',
        'neon-gradient': 'linear-gradient(135deg, rgba(0,242,254,0.2) 0%, rgba(138,43,226,0.2) 50%, rgba(255,45,161,0.2) 100%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 242, 254, 0.25)',
        'glow-strong': '0 0 45px rgba(138, 43, 226, 0.35)',
        'glow-pink': '0 0 35px rgba(255, 45, 161, 0.3)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)'
      },
      backdropBlur: {
        xs: '2px',
        xl: '20px'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'border-spin': 'border-spin 7s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtils = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'saturate(180%) blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        },
        '.glass-dark': {
          background: 'rgba(7, 10, 20, 0.65)',
          backdropFilter: 'saturate(190%) blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        },
        '.glass-panel': {
          background: 'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }
      }
      addUtilities(newUtils as Record<string, any>)
    })
  ]
} satisfies Config

