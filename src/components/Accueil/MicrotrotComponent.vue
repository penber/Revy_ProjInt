<template>
    
<div id="microtrot">
<!-- Cette div contient deux div une avec une video et une autre avec un titre et description -->
<div id="microtot-texte" class="tindrr-text">
  <h2>“Yverdon-les-Bains, c'est une ville souvent sous-estimée. ” </h2>
</div>


<div id="microtot-img">
  <!-- une video-->

  <video width="320" height="240" controls>
    <source src="@/assets/Accueil/Mictrottoir.mp4" type="video/mp4">
  </video>
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
  flex-direction: column; 
  align-items: center;
  max-width: 100%;
  margin: 0px auto;
  margin-bottom: 0px;
  background-image: url('@/assets/Accueil/lignetrajet.png');
  background-repeat: no-repeat;
  background-position: right;

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

  /*
  background-image: url('@/assets/Accueil/lignetrajetmicrotrot.png');
  background-position: bottom right;
  background-repeat: no-repeat;*/

}


#microtot-img {

  order: 1; 
  width: 100%; 
  text-align: center;
  display: flex;
  justify-content: center;
}

#microtot-img video {
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



@media (min-width: 360px) and (max-width: 1000px) {

  
#microtot-texte {
width: 100%;
  padding: 0px 0px;
  max-width: 100%;
  text-align: left;
  height: 35vh;
  margin: 35px 0px;
}

  
#microtot-texte h2{
width: 100%;
  padding: 0px 50px;
  max-width: 80%;
  text-align: left;
}

#microtot-img {
  width: 100%; 
  text-align: center;
  justify-content: center;
}

}


</style>