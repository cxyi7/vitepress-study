# 文件变量

## 使用

VitePress中的所有Markdown文件都支持YAML 文件变量，并使用[gray-matter](https://github.com/jonschlinkert/gray-matter)来解析它们。 这个文件变量必须是在Markdown文件的最顶部（在任何元素之前，包括`<script>`标签）, 必须以YAML的形式且在连续横线之间，比如下面这个：

```md
---
title: Docs with VitePress
editLink: true
---
```

许多站点和默认的主题配置选项在文件变量中已经有相应的选项，你可以使用文件变量去为当前页面重写一些特殊的行为。更多详情，参见[Frontmatter Config Reference](/reference/frontmatter-config)。

你也可以自定义文件变量数据，用在页面中动态的Vue表达式里。

## 访问文件变量数据

文件变量数据可以通过特殊的`$frontmatter`全局变量来访问:

这里有一个教你如何在Markdown文件中使用的例子：

```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

你也可以在`<script setup>`中借助[`useData()`](/reference/runtime-api#usedata)来访问当前页面中的文件变量。

## 替代文件变量格式

VitePress也支持JSON语法的文件变量，将其写在花括号中：

```json
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```
