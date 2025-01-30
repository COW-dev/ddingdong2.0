import { cn } from '@/shared/lib/core';

type Props = {
  /**
   *  size of the width, following CSS `width` rules.
   *  @default 'auto'
   */
  width?: number | string;
  /**
   *  size of the height, following CSS `height` rules.
   *  @default '21'
   */
  height?: number | string;
  /**
   *  size of the border-radius, following CSS `border-radius` rules.
   *  @default '6'
   */
  rounded?: number | string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ rounded = 6, height = 21, width = 'auto', className, ...props }: Props) {
  return (
    <div
      className={cn(
        'h-[var(--skeleton-height)] w-[var(--skeleton-width)] animate-pulse rounded-[var(--skeleton-rounded)] bg-gray-200',
        className
      )}
      style={
        {
          '--skeleton-height': Number(height) ? `${height}px` : height,
          '--skeleton-width': Number(width) ? `${width}px` : width,
          '--skeleton-rounded': Number(rounded) ? `${rounded}px` : rounded,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
