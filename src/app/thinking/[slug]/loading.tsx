export default function ThinkingLoading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.15),transparent_70%)] blur-[60px]" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#bf8eff]/60 border-r-[#bf8eff]/30" />
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-b-[#6366f1]/40 border-l-[#6366f1]/20"
            style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
          />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/30">
          Loading article
        </span>
      </div>
    </div>
  );
}
