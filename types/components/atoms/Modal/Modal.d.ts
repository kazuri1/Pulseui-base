import type { ReactNode } from "react";
import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../../utils/sxUtils";

export interface ModalProps extends WithSxProps {
  /** Modal content */
  children?: ReactNode;
  /** Modal title */
  title?: string;
  /** Whether to show the title */
  showTitle?: boolean;
  /** Modal description */
  description?: string;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Whether to show the modal */
  show?: boolean;
  /** Modal size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether to show the footer */
  showFooter?: boolean;
  /** Footer variant */
  footerVariant?: "button-only" | "primary" | "destructive";
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
  /** Custom footer content */
  footerContent?: ReactNode;
  /** Close handler */
  onClose?: () => void;
  /** Whether the modal is disabled */
  disabled?: boolean;
  /** Whether to close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
  /** Unique identifier */
  id?: string;
}

export declare const Modal: React.FC<ModalProps>;
