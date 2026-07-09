import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollRestoration } from "@/components/ui/ScrollRestoration";

export const metadata: Metadata = {
  title: "魏晋山 — UI/UX + 视觉设计 · 系统 · 自动化",
  description:
    "通过视觉、系统与自动化，解决真实工作中的问题。UI/UX + 视觉设计师，关注效率、流程和设计系统。",
  openGraph: {
    title: "魏晋山 — UI/UX + 视觉设计 · 系统 · 自动化",
    description: "通过视觉、系统与自动化，解决真实工作中的问题。",
    url: "https://jinshan.design",
    siteName: "魏晋山",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "https://jinshan.design/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "魏晋山 — UI/UX + 视觉设计 · 系统 · 自动化",
    description: "通过视觉、系统与自动化，解决真实工作中的问题。",
    images: ["https://jinshan.design/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.font.im/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollRestoration />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-foreground focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
