import{_ as i,c as a,a2 as n,o as h}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"Volta run","description":"","frontmatter":{},"headers":[],"relativePath":"reference/run.md","filePath":"reference/run.md","lastUpdated":1732684903000}'),k={name:"reference/run.md"};function t(l,s,p,F,e,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="volta-run" tabindex="-1">Volta run <a class="header-anchor" href="#volta-run" aria-label="Permalink to &quot;Volta run&quot;">​</a></h1><p><code>volta run</code> 命令将使用命令行中指定的工具版本运行您提供的命令。任何没有直接指定版本的工具都将由 Volta 通常的上下文检测来确定其版本，使用项目中的固定版本或默认版本。</p><p>--no-yarn 标志允许您覆盖该决定，并在命令运行时强制环境中不包含 yarn。类似地，--bundled-npm 标志允许你强制使用 npm 与 Node 绑定的版本，而忽略任何自定义版本。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>版本设置必须出现在要运行的命令之前。命令之后的任何内容都将被视为参数不会被 volta 读到</p></div><p>此外，您可以使用 <code>--env NAME-value option</code> 选项指定要传递给命令的自定义环境变量。</p><p>命令格式如下:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Node,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and/or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> versions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">USAGE:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [FLAGS] [OPTIONS] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--] [args]...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FLAGS:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --bundled-npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Forces</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bundled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --no-yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Disables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --verbose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Enables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verbose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diagnostics</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --quiet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Prevents</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unnecessary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           Prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OPTIONS:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --npm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --yarn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NAME=valu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (can </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> used</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multiple</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> times</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ARGS:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Arguments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span></span></code></pre></div>`,7)]))}const y=i(k,[["render",t]]);export{g as __pageData,y as default};