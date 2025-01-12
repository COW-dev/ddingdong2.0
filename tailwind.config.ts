import type { Config } from 'tailwindcss';

import { colors } from './src/shared/ui/colors/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors,
  },
  plugins: [],
} satisfies Config;
