# Markdown中使用Vue

在VitePress中, 每个Markdown文件都是被编译成HTML，然后加工处理成一个[Vue单文件组件](https://vuejs.org/guide/scaling-up/sfc.html)。这就意味着你可以在Markdown中使用vue的特性，包括动态模板和使用Vue组件，或是在任意页面里的Vue组件逻辑中添加`<script>`标签。

值得注意的是，VitePress会利用Vue的编译器去自动检测和优化Markdown内容中的纯静态部分。静态内容被优化为独立的占位符节点，并在初次访问时从页面的JavaScript负载中删除。在客户端渲染数据时，它们也会被跳过。总之，在页面中的所有开销就只有动态部分。

## 模板

### 插值

每个Markdown文件都是先被编译成HTML，然后作为Vue组件传递到Vite处理。这意味着你可以在文本中使用Vue风格的插值：

**输入**

```md
{{ 1 + 1 }}
```

**输出**

<div class="language-text"><pre><code>{{ 1 + 1 }}</code></pre></div>

### 指令

指令也能正常使用（注意，根据设计，在Markdown中原始的HTML也是有效的）:

**输入**

```html
<span v-for="i in 3">{{ i }}</span>
```

**输出**

<div class="language-text"><pre><code><span v-for="i in 3">{{ i }} </span></code></pre></div>

## `<script>` 和 `<style>`

MrakDown文件中的根元素`<script>` 和 `<style>`的作用就和它们在Vue中是一样的，包括`<script setup>` 和 `<style module>`等。唯一的区别是没有`<template>`标签：Markdown中的内容都是一样的级别。同时要注意，所有的标签都应该在文件变量之后：

```html
---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.module" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
```

:::warning Markdown中不要使用`<style scoped>`
在使用Markdown时, `<style scoped>`将会给当前页面的所有元素都添加特殊的属性，这将导致页面体积明显增大。当页面需要局部样式时首选`<style module>`。
:::

你也可以使用VitePress运行时的API，比如[`useData` helper](/reference/runtime-api#usedata)能提供访问当前页面的元数据：

**输入**

```html
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
```

**输出**

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {},
  ...
}
```

## 使用组件

你可以直接在Markdown文件中直接导入或使用Vue组件。

### Markdown中导入

如果一个组件只是在几个页面中使用，更推荐那里使用那里导入。这样有利于代码分割打包，且只有在相关页面显示时才会进行加载:

```md
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...
```

### 注册全局组件

如果一个组件被大多数页面使用，那么可以在自定义Vue app实例中去全局注册它。相关部分参见[拓展默认主题](/guide/extending-default-theme#registering-global-components) 。

::: warning 重点
确保自定义组件的名字是包含连字符或使用了帕斯卡命名法（单词首字母都大写）。否则，它将被视为一个内联元素并由`<p>`标签包裹。但这会导致渲染失败，因为`<p>`不允许有块元素放在里面（意思就是如果不用这种命名方法去写，就会被当成内联元素，但实际是块元素）。
:::

### 在Headers中使用Vue组件 <ComponentInHeader />

你可以在headers中使用Vue组件，但要注意下面语法的不同之处：

| Markdown                                                | 输出 HTML                               | Parsed Header |
| ------------------------------------------------------- | ----------------------------------------- | ------------- |
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre>     | `<h1>text <Tag/></h1>`                    | `text`        |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

这个HTML代码包含在`<code>`中的将原样显示，不在其中的将通过Vue来解析。

::: tip
输出的HTML是由[Markdown-it](https://github.com/Markdown-it/Markdown-it)来完成，但解析headers是由VitePress来处理（sidebar和文档title也是如此）。
:::


## 禁用Vue

你可以通过把它们包含在`<span>`标签中或在其他元素中使用`v-pre`指令的方式禁用Vue：

**输入**

```md
This <span v-pre>{{ will be displayed as-is }}</span>
```

**输出**

<div class="escape-demo">
  <p>This <span v-pre>{{ will be displayed as-is }}</span></p>
</div>

另外,你可以在`v-pre`自定义容器中包含整个段落： 

```md
::: v-pre
{{ This will be displayed as-is }}`
:::
```

**输出**

<div class="escape-demo">

::: v-pre
{{ This will be displayed as-is }}
:::

</div>

## 在代码块中取消转义

默认情况下，所有的代码块都会自动的带有`v-pre`指令，所以其中的Vue语法不会被处理。为了在代码块中启用Vue风格的插值，你可以追加`-vue`标识，比如`js-vue`:

**输入**

````md
```js-vue
Hello {{ 1 + 1 }}
```
````

**输出**

```js-vue
Hello {{ 1 + 1 }}
```

## 使用CSS预处理

对于CSS预处理，VitePress 也是[支持内置](https://vitejs.dev/guide/features.html#css-pre-processors): `.scss`, `.sass`, `.less`, `.styl` 和 `.stylus` 文件。 不需要为这些预处理安装额外的插件，但是你必须安装相应的包：

```
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

在Markdown和主题组件中，你可以像下面这样使用：

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

## 浏览器API访问限制

因为VitePress程序在生成静态站点时是在Node.js中进行服务端渲染的，因此所有Vue的使用都必须符合[通用规范要求](https://vuejs.org/guide/scaling-up/ssr.html)。总之，就是要确保只在`beforeMount`或`mounted`钩子中访问Browser / DOM API。

如果你正在使用或构建的组件不适合使用SSR（比如，包含自定义指令），你可以把它们包含在内置的`<ClientOnly>`组件中：

```md
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

注意，这不会修复**在导入时**访问浏览器 API 的组件或库。 要**在导入时**使用浏览器环境的代码，你需要在适当的生命周期挂钩中动态导入它们：

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      // use code
    })
  }
}
</script>
```

如果你的模块`export default`导出一个Vue组件，你可以动态的注册它：

```vue
<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent">
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

**也可以看这个:**

- [Vue.js > Dynamic Components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)

## 使用Teleports

Vitepress目前的SSG只支持将模板“传送”到body部分。对于其他目标，你可以将它们包裹在内置的`<ClientOnly>`组件中或者通过[`postRender` hook](/reference/site-config#postrender)将传送标志注入到最终生成的页面HTML代码中的正确位置： 

<ModalDemo />

::: details
<<< @/components/ModalDemo.vue
:::

```md
<ClientOnly>
  <Teleport to="#modal">
    <div>
      // ...
    </div>
  </Teleport>
</ClientOnly>
```

<script setup>
import ModalDemo from '../components/ModalDemo.vue'
</script>

<style>
.escape-demo {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 0 20px;
}
</style>
