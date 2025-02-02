import type { Meta } from '@storybook/react';

import { Item, Accordion } from '.';

const meta: Meta = {
  title: 'components/common/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  render: () => {
    return (
      <Accordion>
        <Item label="제목 1" key="">
          content
        </Item>
      </Accordion>
    );
  },
};
