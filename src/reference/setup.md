# Volta setups

volta setup 命令将通过修改当前用户的 PATH(以与平台相关的方式)来启用 volta，使其包含 volta shim 目录。

## Unix

在 Unix 上，volta 安装程序将使用以下列表搜索配置文件脚本:

- ~/.profile
- ~/.bash_profile
- ~/.bashrc
- ~/.zshrc
- ~/.config/fish/config.fish
- PROFILE 环境变量的值

对于存在的每个文件，volta 安装程序将对其进行修改，使其包含定义 VOLTA_HOME 的行，并将$VOLTA_HOME/bin 添加到 PATH 环境变量中。如果当前 shell 的配置文件
(使用 $SHELL 环境变量检测)不存在，那么将使用适当的内容创建它，如果可能的话。

## Windows

在 Windows 上，volta 设置将修改 User Path 环境变量以包含 shim 目录（%LOCALAPPDATA%\Volta\bin）.

## 语法

命令格式如下:

```bash
Enables Volta for the current user

USAGE:
    volta setup [FLAGS]

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information
```
