import React, { useState } from "react";
import styles from "./SimpleTopNav.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { Icon } from "../Icon/Icon";
import { Menu, Close, Home, Person, Store, Email } from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

import { ThemeSwitcher } from "../ThemeSwitcher";
import { BrandLogo } from "../BrandLogo";
import { BrandSwitcher } from "../BrandSwitcher";

export interface SimpleTopNavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display text for the nav item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Click handler for the nav item */
  onClick?: () => void;
  /** URL for navigation (optional) */
  href?: string;
  /** Icon for the nav item (optional) */
  icon?: SvgIconComponent;
}

export interface SimpleTopNavProps extends WithSxProps {
  /** Brand name to display (deprecated - use BrandLogo component) */
  brandName?: string;
  /** Brand title/role to display (deprecated - use BrandLogo component) */
  brandTitle?: string;
  /** Brand logo/icon (optional - deprecated, use BrandLogo component) */
  brandLogo?: React.ReactNode;
  /** Whether to use the new dynamic brand logo */
  useDynamicBrandLogo?: boolean;
  /** Size of the brand logo */
  brandLogoSize?: "sm" | "md" | "lg" | "xl";
  /** Whether to show text with the brand logo */
  showBrandText?: boolean;
  /** Navigation items */
  items?: SimpleTopNavItem[];
  /** Whether to show the brand section */
  showBrand?: boolean;
  /** Whether to show the navigation section */
  showNavigation?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Whether to show mobile menu by default */
  defaultMobileMenuOpen?: boolean;
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
  /** Children to render inside the navigation */
  children?: React.ReactNode;
  /** Custom content to render before the brand section */
  beforeBrand?: React.ReactNode;
  /** Custom content to render after the brand section but before navigation */
  afterBrand?: React.ReactNode;
  /** Custom content to render before the navigation items */
  beforeNavigation?: React.ReactNode;
  /** Custom content to render after the navigation items */
  afterNavigation?: React.ReactNode;
  /** Custom content to render in the center area (between brand and navigation) */
  centerContent?: React.ReactNode;
  /** Custom content to render in the mobile navigation header */
  mobileHeaderContent?: React.ReactNode;
  /** Custom content to render at the bottom of mobile navigation */
  mobileFooterContent?: React.ReactNode;
  /** Whether to show the center content area */
  showCenterContent?: boolean;
  /** Whether to show the mobile header content */
  showMobileHeaderContent?: boolean;
  /** Whether to show the mobile footer content */
  showMobileFooterContent?: boolean;
}

export const SimpleTopNav: React.FC<SimpleTopNavProps> = ({
  brandLogo,
  useDynamicBrandLogo = true,
  brandLogoSize = "md",
  showBrandText = true,
  items = [],
  showBrand = true,
  showNavigation = true,
  className = "",
  sx,
  style,
  defaultMobileMenuOpen = false,
  versionSelector = {},
  brandSwitcher = {},
  showThemeSwitcher = true,
  children,
  beforeBrand,
  afterBrand,
  beforeNavigation,
  afterNavigation,
  centerContent,
  mobileHeaderContent,
  mobileFooterContent,
  showCenterContent = false,
  showMobileHeaderContent = false,
  showMobileFooterContent = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(
    defaultMobileMenuOpen
  );
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const navClasses = combineClassNames(styles.simpleTopNav, sxClassName);

  const handleItemClick = (item: SimpleTopNavItem) => {
    if (item.onClick) {
      item.onClick();
    }
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItem = (item: SimpleTopNavItem, isMobile: boolean = false) => {
    const itemClasses = combineClassNames(
      styles.navItem,
      item.active && styles.active,
      isMobile && styles.mobileNavItem
    );

    const content = (
      <>
        {item.icon && (
          <Icon
            icon={item.icon}
            size={isMobile ? "md" : "sm"}
            color="inherit"
            className={styles.navItemIcon}
          />
        )}
        <span className={styles.navItemText}>{item.label}</span>
      </>
    );

    if (item.href) {
      return (
        <a
          key={item.id}
          href={item.href}
          className={itemClasses}
          onClick={() => handleItemClick(item)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        key={item.id}
        className={itemClasses}
        onClick={() => handleItemClick(item)}
        type="button"
      >
        {content}
      </button>
    );
  };

  // Default navigation items with icons if none provided
  const defaultItems: SimpleTopNavItem[] = [
    { id: "home", label: "Home", icon: Home, active: true },
    { id: "about", label: "About", icon: Person },
    { id: "work", label: "Work", icon: Store },
    { id: "contact", label: "Contact", icon: Email },
  ];

  const navItems = items.length > 0 ? items : defaultItems;

  // Show mobile menu toggle only on mobile and tablet
  const showMobileToggle = isMobile || isTablet;

  // Show desktop navigation only on desktop
  const showDesktopNav = isDesktop;

  return (
    <>
      <nav className={navClasses} style={sxStyle}>
        {/* Before Brand Content */}
        {beforeBrand && <div className={styles.beforeBrand}>{beforeBrand}</div>}

        {/* Brand Section */}
        {showBrand && (
          <div className={styles.brand}>
            {useDynamicBrandLogo ? (
              <BrandLogo
                size={brandLogoSize}
                showText={showBrandText}
                className={styles.brandLogoComponent}
              />
            ) : (
              <>
                {brandLogo && (
                  <div className={styles.brandLogo}>{brandLogo}</div>
                )}
              </>
            )}
            {versionSelector.show && (
              // <VersionSelector
              //   version={versionSelector.version}
              //   versions={versionSelector.versions}
              //   onVersionChange={versionSelector.onVersionChange}
              //   className={styles.versionSelector}
              // />
              <div className="version-display">v.2.0.0</div>
            )}
            {brandSwitcher.show && (
              <BrandSwitcher
                size={brandSwitcher.size || "sm"}
                showDescription={brandSwitcher.showDescription || false}
                label=""
                className={styles.brandSwitcher}
              />
            )}
          </div>
        )}

        {/* After Brand Content */}
        {afterBrand && <div className={styles.afterBrand}>{afterBrand}</div>}

        {/* Center Content Area */}
        {showCenterContent && centerContent && (
          <div className={styles.centerContent}>{centerContent}</div>
        )}

        {/* Children Content */}
        {children && <div className={styles.childrenContent}>{children}</div>}

        {/* Navigation Section */}
        {showNavigation && (
          <>
            {/* Before Navigation Content */}
            {beforeNavigation && (
              <div className={styles.beforeNavigation}>{beforeNavigation}</div>
            )}

            {/* Desktop Navigation - Only show on desktop */}
            {showDesktopNav && (
              <div className={styles.desktopNavigation}>
                {navItems.map((item) => renderNavItem(item))}
                {showThemeSwitcher && (
                  <div className={styles.themeSwitcherContainer}>
                    <ThemeSwitcher size="sm" variant="light" />
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle - Only show on mobile/tablet */}
            {showMobileToggle && (
              <div className={styles.mobileControls}>
                {/* Hide theme switcher on mobile */}
                {showThemeSwitcher && !isMobile && (
                  <div className={styles.themeSwitcherContainer}>
                    <ThemeSwitcher size="sm" variant="light" />
                  </div>
                )}
                <button
                  className={styles.mobileMenuToggle}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                  type="button"
                >
                  <Icon
                    icon={isMobileMenuOpen ? Close : Menu}
                    size="md"
                    color="inherit"
                  />
                </button>
              </div>
            )}

            {/* After Navigation Content */}
            {afterNavigation && (
              <div className={styles.afterNavigation}>{afterNavigation}</div>
            )}
          </>
        )}
      </nav>

      {/* Mobile Navigation Menu - Only render on mobile/tablet */}
      {showNavigation && showMobileToggle && (
        <div
          className={`${styles.mobileNavigation} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <div className={styles.mobileNavContent}>
            <div className={styles.mobileNavHeader}>
              <div className={styles.mobileNavHeaderLeft}>
                <h2 className={styles.mobileNavTitle}>Navigation</h2>
                {/* Show theme switcher in mobile menu header */}
                {showThemeSwitcher && (
                  <div className={styles.mobileThemeSwitcher}>
                    <ThemeSwitcher size="sm" variant="light" />
                  </div>
                )}
                {/* Custom mobile header content */}
                {showMobileHeaderContent && mobileHeaderContent && (
                  <div className={styles.mobileHeaderCustomContent}>
                    {mobileHeaderContent}
                  </div>
                )}
              </div>
              <button
                className={styles.mobileNavCloseButton}
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                type="button"
              >
                <Icon icon={Close} size="md" color="inherit" />
              </button>
            </div>
            <div className={styles.mobileNavItems}>
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
            {/* Custom mobile footer content */}
            {showMobileFooterContent && mobileFooterContent && (
              <div className={styles.mobileFooterContent}>
                {mobileFooterContent}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
