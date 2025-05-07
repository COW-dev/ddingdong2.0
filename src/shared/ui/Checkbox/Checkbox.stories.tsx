import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'components/common/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Checkbox 컴포넌트는 input type="checkbox"를 대체할 수 있는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
    id: 'default id',
    disabled: false,
    size: 'md',
  },
  render: (args) => <Checkbox {...args} />,
};

export const UnusingLabelOption: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="test" />
      <label htmlFor="test">label option을 사용하지 않은 경우</label>
    </div>
  ),
};
