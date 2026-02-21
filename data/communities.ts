import { Community, Superconnector } from "./types";

export const communities: Community[] = [
  {
    name: "MA AI Coalition",
    description:
      "Statewide coalition accelerating AI innovation and policy in Massachusetts, bringing together startups, enterprises, and academia.",
    url: "https://massaicoalition.com",
    badge: "AI",
  },
  {
    name: "Cambridge Founders Club",
    description:
      "A community for founders based in and around Cambridge, hosting regular events and fostering peer connections across the local startup scene.",
    url: "https://www.cambridgefounders.club/",
    badge: "General",
  },
  {
    name: "Build 617",
    description:
      "Boston's community for builders, makers, and technical founders — connecting the people who are building the next wave of products in the city.",
    url: "https://www.linkedin.com/company/build617/",
    badge: "General",
  },
  {
    name: "Startup Boston",
    description:
      "A curated directory of Boston startup events, communities, and resources for founders and builders across the ecosystem.",
    url: "https://www.startupbos.org/",
    badge: "General",
  },
  {
    name: "Boston New Technology",
    description:
      "Largest tech meetup in Boston with 10,000+ members, hosting monthly meetups showcasing local startups and technology demos.",
    url: "https://www.meetup.com/boston_new_technology/",
    badge: "General",
  },
];

export const superconnectors: Superconnector[] = [
  { name: "Semyon Dukach", role: "Managing Partner, One Way Ventures", url: "https://twitter.com/semyon" },
  { name: "Bijan Sabet", role: "General Partner, Spark Capital" },
  { name: "Katie Rae", role: "CEO & Managing Partner, The Engine" },
  { name: "Dhruv Vasishtha", role: "Founder, Project Common" },
  { name: "Reed Sturtevant", role: "General Partner, The Engine" },
  { name: "Yasmin Razavi", role: "General Partner, Glasswing Ventures" },
  { name: "Saar Gur", role: "General Partner, CRV" },
  { name: "Jeff Bussgang", role: "General Partner, Flybridge Capital" },
  { name: "Simon Swords", role: "Founder, Boston New Technology" },
  { name: "Angus Davis", role: "Serial Entrepreneur & Angel Investor" },
  { name: "Ric Fulop", role: "CEO, Desktop Metal" },
  { name: "Sarah Hodges", role: "Partner, Pillar VC" },
  { name: "Russ Wilcox", role: "Partner, Pillar VC" },
  { name: "Amir Nashat", role: "Managing Partner, Polaris Partners" },
  { name: "David Aronoff", role: "General Partner, Flybridge Capital" },
  { name: "Tim Rowe", role: "Founder & CEO, CIC" },
  { name: "Nina Goodheart", role: "Partner, Accomplice" },
  { name: "TJ Mahony", role: "General Partner, Accomplice" },
  { name: "Matthew Fadden", role: "Partner, Underscore VC" },
  { name: "Scott Friend", role: "Partner, Bain Capital Ventures" },
];
