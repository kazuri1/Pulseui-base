import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTabs } from "./Tabs";
import { SingleTab } from "../SingleTab/SingleTab";
import type { SingleTabProps } from "../SingleTab/SingleTab";
import styles from "./Tabs.module.scss";

export interface TabsTabProps
  extends Omit<SingleTabProps, "state" | "onClick">,
    WithSxProps {
  /** Value of associated control */
  value: string;
  /** Whether to keep this tab mounted even if keepMounted is false in parent */
  keepMounted?: boolean;
}

export const TabsTab: React.FC<TabsTabProps> = ({
  value,
  keepMounted,
  variant = "default",
  position = "top",
  leftIcon = false,
  rightIcon = false,
  placeholder = "",
  children,
  disabled = false,
  className = "",
  sx,
  style,
  ...singleTabProps
}) => {
  const {
    value: activeValue,
    onChange,
    id,
    keepMounted: parentKeepMounted,
    orientation,
    placement,
    borderPosition,
  } = useTabs();
  const isActive = activeValue === value;
  const shouldKeepMounted = keepMounted ?? parentKeepMounted;

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const tabClasses = combineClassNames(
    styles.tab,
    isActive && styles.active,
    orientation === "vertical" && styles.verticalTab,
    sxClassName
  );

  const handleClick = () => {
    onChange(isActive ? null : value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  // For vertical tabs, we need to adjust the position prop
  const getAdjustedPosition = () => {
    if (orientation === "vertical") {
      // For vertical tabs, we want the underline/border to be on the right side
      return "right";
    }
    if (orientation === "horizontal") {
      // For horizontal tabs, we want the underline/border to be based on borderPosition
      return borderPosition;
    }
    return position;
  };

  return (
    <div
      className={tabClasses}
      style={sxStyle}
      role="tab"
      aria-selected={isActive}
      aria-controls={`${id}-panel-${value}`}
      id={`${id}-tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <SingleTab
        {...singleTabProps}
        variant={variant}
        position={getAdjustedPosition()}
        state={isActive ? "selected" : "default"}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        placeholder={placeholder}
        children={children}
        disabled={disabled}
      />
    </div>
  );
};
