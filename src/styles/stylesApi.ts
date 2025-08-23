import * as React from "react";
import type { CSSProperties } from "react";
import { defaultTheme } from "./themes";

// Design token types
export type Spacing = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "surface"
  | "text"
  | "border"
  | "background"
  | "white"
  | "black"
  | "surface-0"
  | "surface-1"
  | "surface-2"
  | "surface-3"
  | "surface-4"
  | "surface-5"
  | "gray-0"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4"
  | "gray-5"
  | "gray-6"
  | "gray-7"
  | "gray-8"
  | "gray-9"
  | "blue-0"
  | "blue-1"
  | "blue-2"
  | "blue-3"
  | "blue-4"
  | "blue-5"
  | "blue-6"
  | "blue-7"
  | "blue-8"
  | "blue-9"
  | "red-0"
  | "red-1"
  | "red-2"
  | "red-3"
  | "red-4"
  | "red-5"
  | "red-6"
  | "red-7"
  | "red-8"
  | "red-9"
  | "green-0"
  | "green-1"
  | "green-2"
  | "green-3"
  | "green-4"
  | "green-5"
  | "green-6"
  | "green-7"
  | "green-8"
  | "green-9"
  | "yellow-0"
  | "yellow-1"
  | "yellow-2"
  | "yellow-3"
  | "yellow-4"
  | "yellow-5"
  | "yellow-6"
  | "yellow-7"
  | "yellow-8"
  | "yellow-9";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "text-xs"
  | "text-sm"
  | "text-md"
  | "text-lg"
  | "text-xl";

export type FontWeight = "normal" | "medium" | "semibold" | "bold";
export type BorderRadius = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type Shadow = "xs" | "sm" | "md" | "lg" | "xl";

// SX prop types
export interface SxProps {
  // Layout
  display?: CSSProperties["display"];
  position?: CSSProperties["position"];
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number;

  // Spacing
  m?: number | Spacing;
  mt?: number | Spacing;
  mr?: number | Spacing;
  mb?: number | Spacing;
  ml?: number | Spacing;
  mx?: number | Spacing;
  my?: number | Spacing;
  p?: number | Spacing;
  pt?: number | Spacing;
  pr?: number | Spacing;
  pb?: number | Spacing;
  pl?: number | Spacing;
  px?: number | Spacing;
  py?: number | Spacing;

  // Sizing
  width?: number | string | "auto" | "full" | "fit-content";
  height?: number | string | "auto" | "full" | "fit-content";
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;

  // Typography
  typography?: TypographyVariant;
  fontSize?: number | string | "xs" | "sm" | "md" | "lg" | "xl";
  fontWeight?: FontWeight;
  lineHeight?: number | string;
  textAlign?: CSSProperties["textAlign"];
  textDecoration?: CSSProperties["textDecoration"];
  textTransform?: CSSProperties["textTransform"];

  // Colors
  color?: Color;
  backgroundColor?: Color;
  borderColor?: Color;

  // Borders
  border?: number | string;
  borderTop?: number | string;
  borderRight?: number | string;
  borderBottom?: number | string;
  borderLeft?: number | string;
  borderRadius?: BorderRadius | number | string;
  borderStyle?: CSSProperties["borderStyle"];

  // Effects
  boxShadow?: Shadow | string;
  opacity?: number;

  // Flexbox
  flex?: number | string;
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  alignSelf?: CSSProperties["alignSelf"];
  justifyContent?: CSSProperties["justifyContent"];
  justifyItems?: CSSProperties["justifyItems"];
  justifySelf?: CSSProperties["justifySelf"];
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;

  // Grid
  gridArea?: CSSProperties["gridArea"];
  gridColumn?: CSSProperties["gridColumn"];
  gridRow?: CSSProperties["gridRow"];
  gridColumnStart?: CSSProperties["gridColumnStart"];
  gridColumnEnd?: CSSProperties["gridColumnEnd"];
  gridRowStart?: CSSProperties["gridRowStart"];
  gridRowEnd?: CSSProperties["gridRowEnd"];

  // Transforms
  transform?: CSSProperties["transform"];
  transformOrigin?: CSSProperties["transformOrigin"];

  // Transitions
  transition?: CSSProperties["transition"];
  transitionProperty?: CSSProperties["transitionProperty"];
  transitionDuration?: CSSProperties["transitionDuration"];
  transitionTimingFunction?: CSSProperties["transitionTimingFunction"];
  transitionDelay?: CSSProperties["transitionDelay"];

  // Cursor
  cursor?: CSSProperties["cursor"];

  // Overflow
  overflow?: CSSProperties["overflow"];
  overflowX?: CSSProperties["overflowX"];
  overflowY?: CSSProperties["overflowY"];

  // User select
  userSelect?: CSSProperties["userSelect"];

  // Custom properties
  [key: string]: any;
}

// Theme interface
export interface Theme {
  colors: Record<Color, string>;
  spacing: Record<Spacing, string>;
  typography: Record<
    TypographyVariant,
    {
      fontSize: string;
      lineHeight: string;
      fontWeight: FontWeight;
    }
  >;
  borderRadius: Record<BorderRadius, string>;
  shadows: Record<Shadow, string>;
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Utility functions
export const getSpacingValue = (
  value: number | Spacing,
  theme: Theme
): string => {
  if (typeof value === "number") {
    return `${value * 4}px`;
  }
  return theme.spacing[value];
};

export const getColorValue = (color: Color, theme: Theme): string => {
  return theme.colors[color];
};

export const getTypographyValue = (
  variant: TypographyVariant,
  theme: Theme
) => {
  return theme.typography[variant];
};

export const getBorderRadiusValue = (
  radius: BorderRadius,
  theme: Theme
): string => {
  return theme.borderRadius[radius];
};

export const getShadowValue = (shadow: Shadow, theme: Theme): string => {
  return theme.shadows[shadow];
};

// SX prop processor
export const processSxProps = (
  sx: SxProps,
  theme: Theme = defaultTheme
): CSSProperties => {
  const styles: CSSProperties = {};

  // Process spacing
  if (sx.m !== undefined) styles.margin = getSpacingValue(sx.m, theme);
  if (sx.mt !== undefined) styles.marginTop = getSpacingValue(sx.mt, theme);
  if (sx.mr !== undefined) styles.marginRight = getSpacingValue(sx.mr, theme);
  if (sx.mb !== undefined) styles.marginBottom = getSpacingValue(sx.mb, theme);
  if (sx.ml !== undefined) styles.marginLeft = getSpacingValue(sx.ml, theme);
  if (sx.mx !== undefined) {
    styles.marginLeft = getSpacingValue(sx.mx, theme);
    styles.marginRight = getSpacingValue(sx.mx, theme);
  }
  if (sx.my !== undefined) {
    styles.marginTop = getSpacingValue(sx.my, theme);
    styles.marginBottom = getSpacingValue(sx.my, theme);
  }

  if (sx.p !== undefined) styles.padding = getSpacingValue(sx.p, theme);
  if (sx.pt !== undefined) styles.paddingTop = getSpacingValue(sx.pt, theme);
  if (sx.pr !== undefined) styles.paddingRight = getSpacingValue(sx.pr, theme);
  if (sx.pb !== undefined) styles.paddingBottom = getSpacingValue(sx.pb, theme);
  if (sx.pl !== undefined) styles.paddingLeft = getSpacingValue(sx.pl, theme);
  if (sx.px !== undefined) {
    styles.paddingLeft = getSpacingValue(sx.px, theme);
    styles.paddingRight = getSpacingValue(sx.px, theme);
  }
  if (sx.py !== undefined) {
    styles.paddingTop = getSpacingValue(sx.py, theme);
    styles.paddingBottom = getSpacingValue(sx.py, theme);
  }

  // Process colors
  if (sx.color !== undefined) styles.color = getColorValue(sx.color, theme);
  if (sx.backgroundColor !== undefined)
    styles.backgroundColor = getColorValue(sx.backgroundColor, theme);
  if (sx.borderColor !== undefined)
    styles.borderColor = getColorValue(sx.borderColor, theme);

  // Process typography
  if (sx.typography !== undefined) {
    const typography = getTypographyValue(sx.typography, theme);
    styles.fontSize = typography.fontSize;
    styles.lineHeight = typography.lineHeight;
    styles.fontWeight = typography.fontWeight;
  }

  // Process other properties
  Object.keys(sx).forEach((key) => {
    if (
      ![
        "m",
        "mt",
        "mr",
        "mb",
        "ml",
        "mx",
        "my",
        "p",
        "pt",
        "pr",
        "pb",
        "pl",
        "px",
        "py",
        "color",
        "backgroundColor",
        "borderColor",
        "typography",
      ].includes(key)
    ) {
      (styles as any)[key] = (sx as any)[key];
    }
  });

  return styles;
};
