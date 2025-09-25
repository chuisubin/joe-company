<template>
  <header class="bg-slate-700 text-white py-4 shadow-md">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-8">
      <div class="logo">
        <NuxtLink to="/" class="text-white no-underline">
          <h1 class="text-2xl font-bold m-0">Joe Company</h1>
        </NuxtLink>
      </div>
      <ul class="hidden md:flex list-none m-0 p-0 space-x-8">
        <li>
          <NuxtLink 
            to="/" 
            class="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-600 active:bg-slate-600"
          >
            首頁
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            class="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-600 active:bg-slate-600"
          >
            關於我們
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/services" 
            class="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-600 active:bg-slate-600"
          >
            服務項目
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/contact" 
            class="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-600 active:bg-slate-600"
          >
            聯絡我們
          </NuxtLink>
        </li>
      </ul>
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button 
          @click="toggleMobileMenu"
          class="text-white p-2 rounded hover:bg-slate-600 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-slate-600 px-8 py-4">
      <ul class="list-none m-0 p-0 space-y-2">
        <li>
          <NuxtLink 
            to="/" 
            class="block text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-500"
            @click="closeMobileMenu"
          >
            首頁
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            class="block text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-500"
            @click="closeMobileMenu"
          >
            關於我們
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/services" 
            class="block text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-500"
            @click="closeMobileMenu"
          >
            服務項目
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/contact" 
            class="block text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-slate-500"
            @click="closeMobileMenu"
          >
            聯絡我們
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* Custom active link styling */
:deep(.router-link-active) {
  background-color: rgb(71 85 105) !important; /* slate-600 */
}
</style>