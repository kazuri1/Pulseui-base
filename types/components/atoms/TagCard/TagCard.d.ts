import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TagItem {
    /** Unique identifier for the tag */
    id: string | number;
    /** Text content of the tag */
    text: string;
    /** Icon to display in the tag */
    icon?: SvgIconComponent;
    /** Size variant of the tag */
    size?: "sm" | "md" | "lg" | "xl";
    /** Color variant of the tag */
    variant?: "default" | "selected" | "mint" | "teal";
    /** Whether to show the close button */
    closable?: boolean;
}
export interface TagCardProps extends WithSxProps {
    /** Title of the card */
    title?: string;
    /** Array of tag items to display */
    tags: TagItem[];
    /** Number of columns in the grid (default: 4) */
    columns?: number;
    /** Whether to show close buttons on tags */
    closable?: boolean;
    /** Handler for when a tag is closed */
    onTagClose?: (tagId: string | number) => void;
}
export declare const TagCard: React.FC<TagCardProps>;
