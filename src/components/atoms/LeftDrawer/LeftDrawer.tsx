import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import { Menu, Close, ExpandMore, ExpandLess } from "../Icon/IconSet";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import styles from "./LeftDrawer.module.scss";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface LeftDrawerItem {
  id: string;
  label: string;
  icon?: SvgIconComponent;
  href?: string;
  onClick?: () => void;
  children?: LeftDrawerItem[];
}

export interface LeftDrawerSection {
  id: string;
  title: string;
  icon?: SvgIconComponent;
  items: LeftDrawerItem[];
}

export interface LeftDrawerProps extends WithSxProps {
  isOpen: boolean;
  onClose: () => void;
  sections: LeftDrawerSection[];
  brandName?: string;
  brandLogo?: React.ReactNode;
  showOverlay?: boolean;
  width?: string;
}

export const LeftDrawer: React.FC<LeftDrawerProps> = ({
  isOpen,
  onClose,
  sections,
  brandName,
  brandLogo,
  showOverlay = true,
  width = "280px",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const { isMobile, isTablet } = useBreakpoint();

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleItemClick = (item: LeftDrawerItem) => {
    if (item.onClick) {
      item.onClick();
    }
    // Close drawer on mobile/tablet after item click
    if (isMobile || isTablet) {
      onClose();
    }
  };

  const renderDrawerItem = (item: LeftDrawerItem, level: number = 0) => (
    <div
      key={item.id}
      className={`${styles.drawerItem} ${styles[`level${level}`]}`}
      style={{ paddingLeft: `${16 + level * 16}px` }}
    >
      <button
        className={styles.itemButton}
        onClick={() => handleItemClick(item)}
        type="button"
      >
        {item.icon && (
          <Icon
            icon={item.icon}
            size={isMobile ? "md" : "sm"}
            color="inherit"
            className={styles.itemIcon}
          />
        )}
        <span className={styles.itemLabel}>{item.label}</span>
      </button>
    </div>
  );

  const renderDrawerSection = (section: LeftDrawerSection) => {
    const isExpanded = expandedSections.has(section.id);
    const hasChildren = section.items.some(
      (item) => item.children && item.children.length > 0
    );

    return (
      <div key={section.id} className={styles.drawerSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection(section.id)}
          type="button"
          aria-expanded={isExpanded}
        >
          {section.icon && (
            <Icon
              icon={section.icon}
              size="sm"
              color="inherit"
              className={styles.sectionIcon}
            />
          )}
          <span className={styles.sectionTitle}>{section.title}</span>
          {hasChildren && (
            <Icon
              icon={isExpanded ? ExpandLess : ExpandMore}
              size="sm"
              color="inherit"
              className={styles.expandIcon}
            />
          )}
        </button>

        {isExpanded && (
          <div className={styles.sectionContent}>
            {section.items.map((item) => (
              <div key={item.id}>
                {renderDrawerItem(item)}
                {item.children && item.children.length > 0 && (
                  <div className={styles.nestedItems}>
                    {item.children.map((child) => renderDrawerItem(child, 1))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      {showOverlay && isOpen && (
        <div className={styles.overlay} onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`${styles.leftDrawer} ${isOpen ? styles.open : ""} ${
          sxClassName || ""
        }`}
        style={{ width, ...sxStyle }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
      >
        {/* Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.brandSection}>
            {brandLogo && <div className={styles.brandLogo}>{brandLogo}</div>}
            {brandName && <h2 className={styles.brandName}>{brandName}</h2>}
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close drawer"
            type="button"
          >
            <Icon icon={Close} size="md" color="inherit" />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav className={styles.drawerNavigation}>
          {sections.map(renderDrawerSection)}
        </nav>
      </div>
    </>
  );
};
