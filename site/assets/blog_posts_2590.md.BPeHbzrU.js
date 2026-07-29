import"./chunks/assets.OnHELRHK.js";import{E as e,at as t,it as n,vt as r}from"./chunks/framework.DwjJr7zi.js";var i=JSON.parse(`{"title":"使用脚本判断 Surge VPN 状态并重启","description":"","frontmatter":{"title":"使用脚本判断 Surge VPN 状态并重启"},"headers":[],"relativePath":"blog/posts/2590.md","filePath":"blog/posts/2590.md","lastUpdated":1783382106000}`),a={name:`blog/posts/2590.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="使用脚本判断-surge-vpn-状态并重启" tabindex="-1">使用脚本判断 Surge VPN 状态并重启 <a class="header-anchor" href="#使用脚本判断-surge-vpn-状态并重启" aria-label="Permalink to “使用脚本判断 Surge VPN 状态并重启”">​</a></h1><img class="telegram-media" src="/telegram/AQADEMMxGzdl-FV-.jpg" alt="Telegram 图片" loading="lazy" decoding="async"><div class="telegram-content"><u>使用脚本判断 Surge VPN 状态并重启</u><br><br>macOS 上 Surge VPN 偶尔会断开<br>此脚本将先尝试重载配置, 然后尝试重启 App<br><br>可配合 Keyboard Maestro 自动化在唤醒系统后检测并重启<br><br><details class="telegram-blockquote-collapsible"><summary aria-label="展开或收起引用"><pre class="telegram-blockquote-content">#! /usr/bin/env bash

# 检查 Surge 连接状态的函数
check_surge_status() {
    # 获取 Surge 的网络服务名称
    local surge_service=$(networksetup -listallnetworkservices| grep Surge)
    
    # 获取 Surge 的网络服务状态
    local surge_status=$(networksetup -showpppoestatus &quot;$surge_service&quot;)
    
    if [ &quot;$surge_status&quot; = &quot;connected&quot; ]; then
        echo 0
    else
        echo 1
    fi
}

if [ $(check_surge_status) -eq 0 ]; then
    echo &quot;✅ Surge 已连接&quot;
else
    # echo &quot;❌ Surge 未连接&quot;
    echo &quot;🔄 尝试重载配置&quot;
    /Applications/Surge.app/Contents/Applications/surge-cli reload
    # echo &quot;重载配置完成&quot;
    sleep 2
    if [ $(check_surge_status) -eq 0 ]; then
        echo &quot;✅ Surge 已连接&quot;
    else
        # echo &quot;❌ Surge 未连接&quot;
        echo &quot;🔄 尝试重启 Surge&quot;
        /Applications/Surge.app/Contents/Applications/surge-cli stop
        open -a Surge
        osascript -e &#39;tell application &quot;Surge&quot; to set visible of its first window to false&#39;
        sleep 2
        if [ $(check_surge_status) -eq 0 ]; then
            echo &quot;✅ Surge 已连接&quot;
        else
            echo &quot;❌ Surge 未连接&quot;
        fi

    fi
fi</pre></summary></details><br><br><img class="telegram-custom-emoji" src="/telegram/AgAEDgACMozQVw.webp" alt="🤭" loading="lazy" decoding="async"> <a href="/blog/52/">macOS 合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADRw4AApYl0Vc.webp" alt="🧐" loading="lazy" decoding="async"> <a href="/blog/">频道资源合集</a> <img class="telegram-custom-emoji" src="/telegram/AgADmw4AArTV0Fc.webp" alt="😄" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha/957">恰饭推荐</a> <img class="telegram-custom-emoji" src="/telegram/AgAD3A4AAjTykVM.webp" alt="💬" loading="lazy" decoding="async"> <a href="https://t.me/zhetengsha_group">群组</a><br><br><img class="telegram-custom-emoji" src="/telegram/AgAD_A0AAh_-0Fc.webp" alt="🥰" loading="lazy" decoding="async"> #Mac #macOS #App #VPN #Surge</div><p class="telegram-source"><a href="https://t.me/zhetengsha/2590">查看 Telegram 原文</a></p>`,4)]])}var s=e(a,[[`render`,o]]);export{i as __pageData,s as default};