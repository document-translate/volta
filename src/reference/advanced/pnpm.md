# pnpm 支持

## 已知的限制{#known-limitations}

对 pnpm 的支持目前是实验性的。要启用该功能，请确保环境变量 VoLTA_FEATURE_PNPM 设置为 1。在 Windows 上，这可以添加到系统设置中的用户或系统环境变量中。在
Linux/Mac 上，您可以在配置文件脚本中设置该值(例如.bash_profile， .zshrc 或类似的脚本)。

由于这种支持是实验性的，可能会有一些突出的问题。下面列出了一些已知的限制，但是如果你在使用 pnpm 与 Volta 时遇到任何不像你期望的那样工作的问题，请在我们的[GitHub 提 Issue](https://github.com/volta-cli/volta/issues/new)。

### 全局安装{#global-installations}

目前不支持全局安装(例如 pnpm install -g)，并且会导致错误。

## 迁移{#migrating}

目前还没有自动迁移功能，因此如果您以前将 pnpm 作为 Volta 全局文件安装，则需要通过调用 `Volta install pnpm` 手动重新安装它。在启用支持并重新安装之前，您可以通过
`volta uninstall pnpm` 卸载之前安装的 pnpm 包。一旦切换到本机 pnpm 支持，由于目前缺乏卸载实现，可能无法通过调用相同的命令来删除孤立的旧 pnpm 包。
