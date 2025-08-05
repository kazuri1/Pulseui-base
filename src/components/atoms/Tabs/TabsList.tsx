import React, { useRef, useEffect } from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTabs } from "./Tabs";
import styles from "./Tabs.module.scss";

export interface TabsListProps extends WithSxProps {
  /** Tabs.Tab components */
  children: React.ReactNode;
  /** Determines whether tabs should take all available space */
  grow?: boolean;
  /** Tabs alignment */
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const TabsList: React.FC<TabsListProps> = ({
  children,
  grow = false,
  justify = "flex-start",
  className = "",
  sx,
  style,
}) => {
  const { orientation, activateTabWithKeyboard, loop } = useTabs();
  const listRef = useRef<HTMLDivElement>(null);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const listClasses = combineClassNames(
    styles.tabsList,
    styles[`orientation-${orientation}`],
    grow && styles.grow,
    styles[`justify-${justify}`],
    sxClassName
  );

  // Handle keyboard navigation
  useEffect(() => {
    if (!activateTabWithKeyboard || !listRef.current) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const tabs = Array.from(
        listRef.current?.querySelectorAll('[role="tab"]') || []
      );
      const currentTab = event.target as HTMLElement;
      const currentIndex = tabs.indexOf(currentTab);

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          nextIndex =
            loop && currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          nextIndex =
            loop && currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
          break;
        case "Home":
          event.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          event.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      const nextTab = tabs[nextIndex] as HTMLElement;
      if (nextTab) {
        nextTab.focus();
        nextTab.click();
      }
    };

    const listElement = listRef.current;
    listElement.addEventListener("keydown", handleKeyDown);

    return () => {
      listElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [activateTabWithKeyboard, loop]);

  return (
    <div ref={listRef} className={listClasses} style={sxStyle} role="tablist">
      {children}
    </div>
  );
};
