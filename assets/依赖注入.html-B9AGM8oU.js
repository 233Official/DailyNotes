import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as u,b as d,w as a,e as p,d as s,a as n}from"./app-BT-bWAve.js";const r={},k=p(`<h1 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h1><ul><li><a href="#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5">依赖注入</a><ul><li><a href="#%E5%88%9B%E5%BB%BA-%E5%AF%BC%E5%85%A5%E5%92%8C%E5%A3%B0%E6%98%8E%E4%BE%9D%E8%B5%96">创建, 导入和声明依赖</a></li><li><a href="#%E7%B1%BB%E4%BD%9C%E4%B8%BA%E4%BE%9D%E8%B5%96%E9%A1%B9">类作为依赖项</a></li><li><a href="#%E5%AD%90%E4%BE%9D%E8%B5%96%E7%9A%84%E5%88%9B%E5%BB%BA%E5%92%8C%E8%B0%83%E7%94%A8">子依赖的创建和调用</a></li><li><a href="#%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E8%A3%85%E9%A5%B0%E5%99%A8%E4%B8%AD%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96">路径操作装饰器中导入依赖</a></li><li><a href="#fastapi-%E6%A1%86%E6%9E%B6%E4%B8%AD%E5%85%A8%E5%B1%80%E4%BE%9D%E8%B5%96%E7%9A%84%E4%BD%BF%E7%94%A8">FastAPI 框架中全局依赖的使用</a></li><li><a href="#%E4%BD%BF%E7%94%A8-yield-%E7%9A%84%E4%BE%9D%E8%B5%96%E5%92%8C%E5%AD%90%E4%BE%9D%E8%B5%96">使用 yield 的依赖和子依赖</a></li></ul></li></ul><hr><p>&quot;依赖注入&quot; 是指在编程中, 为保证代码成功运行, 先导入或声明其所需要的 &quot;依赖&quot;, 如子函数, 数据库连接等</p><ul><li>提高代码的复用率</li><li>共享数据库的链接</li><li>增强安全, 认证和角色管理</li></ul><p>FastAPI 的兼容性</p><ul><li>所有的关系型数据库，支撑NoSQL数据库</li><li>第三方的包和API</li><li>认证和授权系统</li><li>响应数据注入系统</li></ul><hr><h2 id="创建-导入和声明依赖" tabindex="-1"><a class="header-anchor" href="#创建-导入和声明依赖"><span>创建, 导入和声明依赖</span></a></h2><p>将函数作为依赖进行注入操作(query)</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> <span class="token punctuation">(</span>
    Depends<span class="token punctuation">,</span>    <span class="token comment"># 引入依赖</span>
<span class="token punctuation">)</span>

<span class="token comment">##### Dependencies 创建、导入和声明依赖 #####</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">common_parameters</span><span class="token punctuation">(</span>q<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> page<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;公共函数测试&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> q<span class="token punctuation">,</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">:</span> page<span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token punctuation">:</span> limit<span class="token punctuation">}</span>


<span class="token decorator annotation punctuation">@app05<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/dependency01&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">dependency01</span><span class="token punctuation">(</span>commons<span class="token punctuation">:</span> <span class="token builtin">dict</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>common_parameters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;使用 Depends 进行依赖注入
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> commons


<span class="token decorator annotation punctuation">@app05<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/dependency02&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">dependency02</span><span class="token punctuation">(</span>commons<span class="token punctuation">:</span> <span class="token builtin">dict</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>common_parameters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;可以在async def中调用def依赖  
    也可以在def中导入async def依赖
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> commons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202204301743566.png" alt="image-20220430174337819"></p><hr><h2 id="类作为依赖项" tabindex="-1"><a class="header-anchor" href="#类作为依赖项"><span>类作为依赖项</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 假设这是一个从数据库中获取的数据</span>
fake_items_db <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">CommonQueryParams</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> q<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> page<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>q <span class="token operator">=</span> q
        self<span class="token punctuation">.</span>page <span class="token operator">=</span> page
        self<span class="token punctuation">.</span>limit <span class="token operator">=</span> limit


<span class="token decorator annotation punctuation">@app05<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/classes_as_dependencies&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># async def classes_as_dependencies(commons: CommonQueryParams = Depends(CommonQueryParams)):</span>
<span class="token comment"># async def classes_as_dependencies(commons: CommonQueryParams = Depends()):</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">classes_as_dependencies</span><span class="token punctuation">(</span>commons<span class="token operator">=</span>Depends<span class="token punctuation">(</span>CommonQueryParams<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    使用 Depends 创建类作为依赖项
    &quot;&quot;&quot;</span>
    response <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> commons<span class="token punctuation">.</span>q<span class="token punctuation">:</span>
        response<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> commons<span class="token punctuation">.</span>q<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># 切片操作</span>
    items <span class="token operator">=</span> fake_items_db<span class="token punctuation">[</span>commons<span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">:</span> commons<span class="token punctuation">.</span>page <span class="token operator">+</span> commons<span class="token punctuation">.</span>limit<span class="token punctuation">]</span>
    response<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;items&quot;</span><span class="token punctuation">:</span> items<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> response

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是, 要与 Pydantic 派生类型作为参数相区分, 使用 <code>pydantic.BaseModel</code> 子类作为参数在函数请求体中, 而类作为依赖项进行注入作为 <code>query</code> 参数</p><p><img src="http://cdn.ayusummer233.top/img/202204301829321.png" alt="image-20220430182936870"></p><hr><h2 id="子依赖的创建和调用" tabindex="-1"><a class="header-anchor" href="#子依赖的创建和调用"><span>子依赖的创建和调用</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">##### Sub-dependencies 子依赖 #####</span>


<span class="token keyword">def</span> <span class="token function">query</span><span class="token punctuation">(</span>q<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> q


<span class="token keyword">def</span> <span class="token function">sub_query</span><span class="token punctuation">(</span>q<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">,</span> last_query<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> q<span class="token punctuation">:</span>
        <span class="token keyword">return</span> last_query
    <span class="token keyword">return</span> q


<span class="token decorator annotation punctuation">@app05<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/sub_dependency&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">sub_dependency</span><span class="token punctuation">(</span>final_query<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>sub_query<span class="token punctuation">,</span> use_cache<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;use_cache默认是True,
    表示当多个依赖有一个共同的子依赖时,
    每次request请求只会调用子依赖一次,
    多次调用将从缓存中获取
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;sub_dependency&quot;</span><span class="token punctuation">:</span> final_query<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>query</code> 是子依赖</p><p><img src="http://cdn.ayusummer233.top/img/202204301841699.png" alt="image-20220430184123474"></p><p><img src="http://cdn.ayusummer233.top/img/202204301840123.png" alt="image-20220430184031831"></p><hr><h2 id="路径操作装饰器中导入依赖" tabindex="-1"><a class="header-anchor" href="#路径操作装饰器中导入依赖"><span>路径操作装饰器中导入依赖</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">##### Dependencies in path operation decorators 路径操作装饰器中的多依赖 #####</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">verify_token</span><span class="token punctuation">(</span>x_token<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    没有返回值的子依赖
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> x_token <span class="token operator">!=</span> <span class="token string">&quot;fake-super-secret-token&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span><span class="token number">400</span><span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;X-Token header invalid&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">verify_key</span><span class="token punctuation">(</span>x_key<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    有返回值的子依赖，但是返回值不会被调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> x_key <span class="token operator">!=</span> <span class="token string">&quot;fake-super-secret-key&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span><span class="token number">400</span><span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;X-Key header invalid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x_key


<span class="token decorator annotation punctuation">@app05<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/dependency_in_path_operation&quot;</span><span class="token punctuation">,</span> 
        dependencies<span class="token operator">=</span><span class="token punctuation">[</span>Depends<span class="token punctuation">(</span>verify_token<span class="token punctuation">)</span><span class="token punctuation">,</span> Depends<span class="token punctuation">(</span>verify_key<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>   <span class="token comment"># 这时候不是在函数参数中调用依赖，而是在路径操作中调用依赖</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">dependency_in_path_operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user01&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user02&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用于校验 key 之类的, 在 Header 中包含 key, 后端路径操作装饰器中导入依赖</p><p><img src="http://cdn.ayusummer233.top/img/202204301855666.png" alt="image-20220430185536241"></p><hr><h2 id="fastapi-框架中全局依赖的使用" tabindex="-1"><a class="header-anchor" href="#fastapi-框架中全局依赖的使用"><span>FastAPI 框架中全局依赖的使用</span></a></h2><p>假设现在有一个子依赖需要在应用的任何地方使用(或者某个组件内部的所有地方), 那么可以使用全局依赖</p><p>在 <code>APIRouter</code> 中使用:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 直接在 APIRouter 定义文件中使用:</span>
app05 <span class="token operator">=</span> APIRouter<span class="token punctuation">(</span>dependencies<span class="token operator">=</span><span class="token punctuation">[</span>Depends<span class="token punctuation">(</span>verify_token<span class="token punctuation">)</span><span class="token punctuation">,</span> Depends<span class="token punctuation">(</span>verify_key<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>main App</code> 中使用:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 引入 chapter05 中的全剧依赖 verify_token 和 verify_key</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span>chapter05 <span class="token keyword">import</span> verify_token<span class="token punctuation">,</span> verify_key
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> <span class="token punctuation">(</span>
    FastAPI<span class="token punctuation">,</span> 
    Request<span class="token punctuation">,</span>
    Depends <span class="token comment"># 引入依赖  </span>
<span class="token punctuation">)</span>

<span class="token comment"># FastAPI 配置项</span>
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span>
    <span class="token comment"># 标题</span>
    title<span class="token operator">=</span><span class="token string">&#39;FastAPI Tutorial and Coronavirus Tracker API Docs&#39;</span><span class="token punctuation">,</span>
    <span class="token comment"># 描述</span>
    description<span class="token operator">=</span>&#39;FastAPI教程 \\
        新冠病毒疫情跟踪器API接口文档<span class="token punctuation">,</span> \\
        项目代码<span class="token punctuation">:</span>https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>liaogx<span class="token operator">/</span>fastapi<span class="token operator">-</span>tutorial&#39;<span class="token punctuation">,</span>
    <span class="token comment"># 版本</span>
    version<span class="token operator">=</span><span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">,</span>
    <span class="token comment"># Swagger UI 文档地址</span>
    docs_url<span class="token operator">=</span><span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>
    <span class="token comment"># ReDoc 文档地址</span>
    redoc_url<span class="token operator">=</span><span class="token string">&#39;/redocs&#39;</span><span class="token punctuation">,</span>
    dependencies <span class="token operator">=</span> <span class="token punctuation">[</span>Depends<span class="token punctuation">(</span>verify_token<span class="token punctuation">)</span><span class="token punctuation">,</span> Depends<span class="token punctuation">(</span>verify_key<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202204301904524.png" alt="image-20220430190445228"></p><hr><h2 id="使用-yield-的依赖和子依赖" tabindex="-1"><a class="header-anchor" href="#使用-yield-的依赖和子依赖"><span>使用 yield 的依赖和子依赖</span></a></h2><p><code>yield</code> 关键字在依赖中的使用</p>`,39),m=n("p",null,"Python3.6需要pip install async-exit-stack async-generator",-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"##### Dependencies with yield 带yield的依赖 #####"),s(`


`),n("span",{class:"token comment"},"# 这个需要Python3.7才支持，Python3.6需要pip install async-exit-stack async-generator"),s(`
`),n("span",{class:"token comment"},"# 以下都是伪代码"),s(`

`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"get_db"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    db `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"db_connection"'),s(`
    `),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"yield"),s(` db
    `),n("span",{class:"token keyword"},"finally"),n("span",{class:"token punctuation"},":"),s(`
        db`),n("span",{class:"token punctuation"},"."),s("endswith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"db_close"'),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dependency_a"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    dep_a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"generate_dep_a()"'),s(`
    `),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"yield"),s(` dep_a
    `),n("span",{class:"token keyword"},"finally"),n("span",{class:"token punctuation"},":"),s(`
        dep_a`),n("span",{class:"token punctuation"},"."),s("endswith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"db_close"'),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dependency_b"),n("span",{class:"token punctuation"},"("),s("dep_a"),n("span",{class:"token operator"},"="),s("Depends"),n("span",{class:"token punctuation"},"("),s("dependency_a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    dep_b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"generate_dep_b()"'),s(`
    `),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"yield"),s(` dep_b
    `),n("span",{class:"token keyword"},"finally"),n("span",{class:"token punctuation"},":"),s(`
        dep_b`),n("span",{class:"token punctuation"},"."),s("endswith"),n("span",{class:"token punctuation"},"("),s("dep_a"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dependency_c"),n("span",{class:"token punctuation"},"("),s("dep_b"),n("span",{class:"token operator"},"="),s("Depends"),n("span",{class:"token punctuation"},"("),s("dependency_b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    dep_c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"generate_dep_c()"'),s(`
    `),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"yield"),s(` dep_c
    `),n("span",{class:"token keyword"},"finally"),n("span",{class:"token punctuation"},":"),s(`
        dep_c`),n("span",{class:"token punctuation"},"."),s("endswith"),n("span",{class:"token punctuation"},"("),s("dep_b"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=p(`<p>实际上使用最多的就是 <code>get_db</code>:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 引入数据库</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>database <span class="token keyword">import</span> SessionLocal<span class="token punctuation">,</span> engine

<span class="token comment"># Dependency (关键字 yield 可用于共享连接)</span>
<span class="token keyword">def</span> <span class="token function">get_db</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    db <span class="token operator">=</span> SessionLocal<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> db
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,3);function y(E,g){const o=i("Tabs");return l(),u("div",null,[k,d(o,{id:"160",data:[{id:"Python3.6"},{id:"Python3.7"}],active:1},{title0:a(({value:e,isActive:t})=>[s("Python3.6")]),title1:a(({value:e,isActive:t})=>[s("Python3.7")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[v]),_:1}),b])}const _=c(r,[["render",y],["__file","依赖注入.html.vue"]]),f=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/FastAPI/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5.html","title":"依赖注入","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建, 导入和声明依赖","slug":"创建-导入和声明依赖","link":"#创建-导入和声明依赖","children":[]},{"level":2,"title":"类作为依赖项","slug":"类作为依赖项","link":"#类作为依赖项","children":[]},{"level":2,"title":"子依赖的创建和调用","slug":"子依赖的创建和调用","link":"#子依赖的创建和调用","children":[]},{"level":2,"title":"路径操作装饰器中导入依赖","slug":"路径操作装饰器中导入依赖","link":"#路径操作装饰器中导入依赖","children":[]},{"level":2,"title":"FastAPI 框架中全局依赖的使用","slug":"fastapi-框架中全局依赖的使用","link":"#fastapi-框架中全局依赖的使用","children":[]},{"level":2,"title":"使用 yield 的依赖和子依赖","slug":"使用-yield-的依赖和子依赖","link":"#使用-yield-的依赖和子依赖","children":[]}],"git":{"createdTime":1714457095000,"updatedTime":1714457095000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1164},"filePathRelative":"后端/FastAPI/依赖注入.md","localizedDate":"2024年4月30日","excerpt":"\\n<ul>\\n<li><a href=\\"#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5\\">依赖注入</a>\\n<ul>\\n<li><a href=\\"#%E5%88%9B%E5%BB%BA-%E5%AF%BC%E5%85%A5%E5%92%8C%E5%A3%B0%E6%98%8E%E4%BE%9D%E8%B5%96\\">创建, 导入和声明依赖</a></li>\\n<li><a href=\\"#%E7%B1%BB%E4%BD%9C%E4%B8%BA%E4%BE%9D%E8%B5%96%E9%A1%B9\\">类作为依赖项</a></li>\\n<li><a href=\\"#%E5%AD%90%E4%BE%9D%E8%B5%96%E7%9A%84%E5%88%9B%E5%BB%BA%E5%92%8C%E8%B0%83%E7%94%A8\\">子依赖的创建和调用</a></li>\\n<li><a href=\\"#%E8%B7%AF%E5%BE%84%E6%93%8D%E4%BD%9C%E8%A3%85%E9%A5%B0%E5%99%A8%E4%B8%AD%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96\\">路径操作装饰器中导入依赖</a></li>\\n<li><a href=\\"#fastapi-%E6%A1%86%E6%9E%B6%E4%B8%AD%E5%85%A8%E5%B1%80%E4%BE%9D%E8%B5%96%E7%9A%84%E4%BD%BF%E7%94%A8\\">FastAPI 框架中全局依赖的使用</a></li>\\n<li><a href=\\"#%E4%BD%BF%E7%94%A8-yield-%E7%9A%84%E4%BE%9D%E8%B5%96%E5%92%8C%E5%AD%90%E4%BE%9D%E8%B5%96\\">使用 yield 的依赖和子依赖</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{_ as comp,f as data};
