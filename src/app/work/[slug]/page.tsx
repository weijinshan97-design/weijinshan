import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { worksData } from "@/data/works";
import { ResultShowcase } from "@/components/ui/ResultShowcase";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return worksData.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: `${work.titleZh} — 魏晋山`,
    description: work.summaryZh,
    openGraph: {
      title: `${work.titleZh} — 魏晋山`,
      description: work.summaryZh,
      url: `https://jinshan.design/work/${work.slug}`,
      type: "article",
    },
  };
}

function WbitDeepDive() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      {/* ═══════════════════════════════════════════════════════════════════
          Hero & Project Overview
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden py-20 md:py-28" style={{ backgroundColor: "rgb(6, 7, 8)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white">
              Wbit<br />
              <span className="text-[#fca039]">企业经营服务智能平台</span>
            </h1>
            <p className="text-lg text-[#e4e2e2] max-w-lg leading-relaxed">
              基于 AI Agent 的企业经营决策平台设计实践，旨在通过智能化的数字分身辅助企业管理者进行全方位的经营决策。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-white/10 text-[#e4e2e2] px-3 py-1 rounded text-xs font-semibold uppercase tracking-[0.1em]">AI Agent</span>
              <span className="bg-white/10 text-[#e4e2e2] px-3 py-1 rounded text-xs font-semibold uppercase tracking-[0.1em]">Enterprise Service</span>
              <span className="bg-white/10 text-[#e4e2e2] px-3 py-1 rounded text-xs font-semibold uppercase tracking-[0.1em]">Desktop Client</span>
              <span className="bg-white/10 text-[#e4e2e2] px-3 py-1 rounded text-xs font-semibold uppercase tracking-[0.1em]">UX / UI Design</span>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-white/50 mb-1 font-semibold uppercase tracking-[0.1em]">Role</p>
                <p className="text-sm font-medium text-white">UX / UI Design</p>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1 font-semibold uppercase tracking-[0.1em]">Timeline</p>
                <p className="text-sm font-medium text-white">2024 - 2025</p>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1 font-semibold uppercase tracking-[0.1em]">Focus</p>
                <p className="text-sm font-medium text-white">Agent Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img alt="Wbit Platform Interface" className="rounded-xl w-full object-cover" src="/images/wbit-hero.png" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          01 Project Background & Goals
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[#fca039] font-bold text-3xl block mb-1">01</span>
            <p className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-[0.1em] mb-1">Project Background & Goals</p>
            <h2 className="text-3xl font-semibold mt-4 mb-4">AI 正在改变企业获取专业服务的方式</h2>
            <p className="text-lg text-[#5f5e5e] max-w-2xl">围绕企业经营服务的核心需求，我们确立了设计目标，通过体验升级构建核心竞争力。</p>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="rounded-2xl border border-[#d9c2b0]/40 overflow-hidden bg-[#f5f3f3]" style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)" }}>
                <div className="px-6 py-4 border-b border-[#d9c2b0]/30">
                  <p className="text-xs text-[#867464] font-bold uppercase tracking-[0.15em]">过去的服务方式</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { icon: "search", text: "税务咨询 — 寻找专家" },
                    { icon: "event", text: "融资咨询 — 预约沟通" },
                    { icon: "folder_open", text: "财务咨询 — 整理资料" },
                    { icon: "groups", text: "销售咨询 — 参加培训" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#d9c2b0]/20">
                      <div className="w-8 h-8 rounded-lg bg-[#efeded] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#867464] text-lg">{item.icon}</span>
                      </div>
                      <span className="text-sm text-[#1b1c1c]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-[#fca039]/30 overflow-hidden bg-[#fca039]/[0.03]" style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)" }}>
                <div className="px-6 py-4 border-b border-[#fca039]/20 bg-[#fca039]/5">
                  <p className="text-xs text-[#fca039] font-bold uppercase tracking-[0.15em]">Wbit 智能方案</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { icon: "auto_awesome", text: "AI 自动分析税务风险" },
                    { icon: "psychology", text: "智能匹配融资方案" },
                    { icon: "summarize", text: "一键生成财务报告" },
                    { icon: "target", text: "AI 推荐精准客户" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#fca039]/20">
                      <div className="w-8 h-8 rounded-lg bg-[#fca039]/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#fca039] text-lg">{item.icon}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#1b1c1c]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#f5f3f3] rounded-full border border-[#d9c2b0]/20">
                <span className="text-[#fca039]">●</span>
                <span className="text-sm font-semibold">从寻找工具，到直接获得结果</span>
                <span className="text-[#fca039]">●</span>
              </div>
            </div>
          </div>

          {/* Project Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "person", title: "建立角色认知", desc: "帮助用户快速理解不同 Agent 的职责边界与能力范围。" },
              { icon: "bolt", title: "降低专业门槛", desc: "将复杂专业知识转化为自然语言交互体验，让企业更容易获得专业服务。" },
              { icon: "verified_user", title: "增强结果可信度", desc: "通过企业画像、风险分析与数据支撑，增强用户对 AI 结果的信任。" },
              { icon: "trending_up", title: "提升经营决策效率", desc: "辅助企业快速进行分析与行动决策，缩短决策流程与提高竞争力。" },
            ].map((goal, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-white/50 hover:-translate-y-1 hover:bg-white/90 transition-all duration-300" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)" }}>
                <div className="bg-[#fca039]/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#fca039] text-2xl">{goal.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{goal.title}</h3>
                <p className="text-sm text-[#5f5e5e] leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          02 Digital Persona Hierarchy
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-[#fca039] font-bold text-3xl block mb-2">02</span>
            <p className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-[0.1em] mb-2">Digital Persona Hierarchy</p>
            <h2 className="text-3xl font-semibold mt-4 mb-4">五大&ldquo;数字员工&rdquo;矩阵</h2>
            <p className="text-lg text-[#5f5e5e] max-w-2xl">我们不仅提供工具，更是通过具备专业推理逻辑的 AI 智能体为企业建立岗位级防御。</p>
          </div>
          {/* Full-width image */}
          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden border border-[#d9c2b0]/20 mb-12">
            <img
              src="/images/wbit-digital-workers.png"
              alt="Wbit 数字人矩阵展示"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", title: "税务数字人", desc: "全面税务风险扫描与政策匹配，自动生成税务体检报告与合规建议。", logic: "逻辑：推理引擎", color: "#fca039" },
              { iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "销售数字人", desc: "预测销售趋势与丢单风险，提供话术支持与策略调整提示，助力业绩增长。", logic: "逻辑：趋势预测", color: "#10b981" },
              { iconPath: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", title: "老板数字人", desc: "自动识别经营异常与机会点，推送预警与战略建议，辅助关键决策。", logic: "逻辑：异常识别", color: "#fca039" },
              { iconPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", title: "财税数字人", desc: "智能票据识别、智能记账与税务计算，人工审核工作量下降 70%。", logic: "逻辑：智能记账", color: "#10b981" },
              { iconPath: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z", title: "信贷数字人", desc: "动态监控供应商价格、交期与稳定性，自动生成采购风险评级。", logic: "逻辑：风险监控", color: "#fca039" },
            ].map((agent, i) => (
              <div key={i} className="group p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 hover:border-[#fca039]/40 hover:bg-white/80 transition-all flex flex-col justify-between h-[320px] relative overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)" }}>
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${agent.color}15` }}>
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: agent.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={agent.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#1b1c1c] mb-3">{agent.title}</h4>
                  <p className="text-sm text-[#5f5e5e] leading-relaxed">{agent.desc}</p>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest border-t border-[#d9c2b0]/30 pt-3 mt-4" style={{ color: `${agent.color}90` }}>{agent.logic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          03 Platform Value & Agent System
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f5f3f3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Platform Value */}
            <div className="lg:w-1/3 lg:sticky lg:top-28 self-start">
              <span className="text-[#fca039] font-bold text-3xl block mb-2">03</span>
              <p className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-[0.1em] mb-2">Platform Value</p>
              <h2 className="text-3xl font-semibold mt-4 mb-6 leading-tight">构建一个可信赖的<br />企业经营决策平台</h2>
              <p className="text-lg text-[#5f5e5e] leading-relaxed mb-8">Wbit 通过多 Agent 协作与企业数据深度分析，为企业提供覆盖经营全链路的智能服务。</p>
              <div className="flex flex-col gap-8">
                {[
                  { icon: "groups", title: "多 Agent 协作", desc: "税务、销售、财务等专业 Agent 协同，为企业提供全方位服务。" },
                  { icon: "database", title: "企业数据智能化", desc: "整合多维数据，构建企业画像与风险评估模型。" },
                  { icon: "cycle", title: "经营决策闭环", desc: "从问题到洞察再到建议，形成完整的智能决策闭环。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#fca039]/10 p-2 rounded-lg h-fit shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[#fca039] text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-[#5f5e5e] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Agent Flow Diagram */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-[#f5f3f3] p-6 md:p-10 rounded-2xl border border-[#d9c2b0]/40" style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.04)" }}>
                <p className="text-center text-xs text-[#5f5e5e] mb-8 font-bold tracking-[0.1em] uppercase opacity-70">Agent 理解与分析流程示意</p>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-1 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-[#d9c2b0]/20 w-36 md:w-44 text-center">
                    <span className="material-symbols-outlined text-[#fca039] text-2xl md:text-3xl">forum</span>
                    <div>
                      <p className="text-xs md:text-sm font-bold">用户提出问题</p>
                      <p className="text-[10px] text-[#5f5e5e]">自然语言输入</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#5f5e5e]/40 text-lg">arrow_downward</span>
                  <div className="relative bg-white p-4 md:p-6 rounded-2xl border-2 border-[#fca039]/40 grid grid-cols-3 gap-2 md:gap-3 shadow-lg max-w-lg w-full">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fca039] text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-[0.2em]">Collaborators</div>
                    {[
                      { icon: "shield", name: "税务" },
                      { icon: "store", name: "销售" },
                      { icon: "account_balance_wallet", name: "信贷" },
                      { icon: "person", name: "老板" },
                      { icon: "verified_user", name: "信务" },
                      { icon: "finance", name: "财务" },
                    ].map((agent, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 bg-[#f5f3f3] p-2 md:p-3 rounded-lg border border-[#d9c2b0]/30">
                        <span className="material-symbols-outlined text-[#5f5e5e] text-sm md:text-base">{agent.icon}</span>
                        <span className="text-[10px] md:text-xs font-bold">{agent.name}</span>
                      </div>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#5f5e5e]/40 text-lg">arrow_downward</span>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full justify-center">
                    <div className="flex flex-col items-center gap-1 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-[#d9c2b0]/20 w-36 md:w-44 text-center">
                      <span className="material-symbols-outlined text-[#fca039] text-2xl md:text-3xl">lightbulb</span>
                      <div>
                        <p className="text-xs md:text-sm font-bold">生成洞察与建议</p>
                        <p className="text-[10px] text-[#5f5e5e]">数据挖掘洞察</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#5f5e5e]/40 hidden md:block">arrow_forward</span>
                    <span className="material-symbols-outlined text-[#5f5e5e]/40 md:hidden">arrow_downward</span>
                    <div className="flex flex-col items-center gap-1 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-[#d9c2b0]/20 w-36 md:w-44 text-center">
                      <span className="material-symbols-outlined text-[#fca039] text-2xl md:text-3xl">check_circle</span>
                      <div>
                        <p className="text-sm font-bold">辅助经营决策</p>
                        <p className="text-[10px] text-[#5f5e5e]">驱动业务增长</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-[9px] text-white bg-[#1b1c1c] px-4 py-1 rounded-full uppercase tracking-[0.2em] font-medium shadow-sm">持续优化与学习 • Continuous Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          04 Design Thinking & Principles
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#1b1c1c] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg fill="none" height="600" viewBox="0 0 600 600" width="600">
            <circle cx="400" cy="200" r="300" stroke="white" strokeWidth="1"></circle>
            <circle cx="400" cy="200" r="220" stroke="white" strokeWidth="1"></circle>
            <circle cx="400" cy="200" r="140" stroke="white" strokeWidth="1"></circle>
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <span className="text-[#fca039] font-bold text-3xl block mb-2">04</span>
            <p className="text-xs text-[#e4e2e2] font-semibold uppercase tracking-[0.1em] mb-2">Design Thinking & Principles</p>
            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold mt-6 leading-tight">
              设计的重点从功能设计<br />
              <span className="text-[#fca039]">走向结果设计</span>
            </h2>
          </div>

          {/* Design Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              { icon: "verified_user", en: "Trustworthy", zh: "可信赖", desc: "通过透明的数据来源与分析过程，建立用户信任，保障决策可靠。" },
              { icon: "bolt", en: "Efficient", zh: "高效", desc: "简化操作步骤，提升响应速度，帮助用户快速获得所需结果。" },
              { icon: "grid_view", en: "Consistent", zh: "一致", desc: "统一的交互语言与视觉规范，确保多场景下体验的一致性。" },
              { icon: "explore", en: "Native", zh: "自然", desc: "遵循系统设计语言，降低学习成本，让体验自然流畅。" },
            ].map((principle, i) => (
              <div key={i} className="p-8 bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/[0.12] transition-all duration-300" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}>
                <div className="w-14 h-14 rounded-xl bg-[#fca039]/10 flex items-center justify-center text-[#fca039] mb-8">
                  <span className="material-symbols-outlined text-2xl">{principle.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{principle.en}</h4>
                <h5 className="text-sm font-bold mb-8 text-white/60">{principle.zh}</h5>
                <p className="text-xs text-white/40 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          05 Agent Experience Design
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-20">
            <span className="text-[#fca039] font-bold text-3xl block mb-2">05</span>
            <p className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-[0.1em] mb-2">Agent Experience Design</p>
            <h2 className="text-3xl font-semibold mt-4 mb-6">Agent 体验设计</h2>
            <p className="text-lg text-[#5f5e5e] max-w-2xl leading-relaxed">从企业用户的真实决策场景出发，构建可信、高效、可理解的 Agent 体验。</p>
          </div>

          {/* Cognitive Path */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold mb-10">从问题到结果的完整体验旅程</h3>
            <div className="hidden md:flex items-center justify-center gap-3">
              {[
                { icon: "chat_bubble", title: "提出问题", desc: "用户通过自然语言提出经营问题" },
                { icon: "explore", title: "理解问题", desc: "Agent 理解意图识别关键要素" },
                { icon: "schedule", title: "分析数据", desc: "调用多源数据进行分析推理" },
                { icon: "description", title: "生成结果", desc: "输出结构化结论与可视化洞察" },
                { icon: "assignment", title: "行动建议", desc: "提供可执行建议支持决策落地", dark: true },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`p-6 rounded-xl flex flex-col items-center text-center w-[180px] hover:-translate-y-1 transition-all duration-300 ${
                      step.dark
                        ? "bg-[#0f0f0f] text-white shadow-lg"
                        : "bg-white/70 backdrop-blur-md border border-white/40"
                    }`}
                    style={step.dark ? {} : { boxShadow: "0 4px 20px -2px rgba(0,0,0,0.05)" }}
                  >
                    <div className={`text-xl mb-3 ${step.dark ? "text-[#fca039]" : "text-[#544436]"}`}>
                      <span className="material-symbols-outlined">{step.icon}</span>
                    </div>
                    <h4 className="font-bold text-sm mb-1 whitespace-nowrap">{step.title}</h4>
                    <p className={`text-[10px] whitespace-nowrap ${step.dark ? "text-white/70" : "text-[#5d5f5f]"}`}>{step.desc}</p>
                  </div>
                  {i < 4 && (
                    <span className="material-symbols-outlined text-[#d9c2b0]/40 text-lg">chevron_right</span>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile: vertical layout */}
            <div className="md:hidden space-y-4">
              {[
                { icon: "chat_bubble", title: "提出问题", desc: "用户通过自然语言提出经营问题" },
                { icon: "explore", title: "理解问题", desc: "Agent 理解意图识别关键要素" },
                { icon: "schedule", title: "分析数据", desc: "调用多源数据进行分析推理" },
                { icon: "description", title: "生成结果", desc: "输出结构化结论与可视化洞察" },
                { icon: "assignment", title: "行动建议", desc: "提供可执行建议支持决策落地", dark: true },
              ].map((step, i) => (
                <div key={i}>
                  <div
                    className={`p-5 rounded-xl flex items-center gap-4 ${
                      step.dark
                        ? "bg-[#0f0f0f] text-white shadow-lg"
                        : "bg-white/70 backdrop-blur-md border border-white/40"
                    }`}
                  >
                    <div className={`text-xl ${step.dark ? "text-[#fca039]" : "text-[#544436]"}`}>
                      <span className="material-symbols-outlined">{step.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{step.title}</h4>
                      <p className={`text-[10px] ${step.dark ? "text-white/70" : "text-[#5d5f5f]"}`}>{step.desc}</p>
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="flex justify-center py-1">
                      <span className="material-symbols-outlined text-[#d9c2b0]/40 text-sm">expand_more</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-[#fca039] font-bold text-sm">清晰的步骤反馈，增强用户掌控感与信任感</p>
            </div>
          </div>

          {/* Trust Path */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold mb-10">在结果之前，先建立信任</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { icon: "business", title: "企业信息", desc: "多维度企业基础信息与经营数据" },
                { icon: "person", title: "企业画像", desc: "构建企业全景画像形成统一认知" },
                { icon: "shield", title: "风险分析", desc: "识别风险点评估风险等级" },
                { icon: "trending_up", title: "数据支撑", desc: "关键数据指标与趋势分析" },
                { icon: "forum", title: "Agent 建议", desc: "基于分析给出专业建议" },
                { icon: "check_circle", title: "用户决策", desc: "辅助用户完成最终决策", dark: true },
              ].map((item, i) => (
                <div key={i} className={`p-5 rounded-xl flex flex-col items-center text-center ${item.dark ? "bg-[#fca039] text-white shadow-lg" : "bg-[#f5f3f3] border border-[#d9c2b0]/20"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${item.dark ? "bg-white/20" : "bg-white text-[#544436]"}`}>
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <h5 className="font-bold text-xs mb-2">{item.title}</h5>
                  <p className={`text-[10px] leading-tight ${item.dark ? "text-white/80" : "text-[#5d5f5f]"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 py-4 border-t border-[#d9c2b0]/20 text-center">
              <p className="text-[#fca039] font-bold text-sm">透明可解释的分析过程，构建可信赖的决策依据</p>
            </div>
          </div>

          {/* Visual System */}
          <div>
            <h3 className="text-2xl font-semibold mb-10">简洁专业的视觉系统</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)" }}>
                <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5d5f5f] mb-8">色彩系统</h5>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { color: "#0f0f0f", hex: "#0F0F0F", name: "主背景色" },
                    { color: "#fca039", hex: "#FCA039", name: "品牌色" },
                    { color: "#1c1c1e", hex: "#1C1C1E", name: "卡片/容器" },
                    { color: "#f5f5f7", hex: "#F5F5F7", name: "分割线/背景" },
                  ].map((c, i) => (
                    <div key={i}>
                      <div className="w-full aspect-[4/3] rounded-xl mb-3 shadow-inner" style={{ backgroundColor: c.color }}></div>
                      <p className="text-xs font-bold">{c.hex}</p>
                      <p className="text-[10px] text-[#5d5f5f]">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)" }}>
                <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5d5f5f] mb-8">字体体系</h5>
                <div className="mb-8">
                  <div className="text-5xl font-bold mb-2">Aa</div>
                  <p className="text-sm font-bold">PingFang SC</p>
                  <p className="text-xs text-[#5d5f5f]">Apple 系统字体</p>
                </div>
                <div className="space-y-3 text-xs font-mono text-[#5d5f5f]">
                  {[
                    { label: "H1 标题", value: "48px" },
                    { label: "H2 标题", value: "32px" },
                    { label: "H3 标题", value: "20px" },
                    { label: "Body 正文", value: "16px" },
                    { label: "Caption 辅助", value: "14px" },
                  ].map((t, i) => (
                    <div key={i} className="flex justify-between border-b border-[#d9c2b0]/10 pb-2">
                      <span>{t.label}</span>
                      <span className="text-[#1b1c1c]">{t.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          06 Final Product
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#fbf9f8]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-20">
            <span className="text-[#fca039] font-bold text-3xl block mb-2">06</span>
            <p className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-[0.1em] mb-2">Final Product</p>
            <h2 className="text-3xl font-semibold mt-4 mb-6">企业级 AI 工作台设计</h2>
            <p className="text-lg text-[#5f5e5e] leading-relaxed">让复杂经营问题获得可执行答案</p>
          </div>

          {/* Unified Entry Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-28">
            <div className="lg:col-span-4 space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-8 bg-[#fca039]"></div>
                <h3 className="text-2xl font-bold">企业经营入口统一化</h3>
              </div>
              <div className="space-y-4 text-[#5f5e5e] leading-relaxed">
                <p>传统企业需要在多个平台、多个服务机构之间反复切换。</p>
                <p>Wbit 将企业经营场景统一到同一个工作台中，通过自然语言交互快速完成分析、查询与决策支持。</p>
              </div>
              <div className="space-y-6 pt-4">
                {[
                  { icon: "view_list", title: "统一入口", desc: "五大专业能力整合到一个工作台", color: "blue" },
                  { icon: "chat", title: "自然交互", desc: "像聊天一样解决经营问题", color: "green" },
                  { icon: "check_circle", title: "高效决策", desc: "快速获得可执行的行动建议", color: "orange" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${f.color === "blue" ? "bg-blue-100 text-blue-600" : f.color === "green" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}>
                      <span className="material-symbols-outlined text-lg">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{f.title}</h4>
                      <p className="text-sm text-[#5f5e5e]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-xl overflow-hidden">
                <img alt="Unified Entry Dashboard UI" className="w-full h-auto object-cover" src="/images/wbit-home-credit.png" style={{ aspectRatio: "1200 / 740" }} />
              </div>
            </div>
          </div>

          {/* Core Scenarios */}
          <div className="mb-28">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-6 bg-[#fca039]"></div>
              <h3 className="text-2xl font-bold">企业经营核心场景</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "shield", title: "企业风险扫描", desc: "快速识别企业经营风险与潜在问题", color: "indigo" },
                { icon: "person", title: "企业画像分析", desc: "建立企业经营画像与成长评估", color: "green" },
                { icon: "account_balance", title: "融资方案匹配", desc: "智能推荐适合企业的融资产品", color: "orange" },
                { icon: "description", title: "政策精准匹配", desc: "快速筛选适用政策与补贴机会", color: "blue" },
              ].map((card, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/50 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color === "indigo" ? "bg-indigo-50 text-indigo-500" : card.color === "green" ? "bg-green-50 text-green-500" : card.color === "orange" ? "bg-orange-50 text-orange-400" : "bg-blue-50 text-blue-500"}`}>
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                  <p className="text-sm text-[#5f5e5e] mb-6">{card.desc}</p>
                  <div className="text-[#fca039] group-hover:translate-x-2 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result Showcase - Carousel */}
          <div className="mb-28">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-1 h-6 bg-[#fca039]"></div>
              <h3 className="text-2xl font-bold">场景结果展示</h3>
            </div>
            <ResultShowcase />
          </div>

          {/* Quote */}
          <div className="bg-white rounded-3xl p-12 lg:p-20 border border-gray-50" style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-10">
                <span className="text-6xl text-[#fca039]/20 font-serif">&ldquo;</span>
                <h3 className="text-4xl lg:text-5xl font-bold leading-tight">从「<span className="text-[#5f5e5e]">寻找答案</span>」到「<span className="text-[#fca039]">获得行动建议</span>」</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 text-[#5f5e5e] text-lg">
                  <p>通过统一的 AI 工作台设计，帮助企业降低信息获取成本，</p>
                  <p>提升经营决策效率，</p>
                  <p>让 AI 真正参与业务流程。</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: "bolt", title: "更快获得信息", desc: "减少信息搜集时间", color: "indigo" },
                    { icon: "target", title: "更快做出决策", desc: "智能分析与建议", color: "green" },
                    { icon: "trending_up", title: "更快推动执行", desc: "行动建议可落地", color: "orange" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#fbf9f8] transition-colors">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === "indigo" ? "bg-indigo-100 text-indigo-500" : item.color === "green" ? "bg-green-100 text-green-500" : "bg-orange-100 text-orange-500"}`}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h5 className="font-bold">{item.title}</h5>
                        <p className="text-sm text-[#5f5e5e]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#f5f3f3] px-6 md:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#fca039]/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#fca039] text-2xl">bolt</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1b1c1c]">让企业<span className="text-[#fca039]">关注经营本身</span>，而不是寻找答案</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) notFound();

  const heroCover = work.heroCover ?? work.cover;
  const isWbit = work.slug === "wbit-ai-platform";

  const insightCards = [
    {
      num: "01",
      label: "Problem",
      title: "问题",
      text: work.problemZh,
    },
    {
      num: "02",
      label: "Approach",
      title: "方法",
      text: work.approachZh,
    },
    {
      num: "03",
      label: "Outcome",
      title: "成果",
      text: work.resultZh,
      accent: true,
    },
  ];

  return (
    <>
      {/* Hero — clean dark header */}
      {!isWbit && (
        <section className="relative bg-[#0a0a0a] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/12" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/12" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-medium">
                {work.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.94] max-w-4xl">
              {work.titleZh}
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/30 leading-relaxed max-w-2xl font-light">
              {work.summaryZh}
            </p>
          </div>
        </section>
      )}

      {/* Content — three sections */}
      {!isWbit && (
        <section className="px-6 md:px-8 lg:px-12 py-12 md:py-20">
          <div className="max-w-[1080px] mx-auto">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
              {insightCards.map((card) => (
                <div key={card.num}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#4035e1]/60">
                      {card.num}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4035e1]/70">
                      {card.label}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-white mb-3">
                    {card.title}
                  </h2>
                  <p className="text-sm text-white/50 leading-7">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Highlights */}
      {!isWbit && work.highlights && work.highlights.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-16">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              设计亮点
            </span>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-[10px] text-white/25 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs tracking-[0.15em] text-white/40 font-medium">
                      {h.label}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {h.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isWbit && <WbitDeepDive />}

      {/* Video */}
      {work.videoUrl && (
        <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目视频
            </span>
            <div className="mt-8">
              {work.slug === "self-driven-design" ? (
                <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="//player.bilibili.com/player.html?bvid=BV1sDVa6vEkR&page=1&high_quality=1&danmaku=0"
                    scrolling="no"
                    frameBorder="no"
                    allowFullScreen={true}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              ) : (
                <video
                  src={work.videoUrl}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto rounded-xl"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {!isWbit && work.images.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-[1080px] mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/15 font-medium">
              项目图片
            </span>
            <div className="mt-8 space-y-8">
              {work.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${work.titleZh} — 项目图片 ${i + 1}`}
                  width={1080}
                  height={720}
                  className="w-full h-auto rounded-xl"
                  sizes="(max-width: 768px) 100vw, 1080px"
                  priority={i === 0}
                />
              ))}
            </div>

            {work.slug === "self-driven-design" && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] px-6 py-7 md:px-9 md:py-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/22">
                      More Self-Driven Design
                    </span>
                    <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
                      内容运营也是设计实验
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-white/42 md:text-right">
                    除了工具化设计与 AI 协作，我也持续在小红书、抖音等内容平台进行自驱运营实验。
                    从选题、封面、标题、发布节奏到数据反馈，把视觉判断转化为可被传播和验证的内容系统。
                  </p>
                </div>
              </div>
            )}

            {work.afterNoteImages && work.afterNoteImages.length > 0 && (
              <div className="mt-8 space-y-8">
                {work.afterNoteImages.map((img, i) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`${work.titleZh} — 延展图片 ${i + 1}`}
                    width={1080}
                    height={720}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 768px) 100vw, 1080px"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="px-6 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[720px] mx-auto">
          <div className="pt-10 border-t border-white/5 flex flex-wrap justify-center gap-2">
            {work.tagsZh.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 text-[11px] rounded-full border border-white/8 text-white/30 transition-all duration-300 hover:border-white/15 hover:text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
