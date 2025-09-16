import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('/Parallax.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: 'oklch(0.646 0.222 41.116)',
          foreground: 'oklch(1 0 0)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config;
