# Volta uninstall

`volta uninstall` 命令允许您删除已安装在 `volta install` 中的任何全局包。

:::tip 提示
从 Volta 0.9.0 开始，您还可以使用软件包管理器卸载全局软件包，如下
npm uninstall --global 或 yarn global remove
:::

```sh
Uninstalls a tool from your toolchain

USAGE:
    volta uninstall [FLAGS] <tool>

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool>    The tool to uninstall, e.g. `node`, `npm`, `yarn`, or <package>
```
