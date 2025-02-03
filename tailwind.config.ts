import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            'h2': {
              marginTop: '2em',
            },
            'ul > li': {
              paddingLeft: '0.5em',
            },
            'code': {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'a': {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
