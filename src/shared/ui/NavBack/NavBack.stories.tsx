import type { Meta, StoryObj } from '@storybook/react';

import { NavBack } from './NavBack';

const meta: Meta<typeof NavBack> = {
  title: 'components/common/NavBack',
  component: NavBack,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },

    docs: {
      description: {
        story: '클릭시 페이지 뒤로가기 이벤트를 발생시키는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBack>;

export const Default: Story = {
  args: {
    title: 'NavBack 예시입니다',
  },
};
