import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as d,a as n,d as e,b as a,e as i}from"./app-BT-bWAve.js";const c={},u=n("h1",{id:"ch10-包和工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ch10-包和工具"},[n("span",null,"CH10.包和工具")])],-1),p={href:"https://golang-china.github.io/gopl-zh/ch10/ch10.html",target:"_blank",rel:"noopener noreferrer"},r=i('<p>这一章的内容比较通识,没有什么需要特别关注的地方, 文档看起来不会特别卡在哪里</p><hr><p>Go语言中的包用于组织和复用代码，工具用于管理、编译、运行和测试Go项目</p><ul><li>包 <ul><li>一个包是一个Go源文件的集合，这些文件共同实现了一些功能。</li><li>每个Go文件都必须声明属于某个包，使用<code>package</code>关键字。</li><li>包名通常与其所在的目录名相同。</li></ul></li><li>工具 <ul><li>Go工具是一组命令行工具，用于编译、测试、格式化、运行Go代码等。</li><li>常用工具 <ul><li><code>go build</code>: 编译Go源码文件。</li><li><code>go run</code>: 编译并运行Go程序。</li><li><code>go test</code>: 运行测试。</li><li><code>go fmt</code>: 格式化代码。</li><li><code>go get</code>: 获取并安装远程包和依赖。</li><li><code>go mod</code>: 管理项目的依赖（模块）。</li></ul></li></ul></li></ul><hr><ul><li><a href="#ch10%E5%8C%85%E5%92%8C%E5%B7%A5%E5%85%B7">CH10.包和工具</a><ul><li><a href="#ch101%E5%8C%85%E7%AE%80%E4%BB%8B">CH10.1.包简介</a></li><li><a href="#ch102%E5%AF%BC%E5%85%A5%E8%B7%AF%E5%BE%84">CH10.2.导入路径</a></li><li><a href="#ch103%E5%8C%85%E5%A3%B0%E6%98%8E">CH10.3.包声明</a></li><li><a href="#ch104%E5%AF%BC%E5%85%A5%E5%A3%B0%E6%98%8E">CH10.4.导入声明</a></li><li><a href="#ch105%E5%8C%85%E7%9A%84%E5%8C%BF%E5%90%8D%E5%AF%BC%E5%85%A5">CH10.5.包的匿名导入</a><ul><li><a href="#ex101%E6%89%A9%E5%B1%95jpeg%E7%A8%8B%E5%BA%8F">EX10.1.扩展jpeg程序</a></li></ul></li><li><a href="#ch106%E5%8C%85%E5%92%8C%E5%91%BD%E5%90%8D">CH10.6.包和命名</a></li><li><a href="#ch107%E5%B7%A5%E5%85%B7">CH10.7.工具</a><ul><li><a href="#ch1071%E5%B7%A5%E4%BD%9C%E5%8C%BA%E7%BB%93%E6%9E%84">CH10.7.1.工作区结构</a></li><li><a href="#ch1072%E4%B8%8B%E8%BD%BD%E5%8C%85">CH10.7.2.下载包</a></li><li><a href="#ch1073%E6%9E%84%E5%BB%BA%E5%8C%85">CH10.7.3.构建包</a></li><li><a href="#ch1074%E5%8C%85%E6%96%87%E6%A1%A3">CH10.7.4.包文档</a></li><li><a href="#ch1075%E5%86%85%E9%83%A8%E5%8C%85">CH10.7.5.内部包</a></li><li><a href="#ch1076%E6%9F%A5%E8%AF%A2%E5%8C%85">CH10.7.6.查询包</a></li></ul></li></ul></li></ul><hr><h2 id="ch10-1-包简介" tabindex="-1"><a class="header-anchor" href="#ch10-1-包简介"><span>CH10.1.包简介</span></a></h2>',8),v={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-01.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"任何包系统设计的目的都是为了简化大型程序的设计和维护工作，通过将一组相关的特性放进一个独立的单元以便于理解和更新，在每个单元更新的同时保持和程序中其它单元的相对独立性。这种模块化的特性允许每个包可以被其它的不同项目共享和重用，在项目范围内、甚至全球范围统一的分发和复用。",-1),g=n("p",null,"每个包一般都定义了一个不同的名字空间用于它内部的每个标识符的访问。每个名字空间关联到一个特定的包，让我们给类型、函数等选择简短明了的名字，这样可以在使用它们的时候减少和其它部分名字的冲突。",-1),b=n("p",null,"每个包还通过控制包内名字的可见性和是否导出来实现封装特性。通过限制包成员的可见性并隐藏包API的具体实现，将允许包的维护者在不影响外部包用户的前提下调整包的内部实现。通过限制包内变量的可见性，还可以强制用户通过某些特定函数来访问和更新内部变量，这样可以保证内部变量的一致性和并发时的互斥约束。",-1),h=n("blockquote",null,[n("p",null,"名称首字母大小写控制可见性和是否导出来实现封装")],-1),k=n("p",null,"当我们修改了一个源文件，我们必须重新编译该源文件对应的包和所有依赖该包的其他包。即使是从头构建，Go语言编译器的编译速度也明显快于其它编译语言。Go语言的闪电般的编译速度主要得益于三个语言特性。第一点，所有导入的包必须在每个文件的开头显式声明，这样的话编译器就没有必要读取和分析整个源文件来判断包的依赖关系。第二点，禁止包的环状依赖，因为没有循环依赖，包的依赖关系形成一个有向无环图，每个包可以被独立编译，而且很可能是被并发编译。第三点，编译后包的目标文件不仅仅记录包本身的导出信息，目标文件同时还记录了包的依赖关系。因此，在编译一个包的时候，编译器只需要读取每个直接导入包的目标文件，而不需要遍历所有依赖的的文件（译注：很多都是重复的间接依赖）。",-1),f=n("hr",null,null,-1),q=n("h2",{id:"ch10-2-导入路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ch10-2-导入路径"},[n("span",null,"CH10.2.导入路径")])],-1),x={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-02.html",target:"_blank",rel:"noopener noreferrer"},G=i(`<p>每个包是由一个全局唯一的字符串所标识的导入路径定位。出现在import语句中的导入路径也是字符串。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>import (
    &quot;fmt&quot;
    &quot;math/rand&quot;
    &quot;encoding/json&quot;

    &quot;golang.org/x/net/html&quot;

    &quot;github.com/go-sql-driver/mysql&quot;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E={href:"https://ayusummer233.gitlab.io/dailynotesbackup/Language/Go/Go%E8%AF%AD%E8%A8%80%E5%9C%A3%E7%BB%8F/CH2-%E7%A8%8B%E5%BA%8F%E7%BB%93%E6%9E%84.html#_2-6-1-%E5%AF%BC%E5%85%A5%E5%8C%85",target:"_blank",rel:"noopener noreferrer"},_={href:"http://bazel.io/",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>如果你计划分享或发布包，那么导入路径最好是全球唯一的。为了避免冲突，所有非标准库包的导入路径建议以所在组织的互联网域名为前缀；而且这样也有利于包的检索。例如，上面的import语句导入了Go团队维护的HTML解析器和一个流行的第三方维护的MySQL驱动。</p><hr><h2 id="ch10-3-包声明" tabindex="-1"><a class="header-anchor" href="#ch10-3-包声明"><span>CH10.3.包声明</span></a></h2><p>在每个Go语言源文件的开头都必须有包声明语句。包声明语句的主要目的是确定当前包被其它包导入时默认的标识符（也称为包名）。</p><p>例如，math/rand包的每个源文件的开头都包含<code>package rand</code>包声明语句，所以当你导入这个包，你就可以用 <code>rand.Int</code>、<code>rand.Float64</code> 类似的方式访问包的成员。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>package main

import (
    &quot;fmt&quot;
    &quot;math/rand&quot;
)

func main() {
    fmt.Println(rand.Int())
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常来说，默认的包名就是包导入路径名的最后一段，因此即使两个包的导入路径不同，它们依然可能有一个相同的包名。例如，math/rand包和crypto/rand包的包名都是rand。稍后我们将看到如何同时导入两个有相同包名的包。</p><blockquote><p>处理导入两个有相同包名的包的情用别名命名即可, 类似这样:</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202211222139359.png" alt="image-20221122213930332"></p></blockquote><p>关于默认包名一般采用导入路径名的最后一段的约定也有三种例外情况。</p><ul><li>第一个例外，包对应一个可执行程序，也就是main包，这时候main包本身的导入路径是无关紧要的。名字为main的包是给go build（§10.7.3）构建命令一个信息，这个包编译完之后必须调用连接器生成一个可执行程序。</li><li>第二个例外，包所在的目录中可能有一些文件名是以<code>_test.go</code>为后缀的Go源文件（译注：前面必须有其它的字符，因为以<code>_</code>或<code>.</code>开头的源文件会被构建工具忽略），并且这些源文件声明的包名也是以<code>_test</code>为后缀名的。这种目录可以包含两种包：一种是普通包，另一种则是测试的外部扩展包。所有以<code>_test</code>为后缀包名的测试外部扩展包都由go test命令独立编译，普通包和测试的外部扩展包是相互独立的。测试的外部扩展包一般用来避免测试代码中的循环导入依赖，具体细节我们将在11.2.4节中介绍。</li><li>第三个例外，一些依赖版本号的管理工具会在导入路径后追加版本号信息，例如“gopkg.in/yaml.v2”。这种情况下包的名字并不包含版本号后缀，而是yaml。</li></ul><hr><h2 id="ch10-4-导入声明" tabindex="-1"><a class="header-anchor" href="#ch10-4-导入声明"><span>CH10.4.导入声明</span></a></h2>`,12),w={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-04.html",target:"_blank",rel:"noopener noreferrer"},C=i(`<p>可以在一个Go语言源文件包声明语句之后，其它非导入声明语句之前，包含零到多个导入包声明语句。每个导入声明可以单独指定一个导入路径，也可以通过圆括号同时导入多个导入路径。下面两个导入形式是等价的，但是第二种形式更为常见。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>import &quot;fmt&quot;
import &quot;os&quot;

import (
    &quot;fmt&quot;
    &quot;os&quot;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入的包之间可以通过添加空行来分组；通常将来自不同组织的包独自分组。包的导入顺序无关紧要，但是在每个分组中一般会根据字符串顺序排列。</p><blockquote><p>gofmt和goimports工具都可以将不同分组导入的包独立排序, 会自动格式化按字典序排序</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;html/template&quot;</span>
    <span class="token string">&quot;os&quot;</span>

    <span class="token string">&quot;golang.org/x/net/html&quot;</span>
    <span class="token string">&quot;golang.org/x/net/ipv4&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>如果我们想同时导入两个有着名字相同的包，例如math/rand包和crypto/rand包，那么导入声明必须至少为一个同名包指定一个新的包名以避免冲突。这叫做导入包的重命名。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>import (
    &quot;crypto/rand&quot;
    mrand &quot;math/rand&quot; // alternative name mrand avoids conflict
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入包的重命名只影响当前的源文件。其它的源文件如果导入了相同的包，可以用导入包原本默认的名字或重命名为另一个完全不同的名字。</p><p>导入包重命名是一个有用的特性，它不仅仅只是为了解决名字冲突。如果导入的一个包名很笨重，特别是在一些自动生成的代码中，这时候用一个简短名称会更方便。选择用简短名称重命名导入包时候最好统一，以避免包名混乱。选择另一个包名称还可以帮助避免和本地普通变量名产生冲突。例如，如果文件中已经有了一个名为path的变量，那么我们可以将“path”标准包重命名为pathpkg。</p><p>每个导入声明语句都明确指定了当前包和被导入包之间的依赖关系。如果遇到包循环导入的情况，Go语言的构建工具将报告错误。</p><hr><h2 id="ch10-5-包的匿名导入" tabindex="-1"><a class="header-anchor" href="#ch10-5-包的匿名导入"><span>CH10.5.包的匿名导入</span></a></h2>`,13),H={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-05.html",target:"_blank",rel:"noopener noreferrer"},A=i(`<p>如果只是导入一个包而并不使用导入的包将会导致一个编译错误。但是有时候我们只是想利用导入包而产生的副作用：它会计算包级变量的初始化表达式和执行导入包的init初始化函数（§2.6.2）。这时候我们需要抑制“unused import”编译错误，我们 可以用下划线<code>_</code>来重命名导入的包。像往常一样，下划线<code>_</code>为空白标识符，并不能被访问。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>import _ &quot;image/png&quot; // register PNG decoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个被称为包的匿名导入。它通常是用来实现一个编译时机制，然后通过在main主程序入口选择性地导入附加的包。首先，让我们看看如何使用该特性，然后再看看它是如何工作的。</p><p>标准库的image图像包包含了一个<code>Decode</code>函数，用于从<code>io.Reader</code>接口读取数据并解码图像，它调用底层注册的图像解码器来完成任务，然后返回image.Image类型的图像。使用<code>image.Decode</code>很容易编写一个图像格式的转换工具，读取一种格式的图像，然后编码为另一种图像格式：</p><p><code>gopl.io/ch10/jpeg</code></p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>// The jpeg command reads a PNG image from the standard input
// and writes it as a JPEG image to the standard output.
package main

import (
    &quot;fmt&quot;
    &quot;image&quot;
    &quot;image/jpeg&quot;
    _ &quot;image/png&quot; // register PNG decoder
    &quot;io&quot;
    &quot;os&quot;
)

func main() {
    if err := toJPEG(os.Stdin, os.Stdout); err != nil {
        fmt.Fprintf(os.Stderr, &quot;jpeg: %v\\n&quot;, err)
        os.Exit(1)
    }
}

func toJPEG(in io.Reader, out io.Writer) error {
    img, kind, err := image.Decode(in)
    if err != nil {
        return err
    }
    fmt.Fprintln(os.Stderr, &quot;Input format =&quot;, kind)
    return jpeg.Encode(out, img, &amp;jpeg.Options{Quality: 95})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们将<code>gopl.io/ch3/mandelbrot</code>（§3.3）的输出导入到这个程序的标准输入，它将解码输入的PNG格式图像，然后转换为JPEG格式的图像输出（图3.3）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ go build gopl.io/ch3/mandelbrot
$ go build gopl.io/ch10/jpeg
$ ./mandelbrot <span class="token operator">|</span> ./jpeg <span class="token operator">&gt;</span>mandelbrot.jpg
Input <span class="token function">format</span> <span class="token operator">=</span> png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702113825645.png" alt="image-20240702113825645"></p><p>要注意image/png包的匿名导入语句。如果没有这一行语句，程序依然可以编译和运行，但是它将不能正确识别和解码PNG格式的图像：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go build gopl.io/ch10/jpeg
$ ./mandelbrot | ./jpeg &gt;mandelbrot.jpg
jpeg: image: unknown format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>下面的代码演示了它的工作机制。标准库还提供了GIF、PNG和JPEG等格式图像的解码器，用户也可以提供自己的解码器，但是为了保持程序体积较小，很多解码器并没有被全部包含，除非是明确需要支持的格式。<code>image.Decode</code> 函数在解码时会依次查询支持的格式列表。</p><p>每个格式驱动列表的每个入口指定了四件事情：</p><ul><li>格式的名称；</li><li>一个用于描述这种图像数据开头部分模式的字符串，用于解码器检测识别；</li><li>一个Decode函数用于完成解码图像工作；</li><li>一个DecodeConfig函数用于解码图像的大小和颜色空间的信息。</li></ul><p>每个驱动入口是通过调用image.RegisterFormat函数注册，一般是在每个格式包的init初始化函数中调用，例如image/png包是这样注册的：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> png <span class="token comment">// image/png</span>

<span class="token keyword">func</span> <span class="token function">Decode</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>image<span class="token punctuation">.</span>Image<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">DecodeConfig</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>image<span class="token punctuation">.</span>Config<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pngHeader <span class="token operator">=</span> <span class="token string">&quot;\\x89PNG\\r\\n\\x1a\\n&quot;</span>
    image<span class="token punctuation">.</span><span class="token function">RegisterFormat</span><span class="token punctuation">(</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span> pngHeader<span class="token punctuation">,</span> Decode<span class="token punctuation">,</span> DecodeConfig<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终的效果是，主程序只需要匿名导入特定图像驱动包就可以用image.Decode解码对应格式的图像了。</p><hr><p>数据库包database/sql也是采用了类似的技术，让用户可以根据自己需要选择导入必要的数据库驱动。例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;database/sql&quot;</span>
    <span class="token boolean">_</span> <span class="token string">&quot;github.com/lib/pq&quot;</span>              <span class="token comment">// enable support for Postgres</span>
    <span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span> <span class="token comment">// enable support for MySQL</span>
<span class="token punctuation">)</span>

db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;postgres&quot;</span><span class="token punctuation">,</span> dbname<span class="token punctuation">)</span> <span class="token comment">// OK</span>
db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> dbname<span class="token punctuation">)</span>    <span class="token comment">// OK</span>
db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;sqlite3&quot;</span><span class="token punctuation">,</span> dbname<span class="token punctuation">)</span>  <span class="token comment">// returns error: unknown driver &quot;sqlite3&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="ex10-1-扩展jpeg程序" tabindex="-1"><a class="header-anchor" href="#ex10-1-扩展jpeg程序"><span>EX10.1.扩展jpeg程序</span></a></h3><p><strong>练习 10.1：</strong> 扩展jpeg程序，以支持任意图像格式之间的相互转换，使用image.Decode检测支持的格式类型，然后通过flag命令行标志参数选择输出的格式。</p><p>全部需要转换反而不需要匿名导入了(</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;image&quot;</span>
	<span class="token string">&quot;image/gif&quot;</span>
	<span class="token string">&quot;image/jpeg&quot;</span>
	<span class="token string">&quot;image/png&quot;</span>
	<span class="token string">&quot;io&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义命令行标志参数</span>
	<span class="token keyword">var</span> format <span class="token builtin">string</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>format<span class="token punctuation">,</span> <span class="token string">&quot;format&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jpeg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;output format: jpeg, png, gif&quot;</span><span class="token punctuation">)</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 检查格式是否有效</span>
	<span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">validFormat</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;Invalid format: %s\\n&quot;</span><span class="token punctuation">,</span> format<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 调用转换函数</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">toImageFormat</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">,</span> os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;convert: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 检查格式是否有效</span>
<span class="token keyword">func</span> <span class="token function">validFormat</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;jpeg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gif&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 转换函数</span>
<span class="token keyword">func</span> <span class="token function">toImageFormat</span><span class="token punctuation">(</span>in io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> out io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	img<span class="token punctuation">,</span> kind<span class="token punctuation">,</span> err <span class="token operator">:=</span> image<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;Input format =&quot;</span><span class="token punctuation">,</span> kind<span class="token punctuation">)</span>

	<span class="token comment">// 根据输出格式编码图像</span>
	<span class="token keyword">switch</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;jpeg&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> jpeg<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>out<span class="token punctuation">,</span> img<span class="token punctuation">,</span> <span class="token operator">&amp;</span>jpeg<span class="token punctuation">.</span>Options<span class="token punctuation">{</span>Quality<span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> png<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>out<span class="token punctuation">,</span> img<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token string">&quot;gif&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> gif<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>out<span class="token punctuation">,</span> img<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;unsupported output format: %s&quot;</span><span class="token punctuation">,</span> format<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702135937891.png" alt="image-20240702135937891"></p><hr><p><strong>练习 10.2：</strong> 设计一个通用的压缩文件读取框架，用来读取ZIP（archive/zip）和POSIX tar（archive/tar）格式压缩的文档。使用类似上面的注册技术来扩展支持不同的压缩格式，然后根据需要通过匿名导入选择导入要支持的压缩格式的驱动包。</p><hr><h2 id="ch10-6-包和命名" tabindex="-1"><a class="header-anchor" href="#ch10-6-包和命名"><span>CH10.6.包和命名</span></a></h2>`,31),O={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-06.html",target:"_blank",rel:"noopener noreferrer"},$=i(`<p>在本节中，我们将提供一些关于Go语言独特的包和成员命名的约定。</p><p>当创建一个包，一般要用短小的包名，但也不能太短导致难以理解。标准库中最常用的包有bufio、bytes、flag、fmt、http、io、json、os、sort、sync和time等包。</p><p>尽可能让命名有描述性且无歧义。例如，类似imageutil或ioutilis的工具包命名已经足够简洁了，就无须再命名为util了。要尽量避免包名使用可能被经常用于局部变量的名字，这样可能导致用户重命名导入包，例如前面看到的path包。</p><p>包名一般采用单数的形式。标准库的bytes、errors和strings使用了复数形式，这是为了避免和预定义的类型冲突，同样还有go/types是为了避免和type关键字冲突。</p><p>要避免包名有其它的含义。例如，2.5节中我们的温度转换包最初使用了temp包名，虽然并没有持续多久。但这是一个糟糕的尝试，因为temp几乎是临时变量的同义词。然后我们有一段时间使用了temperature作为包名，显然名字并没有表达包的真实用途。最后我们改成了和strconv标准包类似的tempconv包名，这个名字比之前的就好多了。</p><hr><p>现在让我们看看如何命名包的成员。由于是通过包的导入名字引入包里面的成员，例如 <code>fmt.Println</code>，同时包含了包名和成员名信息。因此，我们一般并不需要关注Println的具体内容，因为fmt包名已经包含了这个信息。当设计一个包的时候，需要考虑包名和成员名两个部分如何很好地配合。下面有一些例子：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>bytes.Equal    flag.Int    http.Get    json.Marshal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以看到一些常用的命名模式。strings包提供了和字符串相关的诸多操作：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>package strings

func Index(needle, haystack string) int

type Replacer struct{ /* ... */ }
func NewReplacer(oldnew ...string) *Replacer

type Reader struct{ /* ... */ }
func NewReader(s string) *Reader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包名strings并没有出现在任何成员名字中。因为用户会这样引用这些成员strings.Index、strings.Replacer等。</p><hr><p>其它一些包，可能只描述了单一的数据类型，例如 <code>html/template</code> 和 <code>math/rand</code> 等，只暴露一个主要的数据结构和与它相关的方法，还有一个以New命名的函数用于创建实例。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>package rand // &quot;math/rand&quot;

type Rand struct{ /* ... */ }
func New(source Source) *Rand
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这可能导致一些名字重复，例如 <code>template.Template</code> 或 <code>rand.Rand</code>，这就是这些种类的包名往往特别短的原因之一。</p><p>在另一个极端，还有像net/http包那样含有非常多的名字和种类不多的数据类型，因为它们都是要执行一个复杂的复合任务。尽管有将近二十种类型和更多的函数，但是包中最重要的成员名字却是简单明了的：Get、Post、Handle、Error、Client、Server等。</p><hr><h2 id="ch10-7-工具" tabindex="-1"><a class="header-anchor" href="#ch10-7-工具"><span>CH10.7.工具</span></a></h2>`,18),P={href:"https://golang-china.github.io/gopl-zh/ch10/ch10-07.html",target:"_blank",rel:"noopener noreferrer"},B=i(`<p>本章剩下的部分将讨论Go语言工具箱的具体功能，包括如何下载、格式化、构建、测试和安装Go语言编写的程序。</p><p>Go语言的工具箱集合了一系列功能的命令集。它可以看作是一个包管理器（类似于Linux中的apt和rpm工具），用于包的查询、计算包的依赖关系、从远程版本控制系统下载它们等任务。它也是一个构建系统，计算文件的依赖关系，然后调用编译器、汇编器和链接器构建程序，虽然它故意被设计成没有标准的make命令那么复杂。它也是一个单元测试和基准测试的驱动程序，我们将在第11章讨论测试话题。</p><p>Go语言工具箱的命令有着类似“瑞士军刀”的风格，带着一打的子命令，有一些我们经常用到，例如get、run、build和fmt等。你可以运行go或go help命令查看内置的帮助文档，为了查询方便，我们列出了最常用的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ go
<span class="token punctuation">..</span>.
    build            compile packages and dependencies
    clean            remove object files
    doc              show documentation <span class="token keyword">for</span> package or symbol
    <span class="token function">env</span>              print Go environment information
    <span class="token function">fmt</span>              run gofmt on package sources
    get              download and <span class="token function">install</span> packages and dependencies
    <span class="token function">install</span>          compile and <span class="token function">install</span> packages and dependencies
    list             list packages
    run              compile and run Go program
    <span class="token builtin class-name">test</span>             <span class="token builtin class-name">test</span> packages
    version          print Go version
    vet              run go tool vet on packages

Use <span class="token string">&quot;go help [command]&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了达到零配置的设计目标，Go语言的工具箱很多地方都依赖各种约定。例如，根据给定的源文件的名称，Go语言的工具可以找到源文件对应的包，因为每个目录只包含了单一的包，并且包的导入路径和工作区的目录结构是对应的。给定一个包的导入路径，Go语言的工具可以找到与之对应的存储着实体文件的目录。它还可以根据导入路径找到存储代码的仓库的远程服务器URL。</p><hr><h3 id="ch10-7-1-工作区结构" tabindex="-1"><a class="header-anchor" href="#ch10-7-1-工作区结构"><span>CH10.7.1.工作区结构</span></a></h3><p>对于大多数的Go语言用户，只需要配置一个名叫GOPATH的环境变量，用来指定当前工作目录即可。当需要切换到不同工作区的时候，只要更新GOPATH就可以了。例如，我们在编写本书时将GOPATH设置为<code>$HOME/gobook</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ export GOPATH=$HOME/gobook
$ go get gopl.io/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当你用前面介绍的命令下载本书全部的例子源码之后，你的当前工作区的目录结构应该是这样的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GOPATH/
    src/
        gopl.io/
            .git/
            ch1/
                helloworld/
                    main.go
                dup/
                    main.go
                ...
        golang.org/x/net/
            .git/
            html/
                parse.go
                node.go
                ...
    bin/
        helloworld
        dup
    pkg/
        darwin_amd64/
        ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以使用 <code>go env GOPATH</code> 来查看当前 <code>GOPATH</code> 的位置</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702144611819.png" alt="image-20240702144611819"></p></blockquote><p>GOPATH对应的工作区目录有三个子目录。</p><ul><li><p>src子目录用于存储源代码</p><p>每个包被保存在与 <code>$GOPATH/src</code> 的相对路径为包导入路径的子目录中，例如 <code>gopl.io/ch1/helloworld</code> 相对应的路径目录。</p><p>我们看到，一个GOPATH工作区的src目录中可能有多个独立的版本控制系统，例如gopl.io和golang.org分别对应不同的Git仓库。</p></li><li><p>pkg子目录用于保存编译后的包的目标文件</p></li><li><p>bin子目录用于保存编译后的可执行程序，例如helloworld可执行程序。</p></li></ul><hr><p>第二个环境变量GOROOT用来指定Go的安装目录，还有它自带的标准库包的位置。</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702145117167.png" alt="image-20240702145117167"></p><p>GOROOT的目录结构和GOPATH类似，因此存放fmt包的源代码对应目录应该为 <code>$GOROOT/src/fmt</code> 。用户一般不需要设置GOROOT，默认情况下Go语言安装工具会将其设置为安装的目录路径。</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702145301000.png" alt="image-20240702145301000"></p><hr><p>其中<code>go env</code>命令用于查看Go语言工具涉及的所有环境变量的值，包括未设置环境变量的默认值。GOOS环境变量用于指定目标操作系统（例如android、linux、darwin或windows），GOARCH环境变量用于指定处理器的类型，例如amd64、386或arm等。虽然GOPATH环境变量是唯一必须要设置的，但是其它环境变量也会偶尔用到。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go env
GOPATH=&quot;/home/gopher/gobook&quot;
GOROOT=&quot;/usr/local/go&quot;
GOARCH=&quot;amd64&quot;
GOOS=&quot;darwin&quot;
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="ch10-7-2-下载包" tabindex="-1"><a class="header-anchor" href="#ch10-7-2-下载包"><span>CH10.7.2.下载包</span></a></h3>`,24),D={href:"https://ayusummer233.gitlab.io/dailynotesbackup/Language/Go/#go-get-%E5%B7%B2%E5%BC%83%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},T={href:"https://go.dev/doc/go-get-install-deprecation",target:"_blank",rel:"noopener noreferrer"},j=i(`<hr><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&#39;go get&#39;</span> is no longer supported outside a module.
        To build and <span class="token function">install</span> a command, use <span class="token string">&#39;go install&#39;</span> with a version,
        like <span class="token string">&#39;go install example.com/cmd@latest&#39;</span>
        For <span class="token function">more</span> information, see https://golang.org/doc/go-get-install-deprecation
        or run <span class="token string">&#39;go help get&#39;</span> or <span class="token string">&#39;go help install&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go get 在 <code>g.mod</code> 中同时用于更新依赖和安装命令。这种组合很混乱，使用起来也很不方便，因为开发人员不想同时进行更新和安装。</p><p><code>1.17.1</code> 及其后版本不再支持 <code>go get</code> 命令</p><p>如果要在当前模块的上下文中安装可执行文件时，使用 <code>go install</code> 不带版本后缀</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> example.com/cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令适用于安装当前目录或父目录中go.mod定义的版本要求和其他命令。</p><hr><p>要安装可执行文件同时忽略当前模块go.mod，使用go install带上版本后缀例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> example.com/cmd@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),S=i(`<p>使用Go语言工具箱的go命令，不仅可以根据包导入路径找到本地工作区的包，甚至可以从互联网上找到和更新包。</p><p>使用命令<code>go get</code>可以下载一个单一的包或者用<code>...</code>下载整个子目录里面的每个包。Go语言工具箱的go命令同时计算并下载所依赖的每个包，这也是前一个例子中golang.org/x/net/html自动出现在本地工作区目录的原因。</p><p>一旦<code>go get</code>命令下载了包，然后就是安装包或包对应的可执行的程序。我们将在下一节再关注它的细节，现在只是展示整个下载过程是如何的简单。第一个命令是获取golint工具，它用于检测Go源代码的编程风格是否有问题。第二个命令是用golint命令对2.6.2节的gopl.io/ch2/popcount包代码进行编码风格检查。它友好地报告了忘记了包的文档：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go get github.com/golang/lint/golint
$ $GOPATH/bin/golint gopl.io/ch2/popcount
src/gopl.io/ch2/popcount/main.go:1:1:
  package comment should be of the form &quot;Package popcount ...&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go get</code>命令支持当前流行的托管网站GitHub、Bitbucket和Launchpad，可以直接向它们的版本控制系统请求代码。对于其它的网站，你可能需要指定版本控制系统的具体路径和协议，例如 Git或Mercurial。运行<code>go help importpath</code>获取相关的信息。</p><p><code>go get</code>命令获取的代码是真实的本地存储仓库，而不仅仅只是复制源文件，因此你依然可以使用版本管理工具比较本地代码的变更或者切换到其它的版本。例如golang.org/x/net包目录对应一个Git仓库：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd $GOPATH/src/golang.org/x/net
$ git remote -v
origin  https://go.googlesource.com/net (fetch)
origin  https://go.googlesource.com/net (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是导入路径含有的网站域名和本地Git仓库对应远程服务地址并不相同，真实的Git地址是go.googlesource.com。这其实是Go语言工具的一个特性，可以让包用一个自定义的导入路径，但是真实的代码却是由更通用的服务提供，例如googlesource.com或github.com。因为页面 https://golang.org/x/net/html 包含了如下的元数据，它告诉Go语言的工具当前包真实的Git仓库托管地址：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go build gopl.io/ch1/fetch
$ ./fetch https://golang.org/x/net/html | grep go-import
&lt;meta name=&quot;go-import&quot;
      content=&quot;golang.org/x/net git https://go.googlesource.com/net&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果指定<code>-u</code>命令行标志参数，<code>go get</code>命令将确保所有的包和依赖的包的版本都是最新的，然后重新编译和安装它们。如果不包含该标志参数的话，而且如果包已经在本地存在，那么代码将不会被自动更新。</p><p><code>go get -u</code>命令只是简单地保证每个包是最新版本，如果是第一次下载包则是比较方便的；但是对于发布程序则可能是不合适的，因为本地程序可能需要对依赖的包做精确的版本依赖管理。通常的解决方案是使用vendor的目录用于存储依赖包的固定版本的源代码，对本地依赖的包的版本更新也是谨慎和持续可控的。在Go1.5之前，一般需要修改包的导入路径，所以复制后golang.org/x/net/html导入路径可能会变为gopl.io/vendor/golang.org/x/net/html。最新的Go语言命令已经支持vendor特性，但限于篇幅这里并不讨论vendor的具体细节。不过可以通过<code>go help gopath</code>命令查看Vendor的帮助文档。</p><p>(译注：墙内用户在上面这些命令的基础上，还需要学习用翻墙来go get。)</p><p><strong>练习 10.3:</strong> 从 http://gopl.io/ch1/helloworld?go-get=1 获取内容，查看本书的代码的真实托管的网址（<code>go get</code>请求HTML页面时包含了<code>go-get</code>参数，以区别普通的浏览器请求）。</p><hr><h3 id="ch10-7-3-构建包" tabindex="-1"><a class="header-anchor" href="#ch10-7-3-构建包"><span>CH10.7.3.构建包</span></a></h3><p><code>go build</code>命令编译命令行参数指定的每个包。如果包是一个库，则忽略输出结果；这可以用于检测包是可以正确编译的。如果包的名字是main，<code>go build</code>将调用链接器在当前目录创建一个可执行程序；以导入路径的最后一段作为可执行程序的名字。</p><p>由于每个目录只包含一个包，因此每个对应可执行程序或者叫Unix术语中的命令的包，会要求放到一个独立的目录中。这些目录有时候会放在名叫cmd目录的子目录下面，例如用于提供Go文档服务的 <code>golang.org/x/tools/cmd/godoc</code> 命令就是放在cmd子目录（§10.7.4）。</p><p>每个包可以由它们的导入路径指定，就像前面看到的那样，或者用一个相对目录的路径名指定，相对路径必须以<code>.</code>或<code>..</code>开头。如果没有指定参数，那么默认指定为当前目录对应的包。下面的命令用于构建同一个包，虽然它们的写法各不相同：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd $GOPATH/src/gopl.io/ch1/helloworld
$ go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd anywhere
$ go build gopl.io/ch1/helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd $GOPATH
$ go build ./src/gopl.io/ch1/helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但不能这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd $GOPATH
$ go build src/gopl.io/ch1/helloworld
Error: cannot find package &quot;src/gopl.io/ch1/helloworld&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以指定包的源文件列表，这一般只用于构建一些小程序或做一些临时性的实验。如果是main包，将会以第一个Go源文件的基础文件名作为最终的可执行程序的名字。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat quoteargs.go
package main

import (
    &quot;fmt&quot;
    &quot;os&quot;
)

func main() {
    fmt.Printf(&quot;%q\\n&quot;, os.Args[1:])
}
$ go build quoteargs.go
$ ./quoteargs one &quot;two three&quot; four\\ five
[&quot;one&quot; &quot;two three&quot; &quot;four five&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特别是对于这类一次性运行的程序，我们希望尽快的构建并运行它。<code>go run</code>命令实际上是结合了构建和运行的两个步骤：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go run quoteargs.go one &quot;two three&quot; four\\ five
[&quot;one&quot; &quot;two three&quot; &quot;four five&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(译注：其实也可以偷懒，直接go run <code>*.go</code>)</p><p>第一行的参数列表中，第一个不是以<code>.go</code>结尾的将作为可执行程序的参数运行。</p><p>默认情况下，<code>go build</code>命令构建指定的包和它依赖的包，然后丢弃除了最后的可执行文件之外所有的中间编译结果。依赖分析和编译过程虽然都是很快的，但是随着项目增加到几十个包和成千上万行代码，依赖关系分析和编译时间的消耗将变的可观，有时候可能需要几秒种，即使这些依赖项没有改变。</p><p><code>go install</code>命令和<code>go build</code>命令很相似，但是它会保存每个包的编译成果，而不是将它们都丢弃。被编译的包会被保存到<code>$GOPATH/pkg</code>目录下，目录路径和 src目录路径对应，可执行程序被保存到 <code>$GOPATH/bin</code> 目录。（很多用户会将 <code>$GOPATH/bin</code> 添加到可执行程序的搜索列表中。）还有，<code>go install</code>命令和<code>go build</code>命令都不会重新编译没有发生变化的包，这可以使后续构建更快捷。为了方便编译依赖的包，<code>go build -i</code>命令将安装每个目标所依赖的包。</p><p>因为编译对应不同的操作系统平台和CPU架构，<code>go install</code>命令会将编译结果安装到GOOS和GOARCH对应的目录。例如，在Mac系统，<code>golang.org/x/net/html</code> 包将被安装到 <code>$GOPATH/pkg/darwin_amd64</code> 目录下的 <code>golang.org/x/net/html.a</code> 文件。</p><p>针对不同操作系统或CPU的交叉构建也是很简单的。只需要设置好目标对应的GOOS和GOARCH，然后运行构建命令即可。下面交叉编译的程序将输出它在编译时的操作系统和CPU类型：</p><p><code>gopl.io/ch10/cross</code></p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>func main() {
    fmt.Println(runtime.GOOS, runtime.GOARCH)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702154902816.png" alt="image-20240702154902816"></p></blockquote><p>下面以64位和32位环境分别编译和执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go build gopl.io/ch10/cross
$ ./cross
darwin amd64
$ GOARCH=386 go build gopl.io/ch10/cross
$ ./cross
darwin 386
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些包可能需要针对不同平台和处理器类型使用不同版本的代码文件，以便于处理底层的可移植性问题或为一些特定代码提供优化。如果一个文件名包含了一个操作系统或处理器类型名字，例如net_linux.go或asm_amd64.s，Go语言的构建工具将只在对应的平台编译这些文件。还有一个特别的构建注释参数可以提供更多的构建过程控制。例如，文件中可能包含下面的注释：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>// +build linux darwin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在包声明和包注释的前面，该构建注释参数告诉<code>go build</code>只在编译程序对应的目标操作系统是Linux或Mac OS X时才编译这个文件。下面的构建注释则表示不编译这个文件：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>// +build ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多细节，可以参考go/build包的构建约束部分的文档。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go doc go/build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="ch10-7-4-包文档" tabindex="-1"><a class="header-anchor" href="#ch10-7-4-包文档"><span>CH10.7.4.包文档</span></a></h3><p>Go语言的编码风格鼓励为每个包提供良好的文档。包中每个导出的成员和包声明前都应该包含目的和用法说明的注释。</p><p>Go语言中的文档注释一般是完整的句子，第一行通常是摘要说明，以被注释者的名字开头。注释中函数的参数或其它的标识符并不需要额外的引号或其它标记注明。例如，下面是fmt.Fprintf的文档注释。</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>// Fprintf formats according to a format specifier and writes to w.
// It returns the number of bytes written and any write error encountered.
func Fprintf(w io.Writer, format string, a ...interface{}) (int, error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fprintf函数格式化的细节在fmt包文档中描述。如果注释后紧跟着包声明语句，那注释对应整个包的文档。包文档对应的注释只能有一个（译注：其实可以有多个，它们会组合成一个包文档注释），包注释可以出现在任何一个源文件中。如果包的注释内容比较长，一般会放到一个独立的源文件中；fmt包注释就有300行之多。这个专门用于保存包文档的源文件通常叫doc.go。</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/image-20240702155704600.png" alt="image-20240702155704600"></p><hr><p>好的文档并不需要面面俱到，文档本身应该是简洁但不可忽略的。事实上，Go语言的风格更喜欢简洁的文档，并且文档也是需要像代码一样维护的。对于一组声明语句，可以用一个精炼的句子描述，如果是显而易见的功能则并不需要注释。</p><p>在本书中，只要空间允许，我们之前很多包声明都包含了注释文档，但你可以从标准库中发现很多更好的例子。有两个工具可以帮到你。</p><p>首先是<code>go doc</code>命令，该命令打印其后所指定的实体的声明与文档注释，该实体可能是一个包：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go doc time
package time // import &quot;time&quot;

Package time provides functionality for measuring and displaying time.

const Nanosecond Duration = 1 ...
func After(d Duration) &lt;-chan Time
func Sleep(d Duration)
func Since(t Time) Duration
func Now() Time
type Duration int64
type Time struct { ... }
...many more...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是某个具体的包成员：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go doc time.Since
func Since(t Time) Duration

    Since returns the time elapsed since t.
    It is shorthand for time.Now().Sub(t).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是一个方法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go doc time.Duration.Seconds
func (d Duration) Seconds() float64

    Seconds returns the duration as a floating-point number of seconds.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令并不需要输入完整的包导入路径或正确的大小写。下面的命令将打印 <code>encoding/json</code> 包的<code>(*json.Decoder).Decode</code>方法的文档：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go doc json.decode
func (dec *Decoder) Decode(v interface{}) error

    Decode reads the next JSON-encoded value from its input and stores
    it in the value pointed to by v.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个工具，名字也叫godoc，它提供可以相互交叉引用的HTML页面，但是包含和<code>go doc</code>命令相同以及更多的信息。图10.1演示了time包的文档，11.6节将看到godoc演示可以交互的示例程序。godoc的在线服务 https://godoc.org ，包含了成千上万的开源包的检索工具。</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/ch10-01.png" alt="img"></p><p>你也可以在自己的工作区目录运行godoc服务。运行下面的命令，然后在浏览器查看 http://localhost:8000/pkg 页面：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ godoc -http :8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>-analysis=type</code>和<code>-analysis=pointer</code>命令行标志参数用于打开文档和代码中关于静态分析的结果。</p><hr><h3 id="ch10-7-5-内部包" tabindex="-1"><a class="header-anchor" href="#ch10-7-5-内部包"><span>CH10.7.5.内部包</span></a></h3><p>在Go语言程序中，包是最重要的封装机制。没有导出的标识符只在同一个包内部可以访问，而导出的标识符则是面向全宇宙都是可见的。</p><p>有时候，一个中间的状态可能也是有用的，标识符对于一小部分信任的包是可见的，但并不是对所有调用者都可见。例如，当我们计划将一个大的包拆分为很多小的更容易维护的子包，但是我们并不想将内部的子包结构也完全暴露出去。同时，我们可能还希望在内部子包之间共享一些通用的处理包，或者我们只是想实验一个新包的还并不稳定的接口，暂时只暴露给一些受限制的用户使用。</p><p>为了满足这些需求，Go语言的构建工具对包含internal名字的路径段的包导入路径做了特殊处理。这种包叫internal包，一个internal包只能被和internal目录有同一个父目录的包所导入。例如，<code>net/http/internal/chunked</code> 内部包只能被 <code>net/http/httputil</code> 或 <code>net/http</code> 包导入，但是不能被 <code>net/url</code> 包导入。不过 <code>net/url</code> 包却可以导入 <code>net/http/httputil</code>包。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>net/http
net/http/internal/chunked
net/http/httputil
net/url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="ch10-7-6-查询包" tabindex="-1"><a class="header-anchor" href="#ch10-7-6-查询包"><span>CH10.7.6.查询包</span></a></h3><p><code>go list</code>命令可以查询可用包的信息。其最简单的形式，可以测试包是否在工作区并打印它的导入路径：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list github.com/go-sql-driver/mysql
github.com/go-sql-driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go list</code>命令的参数还可以用<code>&quot;...&quot;</code>表示匹配任意的包的导入路径。我们可以用它来列出工作区中的所有包：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list ...
archive/tar
archive/zip
bufio
bytes
cmd/addr2line
cmd/api
...many more...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是特定子目录下的所有包：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list gopl.io/ch3/...
gopl.io/ch3/basename1
gopl.io/ch3/basename2
gopl.io/ch3/comma
gopl.io/ch3/mandelbrot
gopl.io/ch3/netflag
gopl.io/ch3/printints
gopl.io/ch3/surface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是和某个主题相关的所有包:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list ...xml...
encoding/xml
gopl.io/ch7/xmlselect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go list</code>命令还可以获取每个包完整的元信息，而不仅仅只是导入路径，这些元信息可以以不同格式提供给用户。其中<code>-json</code>命令行参数表示用JSON格式打印每个包的元信息。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list -json hash
{
    &quot;Dir&quot;: &quot;/home/gopher/go/src/hash&quot;,
    &quot;ImportPath&quot;: &quot;hash&quot;,
    &quot;Name&quot;: &quot;hash&quot;,
    &quot;Doc&quot;: &quot;Package hash provides interfaces for hash functions.&quot;,
    &quot;Target&quot;: &quot;/home/gopher/go/pkg/darwin_amd64/hash.a&quot;,
    &quot;Goroot&quot;: true,
    &quot;Standard&quot;: true,
    &quot;Root&quot;: &quot;/home/gopher/go&quot;,
    &quot;GoFiles&quot;: [
            &quot;hash.go&quot;
    ],
    &quot;Imports&quot;: [
        &quot;io&quot;
    ],
    &quot;Deps&quot;: [
        &quot;errors&quot;,
        &quot;io&quot;,
        &quot;runtime&quot;,
        &quot;sync&quot;,
        &quot;sync/atomic&quot;,
        &quot;unsafe&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行参数<code>-f</code>则允许用户使用text/template包（§4.6）的模板语言定义输出文本的格式。下面的命令将打印strconv包的依赖的包，然后用join模板函数将结果链接为一行，连接时每个结果之间用一个空格分隔：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list -f &#39;{{join .Deps &quot; &quot;}}&#39; strconv
errors math runtime unicode/utf8 unsafe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>译注：上面的命令在Windows的命令行运行会遇到<code>template: main:1: unclosed action</code>的错误。产生这个错误的原因是因为命令行对命令中的<code>&quot; &quot;</code>参数进行了转义处理。可以按照下面的方法解决转义字符串的问题：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list -f &quot;{{join .Deps \\&quot; \\&quot;}}&quot; strconv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的命令打印compress子目录下所有包的导入包列表：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list -f &#39;{{.ImportPath}} -&gt; {{join .Imports &quot; &quot;}}&#39; compress/...
compress/bzip2 -&gt; bufio io sort
compress/flate -&gt; bufio fmt io math sort strconv
compress/gzip -&gt; bufio compress/flate errors fmt hash hash/crc32 io time
compress/lzw -&gt; bufio errors fmt io
compress/zlib -&gt; bufio compress/flate errors fmt hash hash/adler32 io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>译注：Windows下有同样有问题，要避免转义字符串的干扰：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go list -f &quot;{{.ImportPath}} -&gt; {{join .Imports \\&quot; \\&quot;}}&quot; compress/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>go list</code>命令对于一次性的交互式查询或自动化构建或测试脚本都很有帮助。我们将在11.2.4节中再次使用它。每个子命令的更多信息，包括可设置的字段和意义，可以用<code>go help list</code>命令查看。</p><p>在本章，我们解释了Go语言工具中除了测试命令之外的所有重要的子命令。在下一章，我们将看到如何用<code>go test</code>命令去运行Go语言程序中的测试代码。</p><p><strong>练习 10.4：</strong> 创建一个工具，根据命令行指定的参数，报告工作区所有依赖包指定的其它包集合。提示：你需要运行<code>go list</code>命令两次，一次用于初始化包，一次用于所有包。你可能需要用encoding/json（§4.5）包来分析输出的JSON格式的信息。</p>`,98);function F(N,R){const s=o("ExternalLinkIcon");return l(),d("div",null,[u,n("blockquote",null,[n("p",null,[n("a",p,[e("包和工具 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),r,n("blockquote",null,[n("p",null,[n("a",v,[e("包简介 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),m,g,b,h,k,f,q,n("blockquote",null,[n("p",null,[n("a",x,[e("导入路径 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),G,n("p",null,[e("就像我们在 "),n("a",E,[e("2.6.1节"),a(s)]),e("提到过的，Go语言的规范并没有指明包的导入路径字符串的具体含义，导入路径的具体含义是由构建工具来解释的。在本章，我们将深入讨论Go语言工具箱的功能，包括大家经常使用的构建测试等功能。当然，也有第三方扩展的工具箱存在。例如，Google公司内部的Go语言码农，他们就使用内部的多语言构建系统用不同的规则来处理包名字和定位包，用不同的规则来处理单元测试等等，因为这样可以更紧密适配他们内部环境。")]),n("blockquote",null,[n("p",null,[e("译注：Google公司使用的是类似"),n("a",_,[e("Bazel"),a(s)]),e("的构建系统，支持多种编程语言，目前该构件系统还不能完整支持Windows环境")])]),y,n("blockquote",null,[n("p",null,[n("a",w,[e("导入声明 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),C,n("blockquote",null,[n("p",null,[n("a",H,[e("包的匿名导入 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),A,n("blockquote",null,[n("p",null,[n("a",O,[e("包和命名 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),$,n("blockquote",null,[n("p",null,[n("a",P,[e("工具 - Go语言圣经 (golang-china.github.io)"),a(s)])])]),B,n("blockquote",null,[n("p",null,[e("PS: "),n("a",D,[e("go get 已弃用"),a(s)])]),n("blockquote",null,[n("p",null,[n("a",T,[e("Deprecation of 'go get' for installing executables - The Go Programming Languageopen in new window"),a(s)])])]),j]),S])}const L=t(c,[["render",F],["__file","CH10-包和工具.html.vue"]]),M=JSON.parse('{"path":"/Language/Go/Go%E8%AF%AD%E8%A8%80%E5%9C%A3%E7%BB%8F/CH10-%E5%8C%85%E5%92%8C%E5%B7%A5%E5%85%B7.html","title":"CH10.包和工具","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"CH10.1.包简介","slug":"ch10-1-包简介","link":"#ch10-1-包简介","children":[]},{"level":2,"title":"CH10.2.导入路径","slug":"ch10-2-导入路径","link":"#ch10-2-导入路径","children":[]},{"level":2,"title":"CH10.3.包声明","slug":"ch10-3-包声明","link":"#ch10-3-包声明","children":[]},{"level":2,"title":"CH10.4.导入声明","slug":"ch10-4-导入声明","link":"#ch10-4-导入声明","children":[]},{"level":2,"title":"CH10.5.包的匿名导入","slug":"ch10-5-包的匿名导入","link":"#ch10-5-包的匿名导入","children":[{"level":3,"title":"EX10.1.扩展jpeg程序","slug":"ex10-1-扩展jpeg程序","link":"#ex10-1-扩展jpeg程序","children":[]}]},{"level":2,"title":"CH10.6.包和命名","slug":"ch10-6-包和命名","link":"#ch10-6-包和命名","children":[]},{"level":2,"title":"CH10.7.工具","slug":"ch10-7-工具","link":"#ch10-7-工具","children":[{"level":3,"title":"CH10.7.1.工作区结构","slug":"ch10-7-1-工作区结构","link":"#ch10-7-1-工作区结构","children":[]},{"level":3,"title":"CH10.7.2.下载包","slug":"ch10-7-2-下载包","link":"#ch10-7-2-下载包","children":[]},{"level":3,"title":"CH10.7.3.构建包","slug":"ch10-7-3-构建包","link":"#ch10-7-3-构建包","children":[]},{"level":3,"title":"CH10.7.4.包文档","slug":"ch10-7-4-包文档","link":"#ch10-7-4-包文档","children":[]},{"level":3,"title":"CH10.7.5.内部包","slug":"ch10-7-5-内部包","link":"#ch10-7-5-内部包","children":[]},{"level":3,"title":"CH10.7.6.查询包","slug":"ch10-7-6-查询包","link":"#ch10-7-6-查询包","children":[]}]}],"git":{"createdTime":1719908119000,"updatedTime":1719908119000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":34.15,"words":10244},"filePathRelative":"Language/Go/Go语言圣经/CH10-包和工具.md","localizedDate":"2024年7月2日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://golang-china.github.io/gopl-zh/ch10/ch10.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">包和工具 - Go语言圣经 (golang-china.github.io)</a></p>\\n</blockquote>\\n<p>这一章的内容比较通识,没有什么需要特别关注的地方, 文档看起来不会特别卡在哪里</p>\\n<hr>\\n<p>Go语言中的包用于组织和复用代码，工具用于管理、编译、运行和测试Go项目</p>\\n<ul>\\n<li>包\\n<ul>\\n<li>一个包是一个Go源文件的集合，这些文件共同实现了一些功能。</li>\\n<li>每个Go文件都必须声明属于某个包，使用<code>package</code>关键字。</li>\\n<li>包名通常与其所在的目录名相同。</li>\\n</ul>\\n</li>\\n<li>工具\\n<ul>\\n<li>Go工具是一组命令行工具，用于编译、测试、格式化、运行Go代码等。</li>\\n<li>常用工具\\n<ul>\\n<li><code>go build</code>: 编译Go源码文件。</li>\\n<li><code>go run</code>: 编译并运行Go程序。</li>\\n<li><code>go test</code>: 运行测试。</li>\\n<li><code>go fmt</code>: 格式化代码。</li>\\n<li><code>go get</code>: 获取并安装远程包和依赖。</li>\\n<li><code>go mod</code>: 管理项目的依赖（模块）。</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{L as comp,M as data};
