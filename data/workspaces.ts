import { Workspace } from "./types";

export const workspaces: Workspace[] = [
  // Kendall Square / Cambridge
  {
    name: "Cambridge Innovation Center (CIC)",
    description:
      "The hub of the Boston startup world — 100K+ sqft of flexible workspace, private offices, and labs in the heart of Kendall Square.",
    url: "https://cic.us/cambridge",
    neighborhood: "Kendall Square",
    type: "Coworking",
  },
  {
    name: "LabCentral",
    description:
      "Premier shared lab space for life science and biotech startups directly adjacent to MIT. Highly competitive application process.",
    url: "https://labcentral.org",
    neighborhood: "Kendall Square",
    type: "Lab",
  },
  {
    name: "The Engine",
    description:
      "MIT's tough tech accelerator space providing specialized equipment and lab facilities for deep science startups.",
    url: "https://engine.xyz",
    neighborhood: "Kendall Square",
    type: "Hub",
  },
  {
    name: "WeWork Cambridge",
    description:
      "Flexible coworking and private offices in Kendall Square, ideal for growing startup teams needing scalable space.",
    url: "https://wework.com/buildings/one-broadway--cambridge--MA",
    neighborhood: "Kendall Square",
    type: "Coworking",
  },
  {
    name: "Venture Café Cambridge",
    description:
      "Free Thursday-evening coworking and networking space at CIC — legendary for facilitating unexpected connections.",
    url: "https://venturecafecambridge.org",
    neighborhood: "Kendall Square",
    type: "Hub",
  },

  // Seaport / South Boston
  {
    name: "MassRobotics",
    description:
      "World-leading robotics innovation hub with 60,000+ sqft of R&D space, prototyping equipment, and fabrication facilities.",
    url: "https://massrobotics.org",
    neighborhood: "Seaport",
    type: "Lab",
  },
  {
    name: "Greentown Labs",
    description:
      "North America's largest climatetech incubator with wet lab, electronics lab, and maker space for hardware startups.",
    url: "https://greentownlabs.com",
    neighborhood: "Seaport",
    type: "Incubator",
  },
  {
    name: "WeWork Seaport",
    description:
      "Premium coworking in the Seaport Innovation District with great harbor views and a strong tech startup community.",
    url: "https://wework.com/buildings/51-melcher-st--boston--MA",
    neighborhood: "Seaport",
    type: "Coworking",
  },
  {
    name: "District Hall",
    description:
      "Boston's public innovation space — free to use, designed for collaboration, with events and workshops throughout the week.",
    url: "https://districthallboston.org",
    neighborhood: "Seaport",
    type: "Hub",
  },
  {
    name: "Workbar Seaport",
    description:
      "Local Boston coworking chain with a strong community feel — Seaport location ideal for founders in the innovation district.",
    url: "https://workbar.com/locations/seaport",
    neighborhood: "Seaport",
    type: "Coworking",
  },

  // Back Bay / Fenway
  {
    name: "Workbar Back Bay",
    description:
      "Flagship location of Boston's homegrown coworking chain, with premium amenities and a diverse member community.",
    url: "https://workbar.com/locations/back-bay",
    neighborhood: "Back Bay",
    type: "Coworking",
  },
  {
    name: "WeWork Back Bay",
    description:
      "Flexible workspace in the heart of Back Bay with quick access to transit, restaurants, and the Boston startup community.",
    url: "https://wework.com/buildings/699-boylston-st--boston--MA",
    neighborhood: "Back Bay",
    type: "Coworking",
  },
  {
    name: "Harvard Innovation Labs",
    description:
      "Harvard's pan-university hub in Allston, open to Harvard-affiliated founders with programming, mentorship, and community.",
    url: "https://innovationlabs.harvard.edu",
    neighborhood: "Back Bay",
    type: "Incubator",
  },
  {
    name: "BU Spark! / BUild Lab",
    description:
      "Boston University's innovation space on Commonwealth Ave open to BU student and faculty startup teams.",
    url: "https://bu.edu/spark",
    neighborhood: "Back Bay",
    type: "Lab",
  },

  // Somerville / Davis Square / Union Square
  {
    name: "Workbar Somerville",
    description:
      "Coworking hub in Union Square — rapidly growing startup neighborhood between Cambridge and Boston.",
    url: "https://workbar.com/locations/somerville",
    neighborhood: "Somerville",
    type: "Coworking",
  },
  {
    name: "CIC Boston (Downtown)",
    description:
      "CIC's Downtown Boston location providing flexible coworking and private office space with CIC's signature startup community.",
    url: "https://cic.us/boston",
    neighborhood: "Downtown",
    type: "Coworking",
  },
  {
    name: "Workbar Burlington",
    description:
      "Suburban coworking option for founders north of Boston — great for team members commuting from the suburbs.",
    url: "https://workbar.com/locations/burlington",
    neighborhood: "Suburbs",
    type: "Coworking",
  },
];
