import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.35bd0d1d.js";const u=JSON.parse('{"title":"ruyibuild 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh/tools/ruyibuild.md","filePath":"zh/tools/ruyibuild.md","lastUpdated":1698734878000}'),p={name:"zh/tools/ruyibuild.md"},o=n(`<h1 id="ruyibuild-介绍" tabindex="-1">ruyibuild 介绍 <a class="header-anchor" href="#ruyibuild-介绍" aria-label="Permalink to &quot;ruyibuild 介绍&quot;">​</a></h1><h2 id="功能介绍" tabindex="-1">功能介绍 <a class="header-anchor" href="#功能介绍" aria-label="Permalink to &quot;功能介绍&quot;">​</a></h2><p>ruyibuild 是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命令，就可以直接获取所需要的构建好的软件包。</p><h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h2><p>ruyibuild 根据配置文件自动下载需要编译的源码和构建脚本，启动一个 docker 容器中，在 docker 容器中运行构建脚本来完成构建</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>下面以 ubuntu 系统为例来进行说明</p><h3 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h3><p>ruyibuild 是由 python 编写而成，需要通过 pip 命令完成安装，</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3-pip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3-pip</span></span></code></pre></div><p>由于需要用到 docker 容器，所以需要安装 docker</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker.io</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">groupadd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">usermod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-G</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">whoami</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">o+rw</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/run/docker.sock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker.io</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">groupadd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">usermod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-G</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">whoami</span><span style="color:#032F62;">)</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">o+rw</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/run/docker.sock</span></span></code></pre></div><p>确保不用加 sudo 就可以直接执行 docker 命令</p><h3 id="安装-ruyibuild" tabindex="-1">安装 ruyibuild <a class="header-anchor" href="#安装-ruyibuild" aria-label="Permalink to &quot;安装 ruyibuild&quot;">​</a></h3><p>下载 ruyibuild.wheel , 执行 pip 安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ruyibuild.whee</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ruyibuild.whee</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="初始化工作" tabindex="-1">初始化工作 <a class="header-anchor" href="#初始化工作" aria-label="Permalink to &quot;初始化工作&quot;">​</a></h3><p>执行以下命令创建工作目录， 后续自动下载的源码以及构建生成的软件包都会在此目录下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">director</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [-f </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ruyicfg_director</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">director</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [-f </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ruyicfg_director</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">]</span></span></code></pre></div><p><code>-d &lt;directory&gt;</code> 表示要创建的工作目录，其中 <code>&lt;directory&gt;</code> 可以是绝对路径也可以是相对路径</p><p><code>-f &lt;ruyicfg_directory&gt;</code> 是可选参数，当需要从 git 仓库获取构建配置文件 config.yaml 文件而不想通过手动修改时，需要添加这个参数，其中 <code>&lt;ruyicfg_directory&gt;</code> 是 包含 config.yaml 文件所在 git 仓库的信息的 yaml 文件所在目录，格式如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">config_file:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repo_url:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://gitee.com/jean9823/ruyibuild_script.git</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">branch:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu/config_ubuntu.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">config_file:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repo_url:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://gitee.com/jean9823/ruyibuild_script.git</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">branch:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu/config_ubuntu.yaml</span></span></code></pre></div><p>repo_url: config.yaml 文件所在 git 仓库地址</p><p>branch: config.yaml 文件所在 git 仓库分支</p><p>path: config.yaml 文件所在 git 仓库相对于根目录的位置，如果是存储在根目录，该栏位填写为 path: config_ubuntu.yaml</p><p>例如：执行</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/ruyicfg.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/ruyicfg.yaml</span></span></code></pre></div><p>就是在当前目录下创建工作目录 qemu , 并从 /home/ruyicfg.yaml 获取 ruyicfg.yaml 文件</p><p>工作目录下会生成四个目录：</p><p>build: 构建完成的相关文件会存放在该目录下</p><p>script: 存放执行构建的脚本</p><p>src: 存放需要构建的源码</p><p>./ruyibuild: 存放构建配置文件 config.yaml，如果命令设置的 -f 参数，该目录下还会生成一个 git 目录，用来存放从 git 仓库获取的构建配置文件 config.yaml</p><p>可以根据自己的需求进行修改配置文件，文件内容如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repo_url:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">amd64/ubuntu</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">tag:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;latest&quot;</span></span>
<span class="line"><span style="color:#B392F0;">basic_repo:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repo_url:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/qemu/qemu.git</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">branch:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#B392F0;">build_script:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repo_url:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://gitee.com/jean9823/ruyibuild_script.git</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">branch:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu/qemu_ubuntu.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repo_url:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">amd64/ubuntu</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">tag:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;latest&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">basic_repo:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repo_url:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/qemu/qemu.git</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">branch:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#6F42C1;">build_script:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repo_url:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://gitee.com/jean9823/ruyibuild_script.git</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">branch:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu/qemu_ubuntu.sh</span></span></code></pre></div><p>配置文件分为三部分：</p><ol><li>docker: 容器信息 <ul><li>docker: 需要使用的 docker 容器的镜像信息，包括：</li><li>repo_url: docker 容器镜像地址</li><li>tag: docker 容器镜像 tag</li></ul></li><li>basic_repo: 源码 git 仓库地址 <ul><li>basic_repo: 需要构建的源码 git 仓库信息，包括：</li><li>repo_url: git 仓库地址</li><li>branch: 源码在仓库中的 branch</li></ul></li><li>build_script: 执行构建的脚本 git 仓库信息，包括： <ul><li>repo_url: 脚本 git 仓库地址</li><li>branch: 脚本在 git 仓库中的 branch</li><li>path: 脚本在 git 仓库中相对于根目录的位置，如果是存储在根目录，该栏位填写为</li><li>path: qemu_ubuntu.sh</li></ul></li></ol><p>脚本会统一存放在 <a href="https://github.com/ruyisdk/ruyici" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyici</a> ，可以根据自己的需求选择合适的文件，或者也可以使用自己的脚本，关于脚本内容的要求后面会介绍</p><h3 id="准备构建环境和代码" tabindex="-1">准备构建环境和代码 <a class="header-anchor" href="#准备构建环境和代码" aria-label="Permalink to &quot;准备构建环境和代码&quot;">​</a></h3><p>在工作目录下执行以下命令下载./ruyibuild/config.yaml 配置的 docker 镜像，需要构建源码和构建脚本</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div><h3 id="执行构建" tabindex="-1">执行构建 <a class="header-anchor" href="#执行构建" aria-label="Permalink to &quot;执行构建&quot;">​</a></h3><p>在工作目录下执行以下命令运行容器并执行构建</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p><code>&lt;name&gt;</code>表示构建完成后，生成的软件压缩包的包名。</p><p>执行该命令后，先运行容器，然后根据 config.yaml 中的 build_script 设置去工作目录下获取相应的脚本 xxx.sh，并执行 sh xxx.sh <code>&lt;name&gt;</code></p><p>构建完成后，docker 容器会自动销毁，生成的软件压缩包会存放在工作目录下的 output 目录下，即在 output/<code>&lt;name&gt;</code>.tar 就是构建出的软件压缩包</p><h2 id="ruyibuild-命令" tabindex="-1">ruyibuild 命令 <a class="header-anchor" href="#ruyibuild-命令" aria-label="Permalink to &quot;ruyibuild 命令&quot;">​</a></h2><p>ruyibuid 目前支持的命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">help</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">//帮助</span></span>
<span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//查询版本</span></span>
<span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">director</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [-f </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ruyicfg_director</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">]</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">//创建工作目录</span></span>
<span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">//下载镜像和代码</span></span>
<span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">//执行构建</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">help</span><span style="color:#24292E;">    </span><span style="color:#032F62;">//帮助</span></span>
<span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//查询版本</span></span>
<span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">director</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [-f </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ruyicfg_director</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">]</span><span style="color:#24292E;">    </span><span style="color:#032F62;">//创建工作目录</span></span>
<span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;">      </span><span style="color:#032F62;">//下载镜像和代码</span></span>
<span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">    </span><span style="color:#032F62;">//执行构建</span></span></code></pre></div><h2 id="执行构建脚本" tabindex="-1">执行构建脚本 <a class="header-anchor" href="#执行构建脚本" aria-label="Permalink to &quot;执行构建脚本&quot;">​</a></h2><p>容器和工作目录映射关系如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">workspace</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/src:/home/src</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">workspace</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/build:/home/build</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">workspace</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/script:/home/script</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">workspace</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/src:/home/src</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">workspace</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/build:/home/build</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">workspace</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/script:/home/script</span></span></code></pre></div><p>从上面的对应关系，以及 3.2 中介绍的各个目录的作用，可以知道，在容器中：</p><p>构建脚本路径是/home/script</p><p>所要构建的源码路径是/home/src</p><p>构建执行结果路路径是 <code>/home/build/&lt;name&gt;</code> , <code>&lt;name&gt;</code>同 ruyibuild generate <code>&lt;name&gt;</code></p><p>构建完成后，程序需要将构建结果从 <code>&lt;workspace&gt;/build</code> 中取出并打包放在 <code>&lt;workspace&gt;/output</code> 目录下</p><p>由于程序对于这些目录的要求，所以编写脚本时一定要注意这些目录，否则会导致构建无法正确执行，例如：</p><p>执行 cd /home/src 确保进入源码目录，再执行编译和构建</p><p>执行 ./configure 时，通过 --prefix=/home/build/1 来确保构建结果存放到容器中的/home/build/<code>&lt;name&gt;</code>下， 1 表示接收执行脚本命令 sh xxx.sh <code>&lt;name&gt; 中的 &lt;name&gt;</code></p><p>下面是一个在 x86 ubuntu 容器中构建 qemu 的 shell 脚本的例子，供参考</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3-pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-essential</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libglib2.0-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libfdt-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libpixman-1-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib1g-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ninja-build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libslirp-dev</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">meson</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/src</span></span>
<span class="line"><span style="color:#B392F0;">./configure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--target-list=riscv64-softmmu,riscv64-linux-user</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--prefix=/home/build/$1</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-j</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">nproc</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3-pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-essential</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libglib2.0-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libfdt-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libpixman-1-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib1g-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ninja-build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libslirp-dev</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">meson</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/src</span></span>
<span class="line"><span style="color:#6F42C1;">./configure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--target-list=riscv64-softmmu,riscv64-linux-user</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--prefix=/home/build/$1</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-j</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">nproc</span><span style="color:#032F62;">)</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div>`,63),e=[o];function t(c,r,y,i,E,d){return a(),l("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
