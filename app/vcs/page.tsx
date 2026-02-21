import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { vcFirms, angels } from "@/data/vcs";

export const metadata: Metadata = {
  title: "VCs & Investors",
  description:
    "Boston-based venture capital firms and angel investors actively funding early-stage startups.",
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

export default function VCsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {vcFirms.length} VC firms + {angels.length} angels
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            VCs &amp; Investors
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Boston has one of the deepest venture ecosystems outside of Silicon Valley. These are
            the firms and individuals actively writing checks.
          </p>
        </div>
      </FadeIn>

      {/* VC Firms */}
      <section className="mb-20">
        <FadeIn>
          <SectionHeader
            title="Venture Capital Firms"
            subtitle="Boston-based and Boston-active VC firms, from seed through growth stage."
          />
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4">
          {vcFirms.map((firm, i) => (
            <FadeIn key={firm.name} delay={i * 40}>
              <a
                href={firm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-surface border border-[#2a2a2a] rounded-xl p-5 card-hover"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-text-primary font-semibold text-sm">{firm.name}</span>
                    {firm.stage && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${stageColors[firm.stage] ?? "bg-slate-500/15 text-slate-400"}`}>
                        {firm.stage}
                      </span>
                    )}
                    {firm.focus && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#2a2a2a] text-text-secondary">
                        {firm.focus}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{firm.description}</p>
                </div>
                <svg className="w-4 h-4 text-text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Angels */}
      <section>
        <FadeIn>
          <SectionHeader
            title="Angel Investors"
            subtitle="Boston-based angels and operator-investors known for backing early-stage founders."
          />
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {angels.map((angel, i) => (
            <FadeIn key={angel.name} delay={i * 50}>
              <div className="bg-surface border border-[#2a2a2a] rounded-xl p-5 card-hover">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm font-bold shrink-0">
                    {angel.name.charAt(0)}
                  </div>
                  <div>
                    {angel.url ? (
                      <a
                        href={angel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary font-semibold text-sm hover:text-accent transition-colors"
                      >
                        {angel.name}
                      </a>
                    ) : (
                      <p className="text-text-primary font-semibold text-sm">{angel.name}</p>
                    )}
                    <p className="text-text-secondary text-xs mt-1 leading-relaxed">{angel.background}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-20">
        <FadeIn>
          <div className="bg-surface border border-[#2a2a2a] rounded-xl p-8">
            <h2 className="text-text-primary font-bold text-xl mb-4">Getting in front of Boston VCs</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-text-secondary">
              <div>
                <p className="text-text-primary font-semibold mb-1">Warm intros matter most</p>
                <p>Cold emails have low hit rates. Join communities like Underscore Core or Project Common to get warm introductions.</p>
              </div>
              <div>
                <p className="text-text-primary font-semibold mb-1">Office hours are real</p>
                <p>Many Boston VCs like Pillar and Flybridge hold public office hours. Take advantage of these structured access points.</p>
              </div>
              <div>
                <p className="text-text-primary font-semibold mb-1">Show up at events</p>
                <p>Venture Café Thursday at CIC, MassChallenge Demo Day, and Underscore events are all places where founders meet investors naturally.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
