import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ProgramsTable from "@/components/ProgramsTable";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Boston-area accelerators, incubators, fellowships, and university programs for early-stage founders.",
};

export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {programs.length} programs listed
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Programs
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            From equity-free accelerators to world-class university labs — these are the programs
            that give Boston founders an unfair advantage.
          </p>
        </div>
      </FadeIn>

      {/* Programs table */}
      <section>
        <FadeIn>
          <SectionHeader
            title="All Programs"
            subtitle="Accelerators, incubators, labs, and funds across industries and founder types."
          />
        </FadeIn>
        <ProgramsTable programs={programs} />
      </section>
    </div>
  );
}
