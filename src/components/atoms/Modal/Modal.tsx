import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import { ModalFooter } from "./ModalFooter";
import { Icon } from "../Icon";
import { Close } from "../Icon/IconSet";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface ModalProps extends WithSxProps {
  /** Modal content */
  children?: React.ReactNode;
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
  footerContent?: React.ReactNode;
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

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  showTitle = true,
  description,
  showDescription = true,
  showClose = true,
  show = false,
  size = "md",
  showFooter = false,
  footerVariant = "primary",
  primaryText = "OK",
  secondaryText = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  secondaryDisabled = false,
  footerContent,
  onClose,
  disabled = false,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  id,
  className = "",
  sx,
  style,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const modalClasses = combineClassNames(
    styles.modal,
    styles[`size-${size}`],
    disabled && styles.disabled,
    sxClassName
  );

  const backdropClasses = combineClassNames(
    styles.backdrop,
    show && styles.visible
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (!disabled && onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (closeOnEscape && e.key === "Escape" && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={backdropClasses}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-describedby={description ? `${id}-description` : undefined}
    >
      <div
        ref={modalRef}
        className={modalClasses}
        style={sxStyle}
        id={id}
        tabIndex={-1}
      >
        {/* Header */}
        {(showTitle && title) || showClose ? (
          <div className={styles.header}>
            {showTitle && title && (
              <h2 className={styles.title} id={`${id}-title`}>
                {title}
              </h2>
            )}
            {showClose && (
              <button
                className={styles.closeButton}
                onClick={handleClose}
                disabled={disabled}
                aria-label="Close modal"
                type="button"
              >
                <Icon icon={Close} size="sm" />
              </button>
            )}
          </div>
        ) : null}

        {/* Description */}
        {showDescription && description && (
          <div className={styles.description} id={`${id}-description`}>
            {description}
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>{children}</div>

        {/* Footer */}
        {showFooter && (
          <ModalFooter
            variant={footerVariant}
            primaryText={primaryText}
            secondaryText={secondaryText}
            onPrimaryClick={onPrimaryClick}
            onSecondaryClick={onSecondaryClick}
            primaryDisabled={primaryDisabled}
            secondaryDisabled={secondaryDisabled}
          >
            {footerContent}
          </ModalFooter>
        )}
      </div>
    </div>
  );
};
