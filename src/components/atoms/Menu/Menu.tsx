import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Menu.module.scss";
import { Icon } from "../Icon";
import { ArrowForwardIos } from "@mui/icons-material";
import type { MenuProps, MenuItem, MenuSection } from "./types";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export const Menu: React.FC<MenuProps> = ({
  sections,
  open = true,
  width = "240px",
  maxWidth = "400px",
  showSectionTitles = true,
  onBackdropClick,
  showBackdrop = false,
  className = "",
  sx,
  style,
  isSubmenu = false,
  anchorEl,
  placement = "bottom-start",
}) => {
  const { isMobile } = useBreakpoint();

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  // Mobile-responsive width
  const mobileWidth = isMobile ? "calc(100vw - 64px)" : width;
  const mobileMaxWidth = isMobile ? "240px" : maxWidth;

  const menuClasses = combineClassNames(
    styles.menu,
    open && styles.open,
    isSubmenu && styles.submenu,
    isMobile && styles.mobile,
    sxClassName
  );

  const [activeIndex, setActiveIndex] = useState(-1);
  const [submenuState, setSubmenuState] = useState<{
    index: number;
    sections: MenuSection[];
    position: { x: number; y: number };
  } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const allItems = sections.flatMap((section) => section.items);

  // Calculate menu position based on anchor element
  const getMenuPosition = React.useCallback((): React.CSSProperties => {
    if (!anchorEl || isSubmenu) {
      return {};
    }

    const rect = anchorEl.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuWidth = parseInt(mobileWidth) || (isMobile ? 280 : 280);
    const menuHeight = menuRef.current?.offsetHeight || (isMobile ? 150 : 200); // Smaller height for mobile

    let top = 0;
    let left = 0;

    switch (placement) {
      case "bottom-start":
        top = rect.bottom + scrollY + 8; // Add scroll offset for document-relative positioning
        left = rect.left + scrollX;
        break;
      case "bottom-end":
        top = rect.bottom + scrollY + 8;
        left = Math.max(scrollX, rect.right + scrollX - menuWidth);
        break;
      case "top-start":
        top = Math.max(scrollY, rect.top + scrollY - menuHeight - 8);
        left = rect.left + scrollX;
        break;
      case "top-end":
        top = Math.max(scrollY, rect.top + scrollY - menuHeight - 8);
        left = Math.max(scrollX, rect.right + scrollX - menuWidth);
        break;
    }

    // Boundary detection - ensure menu stays within viewport
    if (left + menuWidth > scrollX + viewportWidth) {
      left = Math.max(scrollX, scrollX + viewportWidth - menuWidth - 8);
    }
    if (top + menuHeight > scrollY + viewportHeight) {
      // If menu would go below viewport, position it above the anchor
      top = Math.max(scrollY, rect.top + scrollY - menuHeight - 8);
    }
    if (top < scrollY) {
      // If menu would go above viewport, position it below the anchor
      top = rect.bottom + scrollY + 8;
    }

    return {
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      transform: "none",
      zIndex: 1000,
    };
  }, [anchorEl, isSubmenu, mobileWidth, isMobile, placement]);

  // Update position when menu opens or window resizes
  useEffect(() => {
    if (open && anchorEl) {
      const updatePosition = () => {
        if (menuRef.current) {
          const position = getMenuPosition();
          Object.assign(menuRef.current.style, position);
        }
      };

      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [open, anchorEl, placement, width, getMenuPosition]);

  useEffect(() => {
    if (open) {
      menuRef.current?.focus();
      const firstFocusableIndex = allItems.findIndex((item) => !item.disabled);
      setActiveIndex(firstFocusableIndex);
    } else {
      setActiveIndex(-1);
    }
  }, [open, allItems]);

  // Handle clicks outside the menu to close it
  useEffect(() => {
    if (!open || !onBackdropClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onBackdropClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onBackdropClick]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onBackdropClick) {
      onBackdropClick();
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled) {
      if (item.submenu) {
        // Logic to open submenu is handled by onMouseEnter and keyboard nav
      } else if (item.onClick) {
        item.onClick();
        if (onBackdropClick) onBackdropClick(); // Close all menus on click
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const findNextIndex = (start: number, direction: "down" | "up") => {
      let next =
        direction === "down"
          ? (start + 1) % allItems.length
          : (start - 1 + allItems.length) % allItems.length;
      while (next !== start) {
        if (!allItems[next].disabled) {
          return next;
        }
        next =
          direction === "down"
            ? (next + 1) % allItems.length
            : (next - 1 + allItems.length) % allItems.length;
      }
      return start;
    };

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(findNextIndex(activeIndex, "down"));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(findNextIndex(activeIndex, "up"));
        break;
      case "ArrowRight":
        if (activeIndex !== -1 && allItems[activeIndex].submenu) {
          e.preventDefault();
          const menuRect = menuRef.current?.getBoundingClientRect();
          if (menuRect) {
            const viewportWidth = window.innerWidth;
            const submenuWidth = parseInt(mobileWidth) || 280;

            // Calculate position with boundary detection
            let x = menuRect.right - 1; // Reduce gap by positioning closer
            if (x + submenuWidth > viewportWidth) {
              // If submenu would go off-screen, position it to the left
              x = menuRect.left - submenuWidth + 1; // Reduce gap on left side too
            }

            setSubmenuState({
              index: activeIndex,
              sections: allItems[activeIndex].submenu!,
              position: { x, y: menuRect.top },
            });
          }
        }
        break;
      case "ArrowLeft":
        if (isSubmenu && onBackdropClick) {
          e.preventDefault();
          onBackdropClick(); // This will close the submenu
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (activeIndex !== -1) {
          handleItemClick(allItems[activeIndex]);
        }
        break;
      case "Escape":
        if (onBackdropClick) {
          e.preventDefault();
          onBackdropClick();
        }
        break;
    }
  };

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    if (allItems[index].submenu) {
      const menuRect = menuRef.current?.getBoundingClientRect();
      if (menuRect) {
        const viewportWidth = window.innerWidth;
        const submenuWidth = parseInt(mobileWidth) || 280;

        // Calculate position with boundary detection
        let x = menuRect.right - 1; // Reduce gap by positioning closer
        if (x + submenuWidth > viewportWidth) {
          // If submenu would go off-screen, position it to the left
          x = menuRect.left - submenuWidth + 1; // Reduce gap on left side too
        }

        setSubmenuState({
          index,
          sections: allItems[index].submenu!,
          position: { x, y: menuRect.top },
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
    setSubmenuState(null);
  };

  if (!open) return null;

  const menuContent = (
    <>
      {!isSubmenu && showBackdrop && (
        <div className={styles.backdrop} onClick={handleBackdropClick} />
      )}
      <div
        ref={menuRef}
        className={menuClasses}
        style={{
          width: mobileWidth,
          maxWidth: mobileMaxWidth,
          ...getMenuPosition(),
          ...sxStyle,
        }}
        role="menu"
        aria-orientation="vertical"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onMouseLeave={handleMouseLeave}
      >
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.section}>
            {showSectionTitles && section.title && (
              <div className={styles.sectionTitle}>{section.title}</div>
            )}
            <div className={styles.sectionItems}>
              {section.items.map((item, itemIndex) => {
                const globalIndex =
                  sections
                    .slice(0, sectionIndex)
                    .reduce((acc, s) => acc + s.items.length, 0) + itemIndex;

                return (
                  <button
                    key={itemIndex}
                    ref={(el) => {
                      itemsRef.current[globalIndex] = el;
                    }}
                    className={combineClassNames(
                      styles.menuItem,
                      item.danger && styles.danger,
                      item.disabled && styles.disabled,
                      activeIndex === globalIndex && styles.active
                    )}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => handleMouseEnter(globalIndex)}
                    disabled={item.disabled}
                    aria-haspopup={item.submenu ? "menu" : undefined}
                    aria-expanded={submenuState?.index === globalIndex}
                  >
                    {item.icon && (
                      <div className={styles.itemIcon}>
                        <Icon
                          icon={item.icon}
                          size="sm"
                          color={item.danger ? "error" : "inherit"}
                        />
                      </div>
                    )}
                    <span className={styles.itemLabel}>{item.label}</span>
                    {item.shortcut && (
                      <span className={styles.itemShortcut}>
                        {item.shortcut}
                      </span>
                    )}
                    {item.submenu && (
                      <div className={styles.submenuIcon}>
                        <Icon icon={ArrowForwardIos} size="xs" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {sectionIndex < sections.length - 1 && (
              <div className={styles.separator} />
            )}
          </div>
        ))}
      </div>

      {/* Render submenu outside the main menu */}
      {submenuState && (
        <Menu
          sections={submenuState.sections}
          open={true}
          isSubmenu={true}
          onBackdropClick={() => setSubmenuState(null)}
          showBackdrop={false}
          width={mobileWidth}
          maxWidth={mobileMaxWidth}
          showSectionTitles={showSectionTitles}
          sx={{
            position: "absolute",
            top: submenuState.position.y,
            left: submenuState.position.x,
            zIndex: 1001,
          }}
        />
      )}
    </>
  );

  // Render menu in portal to break out of component boundaries
  return createPortal(menuContent, document.body);
};