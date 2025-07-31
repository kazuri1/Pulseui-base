import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./ActionButton.module.scss";

export interface ActionButtonProps {
  /** Icon to display */
  icon: SvgIconComponent;
  /** Icon size */
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Icon color (optional - will be auto-determined by variant if not provided) */
  iconColor?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "muted"
    | "inherit";
  /** Button variant */
  variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Button state */
  state?: "default" | "hover" | "disabled";
  /** Disabled state */
  disabled?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  iconSize = "md",
  iconColor,
  variant = "default",
  size = "md",
  state = "default",
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) => {
  // Map button size to icon size if not explicitly provided
  const getIconSize = () => {
    if (iconSize) return iconSize;

    switch (size) {
      case "xs":
      case "sm":
        return "sm";
      case "lg":
      case "xl":
        return "lg";
      default:
        return "md";
    }
  };

  // Get icon color based on variant (only if iconColor is not explicitly provided)
  const getIconColor = () => {
    // If iconColor is explicitly provided, use it
    if (iconColor) return iconColor;

    // Otherwise, determine color based on variant
    switch (variant) {
      case "filled":
        return "inherit"; // Will inherit the button's text color (usually white on filled buttons)
      case "white":
        return "primary";
      case "outline":
        return "primary";
      case "subtle":
        return "primary";
      case "light":
        return "primary";
      case "default":
        return "muted";
      default:
        return "muted";
    }
  };

  const effectiveIconSize = getIconSize();
  const effectiveIconColor = getIconColor();
  const actualState = disabled ? "disabled" : state;

  return (
    <Button
      variant={variant}
      size={size}
      state={actualState}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles.actionButton} ${className}`}
    >
      <Icon
        icon={icon}
        size={effectiveIconSize}
        color={effectiveIconColor}
        className={styles.icon}
      />
    </Button>
  );
};

ActionButton.displayName = "ActionButton";
