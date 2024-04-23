<template>
    
<div id="microtrot">
<!-- Cette div contient deux div une avec une video et une autre avec un titre et description -->
<div id="microtot-texte" class="tindrr-text">
  <h2>"Yverdon-les-bain c'est...?" </h2>
  <p>
    Notre mission est de promouvoir la ville d'Yverdon-les-Bains en tant que destination de bien-être. Nous croyons que cette ville a un potentiel unique et nous travaillons à mettre en valeur ses qualités uniques.
  </p>

</div>


<div id="microtot-img">
  <img src="@/assets/Accueil/lac.jpeg" alt="ligne de trajet">¨
</div>

</div>



</template>



<script>

export default {
  name: 'MicrotrotComponent',
 
}

</script>



<style scoped>



#microtrot {
  display: flex;
  flex-direction: column; /* En colonne pour mobile */
  align-items: center;
  max-width: 100%;
  margin: 0px auto;
}



#microtrot h2 {
  color: #012142; /* Couleur bleue pour le titre */
  margin:0px;
  padding: 0;
  
}

#microtrot p {
  color: #333; /* Couleur sombre pour le texte */
  font-size: 1.1rem;
  max-width: 800px;
  text-align: center;
  padding: 0;
}

#microtot-texte {
  order: 2; 
  padding-left: 80px;
  display: flex;
  height:50vh;

  flex-direction: column;
  justify-content: center;
  z-index: 1;

  background-image: url('@/assets/Accueil/lignetrajetmicrotrot.png');
  background-position: bottom right;
  background-repeat: no-repeat;

}


#microtot-img {

  order: 1; 
  width: 100%; 
  text-align: center;
}

#microtot-img img {
  max-width: 100%;
  height: auto; 
}

@media (min-width: 768px) {
  #microtrot {
    flex-direction: row; 
    justify-content: space-around;
    align-items: center;
  }

  #microtot-texte, #microtot-img {
    flex: 1; 
  }

  #microtrot p {
    text-align: left; 
  }
}


</style>