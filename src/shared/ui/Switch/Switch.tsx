import React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/shared/utils/core';

type Props = React.ComponentProps<typeof SwitchPrimitives.Root> & {
  className?: string;
  color?: string;
};

function Switch({ className, color = 'primary-300', ...props }: Props) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        `group relative flex h-4 w-10 items-center rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.35)] outline-none data-[state=checked]:bg-${color} data-[state=unchecked]:bg-gray-500`,
        className
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb className="block h-5 w-5 translate-x-0 rounded-full bg-white shadow-[0_2px_2px_rgba(0,0,0,0.35)] transition-transform duration-100 group-data-[state=checked]:translate-x-[19px]" />
    </SwitchPrimitives.Root>
  );
}

export default Switch;
