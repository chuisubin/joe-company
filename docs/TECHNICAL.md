# 技術文檔 - Joe Company 項目

## 🔧 架構決策記錄 (Architecture Decision Records)

### ADR-001: 選擇 Nuxt.js 4 作為前端框架

**決策**: 使用 Nuxt.js 4 作為主要前端框架

**理由**:

- 提供 SSR/SSG 能力，有利於 SEO
- 基於 Vue.js 3，開發體驗優秀
- 內建路由、狀態管理、構建優化
- 強大的模組生態系統
- 支援 TypeScript 開箱即用

### ADR-002: 採用 Tailwind CSS 作為 CSS 框架

**決策**: 使用 Tailwind CSS 處理樣式

**理由**:

- Utility-first 方法提高開發效率
- 內建響應式設計支援
- 優秀的瀏覽器支援和性能
- 易於維護和擴展
- 與 Nuxt.js 整合良好

## 🏗️ 組件設計原則

### Header 組件 (`AppHeader.vue`)

- **職責**: 網站導航、品牌展示、行動選單
- **狀態管理**: 使用 Vue 3 reactive state 管理行動選單開關
- **響應式**: 大螢幕顯示完整選單，小螢幕顯示漢堡選單
- **樣式**: 使用 Tailwind 的 `bg-slate-700` 主題色

### Footer 組件 (`AppFooter.vue`)

- **職責**: 頁尾資訊、快速連結、聯絡資訊
- **布局**: CSS Grid 三欄布局，響應式自適應
- **內容**: 公司簡介、導航連結、聯絡方式

### Layout 系統

- **default.vue**: 標準頁面布局 (Header + Main + Footer)
- **Flexbox 布局**: 確保 footer 固定在底部
- **插槽機制**: 使用 `<slot />` 插入頁面內容

## 📱 響應式設計策略

### 斷點使用

```css
/* Tailwind 斷點 */
sm: 640px   /* 小型設備 */
md: 768px   /* 平板設備 */
lg: 1024px  /* 桌面設備 */
xl: 1280px  /* 大螢幕設備 */
```

### 組件響應式模式

- **Header**:
  - 桌面: 水平導航列
  - 行動: 漢堡選單 + 下拉選單
- **內容區**:
  - 桌面: 多欄網格佈局
  - 行動: 單欄堆疊佈局

## 🎨 設計令牌 (Design Tokens)

### 顏色系統

```javascript
// 主要顏色
primary: {
  50: '#f8fafc',   // 最淺
  700: '#334155',  // 主色 (Header背景)
  900: '#0f172a'   // 最深
}

// 功能性顏色
blue: {
  500: '#3b82f6', // 主要按鈕
  600: '#2563eb'  // 按鈕 hover
}

// 中性色
gray: {
  600: '#4b5563', // 次要文字
  300: '#d1d5db'  // 邊框
}
```

### 間距系統

```javascript
// Tailwind 間距 (基於 0.25rem = 4px)
1: '0.25rem',  // 4px
2: '0.5rem',   // 8px
4: '1rem',     // 16px
8: '2rem',     // 32px
16: '4rem'     // 64px
```

## 🔄 狀態管理

### 組件內狀態

- 使用 Vue 3 `ref()` 和 `reactive()` 管理局部狀態
- 表單狀態使用 `reactive()` 物件
- 簡單的 boolean 狀態使用 `ref()`

### 全域狀態

- 目前項目規模不需要 Vuex/Pinia
- 如需擴展可考慮 Nuxt 內建的狀態管理

## 📊 性能優化

### 圖片優化

- 使用 Nuxt 的 `<NuxtImg>` 組件 (如需要)
- 支援 WebP 格式
- 懶加載和響應式圖片

### CSS 優化

- Tailwind 的 purge 功能移除未使用的 CSS
- CSS-in-JS 組件級作用域
- 關鍵 CSS 內聯

### JavaScript 優化

- Vite 的 tree-shaking
- 動態導入分包
- Vue 3 的 Composition API 更好的 tree-shaking

## 🧪 測試策略

### 建議的測試結構

```
tests/
├── unit/           # 單元測試
│   ├── components/ # 組件測試
│   └── utils/      # 工具函數測試
├── integration/    # 整合測試
└── e2e/           # 端到端測試
```

### 測試工具建議

- **單元測試**: Vitest + Vue Test Utils
- **E2E 測試**: Playwright
- **組件測試**: @vue/test-utils

## 🚀 部署配置

### 靜態生成 (SSG)

```bash
npm run generate  # 生成靜態網站
```

### 服務端渲染 (SSR)

```bash
npm run build     # 構建 SSR 應用
npm run preview   # 預覽生產版本
```

### 環境變量

```bash
# .env
NUXT_PUBLIC_API_URL=https://api.joecompany.com
NUXT_SECRET_KEY=your-secret-key
```

## 📋 維護檢查清單

### 定期檢查

- [ ] 依賴套件更新
- [ ] 安全性掃描
- [ ] 性能監控
- [ ] SEO 優化檢查
- [ ] 無障礙性測試

### 代碼品質

- [ ] TypeScript 類型檢查
- [ ] ESLint 規則遵循
- [ ] 組件複用性審查
- [ ] CSS 類別使用優化

---

_此文檔記錄項目的技術決策和實作細節，幫助團隊成員和 AI 助手理解項目的技術架構。_
