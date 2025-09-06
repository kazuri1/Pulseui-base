import React from "react";
import styles from "./Skeleton.module.scss";
import {
  mergeSxWithStyles,
  combineClassNames,
  type WithSxProps,
} from "../../../utils/sxUtils";

export type SkeletonVariant = "text" | "rect" | "circle" | "avatar" | "button";
export type SkeletonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SkeletonProps extends WithSxProps {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  size?: SkeletonSize;
  radius?: number | string;
  animated?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rect",
  width,
  height,
  size = "md",
  radius,
  animated = true,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const inlineStyle: React.CSSProperties = {
    width,
    height,
    borderRadius: radius,
    ...sxStyle,
  };

  return (
    <span
      className={combineClassNames(
        styles.skeleton,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        animated && styles.animated,
        sxClassName
      )}
      style={inlineStyle}
      aria-busy={true}
      aria-live="polite"
      aria-label="Loading"
    />
  );
};

Skeleton.displayName = "Skeleton";

export default Skeleton;
