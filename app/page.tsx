import GradientOrbs from "@/components/GradientOrbs";
import CompanyCarousel from "@/components/CompanyCarousel";
import StatCard from "@/components/StatCard";
import QuickNavCard from "@/components/QuickNavCard";
import FadeIn from "@/components/FadeIn";
import { communities } from "@/data/communities";
import { annualEvents } from "@/data/events";
import { programs } from "@/data/programs";
import { vcFirms } from "@/data/vcs";
import { workspaces } from "@/data/workspaces";

const quickNavItems = [
  {
    href: "/communities",
    title: "Communities",
    description: "Founder networks, professional groups, and the connectors who make introductions happen.",
    icon: "🤝",
  },
  {
    href: "/events",
    title: "Events",
    description: "Where to find meetups, conferences, and annual gatherings worth your time.",
    icon: "📅",
  },
  {
    href: "/programs",
    title: "Programs",
    description: "Accelerators, incubators, and university programs to launch your company.",
    icon: "🚀",
  },
  {
    href: "/vcs",
    title: "VCs",
    description: "Boston-based venture capital firms and angels actively writing checks.",
    icon: "💼",
  },
  {
    href: "/workspaces",
    title: "Workspaces",
    description: "Coworking spaces, labs, and innovation hubs by neighborhood.",
    icon: "🏢",
  },
];

const whyBostonPoints = [
  {
    title: "World-Class Research Institutions",
    body: "MIT, Harvard, Northeastern, Tufts, BU — Boston has more top-ranked universities per square mile than anywhere on Earth. This creates a constant pipeline of breakthrough research and exceptional technical talent.",
  },
  {
    title: "Dominant in Life Sciences",
    body: "Kendall Square is the life sciences capital of the world. Boston is home to more biotech and pharma companies than any other region, anchored by institutions like Broad Institute, Brigham & Women's, and MGH.",
  },
  {
    title: "Deep Venture Capital Ecosystem",
    body: "Boston VCs have backed some of the most important companies in history. With 25+ active firms and a dense angel network, founders can access capital from pre-seed through growth without leaving the city.",
  },
  {
    title: "Rising Tech & AI Hub",
    body: "From MassRobotics to the MA AI Coalition, Boston is building a reputation as a serious hub for hard tech, robotics, and applied AI — with the technical talent to back it up.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
        <GradientOrbs />
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center -mt-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
                🦞 The Founder&apos;s Guide to Boston
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-[1.1] tracking-tight text-balance">
                The Starter Guide to{" "}
                <span className="text-accent">Boston</span>{" "}
                for Founders
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                The curated, no-fluff resource to help
                you tap into its communities, capital, programs, and more.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/communities"
                  className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-blue-500 transition-colors"
                >
                  Explore the ecosystem
                </a>
                <a
                  href="mailto:ben@hybrd.app"
                  className="px-6 py-3 rounded-xl bg-surface border border-[#2a2a2a] text-text-primary font-semibold hover:border-accent/40 transition-colors"
                >
                  Contribute a resource
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
        <CompanyCarousel />
      </section>


      {/* Why Boston */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Why Boston?</h2>
              <p className="text-text-secondary max-w-2xl">
                New York gets the press. Silicon Valley gets the mythology. But Boston quietly produces some of
                the most important companies in the world.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyBostonPoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 80}>
                <div className="bg-surface border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-text-primary font-semibold text-base mb-2">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Explore the guide</h2>
              <p className="text-text-secondary max-w-xl">
                Five sections covering everything you need to plug into the Boston ecosystem.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickNavItems.map((item, i) => {
              const counts: Record<string, number> = {
                "/communities": communities.length,
                "/events": annualEvents.length,
                "/programs": programs.length,
                "/vcs": vcFirms.length,
                "/workspaces": workspaces.length,
              };
              return (
                <FadeIn key={item.href} delay={i * 80}>
                  <QuickNavCard {...item} count={counts[item.href]} />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
