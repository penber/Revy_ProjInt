<template>


<div id="corps">




          <header>
            <NavBarr :activeClass="'ymeilleur'"/>
          </header>


<div v-if="affiche === 'accueil'" >

  <div class="cortagus">

<div class="titrecarte">
  <h1>Ce ne sont pas les activités qui manquent !</h1>
  <p>Yverdon regorge d'activités passionnantes, mais toutes ne sont pas faites pour toi. 
    Passe notre test personnalisé et découvre les activités qui correspondent parfaitement 
    à tes goûts et à tes intérêts.</p>
</div>

<div id="mybuttonss">
  
<button @click="showquestion" id="Mybutton"> Trouver votre match</button>
<button @click="enliste" id="Mybutton" v-if="maporlist==='list'"> Sur la carte</button>
<button @click="enliste" id="Mybutton" v-if="maporlist==='map'">En liste</button>

</div>


</div>

<img src="@/assets/Carte/separation.png" alt="separation de page" id="separee">


</div>
     
          <div v-if="maporlist==='list'">

            <div v-if="affiche==='accueil'">
              
                <VosActivite v-if="Allactivite" :actdata="Allactivite"/>
              
                </div>
          </div>
            
          <div id="conteneurquiz">

        <QuestionY 
                  @likedresults="showresult"  v-if="affiche==='question'"/>

        </div>

        <div v-if="affiche === 'tindrr'" class="filtredactivites">
        <FilteredActivity :activities="datareceived" @liked="showmatch" />
        </div>


        <div v-if="affiche ==='resultats'" class="resultat">
          <section >

<div class="titrecarte">
          <h1>Tes petits coins parfaits !</h1>
          <p>Selon tes goûts, voici la liste des activités qui vont te rendre fou/folle de joie !</p>
        </div>

        <div>
          <button @click="showquestion"  class="repasse">Repasser le test</button>
        </div>

</section>

<img src="@/assets/Carte/separation.png" alt="separation de page" id="separee">


        <VosActivite :actdata="datareceived" />      
        </div>

    
          <div v-if="maporlist==='map'" class="mymap">
            <CarteMob v-if="affiche === 'accueil'"/>

          </div>

  </div>

  <RevyFooter/>
</template>

<script>
import QuestionY from '../components/QuestionY.vue';
import VosActivite from './VosActivite.vue';
import FilteredActivity from '../components/FilteredActivity.vue';
import NavBarr from '../components/NavBarr.vue';
import tindrrBackground from '@/assets/tindrrfond.png';
import CarteMob from '@/components/Carte/CarteMob.vue';
import RevyFooter from '@/components/RevyFooter.vue';

export default {
    name: 'MeilleurYv',
    components: {
      QuestionY,
      VosActivite,
      NavBarr,
      FilteredActivity,
      CarteMob,
      RevyFooter

    },
    data() {
        return {
            datareceived: false,
            affiche: "question",
            pretindrrdata: [],
            maporlist: "list",
            tindrrBackground,
            Allactivite:  [
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
        }
    },


  mounted() {
    this.$emit('update:showNavBar', false);
    let img = document.getElementById('corps');
      img.style.backgroundImage = `url('${this.tindrrBackground}')`;

      //et les propriétés nécéssaire pour que limage soit contenu dans le div

      img.style.backgroundSize = 'cover';
      
    img.style.backgroundRepeat = 'repeat';
    img.style.backgroundPosition = 'bottom';
    

  },
  unmounted() {
    this.$emit('update:showNavBar', true);
  },



    methods: {
     
      enliste() {
        if (this.maporlist === "list") {
          this.maporlist = "map";
        } else{
          this.maporlist = "list";
        }
      },


    showquestion() {
      this.affiche = "question";
    },

    showresult(data) {
      
      this.datareceived = data;
      console.log(data);
      
      //verifier le duplicata dans tout le tableau datareceived et si suprimmer le duplicata
    
      this.datareceived.forEach(element =>{
        this.datareceived.forEach(act => {
          if (element.name === act.name) {
            this.datareceived.splice(this.datareceived.indexOf(act), 1);
          }
        });
        
      });

      


      this.affiche = "tindrr";
  },

  showmatch(data) {
    this.pretindrrdata = this.datareceived;
    this.datareceived = data;
    this.affiche = "resultats";
  },

  voittt(){
    this.affiche = "accueil";
  }

}
}

</script>


<style>

#corps {
  background-color: #F4F0E9;
  background-image: url('../assets/question/ligne.png');
  background-size: cover;
  background-repeat: repeat;
  background-position: top;  
  padding: 20px;
  min-height: 95vh;
}

.cortagus{
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center;
}


.filtredactivites{
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




#filtres {
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
  
  #filtres h1 {
    font-size: 2.1em;
    margin: 50px;
  }

.resultat section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:30px;
  padding-right: 80px;
}
  
  #mybuttonss {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:70%;
    margin: 0 auto;
    padding: 0 20px;
    margin: 20px 0px 25px 0px;
  }

  #Mybutton {
    max-width: 220px;
        padding: 1em 2em;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1.95px;
        font-weight: 500;
        color: #ffffff;
        background-color: #304E8D;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
      }

      
      
      #Mybutton:hover {
        background-color: #000000;
        box-shadow: 2px 5px 8px rgba(133, 193, 152, 0.915);
        color: #fff;
        transform: translateY(-3px);
      }
      
      #Mybutton:active {
        transform: translateY(-1px);
      }


      
  @media (min-width: 360px) and (max-width: 1000px) {
  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }

  
#corps {
  padding: 0px;
  padding-bottom: 30px;
  min-height: 95vh;
}


#myButton{ 
  min-width:110px !important;
  width: 110px !important;
  padding: 8px 10px !important;
  max-width:110px !important;
}


.resultat section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
  padding-right: 10px;
}
  



.filtredactivites{
  
  margin-bottom:0px;
padding-top: 0px;
}
}
</style>