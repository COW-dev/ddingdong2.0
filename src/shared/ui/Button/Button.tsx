import React from 'react';
import { cva } from 'class-variance-authority';

type VariantColorMap = {
  primary: 'red' | 'blue';
  secondary: 'red' | 'blue' | 'green';
  tertiary: never;
};

type Variant = keyof VariantColorMap;
type Color<V extends Variant> = VariantColorMap[V];

export type ButtonProps<V extends Variant = 'primary' | 'secondary' | 'tertiary'> = {
  variant: V;
  color?: Color<V>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonVariants = cva(
  `flex justify-center items-center text-sm font-bold py-2.5 px-3 rounded-[10px] md:rounded-xl md:p-4 md:text-lg`,
  {
    variants: {
      variant: {
        primary: 'text-white',
        secondary: '',
        tertiary: 'text-gray-400 bg-gray-100 hover:bg-gray-200',
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
    defaultVariants: {
      variant: 'primary',
      color: 'blue',
    },
  }
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'primary', color, ...props },
  ref
) {
  return (
    <button className={ButtonVariants({ variant, color })} {...props} ref={ref}>
      {children}
    </button>
  );
});
