import { Problem } from "@/lib/types";

export const problemsData: Problem[] = [
  {
    id: "flow-to-figma",
    category: "进行中",
    problem: "流程图截图 → 自动生成 Figma 规范图",
    solution:
      "开发 Flow2Figma 插件，图片自动识别结构并转为可编辑设计稿，单次从 40 分钟缩至 30 秒。",
    impact: "设计规范一致性提升 90%，成为团队日常工具",
  },
  {
    id: "component-library",
    category: "进行中",
    problem: "团队资产沉淀困难 → 搭建设计组件库",
    solution:
      "建立标准化组件库与使用文档，新项目从组件库起步而非从旧文件另存为。",
    impact: "交付效率提升 40%，复用率超 80%",
  },
  {
    id: "ai-workflow",
    category: "持续迭代",
    problem: "重复设计劳动 → 建立 AI 工作流",
    solution:
      "将抠图、延展、多尺寸适配等重复环节自动化，设计师聚焦策略与创意判断。",
    impact: "重复劳动减少 60%，项目周期缩短 50%",
  },
  {
    id: "visual-standard",
    category: "已落地",
    problem: "商业视觉复杂度高 → 建立统一规范",
    solution:
      "建立 VI 系统、营销素材标准化模板与品牌视觉检查清单。",
    impact: "品牌一致性从 40% 提升至 95%",
  },
];
