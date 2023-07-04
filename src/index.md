---
title: Volta
layout: home
hero:
  name: Volta
  tagline: The Hassle-Free JavaScript Tool Manager
  actions:
    - theme: brand
      text: 开始
      link: /guide/what-is-vitepress
    - theme: alt
      text: GitHub
      link: https://github.com/document-translate/volta

features:
  - title: 快速-Fast
    details: 快速无缝地安装和运行任何JS工具!Volta是在Rust中构建的，并作为一个时髦的静态二进制文件发布。
  - title: 可靠-Reliable
    details: 确保项目中的每个人都有相同的工具，而不会干扰他们的工作流程。
  - title: 通用-Universal
    details: 无论是包管理器、Node运行时还是操作系统，您只需要一个命令:volta install。
---

<div class="home-other">

## 尝试 Volta{volta}

```bash
# 安装 Volta
curl https://get.volta.sh | bash

# 安装 Node
volta install node

# 使用 Node
node
```

</div>

<style scoped>
.home-other {
    padding-top: 24px;
    margin: 0 auto;
    max-width: 1152px
}
.home-other > h2 {
    margin-bottom: 24px;
}

.home-other div[class*="language-"] {
    position: relative;
    margin: 16px -24px;
    background-color: var(--vp-code-block-bg);
    overflow-x: auto;
    transition: background-color 0.5s;
}

@media (min-width: 640px) {
    .home-other div[class*="language-"] {
        border-radius: 8px;
        margin: 16px 0;
    }
}

@media (max-width: 639px) {
    .home-other li div[class*="language-"] {
        border-radius: 8px 0 0 8px;
    }
}

.home-other div[class*="language-"] + div[class*="language-"],
.home-other div[class$="-api"] + div[class*="language-"],
.home-other div[class*="language-"] + div[class$="-api"] > div[class*="language-"] {
    margin-top: -8px;
}
.home-other [class*="language-"] pre,
.home-other [class*="language-"] code {
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

.home-other [class*="language-"] pre {
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 20px 0;
    background: transparent;
    overflow-x: auto;
}

.home-other [class*="language-"] code {
    display: block;
    padding: 0 24px;
    width: fit-content;
    min-width: 100%;
    line-height: var(--vp-code-line-height);
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-block-color);
    transition: color 0.5s;
}

.home-other [class*="language-"] code .highlighted {
    background-color: var(--vp-code-line-highlight-color);
    transition: background-color 0.5s;
    margin: 0 -24px;
    padding: 0 24px;
    width: calc(100% + 48px);
    display: inline-block;
}

.home-other [class*="language-"] code .highlighted.error {
    background-color: var(--vp-code-line-error-color);
}

.home-other [class*="language-"] code .highlighted.warning {
    background-color: var(--vp-code-line-warning-color);
}

.home-other [class*="language-"] code .diff {
    transition: background-color 0.5s;
    margin: 0 -24px;
    padding: 0 24px;
    width: calc(100% + 48px);
    display: inline-block;
}

.home-other [class*="language-"] code .diff:before {
    position: absolute;
    left: 10px;
}

.home-other [class*="language-"] .has-focused-lines .line:not(.has-focus) {
    filter: blur(0.095rem);
    opacity: 0.4;
    transition: filter 0.35s, opacity 0.35s;
}

.home-other [class*="language-"] .has-focused-lines .line:not(.has-focus) {
    opacity: 0.7;
    transition: filter 0.35s, opacity 0.35s;
}

.home-other [class*="language-"]:hover .has-focused-lines .line:not(.has-focus) {
    filter: blur(0);
    opacity: 1;
}

.home-other [class*="language-"] code .diff.remove {
    background-color: var(--vp-code-line-diff-remove-color);
    opacity: 0.7;
}

.home-other [class*="language-"] code .diff.remove:before {
    content: "-";
    color: var(--vp-code-line-diff-remove-symbol-color);
}

.home-other [class*="language-"] code .diff.add {
    background-color: var(--vp-code-line-diff-add-color);
}

.home-other [class*="language-"] code .diff.add:before {
    content: "+";
    color: var(--vp-code-line-diff-add-symbol-color);
}

.home-other div[class*="language-"].line-numbers-mode {
    padding-left: 32px;
}

.home-other .line-numbers-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    border-right: 1px solid var(--vp-code-block-divider-color);
    padding-top: 20px;
    width: 32px;
    text-align: center;
    font-family: var(--vp-font-family-mono);
    line-height: var(--vp-code-line-height);
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-line-number-color);
    transition: border-color 0.5s, color 0.5s;
}

.home-other [class*="language-"] > button.copy {
    direction: ltr;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: 1px solid var(--vp-code-copy-code-border-color);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    background-color: var(--vp-code-copy-code-bg);
    opacity: 0;
    cursor: pointer;
    background-image: var(--vp-icon-copy);
    background-position: 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
}

.home-other [class*="language-"]:hover > button.copy,
.home-other [class*="language-"] > button.copy:focus {
    opacity: 1;
}

.home-other [class*="language-"] > button.copy:hover,
.home-other [class*="language-"] > button.copy.copied {
    border-color: var(--vp-code-copy-code-hover-border-color);
    background-color: var(--vp-code-copy-code-hover-bg);
}

.home-other [class*="language-"] > button.copy.copied,
.home-other [class*="language-"] > button.copy:hover.copied {
    border-radius: 0 4px 4px 0;
    background-color: var(--vp-code-copy-code-hover-bg);
    background-image: var(--vp-icon-copied);
}

.home-other [class*="language-"] > button.copy.copied:before,
.home-other [class*="language-"] > button.copy:hover.copied:before {
    position: relative;
    top: -1px;
    left: -65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--vp-code-copy-code-hover-border-color);
    border-right: 0;
    border-radius: 4px 0 0 4px;
    width: 64px;
    height: 40px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-code-copy-code-active-text);
    background-color: var(--vp-code-copy-code-hover-bg);
    white-space: nowrap;
    content: "Copied";
}

.home-other [class*="language-"] > span.lang {
    position: absolute;
    top: 2px;
    right: 8px;
    z-index: 2;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-dark-3);
    transition: color 0.4s, opacity 0.4s;
}

.home-other [class*="language-"]:hover > button.copy + span.lang,
.home-other [class*="language-"] > button.copy:focus + span.lang {
    opacity: 0;
}
</style>
