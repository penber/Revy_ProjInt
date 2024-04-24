<template>
    

<div id="listedactivite">


    <MyFilter :activeTags="activeTags" @newtag="toggleTag" />


<div id="listeact">
      <!-- <ActCard class="Onecard" v-for="data in filteredActivities" :key="data.name" :myData="data"/> -->
        <NewCard class="Onecard" v-for="data in filteredActivities" :key="data.name" :myData="data"/>
  </div>


</div>


 
</template>

<script>
// import ActCard from '../components/ActCard.vue';
import NewCard from '../components/NewCard.vue';
import MyFilter from '../components/MyFilter.vue';

export default {
  name: 'VosActivite',
  components: {
    //   ActCard,
      NewCard,
      MyFilter
  },
  props: {
      actdata: Array
  },
  data() {
      return {
          activeTags: []  // Track active tags for filtering
      };
  },
  computed: {
      filteredActivities() {
          if (this.activeTags.length === 0) {
              return this.actdata;  // No filter applied
          }
          return this.actdata.filter(item => 
              this.activeTags.some(tag => item.tags.includes(tag))
          );
      }
  },
  methods: {
    toggleTag(tag) {
             
             
             if (Array.isArray(tag) && tag.length === 0) {
                 this.clearFilters();
             } else {
               const index = this.activeTags.indexOf(tag);

               if (index > -1) {
               this.activeTags.splice(index, 1); 
               } else if (this.activeTags.length < 4) {
               this.activeTags.push(tag); // Add tag to active filters
               } 
               if (this.activeTags.length === 4) {
                 this.activeTags.splice(0, 1); 
               }
             }
           },

      clearFilters() {
          this.activeTags = [];  // Clear all filters
      }
  },
  created() {
      console.log(this.actdata);  
  }
}
</script>


<style scoped>

    #nos-reseaux {
        display: flex;
        width:100%;
        justify-content: space-between;
        flex-direction: row;
        text-align: left;
        font-family: 'Helvetica', sans-serif; 
        color: #333; 
        max-width: 801px; 
        margin:0px;
    }
    
    #titrecarte{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       width: auto ;
        height: auto;
        margin: 5vh 0vh;
        padding-left:50px;
    }
  
    #titrecarte p{
   width:80%;
    }
    #filtres {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #ffffff00;
        box-shadow: 0 0px 0px rgba(0,0,0,0.0);
        margin-bottom: 50px;
        padding:10px;
    }
   #filtres h1 {
        margin: 25px 0px;}

    .reseaux-container {
        display: flex;
        justify-content: space-between; /* Espacement égal entre les conteneurs */
    }

    .reseaux-box {
        width: 30%; 
        height: 280px;
        background-color: #f0f0f0; 
        transition: all 0.3s ease;
    }

    .reseaux-box:hover {
        background-color: #e0e0e0; 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
    }

#listedactivite{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    background-color: #ffffff00;
    box-shadow: 0 0px 0px rgba(0,0,0,0.0);
    margin-bottom: 50px;
    padding:10px;
}

      #buttons{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        min-width: 80vw;
        max-width: 100vw;
        justify-content: space-around;
      }


      




#categorie-filtres {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92vw;  
  justify-content: space-around;
  margin-bottom:40px;
  gap: 20px;
  padding-left: 40px;
}

      button {
  max-width: 140px;
  font-size: 12px;
min-width: 140px;
  border: none;
  padding: 10px 10px;
margin: 0px;
  border-radius: 45px;
  background-color: #f9f9f9; /* Ajustez la couleur du bouton selon votre design */
  color: black;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s;
}


.filter-button.active-filter {
    background-color: #008C6F; /* Green background when active */
    color: white;
    font-size: 13px;

}
button:hover {
  opacity: 0.8; /* Effet d'interaction simple */
  background-color: #1d977e; /* Ajustez la couleur du bouton selon votre design */
  color: white;
  transform: scale(1.05);
border: 5px solid white;
}

button:active {
    transform: scale(1.1); /* Effet d'interaction simple */
}




  #listeact {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 50px;
  }
  
  .Onecard {
    flex: 1 1 auto;
    justify-content: center;
    margin: 15px;
    box-shadow: 10px 6px 2px #304d8d8c;
    min-width: 250px;
    border:none;
    border-radius: 10px;
  }
  .Onecard:hover {
    box-shadow: -8px 12px 2px -1px #008C6F;
       }

  
  @media (min-width: 360px) and (max-width: 1000px) {
  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }


}
</style>