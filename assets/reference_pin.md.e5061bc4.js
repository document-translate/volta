import{_ as s,o as n,c as a,V as e}from"./chunks/framework.d3b95951.js";const h=JSON.parse('{"title":"Volta pin","description":"","frontmatter":{},"headers":[],"relativePath":"reference/pin.md","filePath":"reference/pin.md","lastUpdated":1693551551000}'),o={name:"reference/pin.md"},p=e(`<h1 id="volta-pin" tabindex="-1">Volta pin <a class="header-anchor" href="#volta-pin" aria-label="Permalink to &quot;Volta pin&quot;">​</a></h1><p><code>volta pin</code>命令将更新一个项目的 package.json 文件以使用工具的选定版本。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>volta pin</code>只适用于 Node 和包管理器(例如 npm 或 Yarn)。对于依赖项，你应该使用 <code>npm install</code> 或 <code>yarn add</code> 来更新选择的版本。</p></div><p>命令格式如下:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Pins</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s runtime or package manager</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">USAGE:</span></span>
<span class="line"><span style="color:#C3E88D;">    volta pin [FLAGS] &lt;tool[@version]&gt;...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">FLAGS:</span></span>
<span class="line"><span style="color:#C3E88D;">        --verbose    Enables verbose diagnostics</span></span>
<span class="line"><span style="color:#C3E88D;">        --quiet      Prevents unnecessary output</span></span>
<span class="line"><span style="color:#C3E88D;">    -h, --help       Prints help information</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">ARGS:</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;tool[@version]&gt;...    Tools to pin, like \`node@lts\` or \`yarn@^1.14\`.</span></span></code></pre></div>`,5),l=[p];function t(c,i,r,d,_,y){return n(),a("div",null,l)}const m=s(o,[["render",t]]);export{h as __pageData,m as default};
