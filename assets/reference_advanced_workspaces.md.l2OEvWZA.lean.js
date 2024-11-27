import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.BQmytedh.js";const r=JSON.parse('{"title":"工作区(Workspace)","description":"","frontmatter":{},"headers":[],"relativePath":"reference/advanced/workspaces.md","filePath":"reference/advanced/workspaces.md","lastUpdated":1732684903000}'),t={name:"reference/advanced/workspaces.md"};function o(l,s,p,h,d,c){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="工作区-workspace" tabindex="-1">工作区(Workspace) <a class="header-anchor" href="#工作区-workspace" aria-label="Permalink to &quot;工作区(Workspace)&quot;">​</a></h1><p>关于如何在工作空间环境中使用 Volta 的详细信息，其中在单个 repo 中有多个项目，并且它们都希望共享 Volta 设置。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此功能是在 Volta 0.8.2 中添加的，在以前的版本中不起作用。</p></div><h2 id="扩展配置" tabindex="-1">扩展配置 <a class="header-anchor" href="#扩展配置" aria-label="Permalink to &quot;扩展配置&quot;">​</a></h2><p>在 <code>package.json</code> 的 <code>&quot;volta&quot;</code> 部分中，您可以使用键为 <code>&quot;extends&quot;</code> 来指定一个条目。 该条目的值应该是另一个 JSON 文件的路径，该文件也有一个 <code>&quot;volta&quot;</code> 部分。 相对路径将相对于设置它们的文件进行解析。任何 Volta 设置（例如 <code>&quot;node&quot;</code> 或 <code>&quot;yarn&quot;</code> 版本）都将与由 <code>&quot;extends&quot;</code> 指向的文件中的设置合并，当前文件具有优先权。 因此，如果您想为所有项目使用单个 Node 版本，则应在根目录下设置这些版本，并且每个项目只需要添加 <code>&quot;extends&quot;: &quot;../path/to/root/package.json&quot;</code> 即可。</p><h3 id="examples" tabindex="-1">示例 <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;示例{#examples}&quot;">​</a></h3><p>给定以下文件夹结构和 <code>package.json</code> 的内容：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span></code></pre></div><ul><li><p><code>package.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;volta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12.16.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;yarn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.22.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><code>packages/cli/package.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;volta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../../package.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><code>packages/utils/package.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;volta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../../package.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><p>在工作区的任何地方运行 <code>node</code> 将会使用 Node <code>12.16.1</code>。如果你在根目录的 <code>package.json</code> 中更新了该版本，它将自动应用于所有项目，而无需在每个子项目中重复设置。</p><h2 id="pinning-tools" tabindex="-1">Pinning Tools <a class="header-anchor" href="#pinning-tools" aria-label="Permalink to &quot;Pinning Tools&quot;">​</a></h2><p>当你运行 <code>volta pin</code> 来选择工作区内的一个工具版本时，Volta 会将这些设置添加到最近的 <code>package.json</code> 中。 所以，在上面的例子中，如果你在 <code>packages/utils</code> 子项目中运行了 <code>volta pin node@14</code>，新版本的 Node 将被写入到 <code>packages/utils/package.json</code>， 并且仅适用于 <code>utils</code> 子项目，而不是其他任何项目。这样可以让你轻松地根据每个项目自定义工具版本。</p><p>如果您希望使用 <code>volta pin</code> 对根配置进行更改，请首先进入工作区根目录，然后从那里运行 <code>volta pin</code>.</p><h2 id="hooks" tabindex="-1">Hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;Hooks&quot;">​</a></h2><p>如果您的项目使用<a href="/advanced/hooks.html">项目 hooks</a>，您可以将它们放置在子项目中的 <code>.volta</code> 目录中，或者根目录中的 <code>.volta</code> 目录中。 Volta 会在由 <code>&quot;extends&quot;</code> 键指向的每个位置查找钩子，以便可以根据需要自定义设置。</p><h2 id="project-local-binaries" tabindex="-1">Project-local Binaries <a class="header-anchor" href="#project-local-binaries" aria-label="Permalink to &quot;Project-local Binaries&quot;">​</a></h2><p>除了在每个级别上寻找钩子（hook）之外，Volta 还会在每个级别上查找项目本地依赖项，以便在运行第三方工具时使用。 它将尝试在与 <code>&quot;extends&quot;</code>引用的每个文件相关的 <code>node_modules/.bin</code> 目录中找到它。</p>`,17)]))}const g=a(t,[["render",o]]);export{r as __pageData,g as default};
