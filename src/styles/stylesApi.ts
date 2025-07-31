import React, { CSSProperties } from "react";

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

// Default theme
export const defaultTheme: Theme = {
  colors: {
    primary: "var(--color-primary-6)",
    secondary: "var(--color-gray-6)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
    surface: "var(--color-surface)",
    text: "var(--color-text-primary)",
    border: "var(--color-border-primary)",
    background: "var(--color-background)",
    white: "var(--color-white)",
    black: "var(--color-black)",
    "gray-0": "var(--color-gray-0)",
    "gray-1": "var(--color-gray-1)",
    "gray-2": "var(--color-gray-2)",
    "gray-3": "var(--color-gray-3)",
    "gray-4": "var(--color-gray-4)",
    "gray-5": "var(--color-gray-5)",
    "gray-6": "var(--color-gray-6)",
    "gray-7": "var(--color-gray-7)",
    "gray-8": "var(--color-gray-8)",
    "gray-9": "var(--color-gray-9)",
    "blue-0": "var(--color-blue-0)",
    "blue-1": "var(--color-blue-1)",
    "blue-2": "var(--color-blue-2)",
    "blue-3": "var(--color-blue-3)",
    "blue-4": "var(--color-blue-4)",
    "blue-5": "var(--color-blue-5)",
    "blue-6": "var(--color-blue-6)",
    "blue-7": "var(--color-blue-7)",
    "blue-8": "var(--color-blue-8)",
    "blue-9": "var(--color-blue-9)",
    "red-0": "var(--color-red-0)",
    "red-1": "var(--color-red-1)",
    "red-2": "var(--color-red-2)",
    "red-3": "var(--color-red-3)",
    "red-4": "var(--color-red-4)",
    "red-5": "var(--color-red-5)",
    "red-6": "var(--color-red-6)",
    "red-7": "var(--color-red-7)",
    "red-8": "var(--color-red-8)",
    "red-9": "var(--color-red-9)",
    "green-0": "var(--color-green-0)",
    "green-1": "var(--color-green-1)",
    "green-2": "var(--color-green-2)",
    "green-3": "var(--color-green-3)",
    "green-4": "var(--color-green-4)",
    "green-5": "var(--color-green-5)",
    "green-6": "var(--color-green-6)",
    "green-7": "var(--color-green-7)",
    "green-8": "var(--color-green-8)",
    "green-9": "var(--color-green-9)",
    "yellow-0": "var(--color-yellow-0)",
    "yellow-1": "var(--color-yellow-1)",
    "yellow-2": "var(--color-yellow-2)",
    "yellow-3": "var(--color-yellow-3)",
    "yellow-4": "var(--color-yellow-4)",
    "yellow-5": "var(--color-yellow-5)",
    "yellow-6": "var(--color-yellow-6)",
    "yellow-7": "var(--color-yellow-7)",
    "yellow-8": "var(--color-yellow-8)",
    "yellow-9": "var(--color-yellow-9)",
  },
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
    xxl: "var(--spacing-xxl)",
  },
  typography: {
    h1: {
      fontSize: "var(--font-size-xxl)",
      lineHeight: "var(--line-height-xxl)",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "var(--font-size-xl)",
      lineHeight: "var(--line-height-xl)",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "var(--font-size-lg)",
      lineHeight: "var(--line-height-lg)",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "var(--font-size-md)",
      lineHeight: "var(--line-height-md)",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "var(--font-size-sm)",
      lineHeight: "var(--line-height-sm)",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "var(--font-size-xs)",
      lineHeight: "var(--line-height-xs)",
      fontWeight: "bold",
    },
    "text-xs": {
      fontSize: "var(--font-size-xs)",
      lineHeight: "var(--line-height-xs)",
      fontWeight: "normal",
    },
    "text-sm": {
      fontSize: "var(--font-size-sm)",
      lineHeight: "var(--line-height-sm)",
      fontWeight: "normal",
    },
    "text-md": {
      fontSize: "var(--font-size-md)",
      lineHeight: "var(--line-height-md)",
      fontWeight: "normal",
    },
    "text-lg": {
      fontSize: "var(--font-size-lg)",
      lineHeight: "var(--line-height-lg)",
      fontWeight: "normal",
    },
    "text-xl": {
      fontSize: "var(--font-size-xl)",
      lineHeight: "var(--line-height-xl)",
      fontWeight: "normal",
    },
  },
  borderRadius: {
    xs: "var(--radius-xs)",
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    full: "var(--radius-full)",
  },
  shadows: {
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
  },
};

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

// Styled component factory
export const styled = <T extends keyof JSX.IntrinsicElements>(
  component: T,
  defaultSx?: SxProps
) => {
  return React.forwardRef<
    HTMLElementTagNameMap[T],
    JSX.IntrinsicElements[T] & { sx?: SxProps }
  >(({ sx, style, ...props }, ref) => {
    const processedSx = processSxProps({ ...defaultSx, ...sx });
    const mergedStyle = { ...processedSx, ...style };

    return React.createElement(component, {
      ...props,
      style: mergedStyle,
      ref,
    });
  });
};

// Box component (similar to MUI's Box)
export const Box = styled("div");

// Typography component
export const Typography = styled("div", { typography: "text-md" });

// Container component
export const Container = styled("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "md",
});

// Stack component
export const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
});

// Grid component
export const Grid = styled("div", {
  display: "grid",
});

// Paper component
export const Paper = styled("div", {
  backgroundColor: "surface",
  borderRadius: "md",
  boxShadow: "sm",
  padding: "md",
});

// Card component
export const Card = styled("div", {
  backgroundColor: "surface",
  borderRadius: "md",
  boxShadow: "sm",
  padding: "lg",
  border: "1px solid",
  borderColor: "border",
});

// Button component
export const Button = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "md",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  padding: "md",
  fontSize: "text-sm",
  fontWeight: "semibold",
});

// Input component
export const Input = styled("input", {
  width: "100%",
  padding: "md",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border",
  fontSize: "text-md",
  backgroundColor: "surface",
  color: "text",
  transition: "border-color 0.2s ease-in-out",
  "&:focus": {
    outline: "none",
    borderColor: "primary",
  },
});

// TextField component
export const TextField = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "xs",
});

// Label component
export const Label = styled("label", {
  fontSize: "text-sm",
  fontWeight: "semibold",
  color: "text",
});

// Helper text component
export const HelperText = styled("span", {
  fontSize: "text-xs",
  color: "secondary",
});

// Error text component
export const ErrorText = styled("span", {
  fontSize: "text-xs",
  color: "error",
});

// Divider component
export const Divider = styled("hr", {
  border: "none",
  borderTop: "1px solid",
  borderColor: "border",
  margin: "md 0",
});

// Avatar component
export const Avatar = styled("div", {
  width: "40px",
  height: "40px",
  borderRadius: "full",
  backgroundColor: "primary",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "text-sm",
  fontWeight: "semibold",
});

// Badge component
export const Badge = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: "xs sm",
  borderRadius: "full",
  fontSize: "text-xs",
  fontWeight: "semibold",
  backgroundColor: "primary",
  color: "white",
});

// Chip component
export const Chip = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  padding: "xs md",
  borderRadius: "full",
  fontSize: "text-sm",
  fontWeight: "medium",
  backgroundColor: "surface",
  color: "text",
  border: "1px solid",
  borderColor: "border",
});

// Alert component
export const Alert = styled("div", {
  padding: "md",
  borderRadius: "md",
  border: "1px solid",
  fontSize: "text-sm",
});

// Alert variants
export const AlertSuccess = styled(Alert, {
  backgroundColor: "success",
  borderColor: "success",
  color: "white",
});

export const AlertWarning = styled(Alert, {
  backgroundColor: "warning",
  borderColor: "warning",
  color: "white",
});

export const AlertError = styled(Alert, {
  backgroundColor: "error",
  borderColor: "error",
  color: "white",
});

export const AlertInfo = styled(Alert, {
  backgroundColor: "info",
  borderColor: "info",
  color: "white",
});

// Modal components
export const Modal = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const ModalContent = styled("div", {
  backgroundColor: "surface",
  borderRadius: "lg",
  padding: "xl",
  maxWidth: "500px",
  width: "100%",
  margin: "md",
  boxShadow: "xl",
});

// Tooltip component
export const Tooltip = styled("div", {
  position: "absolute",
  backgroundColor: "black",
  color: "white",
  padding: "xs md",
  borderRadius: "sm",
  fontSize: "text-xs",
  zIndex: 1000,
  pointerEvents: "none",
});

// Skeleton component
export const Skeleton = styled("div", {
  backgroundColor: "gray-3",
  borderRadius: "sm",
  animation: "pulse 1.5s ease-in-out infinite",
});

// Progress component
export const Progress = styled("div", {
  width: "100%",
  height: "4px",
  backgroundColor: "gray-3",
  borderRadius: "full",
  overflow: "hidden",
});

export const ProgressBar = styled("div", {
  height: "100%",
  backgroundColor: "primary",
  transition: "width 0.3s ease-in-out",
});

// Switch component
export const Switch = styled("button", {
  width: "44px",
  height: "24px",
  borderRadius: "full",
  backgroundColor: "gray-4",
  border: "none",
  cursor: "pointer",
  position: "relative",
  transition: "background-color 0.2s ease-in-out",
  '&[data-checked="true"]': {
    backgroundColor: "primary",
  },
});

export const SwitchThumb = styled("div", {
  width: "20px",
  height: "20px",
  borderRadius: "full",
  backgroundColor: "white",
  position: "absolute",
  top: "2px",
  left: "2px",
  transition: "transform 0.2s ease-in-out",
  '&[data-checked="true"]': {
    transform: "translateX(20px)",
  },
});

// Checkbox component
export const Checkbox = styled("input", {
  width: "16px",
  height: "16px",
  accentColor: "var(--color-primary-6)",
});

// Radio component
export const Radio = styled("input", {
  width: "16px",
  height: "16px",
  accentColor: "var(--color-primary-6)",
});

// Select component
export const Select = styled("select", {
  width: "100%",
  padding: "md",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border",
  fontSize: "text-md",
  backgroundColor: "surface",
  color: "text",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
    borderColor: "primary",
  },
});

// Textarea component
export const Textarea = styled("textarea", {
  width: "100%",
  padding: "md",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border",
  fontSize: "text-md",
  backgroundColor: "surface",
  color: "text",
  resize: "vertical",
  minHeight: "100px",
  fontFamily: "inherit",
  "&:focus": {
    outline: "none",
    borderColor: "primary",
  },
});

// Link component
export const Link = styled("a", {
  color: "primary",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

// Image component
export const Image = styled("img", {
  maxWidth: "100%",
  height: "auto",
});

// Icon component
export const Icon = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
});

// Spinner component
export const Spinner = styled("div", {
  width: "20px",
  height: "20px",
  border: "2px solid",
  borderColor: "gray-3",
  borderTopColor: "primary",
  borderRadius: "full",
  animation: "spin 1s linear infinite",
});

// Export all components
export {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  Paper,
  Card,
  Button,
  Input,
  TextField,
  Label,
  HelperText,
  ErrorText,
  Divider,
  Avatar,
  Badge,
  Chip,
  Alert,
  AlertSuccess,
  AlertWarning,
  AlertError,
  AlertInfo,
  Modal,
  ModalContent,
  Tooltip,
  Skeleton,
  Progress,
  ProgressBar,
  Switch,
  SwitchThumb,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Link,
  Image,
  Icon,
  Spinner,
};
