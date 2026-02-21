"use client";

import DataTable, { Column } from "@/components/DataTable";
import type { VCFirm } from "@/data/types";

const stageOrder: Record<string, number> = {
  "Seed": 0,
  "Seed / Series A": 1,
  "Early": 2,
  "Early / Growth": 3,
  "Expansion": 4,
  "Growth": 5,
  "Multi": 6,
};

const stageColors: Record<string, string> = {
  "Seed": "bg-green-500/15 text-green-400",
  "Seed / Series A": "bg-green-500/15 text-green-400",
  "Early": "bg-blue-500/15 text-blue-400",
  "Early / Growth": "bg-blue-500/15 text-blue-400",
  "Multi": "bg-purple-500/15 text-purple-400",
  "Expansion": "bg-orange-500/15 text-orange-400",
  "Growth": "bg-amber-500/15 text-amber-400",
};

const columns: Column<VCFirm>[] = [
  {
    key: "name",
    label: "Firm",
    width: "w-[20%]",
    sortable: true,
    sortValue: (f) => f.name,
    render: (f) => (
      <span className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
        {f.name} →
      </span>
    ),
  },
  {
    key: "stage",
    label: "Stage",
    width: "w-[18%]",
    sortable: true,
    sortValue: (f) => stageOrder[f.stage ?? ""] ?? 99,
    render: (f) =>
      f.stage ? (
        <span
          className={`mt-0.5 inline-block text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
            stageColors[f.stage] ?? "bg-slate-500/15 text-slate-400"
          }`}
        >
          {f.stage}
        </span>
      ) : null,
  },
  {
    key: "focus",
    label: "Focus",
    width: "w-[24%]",
    render: (f) =>
      f.focus ? (
        <span className="mt-0.5 inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#2a2a2a] text-text-secondary whitespace-nowrap">
          {f.focus}
        </span>
      ) : null,
  },
  {
    key: "description",
    label: "Description",
    flex: true,
    render: (f) => (
      <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
    ),
  },
];

export default function VCFirmsTable({ firms }: { firms: VCFirm[] }) {
  return (
    <DataTable
      data={firms}
      columns={columns}
      getHref={(f) => f.url}
      defaultSortKey="stage"
      minWidth="700px"
    />
  );
}
