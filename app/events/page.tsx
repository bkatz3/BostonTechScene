import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { eventAggregators, annualEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Where to find Boston startup events — aggregators, weekly meetups, and the annual conferences worth blocking your calendar for.",
};

const monthColors: Record<number, string> = {
  1: "bg-blue-500/15 text-blue-400",
  2: "bg-purple-500/15 text-purple-400",
  3: "bg-green-500/15 text-green-400",
  4: "bg-yellow-500/15 text-yellow-400",
  5: "bg-emerald-500/15 text-emerald-400",
  6: "bg-orange-500/15 text-orange-400",
  7: "bg-red-500/15 text-red-400",
  8: "bg-pink-500/15 text-pink-400",
  9: "bg-cyan-500/15 text-cyan-400",
  10: "bg-violet-500/15 text-violet-400",
  11: "bg-amber-500/15 text-amber-400",
  12: "bg-teal-500/15 text-teal-400",
};

const sortedEvents = [...annualEvents].sort((a, b) => a.monthNum - b.monthNum);

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {annualEvents.length} annual events + {eventAggregators.length} aggregators
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Events
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Boston&apos;s event calendar is dense. Here&apos;s where to find the best meetups and which
            annual conferences are worth blocking your calendar for.
          </p>
        </div>
      </FadeIn>

      {/* Event aggregators */}
      <section className="mb-20">
        <FadeIn>
          <SectionHeader
            title="Where to Find Events"
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

      {/* Annual conferences */}
      <section>
        <FadeIn>
          <SectionHeader
            title="Annual Conferences & Events"
            subtitle="The marquee events on Boston's startup calendar, sorted by month."
          />
        </FadeIn>
        <div className="space-y-4">
          {sortedEvents.map((event, i) => (
            <FadeIn key={event.name} delay={i * 50}>
              <div className="bg-surface border border-[#2a2a2a] rounded-xl p-5 card-hover flex gap-5">
                <div className="shrink-0 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold ${monthColors[event.monthNum]}`}>
                    {event.month.toUpperCase().slice(0, 3)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary font-semibold text-sm hover:text-accent transition-colors"
                    >
                      {event.name}
                    </a>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
