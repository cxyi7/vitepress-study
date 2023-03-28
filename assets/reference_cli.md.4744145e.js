import{_ as e,o as t,c as a,N as s}from"./chunks/framework.212bf628.js";const y=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{},"headers":[],"relativePath":"reference/cli.md","lastUpdated":1679206371000}'),o={name:"reference/cli.md"},n=s('<h1 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command Line Interface&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev`&quot;">​</a></h2><p>Start VitePress dev server using designated directory as root. Defaults to current directory. The <code>dev</code> command can also be omitted when running in current directory.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># start in current directory, omitting `dev`</span></span>\n<span class="line"><span style="color:#FFCB6B;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># start in sub directory</span></span>\n<span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>Open browser on startup (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Specify port (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Public base path (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>Enable CORS</td></tr><tr><td><code>--strictPort</code></td><td>Exit if specified port is already in use (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>Force the optimizer to ignore the cache and re-bundle (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build`&quot;">​</a></h2><p>Build the VitePress site for production.</p><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h3 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>--mpa</code> (experimental)</td><td>Build in <a href="/vitepress-study/guide/mpa-mode">MPA mode</a> without client-side hydration (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Public base path (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>Transpile target (default: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>Output directory (default: <code>.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>Enable/disable minification, or specify minifier to use (default: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>Static asset base64 inline threshold in bytes (default: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview`&quot;">​</a></h2><p>Locally preview the production build.</p><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h3 id="options-2" tabindex="-1">Options <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>Public base path (default: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Specify port (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init`&quot;">​</a></h2><p>Start the <a href="/vitepress-study/guide/getting-started#setup-wizard">Setup Wizard</a> in current directory.</p><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>\n<span class="line"></span></code></pre></div>',23),r=[n];function d(i,c,l,p,h,u){return t(),a("div",null,r)}const g=e(o,[["render",d]]);export{y as __pageData,g as default};