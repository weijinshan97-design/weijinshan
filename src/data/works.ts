import { Work } from "@/lib/types";

export const worksData: Work[] = [
  {
    slug: "ai-agent-portfolio-system",
    titleZh: "AI Agent 协作作品集系统",
    titleEn: "AI Agent Portfolio System",
    client: "个人项目",
    category: "AI 协作 / 网页开发",
    year: "2026",
    cover: "/images/works/ai-agent-portfolio-home.png",
    summaryZh:
      "以个人作品集网站为载体，验证如何把 Codex 这类 AI Agent 用进真实设计开发流程：让 Agent 读取项目上下文、拆解任务、修改代码、调用本地工具、运行构建并在浏览器中验证结果。",
    problemZh:
      "原有作品分散在不同文件和页面中，案例叙事、页面结构和维护入口都不够稳定。项目需要解决的不只是网页好看，而是如何指挥 AI Agent 进入真实代码环境，并把设计反馈转成可执行、可验证的迭代。",
    approachZh:
      "把 AI 当作协作者而不是生成器：先通过对话拆解目标和信息架构，再让 Codex 进入真实 Next.js 项目，完成代码检索、组件修改、资源同步、构建检查、浏览器验证和上下文沉淀；过程中由设计师持续判断方向、质量和取舍。",
    resultZh:
      "完成个人网站首页、作品列表和 Wbit 深度案例，并沉淀出一套可复用的 Codex 协作方法：用明确目标约束 vibe coding，用 Skills 和本地工具完成开发落地，用构建与浏览器验证保证结果可用。",
    images: [],
    tagsZh: ["AI协作", "Codex Agent", "Vibe Coding", "前端落地", "设计工作流"],
    highlights: [
      {
        label: "从模糊需求到任务拆解",
        content: "把“想做一个个人网站”拆成首页叙事、作品详情、Wbit 案例重构、组件同步、样式调整和浏览器验证等具体任务。",
      },
      {
        label: "真实代码环境协作",
        content: "AI Agent 不是只生成静态页面，而是在真实 Next.js 项目里查找路由、修改组件、同步资源、运行构建并打开浏览器验证。",
      },
      {
        label: "设计判断驱动迭代",
        content: "通过人工反馈不断修正排版、留白、文案、模块顺序和视觉层级，让 AI 的输出进入设计师可控的审美和业务判断中。",
      },
    ],
  },
  {
    slug: "wbit-ai-platform",
    titleZh: "Wbit AI 助手平台",
    titleEn: "Wbit AI Assistant Platform",
    client: "杭州微风企科技",
    category: "AI 产品设计",
    year: "2024 — 2026",
    cover: "/images/webp/wbit-hero.webp",
    summaryZh:
      "0-1 主导 Wbit AI 助手平台整体产品设计，将税务、销售、老板、财务、信贷五类数字人整合进同一套对话式工作台，通过任务卡片、快捷能力标签和定时任务，把企业经营问题转化为可执行的 AI 工作流。",
    problemZh:
      "小微企业用户面对税务风险、政策匹配、客户线索、融资方案等问题时，往往不知道从哪里开始，也难以把一次咨询延展成持续任务。产品需要把复杂的企业经营能力拆成低门槛入口，同时保留 AI 对话的灵活性。",
    approachZh:
      "以对话框作为主执行入口，搭配五类数字人角色切换、场景任务卡、快捷能力标签和企业档案上下文；将政策匹配、税务头条、工商风险扫描、全面税务体检、专家咨询、定时任务等能力组件化，形成可复用的深色工作台设计规范。",
    resultZh:
      "产品上线后服务税务、金融、政务园区等多行业客户，对话式入口降低企业用户使用门槛，任务卡和定时任务帮助高频场景沉淀为可复用流程，财务场景人工审核工作量下降 70%，成为公司核心 AI 产品线。",
    images: [],
    tagsZh: ["0-1产品", "AI智能体", "对话式交互", "设计规范", "团队管理"],
    highlights: [
      {
        label: "对话式执行入口",
        content: "将底部输入区设计成主要工作台：角色选择、快捷能力标签、附件与语音入口集中在同一处，用户既可以自然语言提问，也可以一键进入税务体检、政策匹配、专家咨询、企业风险扫描等高频任务。",
      },
      {
        label: "五类数字人角色体系",
        content: "将税务、销售、老板、财务、信贷五类业务视角角色化。每个数字人都保留统一的头像、状态、角色切换和欢迎语结构，同时通过不同任务入口承接差异化场景，降低用户理解成本。",
      },
      {
        label: "场景任务卡片化",
        content: "把抽象 AI 能力转成可点击任务卡，例如查找适用政策、税务头条、工商风险扫描、全面税务体检。卡片统一采用图标、标题、说明、箭头四段结构，让用户不用先学习 prompt，也能快速开始。",
      },
      {
        label: "自动化任务闭环",
        content: "在定时任务等二级页面中，把通过对话创建和新建任务并列，支持行业每日快讯、每周线索挖掘等模板，体现从一次性问答到持续自动化执行的产品延展。",
      },
      {
        label: "深色工作台设计规范",
        content: "建立统一的深色界面规范：侧边栏、会话列表、角色头像、任务卡、标签按钮、表格和空状态保持一致的圆角、描边、层级与 hover 反馈，保证多模块快速扩展时仍然像同一套产品。",
      },
    ],
  },
  {
    slug: "didi-membership",
    titleZh: "滴滴代驾会员体系",
    titleEn: "DIDI Membership System",
    client: "滴滴出行",
    category: "品牌设计",
    year: "2021 — 2023",
    cover: "/images/works/didi-cover-new.jpg",
    summaryZh:
      "重构滴滴代驾会员等级视觉系统，建立从等级标识、勋章到特权页面的完整视觉语言，提升用户身份感知与留存。",
    problemZh:
      "会员体系视觉老旧，等级之间区分度弱，用户对自身等级权益感知模糊，缺少系统化的会员视觉规范。",
    approachZh:
      "重新定义会员等级色彩体系与标识规范，设计 Lv.1-Lv.6 等级徽章及专属特权图标系统，输出完整会员页面视觉方案并推动前端落地。",
    resultZh:
      "会员视觉升级后用户等级感知清晰度显著提升，会员页面访问深度增加，等级进阶转化率提升。",
    images: [
      "/images/works/didi-detail-1.jpg",
      "/images/works/didi-detail-2.jpg",
    ],
    tagsZh: ["会员体系", "等级标识", "品牌视觉", "UI设计"],
  },
  {
    slug: "xinju-ip",
    titleZh: "新桔代驾 IP 设计",
    titleEn: "Xinju IP Design",
    client: "滴滴代驾旗下 · 新桔代驾",
    category: "IP设计",
    year: "2022 — 2023",
    cover: "/images/works/pack/xinju-card.png",
    heroCover: "/images/works/pack/xinju-hero.png",
    videoUrl: "/videos/xinju-demo.mp4",
    summaryZh:
      "为滴滴代驾旗下品牌'新桔代驾'设计'桔小代'IP 形象体系，建立 3D 模型资产库与延展规范，带动品牌识别与业务增长。",
    problemZh:
      "新桔代驾作为独立子品牌缺乏差异化 IP 形象，用户心智中品牌辨识度不足，营销场景缺少统一的视觉锚点。",
    approachZh:
      "从品牌定位出发设计'桔小代'IP 形象，输出标准三视图、表情包、动作延展及 3D 模型资产库，制定 IP 使用规范手册确保跨场景应用一致性。",
    resultZh:
      "IP 形象上线后新桔代驾品牌搜索量增长，用户认知度与好感度提升，IP 资产在线上线下多场景复用。",
    images: [
      "/images/works/xinju-detail-1.jpg",
      "/images/works/xinju-detail-2.jpg",
      "/images/works/xinju-detail-3.jpg",
    ],
    tagsZh: ["IP设计", "3D资产", "品牌识别", "形象规范"],
  },
  {
    slug: "brand-case-study",
    titleZh: "微风企品牌全案",
    titleEn: "Weifengqi Brand Case",
    client: "杭州微风企科技",
    category: "品牌全案",
    year: "2023 — 2025",
    cover: "/images/works/pack/weifengqi-brand-card.png",
    heroCover: "/images/works/pack/weifengqi-brand-hero.png",
    summaryZh:
      "主导两届'财税数字化大会'及'AI 时代商业智能创新峰会'主视觉设计，建立企业品牌视觉规范与 VI 系统。",
    problemZh:
      "公司品牌调性不统一，大型峰会缺少系统性主视觉设计，VI 体系缺失导致营销素材风格混乱。",
    approachZh:
      "统筹企业品牌调性，制定完整 VI 系统与营销素材标准化模板；主导两届行业大会及 AI 峰会的主视觉创意设计与落地执行；带领设计团队完成企业文化建设全案。",
    resultZh:
      "品牌视觉一致性从 40% 提升至 95%，峰会视觉设计获得行业好评，企业品牌形象显著升级。",
    images: [
      "/images/works/brand-detail-11.jpg",
      "/images/works/brand-detail-12.jpg",
      "/images/works/brand-detail-13.jpg",
      "/images/works/brand-detail-14.jpg",
    ],
    tagsZh: ["品牌全案", "VI系统", "峰会视觉", "团队管理"],
  },
  {
    slug: "weifengqi-ip",
    titleZh: "微风企 IP 设计",
    titleEn: "Weifengqi Mascot · Xiaowei",
    client: "杭州微风企科技",
    category: "IP设计",
    year: "2024 — 2025",
    cover: "/images/works/pack/xiaowei-card.png",
    heroCover: "/images/works/pack/xiaowei-hero.png",
    summaryZh:
      "为微风企设计品牌 IP'小微'，构建从形象设定、表情体系到营销场景延展的完整 IP 生态，强化品牌亲和力。",
    problemZh:
      "B2B 财税科技品牌偏理性、缺乏温度，品牌 IP 空缺导致用户情感连接弱，营销传播缺少人格化载体。",
    approachZh:
      "基于品牌'智能财税'定位设计'小微'IP 形象，输出基础形象、表情体系、节日变装及场景插画，制定 B 端场景下的 IP 使用规范。",
    resultZh:
      "IP 形象在峰会、公众号、产品页面等场景落地，品牌亲和力提升，客户互动率与内容传播量增长。",
    images: [
      "/images/works/weifengqi-ip-1.jpg",
      "/images/works/weifengqi-ip-2.jpg",
      "/images/works/weifengqi-ip-3.jpg",
      "/images/works/pack/xiaowei-board-1.png",
      "/images/works/pack/xiaowei-board-2.png",
      "/images/works/pack/xiaowei-board-3.png",
      "/images/works/pack/xiaowei-board-4.png",
    ],
    tagsZh: ["IP设计", "品牌人格化", "B2B品牌", "表情体系"],
  },
  {
    slug: "marketing-operations",
    titleZh: "营销运营设计",
    titleEn: "Marketing & Operations Design",
    client: "多客户",
    category: "运营设计",
    year: "2020 — 至今",
    cover: "/images/works/pack/marketing-card.png",
    heroCover: "/images/works/pack/marketing-hero.png",
    summaryZh:
      "覆盖多行业营销运营视觉设计，包括线上活动、广告海报、品牌合作及运营推广视觉物料。",
    problemZh:
      "不同行业、不同场景的运营需求差异大，如何在保证品牌一致性的同时快速响应多样化需求，提升运营素材的传播效果。",
    approachZh:
      "建立分行业运营设计模板库，设计可配置的活动页面系统，制定品牌合作视觉规范与执行标准。",
    resultZh:
      "运营素材产出效率提升，跨行业设计一致性增强，活动页面点击及转化表现提升。",
    images: [
      "/images/works/marketing-detail-16.jpg",
      "/images/works/marketing-detail-17.jpg",
      "/images/works/marketing-detail-18.jpg",
      "/images/works/marketing-detail-19.jpg",
      "/images/works/marketing-detail-20.jpg",
      "/images/works/marketing-detail-21.jpg",
      "/images/works/marketing-detail-22.jpg",
      "/images/works/pack/marketing-detail-25.jpg",
      "/images/works/pack/marketing-detail-26.jpg",
    ],
    tagsZh: ["运营设计", "品牌合作", "活动视觉", "模板库"],
  },
  {
    slug: "self-driven-design",
    titleZh: "自我驱动设计",
    titleEn: "Self-Driven Design",
    client: "个人项目",
    category: "设计实验",
    year: "2024 — 至今",
    cover: "/images/works/self-driven-earmo/card-cover.jpg",
    heroCover: "/images/works/self-driven-earmo/cover.png",
    videoUrl: "/videos/self-driven-earmo/demo.mp4",
    summaryZh:
      "从真实工作痛点出发，自驱探索 AI 工作流与内容运营实验，把设计能力延展到工具效率、个人表达和平台传播。",
    problemZh:
      "日常设计工作存在大量重复操作，也存在个人表达被动、作品传播半径有限的问题。除了提升设计效率，也需要把设计判断转化为能被平台验证、持续迭代的内容系统。",
    approachZh:
      "通过 AI 辅助设计流程减少重复劳动；同时围绕小红书、抖音等平台进行内容运营实验，从选题、封面、标题、节奏到数据反馈，验证设计表达如何进入真实传播场景。",
    resultZh:
      "自驱项目逐渐从单点工具扩展为个人方法：既能提高日常设计效率，也能通过内容平台测试表达、积累影响力，并把反馈反哺到后续设计判断中。",
    images: [
      "/images/works/self-driven-earmo/1.png",
      "/images/works/self-driven-earmo/2.png",
      "/images/works/self-driven-earmo/3.png",
      "/images/works/self-driven-earmo/4.png",
      "/images/works/self-driven-earmo/5.png",
      "/images/works/self-driven-earmo/6.png",
      "/images/works/self-driven-earmo/7.png",
      "/images/works/self-driven-earmo/8.png",
    ],
    afterNoteImages: ["/images/works/pack/self-driven-detail-27.jpg"],
    tagsZh: ["设计工具", "AI工作流", "内容运营", "自驱项目"],
  },
];
