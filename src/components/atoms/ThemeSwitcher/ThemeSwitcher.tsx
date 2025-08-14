import React from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ActionButton } from "../ActionButton/ActionButton";
import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./ThemeSwitcher.module.scss";

export interface ThemeSwitcherProps {
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Button variant */
  variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  size = "md",
  variant = "subtle",
  className = "",
  style,
}) => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className={`${styles.themeSwitcher} ${className}`} style={style}>
      <ActionButton
        icon={isDark ? LightMode : DarkMode}
        size={size}
        variant={variant}
        onClick={handleToggle}
        iconColor="primary"
        iconSize={size === "xs" ? "sm" : size === "xl" ? "lg" : size}
      />
    </div>
  );
};

export default ThemeSwitcher;
