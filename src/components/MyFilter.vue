<template>
       <div id="filtres">

<div class="categorie-filtres">
<div class="cfilters">
        <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('sport') }" 
            @click="toggleTag('sport')">Sport</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('detente') }" 
            @click="toggleTag('detente')">Detente</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('aventure') }" 
            @click="toggleTag('aventure')">Aventure</button>
        <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('loisirs') }" 
            @click="toggleTag('loisirs')">Sorties</button>
        <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('culture') }" 
            @click="toggleTag('culture')">Culture</button>
            <button 
            class="filter-button" 
            :class="{ 'active-filter': activeTags.includes('nature') }" 
            @click="toggleTag('nature')">Nature</button>
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
    this.$emit('newtag', tag)
    }
  }
}

</script>
<style scoped>


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
  max-width: 140px;
  font-size: 14px;
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
        padding:10px;
    }

}

</style>