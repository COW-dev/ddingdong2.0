'use client';
import * as AccordionPrimitives from '@radix-ui/react-accordion';

import { IconName } from '../assets';
import { Icon } from '../Icon';

type Prop = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function AccordionRoot({ children, ...props }: Prop) {
  return (
    <AccordionPrimitives.Root type="single" collapsible className="w-full">
      <div {...props}>{children}</div>
    </AccordionPrimitives.Root>
  );
}

type ItemProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  icon?: IconName;
  key: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function AccordionItem({ label, children, icon = 'arrowUp', ...props }: ItemProps) {
  return (
    <AccordionPrimitives.Item
      value="item-1"
      className="group relative border-b border-gray-200"
      {...props}
    >
      <AccordionPrimitives.Header className="flex cursor-pointer items-center justify-between p-4">
        <AccordionPrimitives.Trigger className="flex w-full justify-between text-lg font-medium">
          {label}
          <Icon
            className={`ml-2 transition-transform duration-200 ${icon === 'arrowUp' && 'group-data-[state=open]:rotate-180'}`}
            name={icon}
          />
        </AccordionPrimitives.Trigger>
      </AccordionPrimitives.Header>
      <AccordionPrimitives.Content className="h-full overflow-hidden bg-gray-50 p-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {children}
      </AccordionPrimitives.Content>
    </AccordionPrimitives.Item>
  );
}
