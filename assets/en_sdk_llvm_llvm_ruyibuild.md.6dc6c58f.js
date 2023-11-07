import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.35bd0d1d.js";const y=JSON.parse('{"title":"使用 ruyibuild 构建","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/llvm/llvm_ruyibuild.md","filePath":"en/sdk/llvm/llvm_ruyibuild.md","lastUpdated":null}'),l={name:"en/sdk/llvm/llvm_ruyibuild.md"},p=e(`<h1 id="使用-ruyibuild-构建" tabindex="-1">使用 ruyibuild 构建 <a class="header-anchor" href="#使用-ruyibuild-构建" aria-label="Permalink to &quot;使用 ruyibuild 构建&quot;">​</a></h1><blockquote><p>创建编译的虚拟环境 (如已配置，可跳过)</p><p>更新 pip(可选)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></blockquote><p>pip3 install --upgrade pip</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 安装 virtualenv 和 virtualenvwrapper</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">pip3 install virtualenv</span></span>
<span class="line"><span style="color:#e1e4e8;">pip3 install virtualenvwrapper</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; 安装 virtualenv 和 virtualenvwrapper</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">pip3 install virtualenv</span></span>
<span class="line"><span style="color:#24292e;">pip3 install virtualenvwrapper</span></span></code></pre></div><blockquote><p>在.bashrc 中添加配置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></blockquote><h1 id="虚拟环境存放目录-virtualenvs-目录可自拟" tabindex="-1">虚拟环境存放目录，.virtualenvs 目录可自拟 <a class="header-anchor" href="#虚拟环境存放目录-virtualenvs-目录可自拟" aria-label="Permalink to &quot;虚拟环境存放目录，.virtualenvs 目录可自拟&quot;">​</a></h1><p>export WORKON_HOME=~/.virtualenvs</p><h1 id="指定-virtualenvwrapper-执行的-python-版本" tabindex="-1">指定 virtualenvwrapper 执行的 python 版本 <a class="header-anchor" href="#指定-virtualenvwrapper-执行的-python-版本" aria-label="Permalink to &quot;指定 virtualenvwrapper 执行的 python 版本&quot;">​</a></h1><h1 id="which-python3-获取路径" tabindex="-1">which python3 获取路径 <a class="header-anchor" href="#which-python3-获取路径" aria-label="Permalink to &quot;which python3 获取路径&quot;">​</a></h1><p>export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3</p><h1 id="指定-virtualenv-的路径" tabindex="-1">指定 virtualenv 的路径 <a class="header-anchor" href="#指定-virtualenv-的路径" aria-label="Permalink to &quot;指定 virtualenv 的路径&quot;">​</a></h1><h1 id="find-name-virtualenv-获取路径" tabindex="-1">find -name virtualenv 获取路径 <a class="header-anchor" href="#find-name-virtualenv-获取路径" aria-label="Permalink to &quot;find -name virtualenv 获取路径&quot;">​</a></h1><p>export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv</p><h1 id="virtualenvwrapper-sh-所在目录" tabindex="-1">virtualenvwrapper.sh 所在目录 <a class="header-anchor" href="#virtualenvwrapper-sh-所在目录" aria-label="Permalink to &quot;virtualenvwrapper.sh 所在目录&quot;">​</a></h1><h1 id="find-name-virtualenvwrapper-sh" tabindex="-1">find -name virtualenvwrapper.sh <a class="header-anchor" href="#find-name-virtualenvwrapper-sh" aria-label="Permalink to &quot;find -name virtualenvwrapper.sh&quot;">​</a></h1><p>source ~/.local/bin/virtualenvwrapper.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 使能.bashrc 配置从而可以使用 python 虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;"># 以下是常用命令</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">mkvirtualenv buildllvm</span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到某个虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">workon buildllvm</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出当前虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">deactivate</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除某个虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">rmvirtualenv buildllvm</span></span>
<span class="line"><span style="color:#e1e4e8;"># 列出所有虚拟环境</span></span>
<span class="line"><span style="color:#e1e4e8;">lsvirtualenv</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; 使能.bashrc 配置从而可以使用 python 虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;"># 以下是常用命令</span></span>
<span class="line"><span style="color:#24292e;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">mkvirtualenv buildllvm</span></span>
<span class="line"><span style="color:#24292e;"># 切换到某个虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">workon buildllvm</span></span>
<span class="line"><span style="color:#24292e;"># 退出当前虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">deactivate</span></span>
<span class="line"><span style="color:#24292e;"># 删除某个虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">rmvirtualenv buildllvm</span></span>
<span class="line"><span style="color:#24292e;"># 列出所有虚拟环境</span></span>
<span class="line"><span style="color:#24292e;">lsvirtualenv</span></span></code></pre></div><blockquote><p>创建虚拟环境用于编译，例如</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></blockquote><p>mkvirtualenv buidllvm</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 至此，python 的虚拟环境配置完成，ruyibuild 的安装和使用可在虚拟环境中进行，而不影响 host 机 python 环境</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 安装 ruyibuild</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">wget https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl</span></span>
<span class="line"><span style="color:#e1e4e8;">pip3 install ruyibuild-0.0.2-py3-none-any.whl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; 至此，python 的虚拟环境配置完成，ruyibuild 的安装和使用可在虚拟环境中进行，而不影响 host 机 python 环境</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; 安装 ruyibuild</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">wget https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl</span></span>
<span class="line"><span style="color:#24292e;">pip3 install ruyibuild-0.0.2-py3-none-any.whl</span></span></code></pre></div><blockquote><p>创建编译配置用于初始化，例如：config_llvm15.yaml</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></blockquote><p>git clone <a href="https://github.com/ruyisdk/ruyici.git" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyici.git</a> cd llvm cat &gt;&gt; ./test.yaml &lt;&lt;&quot;EOT&quot;</p><p>config_file: repo_url: <a href="mailto:git@github.com" target="_blank" rel="noreferrer">git@github.com</a>:ChunyuLiao/ruyici.git branch: main path: llvm/config_llvm15.yaml</p><p>EOT</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 初始化工作</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; : 执行以下命令创建工作目录， 后续自动下载的源码以及构建生成的软件包都会在此目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">ruyibuild init -d llvm -f test.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; 初始化工作</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; : 执行以下命令创建工作目录， 后续自动下载的源码以及构建生成的软件包都会在此目录下</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">ruyibuild init -d llvm -f test.yaml</span></span></code></pre></div><blockquote><p>准备构建环境和代码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></blockquote><p>ruyibuild update</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; 执行构建</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">ruyibuild generate &lt;name&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; 执行构建</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt; \`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">ruyibuild generate &lt;name&gt;</span></span></code></pre></div><blockquote><p>生成目标 toolchain</p></blockquote>`,29),t=[p];function i(o,c,r,d,u,h){return a(),n("div",null,t)}const g=s(l,[["render",i]]);export{y as __pageData,g as default};
