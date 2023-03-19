# 部署你的VitePress站点

接下来的指南是基于一些共享的假设：

- 你已经将docs放在你项目的`docs`目录下。
- 你使用了默认的打包输出位置(`.vitepress/dist`)。
- VitePress是已经本地安装在你的项目中，并且已经将以下脚本放在你的`package.json`中：

  ```json
  {
    "scripts": {
      "docs:build": "vitepress build docs",
      "docs:preview": "vitepress preview docs"
    }
  }
  ```

::: tip

如果你要在子目录中提供站点，那么必须在你的`docs/.vitepress/config.js`将[`base`](/reference/site-config#base)设置为`'/subdir/'`。

**Example:** 如果你正在使用Github (or GitLab)并且部署到`user.github.io/repo/`，那你就将你的`base`设置为`/repo/`。

:::

## 本地构建和测试

- 你可能使用以下命令来构建docs：

  ```sh
  $ npm run docs:build
  ```

- 一旦你构建完成docs，你可以在本地运行来测试：

  ```sh
  $ npm run docs:preview
  ```

  这个`preview`命令将会从`.vitepress/dist`文件启动一个本地静态的web服务，该服务地址是`http://localhost:4173`。这是检查生产构建在你的本地环境是否正常的简单方法。

- 你可以通过在`--port`部分添加参数去配置服务：

  ```json
  {
    "scripts": {
      "docs:preview": "vitepress preview docs --port 8080"
    }
  }
  ```

  现在这个`docs:preview`方法将在`http://localhost:8080`启动服务。

## Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render

创建一个新的项目并且更改以下设置：

- **Build Command:** `npm run docs:build`
- **Output Directory:** `docs/.vitepress/dist`
- **Node Version:** `14` (或者更高，默认情况下是14~16。但Cloudflare Pages仍然是12，所以你需要去[修改这个](https://developers.cloudflare.com/pages/platform/build-configuration/))

::: warning
不要在HTML code中去开启_Auto Minify_选项，它将会从输出中删除对vue有作用的注释。当删除后，你可能会看见编译报错。
:::

## GitHub 页面

### 使用 GitHub Actions

1. 在你的主题配置文件`docs/.vitepress/config.js`中，将`base`设置为你的GitHub 仓库名。如果你计划将你的站点部署到`https://foo.github.io/bar/`，那你应该设置base为`'/bar/'`，它始终是以`/`开始和结束。

2. 在你项目的`.github/workflows`目录下创建一个名叫`deploy.yml`的文件，并且设置以下内容：

   ```yaml
   name: Deploy
   on:
     workflow_dispatch: {}
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       permissions:
         pages: write
         id-token: write
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v3
           with:
             fetch-depth: 0
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: npm
         - run: npm install --frozen-lockfile
         - name: Build
           run: npm run docs:build
         - uses: actions/configure-pages@v2
         - uses: actions/upload-pages-artifact@v1
           with:
             path: docs/.vitepress/dist
         - name: Deploy
           id: deployment
           uses: actions/deploy-pages@v1
   ```

   ::: tip
   请替换对应的分支名字。比如，如果你想构建的分支是`master`，那么你应该在上述文件中将`main`替换为`master`。
   :::

3. 在你仓库的“设置”菜单选项下，在构建和部署资源时选择`GitHub Actions`。

4. 现在将你的代码合并到`main`分支。

5. 等待操作完成。

6. 在你仓库的“设置”菜单选项下，点击`Visit site`，然后就可以看到你的站点了。以后你的docs将会在提交时自动部署了。

## GitLab 页面

### 使用 GitLab CI

1. 在`docs/.vitepress/config.js`将`outDir`设置为`../public`。

2. 在你的配置文件`docs/.vitepress/config.js`中，将`base`设置为你的GitLab仓库名。。如果你计划将你的站点部署到`https://foo.github.io/bar/`，那你应该设置base为`'/bar/'`，它始终是以`/`开始和结束。

3. 在你的项目根目录下创建一个名为`.gitlab-ci.yml`的文件，它有以下内容。当你的内容有任何改动时都会进行构建和部署:

   ```yaml
   image: node:16
   pages:
     cache:
       paths:
         - node_modules/
     script:
       - npm install
       - npm run docs:build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

4. 另外，如果你想使用node的_alpine_ 版本，你必须手动安装`git`。所以，上面的代码应该修改成如下：
   ```yaml
   image: node:16-alpine
   pages:
     cache:
       paths:
         - node_modules/
     before_script:
       - apk add git
     script:
       - npm install
       - npm run docs:build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

## Azure Static Web Apps

1. 参照[官方文档](https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration).

2. 在你的配置文件中设置以下值(并且删除你不想要引入的，比如`api_location`):

   - **`app_location`**: `/`
   - **`output_location`**: `docs/.vitepress/dist`
   - **`app_build_command`**: `npm run docs:build`

## Firebase

1. 在你项目的根目录下创建`firebase.json`和`.firebaserc`文件:

   `firebase.json`:

   ```json
   {
     "hosting": {
       "public": "docs/.vitepress/dist",
       "ignore": []
     }
   }
   ```

   `.firebaserc`:

   ```json
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

2. 然后运行`npm run docs:build`，运行下面这个命令去部署:

   ```sh
   firebase deploy
   ```

## Surge

1. 在运行`npm run docs:build`后,运行下面这个命令去部署:

   ```sh
   npx surge docs/.vitepress/dist
   ```

## Heroku

1. 参照[`heroku-buildpack-static`](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static)给出的文档和指南。

2. 创建一个名叫`static.json`的文件在你项目的根目录中，并且配置以下内容：

   ```json
   {
     "root": "docs/.vitepress/dist"
   }
   ```

## Edgio

请参考[在Edgio中创建和部署一个VitePress App](https://docs.edg.io/guides/vitepress).
