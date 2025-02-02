import type { Meta } from '@storybook/react';

import { Item, Accordion, Content, Trigger } from '.';

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
        <Item value="item-1" trigger={<Trigger>Trigger</Trigger>}>
          <Content>test</Content>
        </Item>
        <Item value="item-2" trigger={<Trigger>test</Trigger>}>
          <Content>test</Content>
        </Item>
      </Accordion>
    );
  },
};
