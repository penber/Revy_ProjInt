
<template>



  <header v-if="activeClass=== 'ymeilleur' ">
    <nav id="main-nav">

    <div>
  <RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noir.png"></RouterLink>
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
<RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noir.png"></RouterLink>
  </div>

  <div id="nav-items">
    <RouterLink to="/MeilleurYv" class="offlinks"> YverMatchmaking</RouterLink>

    <RouterLink to="/CarteMap" class="active-link"> YverCarte</RouterLink>


  </div>
</nav>

  </header>

  <header v-if="activeClass=== 'Accueil' " id="accueilnav">
    <nav id="main-nav" >

<div>
<RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-blanc.png"></RouterLink>
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
    transform: rotate(2deg);
    font-weight: 600 !important;


}

#accueilnav {
  position:absolute;
  width: 100%;
}
/* la souris à un halo de contour fondu en vert lors du survol de offlinks */

img {
  transition: 0.9s ease-in-out;

}
img:hover{
  transform: 1.5;
    transform: rotate(4deg);

}


#Mybutton {
  /*ne pas souligner le texte*/
  text-decoration: none;

}
</style>

