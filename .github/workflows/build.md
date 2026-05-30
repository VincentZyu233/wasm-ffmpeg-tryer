# Build Instructions

This project uses GitHub Actions for automated building, deployment, and release.

## Trigger Methods

Control CI/CD behavior via **keywords in commit messages**:

| Commit Message Keyword | Build | Deploy GitHub Pages | Deploy Cloudflare Pages | Publish Release |
|----------------------|:----:|:-------------------:|:-----------------------:|:---------------:|
| `build action`       | ✅   | ❌                  | ❌                      | ❌              |
| `build release`      | ✅   | ✅                  | ✅                      | ✅              |
| Others               | ❌   | ❌                  | ❌                      | ❌              |

## Usage Examples

### Build Only

```bash
git commit -m "build action: test CI workflow"
git push
```

**Result**: Triggers build, generates dist artifacts, no deployment or release.

### Build and Release

```bash
git commit -m "build release: v0.1.0 add video compression feature"
git push
```

**Result**:
1. ✅ Build project
2. ✅ Deploy to GitHub Pages
3. ✅ Create GitHub Release (includes zip archive)

## Workflow

```
check ──→ build ──→ deploy (GitHub Pages)
                  └──→ release (GitHub Release)
```

### 1. check Job

- Parse commit message
- Extract version number (from package.json)
- Output control flags (should_build, should_release)

### 2. build Job

- Install dependencies (npm ci)
- Build project (npm run build)
- Upload dist artifacts

## Deployment

### GitHub Pages

- **Auto-deploy**: Deploys automatically on every `build release`
- **URL**: `https://VincentZyuApps.github.io/wasm-ffmpeg-tryer/`
- **No additional configuration needed**

### Cloudflare Pages

Requires one-time manual setup, then auto-deploys.

#### Prerequisites (First Time)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
2. Click **Create application** → **Pages** tab
3. Select **Upload assets** → **Get started** → **Drag and drop files** (Direct Upload mode)
4. Project name: `wasm-ffmpeg-tryer`
5. Drag and drop a temporary `index.html` file to initialize
6. In the GitHub repository, go to **Settings → Secrets and variables → Actions → Repository secrets** and add:

| Secret Name | Description | How to Get |
|------------|-------------|-----------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | [🔗 API Tokens Management](https://dash.cloudflare.com/profile/api-tokens)<br><br>**Steps:**<br>1. Click **Create Token**<br>2. Template: **Edit Cloudflare Workers**<br>3. **Permissions** must include:<br>   - `Account` - `Cloudflare Pages` - `Edit` (required)<br>   - `Zone` - `Workers Routes` - `Edit`<br>   - `Account` - `Workers Scripts` - `Edit`<br>   - `Account` - `Workers KV Storage` - `Edit`<br>4. **Account Resources**: Select `Include` → `Your account name`<br>5. **Zone Resources**: Select `Include` → `All zones`<br>6. Click **Continue to summary** and generate token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | [🔗 Open this link](https://dash.cloudflare.com/)<br><br>Your browser will redirect to `https://dash.cloudflare.com/<account-id>/home/overview`<br>The alphanumeric string in the URL is your **Account ID** |

#### Auto-deploy

Once configured, it will automatically deploy to Cloudflare Pages on every `build release`.

**URL**: `https://wasm-ffmpeg-tryer.pages.dev/`

### 4. release Job

- Download build artifacts
- Package into zip (`wasm-ffmpeg-tryer-v0.1.0.zip`)
- Create GitHub Release
- Attach download link and usage instructions

## Version Management

Version is maintained in `package.json`:

```json
{
  "version": "0.1.0"
}
```

CI automatically reads it and generates the corresponding Release tag (e.g., `v0.1.0`).

## Notes

- PRs automatically trigger build tests, but will not deploy or release
- Only pushes to the `main` branch trigger deployment and release
- Releases automatically overwrite old releases with the same version (force refresh)
