import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { worksData } from "@/data/works";

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
    <>
      {/* ── SECTION 01 ── 概念引入：数字智能的涌现 */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#131313]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc081]/12 blur-[180px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc081]/8 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#ffc081]/70">Section 01</span>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">The Manifesto: Emergence of Digital Intelligence</h2>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">企业AI就用Wbit</h1>
            <div className="relative mt-16 w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-[#4035e1]/8 blur-[60px] animate-glow-purple" />
              <div className="relative z-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d0d] shadow-[0_40px_120px_rgba(255,152,0,0.15)]">
                <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff665e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#efb64c]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#51bd73]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">AI Controller</span>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01]">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffc081]/10 ring-1 ring-[#ffc081]/20">
                        <span className="text-2xl font-bold text-[#ffc081]/60">AI</span>
                      </div>
                      <p className="text-xs text-white/35">AI Controller Component</p>
                      <p className="mt-1 text-[10px] text-white/25">1:1 精确渲染 / 请替换为实际组件截图</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#f29a57]/70">Project: Breeze Enterprise AI (V2.0)</p>
              <p className="text-lg leading-8 text-white/65 font-light md:text-xl">从"支配工具"到"人机协同"，重构企业级工作流的智能涌现。</p>
              <p className="text-sm leading-7 text-white/40 font-light">From Tool Dominance to Human-AI Co-pilot: Restructuring the Emergence of Enterprise Workflows.</p>
              <div className="mt-8 grid grid-cols-4 gap-4 text-center">
                {[
                  { value: "+16%", label: "财税准确率提升" },
                  { value: "5", label: "AI 智能体" },
                  { value: "5", label: "数字员工" },
                  { value: "70%", label: "人工审核下降" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="font-mono text-2xl font-bold text-[#f29a57]/80 md:text-3xl">{s.value}</span>
                    <p className="mt-1 text-xs text-white/35">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research & Insights Section (研究与调研) ── */}
      <section className="py-32 bg-[#131313] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,152,0,0.03)] to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="mb-20 space-y-4">
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">User-Centered Design</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">深刻洞察：不同维度的"焦灼"</h2>
            <p className="text-[#dbc2ad] max-w-2xl">我们通过对 50+ 家小微企业访谈，提炼出三类典型决策者的核心驱动力与痛点，并将其映射为 AI 功能点。</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Persona 1 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#ffc081]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">总经理 (CEO)</h4>
                  <span className="text-xs text-[#ffc081]">决策质量与透明度</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">核心任务</div>
                  <p className="text-sm text-[#e5e2e1]">实时掌握集团全景风险，评估 AI 转型对利润的实际增量。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffb4ab]/60 uppercase mb-2 font-bold tracking-widest">痛点问题</div>
                  <p className="text-sm text-[#dbc2ad] italic">&ldquo;我看到的报表总是上个月的，风险总是爆发了才知道。&rdquo;</p>
                </div>
              </div>
            </div>
            {/* Persona 2 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#ffc081]/10 border border-[#ffc081]/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#ffc081]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">财务总监 (CFO)</h4>
                  <span className="text-xs text-[#ffc081]">合规边界与自动化</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">核心任务</div>
                  <p className="text-sm text-[#e5e2e1]">将千万级的报表核对交给 AI，确保在政策动态变化下实现极速申报。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffb4ab]/60 uppercase mb-2 font-bold tracking-widest">痛点问题</div>
                  <p className="text-sm text-[#dbc2ad] italic">&ldquo;政策变动比我翻书还快，我最怕审计时发现三年前的窟窿。&rdquo;</p>
                </div>
              </div>
            </div>
            {/* Persona 3 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#ffc081]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">业务负责人</h4>
                  <span className="text-xs text-[#ffc081]">流程敏捷与业务自洽</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">核心任务</div>
                  <p className="text-sm text-[#e5e2e1]">在不精通财务的前提下，确保业务活动预算合规并能即时获批。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffb4ab]/60 uppercase mb-2 font-bold tracking-widest">痛点问题</div>
                  <p className="text-sm text-[#dbc2ad] italic">&ldquo;财务流程就是业务的刹车片，我想要一个实时能过的绿灯。&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
          {/* Solution Mapping Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1c1b1b]">
                <tr>
                  <th className="p-6 text-xs uppercase tracking-widest text-[#dbc2ad] border-b border-white/10">业务场景</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-[#dbc2ad] border-b border-white/10">传统工作流</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-[#ffc081] border-b border-white/10">Wbit AI 智慧方案</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-6 text-sm font-medium text-[#e5e2e1]">研发加计扣除</td>
                  <td className="p-6 text-sm text-[#dbc2ad]">人工收集工时单，依赖会计主观判断</td>
                  <td className="p-6 text-sm text-[#e5e2e1]">检索增强生成 (RAG) 自动匹配合规附件，智能体 (Agent) 逻辑判定研发属性</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium text-[#e5e2e1]">供应商信用扫描</td>
                  <td className="p-6 text-sm text-[#dbc2ad]">定期批量拉取征信，无法感知突发风险</td>
                  <td className="p-6 text-sm text-[#e5e2e1]">24/7 全网主体风险感知，实时推送交易阻断指令</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium text-[#e5e2e1]">多地区税政解读</td>
                  <td className="p-6 text-sm text-[#dbc2ad]">外聘咨询公司，反馈周期 3-5 天</td>
                  <td className="p-6 text-sm text-[#e5e2e1]">向量库实时更新，秒级生成针对性税务方案建议</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Product Ecosystem Section (产品生态) ── */}
      <section className="py-32 bg-[#0e0e0e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-xl space-y-4">
              <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Product Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">五大&ldquo;数字员工&rdquo;矩阵</h2>
              <p className="text-[#dbc2ad]">我们不仅提供工具，更是通过具备专业推理逻辑 (Reasoning Logic) 的 AI 智能体 (Agent) 为企业建立岗位级防御。</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", title: "决策助手", desc: "利用思维链 (CoT) 技术，将宏大经营目标拆解为可落地的财税指标建议。", logic: "逻辑：推理引擎", color: "#ffc081" },
              { iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "合规专家", desc: "基于检索增强生成 (RAG) 检索最新国家及地方性税收法律，秒级输出合规判定结论。", logic: "逻辑：法规范向量 RAG", color: "#7ee37c" },
              { iconPath: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", title: "采购专家", desc: "自动化三单匹配逻辑，关联供应商全息信用库，杜绝虚开发票风险。", logic: "逻辑：图谱分析", color: "#ffc081" },
              { iconPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", title: "收入分析师", desc: "基于历史回款模型，预测现金流缺口并自动触发融资申请建议。", logic: "逻辑：时间序列预测", color: "#7ee37c" },
              { iconPath: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z", title: "资金看板", desc: "跨行跨主体资金实时归集可视化，异常波动秒级响应与多端告警。", logic: "逻辑：事件驱动触发", color: "#ffc081" },
            ].map((agent, i) => (
              <div key={i} className="group p-8 bg-[#1c1b1b] rounded-[32px] border border-white/5 hover:border-[#ffc081]/40 transition-all flex flex-col justify-between h-[360px] relative overflow-hidden">
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${agent.color}15` }}>
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: agent.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={agent.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#e5e2e1] mb-3">{agent.title}</h4>
                  <p className="text-sm text-[#dbc2ad] leading-relaxed">{agent.desc}</p>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-4" style={{ color: `${agent.color}90` }}>{agent.logic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Experience Section (核心体验) ── */}
      <section className="py-32 relative overflow-hidden bg-[#131313]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Core Experience</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">从&ldquo;指令&rdquo;到&ldquo;对话&rdquo;<br/>交互范式的跃迁</h2>
                <p className="text-[#dbc2ad] max-w-lg leading-relaxed">
                  我们设计了一套 <strong className="text-[#e5e2e1]">CUI (对话式界面)</strong> 与传统 <strong className="text-[#e5e2e1]">GUI</strong> 深度融合的界面。用户不再需要学习复杂的菜单层级，而是直接通过对话触发后台复杂的 API 编排。
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { num: "01", title: "智能语义路由 (Semantic Router)", desc: "系统自动解析提问意图，在万千财税规则中精确定位到负责该领域的 AI 智能体助手，实现毫秒级响应。" },
                  { num: "02", title: "可解释性 AI 链路 (Explainable AI)", desc: "为了解决金融风控的信任问题，每一个结论都会展开其数据溯源轨迹，列出所引用的法规条文及底层模型推理权重。" },
                  { num: "03", title: "渐进式卡片交互 (Progressive UI)", desc: "对话中自动生成的结构化图表卡片可点击下钻，从宏观趋势一键跳转至具体的底层原始凭证，实现虚实结合。" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#353534] border border-white/10 shrink-0 flex items-center justify-center text-[#ffc081] font-bold group-hover:bg-[#ffc081] group-hover:text-[#4a2800] transition-all duration-300">{item.num}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#e5e2e1] mb-2">{item.title}</h4>
                      <p className="text-sm text-[#dbc2ad]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#ffc081]/20 rounded-[40px] blur-3xl opacity-20 animate-pulse" />
              <div className="glass-card p-2 rounded-[32px] relative z-10 border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-[#0e0e0e] rounded-[24px] h-[520px] flex flex-col">
                  <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffc081]/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#ffc081]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#e5e2e1]">Wbit AI 决策大脑</div>
                        <div className="text-[9px] text-[#7ee37c]">在线 · 处理中</div>
                      </div>
                    </div>
                    <span className="text-[#dbc2ad]/40">⋯</span>
                  </div>
                  <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                    <div className="flex justify-end">
                      <div className="bg-[#ffc081]/20 text-[#e5e2e1] px-4 py-2 rounded-2xl rounded-tr-none text-xs max-w-[80%] border border-[#ffc081]/20">
                        查询去年第四季度研发费加计扣除的潜在审计风险。
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#2a2a2a] border border-white/10 p-4 rounded-2xl rounded-tl-none text-xs max-w-[90%] space-y-4">
                        <div className="flex items-center gap-2 text-[#ffc081] font-bold">
                          正在调度"合规专家" AI 智能体...
                        </div>
                        <div className="p-3 bg-black/20 rounded-lg space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white/40">风险级别</span>
                            <span className="text-[#ffb4ab] font-bold">高危 (Level 4)</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-[#ffb4ab]" />
                          </div>
                        </div>
                        <p className="text-[#dbc2ad] leading-relaxed">
                          已检索到 2 处重大缺陷：<br/>
                          1. 研发活动与立项书在语义层面匹配度仅 42%。<br/>
                          2. 外部咨询费附件缺失核心服务合同。
                        </p>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#ffc081]/10 text-[#ffc081] border border-[#ffc081]/20 rounded-lg text-[10px]">一键补正建议</button>
                          <button className="px-3 py-1.5 bg-white/5 text-[#e5e2e1] border border-white/10 rounded-lg text-[10px]">溯源法律条文</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#1c1b1b] border-t border-white/5">
                    <div className="h-11 bg-black/20 rounded-full px-5 flex items-center gap-3 border border-white/5">
                      <svg className="w-5 h-5 text-[#dbc2ad]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                      <span className="text-[#dbc2ad]/40 text-xs flex-grow">追问具体某个项目的风险...</span>
                      <div className="w-8 h-8 rounded-full bg-[#ffc081] flex items-center justify-center text-[#4a2800] shadow-lg shadow-[#ffc081]/20">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Engineering Section (品牌工程化设计) ── */}
      <section className="py-32 bg-[#131313] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,152,0,0.03)] to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Design Engineering</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">精工细作的设计资产</h2>
            <p className="text-[#dbc2ad]">我们建立了一套名为 [Financial Intelligence] 的设计语言，旨在权衡&ldquo;金融级的严谨感&rdquo;与&ldquo;AI 产品的未来感&rdquo;。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Typography & Spacing */}
            <div className="p-10 bg-[#1c1b1b] rounded-3xl border border-white/5 space-y-10">
              <div className="space-y-6">
                <h5 className="font-mono text-xs text-[#ffc081] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc081]" /> 字体系统
                </h5>
                <div className="space-y-4">
                  <div className="flex items-end justify-between pb-4 border-b border-white/5">
                    <span className="text-4xl font-bold text-[#e5e2e1]">Manrope</span>
                    <span className="text-[10px] text-[#dbc2ad]/60">标题系统 / 700 字重</span>
                  </div>
                  <div className="flex items-end justify-between pb-4 border-b border-white/5">
                    <span className="text-lg font-mono text-[#e5e2e1]">JetBrains Mono</span>
                    <span className="text-[10px] text-[#dbc2ad]/60">数据与代码标识 / 500 字重</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h5 className="font-mono text-xs text-[#ffc081] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc081]" /> 栅格系统
                </h5>
                <div className="grid grid-cols-6 gap-2">
                  {["8px", "16px", "24px", "32px", "40px", "48px"].map((size) => (
                    <div key={size} className="h-16 bg-white/5 rounded border border-white/10 flex items-center justify-center text-[8px] text-white/20">{size}</div>
                  ))}
                </div>
              </div>
            </div>
            {/* Colors */}
            <div className="p-10 bg-[#1c1b1b] rounded-3xl border border-white/5">
              <h5 className="font-mono text-xs text-[#ffc081] uppercase tracking-widest flex items-center gap-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc081]" /> 色彩令牌 (Tokens)
              </h5>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { color: "#ffc081", name: "品牌主色", hex: "#FF9800" },
                  { color: "#131313", name: "画布基准色", hex: "#131313", border: true },
                  { color: "#7ee37c", name: "安全/验证色", hex: "#7EE37C" },
                  { color: "#ffb4ab", name: "风险警示色", hex: "#FFB4AB" },
                ].map((t) => (
                  <div key={t.name} className="space-y-3">
                    <div className={`h-24 rounded-2xl shadow-lg ${t.border ? 'border border-white/10' : ''}`} style={{ backgroundColor: t.color, boxShadow: t.border ? 'none' : `0 10px 30px ${t.color}30` }} />
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#e5e2e1]">{t.name}</span>
                      <span className="text-[10px] text-[#dbc2ad]">{t.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Core Components */}
          <div className="p-12 bg-white/5 rounded-[40px] border border-white/10 text-center">
            <h5 className="font-mono text-white/40 uppercase tracking-[0.4em] mb-12 text-xs">核心组件库</h5>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <button className="px-8 py-3.5 bg-[#ffc081] text-[#4a2800] font-bold rounded-xl shadow-xl shadow-[#ffc081]/30 active:scale-95 transition-all">确认执行指令</button>
              <button className="px-8 py-3.5 border border-white/20 text-[#e5e2e1] font-bold rounded-xl hover:bg-white/5 transition-all">取消返回</button>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-[#7ee37c]/10 text-[#7ee37c] border border-[#7ee37c]/30 rounded-full text-[10px] font-bold">已验证安全</span>
                <span className="px-4 py-1.5 bg-[#ffc081]/10 text-[#ffc081] border border-[#ffc081]/30 rounded-full text-[10px] font-bold">AI 生成结论</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── High-Fidelity Showcase (高保真案例展示) ── */}
      <section className="py-32 bg-[#131313]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">High-Fidelity Showcase</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">核心产品界面精选</h2>
            <p className="text-[#dbc2ad] max-w-2xl mx-auto">不仅是视觉的堆砌，更是对复杂金融逻辑的结构化表达。</p>
          </div>
          <div className="space-y-40">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">01 / 专家名录</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">智能专家调度中心</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  我们设计了一个&ldquo;高密度&rdquo;的专家矩阵界面。通过 <strong className="text-[#e5e2e1]">色调分层 (Tonal Layering)</strong> 区分不同认证等级的 AI 专家，利用细腻的阴影与边框发光建立卡片的点击反馈。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计细节 (Design Detail)</h5>
                  <p className="text-xs text-[#dbc2ad]">采用 4px 的微边框处理，模拟金融机构的物理窗格感，强化&ldquo;安全可靠&rdquo;的心理暗示。</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
                {/* PLACEHOLDER: 专家名录截图 */}
                <div className="flex min-h-[400px] items-center justify-center bg-[#0d0d0d] p-8">
                  <div className="text-center">
                    <p className="text-xs text-white/35">专家名录界面</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为实际截图</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
                {/* PLACEHOLDER: 深度推理截图 */}
                <div className="flex min-h-[400px] items-center justify-center bg-[#0d0d0d] p-8">
                  <div className="text-center">
                    <p className="text-xs text-white/35">深度逻辑溯源面板</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为实际截图</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">02 / 深度推理</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">深度逻辑溯源面板</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  财税决策不能是&ldquo;黑盒&rdquo;。该界面通过分层级展示 AI 的推理过程，包括引用的法律代码片段、模型权重计算以及人工审计标记，确保 100% 可追溯。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计细节 (Design Detail)</h5>
                  <p className="text-xs text-[#dbc2ad]">引入了&ldquo;代码风格&rdquo;的排版，配合 JetBrains Mono 字体，让非技术用户也能感知到后台严谨的数据逻辑。</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">03 / 仪表盘中心</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">CFO 数字化仪表盘</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  采用 <strong className="text-[#e5e2e1]">Bento Grid</strong> 布局，将极高密度的财务数据转化为可视化资产。卡片根据风险等级动态调整背景模糊度与发光强度，实现视觉上的优先级管理。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计细节 (Design Detail)</h5>
                  <p className="text-xs text-[#dbc2ad]">顶部状态栏使用毛玻璃材质，确保在任何背景滚动下，核心财务摘要始终清晰可见。</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
                {/* PLACEHOLDER: 仪表盘截图 */}
                <div className="flex min-h-[400px] items-center justify-center bg-[#0d0d0d] p-8">
                  <div className="text-center">
                    <p className="text-xs text-white/35">CFO 数字化仪表盘</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为实际截图</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
                {/* PLACEHOLDER: 智能信贷截图 */}
                <div className="flex min-h-[400px] items-center justify-center bg-[#0d0d0d] p-8">
                  <div className="text-center">
                    <p className="text-xs text-white/35">智能信贷决策流</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为实际截图</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">04 / 智能信贷</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">智能信贷决策流</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  这是&ldquo;虚实结合&rdquo;的典型案例。系统不仅根据企业信用生成产品推荐卡片，更通过对比交互引导用户理解不同融资方案的隐性成本差异。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
