import"./chunks/assets.DlmBUlu0.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"PeaNUT homepage widget 配置","description":"","frontmatter":{"title":"PeaNUT homepage widget 配置"},"headers":[],"relativePath":"blog/posts/2404.md","filePath":"blog/posts/2404.md","lastUpdated":1783382106000}`),a={name:`blog/posts/2404.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="peanut-homepage-widget-配置" tabindex="-1">PeaNUT homepage widget 配置 <a class="header-anchor" href="#peanut-homepage-widget-配置" aria-label="Permalink to “PeaNUT homepage widget 配置”">​</a></h1><div class="telegram-media-group"><img class="telegram-media" src="/telegram/AQADuL4xG1JosFR9.jpg" alt="Telegram 图片" loading="lazy" decoding="async"><img class="telegram-media" src="/telegram/AQADt74xG1JosFR9.jpg" alt="Telegram 图片" loading="lazy" decoding="async"></div><div class="telegram-content"><u>PeaNUT homepage widget 配置</u><br><br>图1 是自定义 API<br>图2 是直接用 homepage widget<br><br><code>http://10.0.0.2:55518</code> 是你搭建的 PeaNUT<br><code>ups</code> 是 你 ups 的名称<br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">PeaNUT:
  description: PVE
  icon: <a href="https://raw.githubusercontent.com/Brandawg93/PeaNUT/main/src/app/icon.svg">https://raw.githubusercontent.com/Brandawg93/PeaNUT/main/src/app/icon.svg</a>
  href: <a href="http://10.0.0.2:55518">http://10.0.0.2:55518</a>
  server: my-docker
  container: peanut
  showStats: true
  # widget:
  #     type: peanut
  #     url: <a href="http://10.0.0.2:55518">http://10.0.0.2:55518</a>
  #     key: ups
  widget:
      type: customapi
      url: <a href="http://10.0.0.2:55518/api/v1/devices/ups">http://10.0.0.2:55518/api/v1/devices/ups</a>
      mappings:
          - field: battery.charge
            label: Battery Charge
            format: percent
          - field: battery.runtime
            label: Battery Runtime
            format: text
          - field: ups.load
            label: UPS Load
            format: percent
          - field: ups.status
            label: UPS Status
            format: text
            remap:
              - value: OL
                to: Online
              - value: OB
                to: On Battery
              - value: LB
                to: Low Battery
              - any: true
                to: Unknown</pre></summary></details><br><br><img class="telegram-custom-emoji" src="/telegram/AgADfA4AAqBP2Fc.webp" alt="🥰" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/2380">PeaNUT: UPS 面板</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgADfA4AAqBP2Fc.webp" alt="🥰" loading="lazy" decoding="async"> <a href="https://github.com/gethomepage/homepage">gethomepage/homepage</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/146/">homepage 合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">频道资源合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭推荐</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #PeaNUT #UPS #NUT #面板 #homepage #widget</div><p class="telegram-source"><a href="https://t.me/zhetengsha/2404">查看 Telegram 原文</a></p>`,4)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};