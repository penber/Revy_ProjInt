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
