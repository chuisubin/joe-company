<template>
  <div class="max-w-6xl mx-auto">
    <section class="text-center py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg mb-16">
      <h1 class="text-5xl font-bold mb-4">歡迎來到 Joe Company</h1>
      <p class="text-xl mb-8 opacity-90">我們提供專業的解決方案和優質服務</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink 
          to="/services" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          了解服務
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="bg-transparent hover:bg-white hover:text-purple-600 text-white border-2 border-white px-6 py-3 rounded-md font-semibold no-underline transition-all duration-300"
        >
          聯絡我們
        </NuxtLink>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-center text-4xl font-bold mb-12 text-slate-700">我們的特色</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 class="text-2xl font-semibold mb-4 text-slate-700">專業團隊</h3>
          <p class="text-gray-600 leading-relaxed">擁有豐富經驗的專業團隊為您提供最佳解決方案</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 class="text-2xl font-semibold mb-4 text-slate-700">優質服務</h3>
          <p class="text-gray-600 leading-relaxed">致力於提供高品質的服務和客戶支援</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 class="text-2xl font-semibold mb-4 text-slate-700">創新技術</h3>
          <p class="text-gray-600 leading-relaxed">採用最新的技術和工具來滿足客戶需求</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page
</script>