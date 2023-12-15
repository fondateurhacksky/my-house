import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'n': 'clamp(10px, 4vw, 15px)',
        'm': 'clamp(20px, 8vw, 25px)',
        'clamp': 'clamp(20px, 8vw, 20px)'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': 'minmax(80px, 22s0px) minmax(80px, 220px)',
            // 'layout0' : '100px 100px 100px'
      },
      colors: {
        tcolor: "#222",
      },
      width: {
        '30x': '32%',
        '48x': '48%',
        '35x': '35%',
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
        animation: {
          textReveal: 'textReveal 0s 1s forwards',
          slideIn: 'slideIn 0.75s ease-out forwards',
          slideOut: 'slideOut 0.75s 1s ease-out forwards'
        },

        keyframes: {
          textReveal: {
            '100%' : { color: '#222' }
          },
          slideIn: {
              '100%' : { transform: 'translateX(0)' }
          },
          slideOut: {
            '100%' : { transform: 'translateX(101%)' }
        }
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
export default config
