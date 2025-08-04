import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export type StackAlign = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type StackJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type MantineSpacing = "xs" | "sm" | "md" | "lg" | "xl";
export interface StackProps extends WithSxProps {
    /** Stack content */
    children: React.ReactNode;
    /** Sets the `align-items` CSS property. Default: `stretch` */
    align?: StackAlign;
    /** Controls the spacing between elements. Default: `md` */
    gap?: MantineSpacing | string;
    /** Sets the `justify-content` CSS property. Default: `flex-start` */
    justify?: StackJustify;
}
export declare const Stack: React.FC<StackProps>;
