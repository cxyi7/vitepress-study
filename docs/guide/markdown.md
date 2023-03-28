# Markdown拓展

VitePress 内置了 Markdown 拓展.

## 头部锚点

头部会自动获取应用的锚点链接，可以通过`markdown.anchor`选项来配置锚点的渲染。

## 链接

内外部的链接都会一视同仁，得到特殊处理。

### 内部链接

内部的链接将会被转变为SPA导航的路由链接，当然，在每个子目录中包含的`index.md`都会转变为`index.html`，并带有相应的`/`。

比如，给出如下的目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假设你正在`foo/one.md`中：

```md
[Home](/) <!-- 将用户导航至根目录index.md -->
[foo](/foo/) <!-- 将用户导航至foo下的index.html-->
[foo heading](./#heading) <!-- 将用户导航至foo下的index文件 -->
[bar - three](../bar/three) <!-- 可以省略文件拓展 -->
[bar - three](../bar/three.md) <!-- 可以添加.md -->
[bar - four](../bar/four.html) <!-- 也可以添加.html -->
```

### 文件后缀

默认情况下，页面和内部的链接将会自动生成`.html`后缀。

### 外部链接

外部链接将会自动设置`target="_blank" rel="noreferrer"`:

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## 格式化

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/)能开箱即用:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这个数据对于页面其他的部分，及所有自定义和主题组件都是可用的。

详情请见[Frontmatter](/reference/frontmatter-config).

## GitHub-Style Tables

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Emoji :tada:

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

[emojis列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

## Table of Contents

**输入**

```
[[toc]]
```

**输出**

[[toc]]

TOC的渲染可以通过`markdown.toc`选项来设置。

## 自定义容器

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认的标题

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题

你可以在容器的"type"右边追加自定义标题。

**输入**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

**输出**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

### `raw`

这是一个特殊的容器，可以用来防止与VitePress的样式和路由冲突，当你记录组件库是会特别有用。你可能想要知道如何更好的隔离[whyframe](https://whyframe.dev/docs/integrations/vitepress)。

**语法**

```md
::: raw
Wraps in a <div class="vp-raw">
:::
```

`vp-raw`类名可以直接使用在元素上，样式隔离也是可以使用的：

::: details

- 你可以安装下面这个作为首选包管理器：

  ```sh
  $ npm install -D postcss postcss-prefix-selector
  ```

- 创建一个叫`docs/.postcssrc.cjs`的文件并且添加下面代码到里面：

  ```js
  module.exports = {
    plugins: {
      'postcss-prefix-selector': {
        prefix: ':not(:where(.vp-raw *))',
        includeFiles: [/vp-doc\.css/],
        transform(prefix, _selector) {
          const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
          return selector + prefix + pseudo
        }
      }
    }
  }
  ```

:::

## 在代码块中语法高亮

VitePress在Markdown代码块中使用[Shiki](https://shiki.matsu.io/)高亮语法，使得文本有不同的颜色。Shiki支持各种编程语法，你所需要做的就是在代码块的`旁边添加一个有效的语言别名：

**输入**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

Shiki's 仓库中包含了一个可用的[有效的语言列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)。

你可能需要在app配置中自定义高亮语法，详情见[`markdown` options](/reference/site-config#markdown)。

## 代码块中的行高亮

**输入**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单独的一行，你可能也需要多行或者一个范围：

- Line ranges: for example `{5-8}`, `{3-10}`, `{10-17}`
- Multiple single lines: for example `{4,7,9}`
- Line ranges and single lines: for example `{4,7-13,16,23-27,40}`

**输入**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

另外，直接在行中添加注释`// [!code hl]`也可以使其高亮：

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```

## 专注于代码块

在行中添加注释`// [!code focus]`将会使除它以外的代码都变得模糊，使得你专注于这行代码。

另外，你可以使用`// [!code focus:<lines>]`定义需要专注的那几行代码。

**输入**

注意，在`!code`后只有一个空格，应该避免出现两个。

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码块中的颜色差异

在保持代码块颜色的同时，添加注释`// [!code --]` 或 `// [!code ++]`将会导致行出现颜色差异。

**输入**

注意，在`!code`后只有一个空格，应该避免出现两个。

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码块中的警告和错误

在行中添加注释`// [!code warning]` 或 `// [!code error]`将会有相应的颜色变化。

**输入**

注意，在`!code`后只有一个空格，应该避免出现两个。

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号

你可以通过配置启用为代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

详情见[`markdown` options](/reference/site-config#markdown)。

你可以添加`:line-numbers`或`:no-line-numbers` 为受保护的代码块中标记以覆盖配置中设置的值。

**输入**

````md
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**输出**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 导入代码片段

你可以使用下面这个语法从现有的文件中导入代码片段：

```md
<<< @/filepath
```

它也支持[行高亮](#line-highlighting-in-code-blocks):

```md
<<< @/filepath{highlightLines}
```

**输入**

```md
<<< @/snippets/snippet.js{2}
```

**Code file**

<<< @/snippets/snippet.js

**输出**

<<< @/snippets/snippet.js{2}

::: tip
`@`相当于根目录。默认情况下，它就是指VitePress项目的根目录，除非`srcDir`被重新配置过了。
:::

你也可以使用[VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding)用于只包含代码文件的相应部分。你可以提供一个自定义区域名字在`#`后面，像下面这个文件路径：

**输入**

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**Code file**

<<< @/snippets/snippet-with-region.js

**输出**

<<< @/snippets/snippet-with-region.js#snippet{1}

你也可以在`{}`中指定语言，像下面这样：

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

当文件的语言没法从你的文件拓展中自动识别时，这么做就是很有用的。

## 代码组

你可以有多个代码块的组合，像下面这样:

**Input**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**输出**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

你也可以在代码组中[导入片段](#import-code-snippets):

**Input**

```md
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- you can provide a custom one too -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
```

**输出**

::: code-group

<<< @/snippets/snippet.js

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## Markdown文件嵌套

markdown文件可以相互嵌套，像下面这样：

**Input**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

**Part file** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**Equivalent code**

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

::: warning
注意，如果文件不存在，这并不会抛出错误。因此，在使用此功能时，请确保内容按预期呈现。
:::

## 高级配置

VitePress使用[markdown-it](https://github.com/markdown-it/markdown-it)来渲染Markdown。很多拓展都是通过自定义插件实现的。你可以在`.vitepress/config.js`中使用`markdown` 选项去进一步自定义`markdown-it`实例:

```js
const anchor = require('markdown-it-anchor')

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

详细的配置属性参见[Config Reference: App Config](/reference/site-config#markdown).
