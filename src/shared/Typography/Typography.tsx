import React, { ComponentPropsWithoutRef, ElementType } from 'react';

const colors = {
  BK: 'text-black',
  WH: 'text-white',
  GR: 'text-gray-600',
};

const weights = {
  regular: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export type TypographyVariant =
  | 'Head1'
  | 'Head2'
  | 'Head3'
  | 'Head4'
  | 'ButtonTitle1'
  | 'ButtonTitle2'
  | 'Subtitle1'
  | 'Subtitle2'
  | 'Subtitle3'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Caption1'
  | 'Caption2';

const variantClasses: Record<TypographyVariant, string> = {
  Head1: 'text-4xl font-bold',
  Head2: 'text-3xl font-bold',
  Head3: 'text-2xl font-bold',
  Head4: 'text-xl font-bold',
  ButtonTitle1: 'text-lg font-bold',
  ButtonTitle2: 'text-sm font-bold',
  Subtitle1: 'text-lg font-semibold',
  Subtitle2: 'text-base font-semibold',
  Subtitle3: 'text-sm font-semibold',
  Body1: 'text-lg font-medium',
  Body2: 'text-base font-medium',
  Body3: 'text-sm font-medium',
  Caption1: 'text-sm font-normal',
  Caption2: 'text-xs font-normal',
};

type Props = {
  regularWeight?: boolean;
  color?: keyof typeof colors;
} & ComponentPropsWithoutRef<'p'>;

const withBaseTypography = (element: ElementType, variant: TypographyVariant) => {
  function Typography({
    children,
    regularWeight = false,
    color = 'BK',
    className,
    ...props
  }: Props) {
    const colorClass = colors[color];
    const weightClass = regularWeight ? weights.regular : '';
    const combinedClasses = `${variantClasses[variant]} ${colorClass} ${weightClass} ${className || ''}`;

    return React.createElement(element, { className: combinedClasses, ...props }, children);
  }
  return Typography;
};
export const Head1 = withBaseTypography('h1', 'Head1');
export const Head2 = withBaseTypography('h2', 'Head2');
export const Head3 = withBaseTypography('h3', 'Head3');
export const Head4 = withBaseTypography('h4', 'Head4');
export const ButtonTitle1 = withBaseTypography('button', 'ButtonTitle1');
export const ButtonTitle2 = withBaseTypography('button', 'ButtonTitle2');
export const Subtitle1 = withBaseTypography('p', 'Subtitle1');
export const Subtitle2 = withBaseTypography('p', 'Subtitle2');
export const Subtitle3 = withBaseTypography('p', 'Subtitle3');
export const Body1 = withBaseTypography('p', 'Body1');
export const Body2 = withBaseTypography('p', 'Body2');
export const Body3 = withBaseTypography('p', 'Body3');
export const Caption1 = withBaseTypography('p', 'Caption1');
export const Caption2 = withBaseTypography('p', 'Caption2');
