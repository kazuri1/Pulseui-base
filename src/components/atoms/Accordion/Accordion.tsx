import React, { createContext, useContext, useState } from 'react';
import { Icon } from '../Icon';
import { ExpandMore, ExpandLess } from '../Icon/IconSet';
import styles from './Accordion.module.scss';

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
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
};

// Main Accordion component
export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultExpanded = [],
  size = 'md',
  className = '',
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setExpandedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setExpandedItems(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  const contextValue: AccordionContextValue = {
    expandedItems,
    toggleItem,
    allowMultiple,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`${styles.accordion} ${styles[`size-${size}`]} ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionItem component
export interface AccordionItemProps {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  children,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`${styles.accordionItem} ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { itemId: id, disabled });
        }
        return child;
      })}
    </div>
  );
};

// AccordionHeader component
export interface AccordionHeaderProps {
  children: React.ReactNode;
  itemId: string;
  disabled?: boolean;
  className?: string;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  itemId,
  disabled = false,
  className = '',
}) => {
  const { expandedItems, toggleItem } = useAccordion();
  const isExpanded = expandedItems.includes(itemId);

  const handleClick = () => {
    if (!disabled) {
      toggleItem(itemId);
    }
  };

  return (
    <button
      className={`
        ${styles.accordionHeader}
        ${isExpanded ? styles.expanded : ''}
        ${disabled ? styles.disabled : ''}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled}
      aria-expanded={isExpanded}
      aria-controls={`${itemId}-content`}
    >
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{children}</span>
      </div>
      <Icon
        icon={isExpanded ? ExpandLess : ExpandMore}
        size="sm"
        className={styles.chevron}
      />
    </button>
  );
};

// AccordionContent component
export interface AccordionContentProps {
  children: React.ReactNode;
  itemId: string;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  itemId,
  className = '',
}) => {
  const { expandedItems } = useAccordion();
  const isExpanded = expandedItems.includes(itemId);

  if (!isExpanded) return null;

  return (
          <div
        id={`${itemId}-content`}
        className={`${styles.accordionContent} ${className}`}
        aria-labelledby={itemId}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.contentInner}>
            {children}
          </div>
        </div>
      </div>
  );
};

// Convenience components for common use cases
export const AccordionList: React.FC<{ items: Array<{ id: string; title: string; content: React.ReactNode; disabled?: boolean }> }> = ({ items }) => (
  <>
    {items.map((item) => (
      <AccordionItem key={item.id} id={item.id} disabled={item.disabled}>
        <AccordionHeader itemId={item.id} disabled={item.disabled}>
          {item.title}
        </AccordionHeader>
        <AccordionContent itemId={item.id}>
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ))}
  </>
);
