import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  title: "魏晋山 — 视觉·系统·自动化",
  description:
    "通过视觉、系统与自动化，解决真实工作中的问题。商业视觉设计师，关注效率、流程和设计系统。",
  openGraph: {
    title: "魏晋山 — 视觉·系统·自动化",
    description: "通过视觉、系统与自动化，解决真实工作中的问题。",
    url: "https://jinshan.design",
    siteName: "魏晋山",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@500;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
