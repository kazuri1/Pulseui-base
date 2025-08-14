import React from 'react';
import type { WithSxProps } from '../../../utils/sxUtils';
export interface AccordionProps extends WithSxProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
    defaultExpanded?: string[];
    size?: 'sm' | 'md' | 'lg';
}
export declare const Accordion: React.FC<AccordionProps>;
export interface AccordionItemProps extends WithSxProps {
    id: string;
    children: React.ReactNode;
    disabled?: boolean;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionHeaderProps extends WithSxProps {
    children: React.ReactNode;
    itemId: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export interface AccordionContentProps extends WithSxProps {
    children: React.ReactNode;
    itemId: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
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
