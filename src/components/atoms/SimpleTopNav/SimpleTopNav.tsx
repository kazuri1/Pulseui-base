import React from "react";
import styles from "./SimpleTopNav.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

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
}) => {
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
  };

  const renderNavItem = (item: SimpleTopNavItem) => {
    const itemClasses = combineClassNames(
      styles.navItem,
      item.active && styles.active
    );

    const content = <span className={styles.navItemText}>{item.label}</span>;

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

  return (
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

      {showNavigation && items.length > 0 && (
        <div className={styles.navigation}>{items.map(renderNavItem)}</div>
      )}
    </nav>
  );
};
