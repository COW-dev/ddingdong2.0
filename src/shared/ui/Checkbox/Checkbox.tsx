import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/core';
import { Icon } from '@/shared/ui/Icon/Icon';

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
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export function Checkbox({ className, defaultChecked = false, label, ...props }: Props) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <CheckboxPrimitive.Root
      checked={checked}
      className={cn(
        'peer flex h-8 w-8 items-center gap-2 rounded-sm border-gray-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border',
        className
      )}
      {...props}
    >
      <div className="flex min-w-8 items-center justify-center rounded-sm bg-primary-300">
        <CheckboxPrimitive.Indicator>
          <Icon name="check" width={32} height={32} className="text-primary-300" />
        </CheckboxPrimitive.Indicator>
      </div>
      <label
        onClick={() => setChecked(!checked)}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </CheckboxPrimitive.Root>
  );
}
