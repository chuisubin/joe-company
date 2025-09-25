<template>
  <section class="py-20 bg-brand-blue">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-white mb-8">
        立即聯絡我們
      </h2>
      <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
        有任何家電相關問題或需求嗎？我們的專業團隊隨時為您服務
      </p>
      <div class="space-x-4">
        <button 
          @click="openWhatsApp"
          class="bg-brand-yellow text-brand-blue px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:transform hover:-translate-y-1"
        >
          聯絡我們
        </button>
        <button 
          @click="openWhatsApp"
          class="border-2 border-brand-yellow text-brand-yellow px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 hover:transform hover:-translate-y-1"
        >
          獲取報價
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 聯絡我們組件
const openWhatsApp = () => {
  window.open('https://wa.me/85212345678', '_blank')
}
</script>

<style scoped>
button:hover {
  transform: translateY(-2px);
}
</style>