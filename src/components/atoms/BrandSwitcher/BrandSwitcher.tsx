import React, { useState, useEffect } from "react";
import { Select } from "../Select/Select";
import type { WithSxProps } from "../../../utils/sxUtils";
import styles from "./BrandSwitcher.module.scss";

// Brand logos (kept in sync with BrandLogo component)
import pulseuiBaseLightLogo from "../../../assets/logos/pulseuibaselight.png";
import pulseuiBaseDarkLogo from "../../../assets/logos/pulseuibasedark.png";
import medDashLightLogo from "../../../assets/logos/Meddashlight.png";
import medDashDarkLogo from "../../../assets/logos/Meddashdark.png";
import fitCoreLightLogo from "../../../assets/logos/fitcorelight.png";
import fitCoreDarkLogo from "../../../assets/logos/fitcoredark.png";
import labSyncLightLogo from "../../../assets/logos/labsynclight.png";
import labSyncDarkLogo from "../../../assets/logos/labsyncdark.png";
import githubLightLogo from "../../../assets/logos/githublight.svg";
import githubDarkLogo from "../../../assets/logos/githubdark.svg";
import uberLightLogo from "../../../assets/logos/uberlight.png";
import uberDarkLogo from "../../../assets/logos/uber dark.jpg";

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
  /** Render style */
  variant?: "select" | "tiles";
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
  variant = "select",
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
      value: "github",
      label: "GitHub",
      description: "Developer & open source theme",
    },
    {
      value: "uber",
      label: "Uber",
      description: "Transportation & mobility theme",
    },
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

  const isLight =
    (document.documentElement.getAttribute("data-theme") ||
      document.documentElement.getAttribute("data-mode") ||
      "light") === "light";

  const getLogoFor = (brand: string) => {
    switch (brand) {
      case "github":
        return isLight ? githubLightLogo : githubDarkLogo;
      case "uber":
        return isLight ? uberLightLogo : uberDarkLogo;
      case "medash":
        return isLight ? medDashLightLogo : medDashDarkLogo;
      case "fitcore":
        return isLight ? fitCoreLightLogo : fitCoreDarkLogo;
      case "labsync":
        return isLight ? labSyncLightLogo : labSyncDarkLogo;
      case "default":
      default:
        return isLight ? pulseuiBaseLightLogo : pulseuiBaseDarkLogo;
    }
  };

  if (variant === "tiles") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          ...style,
        }}
        className={className}
      >
        <div className={`${styles.tilesContainer} ${styles[`size-${size}`]}`}>
          {brandOptions.map((brand) => (
            <button
              key={brand.value}
              type="button"
              onClick={() => !disabled && switchBrand(brand.value)}
              className={`${styles.tileButton} ${
                currentBrand === brand.value ? styles.selected : ""
              } ${disabled ? styles.disabled : ""}`}
              aria-label={brand.label}
              title={brand.label}
              disabled={disabled}
            >
              <div className={styles.logoBox}>
                <img
                  src={getLogoFor(brand.value)}
                  alt={brand.label}
                  className={styles.logoImg}
                />
              </div>
            </button>
          ))}
        </div>

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
  }

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
