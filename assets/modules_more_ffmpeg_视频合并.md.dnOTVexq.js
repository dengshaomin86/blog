import{_ as a,c as s,o as n,a6 as p}from"./chunks/framework.C16kJybi.js";const _=JSON.parse('{"title":"视频合并","description":"","frontmatter":{},"headers":[],"relativePath":"modules/more/ffmpeg/视频合并.md","filePath":"modules/more/ffmpeg/视频合并.md","lastUpdated":1774171177000}'),e={name:"modules/more/ffmpeg/视频合并.md"},t=p(`<h1 id="视频合并" tabindex="-1">视频合并 <a class="header-anchor" href="#视频合并" aria-label="Permalink to &quot;视频合并&quot;">​</a></h1><h2 id="淡出淡入" tabindex="-1">淡出淡入 <a class="header-anchor" href="#淡出淡入" aria-label="Permalink to &quot;淡出淡入&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex &quot;[0:v][1:v]xfade=transition=fade:duration=1:offset=4[video];[0:a][1:a]acrossfade=d=1[audio]&quot; -map &quot;[video]&quot; -map &quot;[audio]&quot; output.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明</span></span>
<span class="line"><span>offset=4：第一个视频的过渡开始时间（单位：秒）。假设第一个视频时长为5秒，过渡从第4秒开始，持续1秒。</span></span>
<span class="line"><span>duration=1：过渡持续时间（1秒）。</span></span>
<span class="line"><span>acrossfade=d=1：音频交叉淡入淡出，持续1秒。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ffmpeg -i input1.mp4 -i input2.mp4 -i input3.mp4 -filter_complex </span></span>
<span class="line"><span>&quot;[0:v]fade=out:st=4:d=1[v0];</span></span>
<span class="line"><span> [1:v]fade=in:st=0:d=1,fade=out:st=4:d=1[v1];</span></span>
<span class="line"><span> [2:v]fade=in:st=0:d=1[v2];</span></span>
<span class="line"><span> [v0][v1][v2]concat=n=3[video];</span></span>
<span class="line"><span> [0:a]afade=out:st=4:d=1[a0];</span></span>
<span class="line"><span> [1:a]afade=in:st=0:d=1,afade=out:st=4:d=1[a1];</span></span>
<span class="line"><span> [2:a]afade=in:st=0:d=1[a2];</span></span>
<span class="line"><span> [a0][a1][a2]concat=n=3:a=1[audio]&quot; </span></span>
<span class="line"><span>-map &quot;[video]&quot; -map &quot;[audio]&quot; output.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明</span></span>
<span class="line"><span>fade=in:st=0:d=1：视频开头淡入1秒。</span></span>
<span class="line"><span>fade=out:st=4:d=1：视频结尾淡出1秒（假设视频时长为5秒）。</span></span>
<span class="line"><span>调整st（开始时间）和d（持续时间）以匹配视频实际时长。</span></span></code></pre></div>`,3),i=[t];function l(o,d,c,u,r,f){return n(),s("div",null,i)}const h=a(e,[["render",l]]);export{_ as __pageData,h as default};
