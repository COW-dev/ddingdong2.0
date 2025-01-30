import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'components/common/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '실제 데이터가 렌더링 되기 전에, 보이게 될 화면의 윤곽을 먼저 그려주는 공통 컴포넌트입니다',
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  args: { className: 'h-5 w-full' },
  argTypes: {
    className: {
      control: { type: 'text' },
      table: { type: { summary: 'string ' } },
    },
  },
  render: (args) => {
    return <Skeleton className={args.className} />;
  },
};
