<template>


<div id="corps">

  <header>
                <NavBarr :activeClass="'Carte'"/>
              </header>


    <div v-if="affiche==='accueil'">

    <div class="cortagus">
      <div class="titrecarte">
                  <h1>Bien kiffer la life à Yverdon-les-Bains !</h1>
                  <p>Pour être le champion de la jungle urbaine, faut que tu découvres tous les secrets de la ville ! 
                    Va fouiner sur les cartes pour trouver les spots qui vont te rendre la vie en ville carrément géniale !</p>
                </div>

        <div id="mybuttonss">
          
          <router-link id="Mybutton" to="/MeilleurYv">Trouver votre match</router-link>
      

        <input type="checkbox" @click="enliste" class="theme-checkbox">
        </div>



      </div>
        



          <div >  

            <div v-if="maporlist==='list'">

                <div v-if="affiche==='accueil'">
                  <img src="@/assets/Carte/separation.png" alt="separation de page" id="separee">
                 
                    <VosActivite v-if="activities" :actdata="activities"/>

                    </div>
                </div>

            <div id="mapconteneur" v-if="maporlist==='map'">
              <img src="@/assets/Carte/separation.png" alt="separation de page" id="separee">

                <CarteMob/>
              </div>
          </div>
           
      </div>




<div>

<QuestionY 
      @likedresults="showresult"  v-if="affiche==='question'"/>

</div>

<div v-if="affiche === 'tindrr'" id="showmymatch">
<FilteredActivity :activities="datareceived" @liked="showmatch" />
</div>

<div v-if="affiche ==='resultats'">

<VosActivite :actdata="datareceived" />      
</div>





  </div>

  <RevyFooter />

</template>

<script>
import QuestionY from '../components/QuestionY.vue';
import VosActivite from './VosActivite.vue';
import FilteredActivity from '../components/FilteredActivity.vue';
import NavBarr from '../components/NavBarr.vue';
import tindrrBackground from '@/assets/tindrrfond.png';
import CarteMob from '../components/Carte/CarteMob.vue';
import RevyFooter from '@/components/RevyFooter.vue';
import { RouterLink } from 'vue-router';
export default {
    name: 'MeilleurYv',
    components: {
      QuestionY,
      VosActivite,
      NavBarr,
      FilteredActivity,
      CarteMob,
      RouterLink,
      RevyFooter,

    },
    data() {
        return {
            datareceived: false,
            affiche: "accueil",
            pretindrrdata: [],
            tindrrBackground,
            maporlist: "map",
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
                  "description": "Découvrez les sciences et la technologie de manière ludique et interactive.",
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
          map: null,
     
    
        }
    },
   

  mounted() {
    this.$emit('update:showNavBar', false);


  },
  unmounted() {
    this.$emit('update:showNavBar', true);
  },

    methods: {
     
    showquestion() {
      this.affiche = "question";
    },

    enliste() {
        if (this.maporlist === "list") {
          this.maporlist = "map";
        } else{
          this.maporlist = "list";
        }
      },


    showresult(data) {
      this.datareceived = data;
      console.log(data);
      //changer limage de fond de #corps

      
      let img = document.getElementById('corps');
      img.style.backgroundImage = `url('${this.tindrrBackground}')`;

      //et les propriétés nécéssaire pour que limage soit contenu dans le div

      img.style.backgroundSize = 'cover';
      
    img.style.backgroundRepeat = 'repeat';
    img.style.backgroundPosition = 'bottom';
    

      this.affiche = "tindrr";
  },

  showmatch(data) {
    this.pretindrrdata = this.datareceived;
    this.datareceived = data;
    this.affiche = "resultats";
  }

}
}

</script>


<style scoped>

header {
  margin-bottom:30px;
}
#corps {
  background-color: #F4F0E9;
  background-image: url('../assets/Carte/ligne.png');
  background-size: auto;
  background-repeat: repeat;
  background-position: top;  
  padding: 20px;
  min-height: 95vh;
}

  
#mybuttonss{
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  margin-top: 10px;
  
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
  background-color: #000000; /* Ajustez la couleur du bouton selon votre design */
  color: white;
}

button:active {
  transform: scale(0.98); /* Effet d'interaction simple */
}








.theme-checkbox {
  --toggle-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 4.25em;
  width: fit-content;
  height: 2.125em;
  background: linear-gradient(to right, #008C6F 50%, #ffffff 50%) no-repeat;
  background-size: 205%;
  background-position: 0;
  transition: 0.6s;
  transition: 0.6s;
  border-radius: 99em;
  position: relative;
  cursor: pointer;
  font-size: var(--toggle-size);
  margin: 7px;

}

.theme-checkbox::before {
  content: "";
  width: 1.45em;
  height: 1.45em;
  position: absolute;
  top: 0.218em;
  left: 0.438em;
  background: linear-gradient(to right, #1c1c1c 50%, #f8f8f8 50%) no-repeat;  
  background-size: 205%;
  background-position: 100%;
  border-radius: 50%;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  border:2px solid #008C6F;

}

.theme-checkbox:checked::before {
  left: calc(100% - 1.35em - 0.438em);
  background-position: 0;
}

.theme-checkbox:checked {

  background-position: 100%;
}


 
@media (min-width: 360px) and (max-width: 1000px) {
  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }


  
#corps { 
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-height: 95vh;
  align-items: center;
}
#mybuttonss{
  padding: 0px;
}

}


</style>