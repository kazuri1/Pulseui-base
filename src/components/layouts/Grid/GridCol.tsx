import React from "react";
import styles from "./GridCol.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
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
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
      };
  /** Number of columns to offset (0-11). Can be a number or responsive object */
  offset?:
    | number
    | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
      };
  /** Column order. Can be a number or responsive object */
  order?:
    | number
    | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
      };
  /** Grid area name for complex layouts */
  gridArea?: string;
}

export const GridCol: React.FC<GridColProps> = ({
  children,
  span = 12,
  offset,
  order,
  gridArea,
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
    if (span.sm) classes.push(styles[`span-sm-${span.sm}`]);
    if (span.md) classes.push(styles[`span-md-${span.md}`]);
    if (span.lg) classes.push(styles[`span-lg-${span.lg}`]);
    if (span.xl) classes.push(styles[`span-xl-${span.xl}`]);
    if (span.xxl) classes.push(styles[`span-xxl-${span.xxl}`]);

    return classes;
  };

  const getOffsetClasses = () => {
    if (!offset) return [];

    if (typeof offset === "number") {
      return [styles[`offset-${offset}`]];
    }

    // Handle responsive offset object
    const classes = [];
    if (offset.base) classes.push(styles[`offset-${offset.base}`]);
    if (offset.sm) classes.push(styles[`offset-sm-${offset.sm}`]);
    if (offset.md) classes.push(styles[`offset-md-${offset.md}`]);
    if (offset.lg) classes.push(styles[`offset-lg-${offset.lg}`]);
    if (offset.xl) classes.push(styles[`offset-xl-${offset.xl}`]);
    if (offset.xxl) classes.push(styles[`offset-xxl-${offset.xxl}`]);

    return classes;
  };

  const getOrderClasses = () => {
    if (!order) return [];

    if (typeof order === "number") {
      return [styles[`order-${order}`]];
    }

    // Handle responsive order object
    const classes = [];
    if (order.base) classes.push(styles[`order-${order.base}`]);
    if (order.sm) classes.push(styles[`order-sm-${order.sm}`]);
    if (order.md) classes.push(styles[`order-md-${order.md}`]);
    if (order.lg) classes.push(styles[`order-lg-${order.lg}`]);
    if (order.xl) classes.push(styles[`order-xl-${order.xl}`]);
    if (order.xxl) classes.push(styles[`order-xxl-${order.xxl}`]);

    return classes;
  };

  const colClasses = combineClassNames(
    styles.root,
    ...getSpanClasses(),
    ...getOffsetClasses(),
    ...getOrderClasses(),
    sxClassName
  );

  const colStyle: React.CSSProperties = {
    gridArea: gridArea || undefined,
    ...sxStyle,
  } as React.CSSProperties;

  return (
    <div className={colClasses} style={colStyle}>
      {children}
    </div>
  );
};
