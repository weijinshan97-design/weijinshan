import { notFound } from "next/navigation";
import { worksData } from "@/data/works";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return worksData.map((w) => ({ slug: w.slug }));
}

function WbitDeepDive() {
  return (
    <>
      {/* ── SECTION 01 ── 概念引入：数字智能的涌现 */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#08060e] noise-texture">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6758A9]/12 blur-[180px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6758A9]/8 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6758A9]/70">Section 01</span>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">The Manifesto: Emergence of Digital Intelligence</h2>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">企业AI就用Wbit</h1>
            <div className="relative mt-16 w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-[#6758A9]/8 blur-[60px] animate-glow-purple" />
              <div className="relative z-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d0d] shadow-[0_40px_120px_rgba(103,88,169,0.15)]">
                <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff665e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#efb64c]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#51bd73]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">AI Controller</span>
                </div>
                <div className="p-8 md:p-12">
                  {/* PLACEHOLDER: 替换为 AI 控制器组件的精确渲染图 */}
                  <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01]">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6758A9]/10 ring-1 ring-[#6758A9]/20">
                        <span className="text-2xl font-bold text-[#6758A9]/60">AI</span>
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

      {/* ── 项目背景 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div>
            <div className="text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Background</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">项目背景</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-white/55 font-light md:text-lg">
                2023 年大语言模型爆发以来，AI 对话产品层出不穷。但对小微企业用户而言，「聊天」不等于「解决问题」。税务风险、政策匹配、融资方案、客户线索——这些高频经营问题需要的不是一段漂亮的回答，而是可以被验证、可以被执行、可以持续跟进的结果。
              </p>
              <p className="mt-6 text-base leading-8 text-white/55 font-light md:text-lg">
                Wbit 要做的，是把 AI 从「问答工具」升级为「经营工作台」——整合税务、销售、老板、财务、信贷五类数字人，以对话框为主执行入口，搭配任务卡片和企业档案上下文，将企业经营问题转化为可执行的 AI 工作流。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 全幅产品截图 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 产品首页截图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[400px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">Wbit 首页全屏截图</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为产品首页实际截图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 设计理念 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Design Philosophy</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">从「会聊天」到「能办事」</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/50 font-light md:text-lg">
              传统 AI 助手停留在问答层面，用户问一句、AI 答一句，对话结束即价值终止。Wbit 的设计核心是把每一次对话变成一个可执行的任务——用户提出问题，AI 不仅给出答案，还拆解成步骤、生成报告、创建监测、预约专家，让一次交互产生持续价值。
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { title: "先给路径，再给自由", desc: "用角色和任务帮用户确定方向，再允许自然语言补充细节。空白输入框是 AI 产品最大的敌人——用户不知道该问什么，我们就替他们把高频问题变成可点击的卡片。" },
              { title: "结果必须可解释", desc: "财税结果涉及真金白银，用户不敢信黑盒。我们让 AI 展示思维链：引用了哪些政策、排除了哪些可能性、建议的依据是什么。专业感来自可解释，不是来自神秘感。" },
              { title: "对话只是入口", desc: "真正的价值是把回答沉淀为任务、档案、监测和服务闭环。一次税务咨询可以变成定期体检报告，一条政策匹配可以变成申报提醒，一个风险信号可以变成专家预约。" },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/[0.04] bg-[#0d0d0d] p-8">
                <h3 className="text-lg font-semibold text-white/80">{p.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/40 font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 全幅设计规范总览 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 设计规范总览图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[400px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">设计规范总览</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为色彩、图标、组件合集的全景图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 设计语言：色彩 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Design Language</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">设计语言</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-xl font-semibold text-white/80">色彩系统</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                深色工作台不是为了「酷」，而是为了让复杂信息更聚焦。暖橙引导行动，绿色确认安全，蓝色提示信息——每种颜色都有明确的功能语义，而不是装饰。
              </p>
              <div className="mt-8 grid grid-cols-5 gap-3">
                {[
                  { color: "#F29A57", name: "Action" },
                  { color: "#191B1C", name: "BG" },
                  { color: "#242729", name: "Surface" },
                  { color: "#7ECF82", name: "Success" },
                  { color: "#7792F0", name: "Info" },
                ].map((t) => (
                  <div key={t.color} className="text-center">
                    <span className="block h-16 w-full rounded-xl border border-white/[0.06]" style={{ backgroundColor: t.color }} />
                    <p className="mt-2 font-mono text-[10px] text-white/30">{t.color}</p>
                    <p className="text-[10px] text-white/40">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* PLACEHOLDER: 色彩应用截图 */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0d0d]">
              <div className="flex min-h-[280px] items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-xs text-white/35">色彩应用示例</p>
                  <p className="mt-1 text-[10px] text-white/25">请替换为产品中色彩应用的截图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 设计语言：图标 & 组件 ── */}
      <section className="bg-[#08060e] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white/80">图标规范</h3>
              <p className="mt-3 text-sm leading-6 text-white/40 font-light">统一使用 Solid 纯色块图标，在深色背景下保持高对比度和一致的视觉重量。</p>
              <div className="mt-6 space-y-3">
                {[
                  "Solid 纯色块图标，确保深色背景下高对比度",
                  "图标尺寸：24px / 32px / 48px 三级体系",
                  "圆角统一 12px，与卡片、按钮保持一致",
                  "状态色叠加：正常 / Hover / Active / Disabled 四态",
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f29a57]/50" />
                    <p className="text-sm leading-6 text-white/50 font-light">{r}</p>
                  </div>
                ))}
              </div>
              {/* PLACEHOLDER: 图标规范图 */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-dashed border-white/[0.08] bg-[#0d0d0d]">
                <div className="flex min-h-[160px] items-center justify-center p-6">
                  <p className="text-[10px] text-white/25">请替换为图标规范截图</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white/80">组件规范</h3>
              <p className="mt-3 text-sm leading-6 text-white/40 font-light">所有组件遵循统一的圆角、间距和阴影规范，保证多模块扩展时仍然像同一套产品。</p>
              <div className="mt-6 font-mono text-sm leading-8 text-white/40">
                <p>Border-radius: <span className="text-[#f29a57]/80">12px</span></p>
                <p>Button height: <span className="text-[#f29a57]/80">40px / 48px</span></p>
                <p>Card padding: <span className="text-[#f29a57]/80">20px / 24px</span></p>
                <p>Input border: <span className="text-[#f29a57]/80">1px solid rgba(255,255,255,0.06)</span></p>
                <p>Shadow: <span className="text-[#f29a57]/80">0 24px 90px rgba(0,0,0,0.22)</span></p>
              </div>
              {/* PLACEHOLDER: 组件规范图 */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-dashed border-white/[0.08] bg-[#0d0d0d]">
                <div className="flex min-h-[160px] items-center justify-center p-6">
                  <p className="text-[10px] text-white/25">请替换为组件规范截图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 全幅：五大数字员工 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white/80">五大数字员工</h3>
            <p className="mt-3 text-sm leading-6 text-white/40 font-light">每个数字员工对应一套独立的能力模块，覆盖企业经营的核心环节。</p>
          </div>
          {/* PLACEHOLDER: 数字员工形象图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[300px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">五大数字员工形象展示</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为数字员工形象/头像合集图</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {[
              { name: "异常识别", desc: "自动识别经营异常与机会点" },
              { name: "智能记账", desc: "票据识别、记账与税务计算" },
              { name: "供应商监控", desc: "动态监控价格、交期与稳定性" },
              { name: "销售预测", desc: "预测趋势与丢单风险" },
              { name: "商机发现", desc: "多维度精准筛选增长机会" },
            ].map((emp) => (
              <div key={emp.name} className="rounded-xl bg-[#0d0d0d] p-4">
                <h4 className="text-sm font-semibold text-white/70">{emp.name}</h4>
                <p className="mt-1 text-[10px] leading-4 text-white/30">{emp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 首页设计 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Homepage</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">首页设计</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/40 font-light">用户打开 Wbit 的第一秒，需要回答三个问题：我是谁？我要做什么？从哪里开始？首页的核心任务不是展示功能，而是帮用户用最短路径完成第一次有效交互。</p>
          </div>
          {/* PLACEHOLDER: 首页截图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[400px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">首页全屏截图</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为 Wbit 首页实际截图</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "角色选择区", desc: "五类数字人头像横向排列，用户通过角色切换确定「我是谁」。每个角色保留统一的头像、状态和欢迎语结构，通过不同任务入口承接差异化场景。" },
              { title: "任务卡片区", desc: "全面税务体检、税务头条、政策匹配等高频场景卡片化。统一采用图标、标题、说明、箭头四段结构，用户不用先学 Prompt 也能快速开始。" },
              { title: "输入区", desc: "底部输入区承担「自由表达 + 结构化入口」的双重角色。快捷能力标签与自然语言输入并存，是整个工作台的主执行入口。" },
            ].map((area) => (
              <div key={area.title} className="rounded-2xl bg-[#0d0d0d] p-6">
                <h4 className="text-base font-semibold text-white/75">{area.title}</h4>
                <p className="mt-3 text-xs leading-5 text-white/40">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 全幅：对话交互 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 对话页截图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[400px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">对话交互页截图</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为 Wbit 对话页实际截图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 交互设计：延迟与信任 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Interaction Design</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">交互设计</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white/80">延迟分级响应</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                AI 响应不是「等」或「不等」的二选一。我们根据延迟时长设计了三级反馈机制，让用户在任何等待时长下都能感知到「系统在工作」。
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { range: "≤ 3s", action: "微动效加载", desc: "短暂等待用动画过渡，不打断用户心流", color: "#7ECF82" },
                  { range: "3–10s", action: "思维链展示", desc: "展示 AI 推理过程，把等待变成可视化的思考", color: "#f29a57" },
                  { range: "> 10s", action: "后台异步", desc: "转为后台任务，完成后推送通知", color: "#7792F0" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold" style={{ backgroundColor: `${item.color}15`, color: `${item.color}90` }}>{item.range}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white/70">{item.action}</h4>
                      <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white/80">Chain of Thought · 思维链</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                在财税场景中，用户不敢信 AI 的根本原因是「黑盒」。我们让 AI 展示思维链——不是只给结论，而是把推理路径一步步呈现出来。用户看到 AI 在分析什么、引用了哪些政策、排除了哪些可能性，信任感自然建立。
              </p>
              {/* PLACEHOLDER: 思维链截图 */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0d0d]">
                <div className="flex min-h-[200px] items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-xs text-white/35">思维链展示截图</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为 Chain of Thought 界面截图</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 交互设计：动作层级与容错 ── */}
      <section className="bg-[#08060e] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white/80">三级动作金字塔</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                AI 产品的界面不能把所有动作都摆出来。我们建立了三级动作体系：一级常驻、二级显性、三级角落，让界面在信息密度和操作效率之间找到平衡。
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { level: "1", title: "一级首要动作（常驻显性）", desc: "一键应用 / 导出代码，始终可见" },
                  { level: "2", title: "二级次要动作（Hover 显性）", desc: "局部微调 / 重试，鼠标悬停时出现" },
                  { level: "3", title: "三级反馈动作（隐性角落）", desc: "赞 / 踩，收纳在角落不干扰主流程" },
                ].map((item) => (
                  <div key={item.level} className="flex items-start gap-4 rounded-xl bg-[#0d0d0d] p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6758A9]/10 text-sm font-bold text-[#6758A9]/60">{item.level}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white/70">{item.title}</h4>
                      <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white/80">容错与降级</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                AI 不是永远可靠的。我们为三种异常场景设计了降级策略，确保用户在任何情况下都有路可走。
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { scenario: "AI 接口超时", fallback: "展示缓存结果 + 重试按钮" },
                  { scenario: "解析失败", fallback: "降级到传统表单模式" },
                  { scenario: "数据缺失", fallback: "引导用户补充信息" },
                ].map((item) => (
                  <div key={item.scenario} className="rounded-xl border border-[#ff665e]/10 bg-[#0d0d0d] p-5">
                    <h4 className="text-sm font-semibold text-white/70">{item.scenario}</h4>
                    <p className="mt-2 text-xs text-white/40">{item.fallback}</p>
                  </div>
                ))}
              </div>
              {/* PLACEHOLDER: 降级交互截图 */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-dashed border-white/[0.08] bg-[#0d0d0d]">
                <div className="flex min-h-[160px] items-center justify-center p-6">
                  <p className="text-[10px] text-white/25">请替换为降级交互截图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 全幅：交互演示 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 交互演示 GIF/视频 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[350px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">交互演示</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为 GIF / 视频（对话流、任务创建、报告生成等）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI 能力：深寻大模型 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">AI Capabilities</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">智能内核</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-xl font-semibold text-white/80">深寻大模型 · 财税领域专精</h3>
              <p className="mt-4 text-sm leading-7 text-white/50 font-light">
                通用大模型在财税领域的表现不够精准——政策条文多、计算规则复杂、行业术语专业。我们接入深寻大模型并针对财税场景深度优化，让 AI 不仅能回答问题，更能解读报表、识别风险、匹配政策。
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "+16%", label: "准确率提升", color: "#7ECF82" },
                  { value: "3min", label: "生成体检报告", color: "#f29a57" },
                  { value: "70%", label: "人工审核下降", color: "#7792F0" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[#0d0d0d] p-4 text-center">
                    <span className="font-mono text-2xl font-bold" style={{ color: `${stat.color}90` }}>{stat.value}</span>
                    <p className="mt-1 text-[10px] text-white/35">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* PLACEHOLDER: AI 能力架构图 */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0d0d]">
              <div className="flex min-h-[280px] items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-xs text-white/35">AI 能力架构图</p>
                  <p className="mt-1 text-[10px] text-white/25">请替换为 AI 能力架构或模型展示图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 全幅：五大智能体 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white/80">5 大 AI 智能体</h3>
            <p className="mt-3 text-sm leading-6 text-white/40 font-light">覆盖风控、营销、政策、信贷和报告五大业务场景。</p>
          </div>
          {/* PLACEHOLDER: 智能体展示图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[300px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">五大智能体展示</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为智能体形象/能力展示图</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {[
              { name: "风控决策", desc: "多维风险智能扫描", color: "#ff665e" },
              { name: "智能营销", desc: "AI 高效拓客", color: "#f29a57" },
              { name: "政策匹配", desc: "政策补贴高效触达", color: "#7ECF82" },
              { name: "智能信贷", desc: "百款方案智能匹配", color: "#7792F0" },
              { name: "报告洞察", desc: "专业报告自动生成", color: "#6758A9" },
            ].map((agent) => (
              <div key={agent.name} className="rounded-xl bg-[#0d0d0d] p-4">
                <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: `${agent.color}60` }} />
                <h4 className="mt-3 text-sm font-semibold text-white/70">{agent.name}</h4>
                <p className="mt-1 text-[10px] text-white/30">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 五大业务模式 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Business Modes</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">五大业务模式</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/40 font-light">从单一的税务咨询延展到五大业务模式，每个模式都有独立的入口、流程和交付物。</p>
          </div>
          {/* PLACEHOLDER: 业务模式展示图 */}
          <div className="mb-8 overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[300px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">五大业务模式展示</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为业务模式入口/流程展示图</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "税务服务", desc: "双重风险核查，5 分钟出具风险报告", color: "#f29a57" },
              { name: "小微信贷", desc: "百款方案智能匹配，信贷极速触达", color: "#7792F0" },
              { name: "找客户", desc: "多维度精准筛选，主动推荐机会", color: "#7ECF82" },
              { name: "找补贴", desc: "政策补贴高效触达，申报全程辅导", color: "#ff665e" },
              { name: "AI 专家分身", desc: "多智能体协同，AI 到人工服务闭环", color: "#6758A9" },
            ].map((mode) => (
              <div key={mode.name} className="rounded-2xl bg-[#0d0d0d] p-6">
                <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: `${mode.color}60` }} />
                <h4 className="mt-4 text-base font-semibold text-white/75">{mode.name}</h4>
                <p className="mt-2 text-xs leading-5 text-white/40">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 全幅：业务模式详情 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px] space-y-8">
          {[
            { title: "税务服务", desc: "自身及目标企业双重风险核查，5 分钟免费出具多维度风险报告。AI 自动解读复杂报表，用白话告诉用户风险点并提供解决方案，智能解读及平台专家随心选。" },
            { title: "小微信贷", desc: "百款方案智能匹配，信贷极速触达。智能信贷智能体全程辅助，从方案筛选到申请指导，让小微企业也能获得精准的融资服务。" },
            { title: "找补贴", desc: "政策补贴高效触达，申报全程辅导。政策匹配智能体自动扫描适用政策，从发现到申报形成完整闭环。" },
          ].map((mode) => (
            <div key={mode.title}>
              <h3 className="mb-4 text-lg font-semibold text-white/80">{mode.title}</h3>
              {/* PLACEHOLDER: 业务模式详情截图 */}
              <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
                <div className="flex min-h-[250px] items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-xs text-white/35">{mode.title}页面截图</p>
                    <p className="mt-1 text-[10px] text-white/25">请替换为{mode.title}页面实际截图</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/40 font-light">{mode.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 方法论：体验走查 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Methodology</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">体系与标准</h2>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] bg-white/[0.015] px-8 py-6 md:px-12">
              <h3 className="text-lg font-semibold text-white/80">AI 产品体验走查合规制度</h3>
              <p className="mt-1 text-xs text-white/40">10 项 Checklist · 确保每个 AI 功能上线前都经过完整验证</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { id: "01", title: "Prompt 门槛", desc: "输入区是否同时支持自然语言和结构化意图？用户是否能在 3 秒内理解从哪里开始？" },
                  { id: "02", title: "CoT 状态", desc: "思维链展示是否在延迟 >3s 时自动触发？中间步骤是否可视化且可中断？" },
                  { id: "03", title: "降级策略", desc: "AI 接口异常时是否有 GUI 表单兜底？降级路径是否对用户透明且可操作？" },
                  { id: "04", title: "Token 符合度", desc: "Design Token 是否严格遵循规范？色值、圆角、间距是否与设计稿 1:1 一致？" },
                  { id: "05", title: "错误反馈", desc: "异常状态是否提供明确的错误信息和恢复路径？是否避免了死锁式 UI？" },
                  { id: "06", title: "动作层级", desc: "一级动作是否常驻显性？次级动作是否 Hover 才出现？反馈动作是否角落收纳？" },
                  { id: "07", title: "智能体切换", desc: "五大数字人角色切换是否流畅？上下文是否保留？角色能力差异是否清晰可见？" },
                  { id: "08", title: "任务闭环", desc: "对话结果是否可沉淀为任务？定时任务、企业档案、专家预约是否形成完整链路？" },
                  { id: "09", title: "数据可信度", desc: "财税结果是否拆分为依据、风险、建议？用户能否追溯数据来源？" },
                  { id: "10", title: "多场景覆盖", desc: "税务服务、小微信贷、找客户、找补贴、AI 专家分身五大模式是否均有完整入口？" },
                ].map((item) => (
                  <div key={item.id} className="group rounded-xl border border-white/[0.04] bg-white/[0.015] p-5 transition-all hover:border-[#7ECF82]/10 hover:bg-white/[0.025]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#6758A9]/60">{item.id}</span>
                      <h4 className="text-sm font-semibold text-white/75">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/40">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/[0.04] bg-white/[0.01] px-8 py-6 md:px-12">
              <p className="text-xs leading-6 text-white/40 font-light md:text-sm">
                在缺乏大数据验证的孵化阶段，我们用定性用户可用性测试推导方向，用方法论和规范为团队下一次的 AI 飞跃筑起基建。这套 Checklist 已成为团队所有 AI 功能上线前的必经流程。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 成果 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Results</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">真实业务成果</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/40 font-light">产品上线后服务税务、金融、政务园区等多行业客户，以下是部分可量化的业务指标。</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { industry: "金融行业", metric: "客户转化率提升", value: "近 3 倍", color: "#f29a57" },
              { industry: "税务机构", metric: "营收增长提升", value: "30%", color: "#7ECF82" },
              { industry: "政务园区", metric: "产业治理效率提升", value: "60%", color: "#7792F0" },
            ].map((item) => (
              <div key={item.industry} className="rounded-2xl bg-[#0d0d0d] p-8 text-center">
                <span className="text-xs text-white/30">{item.industry}</span>
                <p className="mt-4 font-mono text-4xl font-bold" style={{ color: `${item.color}90` }}>{item.value}</p>
                <p className="mt-2 text-sm text-white/50">{item.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 全幅：客户见证 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 客户使用场景图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[300px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">客户使用场景 / 行业落地展示</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为客户案例或使用场景图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 页面展示 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Screen Gallery</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">页面展示</h2>
          </div>
          {/* PLACEHOLDER: 页面展示总览图 */}
          <div className="mb-8 overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[300px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">页面展示总览</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为产品页面全景预览图</p>
              </div>
            </div>
          </div>
          {/* 水平滚动画廊 */}
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { label: "首页", desc: "角色选择、任务卡片和输入区" },
              { label: "对话页", desc: "自然语言 + 思维链展示" },
              { label: "税务体检", desc: "3 分钟生成体检报告" },
              { label: "政策匹配", desc: "智能匹配适用政策" },
              { label: "风险扫描", desc: "工商风险智能扫描" },
              { label: "报告页", desc: "专业报告生成与解读" },
              { label: "企业档案", desc: "上下文沉淀与历史记录" },
            ].map((screen, i) => (
              <div key={i} className="min-w-[360px] snap-center shrink-0 lg:min-w-[480px]">
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0d0d]">
                  <div className="flex items-center justify-between border-b border-white/[0.04] bg-white/[0.015] px-5 py-3">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">{screen.label}</span>
                    <span className="font-mono text-[10px] text-white/20">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {/* PLACEHOLDER: 替换为实际页面截图 */}
                  <div className="flex min-h-[280px] items-center justify-center p-6">
                    <div className="text-center">
                      <p className="text-xs text-white/30">{screen.desc}</p>
                      <p className="mt-2 text-[10px] text-white/15">请替换为截图</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 全幅收尾图 ── */}
      <section className="bg-[#08060e] px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          {/* PLACEHOLDER: 收尾全景图 / 产品合集图 */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.06] bg-[#0d0d0d]">
            <div className="flex min-h-[400px] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-xs text-white/35">收尾全景图 / 产品页面合集</p>
                <p className="mt-1 text-[10px] text-white/25">请替换为 Wbit 全产品线展示图或多页面拼合图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 总结 ── */}
      <section className="bg-[#08060e] px-5 py-20 md:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Summary</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">写在最后</h2>
          </div>

          <div className="mt-12 space-y-6 text-base leading-8 text-white/50 font-light md:text-lg">
            <p>
              回头看这个项目，最大的挑战不是设计本身，而是如何在「AI 能力还在快速迭代」的阶段，建立一套不会过时的设计框架。我们选择了「对话 + 任务」的双轨结构：对话承载灵活性，任务承载确定性。这个结构让产品既能跟上模型能力的升级，又不会因为模型变了就要推翻重来。
            </p>
            <p>
              另一个收获是关于「信任」。在财税这个高风险领域，用户对 AI 的信任不是靠一次漂亮的回答建立的，而是靠每一次可解释的结果、每一次透明的推理过程、每一次可靠的降级策略积累的。我们把这套信任机制写进了 10 项体验走查 Checklist，成为团队所有 AI 功能上线前的必经流程。
            </p>
            <p>
              Wbit 上线后服务了税务、金融、政务园区等多行业客户。金融行业客户转化率提升近 3 倍，税务机构营收增长 30%，政务园区产业治理效率提升 60%。这些数字背后，是「让 AI 从能聊天变成能办事」这个设计初衷的验证。
            </p>
          </div>

          <div className="mt-16 border-t border-white/[0.06] pt-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Credits</span>
                <div className="mt-4 space-y-3">
                  {[
                    { role: "产品设计", name: "魏晋山" },
                    { role: "所属团队", name: "杭州微风企科技 · 设计部" },
                    { role: "项目周期", name: "2024 — 2025" },
                  ].map((c) => (
                    <div key={c.role} className="flex items-baseline gap-4">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/25">{c.role}</span>
                      <span className="text-sm text-white/60">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6758A9]/60">Thanks</span>
                <p className="mt-4 text-sm leading-7 text-white/40 font-light">
                  感谢微风企科技的产品、研发和运营团队在项目过程中的紧密协作。感谢每一位参与可用性测试的用户，你们的真实反馈让这个产品越来越好。
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
      {/* Hero — full bleed cover */}
      {!isWbit && (
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroCover})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
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
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.94] max-w-4xl">
                {work.titleZh}
              </h1>
              <p className="mt-6 text-sm md:text-base text-white/30 leading-relaxed max-w-2xl font-light">
                {work.summaryZh}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Content — three cards */}
      {!isWbit && (
        <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {insightCards.map((card) => (
                <article
                  key={card.num}
                  className={`group relative min-h-[320px] overflow-hidden rounded-2xl border p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] ${
                    card.accent
                      ? "border-[#d68b38]/20 bg-white/[0.07] hover:border-[#d68b38]/32"
                      : "border-white/10 bg-white/[0.045] hover:border-white/18 hover:bg-white/[0.065]"
                  }`}
                >
                  <div
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                      card.accent
                        ? "bg-[#d68b38]/16 opacity-80"
                        : "bg-white/[0.06] opacity-60"
                    }`}
                  />
                  <span
                    className={`absolute right-6 top-5 font-mono text-7xl font-bold leading-none select-none ${
                      card.accent ? "text-[#d68b38]/10" : "text-white/[0.045]"
                    }`}
                  >
                    {card.num}
                  </span>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          card.accent ? "bg-[#d68b38]" : "bg-white/18"
                        }`}
                      />
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                          card.accent ? "text-[#d68b38]/70" : "text-white/32"
                        }`}
                      >
                        {card.label}
                      </span>
                    </div>

                    <h2 className="mt-10 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
                      {card.title}
                    </h2>
                    <p className="mt-5 text-sm md:text-base text-white/56 leading-7">
                      {card.text}
                    </p>

                    <div className="mt-auto pt-8">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all duration-300 group-hover:translate-x-1 ${
                          card.accent
                            ? "border-[#d68b38]/24 text-[#d68b38]/72"
                            : "border-white/10 text-white/26"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </article>
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
                    border="0"
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
                <img
                  key={i}
                  src={img}
                  alt={`${work.titleZh} — 项目图片 ${i + 1}`}
                  className="w-full h-auto rounded-xl"
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
                  <img
                    key={img}
                    src={img}
                    alt={`${work.titleZh} — 延展图片 ${i + 1}`}
                    className="w-full h-auto rounded-xl"
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
