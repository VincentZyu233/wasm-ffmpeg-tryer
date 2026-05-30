# 构建说明

本项目使用 GitHub Actions 进行自动化构建、部署和发布。

## 触发方式

通过 **commit message** 中的关键词控制 CI/CD 行为：

| Commit Message 关键词 | 构建 | 部署 GitHub Pages | 部署 Cloudflare Pages | 发布 Release |
|----------------------|------|-------------------|-------------------|--------------|
| `build action`       | ✅   | ❌                | ❌                | ❌           |
| `build release`      | ✅   | ✅                | ✅                | ✅           |
| 其他                 | ❌   | ❌                | ❌                | ❌           |

## 使用示例

### 仅测试构建

```bash
git commit -m "build action: 测试 CI 流程"
git push
```

**效果**：触发构建，生成 dist 产物，但不部署也不发布

### 构建并发布

```bash
git commit -m "build release: v0.1.0 新增视频压缩功能"
git push
```

**效果**：
1. ✅ 构建项目
2. ✅ 部署到 GitHub Pages
3. ✅ 创建 GitHub Release（包含 zip 压缩包）

## 工作流程

```
check ──→ build ──→ deploy (GitHub Pages)
                 └──→ release (GitHub Release)
```

### 1. check 任务

- 解析 commit message
- 提取版本号（从 package.json）
- 输出控制标志（should_build, should_release）

### 2. build 任务

- 安装依赖（npm ci）
- 构建项目（npm run build）
- 上传 dist 产物

## 部署方式

### GitHub Pages

- **自动部署**：每次 `build release` 时自动部署
- **访问地址**：`https://[username].github.io/wasm-ffmpeg-tryer/`
- **无需额外配置**

### Cloudflare Pages

需要手动配置一次，之后自动部署。

#### 前置准备（首次操作）

1. 进入 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
2. 点击 **Create application** → **Pages** 标签
3. 选择 **Upload assets** → **开始使用** → **拖放文件**（Direct Upload 模式）
4. 项目名称输入：`wasm-ffmpeg-tryer`
5. 拖放或选择一个临时 `index.html` 文件完成初始化
6. 在 GitHub 仓库 **Settings → Secrets and variables → Actions → Repository secrets** 添加：

| Secret 名称 | 说明 | 获取方式 |
|------------|------|--------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API 令牌 | [🔗 API Tokens 管理](https://dash.cloudflare.com/profile/api-tokens)<br><br>**创建步骤：**<br>1. 点击 **Create Token**<br>2. 模板选择 **Edit Cloudflare Workers**<br>3. **权限 (Permissions)** 确保包含：<br>   - `Account` - `Cloudflare Pages` - `Edit` (必需)<br>   - `Zone` - `Workers Routes` - `Edit`<br>   - `Account` - `Workers Scripts` - `Edit`<br>   - `Account` - `Workers KV Storage` - `Edit`<br>4. **账户资源 (Account Resources)**：选择 `Include` → `你的账户名`<br>5. **区域资源 (Zone Resources)**：选择 `Include` → `All zones`<br>6. 点击 **Continue to summary** 并生成 Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID | [🔗 打开此链接](https://dash.cloudflare.com/)<br><br>浏览器会重定向到 `https://dash.cloudflare.com/<account-id>/home/overview`<br>URL 中间的那串字母和数字就是你的 **Account ID** |

#### 自动部署

配置完成后，每次 `build release` 时会自动部署到 Cloudflare Pages。

**访问地址**：`https://wasm-ffmpeg-tryer.pages.dev/`

### 4. release 任务

- 下载构建产物
- 打包成 zip（`wasm-ffmpeg-tryer-v0.1.0.zip`）
- 创建 GitHub Release
- 附带下载链接和使用说明

## 版本号管理

版本号统一在 `package.json` 中维护：

```json
{
  "version": "0.1.0"
}
```

CI 会自动读取并生成对应的 Release tag（如 `v0.1.0`）

## 注意事项

- PR 会自动触发构建测试，但不会部署或发布
- 只有推送到 `main` 分支才会触发部署和发布
- Release 会自动覆盖同版本的旧 Release（强制刷新）
