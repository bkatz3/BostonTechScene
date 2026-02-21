"use client";

import { useState, type ReactNode } from "react";

export interface Column<T> {
  key: string;
  label: string;
  /** Tailwind width class, e.g. "w-[28%]". Omit if flex: true. */
  width?: string;
  /** If true, column takes remaining space (flex-1). Use for the last column. */
  flex?: boolean;
  sortable?: boolean;
  sortValue?: (item: T) => string;
  render: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  getHref: (item: T) => string;
  defaultSortKey?: string;
  defaultSortDir?: "asc" | "desc";
  /** Minimum width before horizontal scroll kicks in. Defaults to "640px". */
  minWidth?: string;
}

function SortIcon({ active, dir }: { active: boolean; dir: "asc" | "desc" }) {
  return (
    <span className={`ml-1 inline-flex flex-col gap-[2px] transition-opacity ${active ? "opacity-100" : "opacity-30"}`}>
      <svg width="8" height="8" viewBox="0 0 8 8" className={dir === "asc" && active ? "text-accent" : "text-text-secondary"}>
        <path d="M4 1L7 6H1L4 1Z" fill="currentColor" />
      </svg>
      <svg width="8" height="8" viewBox="0 0 8 8" className={dir === "desc" && active ? "text-accent" : "text-text-secondary"}>
        <path d="M4 7L1 2H7L4 7Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function DataTable<T>({
  data,
  columns,
  getHref,
  defaultSortKey,
  defaultSortDir = "asc",
  minWidth = "640px",
}: DataTableProps<T>) {
  const firstSortable = columns.find((c) => c.sortable);
  const [sortKey, setSortKey] = useState<string>(defaultSortKey ?? firstSortable?.key ?? "");
  const [sortDir, setSortDir] = useState<"asc" | "desc">(defaultSortDir);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const activeCol = columns.find((c) => c.key === sortKey);

  const sorted = [...data].sort((a, b) => {
    if (!activeCol?.sortValue) return 0;
    const aVal = activeCol.sortValue(a);
    const bVal = activeCol.sortValue(b);
    return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  return (
    <div className="overflow-x-auto rounded-xl border border-[#2a2a2a]">
      <div style={{ minWidth }}>
        {/* Header */}
        <div className="flex items-center px-5 py-3 bg-[#141414] border-b border-[#2a2a2a]">
          {columns.map((col) => {
            const sizeClass = col.flex ? "flex-1" : `${col.width} shrink-0`;
            return col.sortable ? (
              <button
                key={col.key}
                onClick={() => handleSort(col.key)}
                className={`${sizeClass} flex items-center text-left text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors pr-4`}
              >
                {col.label} <SortIcon active={sortKey === col.key} dir={sortDir} />
              </button>
            ) : (
              <span
                key={col.key}
                className={`${sizeClass} text-xs font-semibold uppercase tracking-wider text-text-secondary`}
              >
                {col.label}
              </span>
            );
          })}
        </div>

        {/* Rows */}
        {sorted.map((item, i) => (
          <a
            key={getHref(item)}
            href={getHref(item)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-start px-5 py-4 ring-inset hover:ring-1 hover:ring-accent/50 hover:z-10 ${
              i < sorted.length - 1 ? "border-b border-[#2a2a2a]" : ""
            } bg-surface hover:bg-[#222222] transition-colors`}
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className={col.flex ? "flex-1" : `${col.width} shrink-0 pr-4`}
              >
                {col.render(item)}
              </div>
            ))}
          </a>
        ))}
      </div>
    </div>
  );
}
