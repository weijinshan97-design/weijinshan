import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark">
      {/* Minimal dark header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-8 lg:px-12 bg-dark/80 backdrop-blur-xl">
        <Link
          href="/#work"
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          ← 返回案例
        </Link>
        <span className="ml-auto text-sm text-white/20 font-medium tracking-tight">
          {siteConfig.nameZh}
        </span>
      </header>
      {children}
    </div>
  );
}
