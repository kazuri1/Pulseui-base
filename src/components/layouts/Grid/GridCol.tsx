import React from "react";
import styles from "./GridCol.module.scss";

export interface GridColProps {
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
  /** Additional CSS classes */
  className?: string;
}

export const GridCol: React.FC<GridColProps> = ({
  children,
  span = 12,
  className = "",
}) => {
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

  const colClasses = [styles.root, ...getSpanClasses(), className].filter(
    Boolean
  );

  return <div className={colClasses.join(" ")}>{children}</div>;
};
