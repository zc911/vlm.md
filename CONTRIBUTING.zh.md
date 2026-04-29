# 向 vlm.md 贡献食谱

vlm.md 是一个面向 agent 开发者的 VLM 实战食谱社区。

## 什么是好食谱？

- **真实场景**：你实际遇到并解决过的工程问题
- **可运行代码**：经过测试的 Python 代码，不是伪代码
- **踩坑记录**：至少一个你在生产中遇到的真实问题
- **模型推荐**：你测试过哪些 VLM，为什么选它

## 如何提交

1. Fork 本仓库
2. 在 `src/content/recipes/zh/` 中新建 `你的-slug.mdx` 文件
3. 按照下面的 frontmatter 格式填写
4. 提交 Pull Request

## Frontmatter 格式

```yaml
---
title: 食谱标题
description: 一句话描述任务是什么，这个食谱解决了什么问题
category: document-understanding  # 见下方分类
lang: zh
models:
  - GPT-4o
  - Claude 3.5 Sonnet
difficulty: beginner              # beginner / intermediate / advanced
date: 2024-03-15                  # YYYY-MM-DD
author: 你的名字                   # 可选，会显示在食谱页面
---
```

## 分类说明

- `document-understanding` — 发票、PDF、表单信息提取
- `ui-grounding` — 网页 UI 元素检测、点击、导航
- `chart-table` — 图表读取、表格提取
- `computer-use` — 桌面自动化、基于截图的 agent
- `multi-image` — 多图对比、连续截图推理
- `structured-output` — 稳定的 JSON/结构化输出模式

## 审核标准

所有 PR 将检查：

- [ ] 代码可以运行（请在 PR 描述中粘贴一个真实输出）
- [ ] 场景具体且真实（不接受"从图片中提取文字"这种过于宽泛的描述）
- [ ] 至少记录了一个踩坑
- [ ] frontmatter 格式正确

## 英文食谱

如果你愿意同时提供英文版，请在 `src/content/recipes/en/` 中使用相同文件名创建英文版本。不做强制要求。
