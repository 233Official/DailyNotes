import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as i,a as n,d as s,b as e,e as t}from"./app-BT-bWAve.js";const c={},r=t('<h1 id="fastapi" tabindex="-1"><a class="header-anchor" href="#fastapi"><span>FastAPI</span></a></h1><ul><li><a href="#fastapi">FastAPI</a><ul><li><a href="#%E8%B5%B7%E6%AD%A5">起步</a><ul><li><a href="#%E5%AF%BC%E5%85%A5-fastapi">导入 FastAPI</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-fastapi-%E5%AE%9E%E4%BE%8B">创建一个 FastAPI 实例</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C">创建一个路径操作</a><ul><li><a href="#%E8%B7%AF%E5%BE%84">路径</a></li><li><a href="#%E6%93%8D%E4%BD%9C">操作</a></li><li><a href="#%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E8%A3%85%E9%A5%B0%E5%99%A8">定义一个路径操作装饰器</a></li></ul></li><li><a href="#%E5%AE%9A%E4%B9%89%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0">定义路径操作函数</a></li><li><a href="#%E8%BF%94%E5%9B%9E%E5%86%85%E5%AE%B9">返回内容</a></li></ul></li><li><a href="#%E5%A4%A7%E5%9E%8B%E5%B7%A5%E7%A8%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1">大型工程的目录结构设计</a></li><li><a href="#%E8%BF%90%E8%A1%8C">运行</a><ul><li><a href="#%E6%94%BE%E5%9C%A8%E4%B8%BB%E7%A8%8B%E5%BA%8F%E4%B8%AD%E8%BF%90%E8%A1%8C">放在主程序中运行</a></li></ul></li><li><a href="#%E6%8A%A5%E9%94%99%E6%94%B6%E9%9B%86">报错收集</a><ul><li><a href="#%E6%96%87%E6%A1%A3%E7%AB%99%E7%82%B9%E5%8A%A0%E8%BD%BD%E4%B8%8D%E5%87%BA%E6%9D%A5">文档站点加载不出来</a></li></ul></li><li><a href="#%E7%89%B9%E6%AE%8A%E9%9C%80%E6%B1%82">特殊需求</a><ul><li><a href="#uvicorn-%E6%97%A5%E5%BF%97%E6%B7%BB%E5%8A%A0%E6%97%B6%E9%97%B4%E6%88%B3">uvicorn 日志添加时间戳</a></li></ul></li></ul></li></ul><hr><h2 id="起步" tabindex="-1"><a class="header-anchor" href="#起步"><span>起步</span></a></h2>',4),u={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>基本示例:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># main.py</span>

<span class="token comment"># 导入 FastAPI</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token comment"># 创建一个 FastAPI 实例</span>
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>uvicorn main:app <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>main</code>: <code>main.py</code> 文件(一个 Python「模块」)</li><li><code>app</code>: 在 <code>main.py</code> 文件中通过 <code>app = FastAPI()</code> 创建的对象。</li><li><code>--reload</code>: 让服务器在更新代码后重新启动。仅在开发时使用该选项。</li></ul><p><img src="http://cdn.ayusummer233.top/img/20220408093533.png" alt="20220408093533"></p><ul><li>在浏览器中访问 <code>http://127.0.0.1:8000</code></li><li>交互式 API 文档: <code>http://127.0.0.1:8000/docs</code><img src="http://cdn.ayusummer233.top/img/20220408093911.png" alt="20220408093911"></li><li>可选的 API 文档: <code>http://127.0.0.1:8000/redoc#operation/read_item_items__item_id__get</code><img src="http://cdn.ayusummer233.top/img/20220408094106.png" alt="20220408094106"></li></ul><h3 id="导入-fastapi" tabindex="-1"><a class="header-anchor" href="#导入-fastapi"><span>导入 FastAPI</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>FastAPI</code> 是一个为你的 API 提供了所有功能的 Python 类。</p>`,9),k=n("code",null,"FastAPI",-1),h={href:"https://www.starlette.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.worldlink.com.cn/en/osdir/starlette.html",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),g=n("img",{src:"http://cdn.ayusummer233.top/img/20220408094954.png",alt:"20220408094954"},null,-1),E=t(`<p>可以通过 <code>FastAPI</code> 使用所有的 <code>Starlette</code> 的功能。</p><h3 id="创建一个-fastapi-实例" tabindex="-1"><a class="header-anchor" href="#创建一个-fastapi-实例"><span>创建一个 FastAPI 实例</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的变量 app 会是 FastAPI 类的一个「实例」</p><p>这个实例将是创建你所有 API 的主要交互对象。</p><p>这个 app 同样在如下命令中被 uvicorn 所引用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>uvicorn main:app <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建一个路径操作" tabindex="-1"><a class="header-anchor" href="#创建一个路径操作"><span>创建一个路径操作</span></a></h3><h4 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h4>`,9),b={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_6",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,"这里的「路径」指的是 URL 中从第一个 / 起的后半部分。",-1),_=n("p",null,[s("所以，在一个这样的 URL 中: "),n("code",null,"https://example.com/items/foo"),s(" 路径会是 "),n("code",null,"/items/foo")],-1),f=n("blockquote",null,[n("p",null,"「路径」也通常被称为「端点」或「路由」。")],-1),B=n("p",null,"开发 API 时，「路径」是用来分离「关注点」和「资源」的主要手段。",-1),q=n("h4",{id:"操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作"},[n("span",null,"操作")])],-1),y={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_7",target:"_blank",rel:"noopener noreferrer"},x=t('<p>这里的「操作」指的是一种 HTTP「方法」。</p><p>下列之一:</p><ul><li><code>POST</code></li><li><code>GET</code></li><li><code>PUT</code></li><li><code>DELETE</code></li></ul><p>以及更少见的几种:</p><ul><li><code>OPTIONS</code></li><li><code>HEAD</code></li><li><code>PATCH</code></li><li><code>TRACE</code></li></ul><p>在 HTTP 协议中，你可以使用以上的其中一种(或多种) 「方法」与每个路径进行通信。</p><p>在开发 API 时，通常使用特定的 HTTP 方法去执行特定的行为。</p><p>通常使用：</p><ul><li><code>POST</code>: 创建数据。</li><li><code>GET</code>: 读取数据。</li><li><code>PUT</code>: 更新数据。</li><li><code>DELETE</code>: 删除数据。</li></ul><p>因此，在 OpenAPI 中，每一个 HTTP 方法都被称为「操作」。</p><p>我们也打算称呼它们为「操作」。</p><h4 id="定义一个路径操作装饰器" tabindex="-1"><a class="header-anchor" href="#定义一个路径操作装饰器"><span>定义一个路径操作装饰器</span></a></h4>',12),F={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_8",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@app.get(&quot;/&quot;) </code> 告诉 FastAPI 在它下方的函数负责处理如下访问请求：</p><ul><li>请求路径为 <code>/</code></li><li>使用 get 操作</li></ul><blockquote><p><code>@something</code> 语法在 Python 中被称为「装饰器」。<br> 装饰器接收位于其下方的函数并且用它完成一些工作。<br> 在我们的例子中，这个装饰器告诉 FastAPI 位于其下方的函数对应着路径 / 加上 get 操作。<br> 它是一个「路径操作装饰器」。</p></blockquote><h3 id="定义路径操作函数" tabindex="-1"><a class="header-anchor" href="#定义路径操作函数"><span>定义路径操作函数</span></a></h3>`,5),I={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/#4",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>这是我们的「路径操作函数」：</p><p>路径：是 /。<br> 操作：是 get。<br> 函数：是位于「装饰器」下方的函数(位于 @app.get(&quot;/&quot;) 下方) 。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每当 FastAPI 接收一个使用 GET 方法访问 URL「/」的请求时这个函数会被调用。</p><h3 id="返回内容" tabindex="-1"><a class="header-anchor" href="#返回内容"><span>返回内容</span></a></h3>`,5),D={href:"https://fastapi.tiangolo.com/zh/tutorial/first-steps/#5",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以返回一个 dict、list，像 str、int 一样的单个值，等等。</p><p>你还可以返回 Pydantic 模型(稍后你将了解更多) 。</p><p>还有许多其他将会自动转换为 JSON 的对象和模型(包括 ORM 对象等) 。尝试下使用你最喜欢的一种，它很有可能已经被支持。</p><hr><h2 id="大型工程的目录结构设计" tabindex="-1"><a class="header-anchor" href="#大型工程的目录结构设计"><span>大型工程的目录结构设计</span></a></h2><p>应用文件拆分</p><ul><li><code>app</code> 应用根目录 <ul><li><code>databse.py</code> 创建 SQLAlchemy</li><li><code>model.py</code> Database models</li><li><code>schema</code> Pydantic models, 定义请求模型与响应模型 <ul><li><code>....py</code></li></ul></li><li><code>crud</code> crud 操作 <ul><li><code>....py</code></li></ul></li><li><code>routers</code> 各个部分的 <code>APIRouter</code><ul><li><code>....py</code></li></ul></li><li><code>cors.py</code> 跨域资源请求配置</li><li><code>main.py</code> 主应用程序</li><li><code>enums.py</code> 枚举类定义</li></ul></li></ul><hr><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>uvicorn app.mian:app <span class="token parameter variable">--reload</span> <span class="token parameter variable">--host</span> <span class="token string">&#39;xxx&#39;</span> <span class="token parameter variable">--port</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),C=n("p",null,[n("code",null,"--relaod"),s(" 可以更新自动重载")],-1),S={href:"https://www.zditect.com/article/34997596.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/weixin_46248273/article/details/119930170",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.uvicorn.org/settings/#development",target:"_blank",rel:"noopener noreferrer"},H=t(`<hr><p>需要注意的是 <code>--reload</code> 会跟踪当前工作目录， 当前工作目录有文件更新则会自动重载</p><p>请使用 <code>--reload-dir 目录</code> 来设置重新加载目录</p><blockquote><ul><li><p><code>--reload-dir</code> 是一个整体，没有空格</p></li><li><p><code>--reload-dir</code> 需要配合 <code>--reload</code> 使用, 具体使用方法如下:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>uvicorn app.mian:app <span class="token parameter variable">--reload</span> --reload-dir xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></blockquote>`,4),O=n("p",null,[n("code",null,"--port"),s(" 可以指定端口运行")],-1),z=n("p",null,[n("code",null,"--host"),s(" 可以用于指定 host, 当在服务器上跑 uvicorn 时可以指定 "),n("code",null,"–host ‘0.0.0.0’ "),s(" 否则会自动挂载在本地上")],-1),L=t(`<hr><h3 id="放在主程序中运行" tabindex="-1"><a class="header-anchor" href="#放在主程序中运行"><span>放在主程序中运行</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    uvicorn_run<span class="token punctuation">(</span><span class="token string">&#39;__main__:app&#39;</span><span class="token punctuation">,</span> host<span class="token operator">=</span>uvicorn_host<span class="token punctuation">,</span> port<span class="token operator">=</span>uvicorn_port<span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span>uvicorn_reload<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上 HTTPS</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>uvicorn_run<span class="token punctuation">(</span><span class="token string">&#39;__main__:app&#39;</span><span class="token punctuation">,</span> host<span class="token operator">=</span>uvicorn_host<span class="token punctuation">,</span> port<span class="token operator">=</span>uvicorn_port<span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> ssl_keyfile<span class="token operator">=</span><span class="token string">&quot;./static/ssl/example.key&quot;</span><span class="token punctuation">,</span> ssl_certfile<span class="token operator">=</span><span class="token string">&quot;./static/ssl/example.crt&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),R=n("p",null,[n("code",null,"ssl_ketfile"),s(" 与 "),n("code",null,"ssl_certfile"),s(" 分别为证书与私钥")],-1),U={href:"https://ayusummer.github.io/DailyNotes/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E9%80%9A%E8%AF%86.html#%E4%BD%BF%E7%94%A8-openssl-%E5%88%9B%E5%BB%BA%E8%87%AA%E7%AD%BE%E5%90%8D-ssl-%E8%AF%81%E4%B9%A6",target:"_blank",rel:"noopener noreferrer"},G=n("hr",null,null,-1),V=n("h2",{id:"报错收集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#报错收集"},[n("span",null,"报错收集")])],-1),W=n("h3",{id:"文档站点加载不出来",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文档站点加载不出来"},[n("span",null,"文档站点加载不出来")])],-1),J={href:"https://blog.csdn.net/u014651560/article/details/116526653",target:"_blank",rel:"noopener noreferrer"},M=n("hr",null,null,-1),Q=t(`<p>一般是 <code>cdn.jsdelivr.net</code> 的资源加载不出来, 被 GFW 污染了</p><p>找到当前运行 FastAPI 服务的 Python 环境中安装的 FastAPI 依赖包的本地目录下的 <code>openapi/docs.py</code>, 如:</p><p><code>xxx/.venv/lib/python3.10/site-packages/fastapi/openapi/docs.py</code></p><p>在 <code>get_swagger_ui_html</code> 函数中有如下几个参数指向了公网的 js 与 css 和 png 资源文件, 可以将其下载下来之后换上本地目录</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202212061102340.png" alt="image-20221206094438130"></p><p>首先需要在主程序挂载一下静态资源目录</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>staticfiles <span class="token keyword">import</span> StaticFiles
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 挂载本地资源</span>
app<span class="token punctuation">.</span>mount<span class="token punctuation">(</span><span class="token string">&#39;/static&#39;</span><span class="token punctuation">,</span> StaticFiles<span class="token punctuation">(</span>directory<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;/home/xxx/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202212061103830.png" alt="image-20221206103105582"></p><p>然后相应的将 <code>xxx/.venv/lib/python3.10/site-packages/fastapi/openapi/docs.py</code> 中的几个参数改为:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>swagger_js_url<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;/static/js/swagger-ui-bundle.js&quot;</span><span class="token punctuation">,</span>
swagger_css_url<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;/static/css/swagger-ui.css&quot;</span><span class="token punctuation">,</span>
swagger_favicon_url<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;/static/img/favicon.png&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启主程序即可</p><hr><p>如此配置好后访问交互式文档时可能还会报两个资源获取不到的问题, 是两个 <code>.map</code> 文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui-bundle.js.map
https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui.css.map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接使用 <code>wget</code> 命令将其下载到对应位置即可:</p><p><img src="http://cdn.ayusummer233.top/img/202212301612040.png" alt="image-20221230161204692"></p><hr><h2 id="特殊需求" tabindex="-1"><a class="header-anchor" href="#特殊需求"><span>特殊需求</span></a></h2><h3 id="uvicorn-日志添加时间戳" tabindex="-1"><a class="header-anchor" href="#uvicorn-日志添加时间戳"><span>uvicorn 日志添加时间戳</span></a></h3>`,19),K={href:"https://www.cnblogs.com/poloyy/p/15549275.html",target:"_blank",rel:"noopener noreferrer"},X=t(`<p>新建一个 uvicorn logger 的 json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;disable_existing_loggers&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;()&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uvicorn.logging.DefaultFormatter&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fmt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;%(levelprefix)s %(message)s&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;use_colors&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;()&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uvicorn.logging.AccessFormatter&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fmt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;%(asctime)s - %(levelprefix)s %(client_addr)s - \\&quot;%(request_line)s\\&quot; %(status_code)s&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;handlers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logging.StreamHandler&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stream&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ext://sys.stderr&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;access&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logging.StreamHandler&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stream&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ext://sys.stdout&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;loggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uvicorn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;handlers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;default&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INFO&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uvicorn.error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INFO&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uvicorn.access&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;handlers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;access&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INFO&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;propagate&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主程序中使用 <code>log_config</code> 参数指向该 json 即可</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;test:app&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8001</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> log_config<span class="token operator">=</span><span class="token string">&quot;uvicorn_config.json&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240424173343145.png" alt="image-20240424173343145"></p><blockquote><p>需要注意的是 <code>log_config</code> 接收字符串, 如果用 pathlib 构造路径的话记得加一层 <code>str()</code> 转成字符串传入</p></blockquote>`,6);function Y(Z,$){const a=p("ExternalLinkIcon");return l(),i("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[s("第一步 - FastAPI (tiangolo.com)"),e(a)])])]),d,n("p",null,[k,s(" 是直接从 "),n("a",h,[s("Starlette"),e(a)]),s(" 继承的类。")]),n("blockquote",null,[n("p",null,[n("a",v,[s("Starlette (worldlink.com.cn)"),e(a)]),m,g])]),E,n("blockquote",null,[n("p",null,[n("a",b,[s("路径 - FastAPI (tiangolo.com)"),e(a)])])]),A,_,f,B,q,n("blockquote",null,[n("p",null,[n("a",y,[s("操作 - FastAPI (tiangolo.com)"),e(a)])])]),x,n("blockquote",null,[n("p",null,[n("a",F,[s("定义一个路径操作装饰器 - FastAPI (tiangolo.com)"),e(a)])])]),P,n("blockquote",null,[n("p",null,[n("a",I,[s("定义路径操作函数- FastAPI (tiangolo.com)"),e(a)])])]),w,n("blockquote",null,[n("p",null,[n("a",D,[s("返回内容- FastAPI (tiangolo.com)"),e(a)])])]),T,n("blockquote",null,[C,n("blockquote",null,[n("p",null,[n("a",S,[s("Uvicorn 重载目录, 优维康 HTTP/2, 乌维康寿命 (zditect.com)"),e(a)])]),n("p",null,[n("a",N,[s("uvicorn reload-dir参数_聪明的大嘴花的博客-CSDN博客"),e(a)])]),n("p",null,[n("a",j,[s("Settings - Uvicorn"),e(a)])]),H]),O,z]),L,n("ul",null,[n("li",null,[R,n("blockquote",null,[n("p",null,[s("这里我是用 openssl 创建的自签名 SSL 证书, 可参阅: "),n("a",U,[s("通识-使用 OpenSSL 创建自签名证书 | DailyNotes (ayusummer.github.io)"),e(a)])])])])]),G,V,W,n("blockquote",null,[n("p",null,[n("a",J,[s("Python fastapi 内网访问swagger方法_高压锅_1220的博客-CSDN博客_fastapi swagger地址"),e(a)])]),M]),Q,n("blockquote",null,[n("p",null,[n("a",K,[s("fastapi（66）- 修改 uvicorn 的日志格式 - 小菠萝测试笔记 - 博客园 (cnblogs.com)"),e(a)])])]),X])}const an=o(c,[["render",Y],["__file","index.html.vue"]]),en=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/FastAPI/","title":"FastAPI","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"起步","slug":"起步","link":"#起步","children":[{"level":3,"title":"导入 FastAPI","slug":"导入-fastapi","link":"#导入-fastapi","children":[]},{"level":3,"title":"创建一个 FastAPI 实例","slug":"创建一个-fastapi-实例","link":"#创建一个-fastapi-实例","children":[]},{"level":3,"title":"创建一个路径操作","slug":"创建一个路径操作","link":"#创建一个路径操作","children":[]},{"level":3,"title":"定义路径操作函数","slug":"定义路径操作函数","link":"#定义路径操作函数","children":[]},{"level":3,"title":"返回内容","slug":"返回内容","link":"#返回内容","children":[]}]},{"level":2,"title":"大型工程的目录结构设计","slug":"大型工程的目录结构设计","link":"#大型工程的目录结构设计","children":[]},{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[{"level":3,"title":"放在主程序中运行","slug":"放在主程序中运行","link":"#放在主程序中运行","children":[]}]},{"level":2,"title":"报错收集","slug":"报错收集","link":"#报错收集","children":[{"level":3,"title":"文档站点加载不出来","slug":"文档站点加载不出来","link":"#文档站点加载不出来","children":[]}]},{"level":2,"title":"特殊需求","slug":"特殊需求","link":"#特殊需求","children":[{"level":3,"title":"uvicorn 日志添加时间戳","slug":"uvicorn-日志添加时间戳","link":"#uvicorn-日志添加时间戳","children":[]}]}],"git":{"createdTime":1714457095000,"updatedTime":1714457095000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":6.22,"words":1865},"filePathRelative":"后端/FastAPI/index.md","localizedDate":"2024年4月30日","excerpt":"\\n<ul>\\n<li><a href=\\"#fastapi\\">FastAPI</a>\\n<ul>\\n<li><a href=\\"#%E8%B5%B7%E6%AD%A5\\">起步</a>\\n<ul>\\n<li><a href=\\"#%E5%AF%BC%E5%85%A5-fastapi\\">导入 FastAPI</a></li>\\n<li><a href=\\"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-fastapi-%E5%AE%9E%E4%BE%8B\\">创建一个 FastAPI 实例</a></li>\\n<li><a href=\\"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C\\">创建一个路径操作</a>\\n<ul>\\n<li><a href=\\"#%E8%B7%AF%E5%BE%84\\">路径</a></li>\\n<li><a href=\\"#%E6%93%8D%E4%BD%9C\\">操作</a></li>\\n<li><a href=\\"#%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E8%A3%85%E9%A5%B0%E5%99%A8\\">定义一个路径操作装饰器</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%AE%9A%E4%B9%89%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0\\">定义路径操作函数</a></li>\\n<li><a href=\\"#%E8%BF%94%E5%9B%9E%E5%86%85%E5%AE%B9\\">返回内容</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%A4%A7%E5%9E%8B%E5%B7%A5%E7%A8%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1\\">大型工程的目录结构设计</a></li>\\n<li><a href=\\"#%E8%BF%90%E8%A1%8C\\">运行</a>\\n<ul>\\n<li><a href=\\"#%E6%94%BE%E5%9C%A8%E4%B8%BB%E7%A8%8B%E5%BA%8F%E4%B8%AD%E8%BF%90%E8%A1%8C\\">放在主程序中运行</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%8A%A5%E9%94%99%E6%94%B6%E9%9B%86\\">报错收集</a>\\n<ul>\\n<li><a href=\\"#%E6%96%87%E6%A1%A3%E7%AB%99%E7%82%B9%E5%8A%A0%E8%BD%BD%E4%B8%8D%E5%87%BA%E6%9D%A5\\">文档站点加载不出来</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%89%B9%E6%AE%8A%E9%9C%80%E6%B1%82\\">特殊需求</a>\\n<ul>\\n<li><a href=\\"#uvicorn-%E6%97%A5%E5%BF%97%E6%B7%BB%E5%8A%A0%E6%97%B6%E9%97%B4%E6%88%B3\\">uvicorn 日志添加时间戳</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{an as comp,en as data};
