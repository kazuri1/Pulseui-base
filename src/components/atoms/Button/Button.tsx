import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { Icon } from "../Icon";
import { ArrowUpward } from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Show icon on the left side */
  leftIcon?: boolean;
  /** Show icon on the right side */
  rightIcon?: boolean;
  /** Custom left icon component */
  leftIconComponent?: SvgIconComponent;
  /** Custom right icon component */
  rightIconComponent?: SvgIconComponent;
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
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon = false,
  rightIcon = false,
  leftIconComponent,
  rightIconComponent,
  variant = "default",
  size = "md",
  state = "default",
  justify = "center",
  compact = false,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`state-${state}`],
    styles[`justify-${justify}`],
    {
      [styles.compact]: compact,
    },
    className
  );

  // Use custom icons if provided, otherwise use default ArrowUpward
  const LeftIcon = leftIconComponent || ArrowUpward;
  const RightIcon = rightIconComponent || ArrowUpward;

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
    >
      {leftIcon && (
        <Icon
          icon={LeftIcon}
          size={iconSize}
          color="inherit"
          className={styles.left}
        />
      )}
      {children}
      {rightIcon && (
        <Icon
          icon={RightIcon}
          size={iconSize}
          color="inherit"
          className={styles.right}
        />
      )}
    </button>
  );
};
