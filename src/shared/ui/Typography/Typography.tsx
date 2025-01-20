'use client';
import { ComponentPropsWithoutRef, ElementType } from 'react';

import { colors, Colors } from '@/shared/ui/colors/colors';

import { StyledTypography, TypographyVariant } from './TypographyStyles';

type TypographyProps = {
  color?: Colors;
  style?: React.CSSProperties;
} & ComponentPropsWithoutRef<'p'>;

const createTypographyComponent = (element: ElementType, variant: TypographyVariant) => {
  function Typography({ children, color = 'black', style, ...props }: TypographyProps) {
    const selectedColor =
      typeof colors[color] === 'string'
        ? colors[color]
        : (colors[color] as { [key: number]: string })[500] || colors.black;

    const _style = { ...style, color: selectedColor };

    return (
      <StyledTypography as={element} variant={variant} style={_style} {...props}>
        {children}
      </StyledTypography>
    );
  }

  return Typography;
};

export const Title1 = createTypographyComponent('h1', 'Title1');
export const Title2 = createTypographyComponent('h2', 'Title2');
export const Title3 = createTypographyComponent('h3', 'Title3');
export const Subtitle1 = createTypographyComponent('h4', 'Subtitle1');
export const Subtitle2 = createTypographyComponent('h5', 'Subtitle2');
export const Subtitle3 = createTypographyComponent('h6', 'Subtitle3');
export const Body1 = createTypographyComponent('p', 'Body1');
export const Body2 = createTypographyComponent('p', 'Body2');
export const Body3 = createTypographyComponent('p', 'Body3');
export const Caption1 = createTypographyComponent('span', 'Caption1');
export const Caption2 = createTypographyComponent('span', 'Caption2');
export const ButtonTitle1 = createTypographyComponent('button', 'ButtonTitle1');
export const ButtonTitle2 = createTypographyComponent('button', 'ButtonTitle2');
