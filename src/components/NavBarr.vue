
<template>



  <header v-if="activeClass=== 'ymeilleur' ">
    <nav id="main-nav">

    <div>
  <RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noire.png"></RouterLink>
      </div>

      <div id="nav-items">
        <RouterLink to="/MeilleurYv" class="active-link"> YverMatchmaking</RouterLink>

        <RouterLink to="/CarteMap" class="offlinks"> YverCarte</RouterLink>


      </div>
    </nav>

  </header>

  <header v-if="activeClass=== 'Carte' ">
    <nav id="main-nav">

<div>
<RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noire.png"></RouterLink>
  </div>

  <div id="nav-items">
    <RouterLink to="/MeilleurYv" class="offlinks" id="navfont"> YverMatchmaking</RouterLink>

    <RouterLink to="/CarteMap" class="active-link" > YverCarte</RouterLink>


  </div>
</nav>

  </header>

  <header v-if="activeClass=== 'Accueil' " id="accueilnav" >
    <nav id="main-nav" >

<div>
<RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-blance.png"></RouterLink>
  </div>

  <div id="nav-items">
    <RouterLink to="/MeilleurYv" class="offlinks" style="color:white;" > YverMatchmaking</RouterLink>

    <RouterLink to="/CarteMap" class="offlinks" style="color:white;"> YverCarte</RouterLink>


  </div>
    </nav>
</header>




</template>

<script>

import { RouterLink } from 'vue-router';

export default {
  name: 'NavBarr',
  components: {
    RouterLink
  },
  props: {
    activeClass: {
      type: String,
      default: 'active-link'
    }
  },

}

</script>

<style scoped>

.active-link {
font-weight: 900 !important;
/*souligner le lien actif */
font-size: 1.2rem;

}

.offlinks{
  transition: 0.3s ease-in-out;

}
.offlinks:hover {
  transform: 1.05;
    transform: rotate(1deg);
    font-weight: 600 !important;


}

#accueilnav {
  position:absolute;
  width: 100%;
  padding: 0px;
}
/* la souris à un halo de contour fondu en vert lors du survol de offlinks */

img {
  transition: 0.9s ease-in-out;

}
img:hover{
  transform: 1.5;
    transform: rotate(2deg);

}


#Mybutton {
  /*ne pas souligner le texte*/
  text-decoration: none;
}




@media (min-width: 360px) and (max-width: 1000px) {
 #logo {
   width: 100px;
   height: 40px;
   padding-left: 8px;
 }


 
#nav-items {
  width: fit-content;
  color: white;
  font-weight: 380;
  text-decoration: none;
  font-size: 1.2em;
  padding: 0px !important;
  margin: 0px 0px !important;
  justify-content: center;
  align-items: baseline;
}


 
#nav-items a{

  font-size: 0.7em;
 
}


#accueilnav {
  position:absolute;
  width: 100%;
  padding: 0px;
}



.offlinks{
  transition: 0.3s ease-in-out;
font-size: 7px ;
}

.offlinks:hover {
  transform: 1.03;
    transform: rotate(1deg);

}

#navfont{
  font-size: 1.3em;
  padding: 1px !important;
  margin: 0px 0px !important;
  justify-content: center;
  color: rgb(0, 0, 0);
  font-weight: 380;
  text-decoration: none;
}

}
</style>

