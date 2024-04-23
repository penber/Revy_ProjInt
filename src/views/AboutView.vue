<template>
  <section class="revy-section">
    <h1>Qui sommes-nous</h1>
    <p>
      Revy est une agence dédiée à la mise en valeur de la ville du bien-être, Yverdon-les-Bains. </p>
      
    <br> 
    
    <p>Nous croyons au potentiel unique de cette ville et travaillons à promouvoir ses qualités uniques.
    </p>
    <div class="content-container">
      
      <div class="content-box" v-for="box in 3" :key="box"></div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'AboutUs',
 
}


 </script>

<style>
.revy-section {
  text-align: center;
  font-family: 'Arial', sans-serif; 
  color: #333; 
  max-width: 800px; 
  margin: auto; /* Centrage du contenu */
}

.revy-section h1 {
  margin-bottom: 2rem; /* Espacement sous le titre */
}

.revy-section p {
  margin-bottom: 3rem;
}

.content-container {
  display: flex;
  justify-content: space-between; /* Espacement égal entre les conteneurs */
}

.content-box {
  width: 30%; 
  height: 280px;
  background-color: #f0f0f0; 
  transition: all 0.3s ease;
}

.content-box:hover {
  background-color: #e0e0e0; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
}
</style>

