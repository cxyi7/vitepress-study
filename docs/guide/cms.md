---
outline: deep
---

# 连接CMS

## 通用的工作流程

连接VitePress到CMS很大程度上是围绕着[动态路由](/guide/routing#dynamic-routes)，在动手之前一定要理解它的工作原理。

每个CMS的工作都是不同的，这里只能提供一个通用的工作流程，你需要根据具体的场景进行调整。

1. 如果你的CMS需要身份验证，创建一个`.env`文件去保存你的API tokens，然后下面这样加载：

    ```js
    // posts/[id].paths.js
    import { loadEnv } from 'vitepress'

    const env = loadEnv('', process.cwd())
    ```

2. 从CMS中获取必要的数据，并将其格式化为适当的路径数据：

    ```js
    export default {
      async paths() {
        // use respective CMS client library if needed
        const data = await (await fetch('https://my-cms-api', {
          headers: {
            // token if necessary
          }
        })).json()

        return data.map(entry => {
          return {
            params: { id: entry.id, /* title, authors, date etc. */ },
            content: entry.content
          }
        })
      }
    }
    ```

3. 在页面中渲染内容:

    ```md
    # {{ $params.title }}

    - by {{ $params.author }} on {{ $params.date }}

    <!-- @content -->
    ```

## 集成指南

如果您已经编写了关于将VitePress与特定CMS集成的指南，请使用下面的“编辑此页”链接将其提交到这里!
