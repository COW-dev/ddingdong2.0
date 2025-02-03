'use client';
import * as AccordionPrimitives from '@radix-ui/react-accordion';

import { cn } from '@/shared/lib/core';

import { IconName } from '../assets';
import { Icon } from '../Icon';

type Prop = {
  /**
   * The content of the Accordion, typically AccordionItem components.
   */
  children: React.ReactNode;
} & (AccordionPrimitives.AccordionSingleProps | AccordionPrimitives.AccordionMultipleProps);

export function AccordionRoot({ children, ...props }: Prop) {
  return (
    <AccordionPrimitives.Root className="w-full" {...props}>
      <div>{children}</div>
    </AccordionPrimitives.Root>
  );
}

type ItemProps = {
  /**
   * The trigger element that toggles the visibility of the content.
   */
  trigger: React.ReactNode;
  /**
   * The content that is shown or hidden when the trigger is clicked.
   */
  children: React.ReactNode;
  /**
   * icon to display alongside the trigger.
   */
  icon?: IconName;
  /**
   * additional class names to apply to the AccordionItem.
   */
  className?: string;
} & AccordionPrimitives.AccordionItemProps;

export function AccordionItem({
  trigger,
  className,
  children,
  icon = 'arrowDown',
  ...props
}: ItemProps) {
  return (
    <AccordionPrimitives.Item className="group border-b border-gray-200" {...props}>
      <AccordionPrimitives.Header className="w-full">
        <AccordionPrimitives.Trigger
          className={cn(`flex w-full cursor-pointer justify-between px-6 py-[17px]`, className)}
        >
          {trigger}
          <Icon
            className={`ml-2 ${icon === 'arrowUp' && 'transition-transform duration-200 group-data-[state=open]:rotate-180'}`}
            name={icon}
          />
        </AccordionPrimitives.Trigger>
      </AccordionPrimitives.Header>
      <AccordionPrimitives.Content
        asChild
        className={cn(
          `px-6 py-[17px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`
        )}
      >
        {children}
      </AccordionPrimitives.Content>
    </AccordionPrimitives.Item>
  );
}
