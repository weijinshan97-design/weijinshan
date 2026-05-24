import { Work } from "@/lib/types";

export const worksData: Work[] = [
  {
    slug: "wbit-ai-platform",
    titleZh: "Wbit AI 助手平台",
    titleEn: "Wbit AI Assistant Platform",
    client: "杭州微风企科技",
    category: "AI 产品设计",
    year: "2024 — 2025",
    cover: "/images/works/game-cover.jpg",
    summaryZh:
      "0-1 主导 Wbit AI 助手平台整体产品设计，定义五大 AI 智能体与数字员工的交互体验，搭建设计规范框架，带领实习生完成上线，覆盖企业经营风险防控与智能营销。",
    problemZh:
      "小微企业缺乏财税风险识别与智能营销能力，传统软件操作复杂。如何将五个 AI 智能体（风控、营销、政策、信贷、报告）和五种角色化数字员工（老板/财务/采购/销售/中介）整合为一套统一、低门槛的对话式产品体验，是核心设计挑战。",
    approachZh:
      "0-1 定义产品信息架构：以 AI 对话为主交互入口，辅以五大数字员工的角色面板；设计每个智能体的使用场景与交互流程（如风险扫描、政策匹配、信贷智能推荐）；搭建设计规范框架与组件库确保多模块视觉统一，指导实习生完成前端开发。",
    resultZh:
      "产品上线后服务于税务、金融、政务园区等多行业客户，AI 对话式交互降低企业使用门槛，财务场景人工审核工作量下降 70%，成为公司核心产品线。",
    images: [],
    tagsZh: ["0-1产品", "AI智能体", "对话式交互", "设计规范", "团队管理"],
    highlights: [
      {
        label: "AI 对话式交互主入口",
        content: "以对话为核心交互，用户用自然语言提问（如'这家公司现金流健康吗''帮我找匹配的贷款方案'），智能体在对话流中直接返回结构化结果。设计师需解决：如何处理 AI 生成中的等待态？如何平衡对话流畅度与信息密度？错误回答如何优雅降级？",
      },
      {
        label: "五大智能体角色体系",
        content: "将五类 AI 能力封装为角色化智能体：风控决策（风险扫描与预警）、智能营销（潜客发现与推荐）、政策匹配（补贴申报全流程）、智能信贷（百款方案匹配）、报告洞察（多维度专业报告）。每个智能体有独立的使用场景、对话风格和信息展示模式，但共享统一的设计规范。",
      },
      {
        label: "五大数字员工 · 多角色工作台",
        content: "针对不同企业角色设计专属工作面板——老板看经营驾驶舱与风险预警，财务操作票据识别与智能记账，采购监控供应商风险评级，销售关注商机预测与话术辅助，中介聚焦客源匹配。同一套数据，五种视角，五种交互。",
      },
      {
        label: "从 0 到 1 设计规范框架",
        content: "在项目初期同步搭建设计规范框架与组件库，定义统一的色彩体系、字体层级、间距网格和组件变体。指导实习生依据规范进行页面延展，确保五位智能体和五大工作台的视觉一致性，也为后续产品迭代奠定规模化基础。",
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
    cover: "/images/works/game-cover.jpg",
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
    year: "2023 — 至今",
    cover: "/images/works/fintech-cover.jpg",
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
    titleZh: "微风企 IP 设计 · 小微",
    titleEn: "Weifengqi Mascot · Xiaowei",
    client: "杭州微风企科技",
    category: "IP设计",
    year: "2024 — 至今",
    cover: "/images/works/4.jpg",
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
    cover: "/images/works/8.jpg",
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
    cover: "/images/works/7.jpg",
    summaryZh:
      "从真实工作痛点出发，自驱开发 Figma 插件、设计组件库与 AI 工作流，探索设计效率的边界。",
    problemZh:
      "日常设计工作存在大量重复操作——手动重绘流程图、组件复用率低、多尺寸适配耗时。需要工具化、系统化的解决思路。",
    approachZh:
      "自研 Flow2Figma 插件实现流程图自动转译，搭建医学插图组件库覆盖 32 个高频组件，引入 AI 辅助设计流程探索效率边界。",
    resultZh:
      "多个自研工具在日常工作中稳定使用，组件库覆盖 80% 课程场景，设计效率显著提升。",
    images: [
      "/images/works/6.jpg",
      "/images/works/7.jpg",
      "/images/works/5.jpg",
    ],
    tagsZh: ["设计工具", "组件库", "AI工作流", "自驱项目"],
  },
];
