import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";
export interface ImageProps extends WithSxProps {
    /** Image url */
    src: string;
    /** Image url used as a fallback if the image cannot be loaded */
    fallbackSrc?: string;
    /** Controls `object-fit` style */
    fit?: ObjectFit;
    /** Called when image fails to load */
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius` */
    radius?: number | string;
    /** Alt text for accessibility */
    alt?: string;
    /** Width of the image */
    width?: number | string;
    /** Height of the image */
    height?: number | string;
    /** Whether the image should be lazy loaded */
    loading?: "lazy" | "eager";
}
export declare const Image: React.FC<ImageProps>;
