import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'components/common/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{ width: 400, backgroundColor: 'white', padding: 20 }}>
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

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    title: 'Navbar 예시입니다',
  },
};
