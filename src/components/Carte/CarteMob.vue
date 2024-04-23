<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from '@/assets/Icons/Point.png'; 

export default {
  name: 'CarteMob',
  data() {
    return {
      map: null,
      locations: {
        "Explorit": {
          "latitude": 46.76603262209683,
          "longitude": 6.642986081954297
        },
        "Maison d'Ailleurs": {
          "latitude": 46.77859997112586,
          "longitude": 6.641920454969337
        },
        "Plage d'Yverdon": {
          "latitude": 46.78489749987309,
          "longitude": 6.6525305607909555
        }
    },
    activities: [
    { "name": "EXPLORiT Loisirs & Découvertes", 
            "tags": ["famille", "éducation", "loisirs"], "state": false,
            "location": {
          "latitude": 46.76603262209683,
          "longitude": 6.642986081954297
        }
    },
    {
  "name": "Maison d'Ailleurs",
  "tags": ["culture", "aventure"],
  "state": false,
  "location": {
    "latitude": 46.778474,
    "longitude": 6.641182
  }
},
    ]
    };
  },
  mounted() {
    this.map = L.map('map').setView([46.778559, 6.641183], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [25, 25], // size of the icon
      iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
    });

    for (const activity of this.activities) {
      const location = activity.location; // Accédez à l'objet location
      L.marker([location.latitude, location.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(activity.name); // Utilisez `activity.name` pour le nom
    }
    this.map.invalidateSize();

  },

  methods: {
    Enlist() {
        this.$emit('enlist');

   
  }
}}
</script>

<template>
 <div id="butonnn">

    <div id="categorie-filtres">
  <div class="buttons">
    <h2>Filtrer par catégories</h2>
</div> 
  <div class="filters">
    <button v-on:click="filter('loisirs')" class="filter-button" id="filter-loisirs">Loisirs</button>
    <button v-on:click="filter('sport')" class="filter-button" id="filter-sport">Sport</button>
    <button v-on:click="filter('nature')" class="filter-button" id="filter-nature">Nature</button>
    <button v-on:click="filter('culture')" class="filter-button" id="filter-culture">Culture</button>
    <button v-on:click="filter('detente')" class="filter-button" id="filter-detente">Détente</button>
    <button v-on:click="filter('aventure')" class="filter-button" id="filter-aventure">Aventure</button>
  </div>
</div>
</div>
    

  <div id="map" ></div>
</template>


<style scoped>
#map {
    display: block;
    margin: 0 auto;
    width: 100%;
    min-height: 500px;
    overflow: hidden;
  height: auto;
}


#map{
 
 align-items: center;
 width: auto;

 box-shadow: 9px 8px 3px  rgba(0,0,0,0.2);
 margin-bottom: 50px;
 transition: box-shadow 0.9s ease; /* Ajouter la transition ici */

}

#map:hover{
 box-shadow: -6px 8px 5px rgb(112, 198, 106); /* Arrivée : ombre à gauche */
}



#butonnn {
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: left;
  gap: 20px;
  margin-top: 20px;
  padding-left:72px;
}

#categorie-filtres {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width:100%;
  justify-content: space-around;
  margin-bottom:40px;
  gap: 20px;
}

#categorie-filtres h2 {
  display: flex;
  align-items: left;
  justify-content: left;
 
}


.filters{
  width:100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  gap: 10px;
  margin-bottom: 2rem;
}

#showmymatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

button {
  min-width: 140px;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #D9D9D9; /* Ajustez la couleur du bouton selon votre design */
  color: black;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  opacity: 0.8; /* Effet d'interaction simple */
  background-color: #008C6F; /* Ajustez la couleur du bouton selon votre design */
  color: white;
}

button:active {
  transform: scale(0.98); /* Effet d'interaction simple */
}







</style>