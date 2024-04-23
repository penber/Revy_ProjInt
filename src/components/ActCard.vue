<template>
  <div class="card">
    <div class="card-image" :id="myData.name">
      <img :src="addimg" alt="Image Test">
    </div> 
    <div class="card-content">
      <h3>{{myData.name}}</h3>
      <p>{{myData.description}}</p>
    </div>
  </div>
  </template>
  





<script>
export default {
  name: 'ActCard',

  props: {
    myData: Object
  },

  computed: {
    // Supposons que myData.img contient le nom du fichier image sous le dossier des activités
    addimg() {
      // Utiliser require pour résoudre le chemin à la compilation par Webpack
      if (this.myData && this.myData.img) {
        return require(`@/assets/Activites/${this.myData.img.trim()}`);
      }
      return ''; 
    }
  },

  mounted() {
    console.log("actdata:", this.myData);
  }
}
</script>


<style>



.card {
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  widows: auto;
width: 220px;
 max-width: 220px;
 height: fit-content;
 min-height: 340px;
 height: 340px;
 max-height: 340px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all .2s;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
 overflow: hidden;
}

.card:hover {
 box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
}

.card-image {
  width: 100%;      /* Assure que la div prend toute la largeur disponible */
  height: 0;   
  max-height: 150px;     /* Initialiser la hauteur à 0 */
  padding-top: 70%; /* Rapport hauteur/largeur de 16:9, ajustez selon vos besoins */
  position: relative;  /* Position relative pour que l'image positionnée absolument s'adapte à cette div */
  overflow: hidden;    /* Cache les débordements */
}

.card-image img {
  position: absolute;  /* Position absolue pour contrôler pleinement la position de l'image */
  top: 40%;            /* Positionner au milieu verticalement */
  left: 50%;           /* Positionner au milieu horizontalement */
  transform: translate(-50%, -50%); /* Centrer l'image exactement */
  width: 100%;         /* Faire en sorte que l'image prenne toute la largeur de .card-image */
  height: auto;        /* Hauteur auto pour maintenir les proportions */
  min-height: 100%;    /* S'assure que la hauteur est au moins celle de .card-image */
  object-fit: cover;   /* Couvrir l'espace disponible sans perdre les proportions */
}

.card-image img {
  width: 100%;
  height:auto; /* Assurez-vous que l'image garde son ratio */
  object-fit: cover; /* Couvre la zone de l'image sans la déformer */
}


.card-content {
  padding: 12px;
  padding-top:0px;
  background: #fff;
  overflow: hidden;
  min-height: 50%;
}

.card-content h3 {
  margin-top: 0;
  color: #333;
}

.card-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}


</style>