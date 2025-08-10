import React, { useState } from "react";
import styles from "./SimpleTopNav.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { Icon } from "../Icon/Icon";
import { Menu, Close, Home, Person, Store, Email } from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

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
  /** Brand name to display */
  brandName?: string;
  /** Brand title/role to display */
  brandTitle?: string;
  /** Brand logo/icon (optional) */
  brandLogo?: React.ReactNode;
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
}

export const SimpleTopNav: React.FC<SimpleTopNavProps> = ({
  brandName = "VIGNESH VISHNUMOORTHY",
  brandTitle = "PRODUCT DESIGNER + ENGINEER",
  brandLogo,
  items = [],
  showBrand = true,
  showNavigation = true,
  className = "",
  sx,
  style,
  defaultMobileMenuOpen = false,
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
        {showBrand && (
          <div className={styles.brand}>
            {brandLogo && <div className={styles.brandLogo}>{brandLogo}</div>}
            <div className={styles.brandInfo}>
              <h1 className={styles.brandName}>{brandName}</h1>
              {brandTitle && <p className={styles.brandTitle}>{brandTitle}</p>}
            </div>
          </div>
        )}

        {showNavigation && (
          <>
            {/* Desktop Navigation - Only show on desktop */}
            {showDesktopNav && (
              <div className={styles.desktopNavigation}>
                {navItems.map((item) => renderNavItem(item))}
              </div>
            )}

            {/* Mobile Menu Toggle - Only show on mobile/tablet */}
            {showMobileToggle && (
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
            {navItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </>
  );
};
