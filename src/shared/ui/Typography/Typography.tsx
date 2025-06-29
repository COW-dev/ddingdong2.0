import { ComponentPropsWithoutRef, createElement, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/core';

type TypographyVariant =
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Title4'
  | 'Subtitle1'
  | 'Subtitle2'
  | 'Subtitle3'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Caption1'
  | 'Caption2'
  | 'ButtonTitle1'
  | 'ButtonTitle2';

const variantClasses = cva('whitespace-pre-wrap', {
  variants: {
    type: {
      Title1: 'md:text-4xl text-2xl font-bold',
      Title2: 'md:text-3xl text-xl font-bold',
      Title3: 'md:text-2xl text-xl font-bold',
      Title4: 'md:text-xl text-lg font-semibold',
      Subtitle1: 'md:text-xl text-lg font-semibold',
      Subtitle2: 'md:text-lg text-base font-semibold',
      Subtitle3: 'md:text-base text-base font-semibold',
      Body1: 'md:text-xl text-lg font-medium',
      Body2: 'md:text-lg text-base font-medium',
      Body3: 'md:text-base text-base font-medium',
      Caption1: 'md:text-base text-base font-normal',
      Caption2: 'md:text-sm text-sm font-normal',
      ButtonTitle1: 'md:text-xl text-base font-bold',
      ButtonTitle2: 'md:text-base text-base font-bold',
    },
  },
  defaultVariants: {
    type: 'Body1',
  },
});

type AllowedTag = 'p' | 'div' | 'label' | 'span';

type TypographyProps<T extends AllowedTag> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  variant?: TypographyVariant;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Typography<T extends AllowedTag = 'p'>({
  as,
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as || 'p';

  return createElement(
    Component,
    {
      className: cn(variantClasses({ type: props.variant }), className),
      ...props,
    },
    children
  );
}

const createTypography = (variant: TypographyVariant) => {
  function Component<T extends AllowedTag = 'p'>(props: Omit<TypographyProps<T>, 'variant'>) {
    return <Typography variant={variant} {...props} />;
  }
  return Component;
};

export const Title1 = createTypography('Title1');
export const Title2 = createTypography('Title2');
export const Title3 = createTypography('Title3');
export const Title4 = createTypography('Title4');
export const Subtitle1 = createTypography('Subtitle1');
export const Subtitle2 = createTypography('Subtitle2');
export const Subtitle3 = createTypography('Subtitle3');
export const Body1 = createTypography('Body1');
export const Body2 = createTypography('Body2');
export const Body3 = createTypography('Body3');
export const Caption1 = createTypography('Caption1');
export const Caption2 = createTypography('Caption2');
export const ButtonTitle1 = createTypography('ButtonTitle1');
export const ButtonTitle2 = createTypography('ButtonTitle2');
