import { cva } from 'class-variance-authority';

import { TypographyVariant, Props } from './Typography.types';

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
      Caption1: 'text-base font-regular',
      Caption2: 'text-sm font-regular',
      ButtonTitle1: 'text-xl font-bold',
      ButtonTitle2: 'text-base font-bold',
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
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
  const combinedClasses = [baseClasses, className].filter(Boolean).join(' ');

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
