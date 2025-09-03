import React, { useState, useEffect } from "react";
import styles from "./BrandLogo.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

// Import logo images
import pulseuiBaseLightLogo from "../../../assets/logos/pulseuibaselight.png";
import pulseuiBaseDarkLogo from "../../../assets/logos/pulseuibasedark.png";
import medDashLightLogo from "../../../assets/logos/Meddashlight.png";
import medDashDarkLogo from "../../../assets/logos/Meddashdark.png";
import fitCoreLightLogo from "../../../assets/logos/fitcorelight.png";
import fitCoreDarkLogo from "../../../assets/logos/fitcoredark.png";
import labSyncLightLogo from "../../../assets/logos/labsynclight.png";
import labSyncDarkLogo from "../../../assets/logos/labsyncdark.png";

export interface BrandLogoProps extends WithSxProps {
  /** Size of the logo */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether to show text alongside the logo */
  showText?: boolean;
  /** Custom brand override (useful for testing) */
  brand?: "default" | "medash" | "fitcore" | "labsync";
  /** Custom theme override (useful for testing) */
  theme?: "light" | "dark";
  /** Click handler for the logo */
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showText = true,
  brand,
  theme,
  className = "",
  sx,
  style,
  onClick,
}) => {
  const [currentBrand, setCurrentBrand] = useState<string>(() => {
    if (brand) return brand;
    return localStorage.getItem("pulseui-brand") || "default";
  });

  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (theme) return theme;
    return localStorage.getItem("pulseui-theme") || "light";
  });

  // Listen for brand and theme changes
  useEffect(() => {
    if (brand && theme) {
      setCurrentBrand(brand);
      setCurrentTheme(theme);
      return;
    }

    const handleStorageChange = () => {
      if (!brand) {
        const savedBrand = localStorage.getItem("pulseui-brand") || "default";
        setCurrentBrand(savedBrand);
      }
      if (!theme) {
        const savedTheme = localStorage.getItem("pulseui-theme") || "light";
        setCurrentTheme(savedTheme);
      }
    };

    // Listen for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Also listen for direct changes (for same-tab updates)
    const observer = new MutationObserver(() => {
      if (!brand) {
        const newBrand =
          document.documentElement.getAttribute("data-brand") || "default";
        if (newBrand !== currentBrand) {
          setCurrentBrand(newBrand);
        }
      }
      if (!theme) {
        const newTheme =
          document.documentElement.getAttribute("data-theme") ||
          document.documentElement.getAttribute("data-mode") ||
          "light";
        if (newTheme !== currentTheme) {
          setCurrentTheme(newTheme);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-brand", "data-theme", "data-mode"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, [brand, theme, currentBrand, currentTheme]);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const containerClasses = combineClassNames(
    styles.brandLogo,
    styles[`size-${size}`],
    styles[`brand-${currentBrand}`],
    sxClassName
  );

  const getBrandConfig = () => {
    const isLight = currentTheme === "light";

    switch (currentBrand) {
      case "medash":
        return {
          logo: isLight ? medDashLightLogo : medDashDarkLogo,
          name: "MedDash",
          tagline: "Healthcare Solutions",
          alt: `MedDash ${currentTheme} logo`,
        };
      case "fitcore":
        return {
          logo: isLight ? fitCoreLightLogo : fitCoreDarkLogo,
          name: "FitCore",
          tagline: "Fitness & Wellness",
          alt: `FitCore ${currentTheme} logo`,
        };
      case "labsync":
        return {
          logo: isLight ? labSyncLightLogo : labSyncDarkLogo,
          name: "LabSync",
          tagline: "Laboratory Research",
          alt: `LabSync ${currentTheme} logo`,
        };
      default:
        return {
          logo: isLight ? pulseuiBaseLightLogo : pulseuiBaseDarkLogo,
          name: "PulseUI",
          tagline: "Design System",
          alt: `PulseUI ${currentTheme} logo`,
        };
    }
  };

  const brandConfig = getBrandConfig();

  return (
    <div
      className={containerClasses}
      style={{
        ...sxStyle,
        ...(onClick && { cursor: "pointer" }),
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className={styles.logoImage}>
        <img
          src={brandConfig.logo}
          alt={brandConfig.alt}
          className={styles.brandLogoImg}
        />
      </div>

      {showText && (
        <div className={styles.logoText}>
          <h1 className={styles.brandName}>{brandConfig.name}</h1>
          {size !== "sm" && (
            <p className={styles.brandTagline}>{brandConfig.tagline}</p>
          )}
        </div>
      )}
    </div>
  );
};

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
