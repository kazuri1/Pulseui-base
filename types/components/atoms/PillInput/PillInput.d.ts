import * as React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface PillInputProps extends WithSxProps {
    /** Array of pills/tags */
    pills?: string[];
    /** Placeholder text for the input */
    placeholder?: string;
    /** Input variant style */
    variant?: "default" | "filled" | "unstyled";
    /** Input size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Pill size */
    pillSize?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Input state */
    state?: "enabled" | "focus" | "typing" | "filled" | "disabled" | "error";
    /** Disabled state */
    disabled?: boolean;
    /** Readonly state */
    readonly?: boolean;
    /** Required field */
    required?: boolean;
    /** Maximum number of pills allowed */
    maxPills?: number;
    /** Callback when pills change */
    onPillsChange?: (pills: string[]) => void;
    /** Callback when a pill is removed */
    onPillRemove?: (pill: string, index: number) => void;
    /** Callback when a pill is added */
    onPillAdd?: (pill: string) => void;
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
    /** Label for the input */
    label?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Helper text below the input */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Accessibility label (overrides label for screen readers) */
    ariaLabel?: string;
    /** Describes the input's purpose */
    ariaDescribedBy?: string;
    /** Controls the ID of the element this input controls */
    ariaControls?: string;
    /** Whether the input has a popup */
    ariaHasPopup?: boolean;
    /** Whether the input is expanded/collapsed */
    ariaExpanded?: boolean;
    /** Whether the input is pressed/active */
    ariaPressed?: boolean;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
}
export declare const PillInput: React.ForwardRefExoticComponent<PillInputProps & React.RefAttributes<HTMLInputElement>>;
