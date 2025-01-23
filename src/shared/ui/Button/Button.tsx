import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/core';

import { Icon } from '../Icon';

type VariantColorMap = {
  primary: 'red' | 'blue';
  secondary: 'red' | 'blue' | 'green';
  tertiary: never;
};

export type ButtonVariant = keyof VariantColorMap;
type ButtonColor<V extends ButtonVariant> = VariantColorMap[V];

export type Props<V extends keyof VariantColorMap> = {
  /**
   * variant of the Button.
   */
  variant: V;
  /**
   * color of the Button.
   */
  color?: ButtonColor<V>;
  /**
   * loading state of the Button
   */
  isLoading?: boolean;
  /**
   * border-radius option of the Button
   */
  rounded?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonVariants = cva(
  `flex justify-center items-center text-sm font-bold  rounded-[10px] py-2.5 md:py-4 md:rounded-xl  md:text-lg`,
  {
    variants: {
      variant: {
        primary: 'text-white px-10 md:px-[60px]',
        secondary: 'px-5 md:px-7',
        tertiary: 'text-gray-400 bg-gray-100 hover:bg-gray-200  px-3 md:px-4',
      },
      color: {
        blue: '',
        red: '',
        green: '',
      },
    },
    compoundVariants: [
      { variant: 'primary', color: 'red', class: 'bg-red-200 hover:bg-red-300' },
      { variant: 'primary', color: 'blue', class: 'bg-primary-300 hover:bg-primary-400' },
      {
        variant: 'secondary',
        color: 'blue',
        class: 'text-primary-300 bg-primary-100 hover:bg-primary-200',
      },
      { variant: 'secondary', color: 'red', class: 'text-red-200 bg-red-50 hover:bg-red-100' },
      {
        variant: 'secondary',
        color: 'green',
        class: 'text-green-200 bg-green-50 hover:bg-green-100',
      },
    ],
  }
);

export function Button<V extends ButtonVariant>({
  children,
  variant,
  color,
  rounded = false,
  isLoading = false,
  disabled,
  className,
  ...props
}: Props<V>) {
  const isDisabled = isLoading || disabled;
  const tertiaryClasses = ButtonVariants({ variant: 'tertiary' });

  return (
    <button
      type="button"
      className={cn(
        ButtonVariants({ variant, color }),
        isDisabled && `cursor-not-allowed ${tertiaryClasses}`,
        rounded && 'rounded-full md:rounded-full',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <Icon name="loading" className="-ml-1 mr-1.5 animate-spin" />}
      {children}
    </button>
  );
}
