import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { worksData } from "@/data/works";
import { WbitCaseFrame } from "@/components/ui/WbitCaseFrame";

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
  /*
    Wbit 特殊详情页
    - 这里只负责把 Wbit 独立案例挂到 /work/wbit-ai-platform
    - 具体页面内容在 public/wbit-case-study/index.html
    - 具体样式在 public/wbit-case-study/styles.css
  */
  return (
    <section className="bg-[#050606] pt-20 md:pt-24">
      <WbitCaseFrame />
    </section>
  );
}

function AiAgentPortfolioCase() {
  const processSteps = [
    {
      num: "01",
      title: "需求澄清",
      desc: "从一句模糊需求开始，让 Agent 协助拆成作品展示、案例结构、页面路由和可执行改动。",
    },
    {
      num: "02",
      title: "内容系统化",
      desc: "用 Codex 协助整理 Wbit 案例逻辑，把零散内容重组为可讲述的 UX 叙事。",
    },
    {
      num: "03",
      title: "进入代码环境",
      desc: "让 Agent 读取 Next.js 项目结构，定位路由、组件、样式和素材，再按反馈执行修改。",
    },
    {
      num: "04",
      title: "验证与迭代",
      desc: "通过构建检查、浏览器预览和人工审美反馈，持续修正内容、排版和交互细节。",
    },
  ];

  const toolchain = [
    "Codex Agent",
    "Context Reading",
    "Task Planning",
    "Code Editing",
    "Build Check",
    "Browser Verify",
  ];

  const codexApplications = [
    {
      title: "Context Reading",
      desc: "先读懂现有 Next.js 路由、作品数据、组件结构、资源目录和历史修改，不从空白页面乱生成。",
    },
    {
      title: "Task Planning",
      desc: "把“太像 PPT”“标题撑内容”“同步到网站”这类设计反馈，拆成文件、模块、优先级和检查项。",
    },
    {
      title: "Code Editing",
      desc: "在真实项目里新增作品数据、专属详情页组件、静态资源和样式逻辑，而不是只给一段示例代码。",
    },
    {
      title: "Build & Debug",
      desc: "每轮关键改动后运行 build，检查类型、路由、静态生成、资源路径和页面是否能稳定加载。",
    },
    {
      title: "Browser Verify",
      desc: "在真实页面检查首屏、滚动、文字是否可见、图片是否加载、背景是否露白和交互是否合理。",
    },
    {
      title: "Context Memory",
      desc: "把关键入口、同步目录、组件职责和修改方式标注清楚，让下一次迭代可以接着往下做。",
    },
  ];

  const codexWorkflow = [
    "理解目标",
    "读取代码",
    "定位文件",
    "执行修改",
    "运行检查",
    "浏览器验证",
    "根据反馈迭代",
  ];

  const codexSkills = [
    {
      title: "Browser Skill",
      desc: "把设计验收从“凭感觉看截图”推进到真实浏览器：打开页面、检查 DOM、确认首屏、滚动和资源加载状态。",
    },
    {
      title: "Documents Skill",
      desc: "把案例内容继续转成面试逐字稿、项目说明文档或可投递材料，让网页内容和面试表达保持一致。",
    },
    {
      title: "Local Tooling",
      desc: "通过命令行、构建工具和文件系统协作，完成资源同步、路径检查、构建验证和局部问题排查。",
    },
    {
      title: "Reusable Context",
      desc: "把文件说明、编辑入口和同步规则留下来，减少下一轮对话重新解释项目的成本。",
    },
  ];

  const vibeRules = [
    {
      title: "先定判断标准",
      desc: "每次开做前先说清楚要高级、要长图叙事、要代码布局、要可维护，而不是只给一句“做漂亮点”。",
    },
    {
      title: "把灵感变成任务",
      desc: "把即时想法拆成页面结构、内容模块、视觉层级、文件修改和验证动作，让 Agent 可以稳定执行。",
    },
    {
      title: "保留人工审美权",
      desc: "Codex 可以快速试错，但是否像 PPT、是否空、是否阅读顺，最后都由设计师判断。",
    },
    {
      title: "用验证结束一轮",
      desc: "每轮不是生成完就结束，而是通过 build、浏览器和人工反馈确认结果，再决定下一步。",
    },
  ];

  const problems = [
    {
      title: "内容散",
      before: "作品和素材分散，案例只有页面结果，缺少完整叙事。",
      after: "用 Agent 协助重构项目背景、用户分析、竞品、交互、视觉和总结。",
    },
    {
      title: "页面难维护",
      before: "修改入口不清楚，容易忘记哪些文件控制详情页。",
      after: "给独立详情、网站承载入口和同步目录都加了说明与标注。",
    },
    {
      title: "效果难判断",
      before: "只看代码无法判断排版、留白、标题层级和真实观感。",
      after: "每次关键修改后打开浏览器检查真实渲染状态，用设计反馈继续迭代。",
    },
  ];

  const collaborationModes = [
    {
      label: "Planner",
      title: "把模糊目标拆成任务",
      human: "我提出方向、判断优先级、确认什么值得做。",
      agent: "Codex 帮我拆成页面结构、内容模块、开发步骤和检查清单。",
    },
    {
      label: "Builder",
      title: "进入真实项目执行",
      human: "我提供设计反馈，决定是否保留、删减或重排。",
      agent: "Codex 读取代码、修改组件、同步素材、处理构建错误。",
    },
    {
      label: "Reviewer",
      title: "用浏览器做质量检查",
      human: "我判断页面是否高级、逻辑是否顺、文案是否像人话。",
      agent: "Codex 打开页面、检查 DOM、观察真实渲染状态，并根据反馈继续迭代。",
    },
    {
      label: "Archivist",
      title: "保留项目上下文",
      human: "我决定哪些入口需要标注，方便未来继续修改。",
      agent: "Codex 生成 README、文件注释和修改说明，让项目不依赖一次性记忆。",
    },
  ];

  const promptCases = [
    {
      input: "“这个案例太像 PPT 了，标题在撑内容。”",
      action: "把页面从卡片堆叠改成更长图式的 UX 叙事，重排为项目背景、用户分析、竞品分析、解决痛点、交互详解、视觉推导、页面展示和总结。",
      judgment: "我判断问题不在视觉装饰，而是叙事结构空、分析链路不完整，所以要求先补 UX 逻辑再优化视觉。",
      output: "Wbit 详情页从视觉展示转成完整 UX case study。",
    },
    {
      input: "“不要用长图，同步代码布局到网站详情页。”",
      action: "识别个人网站的作品路由，把独立 Wbit HTML/CSS/素材同步进 public 目录，再用专属组件嵌入到 /work/wbit-ai-platform。",
      judgment: "我判断作品集需要可继续维护的网页结构，而不是一张无法编辑的静态图片。",
      output: "网站详情页展示真实代码布局，而不是一张图片。",
    },
    {
      input: "“内容没加载出来。”",
      action: "检查 DOM、滚动位置、控制台和首屏渲染状态，定位到滚动恢复与动画透明度问题，修改 ScrollRestoration 和 Hero。",
      judgment: "我没有把它当成“服务器没跑”的问题，而是要求从浏览器状态、DOM 和样式层级一起排查。",
      output: "首页重新打开时稳定显示首屏内容。",
    },
  ];

  const validationLoop = [
    ["Code", "修改组件、路由、样式、资源路径"],
    ["Build", "运行构建检查类型、路由和静态生成"],
    ["Browser", "打开真实页面，查看 DOM、首屏和资源加载状态"],
    ["Design Feedback", "根据审美、留白、逻辑和文案继续迭代"],
    ["Context", "把关键文件、入口和修改方式沉淀下来"],
  ];

  const outcomes = [
    {
      title: "设计师的控制力",
      desc: "不是把任务扔给 AI，而是持续定义目标、限制范围、判断质量和决定取舍。",
    },
    {
      title: "Agent 的执行力",
      desc: "Codex 负责跨文件查找、代码修改、资源同步、运行命令和浏览器验证。",
    },
    {
      title: "真实项目的连续性",
      desc: "每次修改都进入同一个代码库和同一套页面系统，不是孤立的一次性生成。",
    },
    {
      title: "可复用的方法",
      desc: "形成从需求澄清、上下文读取、执行修改到验收迭代的一套协作方法。",
    },
  ];

  return (
    <div className="min-w-[1200px] bg-[#050606] text-white">
      <style>{`
        html, body { background: #070808; min-width: 1200px; }
        .ai-case-shell { width: 1200px; margin-left: auto; margin-right: auto; }
        .ai-case-section { padding: 148px 0; }
        .ai-case-kicker { font: 600 12px/1 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: .22em; color: rgba(82,230,216,.74); }
        .ai-case-title { font-size: 56px; line-height: 1.12; letter-spacing: 0; word-break: keep-all; overflow-wrap: normal; }
        .ai-case-copy { font-size: 16px; line-height: 32px; color: rgba(255,255,255,.54); }
        .ai-hero-title { font-size: 92px; line-height: 1.08; letter-spacing: 0; word-break: keep-all; overflow-wrap: normal; }
        .ai-nowrap { white-space: nowrap; }
        .ai-readable { text-wrap: pretty; }
        .ai-hero-outline { -webkit-text-stroke: 1px rgba(82,230,216,.18); color: transparent; }
        .ai-radius { border-radius: 18px; }
        .ai-radius-lg { border-radius: 28px; }
      `}</style>
      <section className="relative h-[1240px] overflow-hidden bg-[#050606] pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_9%,rgba(47,128,255,0.18),transparent_28%),radial-gradient(circle_at_50%_64%,rgba(82,230,216,0.14),transparent_34%),linear-gradient(180deg,#050606_0%,#090c0e_56%,#050606_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 opacity-[0.26] [background-image:repeating-linear-gradient(108deg,transparent_0,transparent_112px,rgba(82,230,216,.18)_113px,transparent_115px)]" />
        <div className="absolute left-0 right-0 top-[74px] h-px bg-gradient-to-r from-transparent via-[#52e6d8]/45 to-transparent" />
        <div className="ai-radius-lg absolute left-[calc(50%-610px)] top-[126px] h-[1010px] w-[1180px] border border-white/[0.055]" />
        <div className="absolute left-[calc(50%-575px)] top-[120px] select-none font-mono text-[100px] font-black uppercase leading-none tracking-[-0.08em] ai-hero-outline">
          CODEX
        </div>
        <div className="absolute bottom-[18px] left-[calc(50%-600px)] select-none font-mono text-[136px] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
          AGENTIC SYSTEM
        </div>
        <div className="ai-case-shell relative h-[1130px]">
          <div className="absolute left-0 right-0 top-[136px] z-40 text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-[22px] font-medium text-white/54">
              <span className="ai-nowrap">Design ideas</span>
              <span className="ai-nowrap rounded-full bg-[#52e6d8] px-6 py-2 text-base font-semibold text-[#061011] shadow-[0_10px_30px_rgba(82,230,216,0.22)]">
                Codex Agent
              </span>
              <span className="ai-nowrap">running system</span>
            </div>
            <h1 className="ai-hero-title font-serif font-bold tracking-normal text-white">
              <span className="ai-nowrap inline-block">设计想法交给 Codex</span>
              <br />
              <span className="ai-nowrap inline-block">变成可运行系统</span>
            </h1>
            <p className="mx-auto mt-8 w-[980px] text-center text-[17px] leading-8 text-white/56">
              <span className="ai-nowrap inline-block">
                我把个人网站当成一次真实实验：用 Codex 读取项目、拆解任务、修改代码、运行检查，
              </span>
              <br />
              <span className="ai-nowrap inline-block">
                再通过浏览器和设计判断，把 vibe coding 变成可控的设计开发流程
              </span>
            </p>
          </div>

          <div className="absolute left-1/2 top-[458px] z-30 h-[144px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#52e6d8]/50 to-transparent" />
          <div className="absolute left-1/2 top-[520px] z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-[#52e6d8] shadow-[0_0_36px_rgba(82,230,216,0.8)]" />
          <div className="absolute left-[170px] top-[520px] z-30 w-[250px] border-t border-white/10 pt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#52e6d8]/64">01 / Ideation</p>
            <p className="ai-nowrap mt-3 text-sm leading-6 text-white/42">把模糊想法整理成可执行页面目标</p>
          </div>
          <div className="absolute right-[142px] top-[520px] z-30 w-[270px] border-t border-white/10 pt-4 text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#52e6d8]/64">02 / Execution</p>
            <p className="ai-nowrap mt-3 text-sm leading-6 text-white/42">让 Codex 完成代码、构建与浏览器验证</p>
          </div>

          <div className="absolute left-[126px] top-[560px] z-10 h-[180px] w-[948px] rounded-[50%] border border-[#52e6d8]/14" />
          <div className="absolute left-[238px] top-[588px] z-10 h-[118px] w-[724px] rounded-[50%] border border-white/[0.045]" />

          <div className="absolute left-[80px] top-[610px] z-20 h-[490px] w-[1040px] overflow-hidden rounded-[42px] border border-white/12 bg-[#111416] p-3 shadow-[0_52px_170px_rgba(0,0,0,0.58)]">
            <div className="absolute left-0 right-0 top-0 z-30 flex h-11 items-center justify-between bg-[#101315]/92 px-5 text-xs text-white/46 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                <span className="h-3 w-3 rounded-full bg-[#ffc75f]" />
                <span className="h-3 w-3 rounded-full bg-[#5bd47b]" />
              </div>
              <span className="rounded-full bg-white/[0.06] px-4 py-1 font-medium">weijinshan.design / home</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/34">Portfolio Home</span>
            </div>
            <Image
              src="/images/works/ai-agent-portfolio-home-wide.png"
              alt="个人作品集首页截图"
              width={1440}
              height={760}
              className="h-full w-full rounded-[32px] object-cover pt-11 opacity-82 saturate-[0.9]"
              priority
            />
            <div className="absolute inset-x-3 bottom-3 h-[32%] rounded-b-[32px] bg-gradient-to-t from-[#050606]/64 to-transparent" />
          </div>

          <Image
            src="/images/works/ai-agent-astronaut-real.png"
            alt="AI 探索宇航员视觉"
            width={1024}
            height={1024}
            className="absolute left-[342px] top-[470px] z-40 h-[680px] w-auto drop-shadow-[0_56px_116px_rgba(82,230,216,0.34)]"
            unoptimized
            priority
          />

          <div className="absolute bottom-[-72px] left-0 right-0 z-50 h-[250px] bg-gradient-to-b from-transparent via-[#050606]/78 to-[#050606]" />
          <div className="absolute bottom-[18px] left-1/2 z-50 h-36 w-px -translate-x-1/2 bg-gradient-to-b from-[#52e6d8]/0 via-[#52e6d8]/45 to-[#52e6d8]/0" />
        </div>
      </section>

      <section className="relative z-20 pb-40 pt-24">
        <div className="ai-case-shell">
          <div className="mx-auto mb-16 h-16 w-px bg-gradient-to-b from-[#52e6d8]/40 to-transparent" />
          <div className="ai-radius-lg grid grid-cols-[400px_620px] gap-[120px] border border-white/10 p-16">
            <div>
              <span className="ai-case-kicker">01 / Project Background</span>
              <h2 className="ai-case-title mt-5 font-serif font-bold">
                <span className="ai-nowrap inline-block">网页只是结果，</span>
                <br />
                <span className="ai-nowrap inline-block">工作流才是项目</span>
              </h2>
            </div>
            <div className="ai-case-copy space-y-6">
              <p>
                一开始的需求很模糊：我只是想重新整理个人网站、补充作品详情、让面试表达更稳定。
                但真正的问题不是缺少一个页面，而是作品、内容、代码、面试讲述和文件维护之间没有形成系统。
              </p>
              <p>
                所以这个项目的目标变成了：用 AI Agent 协助我把个人作品集从“静态展示”重构成一个
                可持续维护的个人品牌系统。它既能展示作品，也能沉淀案例叙事、面试稿和后续修改入口。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-case-section relative overflow-hidden">
        <div className="absolute left-1/2 top-28 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#52e6d8]/10" />
        <div className="ai-case-shell relative">
          <div className="mb-24 grid grid-cols-[500px_460px] items-end justify-between">
            <div>
              <span className="ai-case-kicker">02 / Collaboration Flow</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">AI Agent 协作流程</h2>
            </div>
            <p className="text-right text-[15px] leading-8 text-white/45">
              我把 AI 当成可以进入文件、理解上下文、执行任务和验证结果的协作者，而不是一次性生成页面的工具。
            </p>
          </div>
          <div className="ai-radius-lg relative grid grid-cols-4 gap-px overflow-hidden border border-white/10 bg-white/10">
            <div className="absolute left-0 right-0 top-[86px] h-px bg-[#52e6d8]/22" />
            {processSteps.map((step) => (
              <article
                key={step.num}
                className="relative min-h-[300px] bg-[#070909] p-8 transition duration-300 hover:bg-[#0c1011]"
              >
                <span className="font-mono text-[64px] font-bold leading-none text-white/10">{step.num}</span>
                <span className="absolute left-8 top-[82px] h-3 w-3 rounded-full bg-[#52e6d8] shadow-[0_0_28px_rgba(82,230,216,.8)]" />
                <h3 className="mt-14 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-5 w-[220px] text-sm leading-7 text-white/46">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-24 grid grid-cols-[480px_600px] items-end justify-between">
            <div>
              <span className="ai-case-kicker">03 / Collaboration Roles</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">
                <span className="ai-nowrap inline-block">AI 不是替我设计，</span>
                <br />
                <span className="ai-nowrap inline-block">而是承担不同协作角色</span>
              </h2>
            </div>
            <p className="ai-case-copy">
              这个项目里，我没有把 Codex 当成“一次性生成页面”的工具，而是把它拆成四种工作角色。
              设计师负责判断问题和质量边界，Agent 负责把判断落到文件、页面和可验证结果里。
            </p>
          </div>
          <div className="ai-radius-lg grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
            {collaborationModes.map((item) => (
              <article
                key={item.label}
                className="bg-[#080a0b] p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#52e6d8]/25 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-[#52e6d8]/75">
                    {item.label}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="ai-radius border border-white/8 bg-[#050606]/70 p-5">
                    <span className="text-xs uppercase tracking-[0.18em] text-white/26">Designer</span>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.human}</p>
                  </div>
                  <div className="ai-radius border border-[#52e6d8]/14 bg-[#52e6d8]/[0.06] p-5">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#52e6d8]/70">Agent</span>
                    <p className="mt-2 text-sm leading-6 text-white/62">{item.agent}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-case-section relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="ai-case-shell">
          <div className="mb-24 grid grid-cols-[460px_600px] items-end justify-between">
            <div>
              <span className="ai-case-kicker">04 / Codex Development Stack</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">
                <span className="ai-nowrap inline-block">Codex 不只是写代码，</span>
                <br />
                <span className="ai-nowrap inline-block">它能接住一整轮开发</span>
              </h2>
            </div>
            <p className="ai-case-copy">
              这个项目里，Codex 更像一个可以进入本地开发环境的执行型 Agent。它的价值不是给我一段答案，
              而是把设计反馈接到项目文件、构建检查和真实页面验证上。
            </p>
          </div>
          <div className="ai-radius-lg grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
            {codexApplications.map((item, index) => (
              <article
                key={item.title}
                className="min-h-[238px] bg-[#080a0b] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-[#52e6d8]/75">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-9 text-[22px] font-semibold text-white">{item.title}</h3>
                <p className="mt-4 w-[300px] text-sm leading-7 text-white/48">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="ai-radius-lg mt-10 border border-[#52e6d8]/18 bg-[#52e6d8]/[0.045] p-7">
            <div className="flex items-center justify-between gap-4">
              {codexWorkflow.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="ai-radius border border-white/10 bg-[#070808]/75 px-4 py-3 text-sm text-white/64">
                    {item}
                  </span>
                  {index < codexWorkflow.length - 1 && (
                    <span className="hidden font-mono text-xs text-white/22 md:inline">NEXT</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-24 grid grid-cols-[500px_560px] items-end justify-between">
            <div>
              <span className="ai-case-kicker">05 / Skills & Vibe Coding</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">
                <span className="ai-nowrap inline-block">把 vibe coding</span>
                <br />
                <span className="ai-nowrap inline-block">变成可控的设计开发</span>
              </h2>
            </div>
            <p className="ai-case-copy">
              我理解的 vibe coding 不是随手让 AI 乱写，而是设计师把方向、审美和验收标准讲清楚，
              再让 Codex 通过 Skills 和本地工具把想法快速落到可运行页面里。
            </p>
          </div>
          <div className="grid grid-cols-[700px_470px] gap-[30px]">
            <div className="ai-radius-lg border border-white/10 bg-white/[0.035] p-8">
              <span className="text-xs uppercase tracking-[0.22em] text-white/26">Codex Skills In This Project</span>
              <div className="ai-radius grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
                {codexSkills.map((item) => (
                  <article key={item.title} className="min-h-[190px] bg-[#070808]/82 p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/48">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="ai-radius-lg border border-[#52e6d8]/18 bg-[radial-gradient(circle_at_20%_10%,rgba(82,230,216,0.14),transparent_34%),rgba(255,255,255,0.035)] p-8">
              <span className="text-xs uppercase tracking-[0.22em] text-[#52e6d8]/70">Vibe Coding Rules</span>
              <div className="mt-7 space-y-4">
                {vibeRules.map((item, index) => (
                  <article key={item.title} className="ai-radius grid grid-cols-[44px_1fr] gap-4 border border-white/8 bg-[#070808]/64 p-4">
                    <span className="ai-radius flex h-11 w-11 items-center justify-center border border-[#52e6d8]/25 font-mono text-sm text-[#52e6d8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/48">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-12">
            <span className="ai-case-kicker">06 / Prompt To Execution</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">从设计反馈到 Codex 执行</h2>
            <p className="ai-case-copy mt-5 w-[760px]">
              真正有价值的不是“我让 AI 写了代码”，而是 Codex 能根据设计反馈进入真实项目上下文，
              完成查找、修改、验证；而我负责判断方向、边界和结果是否成立。
            </p>
          </div>
          <div className="space-y-4">
            {promptCases.map((item, index) => (
              <article
                key={item.input}
                className="ai-radius-lg grid grid-cols-[260px_320px_320px_260px] gap-px overflow-hidden border border-white/10 bg-white/10"
              >
                <div className="bg-[#070808]/90 p-6">
                  <span className="font-mono text-sm text-[#52e6d8]">{String(index + 1).padStart(2, "0")} / Input</span>
                  <p className="mt-4 text-lg font-semibold leading-7 text-white">{item.input}</p>
                </div>
                <div className="bg-[#090b0c] p-6">
                  <span className="font-mono text-sm text-white/28">Codex Action</span>
                  <p className="mt-4 text-sm leading-7 text-white/58">{item.action}</p>
                </div>
                <div className="bg-[#080a0b] p-6">
                  <span className="font-mono text-sm text-white/28">My Judgment</span>
                  <p className="mt-4 text-sm leading-7 text-white/58">{item.judgment}</p>
                </div>
                <div className="bg-[#52e6d8]/[0.055] p-6">
                  <span className="font-mono text-sm text-[#52e6d8]/75">Outcome</span>
                  <p className="mt-4 text-sm leading-7 text-white/66">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="grid grid-cols-[680px_480px] items-center gap-[40px]">
            <div className="ai-radius-lg overflow-hidden border border-white/10 bg-white/[0.04] p-3">
              <Image
                src="/images/works/ai-agent-portfolio-wbit.png"
                alt="Wbit 详情页同步成果截图"
                width={1440}
                height={1050}
                className="ai-radius h-auto w-full"
              />
            </div>
            <div>
              <span className="ai-case-kicker">07 / Key Case</span>
              <h2 className="ai-case-title mt-5 font-serif font-bold">
                <span className="ai-nowrap inline-block">以 Wbit 详情页为例，</span>
                <br />
                <span className="ai-nowrap inline-block">把 AI 用在真实迭代里</span>
              </h2>
              <p className="ai-case-copy mt-7">
                Wbit 原本只是一个已经做完但没有系统整理的项目。通过 Agent 协作，我把它补充成完整的 UX
                案例叙事：项目背景、用户分析、竞品分析、解决痛点、交互详解、视觉推导、页面展示、业务验证和总结。
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "根据设计反馈反复调整排版、留白、标题层级和视觉气质",
                  "把独立详情页同步回个人网站，并保留可维护的文件标注",
                  "把修改入口、同步目录和关键组件标注清楚，避免后续维护断档",
                ].map((item) => (
                  <div key={item} className="ai-radius flex gap-3 border border-white/8 bg-white/[0.03] p-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#52e6d8]" />
                    <p className="text-sm leading-6 text-white/56">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-12">
            <span className="ai-case-kicker">08 / Problems & Solutions</span>
            <h2 className="ai-case-title mt-4 font-serif font-bold">过程中遇到的问题</h2>
          </div>
          <div className="space-y-4">
            {problems.map((item) => (
              <article
                key={item.title}
                className="ai-radius-lg grid grid-cols-[220px_1fr_1fr] gap-8 border border-white/10 bg-white/[0.035] p-8"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/24">Before</span>
                  <p className="mt-3 text-sm leading-7 text-white/45">{item.before}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#52e6d8]/70">After</span>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.after}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-16 grid grid-cols-[460px_600px] items-end justify-between">
            <div>
              <span className="ai-case-kicker">09 / Validation Loop</span>
              <h2 className="ai-case-title mt-4 font-serif font-bold">
                <span className="ai-nowrap inline-block">让 AI 输出进入</span>
                <br />
                <span className="ai-nowrap inline-block">可验证循环</span>
              </h2>
            </div>
            <p className="ai-case-copy">
              AI 生成的东西不能直接当结果。这个项目里，每次重要修改都要经过代码、构建、浏览器和设计反馈，
              直到它变成一个可以被使用和继续维护的页面系统。
            </p>
          </div>
          <div className="ai-radius-lg relative overflow-hidden border border-white/10 bg-white/[0.035] p-10">
            <div className="absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-transparent via-[#52e6d8]/30 to-transparent" />
            <div className="relative grid grid-cols-5 gap-4">
              {validationLoop.map(([title, desc], index) => (
                <article key={title} className="ai-radius border border-white/10 bg-[#070808] p-5">
                  <span className="font-mono text-3xl font-bold text-white/14">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/45">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-case-section">
        <div className="ai-case-shell">
          <div className="mb-12">
            <span className="ai-case-kicker">10 / Codex Application Value</span>
            <h2 className="ai-case-title mt-4 font-serif font-bold">Codex 真正帮我放大的能力</h2>
          </div>
          <div className="ai-radius-lg grid grid-cols-4 gap-px overflow-hidden border border-white/10 bg-white/10">
            {outcomes.map((item) => (
              <article key={item.title} className="min-h-[240px] bg-[#080a0b] p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/48">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-case-section pb-36">
        <div className="ai-radius-lg ai-case-shell border border-[#52e6d8]/20 bg-[radial-gradient(circle_at_20%_10%,rgba(82,230,216,0.12),transparent_32%),rgba(255,255,255,0.035)] p-12">
          <span className="ai-case-kicker">11 / Methodology</span>
          <h2 className="mt-5 w-[980px] font-serif text-[56px] font-bold leading-[1.12] [word-break:keep-all]">
            <span className="ai-nowrap inline-block">AI Agent 协作不是一句 Prompt，</span>
            <br />
            <span className="ai-nowrap inline-block">而是一套可验证的工作流</span>
          </h2>
          <div className="ai-radius mt-12 grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
            {[
              ["设计师定义问题", "明确目标、判断优先级、给出审美反馈和业务边界。"],
              ["Agent 执行与连接", "跨文件修改、同步资源、运行构建、打开浏览器验证。"],
              ["上下文持续沉淀", "把路由、组件、资源和修改入口标注清楚，让下一轮协作可以继续接上。"],
            ].map(([title, desc]) => (
              <article key={title} className="bg-[#070808]/78 p-7">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{desc}</p>
              </article>
            ))}
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
  const isAiAgentPortfolio = work.slug === "ai-agent-portfolio-system";
  const isSpecialCase = isWbit || isAiAgentPortfolio;

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
      {!isSpecialCase && (
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
      {!isSpecialCase && (
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
      {!isSpecialCase && work.highlights && work.highlights.length > 0 && (
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
      {isAiAgentPortfolio && <AiAgentPortfolioCase />}

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
      {!isSpecialCase && work.images.length > 0 && (
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
