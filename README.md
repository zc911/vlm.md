# vlm.md 官方网站

## 项目简介
vlm.md 域名展示页，面向潜在买家展示域名价值和投资潜力。

## 技术栈
- 纯静态 HTML + CSS + JavaScript
- 响应式设计，适配桌面端和移动端
- 无外部依赖，加载速度快
- 支持所有现代浏览器

## 本地预览
直接在浏览器中打开 `index.html` 即可预览效果。

## 部署方式

### 方式1：Vercel 部署（推荐）
1. Fork 这个仓库到你的 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 导入仓库，直接部署
4. 绑定自定义域名 vlm.md

### 方式2：Netlify 部署
1. 登录 [Netlify](https://www.netlify.com)
2. 直接拖拽 `vlm-md` 文件夹到部署区域
3. 绑定自定义域名

### 方式3：Cloudflare Pages
1. 上传代码到 GitHub/GitLab
2. 在 Cloudflare Pages 中导入项目
3. 部署完成后绑定域名

### 方式4：传统虚拟主机/服务器
1. 将 `index.html` 文件上传到服务器根目录
2. 配置域名解析到服务器IP
3. 配置 Nginx/Apache 指向文件

## 域名解析配置
| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| A       | @       | 你的服务器IP | 600 |
| A       | www     | 你的服务器IP | 600 |
| 或者使用CNAME到托管平台的域名 |

## 自定义修改
### 修改联系方式
编辑 `index.html` 中 `contact-section` 部分的联系信息：
```html
<div class="contact-method">
    <h4>邮箱</h4>
    <a href="mailto:your-email@example.com">your-email@example.com</a>
</div>
```

### 修改内容
所有文本内容都在 `index.html` 中，可以直接编辑修改。

### 修改样式
CSS 样式都在 `<style>` 标签内，可以根据需要调整颜色、字体等。

## SEO 优化
页面已经内置了基础的 SEO 优化：
- 标题和描述 meta 标签
- 语义化 HTML 结构
- 响应式设计，移动端友好
- 加载速度快

如需进一步优化，可以添加：
- Open Graph 标签
- Twitter Card 标签
- 结构化数据
