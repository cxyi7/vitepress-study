# 拓展自定义主题

VitePress的默认主题针对文档进行了优化，并且可以定制。点击[默认主题配置概述](/reference/default-theme-config)查看全面的选项列表。

然而，在很多情况下，仅靠配置是不够的。比如：

1. 你需要调整CSS样式；
2. 你需要修改Vue app实例，比如注册全局组件；
3. 你需要通过布局插槽注入自定义内容到主题中；

这些高级定制都是需要在默认主题上“拓展”一个自定义主题的。

:::tip
行动之前，请确保阅读过[使用自定义主题](./custom-theme)并理解自定义主题是如何工作的。
:::

## 自定义CSS

默认主题的样式是可以通过覆盖根层级的CSS变量来定制的：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

详情参见[默认主题CSS变量](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)。

## 注册全局组件

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('MyGlobalComponent' /* ... */)
  }
}
```

使用Vite之后，你也能利用Vite的[全局导入功能](https://vitejs.dev/guide/features.html#glob-import)来自动的注册组件目录。

## 布局插槽

默认主题的`<Layout/>`组件提供一些插槽用于在页面的特定位置注入内容。这里举个例子，比如在之前的内容中注入一个组件：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}
```

```vue
<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
```

你使用渲染函数也是一样的效果。

```js
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(MyComponent)
    })
  }
}
```

下面是是默认主题布局的所有插槽变量列表（可通过frontmatter启用）：

- `layout: 'doc'`:
  - `doc-footer-before`
  - `doc-before`
  - `doc-after`
  - `sidebar-nav-before`
  - `sidebar-nav-after`
  - `aside-top`
  - `aside-bottom`
  - `aside-outline-before`
  - `aside-outline-after`
  - `aside-ads-before`
  - `aside-ads-after`
- `layout: 'home'`:
  - `home-hero-before`
  - `home-hero-info`
  - `home-hero-image`
  - `home-hero-after`
  - `home-features-before`
  - `home-features-after`
- 通用:
  - `layout-top`
  - `layout-bottom`
  - `nav-bar-title-before`
  - `nav-bar-title-after`
  - `nav-bar-content-before`
  - `nav-bar-content-after`
  - `nav-screen-content-before`
  - `nav-screen-content-after`

