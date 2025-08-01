import React from "react";
import styles from "./Grid.module.scss";
import { GridCol } from "./GridCol";
import type { SxProps } from "../../../styles/stylesApi";
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
export type MantineSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface GridBreakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
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
  gutter?: MantineSpacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: JustifyContent;
  /** Sets the `overflow` CSS property on the root element. Default: `'visible'` */
  overflow?: Overflow;
  /** Determines the type of queries used for responsive styles. Default: `'media'` */
  type?: "media" | "container";
}

// Create the Grid component with Col as a static property
export const Grid: React.FC<GridProps> & { Col: typeof GridCol } = ({
  children,
  align = "stretch",
  breakpoints,
  columns = 12,
  grow = false,
  gutter = "md",
  justify = "flex-start",
  overflow = "visible",
  type = "media",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const gridClasses = combineClassNames(
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`overflow-${overflow}`],
    styles[`gutter-${gutter}`],
    styles[`columns-${columns}`],
    grow && styles.grow,
    sxClassName
  );

  const gridStyle: React.CSSProperties = {
    "--grid-columns": columns,
    "--grid-gutter":
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
