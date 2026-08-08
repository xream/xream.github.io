import"./chunks/assets.DeKsZZ4W.js";import{E as e,St as t,at as n,it as r,ot as i,st as a,tt as o,vt as s}from"./chunks/framework.DwjJr7zi.js";var c=JSON.parse(`{"title":"自动设置服务端证书 SHA-256 指纹","description":"","frontmatter":{"title":"自动设置服务端证书 SHA-256 指纹"},"headers":[],"relativePath":"blog/posts/1434.md","filePath":"blog/posts/1434.md","lastUpdated":1783382106000}`),l={name:`blog/posts/1434.md`},u={class:`telegram-content`};function d(e,c,l,d,f,p){let m=t(`TelegramCustomEmoji`);return s(),r(`div`,null,[c[2]||=o(`h1`,{id:`自动设置服务端证书-sha-256-指纹`,tabindex:`-1`},[i(`自动设置服务端证书 SHA-256 指纹 `),o(`a`,{class:`header-anchor`,href:`#自动设置服务端证书-sha-256-指纹`,"aria-label":`Permalink to “自动设置服务端证书 SHA-256 指纹”`},`​`)],-1),c[3]||=o(`img`,{class:`telegram-media`,src:`/telegram/AQADsQ5rG8NCoFZ-.jpg`,alt:`Telegram 图片`,loading:`lazy`,decoding:`async`},null,-1),o(`div`,u,[c[0]||=n(`<img class="telegram-custom-emoji" src="/telegram/AgADjgIAAvkj2EQ.webp" alt="🔗" loading="lazy" decoding="async"> <u>Sub-Store 自动设置服务端证书 SHA-256 指纹</u><br><br>仅 Node.js 版支持<br><br>优先使用 <code>sni</code>, 其次节点服务端<br>其他需求可以让 AI 改改. 比如哪些节点需要加之类的.<br>这里示范的是直接从服务端取, 支持所有目标(包括 <img class="telegram-custom-emoji" src="/telegram/AgAD8gMAAgz-iUc.webp" alt="📦" loading="lazy" decoding="async"> sing-box 的 <code>certificate_public_key_sha256</code>)<br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">const tls = require(&quot;tls&quot;);
const crypto = require(&quot;crypto&quot;);

function getCertificateInfo(host, port = 443) {
  return new Promise((resolve) =&gt; {
    const socket = tls.connect(
      {
        host,
        port,
        servername: host,
        rejectUnauthorized: false,
      },
      () =&gt; {
        try {
          const cert = socket.getPeerCertificate(true);

          if (!cert || !cert.raw) {
            socket.end();
            return resolve({
              fingerprint: &quot;&quot;,
              publicKeySha256: &quot;&quot;,
            });
          }

          const x509 = new crypto.X509Certificate(cert.raw);

          // SHA256 证书指纹
          const fingerprint = cert.fingerprint256 || &quot;&quot;;

          // SHA256 公钥（SPKI）
          const publicKeyDer = x509.publicKey.export({
            type: &quot;spki&quot;,
            format: &quot;der&quot;,
          });

          const publicKeySha256 = crypto
            .createHash(&quot;sha256&quot;)
            .update(publicKeyDer)
            .digest(&quot;base64&quot;);

          socket.end();

          resolve({
            fingerprint,
            publicKeySha256,
          });
        } catch {
          socket.end();
          resolve({
            fingerprint: &quot;&quot;,
            publicKeySha256: &quot;&quot;,
          });
        }
      }
    );

    socket.on(&quot;error&quot;, () =&gt; {
      resolve({
        fingerprint: &quot;&quot;,
        publicKeySha256: &quot;&quot;,
      });
    });
  });
}

async function operator(proxies, targetPlatform, context) {
  console.log(\`[证书] INFO: 开始处理 \${proxies.length} 个节点\`);

  for await (const proxy of proxies) {
    const host = proxy.sni || proxy.server;

    if (!host || ProxyUtils.isIP(host)) {
      console.log(
        \`[证书] WARN: [\${proxy.name}] 跳过，目标为 IP 或为空 (\${host || &quot;-&quot;})\`
      );
      continue;
    }

    console.log(
      \`[证书] INFO: [\${proxy.name}] 正在获取 \${host} 的证书信息\`
    );

    const cert = await getCertificateInfo(host);

    proxy.fingerprint = cert.fingerprint;

    if (cert.publicKeySha256) {
      proxy._certificate_public_key_sha256 = [cert.publicKeySha256];
    }

    if (cert.fingerprint) {
      console.log(
        \`[证书] LOG: [\${proxy.name}] fingerprint=\${cert.fingerprint}, public_key_sha256=\${cert.publicKeySha256}\`
      );
    } else {
      console.log(\`[证书] WARN: [\${proxy.name}] 获取证书失败\`);
    }
  }

  console.log(\`[证书] INFO: 全部节点处理完成\`);

  return proxies;
}</pre></summary></details><br><br>相关: `,25),o(`u`,null,[a(m,{src:`/telegram/AgADFjsAAtJ7gEk.json`,label:`🔒`})]),c[1]||=n(`<a href="/blog/posts/1433">自建节点证书相关说明</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/154/">服务器合集</a> <img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/214/">Sub-Store 合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭推荐</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a> <img class="telegram-custom-emoji" src="/telegram/AgADbg0AAgj82Vc.webp" alt="🥰" loading="lazy" decoding="async"><a href="https://t.me/xream_bot">联系推广</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #节点 #证书 #SNI #TLS #SHA256 #指纹 #SSL #sing-box #mihomo #surge`,29)]),c[4]||=o(`p`,{class:`telegram-source`},[o(`a`,{href:`https://t.me/zhetengsha/1434`},`查看 Telegram 原文`)],-1)])}var f=e(l,[[`render`,d]]);export{c as __pageData,f as default};