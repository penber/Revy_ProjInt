
<template>



  <div v-if="activeClass=== 'ymeilleur' ">
    <nav id="main-nav">

    <div>
  <RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noir.png"></RouterLink>
      </div>

      <div id="nav-items">
        <RouterLink to="/MeilleurYv" class="active-link"> YverMatchmaking</RouterLink>

        <RouterLink to="/CarteMap" > YverCarte</RouterLink>


      </div>
    </nav>

  </div>

  <div v-if="activeClass=== 'Carte' ">
    <nav id="main-nav">

<div>
<RouterLink to="/Accueil"> <img id="logo" alt="Revy logo" src="../assets/logo-noir.png"></RouterLink>
  </div>

  <div id="nav-items">
    <RouterLink to="/MeilleurYv" > YverMatchmaking</RouterLink>

    <RouterLink to="/CarteMap" class="active-link"> YverCarte</RouterLink>


  </div>
</nav>

  </div>



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



</style>

