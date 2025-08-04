import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ContainerProps extends WithSxProps {
    /** Container content */
    children: React.ReactNode;
    /** If set, the container takes 100% width of its parent and `size` prop is ignored */
    fluid?: boolean;
    /** `max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set */
    size?: number | "xs" | "sm" | "md" | "lg" | "xl";
    /** Centering strategy */
    strategy?: "block" | "grid";
}
export declare const Container: React.FC<ContainerProps>;
