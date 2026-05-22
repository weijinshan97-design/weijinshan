import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-4">
          404
        </p>
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          页面不存在
        </h1>
        <p className="text-base text-muted mb-8">
          你访问的页面可能已被移除或地址输入有误。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg border border-border bg-white text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
