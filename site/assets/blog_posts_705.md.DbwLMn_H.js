import"./chunks/assets.CDWaORDm.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"使用 Gist 创建私有脚本/模块","description":"","frontmatter":{"title":"使用 Gist 创建私有脚本/模块"},"headers":[],"relativePath":"blog/posts/705.md","filePath":"blog/posts/705.md","lastUpdated":1783382106000}`),a={name:`blog/posts/705.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="使用-gist-创建私有脚本-模块" tabindex="-1">使用 Gist 创建私有脚本/模块 <a class="header-anchor" href="#使用-gist-创建私有脚本-模块" aria-label="Permalink to “使用 Gist 创建私有脚本/模块”">​</a></h1><img class="telegram-media" src="/telegram/AQAD1LMxG90mSFV8.jpg" alt="Telegram 图片" loading="lazy" decoding="async"><div class="telegram-content">▎ 如何使用 Gist 创建私有脚本/模块<br><br>以 Reddit 脚本为例:<br><br>① <code>reddit.js</code> 见 <a href="https://t.me/zhetengsha/651">https://t.me/zhetengsha/651</a><br><br>② <code>reddit.stoverride</code></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: &quot;Reddit&quot;</span></span>
<span class="line"><span>desc: &quot;过滤推广, 关 subreddit 的 NSFW 提示 @xream&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - match: ^https?:\\/\\/gql\\.reddit\\.com</span></span>
<span class="line"><span>      name: &quot;Reddit_3&quot;</span></span>
<span class="line"><span>      type: response</span></span>
<span class="line"><span>      timeout: 30</span></span>
<span class="line"><span>      require-body: true</span></span>
<span class="line"><span>      max-size: 3145728</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mitm:</span></span>
<span class="line"><span>    - &quot;gql.reddit.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>script-providers:</span></span>
<span class="line"><span>  &quot;Reddit_3&quot;:</span></span>
<span class="line"><span>    url: https://gist.githubusercontent.com/[gist username]/[gist ID]/raw/reddit.js</span></span>
<span class="line"><span>    interval: 86400</span></span></code></pre></div><div class="telegram-content">💾 如图保存<br><br>点击 <code>reddit.js</code> <code>RAW</code> 按钮 得到 外链地址 形如 <code>https://gist.githubusercontent.com/[gist username]/[gist ID]/raw/[gist commit ID]/[file name]<br><br></code>然后删掉 <code>[gist commit ID]</code> 的部分<br><br>得到 <code>https://gist.githubusercontent.com/[gist username]/[gist ID]/raw/[file name]<br><br></code>这个就是这个 gist 文件 <code>最新版的固定链接</code> 了<br><br>大概长这样: <code>https://gist.githubusercontent.com/[gist username]/[gist ID]/raw/reddit.js<br><br></code>替换掉 <code>reddit.stoverride</code> 里的 <code>url</code> 部分即可<br><br>同样的, 获取 <code>reddit.stoverride</code> 文件的 <code>最新版的固定链接</code> 就能在 Stash 里使用了<br><br>#Gist #私有 #脚本 #模块 #覆写 #教程 #Loon #QX #Surge #Stash #ShadowRocket</div><p class="telegram-source"><a href="https://t.me/zhetengsha/705">查看 Telegram 原文</a></p>`,6)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};