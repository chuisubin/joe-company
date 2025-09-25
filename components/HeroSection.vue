<template>
  <section class="bg-brand-blue min-h-screen flex items-center  ">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        忠泰健業有限公司
      </h1>
      <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
        專業家電服務 · 值得信賴的選擇
      </p>
      <div class="space-x-4">
        <button 
          class="bg-brand-yellow text-brand-blue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          @click="handleConsultation"
        >
          立即諮詢
        </button>
        <button 
          class="bg-white/80 hover:bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-semibold border-2 border-brand-yellow transition-all duration-300"
          @click="handleLearnMore"
        >
          了解更多
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 處理按鈕點擊事件
const handleConsultation = () => {
  // 可以添加諮詢邏輯，比如跳轉到 WhatsApp 或聯絡表單
  window.open('https://wa.me/85212345678', '_blank')
}

const handleLearnMore = () => {
  // 可以添加滾動到服務介紹區域的邏輯
  const servicesSection = document.querySelector('#services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Hero Section 專用樣式 */
.hero-gradient {
  background: linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue) 100%);
}

/* 按鈕 hover 效果增強 */
button {
  transform: translateY(0);
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
}

/* 響應式文字調整 */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.125rem;
  }
}
</style>