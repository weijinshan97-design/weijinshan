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

  const bgs = [
    "/images/works/cap1.png",
    "/images/works/5.jpg",
    "/images/works/8.jpg",
  ];

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
      className="w-screen relative left-1/2 -translate-x-1/2 mt-[6vh] bg-dark overflow-hidden"
    >
      {/* Background images */}
      <div className="absolute inset-0 bg-dark z-0" />
      {bgs.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${src})` }}
          animate={{
            clipPath:
              hoveredCap === i
                ? "inset(0% 0% 0% 0% round 0px)"
                : "inset(50% 50% 50% 50% round 0px)",
            opacity: hoveredCap === i ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}
      <div className="absolute inset-0 bg-dark/80 z-0" />

      {/* Content */}
      <motion.div
        style={{ y: bgParallax }}
        className="relative z-10 px-6 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col">
            {items.map((item, i) => (
              <motion.div
                key={item.en}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px 0px 0px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group cursor-pointer pt-8 lg:pt-10"
                onMouseEnter={() => setHoveredCap(i)}
                onMouseLeave={() => setHoveredCap(null)}
                onClick={() => {
                  const el = document.getElementById(item.to);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`text-[10px] font-mono shrink-0 transition-colors duration-300 ${
                      hoveredCap !== null && hoveredCap !== i
                        ? "text-white/10"
                        : "text-white/20"
                    }`}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h4
                    className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                      hoveredCap !== null && hoveredCap !== i
                        ? "text-white/30"
                        : "text-white"
                    }`}
                  >
                    {item.zh}
                    <span
                      className={`text-xs md:text-sm font-normal ml-2 tracking-normal transition-colors duration-300 ${
                        hoveredCap !== null && hoveredCap !== i
                          ? "text-white/12"
                          : "text-white/25"
                      }`}
                    >
                      {item.en}
                    </span>
                  </h4>
                  <p className="text-xs md:text-sm text-white/55 ml-auto text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 whitespace-nowrap">
                    {item.desc}
                  </p>
                </div>
                <div
                  className={`mt-6 h-px transition-colors duration-300 ${
                    hoveredCap !== null && hoveredCap !== i
                      ? "bg-white/5"
                      : "bg-white/10"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
