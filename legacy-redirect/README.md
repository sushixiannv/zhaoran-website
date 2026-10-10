# 旧地址跳转（legacy-redirect）

这个目录**不属于网站本身**，不会被 `npm run build` 打包，也不会出现在 `xiran-website.netlify.app` 上。

它的用途：把已废弃的旧地址 `aizhaoran-website.netlify.app` 301 跳转到新地址 `xiran-website.netlify.app`。

## 为什么需要单独部署

Netlify 的重定向规则（`netlify.toml` / `_redirects`）只对**请求已经落到本站**的流量生效。
旧子域名改名后已经被释放，请求根本不会到达新站点，所以在新站里写规则是无效的。

唯一可行的办法：再建一个 Netlify 项目，**用 `aizhaoran-website` 这个名字**，内容就是这个目录。

## 使用步骤

1. Netlify 后台 → **Add new project** → **Deploy manually**
2. 把本目录（`legacy-redirect`）整个拖进去
3. 部署完成后，进入该项目的 **Project configuration** → **Change project name**
4. 改名为 `aizhaoran-website`
5. 访问 `https://aizhaoran-website.netlify.app` 验证：应 301 跳到新地址

## 什么时候可以删掉

确定没有外部链接还在用旧地址之后，可以在 Netlify 里删除这个项目，本目录也可一并移除。
