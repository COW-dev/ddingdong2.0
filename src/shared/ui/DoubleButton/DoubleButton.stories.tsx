import type { Meta, StoryObj } from '@storybook/react';

import { DoubleButton, Props } from './DoubleButton';

import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'components/common/DoubleButton',
  component: DoubleButton,
  tags: ['autodocs'],
  argTypes: {
    left: { description: 'DoubleButton의 왼쪽에 배치되는 버튼입니다.' },
    right: { description: 'DoubleButton의 오른쪽에 배치되는 버튼입니다.' },
  },
};

export default meta;
export type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    left: (
      <Button variant="primary" color="blue">
        Left Button
      </Button>
    ),
    right: (
      <Button variant="secondary" color="red">
        Right Button
      </Button>
    ),
  },
};
