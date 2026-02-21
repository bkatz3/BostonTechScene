interface CardProps {
  title: string;
  description: string;
  url: string;
  badge?: string;
  badgeColor?: string;
}

export default function Card({ title, description, url, badge, badgeColor = "bg-accent/15 text-accent" }: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface border border-[#2a2a2a] rounded-xl p-5 card-hover"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-text-primary font-semibold text-base leading-snug">{title}</h3>
        {badge && (
          <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      <div className="mt-4 text-accent text-xs font-medium flex items-center gap-1">
        Visit site
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}
