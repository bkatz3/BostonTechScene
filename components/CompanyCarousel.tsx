const companies = [
  "WHOOP",
  "Klaviyo",
  "HubSpot",
  "Toast",
  "DraftKings",
  "iRobot",
  "Suno",
  "HYBRD",
  "Formlabs",
  "Jellyfish",
  "Circle",
  "Hi Marley",
  "Reservoir",
  "Vertex Pharmaceuticals",
  "Lila Sciences",
  "Akamai Technologies",
];

const shuffled = [...companies].sort(() => Math.random() - 0.5);
const items = [...shuffled, ...shuffled];

export default function CompanyCarousel() {
  return (
    <div className="relative z-10 pb-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-text-secondary/50 font-medium mb-5">
        where great companies are built
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="marquee-track flex items-center">
          {items.map((company, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-10 text-text-secondary/40 font-semibold text-base tracking-tight hover:text-text-secondary/80 transition-colors cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
