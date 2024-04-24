<template>
  
  <div class="carder">
    <div class="carder-image" :id="myData.name">
      <img :src="addimg" alt="Image Test">
    </div> 
    <div class="carder-content">
      <h3>{{myData.name}}</h3>
      <p>{{myData.description}}</p>
      
      <div  class="tagaff">
        <span  v-for="(tag, index) in myData.tags" :key="index">{{ tag }}</span>
      </div>
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


.carder {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  widows: auto;
width: 300px;
 max-width: 320px;
 height: fit-content;
 min-height: 380px;
 height: 340px;
 max-height: 390px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 transition: all 0.32s;
 box-shadow: 10px 10px 2px 1px #304E8D;
 overflow: hidden;
 
}

.carder:hover {
 box-shadow: -12px 12px 2px -1px #008C6F;
}

.carder-image {
  width: 100%;     
  height: 150px;   
  max-height: 150px;    
  padding-top: 70%;
  position: relative;  
  overflow: hidden;    
}

.carder-image img {
  position: absolute; 
  top: 50%;           
  left: 50%;          
  transform: translate(-50%, -50%); 
  width: 100%;         
  min-height: 100%;    
  object-fit: cover;   
}

.carder-image img {
  width: 100%;
  height:auto; 
  object-fit: cover;
}


.carder-content {
  padding: 12px;
  padding-top:15px;
  background: #fff;
  overflow: hidden;
  min-height: 50%;
}

.carder-content h3 {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

.carder-content p {
  color: #666;
  font-size: 14px;
  text-align: justify;
  line-height: 1.6;
  padding: 0px 10px;
}
 




@media (min-width: 360px) and (max-width: 1000px) {
  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }

  
.carder {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  widows: auto;
width: 240px;
 max-width: 320px;
 height: fit-content;
 min-height: 380px;
 height: 340px;
 max-height: 390px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 transition: all 0.32s;
 box-shadow: 10px 10px 2px 1px #304E8D;
 overflow: hidden;
}

.carder-content h3 {
  margin-top: 0;
  color: #333;
  font-size: 20px;

}
}


</style>