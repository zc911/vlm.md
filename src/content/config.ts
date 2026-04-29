import { defineCollection, z } from 'astro:content';

const CATEGORIES = [
  'document-understanding',
  'ui-grounding',
  'chart-table',
  'computer-use',
  'multi-image',
  'structured-output',
] as const;

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(CATEGORIES),
    lang: z.enum(['zh', 'en']),
    models: z.array(z.string()),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    date: z.date(),
    author: z.string().optional(),
  }),
});

export const collections = { recipes };

export const CATEGORY_LABELS: Record<typeof CATEGORIES[number], { zh: string; en: string }> = {
  'document-understanding': { zh: '文档理解', en: 'Document Understanding' },
  'ui-grounding': { zh: 'UI 操控', en: 'UI Grounding' },
  'chart-table': { zh: '图表/表格', en: 'Chart & Table' },
  'computer-use': { zh: 'Computer Use', en: 'Computer Use' },
  'multi-image': { zh: '多图推理', en: 'Multi-image Reasoning' },
  'structured-output': { zh: '结构化输出', en: 'Structured Output' },
};

export const CATEGORY_META: Record<typeof CATEGORIES[number], { zh: string; en: string; icon: string }> = {
  'document-understanding': { zh: '文档理解', en: 'Document Understanding', icon: '📄' },
  'ui-grounding': { zh: 'UI 操控', en: 'UI Grounding', icon: '🖱️' },
  'chart-table': { zh: '图表/表格', en: 'Chart & Table', icon: '📊' },
  'computer-use': { zh: 'Computer Use', en: 'Computer Use', icon: '💻' },
  'multi-image': { zh: '多图推理', en: 'Multi-image Reasoning', icon: '🖼️' },
  'structured-output': { zh: '结构化输出', en: 'Structured Output', icon: '🗂️' },
};
