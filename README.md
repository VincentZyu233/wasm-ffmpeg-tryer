# wasm-ffmpeg-tryer

🎬 基于 WebAssembly 的浏览器端视频压缩工具

> 一个纯前端的视频压缩工具，使用 FFmpeg.wasm 在浏览器中直接处理视频，无需上传到服务器，保护您的隐私。

## ✨ 功能特性

- 🔒 **隐私安全** - 所有处理在浏览器本地完成，数据不上传服务器
- 📦 **自定义大小** - 可设置目标文件大小（MB）
- 📐 **分辨率调整** - 支持 1920p/1280p/720p/480p 或自动
- 📊 **实时进度** - 显示压缩进度和预计时间
- ⚡ **WebAssembly** - 使用 FFmpeg.wasm 提供接近原生的性能
- 🎯 **零依赖框架** - 纯 Vanilla JS，轻量快速

## 🚀 在线使用

**GitHub Pages**: https://[your-username].github.io/wasm-ffmpeg-tryer/

**使用步骤**：
1. 点击"选择视频文件"上传视频
2. 设置目标大小或分辨率
3. 点击"开始压缩"
4. 等待处理完成后下载

### 压缩过程演示

![压缩中](./doc/images/preview.浏览器f12console.压缩中.png)

## 💻 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 快速开始

```bash
# 克隆项目
git clone https://github.com/[your-username]/wasm-ffmpeg-tryer.git
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

- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具
- **[FFmpeg.wasm](https://ffmpegwasm.netlify.app/)** - WebAssembly 版本的 FFmpeg
- **Vanilla JavaScript** - 无框架依赖，轻量高效
- **GitHub Actions** - 自动化 CI/CD

## 📚 依赖说明

### WebAssembly (WASM) 是什么？

WebAssembly 是一种二进制格式，可以在浏览器中以接近原生的速度运行。本项目使用 WASM 在浏览器端直接处理视频，无需服务器。

### 核心依赖

| 包名 | 版本 | 说明 |
|------|------|------|
| `@ffmpeg/core` | ^0.12.6 | FFmpeg 的 WebAssembly 编译版本（原始 C 代码编译成 WASM 二进制） |
| `@ffmpeg/ffmpeg` | ^0.12.10 | JavaScript 包装器，提供友好的 API 调用 WASM 版 FFmpeg |
| `@ffmpeg/util` | ^0.12.1 | 工具函数库，处理文件 Blob 转换、URL 生成等 |

**工作流程**：
1. `@ffmpeg/ffmpeg` 加载 `@ffmpeg/core` 的 WASM 文件
2. 通过 JavaScript API 调用 FFmpeg 功能
3. `@ffmpeg/util` 辅助处理文件和数据转换

## 📦 部署方式

### GitHub Pages（在线访问）

自动部署到 GitHub Pages，访问地址：
```
https://[your-username].github.io/wasm-ffmpeg-tryer/
```

### Cloudflare Pages（在线访问）

自动部署到 Cloudflare Pages，访问地址：
```
https://wasm-ffmpeg-tryer.pages.dev/
```

需要先配置 Secrets，详见 [.github/workflows/build.md](.github/workflows/build.md)

### Release 下载（离线使用）

每次发布会生成 `wasm-ffmpeg-tryer-v{version}.zip` 压缩包：
1. 前往 [Releases](../../releases) 页面
2. 下载最新版本的 zip 文件
3. 解压后打开 `index.html` 即可使用

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
