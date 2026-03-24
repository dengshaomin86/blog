import{_ as a,c as s,o as n,a6 as e}from"./chunks/framework.C16kJybi.js";const v=JSON.parse('{"title":"JS 字符串与二进制的相互转化","description":"","frontmatter":{},"headers":[],"relativePath":"modules/web/javascript/JS字符串与二进制的相互转化.md","filePath":"modules/web/javascript/JS字符串与二进制的相互转化.md","lastUpdated":1773858860000}'),p={name:"modules/web/javascript/JS字符串与二进制的相互转化.md"},t=e(`<h1 id="js-字符串与二进制的相互转化" tabindex="-1">JS 字符串与二进制的相互转化 <a class="header-anchor" href="#js-字符串与二进制的相互转化" aria-label="Permalink to &quot;JS 字符串与二进制的相互转化&quot;">​</a></h1><ul><li>字符串转 ascii 码，用 charCodeAt();</li><li>ascii 码转字符串，用 fromCharCode();</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var str = &quot;A&quot;;</span></span>
<span class="line"><span>var code = str.charCodeAt();</span></span>
<span class="line"><span>var str2 = String.fromCharCode(code);</span></span></code></pre></div><h3 id="十进制转二进制" tabindex="-1">十进制转二进制 <a class="header-anchor" href="#十进制转二进制" aria-label="Permalink to &quot;十进制转二进制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var a = &quot;i&quot;;</span></span>
<span class="line"><span>console.log(a.charCodeAt()); //105</span></span>
<span class="line"><span>console.log(a.charCodeAt().toString(2)); //1101001</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var a = &quot;我们&quot;;</span></span>
<span class="line"><span>console.log(a.length); //2</span></span>
<span class="line"><span>var list = a.split(&quot;&quot;);</span></span>
<span class="line"><span>console.log(list.length); //2&lt;br&gt;console.log(a.charCodeAt().toString(2)); //110001000010001 100111011101100</span></span></code></pre></div><h3 id="将字符串转换成二进制形式-中间用空格隔开" tabindex="-1">将字符串转换成二进制形式，中间用空格隔开 <a class="header-anchor" href="#将字符串转换成二进制形式-中间用空格隔开" aria-label="Permalink to &quot;将字符串转换成二进制形式，中间用空格隔开&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function strToBinary(str){</span></span>
<span class="line"><span>    var result = [];</span></span>
<span class="line"><span>    var list = str.split(&quot;&quot;);</span></span>
<span class="line"><span>    for(var i=0;i&lt;list.length;i++){</span></span>
<span class="line"><span>        if(i != 0){</span></span>
<span class="line"><span>            result.push(&quot; &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var item = list[i];</span></span>
<span class="line"><span>        var binaryStr = item.charCodeAt().toString(2);</span></span>
<span class="line"><span>        result.push(binartStr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result.join(&quot;&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="将二进制字符串转换成-unicode-字符串" tabindex="-1">将二进制字符串转换成 Unicode 字符串 <a class="header-anchor" href="#将二进制字符串转换成-unicode-字符串" aria-label="Permalink to &quot;将二进制字符串转换成 Unicode 字符串&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function binaryToStr(str){</span></span>
<span class="line"><span>    var result = [];</span></span>
<span class="line"><span>    var list = str.split(&quot; &quot;);</span></span>
<span class="line"><span>    for(var i=0;i&lt;list.length;i++){</span></span>
<span class="line"><span>         var item = list[i];</span></span>
<span class="line"><span>         var asciiCode = parseInt(item,2);</span></span>
<span class="line"><span>         var charValue = String.fromCharCode(asciiCode);</span></span>
<span class="line"><span>         result.push(charValue);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result.join(&quot;&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li><a href="https://www.cnblogs.com/it-deepinmind/p/7430025.html" target="_blank" rel="noreferrer">JS 字符串与二进制的相互转化</a></li></ul>`,11),l=[t];function i(o,r,c,d,h,u){return n(),s("div",null,l)}const _=a(p,[["render",i]]);export{v as __pageData,_ as default};
