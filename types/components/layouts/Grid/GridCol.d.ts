import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface GridColProps extends WithSxProps {
    /** Column content */
    children: React.ReactNode;
    /** Number of columns to span (1-12). Can be a number or responsive object */
    span?: number | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
    };
    /** Number of columns to offset (0-11). Can be a number or responsive object */
    offset?: number | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
    };
    /** Column order. Can be a number or responsive object */
    order?: number | {
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
export declare const GridCol: React.FC<GridColProps>;
