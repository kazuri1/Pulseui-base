import React from "react";
import { ThemeProvider as NewThemeProvider } from "../../contexts/ThemeContext";
import type { WithSxProps } from "../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../utils/sxUtils";
import styles from "./ThemeProvider.module.scss";

export interface ThemeProviderProps extends WithSxProps {
  /** Default theme to use */
  defaultTheme?: "default-light" | "default-dark";
  /** Whether to persist theme choice in localStorage */
  persistTheme?: boolean;
  /** Children components */
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = "default-light",
  persistTheme = true,
  children,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const providerClasses = combineClassNames(styles.themeProvider, sxClassName);

  return (
    <NewThemeProvider defaultTheme={defaultTheme} persistTheme={persistTheme}>
      <div className={providerClasses} style={sxStyle}>
        {children}
      </div>
    </NewThemeProvider>
  );
};
