import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Snackbar.module.scss";
import { Icon } from "../Icon/Icon";
import {
  Close,
  CheckCircle,
  ErrorOutline,
  InfoOutlined,
  Warning,
} from "../Icon/IconSet";
import {
  mergeSxWithStyles,
  combineClassNames,
  type WithSxProps,
} from "../../../utils/sxUtils";

export type SnackbarVariant =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral";
export type SnackbarPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export interface SnackbarProps extends WithSxProps {
  open: boolean;
  message: React.ReactNode;
  variant?: SnackbarVariant;
  position?: SnackbarPosition;
  autoHideMs?: number;
  onClose?: () => void;
  withIcon?: boolean;
  action?: React.ReactNode;
  container?: HTMLElement | null;
}

const variantIcon = {
  primary: InfoOutlined,
  success: CheckCircle,
  info: InfoOutlined,
  warning: Warning,
  error: ErrorOutline,
  neutral: InfoOutlined,
} as const;

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  variant = "primary",
  position = "bottom-center",
  autoHideMs = 3000,
  onClose,
  withIcon = true,
  action,
  className = "",
  sx,
  style,
  container,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  useEffect(() => {
    if (!open || !autoHideMs) return;
    const id = setTimeout(() => onClose?.(), autoHideMs);
    return () => clearTimeout(id);
  }, [open, autoHideMs, onClose]);

  if (!open) return null;

  const IconComp = variantIcon[variant];

  const content = (
    <div className={combineClassNames(styles.host, styles[position])}>
      <div
        className={combineClassNames(
          styles.snackbar,
          styles[`variant-${variant}`],
          sxClassName
        )}
        style={sxStyle}
        role="status"
        aria-live="polite"
      >
        <div className={styles.contentRow}>
          {withIcon && (
            <Icon
              icon={IconComp}
              size="md"
              className={styles.icon}
              aria-hidden="true"
            />
          )}
          <div className={styles.message}>{message}</div>
          {action && <div className={styles.action}>{action}</div>}
          <button
            className={styles.close}
            style={{ marginLeft: "auto", marginRight: 0 }}
            onClick={onClose}
            aria-label="Close"
          >
            <Icon icon={Close} size="md" />
          </button>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progress}
            style={{ animationDuration: `${autoHideMs}ms` }}
            onAnimationEnd={() => onClose?.()}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(content, container ?? document.body);
};

Snackbar.displayName = "Snackbar";

export default Snackbar;
