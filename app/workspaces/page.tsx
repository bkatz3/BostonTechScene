import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { workspaces } from "@/data/workspaces";

export const metadata: Metadata = {
  title: "Workspaces",
  description:
    "Coworking spaces, labs, and innovation hubs across Boston and Cambridge, by neighborhood.",
};

const typeColors: Record<string, string> = {
  Coworking: "bg-blue-500/15 text-blue-400",
  Incubator: "bg-green-500/15 text-green-400",
  Lab: "bg-purple-500/15 text-purple-400",
  Office: "bg-orange-500/15 text-orange-400",
  Hub: "bg-cyan-500/15 text-cyan-400",
};

const neighborhoods = ["Kendall Square", "Seaport", "Back Bay", "Somerville", "Downtown", "Suburbs"];

export default function WorkspacesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page header */}
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
            {workspaces.length} workspaces listed
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Workspaces
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Where Boston founders work. From cutting-edge lab space in Kendall Square to community-driven
            coworking in the Seaport. Every neighborhood has its own flavor.
          </p>
        </div>
      </FadeIn>

      {/* Type legend */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-16">
          {Object.entries(typeColors).map(([type, color]) => (
            <span key={type} className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
              {type}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Workspaces by neighborhood */}
      {neighborhoods.map((neighborhood, ni) => {
        const neighborhoodWorkspaces = workspaces.filter((w) => w.neighborhood === neighborhood);
        if (neighborhoodWorkspaces.length === 0) return null;

        const neighborhoodDescriptions: Record<string, string> = {
          "Kendall Square": "The epicenter of Boston's tech and life sciences ecosystem, arguably the densest concentration of innovation per square mile in the world.",
          "Seaport": "Boston's fastest-growing innovation district, home to climatetech, robotics, and a thriving startup community along the waterfront.",
          "Back Bay": "Hub for university-affiliated startups and established tech companies, with great transit access and walkable amenities.",
          "Somerville": "Union Square and Davis Square are quietly becoming Boston's next great startup neighborhood, more affordable, deeply creative.",
          "Downtown": "Central Boston workspaces ideal for founders who need to be close to financial services, legal, and enterprise clients.",
          "Suburbs": "Options for founders and team members commuting from north or west of the city.",
        };

        return (
          <section key={neighborhood} className="mb-20">
            <FadeIn delay={ni * 50}>
              <SectionHeader
                title={neighborhood}
                subtitle={neighborhoodDescriptions[neighborhood]}
              />
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {neighborhoodWorkspaces.map((workspace, i) => (
                <FadeIn key={workspace.name} delay={i * 60}>
                  <Card
                    title={workspace.name}
                    description={workspace.description}
                    url={workspace.url}
                    badge={workspace.type}
                    badgeColor={typeColors[workspace.type]}
                  />
                </FadeIn>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
