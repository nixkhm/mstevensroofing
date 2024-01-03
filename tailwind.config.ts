import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colorScheme: {
        yellow: '#EFDD8D',
        olive: '#3D3B30',
        grey: '#4D5061',
        blue: '#5C80BC',
        orange: '#C75000'
      }
    }
  },
  plugins: []
}
export default config
