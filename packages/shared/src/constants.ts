import type { SiteConfig } from "./types";

export const SITE_CONFIG = {
  website: {
    name: "VVK Space",
    description: "个人主站 - 欢迎来到我的数字空间",
    url: "https://vvk.space",
    keywords: ["个人网站", "博客", "技术"]
  } as SiteConfig,

  portfolio: {
    name: "Portfolio - VVK",
    description: "作品集 - 展示我的项目和作品",
    url: "https://portfolio.vvk.space",
    keywords: ["作品集", "项目", "案例"]
  } as SiteConfig,

  weekly: {
    name: "Weekly - VVK",
    description: "技术周刊 - 分享技术见解和学习笔记",
    url: "https://weekly.vvk.space",
    keywords: ["技术周刊", "博客", "学习笔记"]
  } as SiteConfig
};

// 通用常量
export const COMMON = {
  defaultLocale: "zh-CN",
  dateFormat: "YYYY-MM-DD",
  timeZone: "Asia/Shanghai"
};
