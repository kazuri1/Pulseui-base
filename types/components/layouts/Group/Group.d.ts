import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export type GroupAlign = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type GroupJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type Spacing = "xs" | "sm" | "md" | "lg" | "xl";
export interface GroupProps extends WithSxProps {
    /** Group content */
    children: React.ReactNode;
    /** Sets the `align-items` CSS property. Default: `center` */
    align?: GroupAlign;
    /** Controls the spacing between elements. Default: `md` */
    gap?: Spacing | string;
    /** Sets the `justify-content` CSS property. Default: `flex-start` */
    justify?: GroupJustify;
    /** Whether to wrap items to the next line. Default: `true` */
    wrap?: boolean;
}
export declare const Group: React.FC<GroupProps>;
