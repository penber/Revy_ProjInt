<template>
  <section >

    <div id="nos-reseaux">
        <h1>Ces activités sont faites pour vous !</h1>

    </div>
        
          <div id="filtres">

          <div class="filter-container">
            <div id="buttons">
                    <button 
                        class="filter-button" 
                        :class="{ 'active-filter': activeTags.includes('sport') }" 
                        @click="toggleTag('sport')">Sport</button>
                    <button 
                        class="filter-button" 
                        :class="{ 'active-filter': activeTags.includes('loisirs') }" 
                        @click="toggleTag('loisirs')">Sorties</button>
                    <button 
                        class="filter-button" 
                        :class="{ 'active-filter': activeTags.includes('culture') }" 
                        @click="toggleTag('culture')">Culture</button>
                    <button 
                        class="filter-button filter-clear" 
                        @click="clearFilters">Supprimer</button>
                </div>
          </div>   
      </div>
  </section>

  <div id="listeact">
      <ActCard class="Onecard" v-for="data in filteredActivities" :key="data.name" :myData="data"/>
  </div>
</template>

<script>
import ActCard from '../components/ActCard.vue';

export default {
  name: 'VosActivite',
  components: {
      ActCard
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
          const index = this.activeTags.indexOf(tag);
          if (index > -1) {
              this.activeTags.splice(index, 1);  // Remove tag from active filters
          } else if (this.activeTags.length < 3) {
              this.activeTags.push(tag);  // Add tag to active filters
          }
      },
      clearFilters() {
          this.activeTags = [];  // Clear all filters
      }
  },
  created() {
      console.log(this.actdata);  // Debugging
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



    .filter-container{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        max-width: 100vw;
        justify-content: space-around;
        align-items: center;
    }
    button {
        padding: 1.3em 2em;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        min-width: 140px;
        max-width: 140px;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        margin-right: 5%;
        margin-bottom: 10px;
      }

      #buttons{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        max-width: 100vw;
        justify-content: space-around;
      }

#Mybutton:hover {
        background-color: #87ceb2;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
      }
      
      #Mybutton:active {
        transform: translateY(-1px);
      }

button:hover {
  background-color: #6b92d4;
  box-shadow: 0px 15px 20px rgba(188, 220, 225, 0.4);
  color: #fff;
  font-weight: 600;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}


.filter-button.active-filter {
    background-color: #4CAF50; /* Green background when active */
    color: white;
}

.filter-button {
    transition: background-color 0.3s; /* Smooth transition for background color change */
}
#buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #listeact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 50px;
  }
  
  .Onecard {
    flex: 1 1 22%;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    min-width: 200px;
  }
  .Onecard:hover {
    box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
       }

  
  @media (min-width: 360px) and (max-width: 1000px) {
  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }


}
</style>