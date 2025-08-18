import React, { createContext, useContext, useState } from "react";
import { Icon } from "../Icon";
import { ExpandMore, ExpandLess } from "../Icon/IconSet";
import styles from "./Accordion.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

// Context for accordion state
interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (itemId: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

// Main Accordion component
export interface AccordionProps extends WithSxProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  size?: "sm" | "md" | "lg";
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultExpanded = [],
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setExpandedItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setExpandedItems((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  const contextValue: AccordionContextValue = {
    expandedItems,
    toggleItem,
    allowMultiple,
  };

  const accordionClasses = combineClassNames(
    styles.accordion,
    styles[`size-${size}`],
    sxClassName
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={accordionClasses} style={sxStyle}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionItem component
export interface AccordionItemProps extends WithSxProps {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  children,
  disabled = false,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const itemClasses = combineClassNames(styles.accordionItem, sxClassName);

  return (
    <div className={itemClasses} style={sxStyle}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            itemId: id,
            disabled,
          });
        }
        return child;
      })}
    </div>
  );
};

// AccordionHeader component
export interface AccordionHeaderProps extends WithSxProps {
  children: React.ReactNode;
  itemId: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  itemId,
  disabled = false,
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const { expandedItems, toggleItem } = useAccordion();
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const isExpanded = expandedItems.includes(itemId);

  const headerClasses = combineClassNames(
    styles.accordionHeader,
    styles[`size-${size}`],
    isExpanded && styles.expanded,
    disabled && styles.disabled,
    sxClassName
  );

  const handleClick = () => {
    if (!disabled) {
      toggleItem(itemId);
    }
  };

  return (
    <button
      className={headerClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-expanded={isExpanded}
      style={sxStyle}
    >
      <div className={styles.headerContent}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{children}</div>
        </div>
      </div>
      <div className={styles.expandIcon}>
        <Icon
          icon={isExpanded ? ExpandLess : ExpandMore}
          size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
        />
      </div>
    </button>
  );
};

// AccordionContent component
export interface AccordionContentProps extends WithSxProps {
  children: React.ReactNode;
  itemId: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  itemId,
  disabled = false,
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const { expandedItems } = useAccordion();
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const isExpanded = expandedItems.includes(itemId);

  if (!isExpanded) {
    return null;
  }

  const contentClasses = combineClassNames(
    styles.accordionContent,
    styles[`size-${size}`],
    sxClassName
  );

  return (
    <div className={contentClasses} style={sxStyle}>
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
};

// Convenience components for common use cases
export const AccordionList: React.FC<{
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
  }>;
}> = ({ items }) => (
  <>
    {items.map((item) => (
      <AccordionItem key={item.id} id={item.id} disabled={item.disabled}>
        <AccordionHeader itemId={item.id} disabled={item.disabled}>
          {item.title}
        </AccordionHeader>
        <AccordionContent itemId={item.id}>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </>
);
