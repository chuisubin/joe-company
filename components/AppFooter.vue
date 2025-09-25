<template>
  <footer class="bg-slate-600 text-white mt-auto">
    <div class="max-w-6xl mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-gray-100">Joe Company</h3>
          <p class="leading-relaxed">提供優質的服務和解決方案</p>
        </div>
        <div>
          <h4 class="text-lg font-medium mb-4 text-gray-100">快速連結</h4>
          <ul class="list-none p-0 m-0 space-y-2">
            <li>
              <NuxtLink 
                to="/" 
                class="text-gray-300 no-underline transition-colors duration-300 hover:text-gray-100"
              >
                首頁
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="text-gray-300 no-underline transition-colors duration-300 hover:text-gray-100"
              >
                關於我們
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/services" 
                class="text-gray-300 no-underline transition-colors duration-300 hover:text-gray-100"
              >
                服務項目
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/contact" 
                class="text-gray-300 no-underline transition-colors duration-300 hover:text-gray-100"
              >
                聯絡我們
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-medium mb-4 text-gray-100">聯絡資訊</h4>
          <div class="space-y-2">
            <p class="leading-relaxed">電話: +886-2-1234-5678</p>
            <p class="leading-relaxed">Email: info@joecompany.com</p>
            <p class="leading-relaxed">地址: 台北市信義區信義路五段7號</p>
          </div>
        </div>
      </div>
      <div class="border-t border-slate-700 pt-4 text-center">
        <p class="text-gray-400 m-0">&copy; {{ currentYear }} Joe Company. 版權所有.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>