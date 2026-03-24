import{_ as s,c as a,o as n,a6 as i}from"./chunks/framework.C16kJybi.js";const g=JSON.parse('{"title":"vscode","description":"","frontmatter":{},"headers":[],"relativePath":"modules/more/vscode/vscode.md","filePath":"modules/more/vscode/vscode.md","lastUpdated":1774171177000}'),e={name:"modules/more/vscode/vscode.md"},p=i(`<h1 id="vscode" tabindex="-1">vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;vscode&quot;">​</a></h1><h2 id="_1-解决log快捷默认语法提示优先级" tabindex="-1">1. 解决<code>log</code>快捷默认语法提示优先级 <a class="header-anchor" href="#_1-解决log快捷默认语法提示优先级" aria-label="Permalink to &quot;1. 解决\`log\`快捷默认语法提示优先级&quot;">​</a></h2><ul><li><code>editor.snippetSuggestions</code> 设置为 <code>top</code></li></ul><h2 id="_2-为特定文件扩展名设置格式化方式" tabindex="-1">2. 为特定文件扩展名设置格式化方式 <a class="header-anchor" href="#_2-为特定文件扩展名设置格式化方式" aria-label="Permalink to &quot;2. 为特定文件扩展名设置格式化方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 关联文件扩展名到语言模式：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>打开VS Code设置（快捷键 Ctrl + , 或 Cmd + ,）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在搜索栏输入 files.associations。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>点击 “添加项”，输入文件扩展名（如 *.myext）并选择对应的语言（如 html）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 设置该语言的默认格式化工具：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续在设置中搜索 editor.defaultFormatter。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在语言特定设置中找到目标语言（如 [html]），选择已安装的格式化工具（如 Prettier）。</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// settings.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.associations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;*.cmd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bat&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## 为指定类型文件设置打开编码方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// settings.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;[bat]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;files.encoding&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gbk&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // .bat 文件默认 gbk 编码方式打开</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6),l=[p];function t(o,h,c,d,k,r){return n(),a("div",null,l)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
