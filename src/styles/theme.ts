import { DefaultTheme } from "styled-components";

const calcRem = (size: number) => `${size / 16}rem`;

export const theme: DefaultTheme = {
  color: {
    primary: "#222222",
    accent: "#ffffff",
  },
  fontSize: {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(767),
};
