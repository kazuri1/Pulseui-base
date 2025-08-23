import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { BrandSwitcher } from "../BrandSwitcher/BrandSwitcher";
import type { WithSxProps } from "../../../utils/sxUtils";

export interface ThemeAndBrandSwitcherProps extends WithSxProps {
  /** Whether to show labels for the switchers */
  showLabels?: boolean;
  /** Whether to show brand descriptions */
  showBrandDescription?: boolean;
  /** Whether to show version info */
  showVersion?: boolean;
  /** Size of the switchers */
  size?: "sm" | "md" | "lg";
  /** Layout direction */
  direction?: "horizontal" | "vertical";
  /** Gap between switchers */
  gap?: "sm" | "md" | "lg";
}

export const ThemeAndBrandSwitcher: React.FC<ThemeAndBrandSwitcherProps> = ({
  showLabels = true,
  showBrandDescription = true,
  showVersion = false,
  size = "md",
  direction = "horizontal",
  gap = "md",
  className = "",
  sx,
  style,
}) => {
  const gapSize = {
    sm: "8px",
    md: "16px",
    lg: "24px",
  }[gap];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    gap: gapSize,
    alignItems: direction === "vertical" ? "stretch" : "center",
    ...style,
  };

  return (
    <div className={className} style={containerStyle}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {showLabels && (
          <span
            style={{
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              fontWeight: "500",
            }}
          >
            Theme
          </span>
        )}
        <ThemeSwitcher size={size} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {showLabels && (
          <span
            style={{
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              fontWeight: "500",
            }}
          >
            Brand
          </span>
        )}
        <BrandSwitcher
          size={size}
          showDescription={showBrandDescription}
          showVersion={showVersion}
          label=""
        />
      </div>
    </div>
  );
};

ThemeAndBrandSwitcher.displayName = "ThemeAndBrandSwitcher";

export default ThemeAndBrandSwitcher;
