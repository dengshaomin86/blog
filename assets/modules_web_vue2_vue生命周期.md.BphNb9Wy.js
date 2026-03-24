import{_ as a,c as s,o as e,a6 as n}from"./chunks/framework.C16kJybi.js";const h=JSON.parse('{"title":"vue生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"modules/web/vue2/vue生命周期.md","filePath":"modules/web/vue2/vue生命周期.md","lastUpdated":1773848829000}'),p={name:"modules/web/vue2/vue生命周期.md"},t=n(`<h1 id="vue生命周期" tabindex="-1">vue生命周期 <a class="header-anchor" href="#vue生命周期" aria-label="Permalink to &quot;vue生命周期&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>beforeCreate   数据观测、初始化事件还未开始</span></span>
<span class="line"><span>created   完成数据观测、属性和方法的运算，初始化事件、$el属性还未显示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>beforeMount   挂载前调用。相关的render函数首次被调用，实例已完成的配置：编译模板、把data里的数据和模板生成html。但还未挂载到html上</span></span>
<span class="line"><span>mounted   el被新创建的vm.$el替换，并挂载到实例上去之后调用。实例已完成的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到页面。此过程进行ajax</span></span>
<span class="line"><span></span></span>
<span class="line"><span>beforeUpdate   数据更新前调用。发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步更改状态，不会触发附加的重渲染过程</span></span>
<span class="line"><span>updated   在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时dom已经更新。在此期间避免操作dom，可能导致更新无限循环</span></span>
<span class="line"><span></span></span>
<span class="line"><span>beforeDestroy   实例销毁前调用。实例仍然可用</span></span>
<span class="line"><span>destroyed   实例销毁后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁</span></span></code></pre></div>`,2),l=[t];function o(c,d,i,r,_,u){return e(),s("div",null,l)}const v=a(p,[["render",o]]);export{h as __pageData,v as default};
