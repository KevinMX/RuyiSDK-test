import{_ as t,o as s,c,k as e}from"./chunks/framework.01608dce.js";const y=JSON.parse('{"title":"使用 ruyishell 下载测试","description":"","frontmatter":{"title":"使用 ruyishell 下载测试"},"headers":[],"relativePath":"sdk/gcc13-rv64gc/rv64gc_ruyishell.md","filePath":"sdk/gcc13-rv64gc/rv64gc_ruyishell.md","lastUpdated":1698397416000}'),l={name:"sdk/gcc13-rv64gc/rv64gc_ruyishell.md"},n=e("p",null,"::: tabs 编写测试用例",-1),r=e("p",null,"::: code-tab C demo",-1),i=e("p",null,'//测试用例示例 ruyi.c #include "stdio.h" int main(){ printf("Hello RUYISDKn"); return 0; } :::',-1),o=e("p",null,"::: code-tab bash build",-1),a=e("p",null,"# 使用构建的工具编译测试用例，查看汇编文件中是否使用 RISC-V 指令 build/bin/riscv64-unknown-linux-gnu-gcc -S ruiyi.c cat ruyi.s ::: :::",-1),d=[n,r,i,o,a];function _(u,h,p,g,m,v){return s(),c("div",null,d)}const b=t(l,[["render",_]]);export{y as __pageData,b as default};
