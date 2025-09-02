import React from "react";
import styles from "./Grid.module.scss";
import { GridCol } from "./GridCol";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type Overflow = "visible" | "hidden" | "scroll" | "auto";
export type Spacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface GridBreakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export interface GridProps extends WithSxProps {
  /** Grid content */
  children: React.ReactNode;
  /** Sets the `align-items` CSS property. Default: `stretch` */
  align?: AlignItems;
  /** Specifies breakpoint values, only used when `type` is `"container"` */
  breakpoints?: GridBreakpoints;
  /** Number of columns in each row. Default: `12` */
  columns?: number;
  /** If set to `true`, columns in the last row will expand to fill all available space. Default: `false` */
  grow?: boolean;
  /** Controls the spacing (gutter) between columns. Can be a key from `theme.spacing` or any valid CSS value. Default: `'md'` */
  gutter?: Spacing | string;
  /** Horizontal gutter (between columns). Overrides `gutter` if specified */
  gutterX?: Spacing | string;
  /** Vertical gutter (between rows). Overrides `gutter` if specified */
  gutterY?: Spacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: JustifyContent;
  /** Sets the `overflow` CSS property on the root element. Default: `'visible'` */
  overflow?: Overflow;
  /** Determines the type of queries used for responsive styles. Default: `'media'` */
  type?: "media" | "container";
  /** Auto-fit columns with minimum width. Uses CSS Grid `auto-fit` */
  autoFit?: boolean;
  /** Minimum column width for auto-fit. Required when `autoFit` is true */
  minColumnWidth?: string;
  /** Negative gutters for edge-to-edge layouts */
  negativeGutter?: boolean;
}

// Create the Grid component with Col as a static property
export const Grid: React.FC<GridProps> & { Col: typeof GridCol } = ({
  children,
  align = "stretch",
  columns = 12,
  grow = false,
  gutter = "md",
  gutterX,
  gutterY,
  justify = "flex-start",
  overflow = "visible",
  autoFit = false,
  minColumnWidth,
  negativeGutter = false,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  // Determine grid template columns
  const getGridTemplateColumns = () => {
    if (autoFit && minColumnWidth) {
      return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
    }
    return `repeat(${columns}, 1fr)`;
  };

  // Determine gutters
  const getGutterClasses = () => {
    const classes = [];

    if (gutterX && gutterY) {
      // Separate horizontal and vertical gutters
      classes.push(styles[`gutter-x-${gutterX}`]);
      classes.push(styles[`gutter-y-${gutterY}`]);
    } else if (gutter) {
      // Single gutter for both directions
      classes.push(styles[`gutter-${gutter}`]);
    }

    if (negativeGutter) {
      classes.push(styles.negativeGutter);
    }

    return classes;
  };

  const gridClasses = combineClassNames(
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`overflow-${overflow}`],
    ...getGutterClasses(),
    !autoFit && styles[`columns-${columns}`],
    grow && styles.grow,
    autoFit && styles.autoFit,
    sxClassName
  );

  const gridStyle: React.CSSProperties = {
    "--grid-columns": autoFit ? undefined : columns,
    "--grid-template-columns": getGridTemplateColumns(),
    "--grid-gutter-x":
      gutterX &&
      typeof gutterX === "string" &&
      !["xs", "sm", "md", "lg", "xl"].includes(gutterX)
        ? gutterX
        : undefined,
    "--grid-gutter-y":
      gutterY &&
      typeof gutterY === "string" &&
      !["xs", "sm", "md", "lg", "xl"].includes(gutterY)
        ? gutterY
        : undefined,
    "--grid-gutter":
      !gutterX &&
      !gutterY &&
      typeof gutter === "string" &&
      !["xs", "sm", "md", "lg", "xl"].includes(gutter)
        ? gutter
        : undefined,
    ...sxStyle,
  } as React.CSSProperties;

  return (
    <div className={gridClasses} style={gridStyle}>
      {children}
    </div>
  );
};

// Attach GridCol as a static property
Grid.Col = GridCol;
