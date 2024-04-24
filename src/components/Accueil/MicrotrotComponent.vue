<template>
    
<div id="microtrot">
<!-- Cette div contient deux div une avec une video et une autre avec un titre et description -->
<div id="microtot-texte" class="tindrr-text">
  <h2>“Yverdon-les-Bains, c'est une ville souvent sous-estimée. ” </h2>
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
  font-size: 2.6em;
  
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
  padding: 0px 80px;
  display: flex;
  height:50vh;
max-width: 55%;
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