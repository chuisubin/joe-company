<template>
  <div class="bg-white">
    <!-- Hero 區塊 -->
    <HeroSection />

    <!-- 服務特色區塊 -->
    <ServicesSection />

    <!-- 為什麼選擇我們區塊 -->
    <FeaturesSection />

    <!-- 聯絡我們區塊 -->
    <ContactSection />
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