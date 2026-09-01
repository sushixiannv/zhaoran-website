import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "内容增长与个人IP",
    highlight: true,
    icon: "trending-up",
    color: "#EC4899",
    items: [
      "个人IP定位与人设梳理",
      "小红书选题拆解",
      "爆款标题与内容结构",
      "用户痛点与转化逻辑",
      "内容平台表达风格优化",
      "个人经历故事化表达",
    ],
  },
  {
    title: "商业拆解与项目判断",
    highlight: true,
    icon: "briefcase",
    color: "#7C3AED",
    items: [
      "商业模式拆解",
      "项目机会判断",
      "MVP验证思路设计",
      "用户需求分析",
      "产品与服务定价",
      "交付链路拆解",
    ],
  },
  {
    title: "AI工具与自动化",
    icon: "brain",
    color: "#A8D5BA",
    items: [
      "ChatGPT深度对话",
      "Claude / Claude Code辅助",
      "Obsidian第二大脑",
      "内容自动生成流程",
      "公众号自动发布",
      "AI编程MVP探索",
    ],
  },
  {
    title: "心理学与用户洞察",
    icon: "message-circle",
    color: "#F59E0B",
    items: [
      "应用心理学背景",
      "用户动机分析",
      "情绪与认知模式",
      "行为心理判断",
      "培训与沟通经验",
    ],
  },
];
