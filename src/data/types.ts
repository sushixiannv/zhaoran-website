export interface NavItem {
  label: string;
  href: string;
}

/** 数据驱动的图标键，与 components/icons.tsx 中的 iconMap 对应 */
export type IconName =
  | "brain"
  | "briefcase"
  | "file-text"
  | "trending-up"
  | "lightbulb"
  | "message-circle";

export interface SkillGroup {
  title: string;
  highlight?: boolean;
  icon: IconName;
  color: string;
  items: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  /** 数据口径说明，例如「GMV，非个人收入」 */
  note?: string;
}

export interface Project {
  id: string;
  emoji: string;
  title: string;
  category: string;
  status?: string;
  summary: string;
  description: string;
  /** 成果徽章颜色（十六进制） */
  color: string;
  metric?: ProjectMetric;
  tags: string[];
  /** 成果要点（无 metric 的项目使用，如个人系统类项目） */
  highlights?: string[];
}

export interface Voyage {
  id: string;
  emoji: string;
  title: string;
  category: string;
  /** 类型徽章颜色（十六进制） */
  color: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactItem {
  name: string;
  description: string;
  emoji: string;
}

export interface WhatIDoItem {
  icon: IconName;
  color: string;
  title: string;
  description: string;
}
