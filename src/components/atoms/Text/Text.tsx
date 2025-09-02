import React from "react";
import styles from "./Text.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface TextProps extends WithSxProps {
  /** Text content */
  children: React.ReactNode;
  /** Text variant/size */
  variant?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  /** Text color variant */
  color?: "primary" | "secondary" | "muted" | "success" | "warning" | "error";
  /** Text weight */
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Whether text should be truncated */
  truncate?: boolean;
  /** Number of lines to show before truncating */
  lines?: number;
  /** HTML element to render */
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "md",
  color = "primary",
  weight = "normal",
  truncate = false,
  lines,
  as: Component = "p",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const textClasses = combineClassNames(
    styles.text,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    styles[`weight-${weight}`],
    truncate && styles.truncate,
    lines !== undefined && styles[`lines-${lines}`],
    sxClassName
  );

  return (
    <Component className={textClasses} style={sxStyle}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";
