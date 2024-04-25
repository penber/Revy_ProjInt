<template>
  
  <div class="card">
    <div class="card-image" :id="myData.name" @click="redirectioninternet">
      <img :src="addimg" alt="Image Test">
    </div> 
    <div class="card-content">

      <div id="hautcard">
        <h3>{{myData.name}}</h3>
        <button @click="redirectioninternet" class="redirectbtn"></button>

      </div>
      <p>{{myData.description}}</p>

      <div  class="tagaff">
        <span  v-for="(tag, index) in myData.tags" :key="index">{{ tag }}</span>
      </div>
  </div>

  </div>


  </template>
  





<script>
export default {
  name: 'NewCard',

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
  },
  methods: {
    redirectioninternet() {
      window.open(this.myData.lien, '_blank');
    }
  } 
}
</script>


<style>


.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
width: 620px; 
max-width: 850px;
 height: fit-content;
 max-height: 220px;
 height: 220px;
 max-height: 340px;
 background: rgb(0, 0, 0);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all 0.32s;
 box-shadow: 7px 7px 6px  #304E8D;
 overflow: hidden;
}

.card:hover {
 box-shadow: -7px 7px 1px  #008C6F;
}

.card-image {
  min-width: 50%;
  width: 50%;     
  height: 0;  ;    
  padding-top: 70%;
  position: relative;  
  overflow: hidden;    
}

.card-image img {
  position: absolute; 
  top: 30%;           
  left: 50%;          
  transform: translate(-50%, -50%); 
  min-width: 50%;         
  height: auto;        
  min-height: 100%;    
  object-fit: cover;   
}

.card-image img {
  width: 100%;
  height:auto; 
  object-fit: cover;
}


.card-content {
  display: flex;
  width: 50%;
  min-width: 50%;
  flex-direction: column;
  text-align: justify;
  justify-content: space-between;
  align-items: start;
  padding: 22px;
  padding-top:20px;
  background: #000000;
  overflow: hidden;
  min-height: 50%;
  color: white;
}

.card-content h3 {
  display: flex;
  margin-top: 0;
  color: white;
  max-width: 90%;
  padding-right: 15px;
  max-width: 80%;
  align-items: center;
  margin-bottom: 0px;

}

.card-content p {
  color: white;
  font-size: 13px;
  line-height: 1.6;
  padding-right: 22px;

}


#hautcard {
  display: flex;
width: 98%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
}



.redirectbtn {
  min-width: 20px;
  min-height: 20px;
  margin-right: 15px;
background-image: url('@/assets/Icons/rediriger.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-color: #ffffff00;
box-shadow: none;
border: none;
padding: 0px;
}

.redirectbtn:hover {
scale: 1.02;

background-color: #ffffff00;

}


.tagaff {
  width:90%;
  display: flex;
  justify-content: end;
  align-items: start;
  flex-direction: row;
  padding: 5px 10px;
  margin: 5px 5px;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
}


.tagaff span{
  margin: 5px 5px;
  font-weight: 800;
  font-size: 12px;

  text-transform: uppercase;

}


.tagaff span:hover{
  color: #008C6F;
  scale: 1.05;
}

@media (min-width: 150px) and (max-width: 1114px) {
    .card {
      display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  widows: auto;
width: 300px;
 max-width: 320px;
 height: fit-content;
 min-height: 460px;
 height: 240px;
 max-height: 240px;
 background: rgb(0, 0, 0);
 border-radius: 5px;
 transition: all 0.32s;
 box-shadow: 10px 10px 2px 1px #304E8D;
 overflow: hidden;
 
 
    }

    
.card:hover {
 box-shadow: -12px 12px 2px -1px #008C6F;
}



.card-image {
  width: 100%;     
  height: 150px;   
  max-height: 150px;    
  padding-top: 70%;
  position: relative;  
  overflow: hidden;    
}

.card-image img {
  position: absolute; 
  top: 50%;           
  left: 50%;          
  transform: translate(-50%, -50%); 
  width: 100%;         
  min-height: 100%;    
  object-fit: cover;   
}

.card-image img {
  width: 100%;
  height:auto; 
  object-fit: cover;
}




.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 40px 14px !important;
  padding-top:15px;
  background: #000000;
  overflow: hidden;
  min-height: 50%;
  max-height: 95%;
  min-width: 90%;
  max-width: 90%;
}

.card-content h3 {
  margin-bottom: 0px;
  color: #fafafa;
  font-size: 20px;
  margin:0;
  padding: 0px;
  max-width: 80%;
  text-align: left;
}


#hautcard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
  margin: 10px;

}

.card-content p {
  color: #f2f2f2;
  font-size: 14px;
  text-align: justify;
  line-height: 1.6;
  padding: 0px 5px;
  margin:0;

}
 



.redirectbtn {
  min-width: 22px;
  min-height: 22px;
  width: 22px;
  height: 22px;
  margin:0px;
}


.tagaff {
  width: 100%;
  padding: 0px 0px;
  margin: 0px 0px;
  align-items: end;
  justify-content: end;
}


.tagaff span{
  margin: 0px 0px 0px 5px;
  font-weight: 800;
  font-size: 12px;

  text-transform: uppercase;

}

}

</style>