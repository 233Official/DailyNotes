import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as l,a as e,d as a,b as r,e as o}from"./app-BT-bWAve.js";const i={},s=e("h1",{id:"pdf-嵌入-javascript",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pdf-嵌入-javascript"},[e("span",null,"PDF 嵌入 JavaScript")])],-1),d={href:"https://www.wanganke.com/web/article/show/2411",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"PDF 文件本身支持 JavaScript, 因此攻击者可以创建文件, 在文件打开时执行脚本来下载额外的恶意载荷或者窃取信息",-1),u={href:"https://www.xunjiepdf.com/editor",target:"_blank",rel:"noopener noreferrer"},h=o(`<p>新建或打开一个 PDF 文档</p><p>打开 <code>视图-&gt;页面缩略图</code></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060017522.png" alt="image-20240506001705447"></p><p>在左侧缩略图选中一个页面打开属性</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060019088.png" alt="image-20240506001933010"></p><p>在右侧页面属性栏中找到动作, 为 <code>打开页面</code> 或 <code>关闭页面</code> 添加一个动作, <code>新增-&gt;运行JavaScript</code></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060020732.png" alt="image-20240506002037634"></p><p>在弹出的窗口中编辑恶意 JavaScript 即可:</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060022588.png" alt="image-20240506002217510"></p><hr><h2 id="弹窗" tabindex="-1"><a class="header-anchor" href="#弹窗"><span>弹窗</span></a></h2><p>例如弹个窗:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>app.alert(&#39;XSS&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Adobe 支持自身的 JavaScript 对象模型，例如 alert(‘xss’)必须被 APP 对象调用，因此变成了 app.alert(&#39;xss&#39;)。这意味着，利用 JavaScript 进行攻击时只能使用 Adobe 所支持的功能。</p></blockquote><p>保存文档后打开此PDF文档则会弹窗(例如使用 Edge 打开):</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060028984.png" alt="image-20240506002816946"></p><hr>`,17),g={href:"https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#app",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"现在 PDF JavaScript API 限制的比较严格, 似乎无法发起网络请求通信",-1),f=e("p",null,"除了 PDF 查看器漏洞利用外没有想到什么其他的利用方案",-1),v=o(`<hr><h2 id="跳转-url" tabindex="-1"><a class="header-anchor" href="#跳转-url"><span>跳转 URL</span></a></h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>app.launchURL(&quot;http://www.example.com&quot;, true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405060133269.png" alt="image-20240506013348197"></p>`,4),b=e("p",null,"PS: 使用 Adobe Acrobat 会提示跳转 URL, 但是使用Edge,Chrome,Firefox打开不会提示也不会打开 URL",-1),w=e("p",null,"可能会被用于结合文档内容引导用户下载文件, 例如:",-1),D={href:"https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-in-deceptive-pdf-the-gateway-to-malicious-payloads/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.freebuf.com/articles/network/394052.html",target:"_blank",rel:"noopener noreferrer"},P=e("hr",null,null,-1);function k(x,J){const t=c("ExternalLinkIcon");return p(),l("div",null,[s,e("blockquote",null,[e("p",null,[e("a",d,[a("实战|通过恶意 pdf 执行 xss 漏洞 - 网安客 (wanganke.com)"),r(t)])])]),m,e("p",null,[a("下载并安装 "),e("a",u,[a("迅捷PDF编辑器 - 多功能的PDF编辑软件 (xunjiepdf.com)"),r(t)])]),h,e("blockquote",null,[e("p",null,[e("a",g,[a("JavaScript APIs — Acrobat-PDFL SDK: JavaScript Reference (adobe.com)"),r(t)])]),_,f]),v,e("blockquote",null,[b,w,e("p",null,[e("a",D,[a("Rise in Deceptive PDF: The Gateway to Malicious Payloads | McAfee Blog"),r(t)])]),e("p",null,[e("a",S,[a("技术详解 | 黑客如何通过PDF文件分发恶意软件 - FreeBuf网络安全行业门户"),r(t)])])]),P])}const E=n(i,[["render",k],["__file","index.html.vue"]]),B=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E9%92%93%E9%B1%BC/%E9%92%93%E9%B1%BC%E9%99%84%E4%BB%B6/PDF/PDF%E5%B5%8C%E5%85%A5JavaScript/","title":"PDF 嵌入 JavaScript","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"弹窗","slug":"弹窗","link":"#弹窗","children":[]},{"level":2,"title":"跳转 URL","slug":"跳转-url","link":"#跳转-url","children":[]}],"git":{"createdTime":1714931076000,"updatedTime":1714931076000,"contributors":[{"name":"233PC","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"网络安全/钓鱼/钓鱼附件/PDF/PDF嵌入JavaScript/index.md","localizedDate":"2024年5月5日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://www.wanganke.com/web/article/show/2411\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">实战|通过恶意 pdf 执行 xss 漏洞 - 网安客 (wanganke.com)</a></p>\\n</blockquote>\\n<p>PDF 文件本身支持 JavaScript, 因此攻击者可以创建文件, 在文件打开时执行脚本来下载额外的恶意载荷或者窃取信息</p>\\n<p>下载并安装 <a href=\\"https://www.xunjiepdf.com/editor\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">迅捷PDF编辑器 - 多功能的PDF编辑软件 (xunjiepdf.com)</a></p>"}');export{E as comp,B as data};
