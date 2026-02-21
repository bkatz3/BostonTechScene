"use client";

import { useState } from "react";
import type { Community } from "@/data/types";

const badgeColors: Record<string, string> = {
  General: "bg-slate-500/15 text-slate-400",
  "Life Sciences": "bg-green-500/15 text-green-400",
  Biotech: "bg-teal-500/15 text-teal-400",
  University: "bg-purple-500/15 text-purple-400",
  AI: "bg-blue-500/15 text-blue-400",
  Robotics: "bg-orange-500/15 text-orange-400",
};

type SortKey = "name" | "badge";
type SortDir = "asc" | "desc";

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
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

export default function CommunitiesTable({ communities }: { communities: Community[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const sorted = [...communities].sort((a, b) => {
    const aVal = sortKey === "name" ? a.name : (a.badge ?? "");
    const bVal = sortKey === "name" ? b.name : (b.badge ?? "");
    return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  return (
    <div className="overflow-x-auto rounded-xl border border-[#2a2a2a]">
      <div className="min-w-[640px]">
        {/* Header row */}
        <div className="flex items-center px-5 py-3 bg-[#141414] border-b border-[#2a2a2a]">
          <button
            onClick={() => handleSort("name")}
            className="w-[28%] shrink-0 flex items-center text-left text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
          >
            Name <SortIcon active={sortKey === "name"} dir={sortDir} />
          </button>
          <button
            onClick={() => handleSort("badge")}
            className="w-[18%] shrink-0 flex items-center text-left text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
          >
            Category <SortIcon active={sortKey === "badge"} dir={sortDir} />
          </button>
          <span className="flex-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Description
          </span>
        </div>

        {/* Rows */}
        {sorted.map((community, i) => (
          <a
            key={community.name}
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-start px-5 py-4 ring-inset hover:ring-1 hover:ring-accent/50 hover:z-10 ${
              i < sorted.length - 1 ? "border-b border-[#2a2a2a]" : ""
            } bg-surface hover:bg-[#222222] transition-colors cursor-pointer`}
          >
            <div className="w-[28%] shrink-0 pr-4">
              <span className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                {community.name} →
              </span>
            </div>
            <div className="w-[18%] shrink-0 pr-4 pt-0.5">
              {community.badge && (
                <span
                  className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
                    badgeColors[community.badge] ?? "bg-slate-500/15 text-slate-400"
                  }`}
                >
                  {community.badge}
                </span>
              )}
            </div>
            <p className="flex-1 text-text-secondary text-sm leading-relaxed">{community.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
