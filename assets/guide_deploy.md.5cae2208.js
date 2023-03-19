import{_ as s,o as a,c as n,N as l}from"./chunks/framework.212bf628.js";const d=JSON.parse('{"title":"部署你的VitePress站点","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy.md","lastUpdated":1679206371000}'),o={name:"guide/deploy.md"},p=l(`<h1 id="部署你的vitepress站点" tabindex="-1">部署你的VitePress站点 <a class="header-anchor" href="#部署你的vitepress站点" aria-label="Permalink to &quot;部署你的VitePress站点&quot;">​</a></h1><p>接下来的指南是基于一些共享的假设：</p><ul><li><p>你已经将docs放在你项目的<code>docs</code>目录下。</p></li><li><p>你使用了默认的打包输出位置(<code>.vitepress/dist</code>)。</p></li><li><p>VitePress是已经本地安装在你的项目中，并且已经将以下脚本放在你的<code>package.json</code>中：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你要在子目录中提供站点，那么必须在你的<code>docs/.vitepress/config.js</code>将<a href="/vitepress-study/reference/site-config#base"><code>base</code></a>设置为<code>&#39;/subdir/&#39;</code>。</p><p><strong>Example:</strong> 如果你正在使用Github (or GitLab)并且部署到<code>user.github.io/repo/</code>，那你就将你的<code>base</code>设置为<code>/repo/</code>。</p></div><h2 id="本地构建和测试" tabindex="-1">本地构建和测试 <a class="header-anchor" href="#本地构建和测试" aria-label="Permalink to &quot;本地构建和测试&quot;">​</a></h2><ul><li><p>你可能使用以下命令来构建docs：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span></code></pre></div></li><li><p>一旦你构建完成docs，你可以在本地运行来测试：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:preview</span></span>
<span class="line"></span></code></pre></div><p>这个<code>preview</code>命令将会从<code>.vitepress/dist</code>文件启动一个本地静态的web服务，该服务地址是<code>http://localhost:4173</code>。这是检查生产构建在你的本地环境是否正常的简单方法。</p></li><li><p>你可以通过在<code>--port</code>部分添加参数去配置服务：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs --port 8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>现在这个<code>docs:preview</code>方法将在<code>http://localhost:8080</code>启动服务。</p></li></ul><h2 id="netlify-vercel-aws-amplify-cloudflare-pages-render" tabindex="-1">Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render <a class="header-anchor" href="#netlify-vercel-aws-amplify-cloudflare-pages-render" aria-label="Permalink to &quot;Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render&quot;">​</a></h2><p>创建一个新的项目并且更改以下设置：</p><ul><li><strong>Build Command:</strong> <code>npm run docs:build</code></li><li><strong>Output Directory:</strong> <code>docs/.vitepress/dist</code></li><li><strong>Node Version:</strong> <code>14</code> (或者更高，默认情况下是14~16。但Cloudflare Pages仍然是12，所以你需要去<a href="https://developers.cloudflare.com/pages/platform/build-configuration/" target="_blank" rel="noreferrer">修改这个</a>)</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不要在HTML code中去开启_Auto Minify_选项，它将会从输出中删除对vue有作用的注释。当删除后，你可能会看见编译报错。</p></div><h2 id="github-页面" tabindex="-1">GitHub 页面 <a class="header-anchor" href="#github-页面" aria-label="Permalink to &quot;GitHub 页面&quot;">​</a></h2><h3 id="使用-github-actions" tabindex="-1">使用 GitHub Actions <a class="header-anchor" href="#使用-github-actions" aria-label="Permalink to &quot;使用 GitHub Actions&quot;">​</a></h3><ol><li><p>在你的主题配置文件<code>docs/.vitepress/config.js</code>中，将<code>base</code>设置为你的GitHub 仓库名。如果你计划将你的站点部署到<code>https://foo.github.io/bar/</code>，那你应该设置base为<code>&#39;/bar/&#39;</code>，它始终是以<code>/</code>开始和结束。</p></li><li><p>在你项目的<code>.github/workflows</code>目录下创建一个名叫<code>deploy.yml</code>的文件，并且设置以下内容：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">permissions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">id-token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">fetch-depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/configure-pages@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/upload-pages-artifact@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deployment</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/deploy-pages@v1</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请替换对应的分支名字。比如，如果你想构建的分支是<code>master</code>，那么你应该在上述文件中将<code>main</code>替换为<code>master</code>。</p></div></li><li><p>在你仓库的“设置”菜单选项下，在构建和部署资源时选择<code>GitHub Actions</code>。</p></li><li><p>现在将你的代码合并到<code>main</code>分支。</p></li><li><p>等待操作完成。</p></li><li><p>在你仓库的“设置”菜单选项下，点击<code>Visit site</code>，然后就可以看到你的站点了。以后你的docs将会在提交时自动部署了。</p></li></ol><h2 id="gitlab-页面" tabindex="-1">GitLab 页面 <a class="header-anchor" href="#gitlab-页面" aria-label="Permalink to &quot;GitLab 页面&quot;">​</a></h2><h3 id="使用-gitlab-ci" tabindex="-1">使用 GitLab CI <a class="header-anchor" href="#使用-gitlab-ci" aria-label="Permalink to &quot;使用 GitLab CI&quot;">​</a></h3><ol><li><p>在<code>docs/.vitepress/config.js</code>将<code>outDir</code>设置为<code>../public</code>。</p></li><li><p>在你的配置文件<code>docs/.vitepress/config.js</code>中，将<code>base</code>设置为你的GitLab仓库名。。如果你计划将你的站点部署到<code>https://foo.github.io/bar/</code>，那你应该设置base为<code>&#39;/bar/&#39;</code>，它始终是以<code>/</code>开始和结束。</p></li><li><p>在你的项目根目录下创建一个名为<code>.gitlab-ci.yml</code>的文件，它有以下内容。当你的内容有任何改动时都会进行构建和部署:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16</span></span>
<span class="line"><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">artifacts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre></div></li><li><p>另外，如果你想使用node的_alpine_ 版本，你必须手动安装<code>git</code>。所以，上面的代码应该修改成如下：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16-alpine</span></span>
<span class="line"><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">before_script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apk add git</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">artifacts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-label="Permalink to &quot;Azure Static Web Apps&quot;">​</a></h2><ol><li><p>参照<a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration" target="_blank" rel="noreferrer">官方文档</a>.</p></li><li><p>在你的配置文件中设置以下值(并且删除你不想要引入的，比如<code>api_location</code>):</p><ul><li><strong><code>app_location</code></strong>: <code>/</code></li><li><strong><code>output_location</code></strong>: <code>docs/.vitepress/dist</code></li><li><strong><code>app_build_command</code></strong>: <code>npm run docs:build</code></li></ul></li></ol><h2 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-label="Permalink to &quot;Firebase&quot;">​</a></h2><ol><li><p>在你项目的根目录下创建<code>firebase.json</code>和<code>.firebaserc</code>文件:</p><p><code>firebase.json</code>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hosting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">projects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;YOUR_FIREBASE_ID&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>然后运行<code>npm run docs:build</code>，运行下面这个命令去部署:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">firebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h2><ol><li><p>在运行<code>npm run docs:build</code>后,运行下面这个命令去部署:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">surge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-label="Permalink to &quot;Heroku&quot;">​</a></h2><ol><li><p>参照<a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noreferrer"><code>heroku-buildpack-static</code></a>给出的文档和指南。</p></li><li><p>创建一个名叫<code>static.json</code>的文件在你项目的根目录中，并且配置以下内容：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="edgio" tabindex="-1">Edgio <a class="header-anchor" href="#edgio" aria-label="Permalink to &quot;Edgio&quot;">​</a></h2><p>请参考<a href="https://docs.edg.io/guides/vitepress" target="_blank" rel="noreferrer">在Edgio中创建和部署一个VitePress App</a>.</p>`,26),e=[p];function c(t,r,i,D,y,C){return a(),n("div",null,e)}const A=s(o,[["render",c]]);export{d as __pageData,A as default};
