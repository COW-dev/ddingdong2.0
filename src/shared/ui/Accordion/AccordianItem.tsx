import * as AccordionPrimitives from '@radix-ui/react-accordion';

import { IconName } from '../assets';
import { Icon } from '../Icon';

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
  icon?: IconName;
  key: string;
};

function AccordianItem({ label, children, icon = 'arrowUp' }: Props) {
  return (
    <AccordionPrimitives.Item value="item-1" className="group border-b border-gray-200">
      <AccordionPrimitives.Header className="flex cursor-pointer items-center justify-between p-4">
        <AccordionPrimitives.Trigger className="flex w-full justify-between text-lg font-medium">
          {label}
          <Icon
            className="ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
            name={icon}
          />
        </AccordionPrimitives.Trigger>
      </AccordionPrimitives.Header>
      <AccordionPrimitives.Content className="overflow-hidden bg-gray-50 p-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {children}
      </AccordionPrimitives.Content>
    </AccordionPrimitives.Item>
  );
}

export default AccordianItem;
