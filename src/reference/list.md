# Volta list

volta list 命令允许您检查已安装的 Node 运行时、包管理器和带有二进制文件的包。

命令格式如下:

```bash
Displays the current toolchain

USAGE:
    volta list [FLAGS] [OPTIONS] [tool]

FLAGS:
    -c, --current
            Show the currently-active tool(s).

            Equivalent to `volta list` when not specifying a specific tool.
    -d, --default
            Show your default tool(s).

        --verbose
            Enables verbose diagnostics

        --quiet
            Prevents unnecessary output

    -h, --help
            Prints help information


OPTIONS:
        --format <format>
            Specify the output format.

            Defaults to `human` for TTYs, `plain` otherwise. [possible values: human, plain]

ARGS:
    <tool>
            The tool to lookup: `all`, `node`, `yarn`, or the name of a package or binary.
```

详细设计, 请查看 [RFC #34](https://github.com/volta-cli/rfcs/pull/34).
