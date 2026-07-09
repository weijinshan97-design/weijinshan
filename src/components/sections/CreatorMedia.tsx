"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const platformLinks = [
  {
    name: "小红书",
    handle: "扫码查看主页",
    qr: "/images/creator/xiaohongshu-qr.jpg",
    tone: "图文种草 / 视觉封面 / 内容测试",
  },
  {
    name: "抖音",
    handle: "扫码查看主页",
    qr: "/images/creator/douyin-qr.jpg",
    tone: "短视频节奏 / 漫剧包装 / 账号运营",
  },
];

const videos = [
  {
    title: "开头停留测试",
    meta: "短视频 / 爆款表达 / 节奏剪辑",
    src: "/videos/creator/hit-video.mp4",
    poster: "/images/creator/hit-video-poster.png",
    desc: "用前 3 秒钩子、情绪推进和剪辑节奏，观察用户会不会停下继续看。",
  },
  {
    title: "封面期待建立",
    meta: "漫剧 / 叙事包装 / 账号内容",
    src: "/videos/creator/short-drama-1.mp4",
    poster: "/images/creator/short-drama-1-cover.jpg",
    desc: "用标题感、封面氛围和剧情节点包装，让用户更快判断内容值不值得点开。",
  },
  {
    title: "表达方法沉淀",
    meta: "漫剧 / 内容运营 / 视觉表达",
    src: "/videos/creator/short-drama-2.mp4",
    poster: "/images/creator/short-drama-2-cover.jpg",
    desc: "对同一内容方向做不同包装尝试，把封面、节奏和评论观察沉淀成表达方法。",
  },
];

const mediaStats = [
  {
    value: "6万+",
    label: "单条最高播放",
    desc: "说明选题、封面和前几秒节奏已经能撬动真实流量。",
  },
  {
    value: "800+",
    label: "抖音粉丝",
    desc: "约 1 个月冷启动，持续测试漫剧包装和短视频节奏。",
  },
  {
    value: "200+",
    label: "小红书粉丝",
    desc: "约半个月起号，用封面和笔记表达测试内容种草效率。",
  },
];

export function CreatorMedia() {
  return (
    <section
      id="creator"
      className="relative overflow-hidden bg-[#000000] px-6 py-24 text-white md:px-10 md:py-36 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(191,142,255,0.16),transparent_28%),radial-gradient(circle_at_28%_78%,rgba(95,59,255,0.24),transparent_34%),linear-gradient(180deg,#000000_0%,#08080d_54%,#000000_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[20%] font-serif text-[18rem] font-bold uppercase leading-none text-white/[0.035]">
        MEDIA
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#bf8eff]/62">
                Content Studio
              </p>
              <h2 className="section-display mt-5 max-w-[780px] font-serif text-6xl font-bold md:text-8xl">
                <span className="title-line">用内容平台</span>
                <br />
                <span className="title-line">验证表达能力</span>
              </h2>
            </div>
            <p className="copy-readable max-w-[560px] text-base text-white/62 lg:justify-self-end">
              自媒体不是网站主线，但它能证明我对“注意力、封面、标题、节奏和用户停留”的理解不是停留在理论里，而是在真实平台里跑过。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {mediaStats.map((stat) => (
            <article
              key={stat.label}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(191,142,255,0.12),transparent_34%)] opacity-70" />
              <div className="relative">
                <p className="font-mono text-[3rem] font-black leading-none text-white md:text-[3.6rem]">
                  {stat.value}
                </p>
                <p className="mt-4 text-base font-semibold text-white">{stat.label}</p>
                <p className="mt-3 text-sm leading-7 text-white/58">{stat.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid h-full gap-5 md:grid-cols-3 md:items-stretch">
            {videos.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#0d0d12] p-3 shadow-[0_34px_130px_rgba(0,0,0,0.34)] transition-shadow duration-500 hover:border-white/[0.16] hover:shadow-[0_44px_150px_rgba(191,142,255,0.1),0_34px_130px_rgba(0,0,0,0.42)]"
              >
                <div className="signal-surface relative h-[360px] overflow-hidden rounded-[24px] bg-[#08080d]">
                  <video
                    className="h-full w-full object-cover opacity-86 saturate-[0.9] transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                    src={item.src}
                    poster={item.poster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/28 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/52 backdrop-blur-xl">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#bf8eff]/58">
                    {item.meta}
                  </p>
                  <h3 className="cjk-card-title mt-4 whitespace-nowrap text-[1.35rem] font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="copy-readable mt-3 line-clamp-3 text-sm text-white/60">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="micro-lift relative overflow-hidden rounded-[42px] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(191,142,255,0.12),transparent_34%),radial-gradient(circle_at_84%_88%,rgba(95,59,255,0.18),transparent_36%)]" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#bf8eff]/62">
                Why content matters
              </p>
              <h3 className="cjk-title mt-6 font-serif text-5xl font-bold text-white">
                <span className="title-line">自媒体给我的</span>
                <br />
                <span className="title-line">不是曝光，是判断</span>
              </h3>
              <p className="copy-readable mt-7 text-sm text-white/62">
                做短视频让我更直观地理解用户注意力：一句标题能不能让人停下，一个封面能不能建立期待，一段内容能不能让人看完。这些能力会反过来帮助我做产品介绍、案例叙事和视觉包装。
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {platformLinks.map((item) => (
                  <article
                    key={item.name}
                    className="group micro-lift relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0a0a10]/72 p-4 transition duration-300 hover:border-white/[0.16] hover:bg-white/[0.07]"
                  >
                    <div className="qr-scan-card relative aspect-square overflow-hidden rounded-[20px] border border-white/[0.1] bg-white p-3 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
                      <Image
                        src={item.qr}
                        alt={`${item.name}二维码`}
                        fill
                        sizes="220px"
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-xl font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-xs text-white/34">{item.tone}</p>
                      <p className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/42">
                        {item.handle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
