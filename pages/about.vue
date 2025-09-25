<template>
  <div class="about-page">
    <section class="about-hero">
      <h1>關於我們</h1>
      <p>了解 Joe Company 的故事和使命</p>
    </section>

    <section class="about-content">
      <div class="about-section">
        <h2>我們的使命</h2>
        <p>
          Joe Company 致力於為客戶提供最優質的服務和解決方案。
          我們相信透過創新和專業，能夠幫助客戶達成他們的目標。
        </p>
      </div>

      <div class="about-section">
        <h2>我們的團隊</h2>
        <p>
          我們擁有一支經驗豐富、充滿熱忱的專業團隊。
          每一位成員都致力於為客戶創造價值，提供最佳的服務體驗。
        </p>
      </div>

      <div class="about-section">
        <h2>我們的價值觀</h2>
        <ul>
          <li>誠信：以誠待人，建立信任關係</li>
          <li>專業：提供專業的服務和建議</li>
          <li>創新：持續創新，追求卓越</li>
          <li>合作：與客戶攜手合作，共創成功</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  border-radius: 8px;
}

.about-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.about-content {
  padding: 0 2rem;
}

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.about-section p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

.about-section ul {
  padding-left: 1.5rem;
}

.about-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #555;
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .about-content {
    padding: 0 1rem;
  }
}
</style>