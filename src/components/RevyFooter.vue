<template>
    <footer class="footer">
  <div class="footer-section">
    <h1 class="footer-logo">revy</h1>
    <p class="footer-description">
      Découvrez toutes les activités de Yverdon-les-Bains ! Que vous cherchiez des musées, des restaurants, des événements culturels ou des activités de plein air, notre site est là pour vous guider et vous permettre de profiter pleinement de tout ce que notre ville a à offrir.
    </p>
  </div>
  <div class="footer-section">
    <h4>YverMatchmaking</h4>
    <ul class="footer-links">
      <li>Test</li>
    </ul>
  </div>
  <div class="footer-section">
    <h4>Bien y vivre</h4>
    <ul class="footer-links">
      <li>Carte</li>
    </ul>
  </div>
  <div class="footer-section">
    <h4>Rester en contact</h4>
    <div class="social-media">
      <img src="../assets/Icons/Group 85.svg">
      <img src="../assets/Icons/Group 86.svg">
      <img src="../assets/Icons/Group 87.svg">
      <img src="../assets/Icons/Group 88.svg">
    </div>
  </div>
  <div class="footer-bottom">
    ©2024 Revy - All rights reserved
  </div>
</footer>

</template>


<script>
export default {
  name: 'RevyFooter',

}
</script>


<style scoped>


.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  padding: 40px;
}

.footer-section {
  flex-basis: 20%;
}

.footer-logo {
  font-size: 2em;
  font-weight: bold;
  margin-top:0px;
}

.footer-description {
  font-size: 0.7em;
  text-align: justify;
}

.footer-links {
  list-style: none;
  padding-left: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.social-media {
  display: flex;
  font-size: 2em;
  justify-content: space-around;
}

.social-media span {
  margin-right: 10px;
}

.footer-bottom {
  flex-basis: 100%;
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #fff;
  padding-top: 20px;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    flex-basis: 100%;
    margin-bottom: 20px;
  }

  .footer-bottom {
    margin-top: 40px;
  }
}

</style>