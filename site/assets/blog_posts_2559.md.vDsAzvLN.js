import"./chunks/assets.COeCtnMN.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"域名解析多 IP 裂变节点","description":"","frontmatter":{"title":"域名解析多 IP 裂变节点"},"headers":[],"relativePath":"blog/posts/2559.md","filePath":"blog/posts/2559.md","lastUpdated":1783382106000}`),a={name:`blog/posts/2559.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="域名解析多-ip-裂变节点" tabindex="-1">域名解析多 IP 裂变节点 <a class="header-anchor" href="#域名解析多-ip-裂变节点" aria-label="Permalink to “域名解析多 IP 裂变节点”">​</a></h1><img class="telegram-media" src="/telegram/AQADrcIxG5fyqVV-.jpg" alt="Telegram 图片" loading="lazy" decoding="async"><div class="telegram-content"><u>Sub-Store 小课堂: 域名解析多 IP 裂变节点</u><br><br><a href="https://t.me/zhetengsha_group/911695">群友的需求</a><br><blockquote class="telegram-blockquote"><pre class="telegram-blockquote-content">使用了域名解析功能，如果有一个域名解析出来多个ip，如何让每个ip都变成一个节点</pre></blockquote><br><br>1. 如果你的真实需求是解析出不同运营商/不同地区的不同 IP<br>1.1 请把 Sub-Store 内置的域名解析这一步操作换成脚本操作, 内容为:<br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">const server = &#39;<a href="https://223.6.6.6/dns-query">https://223.6.6.6/dns-query</a>&#39;; // DoH 阿里和腾讯的可能会触发限速 可以换别的试试
const edns = [{ name: &#39;联通&#39;, ip: &#39;119.36.124.169&#39; }, { name: &#39;电信&#39;, ip: &#39;116.207.181.162&#39; }, { name: &#39;移动&#39;, ip: &#39;111.47.229.151&#39; }]; // 不同运营商/地区的 IP, 作为 EDNS Client Subnet (ECS)
const type = &#39;A&#39;; // A 或 AAAA

if (!ProxyUtils.isIP($server.server)) {
    const cache = scriptResourceCache;
    const resolve = async (url, domain, type, { name, ip }) =&gt; {
        const id = \`\${url}:\${domain}:\${type}:\${name}:\${ip}\`;
        const cached = cache.get(id);
        // 使用缓存
        if (cached) return cached;
        const res = await ProxyUtils.doh({
            url,
            domain,
            type,
            edns: ip,
        });
        const { answers } = res;
        if (!Array.isArray(answers) || answers.length === 0) {
            throw new Error(&#39;No answers&#39;);
        }
        let result = answers
            .filter((i) =&gt; i?.type === type)
            .map((i) =&gt; i?.data)
            .filter((i) =&gt; i);
        if (result.length === 0) {
            throw new Error(&#39;No answers&#39;);
        }
        result = [...new Set(result.flat())];
        const data = {
          ip,
          name,
          result,
        }
        cache.set(id, data);
        return data;
    };

    $server._domain = $server.server
    $server._resolved_ips = await Promise.all(
        edns.map(({ip, name}) =&gt; resolve(server, $server.server, type, { ip, name })),
    );
}</pre></summary></details><br>1.2 然后接一个脚本操作<br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">function operator(proxies = []) {
  const list = []
  proxies.map((p = {}) =&gt; {
    let ips = p._resolved_ips
    if (Array.isArray(ips) &amp;&amp; ips.length &gt; 0) {
      ips.map(({ name, ip, result }) =&gt; {
        result.map((server, index) =&gt; {
          list.push({
            ...p,
            name: \`\${name} \${index + 1} - \${p.name}\`,
            server,
          })
        })
      })
      // 取消下面几行的注释, 可以添加一个原始域名的节点
      // list.push({
      //   ...p,
      //   name: \`原始 - \${p.name}\`,
      //   server: p._domain,
      // })
    } else {
      list.push(p)
    }
  })
  return list
}</pre></summary></details><br><br>2. 如果你的需求只是裂变, 先添加一个内置的域名解析, 然后添加一个脚本操作:<br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">function operator(proxies = []) {
  const list = []
  proxies.map((p = {}) =&gt; {
    let ips = p._resolved_ips
    if (Array.isArray(ips) &amp;&amp; ips.length &gt; 0) {
      ips.map((server, index) =&gt; {
        list.push({
          ...p,
          name: \`\${p.name}\${index + 1}\`,
          server,
        })
      })
      // 取消下面几行的注释, 可以添加一个原始域名的节点
      // list.push({
      //   ...p,
      //   name: \`原始 - \${p.name}\`,
      //   server: p._domain,
      // })
    } else {
      list.push(p)
    }
  })
  return list
}</pre></summary></details><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/214/">Sub-Store 合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">频道资源合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭推荐</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #SubStore #Sub-Store #小课堂 #tips #域名解析 #裂变 #IP #节点</div><p class="telegram-source"><a href="https://t.me/zhetengsha/2559">查看 Telegram 原文</a></p>`,4)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};