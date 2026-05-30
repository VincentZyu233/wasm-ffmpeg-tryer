![wasm-ffmpeg-tryer](https://socialify.git.ci/VincentZyuApps/wasm-ffmpeg-tryer/image?custom_language=JavaScript&description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1f%2FWebAssembly_Logo.svg&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

# wasm-ffmpeg-tryer

🎬 A WebAssembly-powered browser-side video compression tool

> A pure frontend video compression tool that uses FFmpeg.wasm to process videos directly in the browser — no uploads to any server, keeping your data private.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/) [https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/)
</br>
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Online-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://wasm-ffmpeg-tryer.pages.dev/) [https://wasm-ffmpeg-tryer.pages.dev/](https://wasm-ffmpeg-tryer.pages.dev/)
</br>
[![Release](https://img.shields.io/github/v/release/VincentZyuApps/wasm-ffmpeg-tryer?style=for-the-badge&display_name=release)](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases) [https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases)

## ✨ Features

- 🔒 **Privacy-first** - All processing stays in your browser; no data uploaded to any server
- 📐 **Resolution control** - Supports 240p to 1920p, auto or manual selection
- 🔊 **Audio quality** - 16–256 kbps with multiple presets
- 🎬 **Frame rate adjustment** - 5–60 fps flexible configuration
- 📹 **Video recognition** - Displays the selected video filename
- 📊 **Real-time estimation** - Calculates compressed file size on the fly
- ⚡ **Quick presets** - One-click low/medium/high quality
- ⚡ **WebAssembly** - Near-native performance with FFmpeg.wasm
- 🎯 **Zero framework dependencies** - Pure Vanilla JS, lightweight and fast

## 🚀 Try It Online

[GitHub Pages](https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/) | [Cloudflare Pages](https://wasm-ffmpeg-tryer.pages.dev/) | [Releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases)

**How to use**:
1. Click "Select Video File" to upload a video
2. View the video preview and estimated file size
3. Choose resolution, audio quality, and frame rate, or use a quick preset
4. Click "Start Compression"
5. Wait for processing to finish, then download

### Compression Demo

**In progress** — FFmpeg processing progress shown in browser console

![Compressing](./doc/images/preview.浏览器f12console.压缩中.png)

**Compression complete** — Estimated vs. actual file size comparison

![Estimated vs Actual](./doc/images/preview.压缩完成以后.预估和实际的大小对比.png)

**Download complete** — Click the button to download the compressed video from your browser

![Download](./doc/images/preview.压缩完成以后.可以点击按钮从浏览器下载到本次磁盘捏.png)

## 💻 Local Development

### Requirements

- Node.js >= 18
- npm >= 9

### Quick Start

```bash
# Clone the repository
git clone https://github.com/VincentZyuApps/wasm-ffmpeg-tryer.git
cd wasm-ffmpeg-tryer
# Install dependencies
npm install
# Start dev server (default port 65030)
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview
```

Open http://localhost:65030 to see the result.

## 🔧 CI/CD Control

This project uses **commit message keywords** to control the CI/CD pipeline — no manual configuration needed.

| Commit Message Keyword | Build | Deploy GitHub Pages | Deploy Cloudflare Pages | Publish Release |
|----------------------|:----:|:-------------------:|:-----------------------:|:---------------:|
| `build action`       | ✅   | ❌                  | ❌                      | ❌              |
| `build release`      | ✅   | ✅                  | ✅                      | ✅              |
| Others               | ❌   | ❌                  | ❌                      | ❌              |

### Usage Examples

```bash
# Build only (no deploy)
git commit -m "build action: test CI workflow"
git push
# Build + deploy + publish Release
git commit -m "build release: v0.2.0 optimize compression algorithm"
git push
```

See [.github/workflows/build.md](.github/workflows/build.md) for details.

## 🛠️ Tech Stack

| Package | Version | Description |
|:---|:---|:---|
| [![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/) | 5.2 | Next-generation frontend build tool |
| [![FFmpeg.wasm](https://img.shields.io/badge/FFmpeg.wasm-0.12-007808?style=flat-square&logo=ffmpeg&logoColor=white)](https://ffmpegwasm.netlify.app/) | 0.12 | WebAssembly port of FFmpeg |
| [![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | - | No framework dependencies, lightweight and efficient |
| [![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/features/actions) | - | Automated CI/CD |

## 📚 Dependency Overview

### What is WebAssembly (WASM)?

WebAssembly is a binary format that runs in the browser at near-native speed. This project uses WASM to process videos directly in the browser, with no server required.

### Core Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| [![@ffmpeg/core](https://img.shields.io/badge/%40ffmpeg%2Fcore-0.12.6-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.6 | WebAssembly build of FFmpeg (original C code compiled to WASM binary) |
| [![@ffmpeg/ffmpeg](https://img.shields.io/badge/%40ffmpeg%2Fffmpeg-0.12.10-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.10 | JavaScript wrapper providing a friendly API to call WASM FFmpeg |
| [![@ffmpeg/util](https://img.shields.io/badge/%40ffmpeg%2Futil-0.12.1-007808?style=flat&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm) | ^0.12.1 | Utility library for file/Blob conversion, URL generation, etc. |

**Workflow**:
1. `@ffmpeg/ffmpeg` loads the WASM binary from `@ffmpeg/core`
2. JavaScript API calls FFmpeg functions
3. `@ffmpeg/util` helps with file and data conversion

## 📦 Deployment

### GitHub Pages (Online)

Auto-deploys to GitHub Pages at:
```
https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/
```

### Cloudflare Pages (Online)

Auto-deploys to Cloudflare Pages at:
```
https://wasm-ffmpeg-tryer.pages.dev/
```

Requires initial Secrets configuration — see [.github/workflows/build.md](.github/workflows/build.md)

### Release Download (Offline Use)

Each release produces a `wasm-ffmpeg-tryer-v{version}.zip` archive:
1. Go to [Releases](https://github.com/VincentZyuApps/wasm-ffmpeg-tryer/releases)
2. Download the latest zip file
3. Extract it — **you must serve it with a local HTTP server** (opening `index.html` directly won't work)

#### Starting a Local Server

**Option 1: Python (recommended, simplest)**
```bash
cd wasm-ffmpeg-tryer-v{version}
python -m http.server 60530
# Then visit http://localhost:60530
```

**Option 2: Node.js**
```bash
npx http-server -p 60530
# Then visit http://localhost:60530
```

**Option 3: Node.js serve tool**
```bash
npm install -g serve
serve -l 60530
# Then visit http://localhost:60530
```

> ⚠️ **Why is an HTTP server needed?** Browser security policies (CORS) prevent loading local file resources directly — they must be accessed via the HTTP protocol.

## 📂 Project Structure

```
wasm-ffmpeg-tryer/
├── .github/
│   └── workflows/
│       └── build.yml          # CI/CD configuration
├── docs/
│   └── build.md              # Build documentation
├── index.html                # Main page
├── main.js                   # Core logic
├── style.css                 # Stylesheet
├── package.json              # Project configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project readme
```

## 🤝 Contributing

Issues and Pull Requests are welcome!
