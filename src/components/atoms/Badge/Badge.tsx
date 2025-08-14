import React from "react";
import styles from "./Badge.module.scss";
import { Icon } from "../Icon";
import {
  Add,
  Remove,
  Edit,
  Delete,
  Search,
  FilterList,
  Refresh,
  Settings,
  Close,
  Check,
  Warning,
  Info,
  Share,
  Download,
  Upload,
} from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface BadgeProps extends WithSxProps {
  /** Badge text content */
  children: React.ReactNode;
  /** Left icon */
  leftIcon?: SvgIconComponent | string;
  /** Right icon */
  rightIcon?: SvgIconComponent | string;
  /** Badge variant style */
  variant?:
    | "filled"
    | "subtle"
    | "light"
    | "outline"
    | "white"
    | "default"
    | "dot";
  /** Badge size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Badge state */
  state?: "default" | "hover" | "disabled";
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant = "dot",
  size = "md",
  state = "default",
  disabled = false,
  onClick,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const badgeClasses = combineClassNames(
    styles.badge,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`state-${state}`],
    disabled && styles.disabled,
    onClick && styles.clickable,
    sxClassName
  );

  // Map string values to icon components
  const getLeftIcon = () => {
    if (typeof leftIcon === "string") {
      if (leftIcon === "none") {
        return null;
      }
      const iconMap: Record<string, SvgIconComponent> = {
        add: Add,
        remove: Remove,
        edit: Edit,
        delete: Delete,
        search: Search,
        filter: FilterList,
        refresh: Refresh,
        settings: Settings,
        close: Close,
        check: Check,
        warning: Warning,
        info: Info,

        share: Share,
        download: Download,
        upload: Upload,
      };
      return iconMap[leftIcon] || null;
    }
    return leftIcon;
  };

  const getRightIcon = () => {
    if (typeof rightIcon === "string") {
      if (rightIcon === "none") {
        return null;
      }
      const iconMap: Record<string, SvgIconComponent> = {
        add: Add,
        remove: Remove,
        edit: Edit,
        delete: Delete,
        search: Search,
        filter: FilterList,
        refresh: Refresh,
        settings: Settings,
        close: Close,
        check: Check,
        warning: Warning,
        info: Info,

        share: Share,
        download: Download,
        upload: Upload,
      };
      return iconMap[rightIcon] || null;
    }
    return rightIcon;
  };

  const leftIconComponent = getLeftIcon();
  const rightIconComponent = getRightIcon();

  // Map badge size to icon size
  const getIconSize = (badgeSize: string) => {
    switch (badgeSize) {
      case "xs":
        return "xs";
      case "sm":
        return "sm";
      case "md":
        return "sm";
      case "lg":
        return "md";
      case "xl":
        return "lg";
      default:
        return "sm";
    }
  };

  const iconSize = getIconSize(size);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const Element = onClick ? "button" : "div";

  return (
    <Element
      className={badgeClasses}
      onClick={handleClick}
      disabled={disabled || state === "disabled"}
      style={sxStyle}
      type={onClick ? "button" : undefined}
    >
      {variant === "dot" && <span className={styles.dot} />}
      {leftIconComponent && (
        <Icon
          icon={leftIconComponent}
          size={iconSize}
          color="inherit"
          className={styles.left}
        />
      )}
      <span className={styles.content}>{children}</span>
      {rightIconComponent && (
        <Icon
          icon={rightIconComponent}
          size={iconSize}
          color="inherit"
          className={styles.right}
        />
      )}
    </Element>
  );
};

Badge.displayName = "Badge";
