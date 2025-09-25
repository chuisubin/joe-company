# Joe Company - AI 項目說明文檔

## 🎯 項目概述

這是一個使用 **Nuxt.js 4** 和 **Tailwind CSS** 建立的現代化企業網站項目。專為 忠泰健業有限公司(EVERTRUST ELECTRIC CORPORATION LIMITED) 設計，提供完整的企業形象展示和服務介紹。
這是一間工程公司，主要服務項目包含:家電銷售、冷氣機安裝、維修、洗冷氣機、小型家電安裝等。

## 🏗️ 技術架構

### 核心技術棧

- **Frontend Framework**: Nuxt.js 4 (Vue.js 3 全端框架)
- **CSS Framework**: Tailwind CSS 3.x (utility-first)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

### 項目特色

- 📱 **響應式設計** - 完美適配桌面、平板、手機
- ⚡ **SSR/SSG 支援** - 服務端渲染和靜態生成
- 🎨 **現代化 UI** - 使用 Tailwind 的 utility classes
- 🧭 **檔案式路由** - 基於目錄結構自動生成路由
- 🔧 **TypeScript** - 完整的類型安全

## 📁 項目結構說明

```
joe-company/
├── .github/                 # GitHub 配置和文檔
│   └── copilot-instructions.md
├── components/              # Vue 組件
│   ├── AppHeader.vue       # 網站標頭 (Logo,whatsapp導向)
│   └── AppFooter.vue       # 網站頁尾 (聯絡資訊、連結)
├── layouts/                # 版型組件
│   └── default.vue         # 預設版型 (Header + 內容 + Footer)
├── pages/                  # 路由頁面 (自動生成路由)
│   └──index.vue           # 首頁 - 企業介紹和服務項目
├── app/
│   └── app.vue             # 根組件
├── public/                 # 靜態資源
├── nuxt.config.ts          # Nuxt 配置
├── tailwind.config.js      # Tailwind 配置
└── tsconfig.json           # TypeScript 配置
```

## 🎨 設計系統

### 顏色方案

- **主色調**: 深藍灰 (slate-700) - 專業、穩重
- **次要色**: 藍色系 (blue-500/600) - 信任、科技
- **漸層**: 紫色到藍色 - 創新、現代
- **文字**: 深灰 (slate-700) / 中灰 (gray-600)

### 組件風格

- **卡片**: 白色背景、陰影效果、圓角設計
- **按鈕**: 圓角、hover 效果、過渡動畫
- **導航**: 水平佈局、響應式摺疊選單
- **表單**: 清晰標籤、邊框聚焦效果

## 📖 頁面功能說明

### 首頁 (`/`)

- Hero 區塊：公司標語、主要行動呼籲
- 特色介紹：專業團隊、優質服務、創新技術
- 響應式網格佈局

間

## 🔧 開發指南

### 主要指令

```bash
npm run dev      # 開發模式
npm run build    # 生產建置
npm run preview  # 預覽建置結果
```

### 編碼規範

- 使用 TypeScript 進行類型檢查
- 遵循 Vue 3 Composition API 風格
- 使用 Tailwind utility classes 而非自定義 CSS
- 組件命名使用 PascalCase
- 檔案命名使用 kebab-case

### 響應式斷點

- **sm**: 640px+ (手機橫向)
- **md**: 768px+ (平板)
- **lg**: 1024px+ (桌面)
- **xl**: 1280px+ (大螢幕)

## 🎯 AI 開發建議

當協助開發此項目時，請：

1. **保持一致性**: 使用已建立的設計系統和組件風格
2. **響應式優先**: 確保所有新功能都適配行動裝置
3. **使用 Tailwind**: 優先使用 utility classes 而非自定義 CSS
4. **類型安全**: 在 TypeScript 中定義適當的類型
5. **組件化**: 將可重用的 UI 元素抽取為組件
6. **SEO 友善**: 利用 Nuxt 的 SEO 功能設定 meta 標籤

## 📋 常見任務

- 新增頁面：在 `pages/` 目錄創建 `.vue` 文件
- 新增組件：在 `components/` 目錄創建並在需要的地方導入
- 修改樣式：使用 Tailwind classes 或在 `tailwind.config.js` 擴展
- 更新導航：修改 `components/AppHeader.vue`
- 配置路由：Nuxt 自動處理，或在 `nuxt.config.ts` 自訂

---

_此文檔幫助 AI 助手更好地理解項目結構、技術選擇和開發規範。_
