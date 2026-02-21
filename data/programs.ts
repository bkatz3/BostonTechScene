import { Program } from "./types";

export const programs: Program[] = [
  {
    name: "The Engine",
    description:
      "MIT's 'tough tech' venture fund and accelerator supporting founders working on hard science and engineering breakthroughs with long commercialization timelines.",
    url: "https://engine.xyz",
    type: "Accelerator",
    focus: "Tough Tech",
  },
  {
    name: "MassChallenge",
    description:
      "World's largest startup accelerator with zero equity taken. Boston cohort runs annually, awarding $1M+ in equity-free cash prizes across all industries.",
    url: "https://masschallenge.org/programs-boston",
    type: "Accelerator",
    focus: "All Industries",
  },
  {
    name: "Techstars Boston",
    description:
      "Prestigious 3-month accelerator program offering $120K investment, world-class mentorship, and access to the global Techstars network.",
    url: "https://techstars.com/accelerators/boston",
    type: "Accelerator",
    focus: "All Industries",
  },
  {
    name: "Greentown Labs Incubator",
    description:
      "North America's largest climatetech incubator providing lab space, expert programming, and corporate partnership access for clean energy startups.",
    url: "https://greentownlabs.com/incubator",
    type: "Incubator",
    focus: "Climatetech",
  },
  {
    name: "MassRobotics Startup Program",
    description:
      "Access to world-class robotics R&D space, prototyping equipment, and the global MassRobotics industry network for robotics startups.",
    url: "https://massrobotics.org/membership",
    type: "Incubator",
    focus: "Robotics & AI",
  },
];
