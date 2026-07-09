"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { worksData } from "@/data/works";
import { Work } from "@/lib/types";
import { FadeIn } from "@/components/ui/FadeIn";

type CaseCopy = {
  claim: string;
  decision: string;
  result: string;
};

const caseCopy: Record<string, CaseCopy> = {
  "wbit-ai-platform": {
    claim: "把 AI 从聊天入口，设计成企业经营任务台。",
    decision:
      "用数字人角色、任务卡和底部输入区承接不同能力水平的用户，让不会写 Prompt 的人也能启动复杂任务。",
    result:
      "财税、金融、园区等场景可以复用同一套工作台逻辑，财务审核工作量下降约 70%。",
  },
  "didi-membership": {
    claim: "让会员等级从装饰图标，变成用户能感知的身份系统。",
    decision:
      "重新组织等级色彩、徽章、权益入口和页面层级，让用户一眼知道自己处在什么阶段、下一步能获得什么。",
    result: "等级感知更清晰，会员页面的浏览深度和进阶意愿同步提升。",
  },
  "xinju-ip": {
    claim: "用 IP 形象给代驾品牌建立记忆点。",
    decision: "从角色设定、三视图、表情动作到 3D 资产库，建立可长期复用的品牌人格资产。",
    result: "IP 在线上线下营销中持续使用，提升品牌识别和内容传播效率。",
  },
  "brand-case-study": {
    claim: "把零散营销视觉，收束成一套品牌表达系统。",
    decision: "统一 VI、会议主视觉和营销模板，把每次传播都纳入同一套视觉规则。",
    result: "品牌一致性从约 40% 提升到 95%，大型峰会视觉获得行业客户认可。",
  },
  "weifengqi-ip": {
    claim: "让理性的 B2B 财税品牌有一个可亲近的表达角色。",
    decision: "围绕智能财税定位设计小微 IP，并扩展表情、节日和场景插画。",
    result: "IP 成为公众号、峰会、产品页面中的统一情感入口，增强品牌亲和力。",
  },
  "marketing-operations": {
    claim: "把高频运营需求，拆成可以快速复用的视觉模板。",
    decision: "按行业和活动类型建立模板库，让运营设计兼顾速度、品牌一致性和转化目标。",
    result: "多场景素材交付更稳定，活动页面点击和转化表现得到提升。",
  },
  "self-driven-design": {
    claim: "把个人实验变成可验证的设计方法。",
    decision: "用 AI 工具、内容运营和数据反馈测试表达方式，让个人项目不只停留在视觉练习。",
    result: "形成从工具效率、内容传播到作品复盘的自驱迭代闭环。",
  },
};

function getCopy(work: Work) {
  return (
    caseCopy[work.slug] ?? {
      claim: work.summaryZh,
      decision: work.approachZh,
      result: work.resultZh,
    }
  );
}

function getStackOffset(index: number, activeIndex: number) {
  let offset = index - activeIndex;
  const half = Math.floor(worksData.length / 2);

  if (offset > half) offset -= worksData.length;
  if (offset < -half) offset += worksData.length;

  return offset;
}

export function SelectedWork() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [flyingSlug, setFlyingSlug] = useState<string | null>(null);
  const [cardGlow, setCardGlow] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const activeWork = worksData[activeIndex];
  const activeCopy = getCopy(activeWork);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const progress = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(worksData.length).padStart(2, "0")}`,
    [activeIndex],
  );

  const openWork = useCallback((work: Work) => {
    sessionStorage.setItem("home-scroll", window.scrollY.toString());
    setFlyingSlug(work.slug);
    window.setTimeout(() => {
      router.push(`/work/${work.slug}`);
    }, 300);
  }, [router]);

  // Touch swipe for mobile
  const touchStart = useRef(0);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        setActiveIndex(
          (prev) => (prev + (diff > 0 ? 1 : -1) + worksData.length) % worksData.length,
        );
      }
    },
    [],
  );

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#000000] px-6 py-24 text-white md:px-10 md:py-36 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(95,59,255,0.22),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(191,142,255,0.13),transparent_28%),linear-gradient(180deg,#000000_0%,#08080d_52%,#000000_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.085] [background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#bf8eff]/62">
                Selected Case Reel
              </p>
              <h2 className="section-display mt-5 max-w-[820px] font-serif text-5xl font-bold text-white md:text-7xl">
                <span className="title-line">作品不是陈列</span>
                <br />
                <span className="title-line">是每一次判断</span>
              </h2>
            </div>
            <p className="copy-readable max-w-[540px] text-base text-white/62 lg:justify-self-end">
              不是做得多的就放上来，而是每一个项目都在回答：当时为什么这么选、最后做对了什么。
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-12 min-h-[620px] overflow-visible md:min-h-[860px] lg:min-h-[760px]">
          <motion.div
            key={activeWork.slug}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-[-8vw] top-2 z-0 text-center font-serif text-[clamp(5.5rem,12vw,13rem)] font-black uppercase leading-none tracking-normal text-white/[0.11] md:top-8"
          >
            {activeWork.titleEn}
          </motion.div>

          <div className="pointer-events-none absolute left-1/2 top-[360px] z-0 h-[420px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,142,255,0.14),rgba(95,59,255,0.1)_42%,transparent_72%)] blur-[58px]" />

          <div
            className={`relative mx-auto max-w-[1180px] ${isMobile ? "h-[540px]" : "h-[590px] [perspective:1800px]"}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {worksData.map((work, index) => {
              const offset = getStackOffset(index, activeIndex);
              const isActive = offset === 0;
              const hidden = Math.abs(offset) > 3;
              const x = offset * 260 - 205;
              const rotate = offset * -5;
              const y = Math.abs(offset) * 18 + (isActive ? 0 : 18);
              const scale = isActive ? 1 : 0.9 - Math.min(Math.abs(offset), 3) * 0.035;
              const isFlying = flyingSlug === work.slug;

              return (
                <motion.div
                  key={work.slug}
                  className={`absolute left-1/2 top-20 ${isMobile ? "w-[88vw] max-w-[410px] -translate-x-1/2" : "w-[410px]"}`}
                  animate={
                    isMobile
                      ? {
                          x: isFlying ? 300 : 0,
                          y: isFlying ? -120 : 0,
                          scale: isFlying ? 1.1 : isActive ? 1 : 0.94,
                          opacity: isFlying ? 0 : isActive ? 1 : 0,
                          filter: isFlying
                            ? "blur(12px)"
                            : isActive
                              ? "blur(0px)"
                              : "blur(4px)",
                        }
                      : {
                          x: isFlying ? 520 : x,
                          y: isFlying ? -160 : y,
                          rotateZ: isFlying ? 10 : rotate,
                          rotateY: isFlying ? -24 : offset * -8,
                          scale: isFlying ? 1.16 : scale,
                          opacity: isFlying ? 0 : hidden ? 0 : isActive ? 1 : 0.92,
                          filter: isFlying
                            ? "grayscale(0%) blur(16px)"
                            : isActive
                              ? "grayscale(0%) blur(0px)"
                              : "grayscale(18%) blur(0.2px)",
                        }
                  }
                  transition={{ type: "spring", stiffness: 86, damping: 23, mass: 0.95 }}
                  style={{ zIndex: isMobile ? (isActive ? 10 : 0) : 20 - Math.abs(offset) }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (isActive) {
                        openWork(work);
                        return;
                      }
                      setActiveIndex(index);
                    }}
                    aria-label={isActive ? `进入${work.titleZh}详情` : `选择${work.titleZh}`}
                    className={`group case-film-card block h-[510px] overflow-hidden rounded-[34px] border bg-[#0d0d12] p-2 shadow-[0_34px_130px_rgba(0,0,0,0.5)] outline-none transition duration-500 ${
                      isActive
                        ? "border-[#bf8eff]/28 shadow-[0_44px_160px_rgba(191,142,255,0.12),0_34px_130px_rgba(0,0,0,0.58)]"
                        : "border-white/[0.1] hover:-translate-y-4 hover:border-white/[0.2]"
                    } w-full text-left`}
                    onMouseMove={
                      isActive
                        ? (e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setCardGlow({
                              x: ((e.clientX - rect.left) / rect.width) * 100,
                              y: ((e.clientY - rect.top) / rect.height) * 100,
                            });
                          }
                        : undefined
                    }
                  >
                    <div className="relative h-full overflow-hidden rounded-[26px] bg-black">
                      <Image
                        src={work.cover}
                        alt={work.titleZh}
                        fill
                        priority={index === 0}
                        sizes="480px"
                        className={`object-cover transition duration-700 group-hover:scale-[1.045] group-hover:opacity-100 group-hover:saturate-100 ${
                          isActive ? "opacity-90 saturate-[0.9]" : "opacity-78 saturate-[0.72]"
                        }`}
                      />
                      {/* Mouse-tracking glow on active card */}
                      {isActive && (
                        <div
                          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle 220px at ${cardGlow.x}% ${cardGlow.y}%, rgba(191,142,255,0.10), transparent 60%)`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(191,142,255,0.16),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.86)_100%)]" />

                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                        <span className="rounded-full border border-white/12 bg-black/30 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/56 backdrop-blur-xl">
                          {work.category}
                        </span>
                        <span className="font-mono text-6xl font-black leading-none text-white/16">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/58">
                          <span>{work.client}</span>
                          <span className="h-px w-8 bg-white/18" />
                          <span>{work.year}</span>
                        </div>
                        <h3 className="cjk-card-title text-3xl font-semibold text-white md:text-4xl">
                          {work.titleZh}
                        </h3>
                        <p className="copy-readable mt-3 line-clamp-2 text-sm text-white/68">
                          {getCopy(work).claim}
                        </p>
                        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/48">
                          {isActive ? "Click to enter" : "Click to select"}
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}

          </div>

          {/* ---- 标签 ---- */}
          <div className="relative mx-auto mt-6 max-w-[1180px]">
            <div className="flex flex-wrap items-center gap-3 rounded-[24px] border border-white/[0.06] bg-white/[0.02] px-5 py-4 backdrop-blur-xl">
                <span className="font-mono text-xs tracking-[0.22em] text-white/40 shrink-0">{progress}</span>
                <span className="h-4 w-px bg-white/10 shrink-0" />
                <div className="flex flex-wrap gap-2">
                {worksData.map((work, index) => (
                  <button
                    key={work.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                      activeIndex === index
                        ? "border-[#bf8eff]/30 bg-[#bf8eff]/12 text-white shadow-[0_0_28px_rgba(191,142,255,0.14)]"
                        : "border-white/10 bg-white/[0.035] text-white/58 hover:border-white/22 hover:text-white/80"
                    }`}
                  >
                    {work.titleZh}
                  </button>
                ))}
                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
