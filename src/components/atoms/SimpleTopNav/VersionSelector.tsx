import React, { useState } from "react";
import styles from "./VersionSelector.module.scss";
import { Icon } from "../Icon/Icon";
import { ArrowDropDown } from "../Icon/IconSet";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface VersionSelectorProps extends WithSxProps {
  /** Current version to display */
  version?: string;
  /** Available versions to select from */
  versions?: string[];
  /** Callback when version changes */
  onVersionChange?: (version: string) => void;
  /** Whether the selector is disabled */
  disabled?: boolean;
}

export const VersionSelector: React.FC<VersionSelectorProps> = ({
  version = "v8.2.4",
  versions = ["v8.2.4", "v8.2.3", "v8.2.2", "v8.1.0"],
  onVersionChange,
  className = "",
  disabled = false,
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleVersionSelect = (selectedVersion: string) => {
    if (onVersionChange) {
      onVersionChange(selectedVersion);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const versionSelectorClasses = combineClassNames(
    styles.versionSelector,
    sxClassName
  );

  return (
    <div className={versionSelectorClasses} style={sxStyle}>
      <button
        className={`${styles.versionButton} ${isOpen ? styles.open : ""} ${
          disabled ? styles.disabled : ""
        }`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current version: ${version}. Click to change version.`}
        type="button"
      >
        <span className={styles.versionText}>{version}</span>
        <Icon
          icon={ArrowDropDown}
          size="sm"
          color="inherit"
          className={styles.chevron}
        />
      </button>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          <div className={styles.dropdown} role="listbox">
            {versions.map((ver) => (
              <button
                key={ver}
                className={`${styles.versionOption} ${
                  ver === version ? styles.selected : ""
                }`}
                onClick={() => handleVersionSelect(ver)}
                role="option"
                aria-selected={ver === version}
                type="button"
              >
                {ver}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
