import * as React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import styles from "./Tabs.module.scss";

export interface TabsContextValue {
  value: string | null;
  onChange: (value: string | null) => void;
  orientation: "horizontal" | "vertical";
  placement: "left" | "right";
  borderPosition: "top" | "bottom";
  activateTabWithKeyboard: boolean;
  allowTabDeactivation: boolean;
  loop: boolean;
  keepMounted: boolean;
  id: string;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export const useTabs = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
};

export interface TabsProps extends WithSxProps {
  /** Tabs content */
  children: React.ReactNode;
  /** Controlled component value */
  value?: string | null;
  /** Uncontrolled component default value */
  defaultValue?: string | null;
  /** Called when value changes */
  onChange?: (value: string | null) => void;
  /** Tabs orientation */
  orientation?: "horizontal" | "vertical";
  /** TabsList placement relative to TabsPanel, applicable only when orientation="vertical" */
  placement?: "left" | "right";
  /** Border position for horizontal tabs */
  borderPosition?: "top" | "bottom";
  /** If set, tab is activated with arrow key press */
  activateTabWithKeyboard?: boolean;
  /** If set, tab can be deactivated */
  allowTabDeactivation?: boolean;
  /** If set, arrow key presses loop though items (first to last and last to first) */
  loop?: boolean;
  /** If set to false, TabsPanel content will be unmounted when the associated tab is not active */
  keepMounted?: boolean;
  /** Base id, used to generate ids to connect labels with controls */
  id?: string;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  value,
  defaultValue,
  onChange,
  orientation = "horizontal",
  placement = "left",
  borderPosition = "bottom",
  activateTabWithKeyboard = true,
  allowTabDeactivation = false,
  loop = true,
  keepMounted = true,
  id,
  className = "",
  sx,
  style,
}) => {
  const [internalValue, setInternalValue] = React.useState<string | null>(
    value ?? defaultValue ?? null
  );
  const [generatedId] = React.useState(
    () => id || `tabs-${Math.random().toString(36).substr(2, 9)}`
  );

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const containerClasses = combineClassNames(
    styles.tabs,
    styles[`orientation-${orientation}`],
    styles[`placement-${placement}`],
    styles[`borderPosition-${borderPosition}`],
    sxClassName
  );

  // Update internal value when controlled value changes
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (newValue: string | null) => {
    // If tab deactivation is not allowed and trying to deactivate, ignore
    if (!allowTabDeactivation && newValue === null) {
      return;
    }

    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const contextValue: TabsContextValue = {
    value: internalValue,
    onChange: handleChange,
    orientation,
    placement,
    borderPosition,
    activateTabWithKeyboard,
    allowTabDeactivation,
    loop,
    keepMounted,
    id: generatedId,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={containerClasses} style={sxStyle}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
