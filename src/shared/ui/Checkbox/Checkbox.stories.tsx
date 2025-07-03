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
    disabled: false,
    size: 'md',
  },
  render: (args) => <Checkbox {...args} />,
};
export const UsingWithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="test" value="test" />
        <label htmlFor="test">checkbox 1</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="test2" value="test2" />
        <label htmlFor="test2">checkbox 2</label>
      </div>
    </div>
  ),
};
