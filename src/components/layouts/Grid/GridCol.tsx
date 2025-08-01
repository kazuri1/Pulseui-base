import React from "react";
import styles from "./GridCol.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface GridColProps extends WithSxProps {
  /** Column content */
  children: React.ReactNode;
  /** Number of columns to span (1-12). Can be a number or responsive object */
  span?:
    | number
    | {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
}

export const GridCol: React.FC<GridColProps> = ({
  children,
  span = 12,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const getSpanClasses = () => {
    if (typeof span === "number") {
      return [styles[`span-${span}`]];
    }

    // Handle responsive span object
    const classes = [];
    if (span.base) classes.push(styles[`span-${span.base}`]);
    if (span.xs) classes.push(styles[`span-xs-${span.xs}`]);
    if (span.sm) classes.push(styles[`span-sm-${span.sm}`]);
    if (span.md) classes.push(styles[`span-md-${span.md}`]);
    if (span.lg) classes.push(styles[`span-lg-${span.lg}`]);
    if (span.xl) classes.push(styles[`span-xl-${span.xl}`]);

    return classes;
  };

  const colClasses = combineClassNames(
    styles.root,
    ...getSpanClasses(),
    sxClassName
  );

  return (
    <div className={colClasses} style={sxStyle}>
      {children}
    </div>
  );
};
