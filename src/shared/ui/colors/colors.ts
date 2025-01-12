export const colors = {
  primary: {
    50: '#EFF6FF',
    100: '#dbeafe',
    200: '#3b82f6',
    300: '#2563eb',
  },
  gray: {
    50: '#F9FAFB',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#9ca3af',
    400: '#6b7280',
    500: '#4b5563',
    600: '#1f2937',
  },
  red: {
    50: '#fef2f2',
    100: '#f87171',
    200: '#EF4444',
  },
  green: {
    50: '#dcfce7',
    100: '#22c55e',
  },
  emerald: '#10b981',
  orange: '#f97316',
  yellow: '#eab308',
  pink: '#ec4899',
  purple: '#a855f7',
  cyan: '#06b6d4',
  indigo: '#6366f1',
  white: '#ffffff',
  black: '#000000',
  current: 'currentColor',
};

export type Colors = keyof typeof colors;
export const colorNames = Object.keys(colors) as Colors[];
