import"./chunks/assets.Cp_lF0-_.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"自建 Telegram Bot API","description":"","frontmatter":{"title":"自建 Telegram Bot API"},"headers":[],"relativePath":"blog/posts/2210.md","filePath":"blog/posts/2210.md","lastUpdated":1786271874000}`),a={name:`blog/posts/2210.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="自建-telegram-bot-api" tabindex="-1">自建 Telegram Bot API <a class="header-anchor" href="#自建-telegram-bot-api" aria-label="Permalink to “自建 Telegram Bot API”">​</a></h1><div class="telegram-content"><u>自建 Telegram Bot API</u><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD2QwAAiXj2Vc.webp" alt="😃" loading="lazy" decoding="async">在使用本地服务器模式时<br><br>- 无大小限制地下载文件<br><br>- 可以上传最大为 2000 MB 的文件<br><br>- 支持通过本地路径和文件 URI 方案来上传文件<br><br>- max_webhook_connections 可达 100000<br><br>其中 <code>api-id</code> 和 <code>api-hash</code> 为你申请的 Telegram App 配置<br><br>▎方式 1: Docker 安装<br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">services:
  telegram-bot-api:
    image: aiogram/telegram-bot-api:latest
    container_name: telegram-bot-api
    restart: always
    environment:
      TELEGRAM_LOCAL: true
      TELEGRAM_API_ID: &quot;xxx&quot;
      TELEGRAM_API_HASH: &quot;yyy&quot;
    volumes:
      - ./telegram-bot-api:/var/lib/telegram-bot-api
    ports:
      - 127.0.0.1:55522:8081</pre></summary></details><br><br>▎方式 2: 手动安装<br><br>按照 <a href="https://github.com/tdlib/telegram-bot-api">tdlib/telegram-bot-api</a> 官方说明编译安装后, 创建一个服务<br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">[Unit]
Description=telegram-bot-api
After=network.target
[Install]
WantedBy=multi-user.target
[Service]
Type=simple
WorkingDirectory=/root/telegram-bot-api
ExecStart=/usr/local/bin/telegram-bot-api -d /root/telegram-bot-api --temp-dir=/root/telegram-bot-api --local --api-id=xxx --api-hash=yyy -p 55522 --http-ip-address 127.0.0.1
Restart=always</pre></summary></details><br><br><code>systemctl daemon-reload; systemctl enable --now telegram-bot-api</code> 启动<br><br>▎使用方式<br><br><code>http://127.0.0.1:55522</code> 替换 <code>https://api.telegram.org</code> 即可<br><br>使用 <code>https://api.telegram.org</code> 时无法上传超过 50 MB 的文件, 使用本地 API 即可成功上传<br><br>相关内容 <a href="https://t.me/zhetengsha/2209">人形定时上传文件脚本</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/154/">服务器合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">合集</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭</a> <img class="telegram-custom-emoji" src="/telegram/AgADbg0AAgj82Vc.webp" alt="🥰" loading="lazy" decoding="async"><a href="https://t.me/xream_bot">联系推广</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #Telegram #TG #bot #API #接口 #自建 #Docker #上传 #备份</div><p class="telegram-source"><a href="https://t.me/zhetengsha/2210">查看 Telegram 原文</a></p>`,3)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};