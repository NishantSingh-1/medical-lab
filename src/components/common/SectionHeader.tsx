type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold md:text-3xl text-[var(--color-text)]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}