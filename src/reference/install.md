# Volta install

`volta install` 命令将设置工具的默认版本。如果该工具尚未在本地缓存，它也将获取该工具。它的语法如下:

```bash
Installs a tool in your toolchain

USAGE:
    volta install [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to install, like `node`, `yarn@latest` or `your-package@^14.4.3`.
```
