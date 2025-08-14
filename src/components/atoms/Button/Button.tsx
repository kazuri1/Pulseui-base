import React from "react";
import styles from "./Button.module.scss";
import { Icon } from "../Icon";
import {
  Download,
  Upload,
  Add,
  Remove,
  Edit,
  Delete,
  Search,
  FilterList,
  Refresh,
  Settings,
} from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

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
}

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  size = "md",
  state = "default",
  justify = "center",
  compact = false,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const buttonClasses = combineClassNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`state-${state}`],
    styles[`justify-${justify}`],
    compact && styles.compact,
    sxClassName
  );

  // Map string values to icon components
  const getLeftIcon = () => {
    if (typeof leftIcon === "string") {
      if (leftIcon === "none") {
        return null;
      }
      const iconMap: Record<string, SvgIconComponent> = {
        download: Download,
        upload: Upload,
        add: Add,
        remove: Remove,
        edit: Edit,
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
        delete: Delete,
        search: Search,
        filter: FilterList,
        refresh: Refresh,
        settings: Settings,
      };
      return iconMap[rightIcon] || null;
    }
    return rightIcon;
  };

  const leftIconComponent = getLeftIcon();
  const rightIconComponent = getRightIcon();

  // Map button size to icon size
  const getIconSize = (buttonSize: string) => {
    switch (buttonSize) {
      case "xs":
        return "xs";
      case "sm":
        return "sm";
      case "md":
        return "md";
      case "lg":
        return "lg";
      case "xl":
        return "lg";
      default:
        return "md";
    }
  };

  const iconSize = getIconSize(size);

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || state === "disabled"}
      style={sxStyle}
    >
      {leftIconComponent && (
        <Icon
          icon={leftIconComponent}
          size={iconSize}
          color="inherit"
          className={styles.left}
        />
      )}
      {children}
      {rightIconComponent && (
        <Icon
          icon={rightIconComponent}
          size={iconSize}
          color="inherit"
          className={styles.right}
        />
      )}
    </button>
  );
};
