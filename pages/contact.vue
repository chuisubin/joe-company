<template>
  <div class="contact-page">
    <section class="contact-hero">
      <h1>聯絡我們</h1>
      <p>我們很樂意為您提供協助</p>
    </section>

    <div class="contact-content">
      <div class="contact-form-section">
        <h2>發送訊息</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名 *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="請輸入您的姓名"
            >
          </div>

          <div class="form-group">
            <label for="email">電子郵件 *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="請輸入您的電子郵件"
            >
          </div>

          <div class="form-group">
            <label for="phone">電話</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="請輸入您的電話"
            >
          </div>

          <div class="form-group">
            <label for="subject">主題 *</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              placeholder="請輸入訊息主題"
            >
          </div>

          <div class="form-group">
            <label for="message">訊息內容 *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              placeholder="請輸入您的訊息內容"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? '發送中...' : '發送訊息' }}
          </button>
        </form>
      </div>

      <div class="contact-info-section">
        <h2>聯絡資訊</h2>
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <h3>地址</h3>
              <p>台北市信義區信義路五段7號<br>101大樓 25樓</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <h3>電話</h3>
              <p>+886-2-1234-5678</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div class="info-content">
              <h3>電子郵件</h3>
              <p>info@joecompany.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕒</div>
            <div class="info-content">
              <h3>營業時間</h3>
              <p>週一至週五: 9:00 - 18:00<br>週六: 9:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // 模擬表單提交
  setTimeout(() => {
    alert('感謝您的訊息！我們會盡快與您聯絡。')
    
    // 重置表單
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    isSubmitting.value = false
  }, 1000)
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-hero {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
  color: white;
  border-radius: 8px;
}

.contact-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 2rem;
}

.contact-form-section,
.contact-info-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form-section h2,
.contact-info-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.info-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-content p {
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style>