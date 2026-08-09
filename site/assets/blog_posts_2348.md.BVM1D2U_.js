import"./chunks/assets.Cp_lF0-_.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"OpenWRT 开启 IPv6 中继(小米路由器 BE7000 为例)","description":"","frontmatter":{"title":"OpenWRT 开启 IPv6 中继(小米路由器 BE7000 为例)"},"headers":[],"relativePath":"blog/posts/2348.md","filePath":"blog/posts/2348.md","lastUpdated":1783382106000}`),a={name:`blog/posts/2348.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="openwrt-开启-ipv6-中继-小米路由器-be7000-为例" tabindex="-1">OpenWRT 开启 IPv6 中继(小米路由器 BE7000 为例) <a class="header-anchor" href="#openwrt-开启-ipv6-中继-小米路由器-be7000-为例" aria-label="Permalink to “OpenWRT 开启 IPv6 中继(小米路由器 BE7000 为例)”">​</a></h1><div class="telegram-content"><u>OpenWRT 开启 IPv6 中继(小米路由器 BE7000 为例)</u><br><br>今天联通突然不下发 PD 了. 折腾个 IPv6 中继<br><br><img class="telegram-custom-emoji" src="/telegram/AgADfA4AAqBP2Fc.webp" alt="🥰" loading="lazy" decoding="async"><a href="https://www.right.com.cn/forum/thread-8283638-1-1.html">【保姆级教程】小米万兆路由器/小米路由器7000 SSH + 硬固化</a><br><br>▎修改 <code>/etc/config/dhcp</code><br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">config dhcp &#39;lan
  ...
  option ra &#39;relay&#39;
  option dhcpv6 &#39;relay&#39;
  option ndp &#39;relay&#39;
  option ndproxy_routing &#39;0
config dhcp &#39;wan&#39;
  ...
  option ra &#39;relay&#39;
  option dhcpv6 &#39;relay&#39;
  option ndp &#39;relay&#39;
  option master &#39;1&#39;
  option ndproxy_routing &#39;0&#39;</pre></summary></details><br>重启 <code>/etc/init.d/odhcpd restart</code><br><br>如果你只做完上面的步骤, 你会发现你有 IPv6 地址了, 但是没法访问外网. <br><br>下面整一个脚本自动添加路由<br><br>▎增加 <code>/etc/hotplug.d/iface/99-v6</code><br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">if [ &quot;$ACTION&quot; = &quot;ifup&quot; -a &quot;$INTERFACE&quot; = &quot;wan6&quot;  ]; then
        ip -6 route add \`ip -6 route show default | sed -n -e &#39;s/default from //&#39; -e &#39;s/ via .*$//g&#39; -e &#39;/64$/p&#39;\` dev br-lan metric 128 #根据默认路由获取ipv6网段前缀，添加指向br-lan，metric（跃点数）128比原来256小，表示优先级更高
        logger -t IPV6 &quot;Route resetting for $INTERFACE up&quot; #输出log日志
fi</pre></summary></details><br><br>给权限 <code>chmod +x /etc/hotplug.d/iface/99-v6</code><br><br>重启 <code>/etc/init.d/network restart</code><br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">重启会丢失, 可以把脚本放在 /data 里, 启动逻辑里加入复制+权限等逻辑
比如你可以简单点, 脚本放在 \`/data/auto_ssh/99-v6 /etc/hotplug.d/iface/99-v6\`
在 \`/data/auto_ssh/auto_ssh.sh\` 里加入
\`\`\`
cp /data/auto_ssh/99-v6 /etc/hotplug.d/iface/99-v6
chmod +x /etc/hotplug.d/iface/99-v6
\`\`\`</pre></summary></details><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/237/">路由器合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">合集</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭</a> <img class="telegram-custom-emoji" src="/telegram/AgADbg0AAgj82Vc.webp" alt="🥰" loading="lazy" decoding="async"><a href="https://t.me/xream_bot">联系推广</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #路由器 #IPv6 #中继 #OpenWRT #小米路由器 #BE7000</div><p class="telegram-source"><a href="https://t.me/zhetengsha/2348">查看 Telegram 原文</a></p>`,3)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};