/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // 自定義主題色
        brand: {
          blue: "#015daf", // 藍色
          yellow: "#efaf16", // 黃色
          white: "#ffffff", // 白色
          whatsapp: "#25D366", // WhatsApp 綠色
        },
      },
    },
  },
  plugins: [],
};
