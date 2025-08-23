import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ButtonProps extends WithSxProps {
    /** Button text content */
    children: React.ReactNode;
    /** Left icon */
    leftIcon?: SvgIconComponent | string;
    /** Right icon */
    rightIcon?: SvgIconComponent | string;
    /** Button variant style */
    variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Button size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Button state */
    state?: "default" | "hover" | "disabled";
    /** Content justification */
    justify?: "center" | "space-between";
    /** Compact mode */
    compact?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Button type */
    type?: "button" | "submit" | "reset";
    /** Accessibility label (overrides children for screen readers) */
    ariaLabel?: string;
    /** Whether the button is pressed/active */
    ariaPressed?: boolean;
    /** Whether the button expands/collapses content */
    ariaExpanded?: boolean;
    /** Controls the ID of the element this button controls */
    ariaControls?: string;
    /** Describes the button's purpose */
    ariaDescribedBy?: string;
    /** Whether the button has a popup */
    ariaHasPopup?: boolean;
    /** Form ID this button is associated with */
    form?: string;
    /** Form action URL */
    formAction?: string;
    /** Form encoding type */
    formEncType?: string;
    /** Form method */
    formMethod?: "get" | "post";
    /** Form target */
    formTarget?: string;
    /** Form validation */
    formNoValidate?: boolean;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
}
export declare const Button: React.FC<ButtonProps>;
