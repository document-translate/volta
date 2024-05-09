# 安装程序

有关安装程序如何工作以及如何为托管安装创建自己的自定义安装程序/发行版的详细信息。

## Current Installers

从 Volta 0.7.0 开始，所有的官方安装程序都以相同的方式工作:

1. 解压 Volta 二进制文件
2. 使用解压缩的 `volta` 二进制文件调用 `volta setup` (有关更多信息，请参见 [volta setup](/reference/setup))。

### Windows 安装程序

Windows安装程序将把所有的二进制文件解压到 `Program Files\Volta` 目录，并将该文件夹添加到系统的 `Path` 环境变量中。
它还将在该目录中为以下工具创建垫片（shims）：

- `node`
- `npm`
- `npx`
- `yarn`

### Unix 安装程序

Unix安装程序将所有二进制文件解压到 `~/.volta/bin` 目录中，因此它们仅针对特定用户进行安装。

## 跳过 Volta 设置{#skipping-volta-setup}

如果你想运行安装程序，但不希望你的配置文件脚本被 `volta setup` 修改，你可以将 `--skip-setup` 选项传递给安装程序:

```bash
curl https://get.volta.sh | bash -s -- --skip-setup
```

:::warning 警告
我们目前不支持在 Windows 上跳过 volta 设置。
:::

## 安装旧版本{#installing-old-versions}

由 [get.volta.sh](https://get.volta.sh)提供的默认安装脚本仅支持安装 Volta 1.1.0 及以上版本。
如果您想安装旧版本，可以使用以下 Unix 脚本进行安装，并将 `1.0.8` 替换为您想要安装的版本。

```bash
curl https://raw.githubusercontent.com/volta-cli/volta/8f2074f423c65405dfba9858d9bcf393c38ffb45/dev/unix/volta-install.sh | bash -s -- --version 1.0.8
```

对于 Windows，您可以下载并安装你想要安装的特定版本的 `.msi` 文件。

:::warning 警告
Volta 不支持降级，因此为了降级，您需要完全卸载 Volta，然后安装较低版本。
:::

## 自定义安装{#custom-installers}

创建自定义安装程序/分发方法，需要两个必要步骤和一个可选步骤：

### 分发二进制文件

这些二进制文件需要传送到目标机器上。
所需的二进制文件列表将在发布文件中的 `volta.manifest` 中列出。
截至 Volta 0.7.0 版本，所需的文件如下：

- `volta[.exe]`
- `volta-shim[.exe]`
- `volta-migrate[.exe]`

这些二进制文件都需要在同一个目录中分发，并且该目录应该在 `PATH` 上，以便对 `volta` 命令的调用能够正常工作。

### Shim Directory

还需要将 Volta shim 目录添加到 `PATH` 中，以便 shims 能够正常工作。
该 shim 目录位于 `$VOLTA_HOME/bin`（在Windows上为 `%VOLTA_HOME%\bin`），其中的 `VOLTA_HOME` 默认设置为："

- 在 Unix 为 `~/.volta`
- 在 Windows 为 `%LOCALAPPDATA%\Volta`

如果需要的话，可以手动管理更新路径，或者可以像官方安装程序一样调用 `volta setup`（如上所述）。

### 自定义 Volta Home（可选）{#custom-volta-home}

如果您希望在 Volta 数据的默认 `VOLTA_HOME` 目录之外使用其他目录，您需要将环境变量 `VOLTA_HOME` 设置为该目录。
如果已经设置了该变量，则对于自定义数据目录， `volta setup` 仍然可以正常工作。
