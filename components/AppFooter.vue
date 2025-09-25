<template>
  <footer class="bg-brand-blue text-white mt-auto">
    <div class="max-w-6xl mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-white">忠泰健業有限公司</h3>
          <p class="leading-relaxed text-gray-100 opacity-90">專業家電服務，值得信賴的選擇</p>
        </div>
        <div>
          <h4 class="text-lg font-medium mb-4 text-white">服務項目</h4>
          <ul class="list-none p-0 m-0 space-y-2">
            <li class="text-gray-100 opacity-90">• 家電銷售</li>
            <li class="text-gray-100 opacity-90">• 冷氣機安裝</li>
            <li class="text-gray-100 opacity-90">• 維修服務</li>
            <li class="text-gray-100 opacity-90">• 洗冷氣機</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-medium mb-4 text-white">聯絡資訊</h4>
          <div class="space-y-2">
            <p class="leading-relaxed text-gray-100 opacity-90">電話: +852-1234-5678</p>
            <p class="leading-relaxed text-gray-100 opacity-90">Email: info@evertrust.com.hk</p>
            <a 
              href="https://wa.me/85212345678"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-brand-yellow text-brand-blue px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-brand-blue transition-all duration-300 font-medium mt-3"
            >
              WhatsApp 聯絡
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/20 pt-4 text-center">
        <p class="text-gray-100 opacity-75 m-0">&copy; {{ currentYear }} 忠泰健業有限公司. 版權所有.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>