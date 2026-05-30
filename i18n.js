const DEFAULT_LOCALE = 'en';
const LOCALE_STORAGE_KEY = 'locale';

const messages = {
  'zh-CN': {
    'document.lang': 'zh-CN',
    'page.title': '视频压缩工具 - Video Compressor',
    'theme.toggle': '切换主题',
    'locale.toggle': '切换语言',
    'locale.label': '语言',
    'locale.option.en': 'English',
    'locale.option.zh-CN': '简体中文',
    'theme.auto': '跟随系统',
    'theme.light': '白天模式',
    'theme.dark': '黑夜模式',
    'app.title': '🎬 视频压缩工具',
    'app.subtitle': '使用 WebAssembly 在浏览器中安全压缩视频',
    'upload.button': '选择视频文件',
    'upload.hint': '支持拖拽上传',
    'controls.preset.label': '快速预设:',
    'controls.preset.low': '🔴 最低质量',
    'controls.preset.mid': '🟡 中等质量',
    'controls.preset.high': '🟢 最高质量',
    'controls.resolution.label': '分辨率:',
    'controls.resolution.auto': '自动',
    'controls.resolution.240': '240p (超低)',
    'controls.resolution.360': '360p (极低)',
    'controls.resolution.480': '480p (低)',
    'controls.resolution.720': '720p',
    'controls.resolution.1280': '1280p',
    'controls.resolution.1920': '1920p',
    'controls.audioBitrate.label': '音质 (kbps):',
    'controls.audioBitrate.16': '16 kbps (超超低)',
    'controls.audioBitrate.24': '24 kbps (超低)',
    'controls.audioBitrate.32': '32 kbps (极低)',
    'controls.audioBitrate.48': '48 kbps (很低)',
    'controls.audioBitrate.64': '64 kbps (低)',
    'controls.audioBitrate.96': '96 kbps',
    'controls.audioBitrate.128': '128 kbps (默认)',
    'controls.audioBitrate.192': '192 kbps',
    'controls.audioBitrate.256': '256 kbps (高)',
    'controls.framerate.label': '帧率 (fps):',
    'controls.framerate.auto': '自动',
    'controls.framerate.5': '5 fps (超低)',
    'controls.framerate.10': '10 fps (低)',
    'controls.framerate.15': '15 fps (较低)',
    'controls.framerate.24': '24 fps (电影)',
    'controls.framerate.30': '30 fps (标准)',
    'controls.framerate.60': '60 fps (高清)',
    'estimate.default': '📦 预估文件大小: 上传视频后显示',
    'estimate.pending': '预估文件大小: 计算中...',
    'estimate.result': '预估文件大小: {estimatedSize} MB (视频: {videoBitrate}k + 音频: {audioBitrate}k)',
    'actions.compress': '开始压缩',
    'progress.preparing': '准备中...',
    'progress.loadingFfmpeg': '加载 FFmpeg...',
    'progress.compressing': '压缩中... {percent}%',
    'progress.preparingFile': '准备文件...',
    'result.title': '✅ 压缩完成',
    'result.summary': '原始大小: {originalSize} MB → 压缩后: {compressedSize} MB (减少 {ratio}%)',
    'actions.download': '下载压缩后的视频',
    'errors.compressFailed': '压缩失败: {message}',
    'file.selected': '📁 {name}',
    'download.filenamePrefix': 'compressed_',
  },
  en: {
    'document.lang': 'en',
    'page.title': 'Video Compressor',
    'theme.toggle': 'Toggle theme',
    'locale.toggle': 'Switch language',
    'locale.label': 'Language',
    'locale.option.en': 'English',
    'locale.option.zh-CN': '简体中文',
    'theme.auto': 'System',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'app.title': '🎬 Video Compressor',
    'app.subtitle': 'Compress videos safely in the browser with WebAssembly',
    'upload.button': 'Choose Video File',
    'upload.hint': 'Drag and drop supported',
    'controls.preset.label': 'Quick Quality Presets:',
    'controls.preset.low': '🔴 Lowest Quality',
    'controls.preset.mid': '🟡 Medium Quality',
    'controls.preset.high': '🟢 Highest Quality',
    'controls.resolution.label': 'Resolution:',
    'controls.resolution.auto': 'Auto',
    'controls.resolution.240': '240p (very low)',
    'controls.resolution.360': '360p (extremely low)',
    'controls.resolution.480': '480p (low)',
    'controls.resolution.720': '720p',
    'controls.resolution.1280': '1280p',
    'controls.resolution.1920': '1920p',
    'controls.audioBitrate.label': 'Audio Bitrate (kbps):',
    'controls.audioBitrate.16': '16 kbps (ultra low)',
    'controls.audioBitrate.24': '24 kbps (very low)',
    'controls.audioBitrate.32': '32 kbps (extremely low)',
    'controls.audioBitrate.48': '48 kbps (quite low)',
    'controls.audioBitrate.64': '64 kbps (low)',
    'controls.audioBitrate.96': '96 kbps',
    'controls.audioBitrate.128': '128 kbps (default)',
    'controls.audioBitrate.192': '192 kbps',
    'controls.audioBitrate.256': '256 kbps (high)',
    'controls.framerate.label': 'Frame Rate (fps):',
    'controls.framerate.auto': 'Auto',
    'controls.framerate.5': '5 fps (very low)',
    'controls.framerate.10': '10 fps (low)',
    'controls.framerate.15': '15 fps (reduced)',
    'controls.framerate.24': '24 fps (cinematic)',
    'controls.framerate.30': '30 fps (standard)',
    'controls.framerate.60': '60 fps (high)',
    'estimate.default': '📦 Estimated file size: shown after upload',
    'estimate.pending': 'Estimated file size: calculating...',
    'estimate.result': 'Estimated file size: {estimatedSize} MB (Video: {videoBitrate}k + Audio: {audioBitrate}k)',
    'actions.compress': 'Start Compression',
    'progress.preparing': 'Preparing...',
    'progress.loadingFfmpeg': 'Loading FFmpeg...',
    'progress.compressing': 'Compressing... {percent}%',
    'progress.preparingFile': 'Preparing file...',
    'result.title': '✅ Compression Complete',
    'result.summary': 'Original: {originalSize} MB → Compressed: {compressedSize} MB ({ratio}% smaller)',
    'actions.download': 'Download Compressed Video',
    'errors.compressFailed': 'Compression failed: {message}',
    'file.selected': '📁 {name}',
    'download.filenamePrefix': 'compressed_',
  },
};

let currentLocale = resolveInitialLocale();

function resolveInitialLocale() {
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (storedLocale && messages[storedLocale]) {
    return storedLocale;
  }

  return DEFAULT_LOCALE;
}

function format(template, params = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ''));
}

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  if (!messages[locale]) {
    return currentLocale;
  }

  if (locale === currentLocale) {
    return currentLocale;
  }

  const updateLocale = () => {
    currentLocale = locale;
    localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale);
    applyI18n();
    window.dispatchEvent(new CustomEvent('localechange', { detail: { locale: currentLocale } }));
  };

  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(() => {
      updateLocale();
    });
    return currentLocale;
  }

  updateLocale();
  return currentLocale;
}

export function t(key, params = {}) {
  const localeMessages = messages[currentLocale] ?? messages[DEFAULT_LOCALE];
  const fallbackMessages = messages[DEFAULT_LOCALE];
  const template = localeMessages[key] ?? fallbackMessages[key] ?? key;

  if (typeof template !== 'string') {
    return key;
  }

  return format(template, params);
}

export function applyI18n(root = document) {
  document.documentElement.lang = t('document.lang');
  document.title = t('page.title');

  root.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  root.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
}
