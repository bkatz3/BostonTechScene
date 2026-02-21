import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import VCFirmsTable from "@/components/VCFirmsTable";
import { vcFirms } from "@/data/vcs";

export const metadata: Metadata = {
  title: "VCs & Investors",
  description:
    "Boston-based venture capital firms and angel investors actively funding early-stage startups.",
};

export default function VCsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {vcFirms.length} VC firms
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
        <VCFirmsTable firms={vcFirms} />
      </section>

    </div>
  );
}
