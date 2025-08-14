import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { WbSunny, Bedtime } from "../Icon/IconSet";
import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import type { SvgIconComponent } from "@mui/icons-material";

export interface ThemeToggleProps extends WithSxProps {
  /** Button variant */
  variant?: "default" | "outline" | "subtle" | "light" | "filled" | "white";
  /** Button size */
  size?: "sm" | "md" | "lg" | "xl";
  /** Show text label */
  showLabel?: boolean;
  /** Custom light theme label */
  lightLabel?: string;
  /** Custom dark theme label */
  darkLabel?: string;
  /** Custom light theme icon */
  lightIcon?: SvgIconComponent;
  /** Custom dark theme icon */
  darkIcon?: SvgIconComponent;
  /** Whether to show the current theme name */
  showThemeName?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = "subtle",
  size = "md",
  showLabel = false,
  lightLabel = "Light",
  darkLabel = "Dark",
  lightIcon = WbSunny,
  darkIcon = Bedtime,
  showThemeName = false,
  className = "",
  sx,
  style,
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  // Get current icon and label
  const CurrentIcon = isDark ? lightIcon : darkIcon;
  const currentLabel = isDark ? lightLabel : darkLabel;
  const themeName = showThemeName ? `Switch to ${currentLabel}` : currentLabel;

  const toggleClasses = combineClassNames(
    styles.themeToggle,
    isAnimating && styles.animating,
    sxClassName
  );

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggle}
      className={toggleClasses}
      style={sxStyle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      data-theme={isDark ? "dark" : "light"}
      disabled={isAnimating}
    >
      <Icon
        icon={CurrentIcon}
        size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
        className={styles.icon}
      />
      {showLabel && <span className={styles.label}>{currentLabel}</span>}
    </Button>
  );
};
