interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-text-secondary text-base max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}
