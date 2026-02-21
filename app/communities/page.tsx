import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import CommunitiesTable from "@/components/CommunitiesTable";
import EventAggregatorsTable from "@/components/EventAggregatorsTable";
import { communities } from "@/data/communities";
import { eventAggregators } from "@/data/events";

export const metadata: Metadata = {
  title: "Communities & Events",
  description:
    "The best founder communities, professional networks, and places to find events in the Boston startup ecosystem.",
};

export default function CommunitiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {communities.length} communities listed
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Communities & Events
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Boston&apos;s startup ecosystem runs on relationships. These are the communities where
            they get built, and the best places to find events worth your time.
          </p>
        </div>
      </FadeIn>

      {/* Event aggregators */}
      <section className="mb-20">
        <FadeIn>
          <SectionHeader
            title="Event Aggregators"
            subtitle="The best places to discover Boston startup meetups, networking nights, and community gatherings."
          />
        </FadeIn>
        <EventAggregatorsTable aggregators={eventAggregators} />
      </section>

      {/* Communities table */}
      <section>
        <FadeIn>
          <SectionHeader
            title="Founder Communities"
            subtitle="Organizations and networks actively building and serving the Boston startup ecosystem."
          />
        </FadeIn>
        <CommunitiesTable communities={communities} />
      </section>
    </div>
  );
}
