import { SystemItem } from "@/lib/types";

export const systemsData: SystemItem[] = [
  {
    id: "flow-to-figma",
    nameZh: "Flow2Figma 插件",
    descriptionZh:
      "从流程图截图自动生成 Figma 可编辑规范图，解决设计交付中手工重绘流程图的痛点。",
    problemZh:
      "商业设计中经常需要将流程图、架构图转化为 Figma 规范稿，手工重绘耗时巨大且容易遗漏节点。每次约需 40 分钟，一个月几十次就占用了大量设计时间。",
    methodZh:
      "基于图像识别与 Figma Plugin API，自动识别流程图中的节点、连线和文字，在 Figma 中生成对应的规范组件，设计师只需微调即可完成交付。支持多种流程图工具（ProcessOn、Draw.io、Visio）的截图输入。",
    resultZh:
      "单次转换时间从 40 分钟降至 30 秒，月度节省设计时间约 20 小时。设计规范一致性提升 90%，团队新人上手无需培训。",
    media: [
      { type: "image", src: "/images/systems/flow-plugin.svg", caption: "插件界面截图" },
    ],
    link: "https://github.com/jinshan/flow2figma",
  },
  {
    id: "design-component-library",
    nameZh: "设计组件库与标准化系统",
    descriptionZh:
      "为团队搭建可复用的设计组件库，解决资源分散、重复造轮子的效率问题。",
    problemZh:
      "团队设计资源散落在各个项目文件中，缺乏统一规范。不同的设计师做同一个按钮可能产出 5 个版本，维护成本极高。新人入职需要 2 周才能熟悉基础组件。",
    methodZh:
      "基于 Atomic Design 方法论，从原子组件到页面模板逐层构建组件库。使用 Figma 的 Variant + Component Property 功能，建立命名规范、使用文档和版本管理流程。配合插件实现组件使用的自动化检测。",
    resultZh:
      "设计交付效率提升 40%，视觉一致性从 40% 提升至 95%。新人上手时间从 2 周缩短至 3 天。组件复用率超过 80%。",
    media: [
      { type: "image", src: "/images/systems/component-lib.svg", caption: "组件库结构示意" },
    ],
  },
  {
    id: "ai-design-workflow",
    nameZh: "AI 辅助设计工作流",
    descriptionZh:
      "建立 AI 驱动的设计工作流，将重复性劳动自动化，释放设计师的创意时间。",
    problemZh:
      "大量设计工作包含重复环节：多尺寸适配、背景处理、文案替换、风格延展。这些工作占设计师 40% 的时间，但与创意产出关系不大。单纯用 AI 出图无法解决商业场景中的精确控制需求。",
    methodZh:
      "将设计流程拆解为'策略 → 创意 → AI批量执行 → 人工质检'四个阶段。在批量执行环节接入 AI 工具链（Midjourney 概念探索 + ComfyUI 批量处理 + Photoshop 脚本后处理），保留人工决策环节的同时最大化自动化。",
    resultZh:
      "重复劳动减少 60%，项目周转周期缩短 50%。设计师每周可释放 1-2 天用于策略思考和创意探索。AI 出图的商业可用率从 20% 提升至 70%。",
    media: [
      { type: "image", src: "/images/systems/ai-workflow.svg", caption: "AI 工作流架构图" },
    ],
  },
];
