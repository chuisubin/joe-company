<template>
  <div class="services-page">
    <section class="services-hero">
      <h1>我們的服務</h1>
      <p>提供全方位的專業服務解決方案</p>
    </section>

    <section class="services-grid">
      <div class="service-card">
        <div class="service-icon">💻</div>
        <h3>網站開發</h3>
        <p>專業的網站設計和開發服務，包含響應式設計和現代化技術。</p>
        <ul>
          <li>響應式網頁設計</li>
          <li>電子商務平台</li>
          <li>內容管理系統</li>
          <li>SEO 優化</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="service-icon">📱</div>
        <h3>行動應用開發</h3>
        <p>為iOS和Android平台開發高品質的行動應用程式。</p>
        <ul>
          <li>原生應用開發</li>
          <li>跨平台解決方案</li>
          <li>使用者體驗設計</li>
          <li>應用程式維護</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="service-icon">☁️</div>
        <h3>雲端服務</h3>
        <p>協助企業遷移到雲端，提供可擴展的雲端解決方案。</p>
        <ul>
          <li>雲端遷移</li>
          <li>架構設計</li>
          <li>自動化部署</li>
          <li>監控與維護</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="service-icon">🔧</div>
        <h3>技術諮詢</h3>
        <p>提供專業的技術諮詢服務，幫助您做出最佳的技術決策。</p>
        <ul>
          <li>技術評估</li>
          <li>架構規劃</li>
          <li>團隊培訓</li>
          <li>專案管理</li>
        </ul>
      </div>
    </section>

    <section class="cta-section">
      <h2>準備開始您的專案嗎？</h2>
      <p>聯絡我們，讓我們為您提供最適合的解決方案。</p>
      <NuxtLink to="/contact" class="btn btn-primary">聯絡我們</NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  max-width: 1200px;
  margin: 0 auto;
}

.services-hero {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  color: white;
  border-radius: 8px;
}

.services-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.services-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  text-align: center;
}

.service-card p {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-card ul {
  list-style: none;
  padding: 0;
}

.service-card li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.service-card li::before {
  content: '✓';
  color: #27ae60;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.cta-section {
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.cta-section p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .services-hero h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>