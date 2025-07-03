import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/shared/lib/core';

import { Icon } from '../Icon/Icon';

type Prop = {
  /**
   * The content of the Radio, typically RadioItem components.
   */
  children: React.ReactNode;
} & RadioGroupPrimitive.RadioGroupProps;

export function RadioRoot({ children, ...props }: Prop) {
  return <RadioGroupPrimitive.Root {...props}>{children}</RadioGroupPrimitive.Root>;
}

type ItemProps = {
  /**
   * additional className.
   */
  className?: string;

  /**
   * size of the radio button.
   * @default 'md'
   */
  size?: 'md' | 'lg';
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

export function RadioItem({ className, size = 'md', ...props }: ItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        `peer flex items-center justify-center rounded-full border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border data-[state=checked]:border-primary-300`,
        size === 'lg' ? 'h-8 w-8' : 'h-6 w-6',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={cn(`flex items-center justify-center`)}>
        <Icon
          name="check"
          width={size === 'lg' ? 32 : 24}
          height={size === 'lg' ? 32 : 24}
          className="rounded-full bg-primary-300 text-primary-300"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
