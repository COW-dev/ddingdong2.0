import { ComponentPropsWithoutRef } from 'react';

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
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  variant: TypographyVariant;
  className?: string;
} & ComponentPropsWithoutRef<'p'>;
