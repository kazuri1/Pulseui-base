import React, { useEffect, useRef } from "react";
import styles from "./Drawer.module.scss";
import { Icon } from "../Icon";
import { Close } from "../Icon/IconSet";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface DrawerProps extends WithSxProps {
  /** Drawer content */
  children?: React.ReactNode;
  /** Drawer title */
  title?: string;
  /** Whether to show the title */
  showTitle?: boolean;
  /** Whether to show the drawer */
  show?: boolean;
  /** Drawer direction */
  direction?: "right" | "left" | "bottom" | "top";
  /** Whether to show scroll */
  showScroll?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Whether the drawer is disabled */
  disabled?: boolean;
  /** Whether to close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
  /** Unique identifier */
  id?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  title,
  showTitle = true,
  show = false,
  direction = "right",
  showScroll = true,
  showClose = true,
  onClose,
  disabled = false,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  id,
  className = "",
  sx,
  style,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const drawerClasses = combineClassNames(
    styles.drawer,
    styles[`direction-${direction}`],
    showScroll && styles.scrollable,
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
    if (show && drawerRef.current) {
      drawerRef.current.focus();
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
    >
      <div
        ref={drawerRef}
        className={drawerClasses}
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
                aria-label="Close drawer"
                type="button"
              >
                <Icon icon={Close} size="sm" />
              </button>
            )}
          </div>
        ) : null}

        {/* Content */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
