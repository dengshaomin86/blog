import{_ as s,c as a,o as n,a6 as p}from"./chunks/framework.C16kJybi.js";const v=JSON.parse('{"title":"v-if 加 key 值的作用","description":"","frontmatter":{},"headers":[],"relativePath":"modules/web/vue3/v-if 加key值的作用.md","filePath":"modules/web/vue3/v-if 加key值的作用.md","lastUpdated":1773858860000}'),e={name:"modules/web/vue3/v-if 加key值的作用.md"},t=p(`<h1 id="v-if-加-key-值的作用" tabindex="-1">v-if 加 key 值的作用 <a class="header-anchor" href="#v-if-加-key-值的作用" aria-label="Permalink to &quot;v-if 加 key 值的作用&quot;">​</a></h1><ul><li>vue 在渲染元素时，处于效率考虑， 会尽量地复用已有的元素而非重新渲染，比如上面的实例，在，点击切换按钮，虽然 DOM 变了，但是之前在输入框键入的内容并没有改变，只是替换了 placeholder 的内容，说明 input 元素被复用了，如果不希望这样做，可以使用 vue.js 提供的 key 属性，它可以让你自己决定是否要复用元素，key 的值必须是唯一的！</li><li>给 input 元素添加 key，就不会复用了，切换类型时键入的内容也会被删除，不过 label 元素仍然是被复用的，因为没有添加 key 属性！</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;template v-if=&quot;flag&quot;&gt;</span></span>
<span class="line"><span>      &lt;label&gt;name&lt;/label&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; key=&quot;name&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;template v-else&gt;</span></span>
<span class="line"><span>      &lt;label&gt;age&lt;/label&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; key=&quot;age&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;button @click=&quot;toggle&quot;&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      flag: true,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    toggle() {</span></span>
<span class="line"><span>      this.flag = !this.flag;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,3),l=[t];function i(c,o,u,g,d,r){return n(),a("div",null,l)}const f=s(e,[["render",i]]);export{v as __pageData,f as default};
