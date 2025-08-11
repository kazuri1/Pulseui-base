import React from 'react';
export interface AccordionProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
    defaultExpanded?: string[];
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
export interface AccordionItemProps {
    id: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionHeaderProps {
    children: React.ReactNode;
    itemId: string;
    disabled?: boolean;
    className?: string;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export interface AccordionContentProps {
    children: React.ReactNode;
    itemId: string;
    className?: string;
}
export declare const AccordionContent: React.FC<AccordionContentProps>;
export declare const AccordionList: React.FC<{
    items: Array<{
        id: string;
        title: string;
        content: React.ReactNode;
        disabled?: boolean;
    }>;
}>;
