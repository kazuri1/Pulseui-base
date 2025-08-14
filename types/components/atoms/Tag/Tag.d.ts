import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TagProps extends WithSxProps {
    /** The text content of the tag */
    children: React.ReactNode;
    /** Icon to display in the tag */
    icon?: SvgIconComponent;
    /** Size variant of the tag */
    size?: "sm" | "md" | "lg" | "xl";
    /** Color variant of the tag */
    variant?: "default" | "selected" | "mint" | "teal";
    /** Whether to show the close button */
    closable?: boolean;
    /** Close button click handler */
    onClose?: () => void;
}
export declare const Tag: React.FC<TagProps>;
