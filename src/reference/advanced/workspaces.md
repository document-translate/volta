# 工作区(Workspace)

关于如何在工作空间环境中使用 Volta 的详细信息，其中在单个 repo 中有多个项目，并且它们都希望共享 Volta 设置。

:::warning 警告
此功能是在 Volta 0.8.2 中添加的，在以前的版本中不起作用。
:::

## 扩展配置

在 `package.json` 的 `"volta"` 部分中，您可以使用键为 `"extends"` 来指定一个条目。
该条目的值应该是另一个 JSON 文件的路径，该文件也有一个 `"volta"` 部分。
相对路径将相对于设置它们的文件进行解析。任何 Volta 设置（例如 `"node"` 或 `"yarn"` 版本）都将与由 `"extends"` 指向的文件中的设置合并，当前文件具有优先权。
因此，如果您想为所有项目使用单个 Node 版本，则应在根目录下设置这些版本，并且每个项目只需要添加 `"extends": "../path/to/root/package.json"` 即可。

### 示例{#examples}

给定以下文件夹结构和 `package.json` 的内容：

```bash
.
├── package.json
└── packages
    ├── cli
    │   └── package.json
    └── utils
        └── package.json
```

- `package.json`

  ```json
  {
    "volta": {
      "node": "12.16.1",
      "yarn": "1.22.4"
    }
  }
  ```

- `packages/cli/package.json`

  ```json
  {
    "volta": {
      "extends": "../../package.json"
    }
  }
  ```

- `packages/utils/package.json`

  ```json
  {
    "volta": {
      "extends": "../../package.json"
    }
  }
  ```

在工作区的任何地方运行 `node` 将会使用 Node `12.16.1`。如果你在根目录的 `package.json` 中更新了该版本，它将自动应用于所有项目，而无需在每个子项目中重复设置。

## Pinning Tools

当你运行 `volta pin` 来选择工作区内的一个工具版本时，Volta 会将这些设置添加到最近的 `package.json` 中。
所以，在上面的例子中，如果你在 `packages/utils` 子项目中运行了 `volta pin node@14`，新版本的 Node 将被写入到 `packages/utils/package.json`，
并且仅适用于 `utils` 子项目，而不是其他任何项目。这样可以让你轻松地根据每个项目自定义工具版本。

如果您希望使用 `volta pin` 对根配置进行更改，请首先进入工作区根目录，然后从那里运行 `volta pin`.

## Hooks

如果您的项目使用[项目 hooks](/advanced/hooks)，您可以将它们放置在子项目中的 `.volta` 目录中，或者根目录中的 `.volta` 目录中。
Volta 会在由 `"extends"` 键指向的每个位置查找钩子，以便可以根据需要自定义设置。

## Project-local Binaries

除了在每个级别上寻找钩子（hook）之外，Volta 还会在每个级别上查找项目本地依赖项，以便在运行第三方工具时使用。
它将尝试在与 `"extends"`引用的每个文件相关的 `node_modules/.bin` 目录中找到它。
