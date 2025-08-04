import type { CSSProperties } from "react";
import type { SxProps } from "../styles/stylesApi";
export interface WithSxProps {
    sx?: SxProps;
    className?: string;
    style?: CSSProperties;
}
export declare const mergeSxWithStyles: (sx?: SxProps, existingStyle?: CSSProperties, className?: string) => {
    style: CSSProperties;
    className: string;
};
export declare const combineClassNames: (...classNames: (string | undefined | null | false)[]) => string;
