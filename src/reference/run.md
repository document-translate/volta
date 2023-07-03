# Volta run

volta run 命令将使用命令行中指定的工具版本运行您提供的命令。任何没有直接指定版本的工具都将由 Volta 通常的上下文检测来确定其版本，使用项目中的固定版本或默认版本。

--no-yarn 标志允许您覆盖该决定，并在命令运行时强制环境中不包含 yarn。类似地，--bundled-npm 标志允许你强制使用 npm 与 Node 绑定的版本，而忽略任何自定义版本。

:::tip 提示
版本设置必须出现在要运行的命令之前。命令之后的任何内容都将被视为参数不会被 volta 读到
:::

此外，您可以使用 `--env NAME-value option` 选项指定要传递给命令的自定义环境变量。

命令格式如下:

```bash
Run a command with custom Node, npm, and/or Yarn versions

USAGE:
    volta run [FLAGS] [OPTIONS] <command> [--] [args]...

FLAGS:
        --bundled-npm    Forces npm to be the version bundled with Node
        --no-yarn        Disables Yarn
        --verbose        Enables verbose diagnostics
        --quiet          Prevents unnecessary output
    -h, --help           Prints help information

OPTIONS:
        --node <version>         Set the custom Node version
        --npm <version>          Set the custom npm version
        --yarn <version>         Set the custom Yarn version
        --env <NAME=value>...    Set an environment variable (can be used multiple times)

ARGS:
    <command>    The command to run
    <args>...    Arguments to pass to the command
```
