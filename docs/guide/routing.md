---
outline: deep
---

# 路由

## 基于文件的路由

VitePress使用基于文件的路由，这意味着生成的HTML页面是从源Markdown文件的目录结构映射的。比如，给定以下目录结构：

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

那么将会生成以下HTML页面:

```
index.md                  -->  /index.html (accessible as /)
prologue.md               -->  /prologue.html
guide/index.md            -->  /guide/index.html (accessible as /guide/)
guide/getting-started.md  -->  /guide/getting-started.html
```

这个生成的HTML可以存放在任何能提供静态文件服务的web服务器上。

## 根目录和源目录

在VitePress项目的文件结构中有两个很重要的概念：**项目根目录** 和 **源目录**。

### 项目根目录

根目录是VitePress尝试寻找`.vitepress`重要目录的地方。这个`.vitepress`目录中保存着VitePress的配置文件、开发服务器缓存、构建输出配置和可选的主题定制代码。

当你在命令行中运行`vitepress dev`或者`vitepress build`, VitePress将会把当前的工作目录当成为项目根目录。为了指定一个子目录为根目录，你需要在命令行中输入相对路径。比如，你的VitePress项目是在`./docs`下，那么你应该运行`vitepress dev docs`这个命令。

```
.
├─ docs                    # project root
│  ├─ .vitepress           # config dir
│  ├─ getting-started.md
│  └─ index.md
└─ ...
```

```sh
vitepress dev docs
```

下面这是源文件-->HTML映射的结果：

```
docs/index.md            -->  /index.html (accessible as /)
docs/getting-started.md  -->  /getting-started.html
```

### 源目录

源目录就是指你的Markdown源文件所在地方。默认情况下，它是与根目录相似的。但是，你可以通过[`srcDir`](/reference/site-config#srcdir)配置选项去配置。

`srcDir`选项是相对于根目录定位去配置的。比如，设置了`srcDir: 'src'`，那你的文件结构就会像下面这样：

```
.                          # project root
├─ .vitepress              # config dir
└─ src                     # source dir
   ├─ getting-started.md
   └─ index.md
```

那个源文件 --> HTML映射的结果如下：

```
src/index.md            -->  /index.html (accessible as /)
src/getting-started.md  -->  /getting-started.html
```

## 页面间的链接

在页面间进行链接时，你可以使用相对或绝对路径。但不推荐写文件拓展名`.md` 和 `.html`（写了也没影响）。最好的实践是不写文件拓展名，让VitePress根据你的配置去自动生成最终的URL。

```md
<!-- Do -->
[Getting Started](/guide/getting-started)
[Getting Started](../guide/getting-started)

<!-- Don't -->
[Getting Started](/guide/getting-started.md)
[Getting Started](/guide/getting-started.html)
```

可以在[资源处理](asset-handling)学习更多关于资源如图片等链接方法.

## 生成简洁URL

默认情况下，VitePress的网站链接以`.html`结尾。但是，一些用户更倾向于简洁链接即没有`.html`拓展名。比如，使用 `example.com/path`而不是`example.com/path.html`。

另一种能达到简洁URL的方法是在目录中你的文件只使用`index.md`，像下面这种：

```
.
├─ getting-started
│  └─ index.md
├─ installation
│  └─ index.md
└─ index.md
```

一些服务或者托管平台（比如Netlify或Vercel）就能提供将`/foo` 映射到`/foo.html`的服务，前提是这个链接是有效的。如果这个功能对你来说是有用的，你可以使用[`cleanUrls`](/reference/site-config#cleanurls)配置选项去配置，使生成的入站链接没有`.html`拓展名。当这个选项是开启时，VitePress的浏览器端路由当访问以`.html`结尾的链接时，将会重定向到这个简洁链接。

## 路由重写

你能自定义源文件目录和生成的页面之间的映射关系。当你有一个复杂的项目目录时，就会很有用处。比如，当你的仓库中含有多个模块时，并且像这样将文档和源文件放在一起：

```
.
├─ packages
│  ├─ pkg-a
│  │  └─ src
│  │      ├─ pkg-a-code.ts
│  │      └─ pkg-a-docs.md
│  └─ pkg-b
│     └─ src
│         ├─ pkg-b-code.ts
│         └─ pkg-b-docs.md
```

然后你希望生成像下面这样结构的VitePress页面：

```
packages/pkg-a/src/pkg-a-docs.md  -->  /pkg-a/index.html
packages/pkg-b/src/pkg-b-docs.md  -->  /pkg-b/index.html
```

你可以通过配置[`rewrites`](/reference/site-config#rewrites)选项来达到该目的：

```ts
// .vitepress/config.js
export default {
  rewrites: {
    'packages/pkg-a/src/pkg-a-docs.md': 'pkg-a/index.md',
    'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md'
  }
}
```

这个`rewrites`选项也支持动态路由参数。在上面这个例子中，你有多少个模块则配置多少个路径。但其实它们都有一个相同的文件结构，你可以像下面这样简单的进行配置：

```ts
export default {
  rewrites: {
    'packages/:pkg/src/(.*)': ':pkg/index.md'
  }
}
```

这个重写路由是通过`path-to-regexp`包进行编译的，更多高级语法见[它的文档](https://github.com/pillarjs/path-to-regexp#parameters)。

:::warning 重写相对链接

当重写选项是开启状态，**相对链接应该基于重写的路径**。比如，从`packages/pkg-a/src/pkg-a-code.md`通过相对链接到`packages/pkg-b/src/pkg-b-code.md`，你应该这样写:

```md
[Link to PKG B](../pkg-b/pkg-b-code)
```
:::

## 动态路由

你可以通过单个Markdown文件和动态内容来生成多个页面。比如，你可以创建一个`packages/[pkg].md`文件来为项目中的每个包生成相应的页面。此时，这个`[pkg]`部分就是一个路由参数，用于区分各个页面。

### 路径加载文件

由于VitePress是一个静态站点生成器，正常的页面路径都是在构建时才确定。因此，一个动态路由页面**必须**由**路径加载文件**。对于 `packages/[pkg].md`，我们就需要一个`packages/[pkg].paths.js`(`.ts` 也是支持的)：

```
.
└─ packages
   ├─ [pkg].md         # route template
   └─ [pkg].paths.js   # route paths loader
```

这个路径加载程序必须提供一个带有`paths`方法的对象，并将其默认导出。这个`paths`方法返回一个数组，该数组由带有`params`属性的对象组成。每个对象都将生成一个对应的页面。

`paths`数组如下所示：

```js
// packages/[pkg].paths.js
export default {
  paths() {
    return [
      { params: { pkg: 'foo' }},
      { params: { pkg: 'bar' }}
    ]
  }
}
```

对应生成的HTML如下:

```
.
└─ packages
   ├─ foo.html
   └─ bar.html
```

### 多个参数

一个动态路由能包含多个参数：

**文件结构**

```
.
└─ packages
   ├─ [pkg]-[version].md
   └─ [pkg]-[version].paths.js
```

**路径加载程序**

```js
export default {
  paths: () => [
    { params: { pkg: 'foo', version: '1.0.0' }},
    { params: { pkg: 'foo', version: '2.0.0' }},
    { params: { pkg: 'bar', version: '1.0.0' }},
    { params: { pkg: 'bar', version: '2.0.0' }}
  ]
}
```

**输出**

```
.
└─ packages
   ├─ foo-1.0.0.html
   ├─ foo-2.0.0.html
   ├─ bar-1.0.0.html
   └─ bar-2.0.0.html
```

### 动态生成路径

这个路径加载程序模块是运行在Node.js中，并且只有在构建时才会执行。你能使用本地或远程的任何数据去动态生成路径数组。

从本地文件中生成路径:

```js
import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('packages')
      .map((pkg) => {
        return { params: { pkg }}
      })
  }
}
```

从远程数据中生成路径:

```js
export default {
  async paths() {
    const pkgs = await (await fetch('https://my-api.com/packages')).json()

    return pkgs.map((pkg) => {
      return {
        params: {
          pkg: pkg.name,
          version: pkg.version
        }
      }
    })
  }
}
```

### 访问页面中参数

你可以通过参数向每个页面添加额外的数据。这个Markdown路由文件能在Vue表达式中通过`$params`全局属性来访问当前页面的参数:

```md
- package name: {{ $params.pkg }}
- version: {{ $params.version }}
```

你也能通过[useData](/reference/runtime-api#usedata)运行时API来访问当前页面的参数。这个方法在Vue组件和Markdown文件中都是可行的:

```vue
<script setup>
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()

console.log(params.value)
</script>
```

### 渲染其他内容

传递给页面的参数将在客户端JavaScript有效负载中序列化，因此你应该避免传入过多的内容在参数中，比如初始Markdown或从远程CMS获取的HTML内容。

相反的，你可以在任何路径对象中使用`content`属性来传递内容到任何页面中：

```js
export default {
  paths() {
    async paths() {
      const posts = await (await fetch('https://my-cms.com/blog-posts')).json()

      return posts.map((post) => {
        return {
          params: { id: post.id },
          content: post.content // raw Markdown or HTML
        }
      })
    }
  }
}
```

然后，使用以下特殊的语法去渲染成为Markdown文件自身的一部分：

```md
<!-- @content -->
```
