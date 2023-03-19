import{_ as a,o as s,c as e,N as n}from"./chunks/framework.212bf628.js";const h=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/frontmatter.md","lastUpdated":1679206371000}'),t={name:"guide/frontmatter.md"},o=n(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>VitePress supports YAML frontmatter in all Markdown files, parsing them with <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file (before any elements including <code>&lt;script&gt;</code> tags), and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>Many site or default theme config options have corresponding options in frontmatter. You can use frontmatter to override specific behavior for the current page only. For details, see <a href="/vitepress-study/reference/frontmatter-config">Frontmatter Config Reference</a>.</p><p>You can also define custom frontmatter data of your own, to be used in dynamic Vue expressions on the page.</p><h2 id="accessing-frontmatter-data" tabindex="-1">Accessing Frontmatter Data <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;Accessing Frontmatter Data&quot;">​</a></h2><p>Frontmatter data can be accessed via the special <code>$frontmatter</code> global variable:</p><p>Here&#39;s an example of how you could use it in your Markdown file:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span>
<span class="line"></span></code></pre></div><p>You can also access current page&#39;s frontmatter data in <code>&lt;script setup&gt;</code> with the <a href="/vitepress-study/reference/runtime-api#usedata"><code>useData()</code></a> helper.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">Alternative Frontmatter Formats <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;Alternative Frontmatter Formats&quot;">​</a></h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Blogging Like a Hacker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div>`,14),l=[o];function r(p,c,i,d,m,u){return s(),e("div",null,l)}const D=a(t,[["render",r]]);export{h as __pageData,D as default};
