'use client';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { COLORS, SwitchColor } from '@/shared/lib/colors';

type Props = React.ComponentProps<typeof SwitchPrimitives.Root> & {
  /**
   * color of the switch.
   * @default 'primary'
   */
  color?: SwitchColor;
};

function Switch({ color = 'primary', ...props }: Props) {
  return (
    <SwitchPrimitives.Root
      {...props}
      className="group relative flex h-4 w-10 items-center rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.35)] outline-none data-[state=checked]:bg-[var(--switch-color)] data-[state=unchecked]:bg-gray-500"
      style={color && ({ '--switch-color': COLORS[color] } as React.CSSProperties)}
      cz-shortcut-listen="true"
    >
      <SwitchPrimitives.Thumb className="block h-5 w-5 translate-x-0 rounded-full bg-white shadow-[0_2px_2px_rgba(0,0,0,0.35)] transition-transform duration-100 group-data-[state=checked]:translate-x-[19px]" />
    </SwitchPrimitives.Root>
  );
}

export default Switch;
