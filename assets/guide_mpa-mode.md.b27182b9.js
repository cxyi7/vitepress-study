import{_ as n,B as o,o as t,c as l,x as s,a as e,D as p,N as c}from"./chunks/framework.212bf628.js";const _=JSON.parse('{"title":"MPA Mode","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mpa-mode.md","lastUpdated":1679206371000}'),i={name:"guide/mpa-mode.md"},r={id:"mpa-mode",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "MPA Mode <Badge type="warning" text="experimental" />"'},"​",-1),y=c(`<p>MPA (Multi-Page Application) mode can be enabled via the command line via <code>vitepress build --mpa</code>, or via config through the <code>mpa: true</code> option.</p><p>In MPA mode, all pages are rendered without any JavaScript included by default. As a result, the production site will likely have a better initial visit performance score from audit tools.</p><p>However, due to the absence of SPA navigation, cross-page links will lead to full page reloads. Post-load navigations in MPA mode will not feel as instant as in SPA mode.</p><p>Also note that no-JS-by-default also means you are essentially using Vue purely as a server-side templating language - no event handlers will be attached in the browser, so there will be no interactivity. To load client-side JavaScript, you can do so by using the special <code>&lt;script client&gt;</code> tag (works in both <code>.md</code> and <code>.vue</code> files, but only in MPA mode):</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">client</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">client side JavaScript!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># Hello</span></span>
<span class="line"></span></code></pre></div><p>Client scripts in all theme components will be bundled together, while client script for a specific page will be split for that page only.</p><p>Notice that <code>&lt;script client&gt;</code> is <strong>not evaluated as Vue component code</strong>: it&#39;s processed as a plain JavaScript module. For this reason, MPA mode should only be used if your site requires absolutely minimal client-side interactivity.</p>`,7);function D(m,F,A,u,h,g){const a=o("Badge");return t(),l("div",null,[s("h1",r,[e("MPA Mode "),p(a,{type:"warning",text:"experimental"}),e(),d]),y])}const v=n(i,[["render",D]]);export{_ as __pageData,v as default};