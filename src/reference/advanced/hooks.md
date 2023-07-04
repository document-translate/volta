# Hooks

默认情况下，Volta 从公共资源和注册表(https://nodejs.org, https://yarnpkg.com, https://www.npmjs.com) 中获取 Node,
npm 和 Yarn。然而，根据你的环境，可能有必要告诉 Volta 从所有不同的源代码下载(例如 npm Enterprise 的内部工具)。为了适应这一点，Volta 提供了连接到下载过程的钩子。

## 在哪里配置 hook

钩子总是在名为 Hooks.json 的文件中设置。这个文件可以在两个地方之一，这取决于你想要那些钩子的作用域:

- 在 Volta 目录中指定的 hook (~/.volta/hooks.json on Linux/MacOS, %LOCALAPPDATA%\Volta\hooks.json on Windows)
  将应用于整个系统
- 在项目的.volta 子目录中指定的钩子(\<PROJECT ROOT>/.volta/hooks.json)将只在该项目中应用。这里的 \<PROJECT ROOT> 被定义为 package.json
  所在目录。

## Hooks 文件格式

hooks.json 的内容必须是一个对象，每种类型的工具(当前是 node、npm 和 yarn)都有可选的键。每个工具有 3 个动作，每个动作都可以有一个钩子应用于它们:

- `index` 表示用于确定该工具可下载的版本列表的 URL。访问该 URL 时的响应必须与所选工具的公共索引格式匹配。
- `latest` 表示该工具的最新版本的 URL。对于 node，响应应该采用与索引相同的格式，确保最新版本是列表中的第一个元素。对于 yarn，响应应该是原始版本号字符串，而不是其他。
- `distro` 表示用于下载工具二进制文件的 URL。

最后，每个动作都有 3 个可以使用的钩子(如下所述)(每次只能为每个动作指定一个)。

一个 hooks.json 文件例子，如下:

```json
{
  "node": {
    "index": {
      "bin": "/usr/local/node-lookup"
    },
    "latest": {
      "prefix": "http://example.com/node/"
    },
    "distro": {
      "template": "http://example.com/{{os}}/{{arch}}/node-{{version}}.tar.gz"
    }
  },
  "npm": {
    "index": {
      "prefix": "http://example.com/npm/"
    },
    "latest": {
      "bin": "~/npm-latest"
    },
    "distro": {
      "template": "http://example.com/npm/npm-{{version}}.tgz"
    }
  },
  "yarn": {
    "index": {
      "template": "http://example.com/yarn/{{os}}/{{arch}}/yarn-{{version}}.tgz"
    },
    "latest": {
      "prefix": "http://example.com/yarnpkg/"
    },
    "distro": {
      "bin": "~/yarn-distro"
    }
  }
}
```

## hook 类型

### `prefix` 钩子

`prefix`钩子是一个简单的 URL 替换。URL 将使用指定的前缀，后跟该操作的公共文件名构建。例如，使用上面的 `hooks.json`。我们有一个 `prefix` 钩子来确定最新的 yarn
版本。默认情况下，Volta 会通过向 `https://yarnpkg.com/latest-version` 发起请求来获取最新版本。Volta 会使用钩子访问 `http://example.com/yarnpkg/latest-version`，
并在 `http://example.com/yarnpkg/` 的指定前缀后面添加 `latest-version`。

### `template` 钩子

The `template` hook allows you to specify the template for a URL, with wildcards that will be replaced. 可用的通配符有:

- `{{'os'}}` 将被'darwin'， 'linux'或'win'取代，具体取决于操作系统。
- `{{'arch'}}` 将被'x86'或'x64'取代，具体取决于系统的体系结构。
- `{{'version'}}` (仅在 `distro` 有效) 将被 Volta 正在尝试下载的特定版本的工具所取代。
- `{{'filename'}}` 将被 Volta 从公共注册表下载的文件的文件名所替换。
- `{{'ext'}}` (仅在 `distro` 有效) 将被 Volta 期望下载的文件扩展名所替换。

:::warning 提示
`filename` 和 `ext` 替换仅在 Volta 0.8.4 或更高版本中可用
:::

使用 `node.distro` 从上面的例子中，当在 64 位 Linux 系统上获取 `node@10.15.3`时，Volta 将尝试从`http://example.com/linux/x64/node-10.15.3.tar.gz`
下载

### `bin` Hooks

The `bin` hook is an all-purpose hook that will call out to an external script to determine the URL. The value is a path to an executable script that will be called, and the URL will be read from the `stdout` of that script. The `stderr` of the script will be shown to the user, so it can be used to show progress bars or waiting spinners if desired. If the path to the script is relative then it will be resolved relative to the `hooks.json` file in which it is specified. In this context, a relative path means that the path begins with `./` or `../` on Linux/MacOS and begins with `.\` or `..\` on Windows. Lastly, for `distro` action hooks, the requested version of the tool will be passed as the first argument to that script.

Using the `yarn.distro` hook from the example `hooks.json`, when fetching `yarn@1.13.0`, Volta will call `~/yarn-distro "1.13.0"` and attempt to download the tarball from the URL that is returned by that hook.
