import Link from "next/link";

interface QuickNavCardProps {
  href: string;
  title: string;
  description: string;
  count: number;
  icon: string;
}

export default function QuickNavCard({ href, title, description, count, icon }: QuickNavCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface border border-[#2a2a2a] rounded-xl p-6 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-text-secondary text-sm font-medium bg-background px-3 py-1 rounded-full border border-[#2a2a2a]">
          {count}
        </span>
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1">
        Explore
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
