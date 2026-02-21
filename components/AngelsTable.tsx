"use client";

import DataTable, { Column } from "@/components/DataTable";
import type { Angel } from "@/data/types";

const columns: Column<Angel>[] = [
  {
    key: "name",
    label: "Name",
    width: "w-[25%]",
    sortable: true,
    sortValue: (a) => a.name,
    render: (a) => (
      <span className={`text-text-primary font-semibold text-sm ${a.url ? "group-hover:text-accent transition-colors" : ""}`}>
        {a.name}{a.url ? " →" : ""}
      </span>
    ),
  },
  {
    key: "background",
    label: "Background",
    flex: true,
    render: (a) => (
      <p className="text-text-secondary text-sm leading-relaxed">{a.background}</p>
    ),
  },
];

export default function AngelsTable({ angels }: { angels: Angel[] }) {
  return (
    <DataTable
      data={angels}
      columns={columns}
      getHref={(a) => a.url ?? ""}
      defaultSortKey="name"
    />
  );
}
