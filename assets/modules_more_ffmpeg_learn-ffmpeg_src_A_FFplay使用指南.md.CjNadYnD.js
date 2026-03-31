import{_ as a,c as s,o as n,a6 as p}from"./chunks/framework.C2DR_BI-.js";const f=JSON.parse('{"title":"FFplay使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"modules/more/ffmpeg/learn-ffmpeg/src/A_FFplay使用指南.md","filePath":"modules/more/ffmpeg/learn-ffmpeg/src/A_FFplay使用指南.md","lastUpdated":1774171177000}'),e={name:"modules/more/ffmpeg/learn-ffmpeg/src/A_FFplay使用指南.md"},l=p(`<h1 id="ffplay使用指南" tabindex="-1">FFplay使用指南 <a class="header-anchor" href="#ffplay使用指南" aria-label="Permalink to &quot;FFplay使用指南&quot;">​</a></h1><h4 id="ffplay是什么" tabindex="-1">FFplay是什么 <a class="header-anchor" href="#ffplay是什么" aria-label="Permalink to &quot;FFplay是什么&quot;">​</a></h4><ul><li><p>ffplay 是一个使用了 ffmpeg 和 sdl 库的简单的可移植的媒体播放器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>命令行： ffplay [选项] [&#39;输入文件&#39;]</span></span></code></pre></div></li></ul><h4 id="ffplay-使用示例" tabindex="-1">FFplay 使用示例 <a class="header-anchor" href="#ffplay-使用示例" aria-label="Permalink to &quot;FFplay 使用示例&quot;">​</a></h4><ul><li><p>播放 test.mkv ，播放完成后自动退出</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffplay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -autoexit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mkv</span></span></code></pre></div></li><li><p>以 320 × 240 的大学播放 test.mkv</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffplay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 320</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 240</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mkv</span></span></code></pre></div></li></ul><h4 id="通用选项" tabindex="-1">通用选项 <a class="header-anchor" href="#通用选项" aria-label="Permalink to &quot;通用选项&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;-L&#39;    显示 license</span></span>
<span class="line"><span>&#39;-h, -?, -help, --help [arg]&#39; 打印帮助信息；可以指定一个参数 arg ，如果不指定，只打印基本选项</span></span>
<span class="line"><span>    可选的 arg 选项：</span></span>
<span class="line"><span>    &#39;long&#39;    除基本选项外，还将打印高级选项</span></span>
<span class="line"><span>    &#39;full&#39;    打印一个完整的选项列表，包含 encoders, decoders, demuxers, muxers, filters 等的共享以及私有选项</span></span>
<span class="line"><span>    &#39;decoder=decoder_name&#39;    打印名称为 &quot;decoder_name&quot; 的解码器的详细信息</span></span>
<span class="line"><span>    &#39;encoder=encoder_name&#39;    打印名称为 &quot;encoder_name&quot; 的编码器的详细信息</span></span>
<span class="line"><span>    &#39;demuxer=demuxer_name&#39;    打印名称为 &quot;demuxer_name&quot; 的 demuxer 的详细信息</span></span>
<span class="line"><span>    &#39;muxer=muxer_name&#39;        打印名称为 &quot;muxer_name&quot; 的 muxer 的详细信息</span></span>
<span class="line"><span>    &#39;filter=filter_name&#39;      打印名称为 &quot;filter_name&quot; 的过滤器的详细信息</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>&#39;-version&#39;     显示版本信息</span></span>
<span class="line"><span>&#39;-formats&#39;     显示有效的格式</span></span>
<span class="line"><span>&#39;-codecs&#39;      显示 libavcodec 已知的所有编解码器</span></span>
<span class="line"><span>&#39;-decoders&#39;    显示有效的解码器</span></span>
<span class="line"><span>&#39;-encoders&#39;    显示有效的编码器</span></span>
<span class="line"><span>&#39;-bsfs&#39;        显示有效的比特流过滤器</span></span>
<span class="line"><span>&#39;-protocols&#39;   显示有效的协议</span></span>
<span class="line"><span>&#39;-filters&#39;     显示 libavfilter 有效的过滤器</span></span>
<span class="line"><span>&#39;-pix_fmts&#39;    显示有效的像素格式 </span></span>
<span class="line"><span>&#39;-sample_fmts&#39; 显示有效的采样格式</span></span>
<span class="line"><span>&#39;-layouts&#39;     显示通道名称以及标准通道布局</span></span>
<span class="line"><span>&#39;-colors&#39;      显示认可的颜色名称</span></span>
<span class="line"><span>&#39;-hide_banner&#39; 禁止打印欢迎语；也就是禁止默认会显示的版权信息、编译选项以及库版本信息等</span></span></code></pre></div><h4 id="主要选项" tabindex="-1">主要选项 <a class="header-anchor" href="#主要选项" aria-label="Permalink to &quot;主要选项&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;-x width&#39;        强制以 &quot;width&quot; 宽度显示</span></span>
<span class="line"><span>&#39;-y height&#39;       强制以 &quot;height&quot; 高度显示</span></span>
<span class="line"><span>&#39;-an&#39;	          禁止音频</span></span>
<span class="line"><span>&#39;-vn&#39;             禁止视频</span></span>
<span class="line"><span>&#39;-ss pos&#39;         跳转到指定的位置(秒)</span></span>
<span class="line"><span>&#39;-t duration&#39;     播放 &quot;duration&quot; 秒音/视频</span></span>
<span class="line"><span>&#39;-bytes&#39;          按字节跳转</span></span>
<span class="line"><span>&#39;-nodisp&#39;         禁止图像显示(只输出音频)</span></span>
<span class="line"><span>&#39;-f fmt&#39;          强制使用 &quot;fmt&quot; 格式</span></span>
<span class="line"><span>&#39;-window_title title&#39;  设置窗口标题(默认为输入文件名)</span></span>
<span class="line"><span>&#39;-loop number&#39;    循环播放 &quot;number&quot; 次(0将一直循环)</span></span>
<span class="line"><span>&#39;-showmode mode&#39;  设置显示模式</span></span>
<span class="line"><span>    可选的 mode ：</span></span>
<span class="line"><span>    &#39;0, video&#39;    显示视频</span></span>
<span class="line"><span>    &#39;1, waves&#39;    显示音频波形</span></span>
<span class="line"><span>    &#39;2, rdft&#39;     显示音频频带</span></span>
<span class="line"><span>    默认值为 &#39;video&#39;，你可以在播放进行时，按 &quot;w&quot; 键在这几种模式间切换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;-i input_file&#39;   指定输入文件</span></span></code></pre></div><h4 id="高级选项" tabindex="-1">高级选项 <a class="header-anchor" href="#高级选项" aria-label="Permalink to &quot;高级选项&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;-sync type&#39;          设置主时钟为音频、视频、或者外部。默认为音频。主时钟用来进行音视频同步</span></span>
<span class="line"><span>&#39;-threads count&#39;      设置线程个数</span></span>
<span class="line"><span>&#39;-autoexit&#39;           播放完成后自动退出</span></span>
<span class="line"><span>&#39;-exitonkeydown&#39;      任意键按下时退出</span></span>
<span class="line"><span>&#39;-exitonmousedown&#39;    任意鼠标按键按下时退出</span></span>
<span class="line"><span>&#39;-acodec codec_name&#39;  强制指定音频解码器为 &quot;codec_name&quot;</span></span>
<span class="line"><span>&#39;-vcodec codec_name&#39;  强制指定视频解码器为 &quot;codec_name&quot;</span></span>
<span class="line"><span>&#39;-scodec codec_name&#39;  强制指定字幕解码器为 &quot;codec_name&quot;</span></span></code></pre></div><h4 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;q, ESC&#39;            退出</span></span>
<span class="line"><span>&#39;f&#39;                 全屏</span></span>
<span class="line"><span>&#39;p, SPC&#39;            暂停</span></span>
<span class="line"><span>&#39;w&#39;                 切换显示模式(视频/音频波形/音频频带)</span></span>
<span class="line"><span>&#39;s&#39;                 步进到下一帧</span></span>
<span class="line"><span>&#39;left/right&#39;        快退/快进 10 秒</span></span>
<span class="line"><span>&#39;down/up&#39;           快退/快进 1 分钟</span></span>
<span class="line"><span>&#39;page down/page up&#39; 跳转到前一章/下一章(如果没有章节，快退/快进 10 分钟)</span></span>
<span class="line"><span>&#39;mouse click&#39;       跳转到鼠标点击的位置(根据鼠标在显示窗口点击的位置计算百分比)</span></span></code></pre></div><h4 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h4><ul><li><a href="http://blog.csdn.net/wishfly/article/details/44222297" target="_blank" rel="noreferrer">《FFplay使用指南》</a></li></ul>`,15),i=[l];function t(o,c,d,r,h,u){return n(),s("div",null,i)}const g=a(e,[["render",t]]);export{f as __pageData,g as default};
