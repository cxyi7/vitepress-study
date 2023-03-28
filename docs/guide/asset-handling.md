# 资源处理

所有的Markdown文件都会编译成Vue组件，再由[Vite](https://vitejs.dev/guide/assets.html)进行加工处理。所使用到的任何资源都可以（尽量）使用相对URL：

```md
![An image](./image.png)
```

你可以在markdown文件中引用静态资源，你主题中的`*.vue`组件、样式、还有纯粹的`.css`文件可以使用绝对公共路径（基于根目录），也可以使用相对路径（基于你的文件结构）。使用相对路径就和你在Vite、Vue CLI或者webpack的 `file-loader`中使用方法的一样。

常见的照片、视频和字体文件会被自动检测并作为资源包含在其中。

所有引用的资源，包含那些使用绝对路径的，在生产打包时将被复制到dist文件夹中，并带有一个哈希文件名。从未引用的资源将不会被复制。图片资源小于4KB的将以base64的形式内联，当然这个是可以在[`vite`](/reference/site-config#vite)配置选项进行配置的。

所有 **静态** 路径引用，包含那些绝对路径，都应该是基于你的工作目录结构。

## 公共文件

有时候你得提供没有在Markdown文件或者主题组件中被直接引用的静态资源（比如favicons 和 PWA icons）。根目录（如果你运行了`vitepress build docs`就会有`docs`文件夹）下的`public`目录可以存放无论是从未被代码文件中引用过的（比如`robots.txt`）或是必须确切的含有相同名字的文件（没有被哈希过的）的静态资源。

放在`public`目录下的资源将原样复制到根目录下的dist目录。

请注意，你应该使用根绝对路径来引用放在`public`下的文件。比如，`public/icon.png` 就应该使用`/icon.png`这样的方式在代码文件中引用。

这么写可能会有一个异常：如果你在`public`下有一个HTML页面并且在主站点里链接了它，默认下路由会报404。为了解决这个问题，VitePress提供了一个`pathname://`协议允许你在同域名下链接到其他页面（即使链接是外部的）。对比下面两个链接：

- [/pure.html](/pure.html)
- <pathname:///pure.html>

## Base URL

如果你的站点部署在非根URL上，你需要在`.vitepress/config.js`中设置`base`选项。比如，你计划部署站点到`https://foo.github.io/bar/`上，那么`base`选项就应该是`'/bar/'`（注意斜杠前后都应该有）。

你所有的静态资源路径都会自动的`base`配置的值进行调整处理。比如，在你的markdown中使用绝对路径引用了`public`下的一个资源：

```md
![An image](/image-inside-public.png)
```

当你修改了`base`配置项的值后，你也不需要去更新它（上面这个）。

然而，如果你正在编写一个动态链接资源的主题组件，比如，一个照片的`src`是基于主题配置选项值：

```vue
<img :src="theme.logoPath" />
```

这种情况下建议使用VitePress提供的[`withBase` helper](/reference/runtime-api#withbase)去包装一下路径：

```vue
<script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```
