import { defineConfig } from "vitepress";
import genSitemap from "./config/gen-sitemap.js";

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
        { text: "volta uninstall", link: "/reference/uninstall" },
        { text: "volta pin", link: "/reference/pin" },
        { text: "volta list", link: "/reference/list" },
        { text: "volta completions", link: "/reference/completions" },
        { text: "volta which", link: "/reference/which" },
        { text: "volta setup", link: "/reference/setup" },
        { text: "volta run", link: "/reference/run" },
        { text: "volta help", link: "/reference/help" },
      ],
    },
    {
      text: "高级的",
      collapsed: true,
      items: [
        { text: "Hooks", link: "/reference/advanced/hooks" },
        {
          text: "Packages Binaries",
          link: "/reference/advanced/packages",
        },
        { text: "安装程序", link: "/reference/advanced/installers" },
        { text: "工作区 Workspace", link: "/reference/advanced/workspaces" },
        { text: "卸载 Volta", link: "/reference/advanced/uninstall" },
        { text: "pnpm 支持", link: "/reference/advanced/pnpm" },
      ],
    },
  ],
};

export default defineConfig({
  lang: "zh-CN",
  title: "Volta", // 网站标题
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav,
    sidebar: sidebar,
    lastUpdatedText: "最后更新时间",
    outline: [2, 3],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/document-translate/volta",
      },
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    search: {
      provider: "local",
    },
    outlineTitle: "章节目录",
    footer: {
      message:
        "此文档为非官方翻译版本 - <div class='vp-doc' style='display:inline-flex;'><a href='https://volta.sh/' target='__blank'>官方网站</a></div>",
      copyright: "Copyright © 2023-present GuoJiKun",
    },
  },
  buildEnd: (siteConfig) => {
    const { pages, outDir } = siteConfig;
    const conf = {
      host: "https://volta.jikun.dev/",
      pages,
      outDir,
    };
    genSitemap(conf);
  },
});
