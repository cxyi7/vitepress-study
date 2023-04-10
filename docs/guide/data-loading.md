# 构建时加载数据

VitePress提供了一个叫**data loaders**的功能，它可以让你加载任何数据，并且可以从页面或组件中导入。这个数据加载是**只在运行时**执行：生成的数据将在最终的JavaScript包中序列化为JSON。

Data loaders可以获取远程数据，或者基于本地文件生成元数据。比如，你可以使用data loader 去解析所有本地的API页面，然后自动的生成所有API条目的索引。

## 基本使用

一个data loader文件的文件名必须以`.data.js`或`.data.ts`结尾，这个文件应该提供一个带有`load()`方法的对象作为默认导出：

```js
// example.data.js
export default {
  load() {
    return {
      data: 'hello'
    }
  }
}
```

这个loader模块只能在Node.js中，所以你要根据需要import Node APIs and npm dependencies。

你可以用`data`来使用从`.md`页面或`.vue`组件中导入的数据：

```html
<script setup>
import { data } from './example.data.js'
</script>

<pre>{{ data }}</pre>
```

输出:

```json
{
  "data": "hello"
}
```

事实上data loader本身并不会导出`data`。它只是隐式的调用了`load()`方法并用`data`名字来作为导出数据的引用。

loader也可以是异步的：

```js
export default {
  async load() {
    // fetch remote data
    return (await fetch('...')).json()
  }
}
```

## 本地文件的数据

当你需要基于本地文件来生成数据，应该在data loader中使用`watch`选项，这样当有改动时就会触发热更新。

`watch`是很方便的，你可以使用[全局模式](https://github.com/mrmlnc/fast-glob#pattern-syntax)同时匹配多个文件。这个模式可以是相对于loader文件本身，并且`load()`函数会将接收到的匹配文件使用绝对路径：

```js
import fs from 'node:fs'
import parseFrontmatter from 'gray-matter'

export default {
  // watch all blog posts
  watch: ['./posts/*.md'],
  load(watchedFiles) {
    // watchedFiles will be an array of absolute paths of the matched files.
    // generate an array of blog post metadata that can be used to render
    // a list in the theme layout
    return watchedFiles.map(file => {
      const content = fs.readFileSync(file, 'utf-8')
      const { data, excerpt } = parseFrontmatter(content)
      return {
        file,
        data,
        excerpt
      }
    })
  }
}
```

## 不同的Data Loaders

如果使用TypeScript, 你可以为loader定义不同类型，像下面一样：

```ts
import { defineLoader } from 'vitepress'

export interface Data {
  // data type
}

declare const data: Data
export { data }

export default defineLoader({
  // type checked loader options
  glob: ['...'],
  async load(): Promise<Data> {
    // ...
  }
})
```
