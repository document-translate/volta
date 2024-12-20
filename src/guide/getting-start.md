# 快速开始

## 安装 Volta

### Unix 安装{#unix}

在大多数 Unix 系统(包括 macOS)上，您可以使用一个命令安装 Volta:

```bash
curl https://get.volta.sh | bash
```

对于 [bash](https://www.gnu.org/software/bash/), [zsh](https://www.zsh.org/) 和
[fish](http://fishshell.com/)，这个安装程序将自动更新控制台启动脚本。如果您希望防止修改控制台启动脚本，请参阅跳过 Volta 设置。要手动配置你的 shell 使用 Volta，编辑你的控制台启动脚本如下:

-   将 VOLTA_HOME 变量设置为$HOME/.volta <br/>
-   将$VOLTA_HOME/bin 添加到 PATH 变量的开头

### Windows 安装

对于 Windows，推荐使用 [winget](https://github.com/microsoft/winget-cli) 安装 Volta

```bash
winget install Volta.Volta
```

如果您愿意，您可以直接[下载](https://github.com/volta-cli/volta/releases/latest)安装程序并手动运行它来安装 Volta。

### Windows 下的 linux 子系统

如果您在 Linux 的 Windows 子系统中使用 Volta，请遵循上面的 Unix 安装指南。

## 选择默认的 Node 版本

这是 Volta 将在有固定版本的项目之外的其它地方使用的版本。

要选择特定版本的 Node，可以运行：

```bash
volta install node@20.11.0
```

或者使用最新的 LTS 版本，可以运行：

```bash
volta install node
```
