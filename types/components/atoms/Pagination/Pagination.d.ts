import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface PaginationProps extends WithSxProps {
    /** Current page number (1-based) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Number of pages to show around current page */
    siblingCount?: number;
    /** Number of pages to show at the beginning and end */
    boundaryCount?: number;
    /** Size of the pagination component */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show first/last page buttons */
    showFirstLast?: boolean;
    /** Whether to show previous/next buttons */
    showPrevNext?: boolean;
    /** Whether the pagination is disabled */
    disabled?: boolean;
    /** Callback when page changes */
    onPageChange?: (page: number) => void;
    /** Callback when first page is clicked */
    onFirstPage?: () => void;
    /** Callback when last page is clicked */
    onLastPage?: () => void;
    /** Callback when previous page is clicked */
    onPreviousPage?: () => void;
    /** Callback when next page is clicked */
    onNextPage?: () => void;
    /** Unique identifier */
    id?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
