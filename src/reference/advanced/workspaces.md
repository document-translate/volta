# 工作区 Workspace

关于如何在工作空间环境中使用 Volta 的详细信息，其中在单个 repo 中有多个项目，并且它们都希望共享 Volta 设置。

:::warning 警告
此功能是在 Volta 0.8.2 中添加的，在以前的版本中不起作用。
:::

## Extending the Configuration

Within the `"volta"` section in `package.json`, you can specify an entry with key `"extends"`. The value of that entry should be a path to another JSON file which also has a `"volta"` section. Relative paths will be resolved relative to the file in which they are set. Any Volta settings (e.g. `"node"` or `"yarn"` versions) will be merged with those from the file pointed to by `"extends"`, with precedence given to the current file. So if you want to have a single Node version for all your projects, you would set those versions at the root, and then each project would need _only_ `"extends": "../path/to/root/package.json"`.

### 示例{#examples}

Given the following folder structure and `package.json` contents:

```bash
.
├── package.json
└── packages
    ├── cli
    │   └── package.json
    └── utils
        └── package.json
```

- `package.json`

  ```json
  {
    "volta": {
      "node": "12.16.1",
      "yarn": "1.22.4"
    }
  }
  ```

- `packages/cli/package.json`

  ```json
  {
    "volta": {
      "extends": "../../package.json"
    }
  }
  ```

- `packages/utils/package.json`

  ```json
  {
    "volta": {
      "extends": "../../package.json"
    }
  }
  ```

Running `node` anywhere in the workspace would cause you to use Node `12.16.1`. And if you update that version in the root `package.json`, it will automatically be used in all of the projects, without having to duplicate the settings in each subproject.

## Pinning Tools

When you run `volta pin` to select a version of a tool within a workspace, Volta will always add those settings to the _closest_ `package.json` that it finds. So, in the above example, if you ran `volta pin node@14` within the `packages/utils` subproject, the new version of Node will be written into `packages/utils/package.json` and will _only_ apply to the `utils` subproject, not to any of the others. This allows you to easily customize the tool versions on a per-project basis.

If you wish to use `volta pin` to make a change to the root configuration, first `cd` into the workspace root and then run `volta pin` from there.

## Hooks

If your project uses [project hooks](/advanced/hooks), you can place them either in a `.volta` directory in a subproject _or_ in a `.volta` directory in the root. Volta will look for hooks in each location pointed to by an `"extends"` key, so that the settings can be customized at whatever level is needed.

## Project-local Binaries

In addition to looking for hooks at each level, Volta will also look at each level to detect project-local dependencies to use when running a 3rd-party tool. It will attempt to find it in `node_modules/.bin` relative to each file referenced by `"extends"`.
