<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// SEO Meta 設定
useHead({
  titleTemplate: '%s - 忠泰健業有限公司',
  meta: [
    {
      name: 'description',
      content: '忠泰健業有限公司 - 專業家電服務，提供家電銷售、冷氣機安裝、維修服務、洗冷氣機等服務。值得信賴的選擇。'
    },
    {
      name: 'keywords',
      content: '家電銷售,冷氣機安裝,家電維修,洗冷氣機,忠泰健業,EVERTRUST ELECTRIC'
    },
    {
      name: 'author',
      content: '忠泰健業有限公司'
    },
    // Open Graph Meta Tags
    {
      property: 'og:title',
      content: '忠泰健業有限公司 - 專業家電服務'
    },
    {
      property: 'og:description',
      content: '專業家電服務，提供家電銷售、冷氣機安裝、維修服務、洗冷氣機等服務。值得信賴的選擇。'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    },
    {
      property: 'og:image:alt',
      content: '忠泰健業有限公司 Logo'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: '忠泰健業有限公司'
    },
    // Twitter Card Meta Tags
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: '忠泰健業有限公司 - 專業家電服務'
    },
    {
      name: 'twitter:description',
      content: '專業家電服務，提供家電銷售、冷氣機安裝、維修服務、洗冷氣機等服務。'
    },
    {
      name: 'twitter:image',
      content: '/logo.png'
    },
    {
      name: 'twitter:image:alt',
      content: '忠泰健業有限公司 Logo'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.png'
    }
  ]
})

// 預設標題
useSeoMeta({
  title: '首頁'
})
</script>