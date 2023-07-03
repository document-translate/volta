# Volta pin

`volta pin`命令将更新一个项目的 package.json 文件以使用工具的选定版本。

:::tip 提示
`volta pin`只适用于 Node 和包管理器(例如 npm 或 Yarn)。对于依赖项，你应该使用 `npm install` 或 `yarn add` 来更新选择的版本。
:::

命令格式如下:

```bash
Pins your project's runtime or package manager

USAGE:
    volta pin [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to pin, like `node@lts` or `yarn@^1.14`.
```
