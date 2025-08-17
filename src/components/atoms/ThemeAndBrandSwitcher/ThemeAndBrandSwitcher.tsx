import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useBrand } from "../../../contexts/BrandContext";
import { ThemeToggle } from "../ThemeToggle";
import { BrandSwitcher } from "../BrandSwitcher";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import styles from "./ThemeAndBrandSwitcher.module.scss";

export interface ThemeAndBrandSwitcherProps extends WithSxProps {
  /** Whether to show the theme toggle */
  showThemeToggle?: boolean;
  /** Whether to show the brand switcher */
  showBrandSwitcher?: boolean;
  /** Label for the brand switcher */
  brandLabel?: string;
  /** Whether to show brand version */
  showBrandVersion?: boolean;
  /** Whether to show brand description */
  showBrandDescription?: boolean;
  /** Layout direction */
  direction?: "horizontal" | "vertical";
  /** Size of the components */
  size?: "sm" | "md" | "lg";
  /** Whether the switchers are disabled */
  disabled?: boolean;
}

export const ThemeAndBrandSwitcher: React.FC<ThemeAndBrandSwitcherProps> = ({
  showThemeToggle = true,
  showBrandSwitcher = true,
  brandLabel = "Brand",
  showBrandVersion = false,
  showBrandDescription = false,
  direction = "horizontal",
  size = "md",
  disabled = false,
  className = "",
  sx,
  style,
}) => {
  const { themeMode, isDark, isLight } = useTheme();
  const { currentBrand, brandId, isDefaultBrand } = useBrand();

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const switcherClasses = combineClassNames(
    styles.themeAndBrandSwitcher,
    styles[`themeAndBrandSwitcher--${direction}`],
    sxClassName
  );

  // Don't render if both are disabled
  if (!showThemeToggle && !showBrandSwitcher) {
    return null;
  }

  return (
    <div className={switcherClasses} style={sxStyle}>
      {/* Theme Toggle */}
      {showThemeToggle && (
        <div className={styles.themeAndBrandSwitcher__theme}>
          <ThemeToggle
            size={size}
            className={styles.themeAndBrandSwitcher__themeToggle}
          />
          <div className={styles.themeAndBrandSwitcher__themeInfo}>
            <span className={styles.themeAndBrandSwitcher__themeLabel}>
              {isDark ? "Dark" : "Light"} Theme
            </span>
          </div>
        </div>
      )}

      {/* Brand Switcher */}
      {showBrandSwitcher && (
        <div className={styles.themeAndBrandSwitcher__brand}>
          <BrandSwitcher
            label={brandLabel}
            showVersion={showBrandVersion}
            showDescription={showBrandDescription}
            size={size}
            disabled={disabled}
            className={styles.themeAndBrandSwitcher__brandSwitcher}
          />
          <div className={styles.themeAndBrandSwitcher__brandInfo}>
            <span className={styles.themeAndBrandSwitcher__brandLabel}>
              {isDefaultBrand
                ? "PulseUI (Default)"
                : currentBrand?.name || "Unknown"}
            </span>
            {showBrandVersion && currentBrand && (
              <span className={styles.themeAndBrandSwitcher__brandVersion}>
                v{currentBrand.version}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Current State Display */}
      <div className={styles.themeAndBrandSwitcher__currentState}>
        <div className={styles.themeAndBrandSwitcher__stateItem}>
          <span className={styles.themeAndBrandSwitcher__stateLabel}>
            Theme:
          </span>
          <span className={styles.themeAndBrandSwitcher__stateValue}>
            {themeMode}
          </span>
        </div>
        <div className={styles.themeAndBrandSwitcher__stateItem}>
          <span className={styles.themeAndBrandSwitcher__stateLabel}>
            Brand:
          </span>
          <span className={styles.themeAndBrandSwitcher__stateValue}>
            {isDefaultBrand ? "PulseUI" : currentBrand?.name || "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};
