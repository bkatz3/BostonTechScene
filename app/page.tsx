import GradientOrbs from "@/components/GradientOrbs";
import CompanyCarousel from "@/components/CompanyCarousel";
import QuickNavCard from "@/components/QuickNavCard";
import FadeIn from "@/components/FadeIn";
import { communities } from "@/data/communities";
import { programs } from "@/data/programs";
import { vcFirms } from "@/data/vcs";
const quickNavItems = [
  {
    href: "/communities",
    title: "Communities & Events",
    description: "Founder networks, professional groups, and the best places to find events worth your time.",
    icon: "🤝",
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
];

const whyBostonStats = [
  {
    number: "Top 3",
    label: "U.S. AI Research Hub",
    body: "Boston ranks among the top AI research ecosystems globally, anchored by MIT, Harvard, and industry labs.",
    source: "Stanford AI Index / CBRE",
  },
  {
    number: "#1",
    label: "U.S. Robotics Cluster",
    body: "Anchored by MIT CSAIL and Boston Dynamics, Greater Boston is one of the world's leading robotics hubs.",
    source: "CBRE / MassRobotics",
  },
  {
    number: "#1",
    label: "U.S. Biotech Ecosystem",
    body: "Greater Boston leads the U.S. in biopharma venture funding, lab space, and therapeutic startups.",
    source: "MassBio / CBRE / PitchBook",
  },
  {
    number: "18",
    label: "Unicorn startups based & founded here",
    body: "Unicorns ranging across biotech, AI, and fintech, with more in the pipeline.",
    source: "StartupBlink / Failory",
  },
  {
    number: "$7.5B+",
    label: "VC raised by Boston companies in 2024",
    body: "Top 5 VC capital deployment city in the U.S. 30% of all U.S. biopharma capital flows here.",
    source: "MassBio 2024",
  },
  {
    number: "TOP 5",
    label: "Global Startup Ecosystem",
    body: "Boston ranks #3 in the U.S. and #5 globally, one of the most important startup cities on Earth.",
    source: "Startup Genome 2025",
  },
  {
    number: "2nd",
    label: "Highest return efficiency in the U.S.",
    body: "Boston ranks #2 in the U.S. by return efficiency, outperforming NYC, LA, and Seattle. Only the Bay Area scores higher.",
    source: "PitchBook / Startups Magazine",
  },
  {
    number: "50+",
    label: "Accelerators & incubators",
    body: "Including The Engine, Greentown Labs, and more. Pre-seed deal sizes are on the rise.",
    source: "Startup Genome",
  },
  {
    number: "Elite Talent",
    label: "For producing funded founders",
    body: "MIT and Harvard rank #2 and #3 globally. HBS alumni have founded more unicorns than any other MBA program.",
    source: "Crunchbase 2024",
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
                Curated by Local Founders
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-[1.1] tracking-tight text-balance">
                The Builder&apos;s Guide to{" "}
                <span className="text-accent">Boston</span>{" "}
                {/* for Founders */}
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                The curated resource to help
                you tap into Boston&apos;s startup communities, capital, programs, and more.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#explore-the-guide"
                  className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-blue-500 transition-colors"
                >
                  Explore the ecosystem
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfB1YUnyy0D_kv6hzOVjOIzlyiinNVa7V9rePFcR5nrK9nOjQ/viewform?usp=dialog"
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
                Boston is one of the greatest startup ecosystems in the world, and the data proves it.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyBostonStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 70} className="h-full">
                <div className="group relative h-full bg-surface border border-[#2a2a2a] rounded-xl p-6 hover:border-accent/30 transition-colors overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-bold text-accent tracking-tight mb-1 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-text-primary font-semibold text-sm mb-2">{stat.label}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{stat.body}</p>
                    <div className="mt-3 text-[11px] text-text-secondary/50 font-medium uppercase tracking-wide">{stat.source}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section id="explore-the-guide" className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Explore the Ecosystem</h2>
              <p className="text-text-secondary max-w-xl">
                Three sections covering everything you need to plug into the Boston ecosystem.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickNavItems.map((item, i) => {
              const counts: Record<string, number> = {
                "/communities": communities.length,
                "/programs": programs.length,
                "/vcs": vcFirms.length,
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
