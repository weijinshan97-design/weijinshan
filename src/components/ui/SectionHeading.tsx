interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-8 h-px bg-border" />
        <span className="text-xs tracking-[0.25em] uppercase text-muted-light font-medium">
          {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
