import React from "react";
import { ActionButton } from "../ActionButton/ActionButton";
import { WbSunny, Bedtime } from "../Icon/IconSet";
import type { WithSxProps } from "../../../utils/sxUtils";

export interface ThemeSwitcherProps extends WithSxProps {
  /** Size of the theme switcher */
  size?: "sm" | "md" | "lg";
  /** Variant style */
  variant?: "light" | "dark" | "default";
  /** Custom label for accessibility */
  label?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  size = "md",
  variant = "default",
  label,
  className = "",
  sx,
  style,
}) => {
  const [isDark, setIsDark] = React.useState(() => {
    // Check if user has a saved preference
    const saved = localStorage.getItem("pulseui-theme");
    if (saved) {
      return saved === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Update CSS custom property on document root
    const root = document.documentElement;
    if (newTheme) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("pulseui-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("pulseui-theme", "light");
    }
  };

  // Apply theme on mount
  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  const displayLabel =
    label || (isDark ? "Switch to light mode" : "Switch to dark mode");

  // Map size to ActionButton size
  const actionButtonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";

  // Map variant to ActionButton variant
  const actionButtonVariant =
    variant === "default" ? "filled" : variant === "light" ? "light" : "filled";

  return (
    <ActionButton
      onClick={toggleTheme}
      variant={actionButtonVariant}
      size={actionButtonSize}
      icon={isDark ? WbSunny : Bedtime}
      aria-label={displayLabel}
      className={className}
      sx={sx}
      style={style}
    />
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
