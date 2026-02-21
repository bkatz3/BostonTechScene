import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { communities } from "@/data/communities";
import { eventAggregators } from "@/data/events";

export const metadata: Metadata = {
  title: "Communities & Events",
  description:
    "The best founder communities, professional networks, and places to find events in the Boston startup ecosystem.",
};

const badgeColors: Record<string, string> = {
  AI: "bg-blue-500/15 text-blue-400",
  Founders: "bg-purple-500/15 text-purple-400",
  Coworking: "bg-green-500/15 text-green-400",
  MIT: "bg-red-500/15 text-red-400",
  Meetups: "bg-yellow-500/15 text-yellow-400",
  Climatetech: "bg-emerald-500/15 text-emerald-400",
  Biotech: "bg-pink-500/15 text-pink-400",
  Robotics: "bg-cyan-500/15 text-cyan-400",
  Global: "bg-orange-500/15 text-orange-400",
  "Invite-Only": "bg-violet-500/15 text-violet-400",
  Policy: "bg-slate-500/15 text-slate-400",
  Nonprofit: "bg-teal-500/15 text-teal-400",
  Harvard: "bg-red-600/15 text-red-400",
  Health: "bg-green-600/15 text-green-400",
  BU: "bg-red-500/15 text-red-400",
  Northeastern: "bg-red-400/15 text-red-300",
  Community: "bg-purple-400/15 text-purple-300",
  Women: "bg-pink-400/15 text-pink-300",
  "Co-Founders": "bg-blue-400/15 text-blue-300",
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
        <div className="overflow-hidden rounded-xl border border-[#2a2a2a]">
          {eventAggregators.map((agg, i) => (
            <FadeIn key={agg.name} delay={i * 60}>
              <div className={`flex flex-col sm:flex-row sm:items-center gap-4 p-5 ${i < eventAggregators.length - 1 ? "border-b border-[#2a2a2a]" : ""} bg-surface hover:bg-[#202020] transition-colors`}>
                <div className="sm:w-40 shrink-0">
                  <a
                    href={agg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary font-semibold text-sm hover:text-accent transition-colors"
                  >
                    {agg.name} →
                  </a>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{agg.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Communities grid */}
      <section>
        <FadeIn>
          <SectionHeader
            title="Founder Communities"
            subtitle="Organizations and networks actively building and serving the Boston startup ecosystem."
          />
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {communities.map((community, i) => (
            <FadeIn key={community.name} delay={i * 50}>
              <Card
                title={community.name}
                description={community.description}
                url={community.url}
                badge={community.badge}
                badgeColor={community.badge ? badgeColors[community.badge] : undefined}
              />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
