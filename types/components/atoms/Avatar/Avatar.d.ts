import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface AvatarProps extends WithSxProps {
    /** Avatar type */
    type?: "initial" | "icon" | "image";
    /** Avatar size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Initials for initial type */
    initials?: string;
    /** Icon for icon type */
    icon?: React.ComponentType<any>;
    /** Image source for image type */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Background color variant */
    variant?: "primary" | "secondary" | "success" | "warning" | "error" | "muted";
    /** Click handler */
    onClick?: () => void;
    /** Whether the avatar is interactive */
    interactive?: boolean;
}
export declare const Avatar: React.FC<AvatarProps>;
