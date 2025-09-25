<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 p-5">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>