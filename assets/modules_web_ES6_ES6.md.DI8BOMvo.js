import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.BX6rvgvq.js";const u=JSON.parse('{"title":"ES6","description":"","frontmatter":{},"headers":[],"relativePath":"modules/web/ES6/ES6.md","filePath":"modules/web/ES6/ES6.md","lastUpdated":1773861737000}'),l={name:"modules/web/ES6/ES6.md"},e=p(`<h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>下面是一些ES6中的新的特点：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES6中的let命令，声明变量，用法和var差不多，但是let是为JavaScript新增了块级作用域，ES5中是没有块级作用域的，并且var有变量提升的概念，但是在let中，使用的变量一定要进行声明；</span></span>
<span class="line"><span>ES6中变量的结构赋值，比如：var [a,b,c] = [0,1,2];</span></span>
<span class="line"><span>ES6中不再像ES5一样使用原型链实现继承，而是引入Class这个概念，听起来和Java中的面向对象编程的语法有些像，但是二者是不一样的。</span></span>
<span class="line"><span>ES6中的函数定义也不再使用关键字function，而是利用了=&gt;来进行定义；</span></span>
<span class="line"><span>ES6中可以设置默认函数参数，如function A（x,y=9）{};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 块级作用域 关键字let, 常量const</span></span>
<span class="line"><span>2. 对象字面量的属性赋值简写</span></span>
<span class="line"><span>3. 赋值解构</span></span>
<span class="line"><span>4. 函数参数 - 默认值、参数打包、 数组展开</span></span>
<span class="line"><span>5. 箭头函数</span></span>
<span class="line"><span>6. 模版字符串，用\`（反引号）标识，用\${}将变量括起来</span></span>
<span class="line"><span>7.  Iterators（迭代器）+ for..of</span></span>
<span class="line"><span>8. 生成器 （Generators）</span></span>
<span class="line"><span>9. Class</span></span>
<span class="line"><span>10. Modules</span></span>
<span class="line"><span>11. Math + Number + String + Array + Object APIs  一些新的API</span></span>
<span class="line"><span>12. Proxies 使用代理（Proxy）监听对象的操作，然后可以做一些相应事情</span></span>
<span class="line"><span>13. Symbols Symbol是一种基本类型。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的</span></span>
<span class="line"><span>14. Promises  Promises是处理异步操作的对象，使用了 Promise 对象之后可以用一种链式调用的方式来组织代码，让代码更加直观</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES7 特性：</span></span>
<span class="line"><span>1.Array.prototype.includes</span></span>
<span class="line"><span>Array.prototype.includes用法都容易和简单。它是一个替代indexOf，开发人员用来检查数组中是否存在值，indexOf是一种尴尬的使用，因为它返回一个元素在数组中的位置或者-1当这样的元素不能被找到的情况下。所以它返回一个数字，而不是一个布尔值。开发人员需要实施额外的检查。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.Exponentiation Operator(求幂运算)</span></span>
<span class="line"><span>let a = 7 ** 12</span></span>
<span class="line"><span>let b = 2 ** 7</span></span>
<span class="line"><span>console.log(a === Math.pow(7,12)) // true</span></span>
<span class="line"><span>console.log(b === Math.pow(2,7)) // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ES8在本文（2017年1月）之前尚未完成。但我们可以假设所有完成的提案（第4阶段）和大多数阶段3（更多的阶段在这里和我的课程）</span></span>
<span class="line"><span>2017年（ES8）完成的提案：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.Object.values/Object.entries</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.String padding(字符串填充)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.Object.getOwnPropertyDescriptors</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.函数参数列表和调用中的尾逗号（Trailing commas）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.异步函数（Async Functions）</span></span></code></pre></div>`,2),i=[e];function c(t,o,r,d,S,_){return a(),n("div",null,i)}const E=s(l,[["render",c]]);export{u as __pageData,E as default};
