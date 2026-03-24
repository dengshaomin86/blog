import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.dBUWB6Kx.js";const h=JSON.parse('{"title":"vue 原理","description":"","frontmatter":{},"headers":[],"relativePath":"modules/web/vue2/vue原理.md","filePath":"modules/web/vue2/vue原理.md","lastUpdated":1773835223000}'),p={name:"modules/web/vue2/vue原理.md"},l=e(`<h1 id="vue-原理" tabindex="-1"><code>vue</code> 原理 <a class="header-anchor" href="#vue-原理" aria-label="Permalink to &quot;\`vue\` 原理&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue是一个典型的MVVM框架，模型（Model）只是普通的JavaScript对象，修改它则视图（View）会自动更新。</span></span>
<span class="line"><span>这种设计让状态管理变得非常简单而直观。那么Vue是如何把模型和视图建立起关联的呢？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue实现这种数据双向绑定的效果，需要三大模块：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Observer：能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者</span></span>
<span class="line"><span>Watcher：作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图</span></span>
<span class="line"><span>Compile：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Observer</span></span>
<span class="line"><span>Observer的核心是通过Obeject.defineProperty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。</span></span>
<span class="line"><span>这时候Observer就要通知订阅者，订阅者就是Watcher。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Watcher</span></span>
<span class="line"><span>Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：</span></span>
<span class="line"><span>在自身实例化时往属性订阅器(dep)里面添加自己</span></span>
<span class="line"><span>自身必须有一个update()方法</span></span>
<span class="line"><span>待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Compile</span></span>
<span class="line"><span>Compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，</span></span>
<span class="line"><span>添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。</span></span></code></pre></div>`,2),t=[l];function i(c,r,o,d,u,_){return n(),a("div",null,t)}const m=s(p,[["render",i]]);export{h as __pageData,m as default};
