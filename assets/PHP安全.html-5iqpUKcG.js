import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as s,a as e,d as r,b as a,e as n}from"./app-BT-bWAve.js";const i={},h=n('<h1 id="php-安全" tabindex="-1"><a class="header-anchor" href="#php-安全"><span>PHP 安全</span></a></h1><ul><li><a href="#php-%E5%AE%89%E5%85%A8">PHP 安全</a><ul><li><a href="#phpfilter">php:filter</a></li></ul></li></ul><h2 id="php-filter" tabindex="-1"><a class="header-anchor" href="#php-filter"><span>php:filter</span></a></h2>',3),c={href:"https://johnfrod.top/%E5%AE%89%E5%85%A8/php-filter%E7%9A%84%E5%A6%99%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.anquanke.com/post/id/202510",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.leavesongs.com/PENETRATION/php-filter-magic.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.xiaozzz.xyz/2019/09/21/PHP%E4%BC%AA%E5%8D%8F%E8%AE%AE%E6%80%BB%E7%BB%93/",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),g=n('<ul><li><p><code>php://filter</code> 是一种元封装器，设计用于数据流打开时的筛选过滤应用。这对于一体式(all-in-one) 的文件函数非常有用，类似 <code>readfile()</code>、 <code>file()</code> 和 <code>file_get_contents()</code>，在数据流内容读取之前没有机会应用其他过滤器。</p></li><li><p><code>php://filter</code> 目标使用以下的参数作为它路径的一部分。复合过滤链能够在一个路径上指定。</p><table><thead><tr><th style="text-align:center;">参数名称</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">resource=&lt;要过滤的数据流&gt;</td><td style="text-align:center;">必要参数; 其指定了需要筛选过滤的数据流</td></tr><tr><td style="text-align:center;">read=&lt;读链的筛选列表&gt;</td><td style="text-align:center;">可选参数; 可以设定一个或多个过滤器名称, 以管道符 `</td></tr><tr><td style="text-align:center;">write=&lt;写链的筛选列表&gt;</td><td style="text-align:center;">可选参数; 可以设定一个或多个过滤器名称, 以管道符 `</td></tr><tr><td style="text-align:center;">&lt;; 两个链的筛选列表&gt;</td><td style="text-align:center;">任何没有以 read= 或 write= 做前缀的筛选器列表会视情况应用于读或写链</td></tr></tbody></table></li></ul><p>例如 pikachu 靶场中的 <code>ssrf -&gt; file_get_content</code> 题目中可以使用 <code>php:filter</code> 将网页源码 base64 编码读取出来, 然后再解码查看</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//[host]:[port]/vul/ssrf/ssrf_fgc.php?file=php://filter/convert.base64-encode/resource=ssrf.php</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3);function _(E,P){const t=o("ExternalLinkIcon");return p(),s("div",null,[h,e("blockquote",null,[e("p",null,[e("a",c,[r("php://filter的妙用 – JohnFrod's Blog"),a(t)])]),e("p",null,[e("a",d,[r("探索php://filter在实战当中的奇技淫巧-安全客 - 安全资讯平台 (anquanke.com)"),a(t)])]),e("p",null,[e("a",f,[r("谈一谈php://filter的妙用 | 离别歌 (leavesongs.com)"),a(t)])]),e("p",null,[e("a",u,[r("PHP伪协议总结 | xiaoZ's Blog (xiaozzz.xyz)"),a(t)])]),m]),g])}const k=l(i,[["render",_],["__file","PHP安全.html.vue"]]),b=JSON.parse(`{"path":"/Language/PHP/PHP%E5%AE%89%E5%85%A8.html","title":"PHP 安全","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"php:filter","slug":"php-filter","link":"#php-filter","children":[]}],"git":{"createdTime":1668751254000,"updatedTime":1709635981000,"contributors":[{"name":"233Official","email":"ayusummer233@qq.com","commits":2},{"name":"Ayusummer","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"Language/PHP/PHP安全.md","localizedDate":"2022年11月18日","excerpt":"\\n<ul>\\n<li><a href=\\"#php-%E5%AE%89%E5%85%A8\\">PHP 安全</a>\\n<ul>\\n<li><a href=\\"#phpfilter\\">php:filter</a></li>\\n</ul>\\n</li>\\n</ul>\\n<h2>php:filter</h2>\\n<blockquote>\\n<p><a href=\\"https://johnfrod.top/%E5%AE%89%E5%85%A8/php-filter%E7%9A%84%E5%A6%99%E7%94%A8/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">php://filter的妙用 – JohnFrod's Blog</a></p>\\n<p><a href=\\"https://www.anquanke.com/post/id/202510\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">探索php://filter在实战当中的奇技淫巧-安全客 - 安全资讯平台 (anquanke.com)</a></p>\\n<p><a href=\\"https://www.leavesongs.com/PENETRATION/php-filter-magic.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">谈一谈php://filter的妙用 | 离别歌 (leavesongs.com)</a></p>\\n<p><a href=\\"https://www.xiaozzz.xyz/2019/09/21/PHP%E4%BC%AA%E5%8D%8F%E8%AE%AE%E6%80%BB%E7%BB%93/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PHP伪协议总结 | xiaoZ's Blog (xiaozzz.xyz)</a></p>\\n<hr>\\n</blockquote>"}`);export{k as comp,b as data};
