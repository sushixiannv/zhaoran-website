# 熙然的个人网站

基于 Next.js（App Router）+ TypeScript + Tailwind CSS 的个人网站，采用静态导出（`output: "export"`），可直接部署到 Netlify 等纯静态托管平台。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 http://localhost:3000

## 构建与检查

```bash
# TypeScript 类型检查
npm run typecheck

# ESLint 检查
npm run lint

# 生产构建 + 静态导出（产物在 out/ 目录）
npm run build
```

## 本地预览静态导出产物

```bash
python3 -m http.server 8080 -d out
```

浏览器打开 http://localhost:8080

## 项目结构

```
src/
  app/            # 路由（layout.tsx / page.tsx / globals.css）
  components/     # 页面组件（导航、Hero、各内容区块、FAQ 折叠组件等）
  data/           # 内容数据（元信息、导航、技能、项目、航海案例、FAQ、联系方式）
public/           # 静态资源（头像、favicon）
```

## 内容维护

网站的文案、项目数据、技能、FAQ 等全部集中在 `src/data/` 目录下，修改内容只需编辑对应的数据文件，无需改动页面组件。

## 部署说明（Netlify）

本项目使用静态导出。Netlify 上的构建配置应为：

- Build command: `npm run build`
- Publish directory: `out`
