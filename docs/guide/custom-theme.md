# 使用自定义主题

## 主题

你可以通过创建一个叫`.vitepress/theme/index.js`或`.vitepress/theme/index.ts`的文件（主题入口文件）来自定义主题：

```
.
├─ docs                # project root
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js   # theme entry
│  │  └─ config.js     # config file
│  └─ index.md
└─ package.json
```

VitePress在检测到有主题入口文件时会使用自定义主题而不是默认主题。当然，你可以[拓展默认主题](./extending-default-theme)，在此基础上进行高级定制。

## 主题接口

VitePress自定义主题定义为具有以下接口的对象:

```ts
interface Theme {
  /**
   * Root layout component for every page
   * @required
   */
  Layout: Component
  /**
   * Enhance Vue app instance
   * @optional
   */
  enhanceApp?: (ctx: EnhanceAppContext) => Awaitable<void>
  /**
   * Extend another theme, calling its `enhanceApp` before ours
   * @optional
   */
  extends?: Theme
}

interface EnhanceAppContext {
  app: App // Vue app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData> // Site-level metadata
}
```

主题条目文件应该将主题导出为默认导出:

```js
// .vitepress/theme/index.js

// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
```

默认导出是自定义主题的唯一要求，并且`Layout`属性是必须的。因此从技术上来说，一个VitePress主题可以像单个Vue组件一样简单。

在布局组件中，主题就像常见的Vite + Vue 3应用一样工作。当然它也是需要去[兼容SSR](./using-vue#browser-api-access-restrictions)。

## 创建布局

最基础的布局组件需要去包含一个[`<Content />`](/reference/runtime-api#content)组件：

```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <h1>Custom Layout!</h1>

  <!-- this is where markdown content will be rendered -->
  <Content />
</template>
```

上面的布局简单的将所有页面的markdown都渲染成HTML。我们可以改进一下将其用来处理404错误：

```vue{1-4,9-12}
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>
  <Content v-else />
</template>
```

当我们需要有条件的渲染不同布局时，[`useData()`](/reference/runtime-api#usedata)可以提供给我们所有运行时的数据。对于其他数据，我们可以访问当前页面的frontmatter。我们可以利用这一点来允许终端用户自主控制每个页面的布局。比如，用户可以指示页面应该使用一个特殊的主页布局：

```md
---
layout: home
---
```

可以调整我们的主题来解决这个：

```vue{3,12-14}
<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>
  <div v-if="frontmatter.layout === 'home'">
    Custom home page!
  </div>
  <Content v-else />
</template>
```

你也可以将这个布局分割到多个组件中：

```vue{3-5,12-15}
<script setup>
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Page from './Page.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <NotFound v-if="page.isNotFound" />
  <Home v-if="frontmatter.layout === 'home'" />
  <Page v-else /> <!-- <Page /> renders <Content /> -->
</template>
```

[Runtime API](/reference/runtime-api)中可以查看主题组件中所有可用的内容。另外，你也可以利用[构建时加载数据](./data-loading)来生成数据驱动的布局。比如，一个页面中列出当前项目的所有博客文章。

## 发布自定义主题

发布主题最简单的方法就是做到像[GitHub上的模板仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)一样。

如果你想以npm包的形式发布主题，遵循以下步骤：

1. 在你的包入口将导出主题对象作为默认导出

2. 如果可以，将你的主题配置类型定义导出为`ThemeConfig`

3. 如果你的主题需要去调整VitePress配置，那你应该导出这个配置并放在包的子目录中(e.g. `my-theme/config`)，这样用户可以去使用它

4. 有主题配置选项文档（可以是配置文件和frontmatter）

5. 提供关于如何使用主题的明确说明（如下文）

## 使用自定义主题

要使用外部主题，应该在自定义主题入口导入并重新导出它：

```js
// .vitepress/theme/index.js
import Theme from 'awesome-vitepress-theme'

export default Theme
```

如果主题需要拓展：

```js
// .vitepress/theme/index.js
import Theme from 'awesome-vitepress-theme'

export default {
  extends: Theme,
  enhanceApp(ctx) {
    // ...
  }
}
```

如果这个主题需要特殊的VitePress配置，你也需要在自己的配置中去拓展它：

```ts
// .vitepress/theme/config.ts
import baseConfig from 'awesome-vitepress-theme/config'

export default {
  // extend theme base config (if needed)
  extends: baseConfig
}
```

最后，如果为主题配置提供了类型：

```ts
// .vitepress/theme/config.ts
import baseConfig from 'awesome-vitepress-theme/config'
import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'awesome-vitepress-theme'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```
