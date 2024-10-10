import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as h,c as i,a as e,d as t,b as l,e as s}from"./app-BT-bWAve.js";const c={},u=e("h1",{id:"内存马",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内存马"},[e("span",null,"内存马")])],-1),d={href:"https://www.freebuf.com/articles/web/274466.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Getshell/Mshell?tab=readme-ov-file",target:"_blank",rel:"noopener noreferrer"},b=s('<hr><ul><li><a href="#%E5%86%85%E5%AD%98%E9%A9%AC">内存马</a><ul><li><a href="#%E5%86%85%E5%AD%98%E9%A9%AC%E7%AE%80%E4%BB%8B">内存马简介</a><ul><li><a href="#webshell%E5%8F%98%E8%BF%81">WebShell变迁</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0webshell%E5%86%85%E5%AD%98%E9%A9%AC">如何实现Webshell内存马</a></li><li><a href="#%E5%86%85%E5%AD%98%E9%A9%AC%E5%88%86%E7%B1%BB">内存马分类</a></li></ul></li><li><a href="#%E7%9B%B8%E5%85%B3%E9%93%BE%E6%8E%A5">相关链接</a></li></ul></li></ul><hr><h2 id="内存马简介" tabindex="-1"><a class="header-anchor" href="#内存马简介"><span>内存马简介</span></a></h2><h3 id="webshell变迁" tabindex="-1"><a class="header-anchor" href="#webshell变迁"><span>WebShell变迁</span></a></h3>',5),p={href:"https://www.freebuf.com/articles/web/274466.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://su18.org/post/memory-shell/#%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"内存马是无文件攻击的一种常用手段; 传统文件上传Webshell会落盘容易被检测到",-1),g=e("p",null,"Webshell内存马在内存中写入恶意后门和木马并执行; 黑客可以利用上传工具或网站漏洞植入木马, 区别在于Webshell内存马是无文件马, 利用中间件的进程执行某些恶意代码, 不会有文件落地",-1),w=e("p",null,"内存马技术的核心思想非常简单，一句话就能概括，那就是对访问路径映射及相关处理代码的动态注册。",-1),E=e("p",null,"这种动态注册技术来源非常久远，在安全行业里也一直是不温不火的状态，直到冰蝎的更新将 java agent 类型的内存马重新带入大众视野并且瞬间火爆起来。",-1),k=e("p",null,"目前针对常规文件型的 Webshell 的查杀已经十分成熟了, 进而需要掌握内存马的编写与绕过技术",-1),A=e("hr",null,null,-1),v=e("h3",{id:"如何实现webshell内存马",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何实现webshell内存马"},[e("span",null,"如何实现Webshell内存马")])],-1),B={href:"https://www.freebuf.com/articles/web/274466.html",target:"_blank",rel:"noopener noreferrer"},F=e("ul",null,[e("li",null,[e("p",null,"目标: 访问任意URL或者指定URL, 带上命令执行参数, 即可让服务器返回命令执行结果")]),e("li",null,[e("p",null,"实现: 以Java为例, 客户端发起的web请求会依次经过Listener, Filter, Servlet三个组件"),e("p",null,"我们只要在这个请求的过程中做手脚, 在内存中修改已有的组件或者动态注册一个新的组件, 插入恶意的shellcode, 就可以达到我们的目的")])],-1),M=e("hr",null,null,-1),x=e("h3",{id:"内存马分类",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内存马分类"},[e("span",null,"内存马分类")])],-1),S={href:"https://www.freebuf.com/articles/web/409048.html",target:"_blank",rel:"noopener noreferrer"},W=s('<ul><li><p><strong>基于 Servlet 规范的内存马</strong></p><p>通过利用 Servlet API，攻击者可以动态注册恶意Servlet 或 Filter，绕过常规的请求过滤和处理</p><p>通过命令执行等方式动态注册一个新的 Listener, Filter 或者 Servlet, 从而实现命令执行等功能</p><p>特定框架, 容器的内存马原理与此类似, 如 Spring 的 controller 内存马, tomcat 的 valve 内存马</p></li><li><p><strong>基于第三方组件的内存马</strong>：如 SpringMVC 和 Struts2 等框架中，攻击者通过漏洞注入恶意代码，从而在系统中植入内存马。</p></li><li><p><strong>基于 Java Agent 的内存马(字节码增强型)</strong>：通过 JVM 的 Instrumentation 接口，攻击者可以修改运行时字节码，从而达到内存注入的目的, 实现命令执行等功能</p></li></ul><hr><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接"><span>相关链接</span></a></h2>',3),C={href:"https://www.cnblogs.com/lmg0/p/17994096",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/feihong-cs/memShell/blob/master/src/main/java/com/memshell/jetty/FilterBasedWithoutRequest.java",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/rebeyond/memShell",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/Mr-Un1k0d3r/ThunderShell",target:"_blank",rel:"noopener noreferrer"},J=e("hr",null,null,-1);function j(L,T){const r=o("ExternalLinkIcon"),n=o("Mermaid");return h(),i("div",null,[u,e("blockquote",null,[e("p",null,[e("a",d,[t("一文看懂内存马 - FreeBuf网络安全行业门户"),l(r)])]),e("p",null,[e("a",m,[t("Getshell/Mshell: Memshell-攻防内存马研究 (github.com)"),l(r)])])]),b,e("blockquote",null,[e("p",null,[e("a",p,[t("一文看懂内存马 - FreeBuf网络安全行业门户"),l(r)])]),e("p",null,[e("a",_,[t("JavaWeb 内存马一周目通关攻略 | 素十八 (su18.org)"),l(r)])])]),l(n,{id:"mermaid-63",code:"eJx9kV1OwkAUhd9dBQto4waMK/DJFx8IIUCqNsFirImvGH5EIlbCj1oxoIJFRFpCgEqZsJm5M9NdOLQNaoy8Te45M/Odew5OYseHoZ3djTMprh5KyWQ0kYypqrwvJ2KnckoJ7wVzKOTp0In85wuJohiKywdRTwxD23Df+pHf06is7KfCGFWoYXKDAMUmyyDIdbfiJ9t4rjMrQ6tdOnKo06R6FnIjtzqAC0RqludwOth5oa1zKLbAzLPFA3u6cvUbdqutx1KPYlwIwCxtBabKS0H0BPEnm6UJoPVI4xLbaWz3sF3E89YmMx3Q6j70+g9TiiSqknIqKQl+8P7lL4HWYeYjaXRXAH99AYYXkzY/vjF4VH+63MQydBWRtAHzmUCrQzy79kW3toDZq3/R5PuC8RXkOlCw4KZARjWKyu7TmBTqLKuTRh/b3FdscR+ZTsk0L2C7BINPcldhz++glem1t/egpvls2Rm7RzQ7WWH5mQSM8m5aZ4sLcmlwUmjX3UwXygg77YCEF8sp/c6grVOjRM4nJKuRSgmjRmTjC/6wbJE="}),f,g,w,E,k,A,v,e("blockquote",null,[e("p",null,[e("a",B,[t("一文看懂内存马 - FreeBuf网络安全行业门户"),l(r)])])]),F,l(n,{id:"mermaid-103",code:"eJxLL0osyFDwCeJKTE/NK9HQeLpu0bOO7c9Xr9fUVNDV1bWrCUotLE0tLqlR8MksLknNSy2Kfj574tMJa57OXGGTVGQHE40FqVZwy8wpAap4sb/92e4lUBUQMbC8nUJwalFZTmpJ9JM9u57N6YWqgAoiGwFRDTMc5pLigvy84tQaBbBbuQA5hUxs"}),M,x,e("blockquote",null,[e("p",null,[e("a",S,[t("深度解析 | 内存马的威胁与全面防御策略 - FreeBuf网络安全行业门户"),l(r)])])]),W,e("ul",null,[e("li",null,[e("a",C,[t("内存马的检测研究及实现 - 1mg0 - 博客园 (cnblogs.com)"),l(r)])]),e("li",null,[e("a",R,[t("memShell/src/main/java/com/memshell/jetty/FilterBasedWithoutRequest.java at master · feihong-cs/memShell (github.com)"),l(r)])]),e("li",null,[t("一些没看出来具体作用的内存马工具: "),e("ul",null,[e("li",null,[e("a",q,[t("rebeyond/memShell: a webshell resides in the memory of java web server (github.com)"),l(r)])]),e("li",null,[e("a",y,[t("Mr-Un1k0d3r/ThunderShell: Python / C# Unmanaged PowerShell based RAT (github.com)"),l(r)])])])])]),J])}const D=a(c,[["render",j],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/Web%E5%AE%89%E5%85%A8/%E5%86%85%E5%AD%98%E9%A9%AC/","title":"内存马","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"内存马简介","slug":"内存马简介","link":"#内存马简介","children":[{"level":3,"title":"WebShell变迁","slug":"webshell变迁","link":"#webshell变迁","children":[]},{"level":3,"title":"如何实现Webshell内存马","slug":"如何实现webshell内存马","link":"#如何实现webshell内存马","children":[]},{"level":3,"title":"内存马分类","slug":"内存马分类","link":"#内存马分类","children":[]}]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}],"git":{"createdTime":1726628430000,"updatedTime":1727089486000,"contributors":[{"name":"233","email":"ayusummer233@vip.qq.com","commits":4}]},"readingTime":{"minutes":3.4,"words":1019},"filePathRelative":"网络安全/Web安全/内存马/index.md","localizedDate":"2024年9月18日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://www.freebuf.com/articles/web/274466.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">一文看懂内存马 - FreeBuf网络安全行业门户</a></p>\\n<p><a href=\\"https://github.com/Getshell/Mshell?tab=readme-ov-file\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Getshell/Mshell: Memshell-攻防内存马研究 (github.com)</a></p>\\n</blockquote>"}');export{D as comp,I as data};
