"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CapabilitiesNav() {
  const capRef = useRef<HTMLDivElement>(null);
  const [hoveredCap, setHoveredCap] = useState<number | null>(null);

  const { scrollYProgress: capScroll } = useScroll({
    target: capRef,
    offset: ["start end", "end start"],
  });

  const bgParallax = useTransform(capScroll, [0, 1], ["8%", "-8%"]);

  const items = [
    {
      en: "VISUAL DESIGN",
      zh: "商业视觉设计",
      desc: "8 年跨行业执行经验，涵盖游戏、出行、财税，建立品牌规范与 VI 系统。",
      to: "work",
    },
    {
      en: "DESIGN AUTOMATION",
      zh: "设计自动化",
      desc: "开发插件、搭组件库、建标准模板，把重复劳动省下来做判断。",
      to: "systems",
    },
    {
      en: "SYSTEMS THINKING",
      zh: "系统思维 & 问题推动",
      desc: "不只看单点需求，关注流程瓶颈和协作摩擦，推动问题从发现到落地。",
      to: "thinking",
    },
  ];

  return (
    <section
      ref={capRef}
      className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-[#070808]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(214,139,56,0.18),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(45,74,62,0.28),transparent_32%),linear-gradient(180deg,#070808_0%,#0c0f0f_100%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark/45 shadow-[0_0_42px_rgba(214,139,56,0.07),0_0_96px_rgba(45,74,62,0.08)] blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: bgParallax }}
        className="relative z-10 px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-18"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/34">
                Capability Map
              </p>
              <h3 className="mt-5 font-serif text-2xl md:text-5xl font-bold leading-[1.02] tracking-normal text-white">
                从视觉执行到系统判断
              </h3>
              <p className="mt-3 md:mt-5 max-w-sm text-xs md:text-sm leading-5 md:leading-7 text-white/44">
                三条能力线共同支撑后面的案例：视觉经验负责表达，自动化负责效率，系统思维负责把问题推进到落地。
              </p>
              <div className="mt-5 md:mt-8 grid max-w-sm grid-cols-3 gap-2 md:gap-3">
                {["Visual", "AI Flow", "System"].map((label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/[0.045] px-2 py-2 md:px-3 md:py-3 text-center text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-white/45"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2 md:gap-3">
              {items.map((item, i) => (
                <motion.button
                  key={item.en}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px 0px 0px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`group rounded-2xl border p-4 md:p-6 text-left transition-all duration-500 ${
                    hoveredCap === i
                      ? "border-[#d68b38]/24 bg-white/[0.075] shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                      : hoveredCap !== null
                        ? "border-white/7 bg-white/[0.028] opacity-55"
                        : "border-white/10 bg-white/[0.045]"
                  }`}
                  onMouseEnter={() => setHoveredCap(i)}
                  onMouseLeave={() => setHoveredCap(null)}
                  onClick={() => {
                    const el = document.getElementById(item.to);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="flex items-start gap-3 md:gap-5">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        hoveredCap === i ? "text-[#d68b38]/70" : "text-white/24"
                      }`}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-0.5 md:gap-1 md:flex-row md:items-baseline md:justify-between md:gap-5">
                        <h4 className="text-base md:text-2xl font-semibold tracking-normal text-white">
                          {item.zh}
                        </h4>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-white/28">
                          {item.en}
                        </span>
                      </div>
                      <p className="mt-2 md:mt-3 max-w-2xl text-xs md:text-sm leading-5 md:leading-6 text-white/50">
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className={`mt-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 md:inline-flex ${
                        hoveredCap === i
                          ? "translate-x-0 border-[#d68b38]/24 text-[#d68b38]/70"
                          : "translate-x-2 border-white/10 text-white/22"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
