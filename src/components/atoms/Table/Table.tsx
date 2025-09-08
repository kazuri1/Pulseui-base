import React from "react";
import styles from "./Table.module.scss";
import {
  mergeSxWithStyles,
  combineClassNames,
  type WithSxProps,
} from "../../../utils/sxUtils";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export type TableVariant = "basic" | "striped" | "bordered";
export type TableSize = "sm" | "md" | "lg";

export interface TableColumn<T> {
  key: keyof T | string;
  header: React.ReactNode;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  align?: "left" | "center" | "right";
  width?: number | string;
}

export interface TableProps<T = Record<string, unknown>> extends WithSxProps {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  variant?: TableVariant;
  size?: TableSize;
  compact?: boolean;
  stickyHeader?: boolean;
  zebra?: boolean; // alias for striped
  className?: string;
  getRowKey?: (row: T, rowIndex: number) => string | number;
  /** When true, stack rows as cards on small screens */
  responsiveStack?: boolean;
  /** Default text alignment for all cells unless overridden by column */
  cellAlign?: "left" | "center" | "right";
}

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  variant = "basic",
  size = "md",
  compact = false,
  stickyHeader = false,
  zebra,
  className = "",
  getRowKey,
  sx,
  style,
  cellAlign = "left",
}: TableProps<T>) {
  const { isMobile } = useBreakpoint();
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const tableClasses = combineClassNames(
    styles.table,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`tableAlign-${cellAlign}`],
    (compact || size === "sm") && styles.compact,
    (zebra || variant === "striped") && styles.striped,
    stickyHeader && styles.stickyHeader,
    sxClassName
  );

  return (
    <div
      className={combineClassNames(
        styles.wrapper,
        isMobile && styles.responsiveStack
      )}
      style={sxStyle}
    >
      <table className={tableClasses} role="table">
        <thead className={styles.thead}>
          <tr>
            {columns.map((col, index) => (
              <th
                key={String(col.key) + index}
                className={combineClassNames(
                  styles.th,
                  col.align && styles[`align-${col.align}`]
                )}
                style={{ width: col.width }}
                scope="col"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((row, rowIndex) => (
            <tr key={String(getRowKey ? getRowKey(row, rowIndex) : rowIndex)}>
              {columns.map((col, colIndex) => (
                <td
                  key={`${String(col.key)}-${colIndex}`}
                  className={combineClassNames(
                    styles.td,
                    col.align && styles[`align-${col.align}`]
                  )}
                >
                  {isMobile && (
                    <span className={styles.cellLabel}>{col.header}</span>
                  )}
                  <span>
                    {col.render
                      ? col.render(row, rowIndex)
                      : row[col.key as keyof T] as React.ReactNode}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = "Table";

export default Table;
