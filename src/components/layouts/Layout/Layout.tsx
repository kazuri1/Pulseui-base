import React from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import styles from "./Layout.module.scss";
import { SimpleTopNav } from "../../atoms/SimpleTopNav/SimpleTopNav";
import type { SimpleTopNavItem } from "../../atoms/SimpleTopNav/SimpleTopNav";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface LayoutProps extends WithSxProps {
  /** Content to render in the main area */
  children: React.ReactNode;
  /** Navigation items for the top nav */
  navItems?: SimpleTopNavItem[];
  /** Whether to show the top navigation */
  showTopNav?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
  /** SimpleTopNav configuration */
  topNavConfig?: {
    /** Brand name to display */
    brandName?: string;
    /** Brand title/role to display */
    brandTitle?: string;
    /** Whether to use the new dynamic brand logo */
    useDynamicBrandLogo?: boolean;
    /** Size of the brand logo */
    brandLogoSize?: "sm" | "md" | "lg" | "xl";
    /** Whether to show text with the brand logo */
    showBrandText?: boolean;
    /** Version selector configuration */
    versionSelector?: {
      /** Current version to display */
      version?: string;
      /** Available versions to select from */
      versions?: string[];
      /** Callback when version changes */
      onVersionChange?: (version: string) => void;
      /** Whether to show the version selector */
      show?: boolean;
    };
    /** Brand switcher configuration */
    brandSwitcher?: {
      /** Whether to show the brand switcher */
      show?: boolean;
      /** Size of the brand switcher */
      size?: "sm" | "md" | "lg";
      /** Whether to show brand descriptions */
      showDescription?: boolean;
    };
    /** Whether to show the theme switcher */
    showThemeSwitcher?: boolean;
  };
  /** Whether to apply padding to the main content area */
  applyContentPadding?: boolean;
  /** Custom padding for the content area */
  contentPadding?: string;
  /** Whether to apply a minimum height to ensure full viewport coverage */
  minFullHeight?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  navItems = [],
  showTopNav = true,
  className = "",
  sx,
  style,
  topNavConfig = {},
  applyContentPadding = true,
  contentPadding,
  minFullHeight = true,
}) => {
  // Initialize brand and theme on component mount
  React.useEffect(() => {
    const root = document.documentElement;

    // Initialize brand
    const savedBrand = localStorage.getItem("pulseui-brand") || "default";
    root.setAttribute("data-brand", savedBrand);

    // Initialize theme and mode
    const savedTheme = localStorage.getItem("pulseui-theme") || "light";
    root.setAttribute("data-theme", savedTheme);
    root.setAttribute("data-mode", savedTheme);
  }, []);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const layoutClasses = combineClassNames(
    styles.layout,
    minFullHeight && styles.minFullHeight,
    sxClassName
  );

  const contentClasses = combineClassNames(
    styles.content,
    applyContentPadding && styles.withPadding
  );

  // Default navigation items
  const defaultNavItems: SimpleTopNavItem[] = [
    {
      id: "home",
      label: "Home",
      active: true,
      onClick: () => console.log("Home clicked"),
    },
    {
      id: "components",
      label: "Components",
      onClick: () => console.log("Components clicked"),
    },
    {
      id: "contact",
      label: "Contact",
      onClick: () => console.log("Contact clicked"),
    },
  ];

  const finalNavItems = navItems.length > 0 ? navItems : defaultNavItems;

  // Default top nav configuration
  const defaultTopNavConfig = {
    useDynamicBrandLogo: true,
    brandLogoSize: "md" as const,
    showBrandText: false,
    brandName: "PulseUI",
    brandTitle: "Component Library",
    versionSelector: {
      version: "1.6.0",
      versions: ["1.5.0", "1.6.0", "1.7.0"],
      onVersionChange: (version: string) =>
        console.log("Version changed to:", version),
      show: true,
    },
    brandSwitcher: {
      show: true,
      size: "sm" as const,
      showDescription: false,
    },
    showThemeSwitcher: true,
    ...topNavConfig,
  };

  const contentStyle = {
    ...sxStyle,
    ...(contentPadding && { padding: contentPadding }),
  };

  return (
    <div className={layoutClasses}>
      {/* Global Top Navigation */}
      {showTopNav && (
        <SimpleTopNav
          {...defaultTopNavConfig}
          items={finalNavItems}
          sx={{ width: "100%", position: "sticky", top: 0 }}
        />
      )}

      {/* Main Content Area */}
      <main className={contentClasses} style={contentStyle}>
        {children}
      </main>
    </div>
  );
};
