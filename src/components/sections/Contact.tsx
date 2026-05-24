"use client";

import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

function IconUser() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-screen left-1/2 -translate-x-1/2 bg-dark tech-grid"
    >
      <div className="relative z-10 px-6 md:px-8 lg:px-12 py-48 md:py-64">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex items-start justify-between gap-8">
              {/* Left: Name */}
              <div className="flex flex-col items-start gap-3 shrink-0 group cursor-default">
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium transition-colors duration-300 group-hover:text-white/40">
                  <IconUser />
                  Name
                </span>
                <span className="text-2xl md:text-3xl text-white/90 font-medium transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5">
                  {aboutData.name}
                </span>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/45 transition-all duration-300 group-hover:border-white/25 group-hover:text-white/60">
                    视觉设计师
                  </span>
                  <span className="inline-block px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/45 transition-all duration-300 group-hover:border-white/25 group-hover:text-white/60">
                    系统构建者
                  </span>
                </div>
              </div>

              {/* Center: Phone */}
              <div className="flex flex-col items-end gap-3 group cursor-default">
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium transition-colors duration-300 group-hover:text-white/40">
                  <IconPhone />
                  Phone
                </span>
                <a
                  href={`tel:${aboutData.contact.phone}`}
                  className="text-2xl md:text-3xl text-white/90 font-medium hover:text-white transition-all duration-300 group-hover:-translate-y-0.5"
                >
                  {aboutData.contact.phone}
                </a>
                <span className="inline-block px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/45 transition-all duration-300 group-hover:border-white/25 group-hover:text-white/60">
                  微信同号
                </span>
              </div>

              {/* Right: Email */}
              <div className="flex flex-col items-end gap-3 group cursor-default">
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium transition-colors duration-300 group-hover:text-white/40">
                  <IconMail />
                  Email
                </span>
                <a
                  href={`mailto:${aboutData.contact.email}`}
                  className="text-2xl md:text-3xl text-white/90 font-medium hover:text-white transition-all duration-300 group-hover:-translate-y-0.5"
                >
                  {aboutData.contact.email}
                </a>
                <span className="inline-block px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/45 transition-all duration-300 group-hover:border-white/25 group-hover:text-white/60">
                  期待你的邮件
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Download button */}
          <FadeIn delay={0.2}>
            <div className="mt-24 flex justify-center">
              <a
                href="/files/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm text-white/35 hover:text-white/70 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-500"
              >
                下载简历 PDF
                <span className="text-xs opacity-50">↓</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom title */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ height: "clamp(55px, 7.5vw, 110px)" }}
      >
        <div className="max-w-[1200px] mx-auto h-full relative">
          <motion.h2
            initial={{ y: 60, opacity: 0, scaleY: 1.4 }}
            whileInView={{ y: 0, opacity: 1, scaleY: 1.4 }}
            viewport={{ once: false, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 left-0 right-0 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold tracking-normal leading-[1.02] text-white text-center whitespace-nowrap italic animate-float"
          >
            DESIGN BEYOND VISUALS
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
