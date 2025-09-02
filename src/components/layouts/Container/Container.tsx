import React from "react";
import styles from "./Container.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface ContainerProps extends WithSxProps {
  /** Container content */
  children: React.ReactNode;
  /** If set, the container takes 100% width of its parent and `size` prop is ignored */
  fluid?: boolean;
  /** `max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set */
  size?: number | "xs" | "sm" | "md" | "lg" | "xl";
  /** Centering strategy */
  strategy?: "block" | "grid";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  size = "md",
  strategy = "block",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const containerClasses = combineClassNames(
    styles.root,
    styles[`strategy-${strategy}`],
    fluid ? styles.fluid : styles[`size-${size}`],
    sxClassName
  );

  return (
    <div className={containerClasses} style={sxStyle}>
      {children}
    </div>
  );
};
