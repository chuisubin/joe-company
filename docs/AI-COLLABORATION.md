# AI 協作指南 - Joe Company 項目

## 🤖 AI 助手協作說明

這個文檔專門為 AI 助手 (如 GitHub Copilot, Claude, ChatGPT 等) 提供項目協作指導。

## 🎯 項目背景與目標

### 項目性質

- **企業官網**: Joe Company 的官方網站
- **技術展示**: 現代化 Web 開發技術的實際應用
- **用戶體驗**: 提供優質的企業形象和服務展示

### 目標用戶

- **潛在客戶**: 尋找技術服務的企業
- **合作夥伴**: 希望了解公司能力的合作方

## 🏗️ 代碼風格與約定

### Vue.js / Nuxt.js 約定

```vue
<!-- ✅ 好的做法 -->
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-slate-700">
      {{ pageTitle }}
    </h1>
  </div>
</template>

<script setup lang="ts">
// 使用 Composition API
const pageTitle = ref("歡迎來到 Joe Company");

// 型別定義
interface ServiceItem {
  id: number;
  title: string;
  description: string;
}
</script>
```

### Tailwind CSS 使用原則

```html
<!-- ✅ 優先使用 utility classes -->
<button
  class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
>
  聯絡我們
</button>

<!-- ❌ 避免內聯樣式 -->
<button style="background: blue; padding: 12px;">聯絡我們</button>
```

## 🎨 設計指導原則

### 視覺層次

1. **主標題**: `text-3xl` 或 `text-4xl`, `font-bold`
2. **副標題**: `text-xl` 或 `text-2xl`, `font-semibold`
3. **內文**: `text-base`, 預設字重
4. **輔助文字**: `text-sm`, `text-gray-600`

### 色彩使用

```css
/* 主色系 - 專業穩重 */
bg-slate-700    /* 深藍灰 - Header 背景 */
bg-slate-600    /* 中藍灰 - Footer 背景 */
text-slate-700  /* 深色文字 */

/* 強調色系 - 行動召喚 */
bg-blue-500     /* 主要按鈕 */
bg-blue-600     /* 按鈕 hover */

/* 漸層效果 */
bg-gradient-to-br from-indigo-500 to-purple-600  /* Hero 區塊 */
```

### 間距規則

- **容器寬度**: `max-w-6xl mx-auto` (1152px 最大寬度)
- **內容間距**: `p-8` 或 `px-8 py-16`
- **組件間距**: `mb-8` 或 `space-y-8`
- **文字行高**: `leading-relaxed` (1.625)

## 📱 響應式開發要求

### 必須支援的斷點

```css
/* 行動優先設計 */
默認: 320px+ (手機直向)
sm:  640px+ (手機橫向)
md:  768px+ (平板)
lg:  1024px+ (桌面)
xl:  1280px+ (大螢幕)
```

### 響應式模式範例

```vue
<template>
  <!-- 響應式網格 -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="feature-card">...</div>
  </div>

  <!-- 響應式文字 -->
  <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">標題文字</h1>

  <!-- 響應式間距 -->
  <section class="py-8 md:py-16">內容區塊</section>
</template>
```

## 🧩 組件開發規範

### 組件命名

- **檔案名**: PascalCase (如 `ServiceCard.vue`)
- **組件名**: PascalCase (如 `<ServiceCard />`)
- **Props**: camelCase (如 `serviceTitle`)

### Props 定義

```vue
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isHighlighted: false,
});
</script>
```

### 組件結構範本

```vue
<template>
  <div class="component-container">
    <!-- 組件內容 -->
  </div>
</template>

<script setup lang="ts">
// 1. 導入
import { ref, computed } from "vue";

// 2. Props 定義
interface Props {
  // props 定義
}

// 3. 響應式資料
const localState = ref("");

// 4. 計算屬性
const computedValue = computed(() => {
  return localState.value.toUpperCase();
});

// 5. 方法
const handleClick = () => {
  // 處理邏輯
};
</script>

<style scoped>
/* 必要時的自定義樣式 */
</style>
```

## 📄 頁面開發指引

### 頁面結構標準

```vue
<template>
  <div class="max-w-6xl mx-auto">
    <!-- Hero 區塊 -->
    <section
      class="text-center py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg mb-16"
    >
      <h1 class="text-5xl font-bold mb-4">頁面標題</h1>
      <p class="text-xl mb-8 opacity-90">頁面描述</p>
    </section>

    <!-- 內容區塊 -->
    <section class="mb-16">
      <h2 class="text-center text-4xl font-bold mb-12 text-slate-700">
        區塊標題
      </h2>
      <!-- 內容 -->
    </section>
  </div>
</template>
```

### SEO 最佳實踐

```vue
<script setup lang="ts">
// 設定頁面 meta 資訊
useHead({
  title: "頁面標題 - Joe Company",
  meta: [{ name: "description", content: "頁面描述，簡潔說明頁面內容..." }],
});
</script>
```

## 🔧 開發工具配置建議

### VS Code 擴展

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Bracket Pair Colorizer

### 代碼格式化

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  }
}
```

## 🚨 常見問題解決

### Tailwind 樣式不生效

1. 檢查 `tailwind.config.js` 的 content 設定
2. 確認 `@nuxtjs/tailwindcss` 模組已正確載入
3. 重啟開發服務器

### TypeScript 類型錯誤

1. 檢查 `tsconfig.json` 配置
2. 確保 `.vue` 文件正確定義 Props interface
3. 使用 `npm run postinstall` 重新生成類型

### 路由問題

1. 確認文件位於正確的 `pages/` 目錄
2. 檢查文件命名是否符合 Nuxt 路由規則
3. 重啟開發服務器讓路由生效

## 📝 AI 助手特別提醒

### 在協助開發時請注意：

1. **保持設計一致性** - 使用既定的色彩和間距系統
2. **優先考慮響應式** - 所有新組件都要支援行動裝置
3. **遵循 TypeScript** - 為 props 和函數提供正確的類型定義
4. **使用 Tailwind** - 避免編寫自定義 CSS，優先使用 utility classes
5. **注意 SEO** - 為新頁面添加適當的 meta 標籤和語意化標籤

### 建議的協助方式：

- 提供完整的代碼範例而不是片段
- 解釋技術選擇的原因
- 指出潛在的性能或可用性問題
- 建議最佳實踐和優化方案

---

_此指南幫助 AI 助手更好地理解項目約定，提供更準確和一致的協助。_
