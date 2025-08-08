import React from "react";
import { Button } from "../Button";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ModalFooterProps extends WithSxProps {
    /** Footer variant */
    variant?: "button-only" | "primary" | "destructive";
    /** Primary button text */
    primaryText?: string;
    /** Secondary button text */
    secondaryText?: string;
    /** Primary button click handler */
    onPrimaryClick?: () => void;
    /** Secondary button click handler */
    onSecondaryClick?: () => void;
    /** Whether the primary button is disabled */
    primaryDisabled?: boolean;
    /** Whether the secondary button is disabled */
    secondaryDisabled?: boolean;
    /** Whether the primary button is loading */
    primaryLoading?: boolean;
    /** Whether the secondary button is loading */
    secondaryLoading?: boolean;
    /** Custom primary button props */
    primaryButtonProps?: React.ComponentProps<typeof Button>;
    /** Custom secondary button props */
    secondaryButtonProps?: React.ComponentProps<typeof Button>;
    /** Footer content (for button-only variant) */
    children?: React.ReactNode;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
