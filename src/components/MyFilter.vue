<template>
       <div id="filtres">

        <h3>Filtrer par catégories</h3>

<div class="categorie-filtres">
<div class="cfilters">
  <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('loisirs') }" 
            @click="toggleTag('loisirs')">Santé nutritionnelle</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('sport') }" 
            @click="toggleTag('sport')">Santé physique</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('detente') }" 
            @click="toggleTag('detente')">Relaxation</button>
        <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('culture') }" 
            @click="toggleTag('culture')">Santé mentale</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('nature') }" 
            @click="toggleTag('nature')">Communauté</button>

        <button    id="Mylittlebutton" 
            class="filter-button filter-clear" 
            @click="clearFilters">Supprimer</button>
    </div>
</div>   
</div>
   

</template>


<script>
export default {
  name: 'MyFilter',
  props: {
    activeTags: Array
  },
  methods: {
    toggleTag(tag) {
      this.$emit('newtag', tag);
    },
    clearFilters() {
      this.$emit('newtag', []);
    }
  }
}
</script>
<style scoped>


#filtres {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
 
        width: 100%;
        background-color: #ffffff00;
        box-shadow: 0 0px 0px rgba(0,0,0,0.0);
        margin-bottom: 50px;
        padding:10px;
    }
   #filtres h1 {
        margin: 25px 0px;}


        

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


#buttons{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        min-width: 80vw;
        max-width: 100vw;
        justify-content: space-around;
      }



button {
  max-width: 180px;
  font-size: 14px;
  width: 180px;
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





@media (min-width: 360px) and (max-width: 1000px) {



  
#filtres {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #ffffff00;
        box-shadow: 0 0px 0px rgba(0,0,0,0.0);
        margin-bottom: 10px !important;
        padding:0px;
    }


    
button {
  max-width: 120px;
  font-size: 12px;
  width: 180px;
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
    font-size: 12px;

}
button:hover {
  opacity: 0.8; /* Effet d'interaction simple */
  background-color: #1d977e; /* Ajustez la couleur du bouton selon votre design */
  color: white;
  transform: scale(1.05);
border: 5px solid white;
}


}

</style>