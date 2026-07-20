function p
    # 获取本地 IP 地址
    set localaddr (ipconfig getifaddr en0)

    # 检查是否输入了参数
    if test (count $argv) -eq 0
        echo "请提供 ping 命令的参数"
        return 1
    end

    # 使用 ping 命令并指定本地 IP 地址
    /sbin/ping -S "$localaddr" $argv
end
