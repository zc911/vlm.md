# vlm.md — 设计文档

**日期：** 2026-04-29
**作者：** zack.mm.chen@gmail.com
**状态：** 已批准，待实现

---

## 一、项目定位

**一句话定位：**
> vlm.md — 面向 agent 开发者的 VLM 实战食谱库。每一篇食谱告诉你：用哪个模型、怎么写 prompt、代码怎么写、踩过哪些坑。

**背景：**
- 域名 `vlm.md` 兼具双重含义：VLM（视觉语言模型）+ `.md`（Markdown，agent 系统的核心语言）
- 目标双重：产生社区影响力 + 为域名长期增值
- 项目形态：业余项目，单人维护，每周投入数小时

**目标用户：**
- 全球 AI/agent 开发者（中英双语，中文先行）
- 在实际项目中集成 VLM 的工程师和研究者

---

## 二、核心概念：Recipe（食谱）

每个 Recipe 对应一个真实工程场景，采用固定结构：

| 字段 | 说明 |
|---|---|
| **场景** | 我想让 agent 做什么（具体任务描述） |
| **推荐模型** | 哪些 VLM 适合，简短理由 |
| **Prompt 模板** | 可直接复制的 prompt |
| **代码片段** | 可运行的 Python 示例 |
| **踩坑记录** | 真实问题与解法 |
| **语言** | 中英双语（同页切换或分 URL） |

**质量门槛：** 每个 Recipe 必须包含可运行代码，不接受纯理论内容。

**初期内容分类（6个）：**
- 文档理解（Document Understanding）
- UI 操控（UI Grounding）
- 图表/表格（Chart & Table）
- Computer Use
- 多图推理（Multi-image Reasoning）
- 结构化输出（Structured Output）

---

## 三、技术架构

**核心原则：零后端、低维护、部署即上线。**

```
GitHub Repo（内容 + 代码）
    ↓ Push / PR merge
Cloudflare Pages（自动构建部署）
    ↓
静态网站（vlm.md）
    ↑
访问者通过 GitHub PR 贡献 Recipe
```

### 技术选型

| 层 | 选择 | 理由 |
|---|---|---|
| 框架 | Astro | 静态优先，Markdown 原生支持，构建极快 |
| 内容格式 | MDX（Markdown + JSX）| Recipe 本身是 .md 文件，与域名呼应 |
| 样式 | Tailwind CSS | 低维护，设计一致性好 |
| 搜索 | Pagefind（静态搜索）| 无需服务器，构建时生成索引 |
| 双语路由 | `/en/recipes/xxx` 和 `/zh/recipes/xxx` | frontmatter 中标注 `lang: zh/en` |
| 托管 | Cloudflare Pages | 免费套餐，自动 CI/CD，域名已在 Cloudflare 管理 |
| 内容管理 | GitHub 作为 CMS | PR 即审核流程，天然版本控制 |

### 目录结构

```
vlm.md/
├── src/
│   ├── content/
│   │   └── recipes/        ← 所有 Recipe 的 MDX 文件
│   │       ├── zh/
│   │       └── en/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── zh/
│   │   └── en/
│   └── components/
├── public/
├── docs/
│   └── superpowers/specs/
├── CONTRIBUTING.md          ← 社区贡献指南
└── astro.config.mjs
```

---

## 四、内容策略与冷启动

### 第一阶段：上线前（1-2 个月）

- 作者亲自写 10-15 个高质量 Recipe，覆盖 4-5 个分类
- 优先选自身最熟悉、踩坑最多的真实场景
- 同步完善 `CONTRIBUTING.md`，降低社区贡献门槛

### 第二阶段：上线后

- 在 X/Twitter、小红书、知乎、Hugging Face Discord 发布
- 每新增 Recipe 即发一条短内容（内容即推广）
- 维持节奏：每月 2-4 个新 Recipe

### 社区贡献机制

- GitHub PR 提交 Recipe，作者审核
- 审核标准：场景真实 + 代码可运行
- 贡献者署名 + 反向链接激励

### 双语策略

- 中文先行，AI 辅助翻译英文，作者校对
- 不强求双语同步，中文版先发布

---

## 五、域名增值与变现路径

| 阶段 | 行动 | 效果 |
|---|---|---|
| 0-6 个月 | 内容积累，SEO 基础建设 | 建立搜索引擎收录 |
| 6-12 个月 | 社区传播，GitHub star 增长 | 品牌认知度上升 |
| 1-2 年 | 成为 VLM 开发者参考站点 | 域名与细分市场绑定 |

**潜在变现方式：**
1. **赞助**：AI 基础设施公司（模型 API、GPU 云）赞助 Recipe 或月度赞助位
2. **域名出售**：站点有权威性后，溢价出售给 VLM 相关公司或社区
3. **付费内容**：未来考虑，初期不实施，先积累信誉

**关键判断：** `.md` 域名在 AI 圈有独特文化共鸣，`vlm.md` 对做 VLM 产品的公司极具品牌价值。内容站建好后，域名叫价有实质性支撑。

---

## 六、成功标准

- **6 个月**：GitHub 仓库 200+ star，网站月访问量 1000+
- **12 个月**：社区贡献 Recipe 占比超过 30%，被主要 AI 社区引用
- **长期**：成为 VLM × agent 领域开发者的默认参考资源

---

## 七、不在范围内（明确排除）

- 不做模型 API 调用代理或 SaaS 产品
- 不做学术 benchmark 排行榜（维护成本过高）
- 初期不做付费内容
- 不追求每日更新频率，质量优先于数量
