import React from "react";
import styles from "./DataTable.module.scss";
import { Table, type TableColumn } from "../Table";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon/Icon";
import { ArrowBack, ArrowForward } from "../Icon/IconSet";
import {
  mergeSxWithStyles,
  combineClassNames,
  type WithSxProps,
} from "../../../utils/sxUtils";

export interface DataTableProps<T> extends WithSxProps {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  size?: "sm" | "md" | "lg";
  compact?: boolean;
  page?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  getRowId?: (row: T, index: number) => string | number;
  selectable?: boolean;
  selectedIds?: Array<string | number>;
  onSelectionChange?: (ids: Array<string | number>) => void;
}

export function DataTable<T>({
  columns,
  data,
  caption,
  page = 1,
  pageSize = 5,
  pageSizeOptions = [5, 10, 25],
  size = "md",
  compact = false,
  onPageChange,
  onPageSizeChange,
  getRowId,
  selectable = true,
  selectedIds,
  onSelectionChange,
  className = "",
  sx,
  style,
}: DataTableProps<T>) {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const [internalPage, setInternalPage] = React.useState(page);
  const [internalPageSize, setInternalPageSize] = React.useState(pageSize);
  const [internalSelection, setInternalSelection] = React.useState<
    Array<string | number>
  >(selectedIds || []);

  React.useEffect(() => setInternalPage(page), [page]);
  React.useEffect(() => setInternalPageSize(pageSize), [pageSize]);
  React.useEffect(() => {
    if (selectedIds) setInternalSelection(selectedIds);
  }, [selectedIds]);

  const start = (internalPage - 1) * internalPageSize;
  const end = Math.min(start + internalPageSize, data.length);
  const pageRows = data.slice(start, end);

  const allIdsOnPage = pageRows.map((row, i) =>
    getRowId ? getRowId(row, start + i) : start + i
  );
  const allChecked =
    allIdsOnPage.length > 0 &&
    allIdsOnPage.every((id) => internalSelection.includes(id));
  const someChecked =
    allIdsOnPage.some((id) => internalSelection.includes(id)) && !allChecked;

  const toggleAll = () => {
    const next = allChecked
      ? internalSelection.filter((id) => !allIdsOnPage.includes(id))
      : Array.from(new Set([...internalSelection, ...allIdsOnPage]));
    setInternalSelection(next);
    onSelectionChange?.(next);
  };

  const toggleOne = (id: string | number) => {
    const next = internalSelection.includes(id)
      ? internalSelection.filter((v) => v !== id)
      : [...internalSelection, id];
    setInternalSelection(next);
    onSelectionChange?.(next);
  };

  // prepend checkbox column if selectable
  const effectiveColumns: TableColumn<T>[] = selectable
    ? [
        {
          key: "__select__",
          header: (
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={toggleAll}
              ariaLabel="Select all rows"
            />
          ),
          render: (_row: T, idx: number) => {
            const row = pageRows[idx] as T;
            const id = getRowId ? getRowId(row, start + idx) : start + idx;
            const checked = internalSelection.includes(id);
            return (
              <Checkbox
                checked={checked}
                onChange={() => toggleOne(id)}
                ariaLabel={`Select row ${id}`}
              />
            );
          },
          width: 48,
          align: "center",
        },
        ...columns,
      ]
    : columns;

  const totalPages = Math.max(1, Math.ceil(data.length / internalPageSize));

  const goPrev = () => {
    const next = Math.max(1, internalPage - 1);
    setInternalPage(next);
    onPageChange?.(next);
  };
  const goNext = () => {
    const next = Math.min(totalPages, internalPage + 1);
    setInternalPage(next);
    onPageChange?.(next);
  };

  const handlePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = Number(e.target.value);
    setInternalPageSize(size);
    setInternalPage(1);
    onPageSizeChange?.(size);
  };

  return (
    <div
      className={combineClassNames(styles.dataTable, sxClassName)}
      style={sxStyle}
    >
      <Table
        columns={effectiveColumns}
        data={pageRows}
        caption={caption}
        variant="basic"
        cellAlign="left"
        size={size}
        compact={compact}
        stickyHeader={false}
      />
      <div className={styles.footer}>
        <div className={styles.rowsPerPage}>
          <span>Rows per page:</span>
          <select
            value={internalPageSize}
            onChange={handlePageSize}
            className={styles.select}
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.pagination}>
          <span>
            {start + 1}–{end} of {data.length}
          </span>
          <button
            className={styles.navBtn}
            onClick={goPrev}
            aria-label="Previous page"
          >
            <Icon icon={ArrowBack} size="md" />
          </button>
          <button
            className={styles.navBtn}
            onClick={goNext}
            aria-label="Next page"
          >
            <Icon icon={ArrowForward} size="md" />
          </button>
        </div>
      </div>
    </div>
  );
}

DataTable.displayName = "DataTable";

export default DataTable;
