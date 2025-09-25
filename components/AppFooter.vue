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
              class="flex flex-row items-center gap-2 w-fit bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 font-medium mt-3"
            >
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
              WhatsApp
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