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
    activeTags: [],
    activities:  [
                      { "name": "Bains thermaux d'Yverdon-les-Bains", 
                      "tags": ["detente", "loisirs", "nature"], 
                      "state": false,
                  "description": "Profitez des bienfaits de l’eau thermale et des soins proposés par le centre thermal.",
                  "img":"YverdonCentreTermale.jpg ",
                 "lien":" https://www.bainsyverdon.ch ",
                  "location": {
                            "latitude": 46.77183045355819,
                            "longitude": 6.648054667998318
                          }
                  },

                          
                          { "name": "Centre Pro Natura de Champ-Pittet", "tags": ["nature", "detente", "culture"], "state": false,
                          "description": "Savourez un moment en pleine nature. ",
                          "img":"Champ-pittet.jpg",
                            "lien":" https://www.pronatura-champ-pittet.ch/fr ",

                            "location": {
                            "latitude": 46.78363891728345,
                            "longitude": 6.665761925669558
                          }
                  },

                          
                          { "name": "Jumpark", "tags": ["aventure", "sport", "nature"], "state": false,
                          "description": "Découvrez le jumpark en famille ou seul ! ",
                          "img":"Jumpark.jpg ",
                        "lien":" https://jumpark.ch ",
                        "location": {
                            "latitude": 46.78773100933943,
                            "longitude": 6.629158896834425 
                          }

                  },

                    
                          
                          { "name": "Maison d’Ailleurs", "tags": ["culture", "loisirs", "aventure"], "state": false,
                          "img":"maisond'ailleurs.jpg",
                        "description": "Voyagez dans l'univers de la science-fiction et de l'imaginaire." ,
                  "lien":" https://www.yverdonlesbainsregion.ch/fr/P388/maison-d-ailleurs.com ",
                  "location": {
                            "latitude":  46.77879834824709,
                            "longitude": 6.641941912175311
                          }
                  },

                          
                          { "name": "Grottes de Vallorbe", "tags": ["aventure", "nature", "culture"], "state": false,
                        "description": "Découvrez les grottes de Vallorbe et leur univers souterrain.",
                          "img":"grottevalorbe.jpeg",
                  "lien":" https://grottesdevallorbe.ch/ ",
                  "location": {
                            "latitude":  46.69894084285282,
                            "longitude": 6.345708290015374
                          }
                  },

                                  
                          { "name": "Château de Grandson", "tags": ["culture", "nature", "loisirs"], "state": false,
                  "img":"Grandsonchateau.jpg",
                        "description": "Visitez le château de Grandson et découvrez son histoire.", 
                  "lien":" https://chateau-grandson.ch ",
                  "location": {
                            "latitude":  46.809779590991695,
                            "longitude": 6.647054327518222
                          }
                  },
                    

                            
                          { "name": "Plage d'Yverdon", "tags": ["detente", "nature", "loisirs"], "state": false,
                  "img":"plage.jpg",
                        "description": "Lieu de détente et de loisirs pour toute la famille." ,
                  "lien":" https://www.yverdonlesbainsregion.ch ",
                  "location": {
                            "latitude":  46.78502238946396,
                            "longitude": 6.652584204504973
                          }
                  },

                          
                          { "name": "Cinéma Bel-Air", "tags": ["loisirs", "culture", "detente"], "state": false,
                  "img":"imageCinema.jpg",
                        "description":"Un cinema avec les dernière sorties" ,
                  "lien":" https://www.cineman.ch/fr/seances/cinema/bel-air-yverdon/325/",
                  "location": {
                            "latitude":  46.78056760637755,
                            "longitude": 6.636664267998707
                          }
                  },
                          

                          { "name": "EXPLORiT Loisirs & Découvertes", 
                              "tags": ["famille", "éducation", "loisirs"], "state": false ,
                  "img":"explorit.jpg",
                  "lien":" https://explorit.ch/",
                  "location": {
                            "latitude":  46.76620899850472,
                            "longitude": 6.643061183339376
                          }
                  },
                          
                              {
                                  "name": " Château d’Yverdon",
                                  "tags": ["culture", "detente", "loisirs"],
                                  "state": false,
                  "img":"chateauYverdon.jpg",
                  "lien":" http://chateau.yverdon.ch/accueil",
                  "description": "détente et promenade dans les jardins du château d'Yverdon.",
                  "location": {
                            "latitude":  46.77832967624269,
                            "longitude": 6.64156173916332
                          }

                      },

                  {      
                              "name": "Marché local d’Yverdon",
                              "tags": ["culture", "loisirs", "nature"],
                              "state": false,
                        "img":"marcheYverdon.jpg",
                        "lien":" https://www.yverdon-les-bains.ch/durabilite-energies-economie/durabilite/manger-local-et-de-saison",
                        "description": "Découvrez les produits locaux et l'ambiance du marché d'Yverdon.",

                      "location": {
                                "latitude":  46.780053110360996,
                                "longitude": 6.640764999679858
                              }
                          },

                {
                              "name": "pole emotion yverdon",
                              "tags": ["loisirs", "aventure", "sport", "detente",],
                              "state": false,
              "img":"poleDance.jpg",
              "lien":" https://app.pole-emotion.ch/",
                              "description": " Explorez la détente par la pole dance ainsi que la zumba  — un moment pour soi, alliant force et grâce.", 
              "location": {
                        "latitude":  46.80144958650776,
                        "longitude": 6.632091601266101
                      }

                          },


              {
                              "name": " Chaba Massage",
                              "tags": ["loisirs", "detente", "aventure"],
                              "state": false,
              "img":"massage_pierre_chaude.jpg",
              "lien":" https://chaba-massage.ch/",
                              "description": " Offrez-vous un moment de détente grâce à un massage relaxant.",
              "location": {
                        "latitude":  46.791106219952795,
                        "longitude": 6.6307160322009135
                      }

                          },
              

                      {
                              "name": " Zone sportive des Rives du Lac ",
                              "tags": ["loisirs", "sport", "aventure", "nature"],
                              "state": false,
              "img":"sportDehors.jpg",
              "lien":" https://www.yverdon-les-bains.ch/sports-et-activite-physique/installations-sportives/zone-sportive-des-rives-du-lac",
                              "description": " Profitez du plein air et activez-vous dans nos zones sportives dédiées.",

              "location": {
                        "latitude":  46.785379350289105,
                        "longitude": 6.643793411337642
              }

                          }, 

                      {
                              "name": " Piscine ",
                              "tags": ["loisirs", "sport", "detente", "nature"],
                              "state": false,
              "img":"piscine.jpg",
              "lien":" https://www.yverdon-les-bains.ch/sports-et-activite-physique/installations-sportives/zone-sportive-des-rives-du-lac",
                              "description": " Profitez d'un moment rafraîchissant dans nos piscines intérieures et extérieures.",

              "location": {
                        "latitude":  46.78448805589555,
                        "longitude": 6.646034848113684
              }

                          },


                      {
                              "name": " Skatepark  ",
                              "tags": ["loisirs", "sport", "nature"],
                              "state": false,
              "img":"sakepark.jpg ",
              "lien":" https://www.yverdon-les-bains.ch/medias/communiques-de-presse/detail/yverdon-les-bains-inaugure-le-skatepark-des-rives-du-lac",
                              "description": " Exprimez votre style et défiez vos limites dans notre skatepark dynamique.",

              "location": {
                        "latitude":  46.79042350148298,
                        "longitude": 6.643510521038858
              }


                          },


              {
                              "name": "Patinoire ",
                              "tags": ["loisirs", "sport", "detente"],
                              "state": false,
              "img":"patinoire.jpg",
              "lien":" https://www.yverdon-les-bains.ch/sports-et-activite-physique/installations-sportives/patinoire",
                              "description": " Glissez dans le plaisir et la fraîcheur de notre patinoire accessible à tous.",
              "location": {
                        "latitude":  46.78413918333223,
                        "longitude": 6.645251296834264
              }

                          },


              {
                              "name": " Make Me Bubble",
                              "tags": ["loisirs", "sport", "detente", "nature"],
                              "state": false,
              "img":"footsport.jpeg",
              "lien":" https://www.makemebubble.ch/",
                              "description": " Découvrez le football en bulle : une expérience ludique et rebondissante pour tous les âges ! ",
              "location": {
                        "latitude":  46.78424182284852,
                        "longitude": 6.652107454504925
              }

                          },
              {
                              "name": " Temple d'Yverdon-les-Bains",
                              "tags": ["loisirs", "culture", "nature"],
                              "state": false,
              "img":"templeyverdon.jpg",
              "lien":" https://www.yverdon-les-bains.ch/votre-commune/histoire-archives/batiments-18eme/temple ",
                              "description": " Explorez la sérénité et l'histoire enveloppantes de notre temple, un havre de paix pour l'esprit. ",

              "location": {
                        "latitude":  46.77892662214529,
                        "longitude": 6.6405828256693225
              }
                          },


              {
                              "name": " Baleinev Festival",
                              "tags": ["loisirs", "culture", " aventure "],
                              "state": false,
              "img":"baleinev.jpg",
              "lien":" https://baleinev.ch/",
                              "description": " Plongez dans l'aventure musicale et culturelle du Festival Baleinev, un rendez-vous incontournable pour les passionnés de musique et de festivités !",

              "location": {
                        "latitude":  46.77935387941223,
                        "longitude": 6.659284379645274
              }
              }

              ],
    };
  },

  computed: {
     
            filteredActivities() {
                if (!Array.isArray(this.activities)) {
                    console.error('Activities is not an array');
                    return []; // Return an empty array if activities is not an array
                    
                }
                if (this.activeTags.length === 0) {
                    console.log(this.activities);
                    return this.activities;
                }

                console.log(this.activeTags);

                return this.activities.filter(item => 
                    this.activeTags.some(tag => item.tags.includes(tag))
                );
            }

        },

        mounted() {
          this.initializeMap();

          this.toggleTag('loisirs');
  },

    methods: {
    
      
  initializeMap() {
    this.map = L.map('map').setView([46.778559, 6.641183], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Assurez-vous que la carte est prête
    this.map.on('load', () => {
      this.updateMap();
    });
  },
  

  updateMap() {
    // Assurez-vous que la carte existe et est chargée
    if (!this.map) return;

    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    const customIcon = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [15,15],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });

    this.filteredActivities.forEach(activity => {
      const location = activity.location;
      L.marker([location.latitude, location.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(activity.name);
    });




  },

            
            toggleTag(tag) {
                const index = this.activeTags.indexOf(tag);
                if (index > -1) {
                this.activeTags.splice(index, 1); 
                } else if (this.activeTags.length < 4) {
                this.activeTags.push(tag); // Add tag to active filters
                } 
                if (this.activeTags.length === 4) {
                  this.activeTags.splice(0, 1); 
                }
             
                this.updateMap(); // Update map every time the tags change
                console.log("ici");
            },

            clearFilters() {
                this.activeTags = [];  // Clear all filters
            }
        }}
        </script>

        <template>

            <div id="categorie-filtres">

        <div class="cfilters">
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('loisirs') }" 
                                @click="toggleTag('loisirs')"> S'amuser</button>
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('sport') }" 
                                @click="toggleTag('sport')">Santé physique</button>
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('nature') }" 
                                @click="toggleTag('nature')">Temps pour soi</button>
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('culture') }" 
                                @click="toggleTag('culture')">Cultiver la culture</button>
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('detente') }" 
                                @click="toggleTag('detente')">Relaxation</button>
                                <button 
                                class="filter-button" 
                                :class="{ 'active-filter': activeTags.includes('aventure') }" 
                                @click="toggleTag('aventure')">Communauté</button>
                                <button 
                                id="Mylittlebutton" 
                                @click="clearFilters">Supprimer</button>

        </div>
        </div>
        
      
      
      
      
      
      
            

        <div id="map" ></div>
        </template>


<style scoped>
#map {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-height: 620px;
    overflow: hidden;
  height: auto;
  padding: 10px 40px;
 
 align-items: center;
 box-shadow: 13px 12px 6px  rgba(0,0,0,0.2);
 margin-bottom: 50px;
 transition: box-shadow 0.9s ease; /* Ajouter la transition ici */
}


#map{

}

#map:hover{
 box-shadow: -9px 9px 2px #008C6F; /* Arrivée : ombre à gauche */
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
  align-items: center;
  width: 92vw;  
  justify-content: space-around;
  margin-bottom:40px;
  gap: 20px;
  padding-left: 40px;
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


#Mybutton {
  max-width: 100px;

    max-height: 30px;
    padding: 10px;
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







</style>


