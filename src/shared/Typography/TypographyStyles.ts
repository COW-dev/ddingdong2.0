import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const typographyStyles = {
  Title1: css`
    font-size: 32px;
    font-weight: bold;
  `,
  Title2: css`
    font-size: 28px;
    font-weight: bold;
  `,
  Title3: css`
    font-size: 24px;
    font-weight: bold;
  `,
  Subtitle1: css`
    font-size: 22px;
    font-weight: bold;
  `,
  Subtitle2: css`
    font-size: 20px;
    font-weight: semi-bold;
  `,
  Subtitle3: css`
    font-size: 18px;
    font-weight: semi-bold;
  `,
  Body1: css`
    font-size: 16px;
    font-weight: medium;
  `,
  Body2: css`
    font-size: 14px;
    font-weight: medium;
  `,
  Body3: css`
    font-size: 12px;
    font-weight: medium;
  `,
  Caption1: css`
    font-size: 10px;
    font-weight: regular;
  `,
  Caption2: css`
    font-size: 8px;
    font-weight: regular;
  `,
  ButtonTitle1: css`
    font-size: 18px;
    font-weight: bold;
  `,
  ButtonTitle2: css`
    font-size: 14px;
    font-weight: bold;
  `,
};

export type TypographyVariant = keyof typeof typographyStyles;

export const StyledTypography = styled.p<{ variant: TypographyVariant }>`
  ${({ variant }) => typographyStyles[variant]}
`;
