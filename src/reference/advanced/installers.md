# Installers

有关安装程序如何工作以及如何为托管安装创建自己的自定义安装程序/发行版的详细信息。

## Current Installers

As of Volta 0.7.0, all of the official installers work in the same way:

1. Unpack the Volta binaries
2. Call `volta setup` with the `volta` binary that was unpacked (see [volta setup](/reference/setup) for more information)

### Windows Installer

The Windows installer will unpack all of the binaries into `Program Files\Volta` and add that folder to the System `Path` environment variable. It will also create the shims for the following tools in that directory:

- `node`
- `npm`
- `npx`
- `yarn`

### Unix Installer

The unix installer will unpack all of the binaries into `~/.volta/bin`, so they are installed only for the specific user.

## 跳过 Volta 设置{#skipping-volta-setup}

如果你想运行安装程序，但不希望你的配置文件脚本被 `volta setup` 修改，你可以将 `--skip-setup` 选项传递给安装程序:

```bash
curl https://get.volta.sh | bash -s -- --skip-setup
```

:::warning 警告
我们目前不支持在 Windows 上跳过 volta 设置。
:::

## 安装旧版本{#installing-old-versions}

The default installer script provided by [get.volta.sh](https://get.volta.sh) only supports installing Volta 1.1.0 and above. If you wish to install an older version, you can install it using the following script on Unix, replacing `1.0.8` with the version you want to install:

```
curl https://raw.githubusercontent.com/volta-cli/volta/8f2074f423c65405dfba9858d9bcf393c38ffb45/dev/unix/volta-install.sh | bash -s -- --version 1.0.8
```

对于 Windows，您可以下载并安装你想要安装的特定版本的 `.msi` 文件。

:::warning 警告
Volta 不支持降级，因此为了降级，您需要完全卸载 Volta，然后安装较低版本。
:::

## 自定义安装{#custom-installers}

To create a custom installer / distribution method, there are two mandatory steps and one optional step:

### Distribute the Binaries

The binaries themselves will need to be delivered to the target machine. The list of necessary binaries will be listed in `volta.manifest` in the release files. As of Volta 0.7.0, the required files are:

- `volta[.exe]`
- `volta-shim[.exe]`
- `volta-migrate[.exe]`

These binaries all need to be distributed in the same directory as each other and that directory should be on the `PATH` so that calls to `volta` commands will work correctly.

### Shim Directory

The Volta shim directory needs to be added to the `PATH` as well, so that the shims will work as expected as well. The shim directory is at `$VOLTA_HOME/bin` (`%VOLTA_HOME%\bin` on Windows), where `VOLTA_HOME` is defaulted to:

- `~/.volta` on Unix
- `%LOCALAPPDATA%\Volta` on Windows

Updating the PATH can be managed manually, if desired, or you can call `volta setup` (as the official installers do, described above).

### 自定义 Volta Home（可选）{#custom-volta-home}

If you wish to use a different directory for the Volta data than the default `VOLTA_HOME` listed in the previous section, you need to set the environment variable `VOLTA_HOME` to that directory. If that is set, then `volta setup` will still work correctly for a custom data directory.
