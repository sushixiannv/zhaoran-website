import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "enrollment",
    emoji: "🎯",
    title: "教培招生与活动转化",
    result: "累计约5万人次报名参与活动",
    description:
      "服务于少儿教培与艺培机构，参与线下招生活动、体验课包转化和客户交付，协助设计活动报名与后续转化路径。",
    tags: ["活动策划", "招生转化", "项目交付", "客户沟通"],
    status: "已完成",
    color: "#EC4899",
    note: "累计报名参与活动人次",
  },
  {
    id: "private-domain",
    emoji: "🎉",
    title: "教培私域裂变与小课包",
    result: "3天约20万元GMV",
    description:
      "参与教培行业私域裂变与小课包活动，协助设计裂变机制、活动流程和转化路径，在3天活动周期内实现约20万元GMV。",
    tags: ["私域裂变", "产品组包", "活动转化", "短周期执行"],
    status: "已完成",
    color: "#7C3AED",
    note: "GMV，非个人收入或净利润",
  },
  {
    id: "private-dinner",
    emoji: "🍽️",
    title: "小红书上门私宴",
    result: "累计10万元以上GMV",
    description:
      "通过小红书内容承接上门私宴需求，参与内容获客、客户咨询、需求确认、供应商协调和项目交付。",
    tags: ["小红书获客", "高意向客户承接", "服务成交", "项目统筹"],
    status: "已完成",
    color: "#F59E0B",
    note: "GMV，非净利润",
  },
  {
    id: "food-beverage-supply-chain",
    emoji: "🥤",
    title: "食品饮品供应链品牌合作方案",
    result: "完成从渠道商视角到品牌方合作视角的商务方案重构",
    description:
      "进入食品饮品供应链真实业务场景，梳理品牌方在渠道、仓储、履约、内容推广和销售场景上的需求，参与面向品牌方的合作方案与商务材料重构。",
    tags: ["B端需求理解", "商业方案", "品牌合作", "内容与渠道整合"],
    status: "已完成",
    color: "#7C3AED",
  },
  {
    id: "ai-prototypes",
    emoji: "🛠️",
    title: "AI工具与网页原型",
    result: "完成多个网页、小工具和数据产品原型",
    description:
      "借助Claude Code、Codex等AI编程工具，将产品想法转化为可运行原型，覆盖个人管理、数据看板、内容工具和AI生成工作流等方向。",
    tags: ["需求梳理", "AI编程协作", "MVP搭建", "产品测试"],
    status: "持续更新",
    color: "#A8D5BA",
    highlights: [
      "生理期管理工具",
      "足球赛事数据看板",
      "个人网站",
      "AI视频生成工具",
    ],
  },
];
