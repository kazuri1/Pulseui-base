import React, { useState, useEffect, useRef } from "react";
import styles from "./TableOfContents.module.scss";

import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

export interface TableOfContentsItem {
  /** Unique identifier for the item */
  id: string;
  /** Display text for the item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Optional icon for the item */
  icon?: React.ReactNode;
}

export interface TableOfContentsProps extends WithSxProps {
  /** Array of table of contents items */
  items: TableOfContentsItem[];
  /** Variant style */
  variant?: "filled" | "light" | "subtle";
  /** Size of the component */
  size?: "sm" | "md" | "lg";
  /** Whether to show item numbers */
  showNumbers?: boolean;
  /** Maximum number of items to display (default: 6) */
  maxItems?: number;
  /** Whether to use compact spacing between items */
  compact?: boolean;
  /** Active item ID */
  activeId?: string;
  /** Callback when an item is clicked */
  onItemClick?: (item: TableOfContentsItem) => void;
  /** Whether to enable scroll spy functionality */
  enableScrollSpy?: boolean;
  /** Offset for scroll spy (in pixels) */
  scrollOffset?: number;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  variant = "light",
  size = "md",
  showNumbers = false,
  maxItems = 6,
  compact = false,
  activeId,
  onItemClick,
  enableScrollSpy = false,
  scrollOffset = 100,
  className = "",
  sx,
  style,
}) => {
  const { isDark } = useTheme();
  const [currentActiveId, setCurrentActiveId] = useState<string | undefined>(
    activeId
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const containerClasses = combineClassNames(
    styles.container,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    compact && styles.compact,
    sxClassName
  );

  // Filter items to show only maxItems
  const filteredItems = items.slice(0, maxItems);

  // Handle item click
  const handleItemClick = (item: TableOfContentsItem) => {
    setCurrentActiveId(item.id);
    onItemClick?.(item);

    // Scroll to the target element
    const targetElement = document.getElementById(item.id);
    if (targetElement) {
      const elementTop = targetElement.offsetTop - scrollOffset;
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy functionality
  useEffect(() => {
    if (!enableScrollSpy) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + scrollOffset;

      // Find the current active section
      let newActiveId: string | undefined;

      for (let i = filteredItems.length - 1; i >= 0; i--) {
        const item = filteredItems[i];
        const element = document.getElementById(item.id);

        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            newActiveId = item.id;
            break;
          }
        }
      }

      if (newActiveId !== currentActiveId) {
        setCurrentActiveId(newActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollSpy, filteredItems, currentActiveId, scrollOffset]);

  // Update active ID when prop changes
  useEffect(() => {
    if (activeId !== undefined) {
      setCurrentActiveId(activeId);
    }
  }, [activeId]);

  const renderItem = (item: TableOfContentsItem, index: number) => {
    const isActive = currentActiveId === item.id;
    const itemClasses = combineClassNames(
      styles.item,
      isActive && styles.active,
      showNumbers && styles.withNumbers
    );

    return (
      <div
        key={item.id}
        className={itemClasses}
        onClick={() => handleItemClick(item)}
      >
        {showNumbers && <span className={styles.number}>{index + 1}</span>}

        {item.icon && <span className={styles.icon}>{item.icon}</span>}

        <span className={styles.label}>{item.label}</span>
      </div>
    );
  };

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className={containerClasses} style={sxStyle}>
      {filteredItems.map((item, index) => renderItem(item, index))}
    </div>
  );
};
