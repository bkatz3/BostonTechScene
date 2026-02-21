import { VCFirm, Angel } from "./types";

export const vcFirms: VCFirm[] = [
  // Seed
  {
    name: "E14 Fund",
    description: "MIT Media Lab's venture fund investing in transformative technologies emerging from the lab.",
    url: "https://www.e14.vc",
    stage: "Seed",
    focus: "Deep Tech",
  },
  {
    name: "First Star",
    description: "Pre-seed and seed investor backing the earliest stage founders building breakthrough companies.",
    url: "https://firststar.vc",
    stage: "Seed",
    focus: "Generalist",
  },
  {
    name: "Founder Collective",
    description: "Seed-stage fund founded by entrepreneurs, for entrepreneurs, backing ambitious founders early.",
    url: "https://foundercollective.com",
    stage: "Seed",
    focus: "Generalist",
  },
  {
    name: "Innospark",
    description: "Early-stage investor supporting innovative founders building impactful technology companies.",
    url: "https://innospark.vc",
    stage: "Seed",
    focus: "Technology",
  },
  {
    name: "Nextview Ventures",
    description: "Seed-stage VC focused on the everyday economy, backing founders reimagining how people live and work.",
    url: "https://nextview.vc",
    stage: "Seed",
    focus: "Consumer / B2B",
  },
  {
    name: "Offscript",
    description: "Early-stage investor backing founders who are rewriting the rules across technology and culture.",
    url: "https://offscriptvc.com",
    stage: "Seed",
    focus: "Generalist",
  },
  // Seed / Series A
  {
    name: "Pillar VC",
    description: "Community-first early-stage VC that invests in and builds the Boston startup ecosystem.",
    url: "https://pillar.vc",
    stage: "Seed / Series A",
    focus: "Generalist",
  },
  {
    name: "Underscore VC",
    description: "Community-powered VC investing in early-stage software companies with its Core peer network.",
    url: "https://underscore.vc",
    stage: "Seed / Series A",
    focus: "Software",
  },
  // Early
  {
    name: "Flybridge Capital Partners",
    description: "Early-stage generalist VC with deep Boston roots, known for founder-friendly approach.",
    url: "https://flybridge.com",
    stage: "Early",
    focus: "Generalist",
  },
  {
    name: "Glasswing Ventures",
    description: "AI and frontier tech VC investing at the intersection of AI, security, and enterprise.",
    url: "https://glasswing.vc",
    stage: "Early",
    focus: "AI / Security",
  },
  {
    name: "Hyperplane",
    description: "Early-stage VC investing in AI-native companies building the next generation of intelligent software.",
    url: "https://hyperplane.vc",
    stage: "Early",
    focus: "AI",
  },
  {
    name: "Link Ventures",
    description: "Boston-based venture firm investing in early-stage technology companies with strong network effects.",
    url: "https://linkventures.com",
    stage: "Early",
    focus: "Technology",
  },
  // Multi
  {
    name: "Alumni Ventures",
    description: "One of the most active VC firms in the US, connecting alumni investors to diversified venture portfolios.",
    url: "https://www.av.vc",
    stage: "Multi",
    focus: "Generalist",
  },
  {
    name: "Matrix",
    description: "Multi-stage venture firm with a long track record backing enterprise software and consumer companies.",
    url: "https://matrixpartners.com",
    stage: "Multi",
    focus: "Enterprise / Consumer",
  },
];

export const angels: Angel[] = [
  { name: "Angus Davis", background: "Founder of Swipely (acquired by Upserve), serial entrepreneur" },
  { name: "Bob Mason", background: "Co-founder of ITA Software (acquired by Google)" },
  { name: "Dan Slagen", background: "CMO-turned-angel, former HubSpot and Alignable" },
  { name: "David Cancel", background: "Founder of Drift, serial entrepreneur and author" },
  { name: "Dharmesh Shah", background: "Co-founder & CTO of HubSpot" },
  { name: "Eric Paley", background: "Partner at Founder Collective, former startup CEO" },
  { name: "Jay Batson", background: "Co-founder of Acquia, open-source and SaaS veteran" },
  { name: "Maia Heymann", background: "Former VC turned angel, focus on diverse founders" },
  { name: "Michael Skok", background: "General Partner Unstructured Ventures, former North Bridge" },
  { name: "Ryan Moore", background: "Partner at Underscore VC, former operator" },
  { name: "Semyon Dukach", background: "Managing Partner One Way Ventures, former MIT AI Lab" },
  { name: "Wendy Lea", background: "Serial CEO and investor, community-focused founder support" },
];
