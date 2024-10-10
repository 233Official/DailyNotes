import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as d,a as e,d as a,b as s,e as l}from"./app-BT-bWAve.js";const r={},o=l('<h1 id="linux-会话管理工具" tabindex="-1"><a class="header-anchor" href="#linux-会话管理工具"><span>Linux 会话管理工具</span></a></h1><ul><li><a href="#linux-%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">Linux 会话管理工具</a><ul><li><a href="#zellij">Zellij</a><ul><li><a href="#%E5%AE%89%E8%A3%85">安装</a></li><li><a href="#%E4%BD%BF%E7%94%A8">使用</a></li></ul></li><li><a href="#screen-%E5%91%BD%E4%BB%A4">Screen 命令</a><ul><li><a href="#%E8%AF%AD%E6%B3%95">语法</a></li></ul></li><li><a href="#tmux">tmux</a><ul><li><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法</a></li><li><a href="#%E5%B8%B8%E7%94%A8%E6%B5%81%E7%A8%8B">常用流程</a></li><li><a href="#%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86">会话管理</a><ul><li><a href="#%E6%96%B0%E5%BB%BA%E4%BC%9A%E8%AF%9D">新建会话</a></li><li><a href="#%E5%88%86%E7%A6%BB%E4%BC%9A%E8%AF%9D">分离会话</a></li><li><a href="#%E6%8E%A5%E5%85%A5%E4%BC%9A%E8%AF%9D">接入会话</a></li><li><a href="#kill%E4%BC%9A%E8%AF%9D">kill会话</a></li><li><a href="#%E5%88%87%E6%8D%A2%E4%BC%9A%E8%AF%9D">切换会话</a></li><li><a href="#%E9%87%8D%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D">重命名会话</a></li></ul></li></ul></li></ul></li></ul><hr><h2 id="zellij" tabindex="-1"><a class="header-anchor" href="#zellij"><span>Zellij</span></a></h2>',4),p={href:"https://zellij.dev/",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),h={href:"https://blog.csdn.net/qq_43474959/article/details/115028848",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zellij.dev/documentation/installation.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zellij.dev/",target:"_blank",rel:"noopener noreferrer"},b=l(`<blockquote><p>位置选定在自己想要安装 zellij 位置</p></blockquote><p>解压:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> zellij-x86_64-unknown-linux-musl.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202205041947326.png" alt=""></p><p>添加执行权限:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x zellij
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行 <code>zellij</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./zellij
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code>zellij</code> 所在目录添加到 <code>PATH</code> 变量中以在任何地方使用 <code>zellij</code>:</p><p>打开 <code>/root/.bashrc</code> 在末尾加上如下内容:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/home/ubuntu/zellij:<span class="token environment constant">$PATH</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>若已经有了其他的环境变量, 请使用 <code>:</code> 将此条拼接在前面</p><p><img src="http://cdn.ayusummer233.top/img/202208241419154.png" alt="image-20220824141913053"></p></blockquote><p>然后:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就可以在任意位置使用 <code>zellij</code> 命令来启用 <code>zellij</code> 了</p><hr><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>新建一个<code>session</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>zellij
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建一个 <code>Tab</code>: <code>ctrl + t, n</code></p><p>重命名 <code>Tab</code>: <code>ctrl + t, r</code></p><p>新建一个 <code>pane</code>: <code>ctrl + p, n</code></p><p>重命名 <code>pane</code>: <code>Ctrl + p, c</code></p><p>detach session: <code>ctrl + o, d</code></p><p>关闭 session: <code>Ctrl + q</code></p><p>界面底部有提示, 很友好:</p><p><img src="http://cdn.ayusummer233.top/img/202205042107266.png" alt="image-20220504210749149"></p><p>显示 session 列表: <code>zellij list-sessions</code> 或者 <code>zellij ls</code></p><p><img src="http://cdn.ayusummer233.top/img/202205042109817.png" alt="image-20220504210932759"></p><p>返回某个 session: <code>zellij attach xxx</code> 或者 <code>zellij a xxx</code></p><hr><h2 id="screen-命令" tabindex="-1"><a class="header-anchor" href="#screen-命令"><span>Screen 命令</span></a></h2><p>Linux screen 命令用于多重视窗管理程序。</p><p>screen 为多重视窗管理程序。此处所谓的视窗，是指一个全屏幕的文字模式画面。通常只有在使用 telnet 登入主机或是使用老式的终端机时，才有可能用到 screen 程序。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>screen [-AmRvx -ls -wipe][-d &lt;作业名称&gt;][-h &lt;行数&gt;][-r &lt;作业名称&gt;][-s &lt;shell&gt;][-S &lt;作业名称&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><ul><li><code>-A</code> 　将所有的视窗都调整为目前终端机的大小。</li><li><code>-d&lt;作业名称&gt;</code> 　将指定的 screen 作业离线。</li><li><code>-h&lt;行数&gt;</code> 　指定视窗的缓冲区行数。</li><li><code>-m</code> 　即使目前已在作业中的 screen 作业，仍强制建立新的 screen 作业。</li><li><code>-r&lt;作业名称&gt;</code> ：　恢复离线的 screen 作业。</li><li><code>-R</code> 　先试图恢复离线的作业。若找不到离线的作业，即建立新的 screen 作业。</li><li><code>-s&lt;shell&gt; &lt;视窗名&gt;</code> 　：指定建立新视窗时，所要执行的 shell。</li><li><code>-S&lt;作业名称&gt;</code> 　:指定 screen 作业的名称。</li><li><code>-v</code> 　显示版本信息。</li><li><code>-x</code> 　恢复之前离线的 screen 作业。</li><li><code>-ls或--list</code> 　显示目前所有的 screen 作业。</li><li><code>-wipe</code> 　检查目前所有的 screen 作业，并删除已经无法使用的 screen 作业。</li></ul><p>在 screen 终端 下 按下 <code>Ctrl+a d</code> 键 可以离开 screen 作业</p><hr><h2 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux"><span>tmux</span></a></h2>`,41),g={href:"https://www.ruanyifeng.com/blog/2019/10/tmux.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://louiszhai.github.io/2017/09/30/tmux/",target:"_blank",rel:"noopener noreferrer"},x=l(`<hr><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装tmux </span>
<span class="token comment"># Ubuntu 或 Debian</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> tmux

<span class="token comment"># 进入 tmux 窗口</span>
$ tmux
<span class="token comment"># 退出 tmux 窗口</span>
Ctrl+D  或者 <span class="token builtin class-name">exit</span>

<span class="token comment"># tmux 快捷键</span>
<span class="token comment"># 先按下 Ctrl+B 然后按下其他键触发,例如获取帮助信息:</span>
$ Ctrl+B ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202409241407056.png" alt="image-20240924140745751"></p><hr><h3 id="常用流程" tabindex="-1"><a class="header-anchor" href="#常用流程"><span>常用流程</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 新建会话</span>
tmux new <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>会话名称<span class="token punctuation">]</span>
<span class="token comment"># 运行想要运行的程序/命令</span>
<span class="token comment"># 分离会话</span>
Ctrl+B  D
<span class="token comment"># 后续需要使用此会话再重新连接上来(下面命令中的 attach-session 可以简化为 a)</span>
tmux attach-session <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>会话名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理"><span>会话管理</span></a></h3><h4 id="新建会话" tabindex="-1"><a class="header-anchor" href="#新建会话"><span>新建会话</span></a></h4><p>第一个启动的 tmux 窗口编号是 <code>0</code>, 第二个是 <code>1</code></p><p>编号可能不太直观, 可以类似 <code>screen -S [窗口名]</code> 一样为会话取名:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tmux new <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>session-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h4 id="分离会话" tabindex="-1"><a class="header-anchor" href="#分离会话"><span>分离会话</span></a></h4><p>在 tmux 窗口中按下<code>Ctrl+B D</code>或者输入<code>tmux detach</code>命令，就会将当前会话与窗口分离。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ tmux detach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令执行后，就会退出当前 Tmux 窗口，但是会话和里面的进程仍然在后台运行。</p><p><code>tmux ls</code>命令可以查看当前所有的 Tmux 会话。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ tmux <span class="token function">ls</span>
<span class="token comment"># or</span>
$ tmux list-session
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="接入会话" tabindex="-1"><a class="header-anchor" href="#接入会话"><span>接入会话</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用编号接入会话</span>
tmux attach <span class="token parameter variable">-t</span> <span class="token number">0</span>
<span class="token comment"># 使用会话名称接入会话</span>
tmux attach <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>session-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="kill会话" tabindex="-1"><a class="header-anchor" href="#kill会话"><span>kill会话</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tmux kill-session <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>会话编号<span class="token punctuation">]</span>
<span class="token comment"># or</span>
tmux kill-session <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>session-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="切换会话" tabindex="-1"><a class="header-anchor" href="#切换会话"><span>切换会话</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tmux switch <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>会话编号<span class="token punctuation">]</span>
<span class="token comment"># or</span>
tmux switch <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>会话名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="重命名会话" tabindex="-1"><a class="header-anchor" href="#重命名会话"><span>重命名会话</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tmux rename-session <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>旧会话名/编号<span class="token punctuation">]</span> <span class="token punctuation">[</span>新会话名/编号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><hr>`,34);function k(A,f){const n=t("ExternalLinkIcon");return c(),d("div",null,[o,e("blockquote",null,[e("p",null,[e("a",p,[a("Zellij"),s(n)])])]),u,e("blockquote",null,[e("p",null,[e("a",h,[a("Linux Ubuntu 添加环境变量_FarryNiu 的博客-CSDN 博客_ubuntu 添加环境变量"),s(n)])]),e("p",null,[e("a",m,[a("Installation - Zellij User Guide"),s(n)])])]),e("p",null,[a("先在 "),e("a",v,[a("Zellij"),s(n)]),a(" 下载好压缩包, 然后传到 Linux 文件系统中")]),b,e("blockquote",null,[e("p",null,[e("a",g,[a("Tmux 使用教程 - 阮一峰的网络日志 (ruanyifeng.com)"),s(n)])]),e("p",null,[e("a",E,[a("Tmux使用手册 | louis blog (louiszhai.github.io)"),s(n)])])]),x])}const D=i(r,[["render",k],["__file","会话管理工具.html.vue"]]),C=JSON.parse('{"path":"/%E9%80%9A%E8%AF%86/Linux/%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html","title":"Linux 会话管理工具","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Zellij","slug":"zellij","link":"#zellij","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"Screen 命令","slug":"screen-命令","link":"#screen-命令","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]}]},{"level":2,"title":"tmux","slug":"tmux","link":"#tmux","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"常用流程","slug":"常用流程","link":"#常用流程","children":[]},{"level":3,"title":"会话管理","slug":"会话管理","link":"#会话管理","children":[]}]}],"git":{"createdTime":1727161548000,"updatedTime":1727161548000,"contributors":[{"name":"233","email":"ayusummer233@vip.qq.com","commits":1}]},"readingTime":{"minutes":3.77,"words":1130},"filePathRelative":"通识/Linux/会话管理工具.md","localizedDate":"2024年9月24日","excerpt":"\\n<ul>\\n<li><a href=\\"#linux-%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7\\">Linux 会话管理工具</a>\\n<ul>\\n<li><a href=\\"#zellij\\">Zellij</a>\\n<ul>\\n<li><a href=\\"#%E5%AE%89%E8%A3%85\\">安装</a></li>\\n<li><a href=\\"#%E4%BD%BF%E7%94%A8\\">使用</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#screen-%E5%91%BD%E4%BB%A4\\">Screen 命令</a>\\n<ul>\\n<li><a href=\\"#%E8%AF%AD%E6%B3%95\\">语法</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#tmux\\">tmux</a>\\n<ul>\\n<li><a href=\\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\\">基本用法</a></li>\\n<li><a href=\\"#%E5%B8%B8%E7%94%A8%E6%B5%81%E7%A8%8B\\">常用流程</a></li>\\n<li><a href=\\"#%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86\\">会话管理</a>\\n<ul>\\n<li><a href=\\"#%E6%96%B0%E5%BB%BA%E4%BC%9A%E8%AF%9D\\">新建会话</a></li>\\n<li><a href=\\"#%E5%88%86%E7%A6%BB%E4%BC%9A%E8%AF%9D\\">分离会话</a></li>\\n<li><a href=\\"#%E6%8E%A5%E5%85%A5%E4%BC%9A%E8%AF%9D\\">接入会话</a></li>\\n<li><a href=\\"#kill%E4%BC%9A%E8%AF%9D\\">kill会话</a></li>\\n<li><a href=\\"#%E5%88%87%E6%8D%A2%E4%BC%9A%E8%AF%9D\\">切换会话</a></li>\\n<li><a href=\\"#%E9%87%8D%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D\\">重命名会话</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{D as comp,C as data};
