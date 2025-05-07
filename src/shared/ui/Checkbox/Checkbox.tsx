import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/core';
import { Icon } from '@/shared/ui/Icon/Icon';

import { Subtitle3 } from '../Typography/Typography';

type Props = {
  /**
   * additional className.
   */
  className?: string;
  /**
   * label to be displayed.
   */
  label?: string;
  /**
   * size of the checkbox.
   * @default 'md'
   */
  size?: 'sm' | 'md';
  /**
   * id connects the button to the label.
   */
  id?: string;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export function Checkbox({ className, size = 'md', label, id, ...props }: Props) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        id={id}
        className={cn(
          `peer flex items-center rounded-sm border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border-[1.5px] data-[state=checked]:bg-primary-300`,
          size === 'sm' ? 'h-4 w-4' : 'h-6 w-6',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <Icon
            name="check"
            width={size === 'sm' ? 16 : 24}
            height={size === 'sm' ? 16 : 24}
            className="text-primary-300"
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <Subtitle3
          htmlFor={id}
          as="label"
          className="text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Subtitle3>
      )}
    </div>
  );
}
