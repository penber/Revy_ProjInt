<template>
  <div id="reste">
    <section class="revy-section-1">
      <div id="titles">
        <div id="Titre1">
          <p>Ton guide ultime pour dénicher toutes 
            les pépites d’Yverdon-les-Bains !</p>
        </div>
        <div id="Titre2">
          <div>
            <p>Plonge dans le tourbillon d'activités à Yverdon-les-Bains ! Que tu sois en quête de musées, de restos délicieux, de festivals culturels ou de frissons en plein air, 
              notre site est ton complice pour explorer et savourer chaque instant dans notre ville !</p>
          </div>
        </div>
      </div>
      <div class="content-container">
        <img src="@/assets/Accueil/soiree.png" alt="Soirée à Yverdon-les-Bains">
        <img src="@/assets/Accueil/trouvparcour2.png" alt="Trouver votre parcours">
        <img src="@/assets/Accueil/velo.png" alt="Circuit vélo">
        <img src="@/assets/Accueil/toutage.png" alt="Activités pour tous les âges">
      </div>
    </section>  
  </div>
</template>

<script>
export default {
  name: 'SectionOne',
}
</script>


<style>



#reste {
    display: flex;
    flex-direction: column;
    align-content:center;
    justify-content: space-between;
  padding: 60px 80px;
  margin: 0;
  color: #333;
  height: fit-content;
  min-height: 100vh;

}


.revy-section {
  text-align: center;
  font-family: 'Arial', sans-serif; 
  color: #333; 
  max-width: 800px; 
  margin: auto; /* Centrage du contenu */
}

.revy-section-1{
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  width: 100%;
  height: auto;
margin-bottom: 100px;
}

#titles {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 10vh;

}

#Titre1 {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 55%;
  padding: 10px;
  height: auto;
  margin-bottom: 4vh;
}

#Titre1 p{
  margin: 0;
  text-align: left;
  font-weight: 700;
  font-size: 2.4em;
  line-height: 1.2;
}

#Titre2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-bottom:1vh;
  height: 20%;


}

#Titre2 div {
  font-size: 1.4em;
  line-height: 1.3;
  font-weight: 300;
  width: 50%;
  margin: 0;
text-align: left;
}

.content-container {
  display: flex;             /* Uses flexbox to layout children */
  align-items: flex-end;     /* Aligns children at the bottom of the container */
  justify-content: center;   /* Centers children horizontally */
  flex-wrap: wrap;           /* Allows items to wrap onto multiple lines */
  gap: 5px;          
  justify-content: space-between;
}

.content-container img {
  max-width: 20vw;           /* Ensures images do not exceed the width of their container */
  height: auto;              /* Maintains the aspect ratio of the images */
  transition: 0.6s ease-in-out;

}


  
.content-container img:hover {
transform: scale(1.06);    
/*transform: translate(10px,4px);  */
    }


@media only screen and (max-width: 768px) {
  #reste {
    padding: 20px;
    
  background-image: url('@/assets/question/ligne.png');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: bottom;  
  }

  #Titre1{
    font-size:1.6em;
  }
  #Titre1, #Titre2 div {
    padding: 20px;
    width: 100%;  /* Utilise toute la largeur disponible */
    margin: 0;
  }

  #Titre1 p, #Titre2 div {
    font-size: 1.1em;  /* Ajuste la taille de la police pour la lisibilité sur petit écran */
  }

  .content-container {
    display: flex;
    justify-content: space-around;  /* Ajuste l'espacement autour des images */
    gap: 15px;
    align-content:center;
  }

  .content-container img {
    max-width: 45vw;  /* Augmente la taille des images pour une meilleure visibilité */
    transition: 0.9 ease-in-out;

  }

  
    .content-container img:hover {
    transform: scale(1.2);
    transform: translate(10px,4px);  
    }

  #titles {
    margin-bottom: 5vh;  /* Ajuste l'espacement vertical */
  }
}


@media only screen and (min-width: 769px) and (max-width: 1024px) {
  #reste {
    padding: 40px 60px;  /* Ajuste le padding pour les tablettes */
  }

  #Titre1 p, #Titre2 div {
    font-size: 2em;  /* Augmente la taille de la police pour une meilleure lisibilité sur tablette */
  }

  #Titre1, #Titre2 div {
    width: 70%;  /* Ajuste la largeur pour un affichage plus équilibré */
  }

  .content-container {
    gap: 15px;  /* Ajuste l'espacement entre les images */
  }

  .content-container img {
    max-width: 30vw;  /* Ajuste la largeur des images pour un meilleur affichage */
    transition: 0.9 ease-in-out;

  }
  
  
  .content-container img:hover {
    transform: 1.5;
    transform: translate(10px,4px);  
    }


  #titles {
    margin-bottom: 7vh;  /* Ajuste l'espacement vertical */
  }
}



</style>