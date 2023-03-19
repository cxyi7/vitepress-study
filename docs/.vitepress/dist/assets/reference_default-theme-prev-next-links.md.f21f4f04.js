import{_ as s,o as a,c as e,N as n}from"./chunks/framework.487d5e04.js";const F=JSON.parse('{"title":"Prev Next Links","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-prev-next-links.md","lastUpdated":1679206371000}'),l={name:"reference/default-theme-prev-next-links.md"},t=n(`<h1 id="prev-next-links" tabindex="-1">Prev Next Links <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;Prev Next Links&quot;">​</a></h1><p>You can customize the text and link for the previous and next pages (shown at doc footer). This is helpful if you want a different text there than what you have on your sidebar. Additionally, you may find it useful to disable the footer or link to a page that is not included in your sidebar.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>Type: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>Details:</p><p>Specifies the text/link to show on the link to the previous page. If you don&#39;t set this in frontmatter, the text/link will be inferred from the sidebar config.</p></li><li><p>Examples:</p><ul><li><p>To customize only the text:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">prev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Get Started | Markdown</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div></li><li><p>To customize both text and link:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">prev</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Markdown</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/guide/markdown</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div></li><li><p>To hide previous page:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">prev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p>Same as <code>prev</code> but for the next page.</p>`,6),p=[t];function o(r,i,c,d,h,y){return a(),e("div",null,p)}const m=s(l,[["render",o]]);export{F as __pageData,m as default};
