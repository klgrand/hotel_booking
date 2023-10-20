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
      colors: {
        'primary-color': '#2D3DDF',
        'primary-light-color': '#EBEDFF',
        'secondary-text-gray-color': '#8E8E8E'
      },
      dropShadow: {
        '3xl': '0px 0px 3px rgba(0,0,0,0.2 )',
        '4xl': '-10px 0px 18px rgba(0,0,0,0.1 )',
        '5xl': '-10px 0px 8px rgba(0,0,0,0.16 )',
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}
export default config
