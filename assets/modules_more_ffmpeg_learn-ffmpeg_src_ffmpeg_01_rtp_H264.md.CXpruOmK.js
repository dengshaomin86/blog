import{_ as a,c as s,o as n,a6 as e}from"./chunks/framework.C2DR_BI-.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"modules/more/ffmpeg/learn-ffmpeg/src/ffmpeg/01_rtp_H264.md","filePath":"modules/more/ffmpeg/learn-ffmpeg/src/ffmpeg/01_rtp_H264.md","lastUpdated":1774171177000}'),p={name:"modules/more/ffmpeg/learn-ffmpeg/src/ffmpeg/01_rtp_H264.md"},t=e(`<h2 id="ffmpep使用rtp打包h264" tabindex="-1">FFmpep使用RTP打包H264 <a class="header-anchor" href="#ffmpep使用rtp打包h264" aria-label="Permalink to &quot;FFmpep使用RTP打包H264&quot;">​</a></h2><h4 id="使用ffmpeg从mp4中提取视频流到-264文件" tabindex="-1">使用FFmpeg从MP4中提取视频流到.264文件 <a class="header-anchor" href="#使用ffmpeg从mp4中提取视频流到-264文件" aria-label="Permalink to &quot;使用FFmpeg从MP4中提取视频流到.264文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ffmpeg -i test.mp4 -codec copy -bsf: h264_mp4toannexb -f h264 test.264</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-i test.mp4 :是输入的MP4文件</span></span>
<span class="line"><span>-codec copy：从输入文件中进行拷贝</span></span>
<span class="line"><span>-bsf: h264_mp4toannexb：从MP4拷贝到annexB封装</span></span>
<span class="line"><span>-f h264：采用h.264格式</span></span>
<span class="line"><span>test.264：输出的文件名称</span></span></code></pre></div><h4 id="使用ffmpeg对h-264进行rtp打包" tabindex="-1">使用FFmpeg对h.264进行RTP打包 <a class="header-anchor" href="#使用ffmpeg对h-264进行rtp打包" aria-label="Permalink to &quot;使用FFmpeg对h.264进行RTP打包&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ffmpeg -i test.264 -f rtp rtp://127.0.0.1:15000</span></span></code></pre></div><h4 id="使用vlc播放" tabindex="-1">使用VLC播放 <a class="header-anchor" href="#使用vlc播放" aria-label="Permalink to &quot;使用VLC播放&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>v=0</span></span>
<span class="line"><span>o=- 0 0 IN IP4 127.0.0.1</span></span>
<span class="line"><span>s=No Name</span></span>
<span class="line"><span>c=IN IP4 127.0.0.1</span></span>
<span class="line"><span>t=0 0</span></span>
<span class="line"><span>a=tool:libavformat 57.41.100</span></span>
<span class="line"><span>m=video 15000 RTP/AVP 96</span></span>
<span class="line"><span>b=AS:200</span></span>
<span class="line"><span>a=rtpmap:96 MP4V-ES/90000</span></span>
<span class="line"><span>a=fmtp:96 profile-level-id=1</span></span></code></pre></div><p>SDP保存到文件，这样VLC就可以通过这个sdp文件播放上面的视频</p>`,8),l=[t];function i(c,o,r,d,m,h){return n(),s("div",null,l)}const _=a(p,[["render",i]]);export{g as __pageData,_ as default};
