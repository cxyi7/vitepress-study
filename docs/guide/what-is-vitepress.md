# VitePress是啥？

VitePress 是一个专为创建出构建速度快、以内容为核心的网站所设计的[静态网站生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG)。 简单来说就是， VitePress 将你的文件资源放在[Markdown](https://en.wikipedia.org/wiki/Markdown)中，并为它添加一个主题，然后自动打包生成为静态HTML页面， 这样你就能轻松的将其部署在任何地方。

<div class="tip custom-block" style="padding-top: 8px">

仅仅想尝试一下？ 可以点击[快速开始](./getting-started)。

</div>

## 哪里能用到它？

- **文档**

  VitePress为技术文档，尤其是那些需要嵌入交互演示的demo设置了一个默认的主题。当前你阅读的这个页面就是vitePress所默认设置的主题，还有[Vite](https://vitejs.dev/)，[Pinia](https://pinia.vuejs.org/)，[VueUse](https://vueuse.org/)，[Mermaid](https://mermaid.js.org/)，[Wikimedia Codex](https://doc.wikimedia.org/codex/latest/)等这些文档都是如此。

  还有[Vue.js官方文档](https://vuejs.org/)也是基于VitePress，只是它使用了自定义主题，并且能在多种语言之间切换。

- **博客，档案和营销网站**

  VitePress 支持[完全自定义主题](/guide/custom-theme)，前提是你具有标准的vite+vue应用程序开发经验。选择vite来构建，能够使你从vite丰富的生态系统中选出想要的插件并直接拿来使用。 另外， VitePress提供了非常灵活的api去[加载数据](/guide/data-loading)（本地或远程）以及[动态生成路由](/guide/routing#dynamic-routes)。只要在构建时可以确定数据内容，你就可以使用它来构建几乎任何东西。

  这个[Vue.js官方博客](https://blog.vuejs.org/) 就是一个基于本地内容生成索引页面的简单博客。
## 开发体验

VitePress力求在处理Markdown内容时提供一个非常良好的开发体验。

- **[Vite功能:](https://vitejs.dev/)** 服务启动快，编辑后立即更新(<100ms)，无需刷新页面。

- **[内置Markdown拓展:](/guide/markdown)** 格式化，表格，高亮语法显示...任何你能想到的都有。 特别是，VitePress提供了许多处理代码块的高级功能，使其成为高技术文档的理想选择。

- **[Vue 加强 Markdown](/guide/using-vue):** 任何Markdown页面都是vue[单页面组件](https://vuejs.org/guide/scaling-up/sfc.html)，这得益于Vue的模板语法与HTML100%兼容。 你也能在静态内容中使用模板功能或者导入vue模块来嵌入交互演示。

## 性能

与大多数传统的SSG不同的是，由VitePress生成的网站实际上是一个[单页面应用程序](https://en.wikipedia.org/wiki/Single-page_application) (SPA).

- **启动速度快**

  对任何页面的首次访问都将提供静态的、预渲染的HTML，以获得极快的加载速度和最佳的SEO。然后，这个页面再去加载js包，将该页面转变为Vue SPA（转换）。 这个转化过程是极速的；在 [页面渲染速度分析网站](https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.vuejs.org%2F)中， 普通的VitePress站点即使在网络较慢的低端移动设备上也能获得近乎完美的性能分数。

- **快速加载后再导航**

  更重要的是，在初始加载完后，SPA单页面模式能给用户带来更好的体验，因为站点内的后续导航将不会导致整个页面被重新加载。并且，传入页面的内容将被动态获取和更新。 VitePress也能自动的预获取处于页面视口中的链接块。在大多数情况下，先加载再导航会给人感觉很流畅。

- **完美交互**

  为了能动态的将Vue部分完美嵌入到静态Markdown中, 每个Markdown页面都被作为Vue组件处理并编译成JavaScript。 这个听起来是效率低下的，但Vue编译器是能够完美的分理处静态和动态部分，最小化处理嵌入开销和有效负载。对于初始页面加载，静态部分将自动从JavaScript有效负载中删除，且不会有任何嵌入开销。

## VuePress到底是什么样的？

VitePress是VuePress理论上的继承者。原始的VuePress是基于Vue 2和webpack。 在Vue3和Vite的加持下，VitePress能提供更显著的开发体验，更好的生产性能，更精致的默认主题和更灵活的定制API。

VitePress和VuePress之间的API差异主要在于主题和定制。如果您正在使用带有默认主题的VuePress 1，那么迁移到VitePress应该相对简单。

相比于VuePress 1，VuePress 2 被投入了更多的精力，使它能支持Vue 3 和vite。但同时维护两个SSG框架是不可能的，因此Vue开发团队决定将VitePress作为主要推荐的SSG框架，并长期维护下去。
