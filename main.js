import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

// 主题切换
const themes = {
  auto: { icon: '🌓', text: '跟随系统' },
  light: { icon: '☀️', text: '白天模式' },
  dark: { icon: '🌙', text: '黑夜模式' }
};

let currentTheme = localStorage.getItem('theme') || 'auto';

function applyTheme(theme) {
  const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.body.classList.toggle('dark-mode', isDark);

  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  if (themeIcon && themeText) {
    themeIcon.textContent = themes[theme].icon;
    themeText.textContent = themes[theme].text;
  }
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const order = ['auto', 'light', 'dark'];
  const nextIndex = (order.indexOf(currentTheme) + 1) % order.length;
  currentTheme = order[nextIndex];
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (currentTheme === 'auto') applyTheme('auto');
});

applyTheme(currentTheme);

// 视频压缩逻辑
let ffmpeg = null;
let videoFile = null;

const videoInput = document.getElementById('videoInput');
const compressBtn = document.getElementById('compressBtn');
const progress = document.getElementById('progress');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const result = document.getElementById('result');
const resultInfo = document.getElementById('resultInfo');
const downloadBtn = document.getElementById('downloadBtn');
const targetSize = document.getElementById('targetSize');
const resolution = document.getElementById('resolution');
const audioBitrate = document.getElementById('audioBitrate');
const framerate = document.getElementById('framerate');
const estimateInfo = document.getElementById('estimateInfo');
const videoInfo = document.getElementById('videoInfo');
const fileName = document.getElementById('fileName');
const thumbnails = document.getElementById('thumbnails');

let videoDuration = 0;

videoInput.addEventListener('change', (e) => {
  videoFile = e.target.files[0];
  if (videoFile) {
    result.classList.add('hidden');
    fileName.textContent = `📁 ${videoFile.name}`;
    videoInfo.classList.remove('hidden');
    getVideoDuration();
    extractThumbnails();
  }
});

async function getVideoDuration() {
  const video = document.createElement('video');
  video.src = URL.createObjectURL(videoFile);
  video.onloadedmetadata = () => {
    videoDuration = video.duration;
    updateEstimate();
    URL.revokeObjectURL(video.src);
  };
}

async function extractThumbnails() {
  await loadFFmpeg();

  const inputName = 'input.mp4';
  await ffmpeg.writeFile(inputName, new Uint8Array(await videoFile.arrayBuffer()));

  thumbnails.innerHTML = '';

  // 提取三个时间点：1/4, 1/2, 3/4
  const times = [videoDuration / 4, videoDuration / 2, (videoDuration * 3) / 4];

  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const outputName = `thumb_${i}.png`;

    await ffmpeg.exec([
      '-i', inputName,
      '-ss', time.toString(),
      '-vframes', '1',
      '-vf', 'scale=120:-1',
      outputName
    ]);

    const data = await ffmpeg.readFile(outputName);
    const blob = new Blob([data.buffer], { type: 'image/png' });
    const url = URL.createObjectURL(blob);

    const img = document.createElement('img');
    img.src = url;
    img.style.height = '100px';
    img.style.borderRadius = '4px';
    img.title = `${(time / videoDuration * 100).toFixed(0)}%`;
    thumbnails.appendChild(img);
  }
}

function updateEstimate() {
  if (!videoDuration) {
    estimateInfo.textContent = '预估文件大小: 计算中...';
    return;
  }

  const targetSizeMB = parseInt(targetSize.value);
  const targetBitrate = Math.floor((targetSizeMB * 8192) / videoDuration);
  const audioBitrateMbps = parseInt(audioBitrate.value);
  const totalBitrate = targetBitrate + audioBitrateMbps;
  const estimatedSize = (totalBitrate * videoDuration / 8 / 1024).toFixed(2);

  estimateInfo.textContent = `预估文件大小: ${estimatedSize} MB (视频: ${targetBitrate}k + 音频: ${audioBitrateMbps}k)`;
}

targetSize.addEventListener('change', updateEstimate);
audioBitrate.addEventListener('change', updateEstimate);
framerate.addEventListener('change', updateEstimate);
resolution.addEventListener('change', updateEstimate);

compressBtn.addEventListener('click', async () => {
  if (!videoFile) return;

  compressBtn.disabled = true;
  progress.classList.remove('hidden');
  result.classList.add('hidden');

  try {
    await loadFFmpeg();
    await compressVideo();
  } catch (error) {
    alert('压缩失败: ' + error.message);
    console.error(error);
  } finally {
    compressBtn.disabled = false;
  }
});

async function loadFFmpeg() {
  if (ffmpeg) return;

  progressText.textContent = '加载 FFmpeg...';
  progressFill.style.width = '10%';

  ffmpeg = new FFmpeg();

  ffmpeg.on('log', ({ message }) => {
    console.log(message);
  });

  ffmpeg.on('progress', ({ progress: p }) => {
    const percent = Math.round(p * 100);
    progressFill.style.width = `${10 + percent * 0.9}%`;
    progressText.textContent = `压缩中... ${percent}%`;
  });

  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });
}

async function compressVideo() {
  progressText.textContent = '准备文件...';
  progressFill.style.width = '10%';

  const inputName = 'input.mp4';
  const outputName = 'output.mp4';

  await ffmpeg.writeFile(inputName, new Uint8Array(await videoFile.arrayBuffer()));

  const targetSizeMB = parseInt(targetSize.value);
  const targetBitrate = Math.floor((targetSizeMB * 8192) / 60);

  const resValue = resolution.value;
  const scaleFilter = resValue === 'auto' ? '' : `-vf scale=-2:${resValue}`;

  const args = [
    '-i', inputName,
    '-b:v', `${targetBitrate}k`,
    '-maxrate', `${targetBitrate * 1.5}k`,
    '-bufsize', `${targetBitrate * 2}k`,
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-c:a', 'aac',
    '-b:a', `${audioBitrate.value}k`,
  ];

  if (framerate.value !== 'auto') {
    args.push('-r', framerate.value);
  }

  if (scaleFilter) {
    args.push(...scaleFilter.split(' '));
  }

  args.push(outputName);

  await ffmpeg.exec(args);

  const data = await ffmpeg.readFile(outputName);
  const blob = new Blob([data.buffer], { type: 'video/mp4' });

  const originalSize = (videoFile.size / 1024 / 1024).toFixed(2);
  const compressedSize = (blob.size / 1024 / 1024).toFixed(2);
  const ratio = ((1 - blob.size / videoFile.size) * 100).toFixed(1);

  resultInfo.textContent = `原始大小: ${originalSize} MB → 压缩后: ${compressedSize} MB (减少 ${ratio}%)`;

  downloadBtn.onclick = () => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${videoFile.name}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  progress.classList.add('hidden');
  result.classList.remove('hidden');
}
