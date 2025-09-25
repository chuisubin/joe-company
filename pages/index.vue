<template>
  <div class="bg-white">
    <!-- Hero 區塊 -->
    <section class="bg-brand-blue min-h-screen flex items-center">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          忠泰健業有限公司
        </h1>
        <p class="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
          專業家電服務 · 值得信賴的選擇
        </p>
        <div class="space-x-4">
          <button class="bg-brand-yellow text-brand-blue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            立即諮詢
          </button>
          <button class="bg-white/80 hover:bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-semibold border-2 border-brand-yellow transition-all duration-300">
            了解更多
          </button>
        </div>
      </div>
    </section>

    <!-- 服務特色區塊 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-brand-blue mb-16">
          我們的專業服務
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 家電銷售 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-yellow">
            <div class="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-4 text-center">家電銷售</h3>
            <p class="text-gray-600 text-center">提供各種優質家電產品，品質保證，價格實惠</p>
          </div>

          <!-- 冷氣機安裝 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-blue">
            <div class="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-4 text-center">冷氣機安裝</h3>
            <p class="text-gray-600 text-center">專業冷氣安裝服務，確保最佳效能與安全</p>
          </div>

          <!-- 維修服務 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-yellow">
            <div class="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-4 text-center">維修服務</h3>
            <p class="text-gray-600 text-center">快速診斷與修復，延長家電使用壽命</p>
          </div>

          <!-- 洗冷氣機 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-brand-blue">
            <div class="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-4 text-center">洗冷氣機</h3>
            <p class="text-gray-600 text-center">定期清潔保養，保持空氣品質與效能</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 為什麼選擇我們區塊 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-brand-blue mb-16">
            為什麼選擇我們？
          </h2>
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="p-6">
              <div class="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                <span class="text-2xl font-bold text-brand-blue">專</span>
              </div>
              <h3 class="text-xl font-bold text-brand-blue mb-4">專業團隊</h3>
              <p class="text-gray-600">擁有豐富經驗的專業技師團隊，提供最可靠的服務</p>
            </div>
            <div class="p-6">
              <div class="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <span class="text-2xl font-bold text-white">優</span>
              </div>
              <h3 class="text-xl font-bold text-brand-blue mb-4">優質服務</h3>
              <p class="text-gray-600">客戶滿意度第一，提供超出期待的優質服務體驗</p>
            </div>
            <div class="p-6">
              <div class="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                <span class="text-2xl font-bold text-brand-blue">快</span>
              </div>
              <h3 class="text-xl font-bold text-brand-blue mb-4">快速回應</h3>
              <p class="text-gray-600">24小時快速回應，緊急情況立即處理</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡我們區塊 -->
    <section class="py-20 bg-brand-blue">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-8">
          立即聯絡我們
        </h2>
        <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          有任何家電相關問題或需求嗎？我們的專業團隊隨時為您服務
        </p>
        <div class="space-x-4">
          <button class="bg-brand-yellow text-brand-blue px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
            聯絡我們
          </button>
          <button class="border-2 border-brand-yellow text-brand-yellow px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300">
            獲取報價
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 首頁 SEO 設定
useSeoMeta({
  title: '專業家電服務',
  description: '忠泰健業有限公司提供專業家電銷售、冷氣機安裝、維修服務、洗冷氣機等服務。擁有豐富經驗的專業技師團隊，24小時快速回應，值得信賴的選擇。',
  ogTitle: '忠泰健業有限公司 - 專業家電服務',
  ogDescription: '專業家電銷售、冷氣機安裝、維修服務、洗冷氣機。擁有豐富經驗的專業技師團隊，提供最可靠的服務。',
  ogImage: '/logo.png',
  ogUrl: '/',
  twitterTitle: '忠泰健業有限公司 - 專業家電服務',
  twitterDescription: '專業家電銷售、冷氣機安裝、維修服務、洗冷氣機。24小時快速回應，值得信賴的選擇。',
  twitterImage: '/logo.png'
})
</script>