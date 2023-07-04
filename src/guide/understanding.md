# 了解 Volta

Volta 的工作是管理 JavaScript 命令行工具，如 node、npm、yarn 或作为 JavaScript 包的一部分发布的可执行文件。

与包管理器类似，Volta 会根据当前目录跟踪您正在处理的项目(如果有的话)。Volta 工具链中的工具会自动检测您所处的项目是否使用特定版本的工具，并为您路由到正确的工具版本。

## 管理您的工具链

您可以使用两个命令控制由 Volta 工具链管理的工具: `Volta install` 和 `Volta uninstall`。

### 安装 node 引擎

要将工具安装到工具链中，需要设置该工具的默认版本。Volta 将始终使用这个默认值，除非您在一个已配置 Volta 使用不同版本的项目目录中工作。当您选择默认版本时，Volta 也会将该版本下载到本地缓存中。

例如，您可以选择 node 的确切版本作为默认版本:

```bash
volta install node@14.15.5
```

你不需要指定一个精确的版本，在这种情况下，Volta 会选择一个合适的版本来匹配你的请求:

```bash
volta install node@14
```

你也可以指定最新版本，或者甚至完全不选择版本，Volta 将选择最新的 LTS 版本:

```bash
volta install node
```

一旦您运行了这些命令中的一个，在您的 PATH 环境(或 Windows 中的 PATH)中由 Volta 提供的节点可执行文件将在默认情况下自动运行您选择的 node 版本。

同样地，你可以使用 volta install npm 和 volta install Yarn 分别选择 npm 和 Yarn 包管理器的版本。这些工具将使用您选择的 Node 的默认版本运行。

### 安装二进制包{#installing-package-binaries}

使用 Volta，使用包管理器全局安装命令行工具也会将其添加到工具链中。例如，[`vuepress`](https://www.npmjs.com/package/vuepress) 包包含一个同名的可执行文件:

```bash
yarn global add vuepress
```

当您将一个包安装到工具链上时，Volta 会获取当前的默认 Node 版本，并将该工具固定到该引擎上(有关更多信息，请参阅[包二进制文件](/reference/advanced/packages#pinned-node-version))。
Volta 不会改变工具的固定引擎，除非你更新工具，无论如何。这样，您就可以确信您安装的工具不会在您背后更改。

## 管理您的项目

Volta 允许团队或协作者社区标准化他们在项目中使用的开发工具。

### 固定 Node 引擎

volta pin 命令允许您为项目选择 Node 引擎和包管理器版本:

```bash
volta pin node@12.20
volta pin yarn@1.19
```

Volta 会把这个放在你的 package.json，这样你就可以把你选择的工具提交到版本控制:

```bash
"volta": {
  "node": "12.20.2",
  "yarn": "1.19.2"
}
```

这样，每个使用 Volta 在项目上工作的人都会自动获得您选择的相同版本。

```bash
node --version # 12.20.2
yarn --version # 1.19.2
```

### 使用项目工具

node 和包管理器可执行文件并不是工具链中唯一的智能工具:工具链中的包二进制文件也知道您的当前目录，并尊重您所在项目的配置。

例如，安装 Typescript 包会将编译器 executable-tsc -添加到你的工具链中:

```bash
npm install --global typescript
```

根据你所在的项目，这个可执行文件会切换到项目选择的 TypeScript 版本:

```bash
cd /path/to/project-using-typescript-3.9.4
tsc --version # 3.9.4

cd /path/to/project-using-typescript-4.1.5
tsc --version # 4.1.5
Safety and convenien
```

### 安全方便

因为 Volta 的工具链总是跟踪你在哪里，它确保你使用的工具总是尊重你正在做的项目的设置。这意味着您不必担心在项目之间切换时更改已安装软件的状态。

更重要的是，当 Volta 运行一个工具时，它会覆盖它的轨迹，确保你的 npm 或 Yarn 脚本永远不会看到你的工具链中有什么。

这两个特性的结合意味着 Volta 解决了**全局包的问题**。换句话说，Volta 为您提供了全局包安装的便利，但没有危险。

例如，你可以使用 `npm i -g typescript` 安全地安装 TypeScript，并享受直接调用 tsc 的便利无需担心项目的包脚本可能意外地依赖于您的机器的全局状态。
