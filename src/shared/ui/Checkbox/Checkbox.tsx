import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/core';
import { Icon } from '@/shared/ui/Icon/Icon';

import { Body2 } from '../Typography/Typography';

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
   * default checked state.
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * size of the checkbox.
   * @default 'md'
   */
  size?: 'sm' | 'md';
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export function Checkbox({
  className,
  size = 'md',
  defaultChecked = false,
  label,
  ...props
}: Props) {
  const [checked, setChecked] = React.useState(defaultChecked);

  return (
    <CheckboxPrimitive.Root
      checked={checked}
      className={cn(
        'peer flex h-6 w-6 items-center gap-2 rounded-sm border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border-[1.5px]',
        size === 'sm' && 'h-4 w-4',
        className
      )}
      {...props}
    >
      <div
        className={`flex items-center justify-center rounded-sm bg-primary-300 ${size === 'sm' ? 'min-w-4' : 'min-w-6'}`}
      >
        <CheckboxPrimitive.Indicator>
          <Icon
            name="check"
            width={size === 'sm' ? 16 : 24}
            height={size === 'sm' ? 16 : 24}
            className="text-primary-300"
          />
        </CheckboxPrimitive.Indicator>
      </div>
      <Body2
        onClick={() => setChecked(!checked)}
        className="text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Body2>
    </CheckboxPrimitive.Root>
  );
}
