import React from "react";
import styles from "./Loader.module.scss";
import {
  mergeSxWithStyles,
  combineClassNames,
  type WithSxProps,
} from "../../../utils/sxUtils";

export type LoaderSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LoaderProps extends WithSxProps {
  size?: LoaderSize;
  variant?: "primary" | "secondary" | "neutral";
  label?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  variant = "primary",
  label,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  return (
    <div
      className={combineClassNames(styles.wrapper, sxClassName)}
      style={sxStyle}
      role="status"
      aria-live="polite"
    >
      <span
        className={combineClassNames(
          styles.loader,
          styles[`size-${size}`],
          styles[`variant-${variant}`]
        )}
      />
      {label && (
        <span className={styles.label} aria-hidden="true">
          {label}
        </span>
      )}
    </div>
  );
};

Loader.displayName = "Loader";

export default Loader;
