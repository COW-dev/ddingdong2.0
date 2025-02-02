'use client';
import * as AccordionPrimitives from '@radix-ui/react-accordion';

import { cn } from '@/shared/lib/core';

import { IconName } from '../assets';
import { Icon } from '../Icon';

type Prop =
  | {
      children: React.ReactNode;
    }
  | AccordionPrimitives.AccordionSingleProps
  | AccordionPrimitives.AccordionMultipleProps;

export function AccordionRoot({ children, ...props }: Prop) {
  return (
    <AccordionPrimitives.Root type="multiple" className="w-full" {...props}>
      {children}
    </AccordionPrimitives.Root>
  );
}

type ItemProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
} & AccordionPrimitives.AccordionItemProps;

export function AccordionItem({ trigger, children, ...props }: ItemProps) {
  return (
    <AccordionPrimitives.Item className="group border-b border-gray-200" {...props}>
      <AccordionPrimitives.Header className="w-full">{trigger}</AccordionPrimitives.Header>
      {children}
    </AccordionPrimitives.Item>
  );
}

type TriggerProps = {
  icon?: IconName;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({
  className,
  children,
  icon = 'arrowUp',
  ...props
}: TriggerProps) {
  return (
    <AccordionPrimitives.Trigger
      className={cn(`flex w-full cursor-pointer justify-between px-6 py-[17px]`, className)}
      {...props}
    >
      {children}
      <Icon
        className={`ml-2 ${icon === 'arrowUp' && 'transition-transform duration-200 group-data-[state=open]:rotate-180'}`}
        name={icon}
      />
    </AccordionPrimitives.Trigger>
  );
}

type ContentProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({ className, children, ...props }: ContentProps) {
  return (
    <AccordionPrimitives.Content
      className={cn(
        `h-full overflow-hidden bg-gray-50 px-6 py-[17px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitives.Content>
  );
}
