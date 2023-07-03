# Volta Fetch

`volta fetch` 命令将允许您将工具获取到本地缓存中，而无需将其设置为默认值或使其可用，以供将来脱机使用。它的语法如下:

```bash
Fetches a tool to the local machine

USAGE:
    volta fetch [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to fetch, like `node`, `yarn@latest` or `your-package@^14.4.3`.
```
