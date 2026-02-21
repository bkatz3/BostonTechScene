import { EventAggregator, AnnualEvent } from "./types";

export const eventAggregators: EventAggregator[] = [
  {
    name: "Luma",
    description:
      "The go-to calendar for Boston tech events. Search 'Boston startup' or 'Boston tech' to find the most active community events, meetups, and networking nights.",
    url: "https://lu.ma/boston",
  },
  {
    name: "BostInno",
    description:
      "American City Business Journals' Boston tech coverage includes a comprehensive events calendar for local startup community happenings.",
    url: "https://bizjournals.com/boston/bizwomen/news/bostinno",
  },
  {
    name: "VentureFizz",
    description:
      "Boston's startup job board also curates a strong events calendar focused on founder and tech professional networking.",
    url: "https://venturefizz.com/events",
  },
  {
    name: "Eventbrite Boston Tech",
    description:
      "Search 'Boston startup' or 'Boston entrepreneur' for a steady stream of pitch nights, founder dinners, and skill-building workshops.",
    url: "https://eventbrite.com/d/ma--boston/startup/",
  },
  {
    name: "MassTLC Events",
    description:
      "Massachusetts Technology Leadership Council hosts policy briefings, executive roundtables, and the annual Innovation Awards.",
    url: "https://masstlc.org/events",
  },
];

export const annualEvents: AnnualEvent[] = [
  {
    name: "Boston Startup Week",
    month: "January",
    monthNum: 1,
    description:
      "Week-long celebration of Boston's startup ecosystem with panels, workshops, networking events, and founder showcases across the city.",
    url: "https://bostonstartupweek.com",
  },
  {
    name: "Boston Fintech Week",
    month: "February",
    monthNum: 2,
    description:
      "Annual gathering of fintech founders, investors, and executives exploring the future of financial technology in Boston.",
    url: "https://bostonfintechweek.com",
  },
  {
    name: "MassBio Annual Meeting",
    month: "April",
    monthNum: 4,
    description:
      "The life sciences industry's premier annual gathering in Massachusetts, featuring keynotes, panels, and networking for biotech and pharma leaders.",
    url: "https://massbio.org/annual-meeting",
  },
  {
    name: "Boston Marathon Innovation Week",
    month: "April",
    monthNum: 4,
    description:
      "Startup and innovation events coinciding with Marathon Week, including founder runs, pitch events, and investor meetups.",
    url: "https://lu.ma/boston",
  },
  {
    name: "Greentown Labs Climatetech Summit",
    month: "May",
    monthNum: 5,
    description:
      "Annual summit bringing together climatetech founders, investors, and corporate partners at North America's largest climatetech incubator.",
    url: "https://greentownlabs.com/summit",
  },
  {
    name: "MIT Commencement Innovation Week",
    month: "June",
    monthNum: 6,
    description:
      "Around MIT Commencement, a burst of demo days, hackathons, and alumni-founder events across Cambridge.",
    url: "https://mit.edu",
  },
  {
    name: "MIT delta v Demo Day",
    month: "August",
    monthNum: 8,
    description:
      "Showcase of MIT's summer accelerator cohort — some of the most technically ambitious student-founded companies in the country.",
    url: "https://entrepreneurship.mit.edu/delta-v",
  },
  {
    name: "MassRobotics Forum",
    month: "September",
    monthNum: 9,
    description:
      "Annual robotics and AI showcase featuring cutting-edge demos, investor meetings, and industry partnership opportunities.",
    url: "https://massrobotics.org/forum",
  },
  {
    name: "MIT EmTech",
    month: "October",
    monthNum: 10,
    description:
      "MIT Technology Review's flagship conference on emerging technology, featuring leading researchers, founders, and futurists.",
    url: "https://technologyreview.com/events/emtech",
  },
  {
    name: "HUBweek",
    month: "October",
    monthNum: 10,
    description:
      "Boston's week-long festival at the intersection of art, science, and technology — a city-wide celebration of innovation.",
    url: "https://hubweek.org",
  },
  {
    name: "MassChallenge Demo Day",
    month: "October",
    monthNum: 10,
    description:
      "Culminating event of MassChallenge's annual accelerator program, where top startups pitch for $1M+ in equity-free prizes.",
    url: "https://masschallenge.org/programs-boston",
  },
  {
    name: "Boston VC and Angels Summit",
    month: "November",
    monthNum: 11,
    description:
      "Annual gathering bringing together Boston's investor community — VCs, angels, family offices — with emerging founders.",
    url: "https://lu.ma/boston",
  },
  {
    name: "Underscore Core Summit",
    month: "November",
    monthNum: 11,
    description:
      "Annual invite-only gathering of Underscore's Core community of founders and investors in the Boston ecosystem.",
    url: "https://underscore.vc",
  },
  {
    name: "New England Venture Summit",
    month: "December",
    monthNum: 12,
    description:
      "Year-end gathering connecting early-stage New England startups with regional and national investors.",
    url: "https://lu.ma/boston",
  },
];
