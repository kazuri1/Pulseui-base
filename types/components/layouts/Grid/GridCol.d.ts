import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface GridColProps extends WithSxProps {
    /** Column content */
    children: React.ReactNode;
    /** Number of columns to span (1-12). Can be a number or responsive object */
    span?: number | {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
}
export declare const GridCol: React.FC<GridColProps>;
