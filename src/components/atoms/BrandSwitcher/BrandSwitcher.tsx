import React, { useState, useEffect } from "react";
import { Select } from "../Select/Select";
import type { WithSxProps } from "../../../utils/sxUtils";

export interface BrandSwitcherProps extends WithSxProps {
  /** Label for the brand switcher */
  label?: string;
  /** Whether to show the current brand version */
  showVersion?: boolean;
  /** Whether to show the brand description */
  showDescription?: boolean;
  /** Custom placeholder text */
  placeholder?: string;
  /** Whether the switcher is disabled */
  disabled?: boolean;
  /** Size of the switcher */
  size?: "sm" | "md" | "lg";
}

export const BrandSwitcher: React.FC<BrandSwitcherProps> = ({
  label = "Brand",
  showVersion = false,
  showDescription = false,
  placeholder = "Select a brand",
  disabled = false,
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const [currentBrand, setCurrentBrand] = useState<string>(() => {
    // Check if user has a saved preference
    const saved = localStorage.getItem("pulseui-brand");
    if (saved) {
      return saved;
    }
    // Default to "default" brand
    return "default";
  });

  const switchBrand = (brand: string) => {
    setCurrentBrand(brand);

    // Update CSS custom property on document root
    const root = document.documentElement;
    root.setAttribute("data-brand", brand);

    // Also set data-mode to match the current theme for brand-specific styles
    const currentTheme = root.getAttribute("data-theme") || "light";
    root.setAttribute("data-mode", currentTheme);

    localStorage.setItem("pulseui-brand", brand);
  };

  // Apply brand on mount
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-brand", currentBrand);

    // Also set data-mode to match the current theme
    const currentTheme = root.getAttribute("data-theme") || "light";
    root.setAttribute("data-mode", currentTheme);
  }, [currentBrand]);

  // Brand options with descriptions
  const brandOptions = [
    {
      value: "default",
      label: "Default",
      description: "Professional blue-based theme",
    },
    {
      value: "medash",
      label: "MedDash",
      description: "Medical & healthcare theme",
    },
    {
      value: "fitcore",
      label: "FitCore",
      description: "Fitness & wellness theme",
    },
    {
      value: "labsync",
      label: "LabSync",
      description: "Laboratory & research theme",
    },
  ];

  // Get current brand info for display
  const currentBrandInfo = brandOptions.find(
    (brand) => brand.value === currentBrand
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Select
        label={label}
        value={currentBrand}
        options={brandOptions.map((brand) => ({
          value: brand.value,
          label: brand.label,
        }))}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onChange={switchBrand}
        className={className}
        sx={sx}
        style={style}
      />

      {showDescription && currentBrandInfo && (
        <div
          style={{
            fontSize: "12px",
            color: "var(--color-text-secondary)",
            padding: "4px 0",
          }}
        >
          {currentBrandInfo.description}
        </div>
      )}

      {showVersion && (
        <div
          style={{
            fontSize: "11px",
            color: "var(--color-text-muted)",
            padding: "2px 0",
          }}
        >
          Brand: {currentBrand} | Theme:{" "}
          {document.documentElement.getAttribute("data-theme") || "light"}
        </div>
      )}
    </div>
  );
};

BrandSwitcher.displayName = "BrandSwitcher";

export default BrandSwitcher;
