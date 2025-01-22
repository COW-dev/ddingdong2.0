import { ComponentPropsWithoutRef } from 'react';
import { cva } from 'class-variance-authority';

export type TypographyVariant =
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

export type Props = {
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  variant: TypographyVariant;
  className?: string;
} & ComponentPropsWithoutRef<'p'>;

export const variantClasses = cva('whitespace-pre-wrap', {
  variants: {
    type: {
      Title1: 'text-4xl font-bold',
      Title2: 'text-3xl font-bold',
      Title3: 'text-2xl font-bold',
      Title4: 'text-xl font-semibold',
      Subtitle1: 'text-xl font-semibold',
      Subtitle2: 'text-lg font-semibold',
      Subtitle3: 'text-base font-semibold',
      Body1: 'text-xl font-medium',
      Body2: 'text-lg font-medium',
      Body3: 'text-base font-medium',
      Caption1: 'text-base font-normal',
      Caption2: 'text-sm font-normal',
      ButtonTitle1: 'text-xl font-bold',
      ButtonTitle2: 'text-base font-bold',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    type: 'Body1',
    weight: 'medium',
  },
});

export function Typography({
  children,
  weight = 'medium',
  variant = 'Body1',
  className = '',
  ...props
}: Props) {
  const baseClasses = variantClasses({ type: variant, weight });
  const combinedClasses = `${baseClasses}${className ? ` ${className}` : ''}`;

  return (
    <p className={combinedClasses} {...props}>
      {children}
    </p>
  );
}

Typography.displayName = 'Typography';

function createTypography(variant: TypographyVariant) {
  function Component(props: Omit<Props, 'variant'>) {
    return <Typography variant={variant} {...props} />;
  }
  Component.displayName = `${variant}`;
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
