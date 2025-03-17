import type { Meta, StoryObj } from '@storybook/react';

import { ItemCard, Props } from './ItemCard';

const meta: Meta<Props> = {
  title: 'components/common/ItemCard',
  component: ItemCard,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'lg'],
    },
    path: { action: 'clicked' },
  },
};

export default meta;

export type Story = StoryObj<Props>;

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small ItemCard',
    path: '/',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large ItemCard',
    path: '/',
  },
};
