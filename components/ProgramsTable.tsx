"use client";

import DataTable, { Column } from "@/components/DataTable";
import type { Program } from "@/data/types";

const typeBadgeColors: Record<string, string> = {
  Accelerator: "bg-blue-500/15 text-blue-400",
  Incubator: "bg-green-500/15 text-green-400",
  Fellowship: "bg-purple-500/15 text-purple-400",
  Lab: "bg-orange-500/15 text-orange-400",
  Fund: "bg-yellow-500/15 text-yellow-400",
};

const columns: Column<Program>[] = [
  {
    key: "name",
    label: "Name",
    width: "w-[24%]",
    sortable: true,
    sortValue: (p) => p.name,
    render: (p) => (
      <span className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
        {p.name} →
      </span>
    ),
  },
  {
    key: "type",
    label: "Type",
    width: "w-[14%]",
    sortable: true,
    sortValue: (p) => p.type,
    render: (p) => (
      <span
        className={`mt-0.5 inline-block text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
          typeBadgeColors[p.type] ?? "bg-slate-500/15 text-slate-400"
        }`}
      >
        {p.type}
      </span>
    ),
  },
  {
    key: "focus",
    label: "Focus",
    width: "w-[16%]",
    render: (p) =>
      p.focus ? (
        <span className="mt-0.5 inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#2a2a2a] text-text-secondary whitespace-nowrap">
          {p.focus}
        </span>
      ) : null,
  },
  {
    key: "description",
    label: "Description",
    flex: true,
    render: (p) => (
      <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
    ),
  },
];

export default function ProgramsTable({ programs }: { programs: Program[] }) {
  return (
    <DataTable
      data={programs}
      columns={columns}
      getHref={(p) => p.url}
      defaultSortKey="name"
      minWidth="700px"
    />
  );
}
