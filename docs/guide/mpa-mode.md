# MPA Mode <Badge type="warning" text="实验" />

MPA (多页面应用程序)模式可以通过在命令行中使用`vitepress build --mpa`开启，或配置`mpa: true`选项。

在MPA模式中，默认情况下所有页面都不包含JavaScript。因此，生产站点可以从评分工具中获取更高的初始访问性能评分。

然而，由于缺乏SPA导航，跨页面链接将导致整个页面的重新加载。所以，MPA模式下的加载后导航不会像SPA模式下那么极速。

当然，要知道没有JS就意味着你只是纯粹使用Vue作为服务端模板语言，这将导致浏览器中没有任何事件处理程序，也就不会有任何交互性。为了可以加载客户端js，你可以使用特殊的`<script client>`标签（只能在MPA模式中使用，可用在`.md` 和 `.vue`文件里）：

```html
<script client>
document.querySelector('h1').addEventListener('click', () => {
  console.log('client side JavaScript!')
})
</script>

# Hello
```

在所有的主题组件中客户端脚本将会被打包到一起，而特定页面的客户端脚本将会针对这个页面进行分割。

注意`<script client>`将**不作为Vue代码进行评估**:它被作为一个简单的JavaScript模块处理。因此，只有当站点对客户端交互的要求非常低时，才应该使用MPA模式。
