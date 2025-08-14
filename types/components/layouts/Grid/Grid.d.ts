import React from "react";
import { GridCol } from "./GridCol";
import type { WithSxProps } from "../../../utils/sxUtils";
export type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
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
export declare const Grid: React.FC<GridProps> & {
    Col: typeof GridCol;
};
