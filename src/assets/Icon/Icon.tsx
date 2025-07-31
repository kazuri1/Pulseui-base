import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import styles from "./Icon.module.scss";

export interface IconProps {
  /** The MUI icon component to render */
  icon: SvgIconComponent;
  /** Icon size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes */
  className?: string;
  /** Icon color (uses design tokens) */
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "muted" | "inherit";
  /** Whether the icon should be clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = "md",
  className = "",
  color = "inherit",
  clickable = false,
  onClick,
  disabled = false,
}) => {
  const iconClasses = [
    styles.icon,
    styles[`size-${size}`],
    styles[`color-${color}`],
    {
      [styles.clickable]: clickable,
      [styles.disabled]: disabled,
    },
    className,
  ].filter(Boolean);

  return (
    <IconComponent
      className={iconClasses.join(" ")}
      onClick={clickable && !disabled ? onClick : undefined}
    />
  );
}; 