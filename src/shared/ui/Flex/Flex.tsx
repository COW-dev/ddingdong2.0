import { cn } from '@/shared/lib/core';

const DIR = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
} as const;

const ALIGN_ITEMS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
} as const;

const JUSTIFY_CONTENT = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
  baseline: 'justify-baseline',
  normal: 'justify-normal',
} as const;

const WRAP = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
} as const;

type Props = {
  dir?: keyof typeof DIR;
  items?: keyof typeof ALIGN_ITEMS;
  justify?: keyof typeof JUSTIFY_CONTENT;
  wrap?: keyof typeof WRAP;
  className?: string;
  children: React.ReactNode;
};

export function Flex({
  dir = 'row',
  items = 'start',
  justify = 'center',
  wrap = 'nowrap',
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'flex',
        DIR[dir],
        ALIGN_ITEMS[items],
        JUSTIFY_CONTENT[justify],
        WRAP[wrap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
