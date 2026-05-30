![wasm-ffmpeg-tryer](https://socialify.git.ci/VincentZyuApps/wasm-ffmpeg-tryer/image?custom_language=JavaScript&description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1f%2FWebAssembly_Logo.svg&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

# wasm-ffmpeg-tryer

🎬 基于 WebAssembly 的浏览器端视频压缩工具

> 一个纯前端的视频压缩工具，使用 FFmpeg.wasm 在浏览器中直接处理视频，无需上传到服务器，保护您的数据隐私。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/) [https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/)
</br>
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Online-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://wasm-ffmpeg-tryer.pages.dev/) [https://wasm-ffmpeg-tryer.pages.dev/](https://wasm-ffmpeg-tryer.pages.dev/)
</br>
[![Release](https://img.shields.io/github/v/release/VincentZyuApps/wasm-ffmpeg-tryer?style=for-the-badge&display_name=release)](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases) [https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases)

## ✨ 功能特性

- 🔒 **隐私安全** - 所有处理在浏览器本地完成，数据不上传服务器
- 📐 **分辨率调整** - 支持 240p 到 1920p，自动或手动选择
- 🔊 **音质控制** - 16-256 kbps 多档位选择
- 🎬 **帧率调整** - 5-60 fps 灵活配置
- 📹 **视频识别** - 显示选中视频的文件名
- 📊 **实时预估** - 根据参数实时计算压缩后文件大小
- ⚡ **快速预设** - 一键最低/中等/最高质量
- ⚡ **WebAssembly** - 使用 FFmpeg.wasm 提供接近原生的性能
- 🎯 **零依赖框架** - 纯 Vanilla JS，轻量快速

## 🚀 在线使用

[GitHub Pages](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/) | [Cloudflare Pages](https://wasm-ffmpeg-tryer.pages.dev/) | [Releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases)

**使用步骤**：
1. 点击"选择视频文件"上传视频
2. 查看视频预览和预估文件大小
3. 选择分辨率、音质、帧率，或使用快速预设
4. 点击"开始压缩"
5. 等待处理完成后下载

### 压缩过程演示

**压缩中** — 浏览器控制台实时显示 FFmpeg 处理进度

![压缩中](./doc/images/preview.浏览器f12console.压缩中.png)

**压缩完成** — 预估大小与实际大小对比

![预估与实际对比](./doc/images/preview.压缩完成以后.预估和实际的大小对比.png)

**下载到本地** — 压缩完成后，点击按钮从浏览器下载到本地磁盘

![下载](./doc/images/preview.压缩完成以后.可以点击按钮从浏览器下载到本次磁盘捏.png)

## 💻 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 快速开始

```bash
# 克隆项目
git clone https://github.com/VincentZyuApps/wasm-ffmpeg-tryer.git
cd wasm-ffmpeg-tryer
# 安装依赖
npm install
# 启动开发服务器（默认端口 65030）
npm run dev
# 构建生产版本
npm run build
# 预览生产构建
npm run preview
```

访问 http://localhost:65030 查看效果

## 🔧 CI/CD 控制

本项目使用 **commit message 关键词** 控制 CI/CD 流程，无需手动配置。

| Commit Message 关键词 | 构建 | 部署 GitHub Pages | 部署 Cloudflare Pages | 发布 Release |
|----------------------|:----:|:----------------:|:----------------:|:-----------:|
| `build action`       | ✅   | ❌                | ❌                | ❌           |
| `build release`      | ✅   | ✅                | ✅                | ✅           |
| 其他                 | ❌   | ❌                | ❌                | ❌           |

### 使用示例

```bash
# 仅测试构建（不部署）
git commit -m "build action: 测试 CI 流程"
git push
# 构建 + 部署 + 发布 Release
git commit -m "build release: v0.2.0 优化压缩算法"
git push
```

详细说明请查看 [.github/workflows/build.md](.github/workflows/build.md)

## 🛠️ 技术栈

| Package | Version | Description |
|:---|:---|:---|
| [![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/) | 5.2 | 下一代前端构建工具 |
| [![FFmpeg.wasm](https://img.shields.io/badge/FFmpeg.wasm-0.12-007808?style=flat-square&logo=ffmpeg&logoColor=white)](https://ffmpegwasm.netlify.app/) | 0.12 | WebAssembly 版本的 FFmpeg |
| [![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | - | 无框架依赖，轻量高效 |
| [![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/features/actions) | - | 自动化 CI/CD |

## 📚 依赖说明

### WebAssembly (WASM) 是什么？

WebAssembly 是一种二进制格式，可以在浏览器中以接近原生的速度运行。本项目使用 WASM 在浏览器端直接处理视频，无需服务器。

### 核心依赖

| 包名 | 版本 | 说明 |
|------|------|------|
| [![@ffmpeg/core](https://img.shields.io/badge/%40ffmpeg%2Fcore-0.12.6-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.6 | FFmpeg 的 WebAssembly 编译版本（原始 C 代码编译成 WASM 二进制） |
| [![@ffmpeg/ffmpeg](https://img.shields.io/badge/%40ffmpeg%2Fffmpeg-0.12.10-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.10 | JavaScript 包装器，提供友好的 API 调用 WASM 版 FFmpeg |
| [![@ffmpeg/util](https://img.shields.io/badge/%40ffmpeg%2Futil-0.12.1-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.1 | 工具函数库，处理文件 Blob 转换、URL 生成等 |

**工作流程**：
1. `@ffmpeg/ffmpeg` 加载 `@ffmpeg/core` 的 WASM 文件
2. 通过 JavaScript API 调用 FFmpeg 功能
3. `@ffmpeg/util` 辅助处理文件和数据转换

## 📦 部署方式

### GitHub Pages（在线访问）

自动部署到 GitHub Pages，访问地址：
```
https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/
```

### Cloudflare Pages（在线访问）

自动部署到 Cloudflare Pages，访问地址：
```
https://wasm-ffmpeg-tryer.pages.dev/
```

需要先配置 Secrets，详见 [.github/workflows/build.md](.github/workflows/build.md)

### Release 下载（离线使用）

每次发布会生成 `wasm-ffmpeg-tryer-v{version}.zip` 压缩包：
1. 前往 [Releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases) 页面
2. 下载最新版本的 zip 文件
3. 解压后，**需要用本地 HTTP 服务器访问**（不能直接打开 `index.html` 文件）

#### 启动本地服务器

**方案1：Python（推荐，最简单）**
```bash
cd wasm-ffmpeg-tryer-v{version}
python -m http.server 60530
# 然后访问 http://localhost:60530
```

**方案2：Node.js**
```bash
npx http-server -p 60530
# 然后访问 http://localhost:60530
```

**方案3：Node.js serve 工具**
```bash
npm install -g serve
serve -l 60530
# 然后访问 http://localhost:60530
```

> ⚠️ **为什么需要 HTTP 服务器？** 浏览器的安全策略禁止直接加载本地文件中的资源（CORS 限制），必须通过 HTTP 协议访问。

## 📂 项目结构

```
wasm-ffmpeg-tryer/
├── .github/
│   └── workflows/
│       └── build.yml          # CI/CD 配置
├── docs/
│   └── build.md              # 构建说明文档
├── index.html                # 主页面
├── main.js                   # 核心逻辑
├── style.css                 # 样式文件
├── package.json              # 项目配置
├── vite.config.js           # Vite 配置
└── README.md                # 项目说明
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
