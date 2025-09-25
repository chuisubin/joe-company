# Joe Company - Nuxt.js 項目

一個使用 Nuxt.js 4 和 Tailwind CSS 建立的現代化企業網站。

## ✨ 功能特色

- 🎨 **Tailwind CSS** - 現代化的 utility-first CSS 框架
- ⚡ **Nuxt.js 4** - 最新版本的全端 Vue.js 框架
- 📱 **響應式設計** - 完美適配桌面和行動裝置
- 🧭 **檔案式路由** - 基於資料夾結構的自動路由
- 🎭 **Layout 系統** - 統一的頁面版型和導航
- 🔧 **TypeScript 支援** - 完整的類型安全

## 🏗️ 項目結構

```
joe-company/
├── components/          # 可重用組件
│   ├── AppHeader.vue   # 網站標頭
│   └── AppFooter.vue   # 網站頁尾
├── layouts/            # 頁面版型
│   └── default.vue     # 預設版型
├── pages/              # 路由頁面
│   ├── index.vue       # 首頁
│   ├── about.vue       # 關於我們
│   ├── services.vue    # 服務項目
│   └── contact.vue     # 聯絡我們
├── app/
│   └── app.vue         # 根組件
└── nuxt.config.ts      # Nuxt 配置文件
```

## 🚀 開始使用

### 安裝依賴

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 開發伺服器

在 `http://localhost:3000` 啟動開發伺服器：

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### 生產環境建置

建置應用程式以供生產使用：

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### 預覽生產版本

本地預覽生產版本：

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 🎨 技術棧

- **Nuxt.js 4** - Vue.js 全端框架
- **Vue 3** - 漸進式 JavaScript 框架
- **Tailwind CSS** - Utility-first CSS 框架
- **TypeScript** - JavaScript 的超集
- **Vite** - 快速的前端建置工具

## 📄 頁面說明

- **首頁** (`/`) - 企業介紹和主要特色
- **關於我們** (`/about`) - 公司使命、團隊和價值觀
- **服務項目** (`/services`) - 提供的服務詳細介紹
- **聯絡我們** (`/contact`) - 聯絡表單和公司資訊

## 🔧 自訂配置

### Tailwind CSS

在 `tailwind.config.js` 中自訂您的設計系統：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // 自訂顏色
      },
      fontFamily: {
        // 自訂字體
      }
    }
  }
}
```

### Nuxt 配置

在 `nuxt.config.ts` 中調整 Nuxt 設定。

## 📚 了解更多

- [Nuxt.js 文檔](https://nuxt.com/docs/getting-started/introduction)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Vue 3 文檔](https://vuejs.org/)

## 📝 授權

此項目採用 MIT 授權。

---

由 **Joe Company** 開發 ❤️
