import{_ as s,o,c as e,k as n}from"./chunks/framework.35bd0d1d.js";const y=JSON.parse('{"title":"使用 ruyishell 下载测试","description":"","frontmatter":{"title":"使用 ruyishell 下载测试"},"headers":[],"relativePath":"zh/sdk/gcc13-rv64gcb/rv64gcb_ruyishell.md","filePath":"zh/sdk/gcc13-rv64gcb/rv64gcb_ruyishell.md","lastUpdated":1698734878000}'),l={name:"zh/sdk/gcc13-rv64gcb/rv64gcb_ruyishell.md"},t=n("p",null,"::: tabs 编写测试用例",-1),r=n("p",null,"::: code-tab c demo",-1),i=n("p",null,"//测试用例示例 bitmanip.c unsigned long long foo1(unsigned long long rs1, unsigned long long rs2) { return rs1 & ~rs2; }",-1),c=n("p",null,"unsigned long long foo2(unsigned long long rs1, unsigned long long rs2) { return rs1 | ~rs2; }",-1),g=n("p",null,"unsigned long long foo3(unsigned long long rs1, unsigned long long rs2) { return rs1 ^ ~rs2; } :::",-1),d=n("p",null,"::: code-tab bash build",-1),a=n("p",null,"# 使用构建的工具编译测试用例，查看汇编文件中是否使用 Bitmanip 扩展指令 andn，orn,xnor build/bin/riscv64-unknown-linux-gnu-gcc -S bitmanip.c cat bitmanip.s ::: :::",-1),u=[t,r,i,c,g,d,a];function _(p,h,b,m,f,v){return o(),e("div",null,u)}const x=s(l,[["render",_]]);export{y as __pageData,x as default};
