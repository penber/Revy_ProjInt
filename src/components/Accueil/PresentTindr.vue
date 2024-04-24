<template>

    

  <section id="tindrr">

<div class="tindrrre">

  <div class="tindrr-text">
    <h2>Quelle activité te correspondrait le mieux ?</h2>

  <p> Découvre quelle activité te correspond 
    le mieux à Yverdon-les-Bains en faisant un test ludique et rapide ! </p>

  </div>
  
    <router-link id="Mybutton" to="/MeilleurYv">C'est parti pour le test !</router-link>
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
  margin-bottom: 80px;
  margin-top:80px; 
  }

  .tindrrre {
    max-width: 50%;
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    text-align: center;
  }

  
  .tindrr-text {
    max-width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    margin-bottom: 25px;
  }

  .tindrr-img img{
    max-width: 65%;
  }

  .tindrr-text h2{
    font-size: 2.3em;
    margin: 0px;
    width:80%;
  }

  .tindrr-text p{
    font-size: 1.3em;
  }


.tindrrre button {
  margin-top: 20px;
  width: fit-content;
}

.tindrr-img img{
  width:100%;
  transition: 0.6s ease-in;
}

.tindrr-img img:hover {
  transform: scale(1.04) rotate(2deg);
  }


@media only screen and (max-width: 968px) {
  #tindrr {
    flex-direction: column;  /* Empile les contenus verticalement pour les petits écrans */
    align-items: center;    /* Centre les éléments pour une meilleure apparence sur mobile */
    padding: 0px;
    margin-top:0px; 
          /* Ajoute un peu de padding pour ne pas coller aux bords de l'écran */
  }

  .tindrrre {
    max-width: 100%;  /* Utilise toute la largeur disponible */
  }

  .tindrrre {
    max-width: 100%;
    align-items: center; 
    margin-bottom: 40px; /* Utilise toute la largeur disponible */
  }

  .tindrr-text  {
   padding-left: 15px;
   max-width: 380px; /* Réduit la taille de la police pour les titres sur les petits écrans */
    align-items: start;
  }

  .tindrr-text h2 {
    font-size: 1.7em;  
    width:95%; 
  margin-bottom: 15px; }

  .tindrr-text p {
    font-size: 1.1em; 
    width:90%; /* Réduit la taille de la police pour le texte sur les petits écrans */
  }

  .tindrr-img img {
    max-width: 90%;  /* Ajuste la largeur de l'image pour qu'elle s'adapte à la largeur de l'écran */
    height: auto;     /* Garde le ratio hauteur/largeur de l'image */
  }
  .tindrr-img img {
    max-width: 70%;  /* Ajuste la largeur de l'image pour qu'elle s'adapte à la largeur de l'écran */
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
    max-width: 70%;  /* Ajuste la taille de l'image pour un meilleur équilibre visuel */
    height: auto;    /* Garde le ratio hauteur/largeur de l'image */
  }
}

</style>