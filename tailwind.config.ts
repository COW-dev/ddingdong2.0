import type { Config } from 'tailwindcss';

import { colors } from './src/shared/ui/Colors/colors';

export default {
  content: [
    './app/**.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
  },
  plugins: [],
} satisfies Config;
