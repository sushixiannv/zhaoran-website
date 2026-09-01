import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "enrollment",
    emoji: "🎯",
    title: "教培招生与活动转化",
    category: "线下获客",
    status: "已完成",
    summary: "参与教培招生与活动转化项目，累计约5万人次报名参与活动。",
    description:
      "服务于二三四线城市少儿教培/艺培机构，参与线下招生活动执行与交付，协助设计活动转化路径，推动体验课包成交，积累线下获客、活动转化和客户交付经验。",
    color: "#EC4899",
    metric: {
      value: "约5万人次",
      label: "累计活动报名",
      note: "报名参与活动人次，非收入或付费用户",
    },
    tags: ["线下获客", "活动交付", "客户转化"],
  },
  {
    id: "private-domain",
    emoji: "🎉",
    title: "教培私域裂变与小课包",
    category: "私域转化",
    status: "已完成",
    summary: "参与教培私域裂变与小课包活动，3天实现约20万元GMV。",
    description:
      "参与教培行业私域裂变与小课包活动，协助设计并推动裂变活动与转化路径，在3天活动周期内实现约20万元GMV。",
    color: "#7C3AED",
    metric: {
      value: "约20万元GMV",
      label: "3天活动周期",
      note: "GMV，非个人收入或净利润",
    },
    tags: ["私域裂变", "小课包", "活动转化"],
  },
  {
    id: "private-dinner",
    emoji: "🍽️",
    title: "小红书上门私宴",
    category: "内容获客",
    status: "已完成",
    summary: "通过小红书内容承接上门私宴需求，累计实现10万元以上GMV。",
    description:
      "通过小红书内容获客承接上门私宴需求，参与从前端内容获客到后端交付的完整链路，包括内容输出、客户咨询承接与现场统筹。",
    color: "#F59E0B",
    metric: {
      value: "10万元+ GMV",
      label: "小红书上门私宴",
      note: "GMV，非净利润",
    },
    tags: ["小红书获客", "上门私宴", "内容变现"],
  },
  {
    id: "second-brain",
    emoji: "🧠",
    title: "Obsidian + AI 第二大脑系统",
    category: "个人系统",
    status: "系统搭建中",
    summary:
      "搭建个人知识资产系统，包含灵感库、知识库、项目库、内容库等模块。",
    description:
      "搭建个人知识资产系统，包含灵感库、知识库、项目库、内容库、产品库等模块，服务AI学习、内容创作、项目复盘与个人成长。",
    color: "#A8D5BA",
    tags: ["Obsidian", "知识管理", "AI辅助"],
    highlights: ["基础库结构设计完成", "模板库初步设计", "探索多端同步方案"],
  },
  {
    id: "ai-blogger",
    emoji: "✍️",
    title: "AI博主内容系统",
    category: "内容系统",
    status: "流程已跑通",
    summary:
      "基于真实学习、实践、成长过程的AI博主账号，跑通公众号自动生成与发布流程。",
    description:
      "已完成AI博主定位梳理、选题池、爆款结构拆解，跑通公众号自动生成与自动发布流程。",
    color: "#EC4899",
    tags: ["AI博主", "内容系统", "自动化"],
    highlights: ["公众号自动发布流程跑通", "选题池与模板库搭建", "AI辅助工作流设计"],
  },
];
