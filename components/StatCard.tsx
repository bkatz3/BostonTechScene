interface StatCardProps {
  value: string | number;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-surface border border-[#2a2a2a] rounded-xl p-6 text-center">
      <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{value}+</div>
      <div className="text-text-secondary text-sm font-medium">{label}</div>
    </div>
  );
}
