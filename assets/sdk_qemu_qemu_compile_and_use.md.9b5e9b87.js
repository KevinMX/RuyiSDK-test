import{_ as s,o as a,c as p,Q as e}from"./chunks/framework.01608dce.js";const v=JSON.parse('{"title":"QEMU 的构建和使用","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/qemu/qemu_compile_and_use.md","filePath":"sdk/qemu/qemu_compile_and_use.md","lastUpdated":1698397416000}'),l={name:"sdk/qemu/qemu_compile_and_use.md"},n=e(`<h1 id="qemu-的构建和使用" tabindex="-1">QEMU 的构建和使用 <a class="header-anchor" href="#qemu-的构建和使用" aria-label="Permalink to &quot;QEMU 的构建和使用&quot;">​</a></h1><h2 id="编译构建-qemu" tabindex="-1">编译构建 QEMU <a class="header-anchor" href="#编译构建-qemu" aria-label="Permalink to &quot;编译构建 QEMU&quot;">​</a></h2><p>安装依赖工具和库：</p><p>::: tabs ::: code-tab bash Ubuntu 22.04</p><p>apt update apt install -y gcc git make ninja-build python3 python3-pip libglib2.0-dev libpixman-1-dev libslirp-dev :::</p><p>::: code-tab bash Ubuntu 22.04(static)</p><p>apt update apt install -y gcc git make ninja-build python3 python3-pip libglib2.0-dev libpixman-1-dev :::</p><p>::: code-tab bash OpenEuler 22.03/23.03</p><p>yum install -y gcc git make glib2-devel.x86_64 ninja-build libcap-ng-devel.x86_64 libattr-devel.x86_64 libslirp-devel.x86_64 :::</p><p>::: code-tab bash OpenEuler 22.03/23.03(static)</p><p>yum install -y gcc git make glib2-devel.x86_64 ninja-build libcap-ng-devel.x86_64 libattr-devel.x86_64 glib2-static.x86_64 ::: :::</p><p>下载 RUYI QEMU 源码：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--branch=ruyi_qemu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--progress</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--depth=1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/plctlab/plct-qemu.git</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">SRC_DI</span><span style="color:#E1E4E8;">R</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">SRC_DI</span><span style="color:#E1E4E8;">R</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submodule</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--recursive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--branch=ruyi_qemu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--progress</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--depth=1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/plctlab/plct-qemu.git</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">SRC_DI</span><span style="color:#24292E;">R</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">SRC_DI</span><span style="color:#24292E;">R</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submodule</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--recursive</span></span></code></pre></div><p>编译构建：</p><p>::: tabs ::: code-tab bash 普通编译</p><p>mkdir build cd build ../configure --target-list=riscv64-softmmu,riscv64-linux-user,riscv32-softmmu,riscv32-linux-user --prefix=&lt;TARGET_DIR&gt; --disable-werror --enable-virtfs --enable-slirp make -j $(nproc) make install :::</p><p>::: code-tab bash 静态编译</p><p>mkdir build-static cd build-static ../configure --target-list=riscv64-linux-user,riscv32-linux-user --prefix=&lt;TARGET_DIR&gt; --disable-werror --static make -j $(nproc) make install ::: :::</p><h2 id="常见用法" tabindex="-1">常见用法 <a class="header-anchor" href="#常见用法" aria-label="Permalink to &quot;常见用法&quot;">​</a></h2><p>对于直接下载的 QEMU 二进制程序 (非静态链接),我们在运行之前需要在系统中安装部分依赖库：</p><p>::: tabs ::: code-tab bash Ubuntu 22.04</p><p>apt update apt install -y libglib2.0-dev libpixman-1-dev libslirp-dev :::</p><p>::: code-tab bash OpenEuler 22.03/23.03</p><p>yum install -y pixman.x86_64 libepoxy.x86_64 libslirp-devel.x86_64 ::: :::</p><p>QEMU 提供了两种模式：用户模式和系统模式， 这两种模式均可以通过-cpu 选项来指定模拟的 CPU，如 -cpu rv64,x-zcb-true,RUYISDK 目前常见的一些 cpu 选项如下：</p><hr><p>Extensions CPU Type extra options</p><hr><p>Zca/Zcd rv32/64</p><p>Zcb rv32/64 x-zcb=true</p><p>Zcf rv32</p><p>Zcmp rv32/64 d=false,x-zcmp= true</p><p>Zcmt rv32/64 d=false,x-zcmt= true</p><p>rvv 0.7.1 rv32/64 v=true,vext_spec =&quot;v0.7.1&quot;</p><p>xthead* c910</p><p>xthead* + c910v<br> rvv 0.7.1</p><p>rvv 1.0 rv32/64 v=true</p><p>xthead* + c908v<br> rvv 1.0</p><h2 id="rvp-0-9-4-rv32-64-x-p-true" tabindex="-1">rvp 0.9.4 rv32/64 x-p=true <a class="header-anchor" href="#rvp-0-9-4-rv32-64-x-p-true" aria-label="Permalink to &quot;rvp 0.9.4    rv32/64     x-p=true&quot;">​</a></h2><p>除了 CPU 选项，QEMU 的系统模式还提供-machine 选项用于制定模拟的开发板平台，RUYISDK 目前提供的常见平台及它们对应的默认 CPU 类型如下：</p><hr><p>Machines Default CPU</p><hr><p>virt rv32/64</p><p>licheepirv c906fdv</p><h2 id="licheepi4a-c910v" tabindex="-1">licheepi4a c910v <a class="header-anchor" href="#licheepi4a-c910v" aria-label="Permalink to &quot;licheepi4a   c910v&quot;">​</a></h2><p>QEMU 命令举例：</p><p>::: tabs ::: code-tab bash 系统模式命令</p><p>qemu-system-riscv64 -nographic -machine virt -cpu rv64,x=true -smp &quot;&lt;vcpu-num&gt;&quot; -m &quot;&lt;memory-size&gt;&quot; -bios &lt;fw-path&gt; -drive file=&quot;&lt;image-path&gt;&quot;,format=qcow2,id=hd0 -object rng-random,filename=/dev/urandom,id=rng0 -device virtio-vga -device virtio-rng-device,rng=rng0 -device virtio-blk-device,drive=hd0 -device virtio-net-device,netdev=usernet -netdev user,id=usernet,hostfwd=tcp::&quot;&lt;ssh_port&gt;&quot;-:22 -device qemu-xhci -usb -device usb-kbd -device usb-tablet :::</p><p>::: code-tab bash 用户模式命令</p><p>qemu-riscv64 -cpu rv64,v=true (-L &lt;sysroot&gt;) &lt;program&gt; ::: :::</p><h2 id="基于-qemu-user-的-native-环境" tabindex="-1">基于 qemu-user 的 native 环境 <a class="header-anchor" href="#基于-qemu-user-的-native-环境" aria-label="Permalink to &quot;基于 qemu-user 的 native 环境&quot;">​</a></h2><p>安装相关工具 (Ubuntu):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">binfmt-support</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu-user-static</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemd-container</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">binfmt-support</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu-user-static</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemd-container</span></span></code></pre></div><p>解压下载后的 sysroot 文件系统 (如 <a href="https://repo.tarsier-infra.com:8080/ruyisdk/sdk/3/openeuler-23.03-sysroot.tar.gz" target="_blank" rel="noreferrer">openEuler sysroot</a>) 到&lt;target_fs&gt;目录下</p><p>通过 systemd-nspawn 进入 sysroot 环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemd-nspawn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">path-to-target_f</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemd-nspawn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">path-to-target_f</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>在切换入 sysroot 环境时也可以指定 qemu 的-cpu 选项，如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemd-nspawn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">path-to-target_f</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-U</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-E</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QEMU_CPU=&quot;c910v&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemd-nspawn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">path-to-target_f</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-U</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-E</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QEMU_CPU=&quot;c910v&quot;</span></span></code></pre></div><p>在这之后，就可以在该模拟的 native 环境下进行相应的开发</p><p>根据需要可以将默认安装的 qemu-riscv64/32-static 程序替换成自身下载或者静态编译的 static qemu-riscv64/32程序,然后先禁用再使能binfmt中的qemu-riscv64/32选项,来让替换后的新程序生效,例如:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">update-binfmts</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu-riscv64</span></span>
<span class="line"><span style="color:#B392F0;">update-binfmts</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">qemu-riscv64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">update-binfmts</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu-riscv64</span></span>
<span class="line"><span style="color:#6F42C1;">update-binfmts</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">qemu-riscv64</span></span></code></pre></div>`,62),t=[n];function o(r,c,i,d,y,u){return a(),p("div",null,t)}const b=s(l,[["render",o]]);export{v as __pageData,b as default};
