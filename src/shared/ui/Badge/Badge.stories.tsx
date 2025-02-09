import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Components/common/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'radio', options: ['red', 'green', 'gray'] },
    text: { control: 'text' },
  },
  parameters: {
    docs: {
      autodocs: true,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    color: undefined,
    text: '상태 없음',
  },
};
