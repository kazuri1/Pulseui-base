import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import styles from "./Icon.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface IconProps extends WithSxProps {
  /** The MUI icon component to render */
  icon: SvgIconComponent;
  /** Icon size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Icon color (uses design tokens) */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "muted"
    | "inherit";
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
  color = "inherit",
  clickable = false,
  onClick,
  disabled = false,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const iconClasses = combineClassNames(
    styles.icon,
    styles[`size-${size}`],
    styles[`color-${color}`],
    clickable && styles.clickable,
    disabled && styles.disabled,
    sxClassName
  );

  return (
    <IconComponent
      className={iconClasses}
      style={sxStyle}
      onClick={clickable && !disabled ? onClick : undefined}
    />
  );
};
