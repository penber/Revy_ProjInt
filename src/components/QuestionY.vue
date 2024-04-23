<template>


<div v-if="!showResults" class="quiz-container">

 
    <div id="contenuquestionnaire" v-if="currentQuestion < questions.length">

      <div id="questionstext"> 
            <div id="titreaccroche">
                  <h3>  Avant de te jeter dans le grand bain des activités, 
                    faisons connaissance ! Je ne voudrais pas te recommander une séance de tricot 
                    si tu préfères les cascades en VTT !</h3>
            </div>

            <p>{{ questions[currentQuestion].text }}</p>
      </div>
             
    <!-- <div id="echellesavancer">
                  <button v-for="score in 5" :key="score" @click="selectAnswer(score)">{{ score }}</button>
                  <p>Question {{ currentQuestion + 1 }}/{{ questions.length }}</p>

              </div> -->
              <div id="echellesavancer">
              <div id="choise-container">
                <button id="choisebtn" v-for="score in 5" :key="score" @click="selectAnswer(score)"></button>
              </div>
              <div id="choise-labels">
                  <span>Pas grâve</span>
                  <span>Neutre</span>
                  <span>Important</span>
                </div>

                <div id="barreavancement">
          <div v-for="(question, index) in questions" :key="question.id" class="rectangle-container">
            <svg width="90" height="10">
              <rect width="90" height="10" :fill="currentQuestion >= index ? '#008C6F' : '#D3D3D3'" />
            </svg>
          </div>
        </div>

              
             
              <p>Question {{ currentQuestion + 1 }} sur {{ questions.length }}</p>
            </div>

     </div>

     <div id="askbuttons">
      <button @click="nextQuestion" v-if="currentQuestion < questions.length - 1">Suivant</button>

      <button @click="restartQuiz">Recommencer</button>

     </div>
         
</div>

      
  </template>
  
  <script>

  export default {
    name: 'ActivityQuiz',
    components: {
    },
    emits: ['likedresults'],
    data() {
      return {
        currentQuestion: 0,
        showResults: false,
        likedActs: [],
        tagsScores: { loisirs: 0, sport: 0, nature: 0, culture: 0, détente: 0, aventure: 0 },
        questions: [
          { text: "Préférez-vous les activités en plein air ?", tags: { nature: 2, sport: 1, loisir:1 } },
          { text: "Êtes-vous intéressé par l'histoire et le patrimoine culturel ?", tags: { culture: 2, loisirs: 1, aventure: -1 } },
            { text: "Aimez-vous les activités relaxantes ?", tags: { détente: 2, loisirs: 1, sport: -1 } },
        { text: "Préférez-vous les activités sportives ?", tags: { sport: 2, aventure: 1, nature: 1, détente:-1 } },
      //     { text: "Aimez-vous les activités culturelles ?", tags: { culture: 2, loisirs: 1 } },
      //     { text: "Préférez-vous les activités en famille ?", tags: { loisirs: 2, détente: 1, sport: -1 } },
      //    { text: "Aimez-vous les activités éducatives ?", tags: { culture: 2, loisirs: 1 } },
         { text: "Préférez-vous les activités d'aventure ?", tags: { aventure: 2, sport: 1, nature: -1, détente:-1}}
        ],
                
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
                          "img":"maisond'ailleurs.jpg",
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
        return this.activities.filter((activity) => {
          const scores = activity.tags.map(tag => this.tagsScores[tag]);
          const average = scores.reduce((a, b) => a + b, 0) / scores.length;
          console.log(average)
          return average > 1; 
        }).slice(0, 10); 
      }
    },
    methods: {

      selectAnswer(answer) {
        const question = this.questions[this.currentQuestion];
        Object.entries(question.tags).forEach(([tag, score]) => {
            this.tagsScores[tag] += score * answer; 
        });

        if (this.currentQuestion < this.questions.length - 1) {
            this.nextQuestion();
        } else {
            this.showResults = true;
            let actdata = this.filteredActivities;
            console.log("Filtered Activities: ", actdata);
            this.afficherLiked(actdata);
        }
    },


        nextQuestion() {
          this.currentQuestion++;
        },
    
      restartQuiz() {
        this.currentQuestion = 0;
        Object.keys(this.tagsScores).forEach(key => {
          this.tagsScores[key] = 0;
        });
        this.activities.forEach(activity => {
          activity.state = false;
        });
        this.showResults = false; // Ajoutez cette ligne pour réinitialiser l'affichage
      },

      afficherLiked(likedActivities) {
        console.log('travisscoot' + likedActivities)
        this.likedActs = likedActivities;
        this.$emit('likedresults', this.likedActs);
      }

    
    }
  }
  </script>
  
  <style scoped>

 .quiz-container {
 width: 100%;
 display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: auto;
  border-radius: 10px;
}

#contenuquestionnaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 10px 50px
}



#echellesavancer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  min-width: 800px;

  margin-top: 30px;
}

#choise-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
} 

#choise-labels {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;

  font-weight: 900;
  font-size: 1.1em;
}

#choisebtn {
  width: 80px;
  height: 80px;
  max-width: 80px;
  max-height: 80px;
  border-radius: 50px;
  background-color: #447ebd00;
  border: 2px solid #008C6F;
}
#choisebtn:hover {
  background-color: #008C6F;
  transform: scale(1.1);
}

#questionstext {

  display: flex;
  flex-direction: column;
  padding: 10px 120px;
}

#titreaccroche h3 {
  font-size: 2.1em;
  text-align: left;
  margin-bottom: 50px;
}

#questionstext p {
  font-size: 1.9em;
  text-align: left;
  margin: 10px;
  font-weight: 500;


}

#barreavancement {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Assurez l'espacement entre les éléments */
  width: 100%;
  padding-bottom: 5px; /* Ajoutez du padding pour que les rectangles ne touchent pas les bords du conteneur */
  margin-top: 70px;
  border-radius: 10px;

}

.rectangle-container {
  margin: 0 5px; /* Ajoutez une marge autour des rectangles pour l'espacement */
  border-radius: 10px;

}

.rectangles {
  width:100%;
  border-radius: 10px;
  fill: #5b380b; /* Utilisez 'fill' pour SVG au lieu de 'background-color' */
}

#askbuttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0px 20px;
}

button {
  display: inline-block;
  background-color: #447fbd;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  outline: rgb(209, 218, 245) solid 2px;

  background-color: #0b5b17;
}

button:focus {
  box-shadow: 0 0 0 2px rgba(29, 101, 179, 0.5);
}



@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.quiz-container > div {
  animation: fadeIn 0.5s ease-out;
}

  </style>
  