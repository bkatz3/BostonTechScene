"use client";

import DataTable, { Column } from "@/components/DataTable";
import type { Community } from "@/data/types";

const badgeColors: Record<string, string> = {
  General: "bg-slate-500/15 text-slate-400",
  "Life Sciences": "bg-green-500/15 text-green-400",
  Biotech: "bg-teal-500/15 text-teal-400",
  University: "bg-purple-500/15 text-purple-400",
  AI: "bg-blue-500/15 text-blue-400",
  Robotics: "bg-orange-500/15 text-orange-400",
};

const columns: Column<Community>[] = [
  {
    key: "name",
    label: "Name",
    width: "w-[28%]",
    sortable: true,
    sortValue: (c) => c.name,
    render: (c) => (
      <span className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
        {c.name} →
      </span>
    ),
  },
  {
    key: "badge",
    label: "Category",
    width: "w-[18%]",
    sortable: true,
    sortValue: (c) => c.badge ?? "",
    render: (c) =>
      c.badge ? (
        <span
          className={`mt-0.5 inline-block text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
            badgeColors[c.badge] ?? "bg-slate-500/15 text-slate-400"
          }`}
        >
          {c.badge}
        </span>
      ) : null,
  },
  {
    key: "description",
    label: "Description",
    flex: true,
    render: (c) => (
      <p className="text-text-secondary text-sm leading-relaxed">{c.description}</p>
    ),
  },
];

export default function CommunitiesTable({ communities }: { communities: Community[] }) {
  return (
    <DataTable
      data={communities}
      columns={columns}
      getHref={(c) => c.url}
      />
  );
}
