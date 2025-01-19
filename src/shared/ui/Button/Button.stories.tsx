import React from 'react';
import type { Meta, StoryObj, StoryContext } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const allowedColors: Record<ButtonProps['variant'], Array<ButtonProps['color']>> = {
  primary: ['blue', 'red'],
  secondary: ['blue', 'red', 'green'],
  tertiary: [],
};

const meta: Meta<ButtonProps> = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Button의 Variant를 설정합니다.',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
    color: {
      description: 'Button의 color를 설정합니다.',
      table: {
        type: { summary: "'blue' | 'red' | 'green'" },
        defaultValue: { summary: 'blue' },
      },
      options: ['blue', 'red'],
      control: {
        type: 'radio',
      },
    },
    isLoading: {
      description: 'Button의 loading 여부를 설정합니다.',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story, context: StoryContext<ButtonProps>) => {
      const { args } = context;

      if (context.argTypes.color)
        context.argTypes.color.options = allowedColors[args.variant] || [];

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    color: 'blue',
    children: 'Test',
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    color: 'blue',
    children: 'Test',
  },
};
