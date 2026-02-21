import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Boston-area accelerators, incubators, fellowships, and university programs for early-stage founders.",
};

const typeBadgeColors: Record<string, string> = {
  Accelerator: "bg-blue-500/15 text-blue-400",
  Incubator: "bg-green-500/15 text-green-400",
  Fellowship: "bg-purple-500/15 text-purple-400",
  Lab: "bg-orange-500/15 text-orange-400",
  Fund: "bg-yellow-500/15 text-yellow-400",
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

      {/* Type legend */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-12">
          {Object.entries(typeBadgeColors).map(([type, color]) => (
            <span key={type} className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
              {type}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Programs grid */}
      <section>
        <FadeIn>
          <SectionHeader
            title="All Programs"
            subtitle="Accelerators, incubators, labs, and funds across industries and founder types."
          />
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <FadeIn key={program.name} delay={i * 50}>
              <div className="h-full">
                <Card
                  title={program.name}
                  description={`${program.focus ? `[${program.focus}] ` : ""}${program.description}`}
                  url={program.url}
                  badge={program.type}
                  badgeColor={typeBadgeColors[program.type]}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tips section */}
      <section className="mt-20">
        <FadeIn>
          <div className="bg-surface border border-[#2a2a2a] rounded-xl p-8">
            <h2 className="text-text-primary font-bold text-xl mb-4">How to choose a program</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-text-secondary">
              <div>
                <p className="text-text-primary font-semibold mb-1">Consider equity</p>
                <p>MassChallenge takes zero equity. Most others take 5-10%. Factor this into your decision carefully.</p>
              </div>
              <div>
                <p className="text-text-primary font-semibold mb-1">Match your stage</p>
                <p>University programs (MIT Sandbox, IDEA) are best pre-product. Techstars/MassChallenge want traction.</p>
              </div>
              <div>
                <p className="text-text-primary font-semibold mb-1">Network over curriculum</p>
                <p>The real value is the cohort and alumni network. Ask current participants about the quality of mentors.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
