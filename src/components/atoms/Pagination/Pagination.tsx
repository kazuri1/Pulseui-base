import React from "react";
import styles from "./Pagination.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { Icon } from "../Icon";
import { ArrowBack, ArrowForward, MoreHoriz } from "../Icon/IconSet";

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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  boundaryCount = 1,
  size = "md",
  showFirstLast = true,
  showPrevNext = true,
  disabled = false,
  onPageChange,
  onFirstPage,
  onLastPage,
  onPreviousPage,
  onNextPage,
  id,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const paginationClasses = combineClassNames(
    styles.pagination,
    styles[`size-${size}`],
    disabled && styles.disabled,
    sxClassName
  );

  const handlePageClick = (page: number) => {
    if (!disabled && onPageChange && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleFirstPage = () => {
    if (!disabled && onFirstPage) {
      onFirstPage();
    } else if (!disabled && onPageChange) {
      onPageChange(1);
    }
  };

  const handleLastPage = () => {
    if (!disabled && onLastPage) {
      onLastPage();
    } else if (!disabled && onPageChange) {
      onPageChange(totalPages);
    }
  };

  const handlePreviousPage = () => {
    if (!disabled && onPreviousPage) {
      onPreviousPage();
    } else if (!disabled && onPageChange && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!disabled && onNextPage) {
      onNextPage();
    } else if (!disabled && onPageChange && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const startPages = [];
    const endPages = [];

    // Add boundary pages at the start
    for (let i = 1; i <= Math.min(boundaryCount, totalPages); i++) {
      startPages.push(i);
    }

    // Add boundary pages at the end
    for (let i = Math.max(1, totalPages - boundaryCount + 1); i <= totalPages; i++) {
      if (i > boundaryCount) {
        endPages.push(i);
      }
    }

    // Add sibling pages around current page
    const siblingStart = Math.max(
      boundaryCount + 1,
      currentPage - siblingCount
    );
    const siblingEnd = Math.min(
      totalPages - boundaryCount,
      currentPage + siblingCount
    );

    const siblingPages = [];
    for (let i = siblingStart; i <= siblingEnd; i++) {
      if (i > boundaryCount && i < totalPages - boundaryCount + 1) {
        siblingPages.push(i);
      }
    }

    // Combine all pages
    pages.push(...startPages);

    if (siblingStart > boundaryCount + 1) {
      pages.push("...");
    }

    pages.push(...siblingPages);

    if (siblingEnd < totalPages - boundaryCount) {
      pages.push("...");
    }

    pages.push(...endPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={paginationClasses} style={sxStyle} id={id} role="navigation" aria-label="Pagination">
      <div className={styles.container}>
        {showFirstLast && (
          <button
            className={combineClassNames(
              styles.navButton,
              styles.firstButton,
              currentPage === 1 && styles.active
            )}
            onClick={handleFirstPage}
            disabled={disabled || currentPage === 1}
            aria-label="Go to first page"
            type="button"
                     >
             <Icon icon={ArrowBack} />
             <Icon icon={ArrowBack} />
           </button>
        )}

        {showPrevNext && (
          <button
            className={combineClassNames(
              styles.navButton,
              styles.prevButton
            )}
            onClick={handlePreviousPage}
            disabled={disabled || currentPage === 1}
            aria-label="Go to previous page"
            type="button"
                     >
             <Icon icon={ArrowBack} />
           </button>
        )}

        <div className={styles.pageNumbers}>
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                  <Icon icon={MoreHoriz} />
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                className={combineClassNames(
                  styles.pageButton,
                  isActive && styles.active
                )}
                onClick={() => handlePageClick(pageNumber)}
                disabled={disabled}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
                type="button"
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {showPrevNext && (
          <button
            className={combineClassNames(
              styles.navButton,
              styles.nextButton
            )}
            onClick={handleNextPage}
            disabled={disabled || currentPage === totalPages}
            aria-label="Go to next page"
            type="button"
          >
            <Icon icon={ArrowForward} />
          </button>
        )}

        {showFirstLast && (
          <button
            className={combineClassNames(
              styles.navButton,
              styles.lastButton,
              currentPage === totalPages && styles.active
            )}
            onClick={handleLastPage}
            disabled={disabled || currentPage === totalPages}
            aria-label="Go to last page"
            type="button"
          >
            <Icon icon={ArrowForward} />
            <Icon icon={ArrowForward} />
          </button>
        )}
      </div>
    </nav>
  );
};

Pagination.displayName = "Pagination";

export default Pagination; 