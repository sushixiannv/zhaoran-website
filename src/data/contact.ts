import type { ContactDirection, ContactItem } from "./types";

export const contactIntro = {
  title: "有真实业务问题，欢迎找我聊聊",
  description:
    "如果你正在考虑AI品牌内容、B端AI漫剧、知识资产建设或产品原型验证，可以带着具体业务场景与我沟通。",
};

export const contactDirections: ContactDirection[] = [
  { icon: "film", color: "#EC4899", label: "AI漫剧合作" },
  { icon: "pen-line", color: "#7C3AED", label: "品牌内容合作" },
  { icon: "layers", color: "#F59E0B", label: "知识资产建设" },
  { icon: "rocket", color: "#A8D5BA", label: "产品原型咨询" },
];

/** 社交与联系方式（href 仅在有真实账号/链接时提供，否则留空按非点击展示） */
export const contactItems: ContactItem[] = [
  { name: "微信", description: "可加微信详聊", emoji: "💬" },
  { name: "邮箱", description: "可发邮件沟通", emoji: "📧" },
  { name: "小红书", description: "分享AI应用日常", emoji: "📕" },
  { name: "微信公众号", description: "关注获取最新AI内容", emoji: "📱" },
  { name: "X (Twitter)", description: "国际视野分享", emoji: "🐦" },
];
