"use client";

import { aboutData } from "@/data/about";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050508] px-6 py-24 text-white md:px-10 md:py-36 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(191,142,255,0.13),transparent_28%),radial-gradient(circle_at_46%_68%,rgba(95,59,255,0.22),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#bf8eff]/62">
              Contact / Collaboration
            </p>
            <h2 className="display-balance mx-auto mt-7 max-w-[1080px] font-serif text-6xl font-bold leading-[1.08] md:text-9xl">
              LET&apos;S MAKE
              <br />
              IDEAS VISIBLE
            </h2>
            <p className="copy-readable mx-auto mt-8 max-w-[620px] text-base text-white/62">
              如果你正在寻找一个既能做视觉判断，也能理解 AI 产品和交付流程的设计师，我们可以从一个具体问题开始聊。
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Name", aboutData.name, "视觉设计师 / 系统构建者", "#home"],
            ["Phone", aboutData.contact.phone, "微信同号", `tel:${aboutData.contact.phone}`],
            ["Email", aboutData.contact.email, "期待你的邮件", `mailto:${aboutData.contact.email}`],
          ].map(([label, value, desc, href]) => (
            <a
              key={label}
              href={href}
              className="group micro-lift rounded-[34px] border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:border-white/[0.16] hover:bg-white/[0.065]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/32">
                {label}
              </p>
              <p className="mt-8 break-words text-2xl font-semibold leading-tight text-white md:text-3xl">
                {value}
              </p>
              <p className="mt-3 text-sm text-white/55">{desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/files/resume.pdf"
            download="魏晋山--设计作品集--联系18093167205.pdf"
            className="control-breathe rounded-full bg-gradient-to-r from-[#bf8eff] to-[#6366f1] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_36px_rgba(191,142,255,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_56px_rgba(99,102,241,0.3)]"
          >
            下载简历 PDF
          </a>
        </div>
      </div>
    </section>
  );
}
