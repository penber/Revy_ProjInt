<template>

<header class=spaceheader>
    
      <nav id="main-nav">

        <div>
          <RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-blanc.png"></RouterLink>
        </div>

        <div id="nav-items">
          <RouterLink to="/CarteMap" active-class="active-link"> Carte</RouterLink>

          <RouterLink to="/MeilleurYv" active-class="active-link"> Meilleur d’Yverdon</RouterLink>
          <a href="#bien-vivre">Bien vivre</a>

        </div>


      </nav>

    
    <div id="title">

        <h1>Le Bien - être à Yverdon</h1>

        <p> Le bien-être a portée de main.  </p>
    </div>
    
    </header>



    
    <section id="nos-meilleur" v-if="!quizactive">
        <div id="Introduction">
     
         <h1> Bien y Vivre</h1>

          <div>
            <p>Le bien-être est une notion qui englobe plusieurs aspects de la vie. Il peut s'agir de la santé physique, mentale, émotionnelle ou spirituelle. 
              Il est important de prendre soin de soi et de son bien-être pour être en bonne santé et heureux. A Yverdon-les-Bains, vous trouverez de nombreux
               endroits et activités qui vous permettront de vous ressourcer et de vous détendre. </p>
               <br>
              <p>Que vous soyez à la recherche d'un spa, d'un centre de bien-être, d'un parc ou d'un restaurant sain, vous trouverez ce qu'il vous faut à Yverdon-les-Bains. </p>
          </div>
           
        </div>


        <div class="reseaux-container">

            <div class="reseaux-box" v-for="box in 3" :key="box">
            </div>

        </div>



        <section id="stats">

          <div class="majeurstats" id="majeurstats1">

          <h2>Une ville du bien-être</h2>

            <div id="conteneurn1" >


              
              <div >
                <h3> 3670 Postes</h3>
                    <p>Offre de nombreuses opportunités de travail</p>
              
                  </div>
              

              <div>
                <img src="../assets/BIenetre/Persntravail.png" alt="Personne qui travail" width="200" height="200">
              </div>


            </div>

          </div>  



          <div class="majeurstats" id="majeurstats2">


            
            <div id="conteneurn2" >


              
                  <div >
                    <h3> 45 Espaces Vert</h3>
                        <p>Offre de nombreuses opportunités de travail</p>

                      </div>


                  <div>
                    <img src="../assets/BIenetre/Persntravail.png" alt="Personne qui travail" width="200" height="200">
                  </div>


                  </div>



                  
            <div id="conteneurn3" >


                        
                    <div >
                      <h3> 3670 Postes</h3>
                          <p>Offre de nombreuses opportunités de travail</p>

                    </div>


                          <div>
                            <img src="../assets/BIenetre/Persntravail.png" alt="Personne qui travail" width="200" height="200">
                          </div>
            </div>

          </div>


        </section>

    </section>



</template>

<script>
export default {
    name: 'BienEtre',
  
    data() {
        return {
            quizactive: false,
            quizup: false,
            showresults: false,
        }
    },
  

  mounted() {
    this.$emit('update:showNavBar', false);

  },
  unmounted() {
    this.$emit('update:showNavBar', true);
  },
  methods: {

   
}
}

</script>


<style>
#Introduction {
  background-color: #ffffff; /* Fond clair pour plus de fraîcheur */
  padding: 40px; /* Augmentation de l'espacement pour un look plus aéré */
  border-radius: 15px; /* Coins plus arrondis pour un style moderne */
  max-width: 900px; /* Légère augmentation de la largeur pour un meilleur affichage du texte */
  margin: 40px auto; /* Plus d'espace autour du conteneur */
  margin-top:40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Ombre plus prononcée pour un effet 3D subtil */
  font-family: 'Helvetica Neue', sans-serif; /* Police plus moderne et lisible */
}

#Introduction h1 {
  color: #0056b3; /* Couleur plus vive pour le titre */
  margin-bottom: 20px; /* Plus d'espace après le titre */
  font-size: 2.5rem; /* Taille de police plus grande pour le titre */
}

#Introduction p {
  color: #444; /* Couleur de texte légèrement plus foncée pour une meilleure lisibilité */
  line-height: 1.8; /* Augmentation de la hauteur de ligne */
  font-size: 1.1rem; /* Taille de police légèrement plus grande pour le texte */
}


.reseaux-container {
  display: grid; /* Changement en grille pour une meilleure réactivité */
  gap: 20px; /* Espace entre les boîtes */
  padding: 20px; /* Padding autour du conteneur pour un design plus structuré */
  display: flex; /* Affichage en ligne pour les boîtes */
  justify-content: space-around; /* Répartition équitable de l'espace autour des éléments */
  margin-top: 20px; /* Espacement au-dessus du conteneur */ 
}

.reseaux-box {
  width: 30%; 
      height: 280px; 
  background-color: #6389b2; /* Couleur de fond pour les boîtes */
  border-radius: 10px; /* Coins arrondis pour les boîtes */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition lisse pour l'effet de survol */
}

.reseaux-box:hover {
  transform: translateY(-10px); /* Déplacement vers le haut pour l'effet de survol */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Ombre plus marquée au survol */
}

  
    #nos-reseaux {
        text-align: center;
        font-family: 'Arial', sans-serif; 
        color: #333; 
        max-width: 801px; 
        margin: auto; /* Centrage du contenu */
    }

    .spaceheader {
      background-color: rgb(210, 235, 238);
          padding-bottom: 30px;
          box-shadow: 0 0px 0px rgba(0,0,0,0.0);
            border-radius: 15px 15px 15px 15px;
      }


#filtres {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: left;
          width: auto;
          background-color: #ffffff00;
          box-shadow: 0 0px 0px rgba(0,0,0,0.0);
       margin-bottom: 50px;
       padding:10px;
      }
  
  #filtres h1 {
    font-size: 2.1em;
    margin: 50px;
  }

  
  #stats {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: auto;
    min-height: 80vh;
    align-items: flex-start;
    margin: 50px;
  }

  #majeurstats1 {

    display: flex;
    width:40%;
    min-height: 650px;
    
    background-color: #ffffff;

    flex-direction: column;
    justify-content: space-evenly;
    align-content:baseline;
    align-items:flex-start;
    margin:10px;
  }

  #majeurstats2 {

display: flex;
width:40%;
min-height: 650px;

background-color: #ffffff;

flex-direction: column;
align-content:baseline;
align-items:flex-start;
margin:10px;
}

  .majeurstats h2 {
    font-size: 2.5em;
    margin: 50px;
  }
  #conteneurn1 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    color: #f0f0f0;
    width:100%;
    min-height: 400px;

    padding: 5px;

    background-color: rgb(224, 54, 48)  ;
  }
  #conteneurn1  div h3 {
    font-size: 2.5em;
    margin: 50px;
  }


  #conteneurn2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #f0f0f0;
    width:100%;
    min-height: 300px;
    padding: 10px;

    padding: 30px;
    margin-bottom: 10px;

    background-color: rgb(17, 4, 48)  ;
  }
  #conteneurn2  div h3 {
    font-size:1.5em;
    margin: 50px;
  }


  #conteneurn3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    color: #f0f0f0;
    width:100%;
    min-height: 200px;

    padding: 30px;

    background-color: rgb(108, 84, 205)  ;
  }
  #conteneurn3  div h3 {
    font-size: 2.5em;
    margin: 50px;
  }
</style>