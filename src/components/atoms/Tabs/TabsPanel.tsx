import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTabs } from "./Tabs";
import styles from "./Tabs.module.scss";

export interface TabsPanelProps extends WithSxProps {
  /** Panel content */
  children: React.ReactNode;
  /** Value of associated control */
  value: string;
  /** If set, the content is kept mounted, even if keepMounted is set false in the parent Tabs component */
  keepMounted?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
  children,
  value,
  keepMounted,
  className = "",
  sx,
  style,
}) => {
  const { value: activeValue, id, keepMounted: parentKeepMounted } = useTabs();
  const isActive = activeValue === value;
  const shouldKeepMounted = keepMounted ?? parentKeepMounted;

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const panelClasses = combineClassNames(
    styles.tabsPanel,
    isActive && styles.active,
    sxClassName
  );

  // Don't render if not active and not keeping mounted
  if (!isActive && !shouldKeepMounted) {
    return null;
  }

  return (
    <div
      className={panelClasses}
      style={sxStyle}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${value}`}
      id={`${id}-panel-${value}`}
      hidden={!isActive}
    >
      {children}
    </div>
  );
};
