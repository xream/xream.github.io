import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"ChatGPT 替换 自定义接口和 Key","description":"","frontmatter":{"title":"ChatGPT 替换 自定义接口和 Key"},"headers":[],"relativePath":"blog/posts/643.md","filePath":"blog/posts/643.md","lastUpdated":1783382106000}`),a={name:`blog/posts/643.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="chatgpt-替换-自定义接口和-key" tabindex="-1">ChatGPT 替换 自定义接口和 Key <a class="header-anchor" href="#chatgpt-替换-自定义接口和-key" aria-label="Permalink to “ChatGPT 替换 自定义接口和 Key”">​</a></h1><div class="telegram-content">#Surge #模块 #ChatGPT 忘了有没有发过了 再发一次</div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!name=ChatGPT</span></span>
<span class="line"><span>#!desc=替换 api.openai.com 为 自定义接口, 添加 key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[URL Rewrite]</span></span>
<span class="line"><span>^https:\\/\\/api\\.openai\\.com\\/v1 https://xxxxxxxxx.com/v1 header</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Header Rewrite]</span></span>
<span class="line"><span>http-request ^https:\\/\\/api\\.openai\\.com\\/v1 header-del Authorization</span></span>
<span class="line"><span>http-request ^https:\\/\\/api\\.openai\\.com\\/v1 header-add Authorization &quot;Bearer sk-yyyyyyyyyyyyy&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[MITM]</span></span>
<span class="line"><span>hostname = %APPEND% api.openai.com</span></span></code></pre></div><p class="telegram-source"><a href="https://t.me/zhetengsha/643">查看 Telegram 原文</a></p>`,4)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};