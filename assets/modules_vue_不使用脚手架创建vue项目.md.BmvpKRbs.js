import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.BX6rvgvq.js";const v=JSON.parse('{"title":"不使用脚手架创建 vue 项目","description":"","frontmatter":{},"headers":[],"relativePath":"modules/vue/不使用脚手架创建vue项目.md","filePath":"modules/vue/不使用脚手架创建vue项目.md","lastUpdated":1745220936000}'),e={name:"modules/vue/不使用脚手架创建vue项目.md"},l=p(`<h1 id="不使用脚手架创建-vue-项目" tabindex="-1">不使用脚手架创建 vue 项目 <a class="header-anchor" href="#不使用脚手架创建-vue-项目" aria-label="Permalink to &quot;不使用脚手架创建 vue 项目&quot;">​</a></h1><h3 id="_1-初始化项目文件夹-生成配置文件" tabindex="-1">1. 初始化项目文件夹，生成配置文件 <a class="header-anchor" href="#_1-初始化项目文件夹-生成配置文件" aria-label="Permalink to &quot;1. 初始化项目文件夹，生成配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init -y</span></span></code></pre></div><h3 id="_2-安装相关依赖" tabindex="-1">2. 安装相关依赖 <a class="header-anchor" href="#_2-安装相关依赖" aria-label="Permalink to &quot;2. 安装相关依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i webpack webpack-cli html-webpack-plugin webpack-dev-server -D</span></span>
<span class="line"><span>npm i vue vue-router vuex -S</span></span></code></pre></div><h3 id="_3-安装相关-loader" tabindex="-1">3. 安装相关 loader <a class="header-anchor" href="#_3-安装相关-loader" aria-label="Permalink to &quot;3. 安装相关 loader&quot;">​</a></h3><ul><li>vue 编译：vue-template-compiler vue-loader</li><li>js 语法兼容：@babel/core babel-loader</li><li>css 及 css 预编译：css-loader style-loader less less-loader</li><li>静态文件路径（图片、字体）：url-loader file-loader</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i vue-template-compiler vue-loader @babel/core babel-loader less less-loader css-loader style-loader url-loader file-loader -D</span></span></code></pre></div><h3 id="_4-创建项目文件" tabindex="-1">4. 创建项目文件 <a class="header-anchor" href="#_4-创建项目文件" aria-label="Permalink to &quot;4. 创建项目文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public</span></span>
<span class="line"><span>  |-index.html</span></span>
<span class="line"><span>src</span></span>
<span class="line"><span>  |-App.vue</span></span>
<span class="line"><span>  |-main.js</span></span>
<span class="line"><span>  |-components</span></span>
<span class="line"><span>    |-HelloWorld.vue</span></span>
<span class="line"><span>  |-assets</span></span>
<span class="line"><span>package.json</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>webpack.config.js</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// main.js</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  render: (h) =&gt; h(App)</span></span>
<span class="line"><span>}).$mount(root)</span></span></code></pre></div><h3 id="_5-配置-webpack" tabindex="-1">5. 配置 webpack <a class="header-anchor" href="#_5-配置-webpack" aria-label="Permalink to &quot;5. 配置 webpack&quot;">​</a></h3><ul><li>新建 webpack.config.js 文件，配置出入口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// webpack.config.js</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const webpack = require(&quot;webpack&quot;);</span></span>
<span class="line"><span>const htmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>// v15 版的 vue-loader 配置需要加个 VueLoaderPlugin</span></span>
<span class="line"><span>const VueLoaderPlugin = require(&quot;vue-loader/lib/plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  mode: process.env.NODE_ENV === &quot;production&quot; ? &quot;production&quot; : &quot;development&quot;,</span></span>
<span class="line"><span>  entry: path.join(__dirname, &quot;src/main.js&quot;),</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    filename: &quot;bundle.[hash:7].js&quot;,</span></span>
<span class="line"><span>    path: path.join(__dirname, &quot;dist&quot;),</span></span>
<span class="line"><span>    publicPath: &quot;/&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    port: 8080,</span></span>
<span class="line"><span>    hot: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  resolve: {</span></span>
<span class="line"><span>    extensions: [&quot;.js&quot;, &quot;.vue&quot;], // js 和 vue 文件在 import 导入的时候不需要带扩展</span></span>
<span class="line"><span>    alias: {</span></span>
<span class="line"><span>      vue$: &quot;vue/dist/vue.esm.js&quot;, // vue官方指定写法，如果不写这个，则运行的时候会提示</span></span>
<span class="line"><span>      &quot;@&quot;: path.resolve(__dirname, &quot;src&quot;), // 给src目录起个别名@ ，引用src目录的时候，可用@替代</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new htmlWebpackPlugin({</span></span>
<span class="line"><span>      filename: &quot;index.html&quot;,</span></span>
<span class="line"><span>      template: &quot;./public/index.html&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new webpack.HotModuleReplacementPlugin(),</span></span>
<span class="line"><span>    new VueLoaderPlugin(),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-配置-loader-规则" tabindex="-1">6. 配置 loader 规则 <a class="header-anchor" href="#_6-配置-loader-规则" aria-label="Permalink to &quot;6. 配置 loader 规则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// webpack.config.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.vue$/,</span></span>
<span class="line"><span>        use: [&quot;vue-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.js$/,</span></span>
<span class="line"><span>        use: [&quot;babel-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        use: [</span></span>
<span class="line"><span>          &quot;style-loader&quot;, // css 嵌入页面</span></span>
<span class="line"><span>          &quot;css-loader&quot;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 它的作用是将我们的图片转换成一个base64的字串存放于我们打包生成的js里面，而不是重新生成一个文件。对于一些小的文件，几kb的文件可以帮助我们减少过多的http请求</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(jpg|jpeg|gif|png|svg)$/i,</span></span>
<span class="line"><span>        use: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            loader: &quot;url-loader&quot;,</span></span>
<span class="line"><span>            options: {</span></span>
<span class="line"><span>              esModule: false, // 默认情况下，文件加载器生成使用ES modules语法的JS模块</span></span>
<span class="line"><span>              limit: 1024,</span></span>
<span class="line"><span>              name: &quot;[name]-[hash:7].[ext]&quot;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_7-配置运行命令" tabindex="-1">7. 配置运行命令 <a class="header-anchor" href="#_7-配置运行命令" aria-label="Permalink to &quot;7. 配置运行命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// package.json</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;dev&quot;: &quot;set NODE_ENV=development &amp;&amp; webpack-dev-server&quot;,</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;set NODE_ENV=production &amp;&amp; webpack --config webpack.config.js&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ul><li><a href="https://github.com/dengshaomin86/vue-webpack-simple" target="_blank" rel="noreferrer">代码仓库</a></li></ul>`,20),i=[l];function t(o,c,u,r,d,h){return n(),a("div",null,i)}const m=s(e,[["render",t]]);export{v as __pageData,m as default};
