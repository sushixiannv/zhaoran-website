export interface NavItem {
  label: string;
  href: string;
}

/** 数据驱动的图标键，与 components/icons.tsx 中的 iconMap 对应 */
export type IconName =
  | "users"
  | "trending-up"
  | "chef-hat"
  | "film"
  | "pen-line"
  | "layers"
  | "rocket";

/** 真实结果卡片 */
export interface Result {
  id: string;
  icon: IconName;
  color: string;
  /** 结果数字 */
  value: string;
  /** 指标 */
  label: string;
  /** 补充说明 */
  note: string;
}

/** 服务卡片 */
export interface Service {
  id: string;
  icon: IconName;
  color: string;
  title: string;
  /** 核心说明 */
  description: string;
  /** 适用客户 */
  clients: string[];
  /** 适用场景 */
  scenarios: string[];
  /** 可提供内容 */
  deliverables: string[];
  /** 价值表达 */
  value: string;
  /** 行动文字 */
  cta: string;
}

/** 代表项目卡片 */
export interface Project {
  id: string;
  emoji: string;
  title: string;
  /** 项目结果 */
  result: string;
  description: string;
  /** 能力标签 */
  tags: string[];
  status: string;
  /** 成果/状态徽章颜色（十六进制） */
  color: string;
  /** 数据口径说明小字，例如「GMV，非个人收入」 */
  note?: string;
  /** 可展示项目清单（无链接、仅名称） */
  highlights?: string[];
}

/** 联系方式条目（href 仅在有真实链接时提供） */
export interface ContactItem {
  name: string;
  description: string;
  emoji: string;
  href?: string;
}

/** 合作方向入口 */
export interface ContactDirection {
  icon: IconName;
  color: string;
  label: string;
}
