import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import VCFirmsTable from "@/components/VCFirmsTable";
import AngelsTable from "@/components/AngelsTable";
import { vcFirms, angels } from "@/data/vcs";

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
        <VCFirmsTable firms={vcFirms} />
      </section>

      {/* Angels */}
      <section>
        <FadeIn>
          <SectionHeader
            title="Angel Investors"
            subtitle="Boston-based angels and operator-investors known for backing early-stage founders."
          />
        </FadeIn>
        <AngelsTable angels={angels} />
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
