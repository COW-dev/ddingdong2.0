import { ComponentPropsWithoutRef } from 'react';
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

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

type Props<E extends React.ElementType> = PolymorphicProps<E> & {
  variant: TypographyVariant;
  as?: React.ElementType;
  className?: string;
} & ComponentPropsWithoutRef<E>;

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

function Typography({ children, variant = 'Body1', className = '', as, ...props }: Props) {
  const Component = as || 'p';
  return (
    <Component className={cn(variantClasses({ type: variant }), className)} {...props}>
      {children}
    </Component>
  );
}

function createTypography<E extends React.ElementType>(variant: TypographyVariant) {
  function Component(props: Omit<Props<E>, 'variant'>) {
    return <Typography variant={variant} {...props} />;
  }
  return Component;
}

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
