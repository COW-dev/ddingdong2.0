import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Components/common/Badge',
  component: Badge,
  argTypes: {
    isSubmited: { control: 'radio', options: [true, false, null] },
    isProgress: { control: 'radio', options: [true, false, null] },
    isRecriting: { control: 'boolean' },
    color: { control: 'radio', options: [true, false, undefined] },
    text: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export const InteractiveBadge: StoryObj<typeof Badge> = {
  args: {
    isSubmited: undefined,
    isProgress: undefined,
    isRecriting: undefined,
    color: undefined,
    text: '상태 없음',
  },
};
