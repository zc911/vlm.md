# Contributing to vlm.md

vlm.md is a community cookbook of battle-tested VLM recipes for agent developers.

## What makes a good recipe?

- **Real scenario**: A task you've actually needed to solve
- **Working code**: Runnable Python (tested, not theoretical)
- **Gotchas**: At least one real production problem you encountered
- **Model recommendations**: Which VLMs you tested and why

## How to submit

1. Fork this repository
2. Create a new MDX file in `src/content/recipes/en/your-recipe-slug.mdx`
3. Follow the frontmatter schema below
4. Open a Pull Request

## Frontmatter schema

```yaml
---
title: Your Recipe Title
description: One sentence describing the task and what makes this recipe useful
category: document-understanding  # see categories below
lang: en
models:
  - GPT-4o
  - Claude 3.5 Sonnet
difficulty: beginner              # beginner / intermediate / advanced
date: 2024-03-15                  # YYYY-MM-DD
author: your-name                 # optional, shown on recipe page
---
```

## Categories

- `document-understanding` — Invoice, PDF, form extraction
- `ui-grounding` — Web UI element detection, clicking, navigation
- `chart-table` — Chart/graph reading, table extraction
- `computer-use` — Desktop automation, screenshot-based agents
- `multi-image` — Comparing multiple images, sequential screenshots
- `structured-output` — Reliable JSON/structured extraction patterns

## Review criteria

All PRs are reviewed for:
- [ ] Code actually runs (paste a real output in the PR description)
- [ ] Scenario is specific and real (not "extract text from image")
- [ ] At least one gotcha documented
- [ ] Frontmatter validates against the schema

## Chinese recipes

If you write in Chinese, use `lang: zh` and place the file in `src/content/recipes/zh/`. English translation is welcome but not required.
