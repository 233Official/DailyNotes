import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as r,a as e,d as s,b as a,e as l}from"./app-BT-bWAve.js";const c={},d=l('<h1 id="wsl2" tabindex="-1"><a class="header-anchor" href="#wsl2"><span>WSL2</span></a></h1><ul><li><a href="#wsl2">WSL2</a><ul><li><a href="#%E5%AE%89%E8%A3%85">安装</a></li><li><a href="#%E5%8D%B8%E8%BD%BD">卸载</a></li><li><a href="#vscode-ssh-remote">VSCode-ssh-remote</a></li><li><a href="#%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84">端口映射</a></li><li><a href="#wsl2-dns-%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8">WSL2 DNS 服务异常</a></li><li><a href="#%E6%8A%A5%E9%94%99%E6%94%B6%E9%9B%86">报错收集</a><ul><li><a href="#ssh-%E6%8B%92%E7%BB%9D">ssh 拒绝</a></li><li><a href="#ping-%E7%9A%84%E9%80%9A-ip--ping-%E4%B8%8D%E9%80%9A%E5%9F%9F%E5%90%8D">ping 的通 ip , ping 不通域名</a></li></ul></li></ul></li></ul><hr><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>',4),p={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"},h={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-3---enable-virtual-machine-feature",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_18625805/article/details/109732122",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),g={href:"https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>以管理员身份打开 PowerShell 并运行：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>dism<span class="token punctuation">.</span>exe <span class="token operator">/</span>online <span class="token operator">/</span><span class="token function">enable-feature</span> <span class="token operator">/</span>featurename:VirtualMachinePlatform <span class="token operator">/</span>all <span class="token operator">/</span>norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>重新启动</strong>计算机，以完成 WSL 安装并更新到 WSL 2。</p><hr><p>下载 Linux 内核更新包并安装</p>`,5),v={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,'systeminfo | find "System Type"',-1),w=e("strong",null,"Caveat：",-1),k=e("code",null,`systeminfo | find '"Systemtyp"'`,-1),S=l(`<hr><p><code>Windows+X</code> 选择以管理员模式打开 Powershell, 执行如下命令安装 wsl2</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 该命令默认安装 wsl2</span>
wsl <span class="token operator">--</span>install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202211202310305.png" alt="image-20221120231039275"></p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>wsl <span class="token operator">--</span>install <span class="token operator">-</span>d kali-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>按照提示新建账户密码即可</p><hr><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h2>`,8),E={href:"https://zhuanlan.zhihu.com/p/487091950",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),L=l(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>wslconfig <span class="token operator">/</span>u kali-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="vscode-ssh-remote" tabindex="-1"><a class="header-anchor" href="#vscode-ssh-remote"><span>VSCode-ssh-remote</span></a></h2><p>使用 SSH-remote 插件连上 WSL 后如果不是以 root 用户登入的话,会在一些系统目录(如 <code>/etc</code>, <code>/dev</code>, <code>/root</code> 等)被限制编辑与增删, 不过在用户目录(如 <code>/ubuntu</code>, <code>/mnt</code>)的权限是足够的</p><p>如果想要登入后可以编辑系统目录文件的话就要使用 <code>root</code> 用户登录, 但是 remote-ssh 虽然对于 <code>SSH Targets</code> 有配置文件可以编辑登入用户, 但是没有关于 <code>WSL Targets</code> 的配置, 那么这就需要在更高的层级编辑默认以 <code>root</code> 身份登入 <code>WSL</code></p>`,5),W={href:"https://github.com/microsoft/vscode-remote-release/issues/3631",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#change-the-default-user-for-a-distribution",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.cnblogs.com/Hiro666/p/14119763.html",target:"_blank",rel:"noopener noreferrer"},A=l(`<ul><li><p>首先查看下当前出问题的 <code>WSL Distribution</code> 版本<br><code>win+x</code> 打开 <code>Windows Terminal</code>, 输入如下命令查看所有的 <code>WSL Distribution</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202109211630793.png" alt="image-20210921163044694"></p><p>其实在 <code>Remote-ssh - WSL Targets</code> 目录下就可以看到当前的 <code>WSL Distribution</code></p><p><img src="http://cdn.ayusummer233.top/img/202109211633562.png" alt="image-20210921163322476"></p></li><li><p>确认当前的 <code>WSL Distribution</code> 后在 <code>Windows Terminal</code> 中输入</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span> config --default-user <span class="token operator">&lt;</span>Username<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以将 <code>WSL Distribution</code> 为 <code>DistributionName</code> 的 <code>WSL</code> 的默认登录用户切换为 <code>Username</code>, 如:</p><p><img src="http://cdn.ayusummer233.top/img/202109211635853.png" alt="image-20210921163536793"></p><blockquote><p>需要注意的是, 虽然看到的 <code>Distribution</code> 为 <code>Ubuntu-20.04</code>, 但是输入命令时要写成 <code>ubuntu2004</code></p><p>相应的看到的是 <code>kali-linux</code>, 但是输入命令时要用 <code>kali</code></p></blockquote></li><li><p>再打开相应 <code>WSL</code> 时就可以看到用户已经切换到相应设置的用户了</p><p><img src="http://cdn.ayusummer233.top/img/202109211639773.png" alt="image-20210921163927558"></p><p>再用 VSCode-SSH-remote 连接 WSL 时可以看到登入用户已经切换成刚才配置的用户了, 当切换的是 root 用户时, 此时就可以使用 VSCode 新建及编辑系统目录下的文件了</p><p><img src="http://cdn.ayusummer233.top/img/202109211644088.png" alt="image-20210921164444924"></p><hr></li></ul><h2 id="端口映射" tabindex="-1"><a class="header-anchor" href="#端口映射"><span>端口映射</span></a></h2><p>正常情况下直接从本机 telnet wsl2 的端口是不通的, 需要映射 wsl2 端口到本机</p>`,3),q={href:"https://blog.csdn.net/keyiis_sh/article/details/113819244",target:"_blank",rel:"noopener noreferrer"},y=l(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 获取 wsl ip 地址</span>
wsl <span class="token operator">--</span> ifconfig eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202208061600558.png" alt="image-20220806160015420"></p></blockquote><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 随便看看本机端口有没有占用(比如9225)</span>
netstat <span class="token operator">-</span>aon <span class="token punctuation">|</span> findstr <span class="token string">&quot;9225&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202208061602939.png" alt="image-20220806160222828"></p></blockquote><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 将ip地址的对应的端口映射到宿主win10对应的端口</span>
<span class="token comment"># 需要管理员权限</span>
<span class="token comment"># netsh interface portproxy add v4tov4 listenport=[win10端口] listenaddress=0.0.0.0 connectport=[虚拟机的端口] connectaddress=[虚拟机的ip]</span>
netsh interface portproxy add v4tov4 listenport=9225 listenaddress=0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0 connectport=69 connectaddress=172<span class="token punctuation">.</span>29<span class="token punctuation">.</span>61<span class="token punctuation">.</span>202
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202208061603880.png" alt="image-20220806160340771"></p></blockquote><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 检测是否设置成功</span>
netsh interface portproxy show all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202208061604773.png" alt="image-20220806160442677"></p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 删除端口转发</span>
netsh interface portproxy delete v4tov4 listenport=9225 listenaddress=0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><hr><h2 id="wsl2-dns-服务异常" tabindex="-1"><a class="header-anchor" href="#wsl2-dns-服务异常"><span>WSL2 DNS 服务异常</span></a></h2><p>无法正确解析域名, 直接 ping ip 可以 ping 通, 排查了一圈发现主网也 ping 不通</p>`,11),C={href:"https://blog.csdn.net/daihaoxin/article/details/115978662",target:"_blank",rel:"noopener noreferrer"},N=l('<p><img src="http://cdn.ayusummer233.top/img/20211218213224.png" alt="20211218213224"></p><ul><li>网络: 172.22.0.0, 20 位掩码</li></ul><p>配置主网防火墙入站规则</p><ul><li>规则类型: 自定义</li><li>程序: 所有程序</li><li>协议和端口: 默认值不做改动</li><li>作用域: 此规则适用于哪些本地 IP 地址?: 下列 IP 地址 -&gt; 添加 -&gt; 此 ip 地址或子网: <code>172.22.0.0/20</code></li><li>操作: 允许连接</li><li>配置文件: 全选</li><li>名称自定义</li></ul><p>然后在 WSL2 里重新 ping 主网又能 ping 通了, DNS 也正常了, 可以 ping 同其他域名了</p><blockquote><p>缺点在于计算机重启后 WSL2 主网地址可能会变(<br> 需要再配下防火墙<br> 挺秃然的, 没有完全搞清楚原理, 无法一劳永逸地解决这个问题</p></blockquote><hr><h2 id="报错收集" tabindex="-1"><a class="header-anchor" href="#报错收集"><span>报错收集</span></a></h2>',8),T={href:"https://xiabee.cn/coding/wsl2/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.jianshu.com/p/ba2cf239ebe0",target:"_blank",rel:"noopener noreferrer"},z=e("hr",null,null,-1),F=e("h3",{id:"ssh-拒绝",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssh-拒绝"},[e("span",null,"ssh 拒绝")])],-1),M=e("p",null,[e("code",null,"ssh: connect to host localhost port 22: Connection refused")],-1),P={href:"https://blog.csdn.net/hxc2101/article/details/113617870",target:"_blank",rel:"noopener noreferrer"},I=l(`<p>打开 <code>/etc/ssh/sshd_config</code> 将监听地址 localhost 取消注释:</p><p><img src="http://cdn.ayusummer233.top/img/202110262142078.png" alt="image-20211026214222894"></p><p>然后重启 <code>ssh 服务</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">service</span> <span class="token function">ssh</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>mark 下这句 ssh 服务重启指令</strong>, ssh localhost 能够正常运行后如果 WSL2 关闭重启了再 <code>ssh localhost</code> 可能还会 <code>Connection refused</code>, 这时只要再 <code>service ssh restart</code> 然后 <code>ssh localhost</code> 就可以了</p><p><img src="http://cdn.ayusummer233.top/img/202110262148965.png" alt="image-20211026214857109"></p><hr><h3 id="ping-的通-ip-ping-不通域名" tabindex="-1"><a class="header-anchor" href="#ping-的通-ip-ping-不通域名"><span>ping 的通 ip , ping 不通域名</span></a></h3><p>dns 解析错误</p><p>修改 <code>/etc/resolv.conf</code> 文件</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>nameserver 8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,12);function R(U,H){const n=t("ExternalLinkIcon");return i(),r("div",null,[d,e("blockquote",null,[e("p",null,[e("a",p,[s("安装 WSL | Microsoft Learn"),a(n)])]),e("p",null,[e("a",h,[s("旧版 WSL 的手动安装步骤 | Microsoft Learn"),a(n)])]),e("p",null,[e("a",u,[s("win10 WSL2 问题解决 WslRegisterDistribution failed with error: 0x800701bc_first_Dance 的博客-CSDN 博客"),a(n)])]),m]),e("p",null,[s("安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要"),e("a",g,[s("虚拟化功能"),a(n)]),s("才能使用此功能。")]),b,e("ul",null,[e("li",null,[e("p",null,[e("a",v,[s("适用于 x64 计算机的 WSL2 Linux 内核更新包"),a(n)])]),e("blockquote",null,[e("p",null,[s("如果使用的是 ARM64 计算机，请下载 "),e("a",f,[s("ARM64 包"),a(n)]),s("。 如果不确定自己计算机的类型，请打开命令提示符或 PowerShell，并输入："),_,s("。 "),w,s(" 在非英文版 Windows 上，你可能必须修改搜索文本，对“System Type”字符串进行翻译。 你可能还需要对引号进行转义来用于 find 命令。 例如，在德语版中使用 "),k,s("。")])])])]),S,e("blockquote",null,[e("p",null,[e("a",E,[s("WSL 发行版卸载 - 知乎 (zhihu.com)"),a(n)])]),x]),L,e("blockquote",null,[e("p",null,[e("a",W,[s("Change vscode user in remote-WSL · Issue #3631 · microsoft/vscode-remote-release (github.com)"),a(n)])]),e("p",null,[e("a",D,[s("Manage Linux Distributions - Change the default user for a distribution | Microsoft Docs"),a(n)])]),e("p",null,[e("a",B,[s("Ubuntu : 无法将“Ubuntu”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径 正确，然后再试一次。 - z_zhiro - 博客园 (cnblogs.com)"),a(n)])])]),A,e("blockquote",null,[e("p",null,[e("a",q,[s("wsl2 设置端口映射_压码路的博客-CSDN 博客_wsl 端口映射"),a(n)])])]),y,e("blockquote",null,[e("p",null,[s("解决方案: "),e("a",C,[s("WSL 2 自定义安装目录和网络配置_daihaoxin 的专栏-CSDN 博客_wsl2 目录"),a(n)])])]),N,e("blockquote",null,[e("p",null,[e("a",T,[s("WSL2 踩坑分享 – xiabee"),a(n)])]),e("p",null,[s("[WSL2 网络异常排查 "),e("a",V,[s("ping 不通、网络地址异常、缺少默认路由、被宿主机防火墙拦截] - 简书 (jianshu.com)"),a(n)])])]),z,F,M,e("blockquote",null,[e("p",null,[e("a",P,[s("wsl 的 ssh server 无法启动 (ssh localhost 时报错 ssh: connect to host localhost port 22: Connection refused) _hxc2101 的博客-CSDN 博客"),a(n)])])]),I])}const O=o(c,[["render",R],["__file","WSL2.html.vue"]]),X=JSON.parse('{"path":"/%E9%80%9A%E8%AF%86/Linux/WSL/WSL2.html","title":"WSL2","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"卸载","slug":"卸载","link":"#卸载","children":[]},{"level":2,"title":"VSCode-ssh-remote","slug":"vscode-ssh-remote","link":"#vscode-ssh-remote","children":[]},{"level":2,"title":"端口映射","slug":"端口映射","link":"#端口映射","children":[]},{"level":2,"title":"WSL2 DNS 服务异常","slug":"wsl2-dns-服务异常","link":"#wsl2-dns-服务异常","children":[]},{"level":2,"title":"报错收集","slug":"报错收集","link":"#报错收集","children":[{"level":3,"title":"ssh 拒绝","slug":"ssh-拒绝","link":"#ssh-拒绝","children":[]},{"level":3,"title":"ping 的通 ip , ping 不通域名","slug":"ping-的通-ip-ping-不通域名","link":"#ping-的通-ip-ping-不通域名","children":[]}]}],"git":{"createdTime":1727161456000,"updatedTime":1727161456000,"contributors":[{"name":"233","email":"ayusummer233@vip.qq.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1561},"filePathRelative":"通识/Linux/WSL/WSL2.md","localizedDate":"2024年9月24日","excerpt":"\\n<ul>\\n<li><a href=\\"#wsl2\\">WSL2</a>\\n<ul>\\n<li><a href=\\"#%E5%AE%89%E8%A3%85\\">安装</a></li>\\n<li><a href=\\"#%E5%8D%B8%E8%BD%BD\\">卸载</a></li>\\n<li><a href=\\"#vscode-ssh-remote\\">VSCode-ssh-remote</a></li>\\n<li><a href=\\"#%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84\\">端口映射</a></li>\\n<li><a href=\\"#wsl2-dns-%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8\\">WSL2 DNS 服务异常</a></li>\\n<li><a href=\\"#%E6%8A%A5%E9%94%99%E6%94%B6%E9%9B%86\\">报错收集</a>\\n<ul>\\n<li><a href=\\"#ssh-%E6%8B%92%E7%BB%9D\\">ssh 拒绝</a></li>\\n<li><a href=\\"#ping-%E7%9A%84%E9%80%9A-ip--ping-%E4%B8%8D%E9%80%9A%E5%9F%9F%E5%90%8D\\">ping 的通 ip , ping 不通域名</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{O as comp,X as data};
