import React from "react";
import styles from "./Alert.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { Icon } from "../Icon";
import {
  InfoOutlined,
  CheckCircle,
  Warning,
  ErrorOutline,
  Close,
} from "../Icon/IconSet";

export interface AlertProps extends WithSxProps {
  /** The content to display in the alert */
  children: React.ReactNode;
  /** The title of the alert */
  title?: string;
  /** Visual variant of the alert */
  variant?: "info" | "success" | "warning" | "error";
  /** Style variant of the alert */
  styleVariant?:
    | "default"
    | "filled"
    | "light"
    | "outline"
    | "transparent"
    | "white";
  /** Size of the alert */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether to show the close button */
  closeable?: boolean;
  /** Whether the alert is visible */
  visible?: boolean;
  /** Callback when the close button is clicked */
  onClose?: () => void;
  /** Whether the alert is disabled */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  title,
  variant = "info",
  styleVariant = "default",
  size = "md",
  closeable = false,
  visible = true,
  onClose,
  disabled = false,
  id,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const alertClasses = combineClassNames(
    styles.alert,
    styles[`variant-${variant}`],
    styles[`style-${styleVariant}`],
    styles[`size-${size}`],
    disabled && styles.disabled,
    !visible && styles.hidden,
    sxClassName
  );

  const handleClose = () => {
    if (!disabled && onClose) {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div className={alertClasses} style={sxStyle} id={id} role="alert">
      <div className={styles.content}>
        <div className={styles.icon}>
          {variant === "info" && <Icon icon={InfoOutlined} />}
          {variant === "success" && <Icon icon={CheckCircle} />}
          {variant === "warning" && <Icon icon={Warning} />}
          {variant === "error" && <Icon icon={ErrorOutline} />}
        </div>

        <div className={styles.text}>
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.message}>{children}</div>
        </div>
      </div>

      {closeable && (
        <button
          className={styles.closeButton}
          onClick={handleClose}
          disabled={disabled}
          aria-label="Close alert"
          type="button"
        >
          <Icon icon={Close} />
        </button>
      )}
    </div>
  );
};

Alert.displayName = "Alert";

export default Alert;
