import { defineConfig } from "vitepress";

const nav = [
  { text: "首页", link: "/" },
  { text: "指南", link: "/guide/introduction" },
  { text: "参考", link: "/reference/index" },
  { text: "官方网站", link: "https://volta.sh/" },
];

const sidebar = {
  "/guide/": [
    { text: "介绍", link: "/guide/introduction" },
    { text: "快速开始", link: "/guide/getting-start" },
    { text: "了解 Volta", link: "/guide/understanding" },
  ],
  "/reference/": [
    {
      text: "参考",
      items: [
        { text: "volta 命令", link: "/reference/index" },
        { text: "volta fetch", link: "/reference/fetch" },
        { text: "volta install", link: "/reference/install" },
      ],
    },
    {
      text: "高级的",
      items: [],
    },
  ],
};

export default defineConfig({
  lang: "zh-CN",
  title: "Volta", // 网站标题
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar: sidebar,
    lastUpdatedText: "最后更新时间",
    outline: [2, 3],
    outlineTitle: "目录",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/document-translate/volta",
      },
    ],
    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2023-present GuoJiKun",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
    },
  },
});
