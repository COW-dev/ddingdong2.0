import type { Meta, StoryObj } from '@storybook/react';

import BackSubtitle from './BackSubtitle';

const meta: Meta<typeof BackSubtitle> = {
  title: 'components/common/BackSubtitle',
  component: BackSubtitle,
  decorators: [
    (Story) => (
      <div style={{ width: 400, backgroundColor: 'white', padding: 20 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      path: '/',
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

type Story = StoryObj<typeof BackSubtitle>;

export const Default: Story = {
  args: {
    title: 'BackSubtitle 예시입니다',
  },
};
