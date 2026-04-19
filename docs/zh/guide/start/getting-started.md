# 快速开始

## 项目结构

使用 `create-rspress` 创建项目后，你将得到以下项目结构：

- `docs/` — 文档源目录，通过 `rspress.config.ts` 中的 `root` 配置。
- `docs/_nav.json` — 导航栏配置。
- `docs/guide/_meta.json` — 指南部分的侧边栏配置。
- `docs/public/` — 静态资源目录。
- `theme/` — 可选的自定义主题目录，选择自定义主题脚手架时会生成。
- `rspress.config.ts` — Rspress 的配置文件。

## 启动 Dev server

通过如下命令启动本地开发服务:

```bash
npm run dev
```

这样 Rspress 将启动开发服务。

:::tip 提示

对于 dev 命令，你可以通过 `--port` 或 `--host` 参数来指定开发服务的端口号或 host，例如 `rspress dev --port 8080 --host 0.0.0.0`。

:::

## 生产环境构建

通过如下命令构建生产环境的产物:

```bash
npm run build
```

默认情况下，Rspress 将会把产物打包到 `doc_build` 目录。

## 本地预览产物

通过如下命令启动本地预览服务:

```bash
npm run preview
```

这样 Rspress 将启动产物预览服务。

## 下一步

- 了解如何在您的文档中 [Markdown & MDX](/guide/use-mdx/components)。  
- 了解 [代码块](/guide/use-mdx/code-blocks/) 的语法高亮和行高亮功能。  
- 了解用于提示、警告等内容的 [容器](/guide/use-mdx/container)。  
- 探索完整的 [Rspress 文档](https://rspress.rs/zh/)，了解更多高级功能。
