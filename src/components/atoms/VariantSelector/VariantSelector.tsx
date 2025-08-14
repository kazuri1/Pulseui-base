import React, { cloneElement, useState } from "react";
import type { ReactElement } from "react";
import styles from "./VariantSelector.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { combineClassNames } from "../../../utils/sxUtils";

export interface VariantSelectorProps extends WithSxProps {
  /** Title for the variant selector */
  title?: string;
  /** Array of variant options */
  variants: string[];
  /** Default selected variant */
  defaultVariant?: string;
  /** Component to render with variants */
  children: ReactElement;
  /** Callback when variant changes */
  onVariantChange?: (variant: string) => void;
  /** Label for the variant selector */
  label?: string;
  /** Whether to show the current variant info */
  showVariantInfo?: boolean;
  /** Custom class name */
  className?: string;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  title = "Component Variant Selector",
  variants,
  defaultVariant,
  children,
  onVariantChange,
  label = "Select Variant:",
  showVariantInfo = true,
  className = "",
  sx,
  style,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    defaultVariant || variants[0]
  );

  const handleVariantChange = (variant: string) => {
    setSelectedVariant(variant);
    onVariantChange?.(variant);
  };

  // Clone the child component and pass the selected variant
  const componentWithVariant = cloneElement(children, {
    variant: selectedVariant,
    // Preserve other props like size, don't override them
  } as any);

  const containerClasses = combineClassNames(styles.variantSelector, className);

  return (
    <div className={containerClasses} style={style}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.controls}>
        <label className={styles.label}>{label}</label>
        <select
          value={selectedVariant}
          onChange={(e) => handleVariantChange(e.target.value)}
          className={styles.select}
        >
          {variants.map((variant) => (
            <option key={variant} value={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.preview}>{componentWithVariant}</div>

      {showVariantInfo && (
        <div className={styles.variantInfo}>
          Current variant: <strong>{selectedVariant}</strong>
        </div>
      )}
    </div>
  );
};

VariantSelector.displayName = "VariantSelector";

export default VariantSelector;
