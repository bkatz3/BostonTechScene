"use client";

import DataTable, { Column } from "@/components/DataTable";
import type { EventAggregator } from "@/data/types";

const columns: Column<EventAggregator>[] = [
  {
    key: "name",
    label: "Name",
    width: "w-[28%]",
    render: (e) => (
      <span className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
        {e.name} →
      </span>
    ),
  },
  {
    key: "description",
    label: "Description",
    flex: true,
    render: (e) => (
      <p className="text-text-secondary text-sm leading-relaxed">{e.description}</p>
    ),
  },
];

export default function EventAggregatorsTable({ aggregators }: { aggregators: EventAggregator[] }) {
  return (
    <DataTable
      data={aggregators}
      columns={columns}
      getHref={(e) => e.url}
    />
  );
}
