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
              <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-[#5f3bff]/8 blur-[60px] animate-glow-purple" />
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
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="/images/wbit-home-credit.png"
                      alt="Wbit 首页 - 小微信贷"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#f29a57]/70">Project: Breeze Enterprise AI (V2.0)</p>
              <p className="text-lg leading-8 text-white/65 font-light md:text-xl">以对话式交互重新定义企业财税工作流，让 AI 从工具进化为数字员工。</p>
              <p className="text-sm leading-7 text-white/40 font-light">Redefining Enterprise Tax Workflows with Conversational AI — From Tools to Digital Employees.</p>
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
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">User Research</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">用户洞察：设计的起点</h2>
            <p className="text-[#dbc2ad] max-w-2xl">通过 50+ 家小微企业深度访谈，我们提炼出三类核心用户的决策场景与痛点，将用户语言转化为设计语言，定义产品交互框架。</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Persona 1 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                  <img src="/images/persona-ceo.png" alt="总经理" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">中小微企业</h4>
                  <span className="text-xs text-[#ffc081]">核心需求方</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">覆盖范围</div>
                  <p className="text-sm text-[#e5e2e1]">中小制造、贸易及外贸公司，缺乏专业团队，急需低成本获取深度分析能力。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffc081]/60 uppercase mb-2 font-bold tracking-widest">核心价值</div>
                  <p className="text-sm text-[#dbc2ad]">借助 Wbit 解决精准获客、融资受阻及政策申报难题，将财税数据转化为业务增长。</p>
                </div>
              </div>
            </div>
            {/* Persona 2 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                  <img src="/images/persona-cfo.png" alt="财务总监" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">企业员工</h4>
                  <span className="text-xs text-[#ffc081]">数字员工受众</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">覆盖范围</div>
                  <p className="text-sm text-[#e5e2e1]">从高管到一线执行者的全角色群体，高管用于宏观决策，销售获取精准潜客与话术。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffc081]/60 uppercase mb-2 font-bold tracking-widest">核心价值</div>
                  <p className="text-sm text-[#dbc2ad]">财务、法务及行政人员利用专属 AI 分身高效完成税务自检、风险排查及补贴申报。</p>
                </div>
              </div>
            </div>
            {/* Persona 3 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#ffc081]/20 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                  <img src="/images/persona-biz.png" alt="业务负责人" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e5e2e1]">服务机构</h4>
                  <span className="text-xs text-[#ffc081]">生态合作伙伴</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-2 font-bold tracking-widest">覆盖范围</div>
                  <p className="text-sm text-[#e5e2e1]">银行信贷员及政府园区管理者，利用平台风控与预授信能力提升审查效率。</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] text-[#ffc081]/60 uppercase mb-2 font-bold tracking-widest">核心价值</div>
                  <p className="text-sm text-[#dbc2ad]">精准触达政策受益企业，实时监控园区企业健康度，提升惠企政策落地效率。</p>
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
          {/* Full-width image */}
          <div className="relative w-full aspect-[16/8] rounded-[32px] overflow-hidden border border-white/5 mb-10">
            <img
              src="/images/wbit-digital-workers.png"
              alt="Wbit 数字人矩阵展示"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", title: "税务数字人", desc: "全面税务风险扫描与政策匹配，自动生成税务体检报告与合规建议。", logic: "逻辑：推理引擎", color: "#ffc081" },
              { iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "销售数字人", desc: "预测销售趋势与丢单风险，提供话术支持与策略调整提示，助力业绩增长。", logic: "逻辑：趋势预测", color: "#7ee37c" },
              { iconPath: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", title: "老板数字人", desc: "自动识别经营异常与机会点，推送预警与战略建议，辅助关键决策。", logic: "逻辑：异常识别", color: "#ffc081" },
              { iconPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", title: "财税数字人", desc: "智能票据识别、智能记账与税务计算，人工审核工作量下降 70%。", logic: "逻辑：智能记账", color: "#7ee37c" },
              { iconPath: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z", title: "信贷数字人", desc: "动态监控供应商价格、交期与稳定性，自动生成采购风险评级。", logic: "逻辑：风险监控", color: "#ffc081" },
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
                <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Interaction Design</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">交互设计<br/>从指令到对话</h2>
                <p className="text-[#dbc2ad] max-w-lg leading-relaxed">
                  传统 B 端产品的菜单层级让小微企业用户望而却步。我们设计了一套 <strong className="text-[#e5e2e1]">对话式交互范式</strong>，将复杂的财税能力封装成自然语言入口，用户只需说出需求，系统自动编排任务流。
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { num: "01", title: "意图识别与路由", desc: "通过语义理解自动匹配对应数字人，用户无需选择菜单，对话即操作。" },
                  { num: "02", title: "可解释的 AI 输出", desc: "每个结论都展示推理路径和数据来源，建立用户对 AI 决策的信任感。" },
                  { num: "03", title: "渐进式信息展示", desc: "从摘要到详情逐层下钻，复杂财税数据通过卡片化设计降低认知负荷。" },
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

      {/* ── Design Engineering Section (品牌工程化设计) - 暂时隐藏 ── */}
      {/* <section className="py-32 bg-[#131313] relative overflow-hidden">
        ...
      </section> */}

      {/* ── High-Fidelity Showcase (高保真案例展示) ── */}
      <section className="py-32 bg-[#131313]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Visual Design</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">视觉设计详解</h2>
            <p className="text-[#dbc2ad] max-w-2xl mx-auto">深色工作台为基底，暖橙引导行动，每一种颜色都承载明确的功能语义。</p>
          </div>
          <div className="space-y-40">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">01 / 数字人矩阵</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">五大数字人入口</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  通过 <strong className="text-[#e5e2e1]">色彩编码</strong> 区分不同职能的数字人，每个角色拥有独立的视觉标识。卡片采用微边框处理，在深色背景上建立清晰的层级关系。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计决策</h5>
                  <p className="text-xs text-[#dbc2ad]">统一的卡片圆角 (24px) 与间距体系，确保五个角色在视觉上既一致又有区分度。</p>
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
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">02 / 对话界面</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">对话式工作台</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  将传统表单操作转化为对话流。AI 回复采用 <strong className="text-[#e5e2e1]">卡片化结构</strong>，风险提示、数据图表、操作按钮分层展示，让用户在对话中完成复杂任务。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计决策</h5>
                  <p className="text-xs text-[#dbc2ad]">对话气泡采用双色区分：用户消息用暖橙底色，AI 回复用深灰底色，建立清晰的角色归属感。</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">03 / 任务卡片</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">场景化任务入口</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  将高频财税场景封装为 <strong className="text-[#e5e2e1]">可点击的任务卡片</strong>，用户无需输入 Prompt 即可一键触发。卡片采用图标、标题、说明、箭头四段式结构，降低使用门槛。
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#ffc081] space-y-2">
                  <h5 className="text-xs font-bold text-[#ffc081] uppercase">设计决策</h5>
                  <p className="text-xs text-[#dbc2ad]">卡片 hover 时边框发光，使用品牌色的 10% 透明度，既提供反馈又不抢夺视觉焦点。</p>
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
                  <span className="text-[#ffc081] font-mono text-xs uppercase tracking-widest">04 / 设计规范</span>
                  <h3 className="text-3xl font-bold text-[#e5e2e1]">深色工作台设计系统</h3>
                </div>
                <p className="text-[#dbc2ad] leading-relaxed text-lg">
                  建立统一的深色界面规范：侧边栏、会话列表、角色头像、任务卡、标签按钮保持一致的圆角、描边与层级关系，确保多模块扩展时视觉语言不漂移。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results Section (客户见证与真实效果) ── */}
      <section className="py-32 bg-[#131313]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#ffc081] font-mono text-xs tracking-[0.3em] uppercase">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e5e2e1]">客户见证与真实效果</h2>
            <p className="text-[#dbc2ad] max-w-2xl mx-auto">产品上线后服务税务、金融、政务园区等多行业客户，以下是部分可量化的业务指标。</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                industry: "金融行业",
                metric: "客户转化率提升",
                value: "近 3 倍",
                color: "#ffc081",
                quote: "帮助银行10分钟看懂一家企业，从'不敢贷'到'精准贷'，还能提前预警风险。"
              },
              {
                industry: "税务机构",
                metric: "营收增长提升",
                value: "30%",
                color: "#7ee37c",
                quote: "5分钟给客户一份专业税务体检报告，从'代账会计'升级为'财税顾问'，让客户主动询问'这问题怎么解决'。"
              },
              {
                industry: "政务园区",
                metric: "产业治理效率提升",
                value: "60%",
                color: "#2b6adb",
                quote: "有了AI产业链图谱与智能驾驶舱，实现高效、精准招商，停业率显著降低，服务增值收入同步提升。"
              },
            ].map((item) => (
              <div key={item.industry} className="rounded-2xl bg-[#1c1b1b] p-8 md:p-10 border border-white/5 flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-xs text-white/30">{item.industry}</span>
                  <p className="mt-4 font-mono text-4xl md:text-5xl font-bold" style={{ color: `${item.color}90` }}>{item.value}</p>
                  <p className="mt-3 text-sm text-white/50">{item.metric}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-xs text-white/40 leading-relaxed italic">&ldquo;{item.quote}&rdquo;</p>
                </div>
              </div>
            ))}
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
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#5f3bff]/60">
                      {card.num}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5f3bff]/70">
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
