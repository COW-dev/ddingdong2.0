import type { Meta } from '@storybook/react';

import { Item, Accordion } from '.';

const meta: Meta = {
  title: 'components/common/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion 하위 컴포넌트로 AccordionItem이 존재합니다',
      },
    },
  },
};

export default meta;

export const Default = {
  render: () => {
    return (
      <Accordion type="multiple">
        {[...Array(5)].map((_, index) => (
          <Item value={`item-${index + 1}`} trigger={<div>질문 {index}</div>} key={index}>
            <div>내용 {index}</div>
          </Item>
        ))}
      </Accordion>
    );
  },
};
