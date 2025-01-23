import * as SwitchPrimitives from '@radix-ui/react-switch';

import { COLORS, SwitchColor } from '@/shared/lib/colors';

type Props = React.ComponentProps<typeof SwitchPrimitives.Root> & {
  /**
   * color of the switch.
   * @default 'primary'
   */
  color?: SwitchColor;
};

export function Switch({ color = 'primary', ...props }: Props) {
  return (
    <SwitchPrimitives.Root
      {...props}
      className="group relative flex h-3.5 w-7 items-center rounded-full shadow-lg data-[state=checked]:bg-[var(--switch-color)] data-[state=unchecked]:bg-gray-500"
      style={color && ({ '--switch-color': COLORS[color] } as React.CSSProperties)}
    >
      <SwitchPrimitives.Thumb className="h-5 w-5 -translate-x-1.5 rounded-full bg-white shadow-inner duration-100 group-data-[state=checked]:translate-x-3.5" />
    </SwitchPrimitives.Root>
  );
}
