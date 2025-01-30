import { cn } from '@/shared/lib/core';

type Props = {
  /**
   * optional additional CSS class names like size etc.
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: Props) {
  return <div className={cn('animate-pulse rounded-md bg-gray-200', className)} {...props} />;
}
