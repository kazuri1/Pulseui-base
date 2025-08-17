import React from "react";
import { useBrand } from "../../../contexts/BrandContext";
import { Select } from "../Select";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import styles from "./BrandSwitcher.module.scss";

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
  placeholder = "Select brand",
  disabled = false,
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const { currentBrand, brandId, setBrand, availableBrands, isDefaultBrand } =
    useBrand();

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const switcherClasses = combineClassNames(
    styles.brandSwitcher,
    styles[`brandSwitcher--${size}`],
    sxClassName
  );

  // Create options for the select
  const brandOptions = [
    {
      value: "pulseui",
      label: "PulseUI (Default)",
      description: "Default PulseUI design system",
      version: "1.0.0",
    },
    ...availableBrands
      .filter((brand) => brand.id !== "pulseui")
      .map((brand) => ({
        value: brand.id,
        label: brand.name,
        description: brand.description,
        version: brand.version,
      })),
  ];

  // Handle brand change
  const handleBrandChange = (value: string) => {
    if (value === "pulseui") {
      setBrand(null); // Set to default (PulseUI)
    } else {
      setBrand(value);
    }
  };

  // Get current display value
  const currentValue = isDefaultBrand ? "pulseui" : brandId || "pulseui";

  // Get current brand info for display
  const currentBrandInfo = brandOptions.find(
    (option) => option.value === currentValue
  );

  return (
    <div className={switcherClasses} style={sxStyle}>
      {label && <label className={styles.brandSwitcher__label}>{label}</label>}

      <Select
        value={currentValue}
        onChange={handleBrandChange}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        className={styles.brandSwitcher__select}
        options={brandOptions.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
      />

      {/* Current brand info display */}
      {currentBrandInfo && (
        <div className={styles.brandSwitcher__info}>
          <span className={styles.brandSwitcher__currentBrand}>
            {currentBrandInfo.label}
          </span>
          {showVersion && (
            <span className={styles.brandSwitcher__currentVersion}>
              v{currentBrandInfo.version}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
