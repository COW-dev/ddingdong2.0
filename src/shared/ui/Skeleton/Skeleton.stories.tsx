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
  argTypes: {
    width: {
      control: { type: 'text' },
      defaultValue: 'auto',
      table: { type: { summary: 'string | number' } },
    },
    height: {
      control: { type: 'text' },
      defaultValue: '21px',
      table: { type: { summary: 'string | number' } },
    },
    rounded: {
      control: { type: 'text' },
      defaultValue: '6px',
      table: { type: { summary: 'string | number' } },
    },
  },
  render: (args) => {
    const widthValue = Number(args.width) ? `${args.width}px` : args.width;
    const heightValue = Number(args.height) ? `${args.height}px` : args.height;
    const roundedValue = Number(args.rounded) ? `${args.rounded}px` : args.rounded;

    return <Skeleton width={widthValue} height={heightValue} rounded={roundedValue} />;
  },
};
