import type { Meta, StoryObj } from '@storybook/react';

import { COLORS } from '@/shared/lib/colors';

import Switch from './Switch';

const meta = {
  title: 'components/common/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    color: 'gray',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      table: {
        type: { summary: 'SwitchColor' },
        defaultValue: { summary: 'primary' },
      },
      options: Object.keys(COLORS),
    },
  },
  render: (args) => <Switch {...args} />,
};
