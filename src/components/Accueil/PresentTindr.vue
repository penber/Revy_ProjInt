<template>

    

  <section id="tindrr">

<div class="tindrrre">

  <div class="tindrr-text">
    <h2>Quel activitée vous coorespond le mieux ?</h2>

  <p> Trouve l'activité qui te cooresponde le mieux dans Yverdon-les-bains 
    en effectuant un test ludique et rapide ! </p>

  </div>
  
    <button id="Mybutton">Commencer</button>

</div>

<div class="tindrr-img">

  <img src="@/assets/Accueil/tindrrr.png" alt="tindrr">
</div>


</section>



</template>


<script>

export default {
  name: 'PresentTindr',
 
}

</script>



<style scoped>


#tindrr {

  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  box-shadow: 0 0px 0px rgba(0,0,0,0.0);
  margin-bottom: 50px; 
  }

  .tindrrre {
    max-width: 50%;
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    text-align: left;
  }

  
  .tindrr-text {
    max-width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
  }

  .tindrr-text h2{
    font-size: 2.3em;
    margin: 0px;
  }

  .tindrr-text p{
    font-size: 1.3em;
  }


.tindrrre button {
  margin-top: 20px;
  width: fit-content;
}


@media only screen and (max-width: 768px) {
  #tindrr {
    flex-direction: column;  /* Empile les contenus verticalement pour les petits écrans */
    align-items: center;    /* Centre les éléments pour une meilleure apparence sur mobile */
    padding: 20px;          /* Ajoute un peu de padding pour ne pas coller aux bords de l'écran */
  }

  .tindrrre {
    max-width: 100%;  /* Utilise toute la largeur disponible */
  }

  .tindrr-text h2 {
    font-size: 1.8em;  /* Réduit la taille de la police pour les titres sur les petits écrans */
  }

  .tindrr-text p {
    font-size: 1em;  /* Réduit la taille de la police pour le texte sur les petits écrans */
  }

  .tindrr-img img {
    max-width: 100%;  /* Ajuste la largeur de l'image pour qu'elle s'adapte à la largeur de l'écran */
    height: auto;     /* Garde le ratio hauteur/largeur de l'image */
  }
}


@media only screen and (min-width: 769px) and (max-width: 1024px) {
  #tindrr {
    flex-direction: row;  /* Maintient une disposition en ligne pour les écrans plus grands, comme les tablettes */
    justify-content: space-evenly;
    padding: 30px;        /* Ajuste le padding pour un peu plus d'espace */
  }

  .tindrrre {
    max-width: 60%;  /* Ajuste la largeur pour un affichage plus équilibré sur tablette */
  }

  .tindrr-text h2 {
    font-size: 2em;  /* Légère augmentation de la taille de la police pour les titres */
  }

  .tindrr-text p {
    font-size: 1.2em;  /* Ajuste légèrement la taille de la police pour une meilleure lisibilité */
  }

  .tindrr-img img {
    max-width: 40%;  /* Ajuste la taille de l'image pour un meilleur équilibre visuel */
    height: auto;    /* Garde le ratio hauteur/largeur de l'image */
  }
}

</style>