import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as n,a as e,d as o,b as i,e as c}from"./app-BT-bWAve.js";const p={},r=e("h1",{id:"full-stack-fastapi-template",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#full-stack-fastapi-template"},[e("span",null,"full-stack-fastapi-template")])],-1),d={href:"https://github.com/tiangolo/full-stack-fastapi-template",target:"_blank",rel:"noopener noreferrer"},m=c(`<hr><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="本地开发调试" tabindex="-1"><a class="header-anchor" href="#本地开发调试"><span>本地开发调试</span></a></h3><p>不使用 docker 的情况下需要</p><ol><li><p>在项目的 <code>backend</code> 目录下初始化 poetry 环境:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>poetry <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr></li><li><p>修改配置文件</p><p>修改 <code>.env</code> 中的如下信息</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405072348664.png" alt="image-20240507234827626"></p></li><li><p>初始化数据库</p><p>首先修改 <code>backend\\app\\core\\db.py</code></p><p>加一行 <code>SQLModel</code> 导入并取消新建数据库的那行注释</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405072346423.png" alt="image-20240507234618392"></p><p>然后运行 <code>backend\\app\\initial_data.py</code> 即可</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python .<span class="token punctuation">\\</span>app<span class="token punctuation">\\</span>initial_data.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405072347246.png" alt="image-20240507234729227"></p><p>然后查看数据库可以看到对应表单已经创建完成, 并且 <code>user</code> 表中已有一条 <code>env</code> 中定义的 <code>SUPERUSER</code> 的账户信息</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202405072349119.png" alt="image-20240507234908094"></p></li></ol>`,5);function u(h,g){const a=l("ExternalLinkIcon");return s(),n("div",null,[r,e("blockquote",null,[e("p",null,[e("a",d,[o("tiangolo/full-stack-fastapi-template: Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more."),i(a)])])]),m])}const b=t(p,[["render",u],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/FastAPI/%E6%A1%86%E6%9E%B6/full-stack-fastapi-template/","title":"full-stack-fastapi-template","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"本地开发调试","slug":"本地开发调试","link":"#本地开发调试","children":[]}]}],"git":{"createdTime":1715104506000,"updatedTime":1715104506000,"contributors":[{"name":"233PC","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"后端/FastAPI/框架/full-stack-fastapi-template/index.md","localizedDate":"2024年5月7日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://github.com/tiangolo/full-stack-fastapi-template\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">tiangolo/full-stack-fastapi-template: Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more.</a></p>\\n</blockquote>"}');export{b as comp,_ as data};
