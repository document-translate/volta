# 包的二进制文件

详细介绍安装二进制包的过程。

## 自定义下载位置

在内部，`volta install <tool>` 使用 npm 风格的解析来确定可用的版本和包二进制文件的下载位置。因此，要重定向并使用内部存储库(即从私有 repo 安装内部工具)，
您可以在主目录中创建.npmrc 文件。在解析和下载工具以及解析给定工具的依赖项时，将尊重指定的选项。

## 固定 Node 版本{#pinned-node-version}

正如在[了解 Volta](/guide/understanding#installing-package-binaries) 中所描述的，Volta 将在安装工具时固定 Node 的一个版本，这样
即使默认的 Node 版本发生了变化，该工具也可以继续使用。用于确定应该固定哪个版本的过程如下:

### 在 Volta 0.68 版本之前

- 如果包的 package.json 中指定的 Node。请使用符合要求的最新版本的 Node
- 否则，请使用最新版本的 Node

### Volta 0.6.8 ~ 0.8.7 版本

- 如果包的 package.json 中指定的 Node。请使用符合要求的最新 LTS 版本的 Node
- 如果没有满足要求的 LTS 版本，则使用满足 Node 的最新整体版本
- 如果 Node 不可用，请使用最新的 LTS 版本的 Node

### Volta 0.9 及更高版本

从 Volta 0.9.0 开始，Volta 将把一个包固定到当前的默认 Node 版本(安装该工具时)。你可以通过改变默认值来改变这个版本，或者运行`volta run`安装:

```bash
volta run --node 15 npm i -g ember-cli
```
