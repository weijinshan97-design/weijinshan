interface TagProps {
  children: string;
  variant?: "outline" | "filled";
}

export function Tag({ children, variant = "outline" }: TagProps) {
  return (
    <span
      className={
        variant === "filled"
          ? "inline-block px-3 py-1 text-[11px] font-medium rounded-md bg-foreground text-white tracking-wide"
          : "inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-md border border-border text-muted tracking-wide"
      }
    >
      {children}
    </span>
  );
}
