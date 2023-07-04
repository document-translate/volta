# 卸载 Volta

如果 Volta 不能满足你的需求，你想要卸载它，我们很遗憾看到你离开!我们将非常感谢任何反馈，你可能有什么是缺失的经验，以便我们可以改善伏特在未来。你可以通过 [Twitter](https://twitter.com/usevolta)、
[Discord](https://discord.gg/hgPTz9A) 或 [GitHub](https://github.com/volta-cli/volta) 联系到我们。

## Unix 上卸载

- 删除整个 `~/.volta` 目录

```bash
rm -rf ~/.volta
```

- 编辑 shell 配置文件脚本，删除提到 Volta 的两行。Volta 默认定位的配置文件脚本如下:
  1. `.bashrc`
  2. `.bash_profile`
  3. `.zshrc`
  4. `config.fish`
  5. `.profile`

:::warning 注意
在进行此更改后，您可能需要打开一个新的终端，因为许多 shell 会缓存最近命令的位置
:::

## Windows 上卸载

在 Windows 上，可以通过在 `开始>设置>应用>安装的应用` 中选择它并选择卸载来卸载 Volta。
