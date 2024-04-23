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
          // { text: "Êtes-vous intéressé par l'histoire et le patrimoine culturel ?", tags: { culture: 2, loisirs: 1, aventure: -1 } },
            { text: "Aimez-vous les activités relaxantes ?", tags: { détente: 2, loisirs: 1, sport: -1 } },
      //  { text: "Préférez-vous les activités sportives ?", tags: { sport: 2, aventure: 1, nature: 1, détente:-1 } },
      //     { text: "Aimez-vous les activités culturelles ?", tags: { culture: 2, loisirs: 1 } },
      //     { text: "Préférez-vous les activités en famille ?", tags: { loisirs: 2, détente: 1, sport: -1 } },
      //    { text: "Aimez-vous les activités éducatives ?", tags: { culture: 2, loisirs: 1 } },
         { text: "Préférez-vous les activités d'aventure ?", tags: { aventure: 2, sport: 1, nature: -1, détente:-1}}
        ],
                
        activities: [
            { "name": "Bains thermaux d’Yverdon-les-Bains", "tags": ["détente", "loisirs", "nature"], "state": false,
        "description": "Profitez des bienfaits de l’eau thermale et des soins proposés par le centre thermal.",
        "img":"@assets/logo-noir.png" },
        
        { "name": "Centre Pro Natura de Champ-Pittet", "tags": ["nature", "détente", "culture"], "state": false,
        "description": "Centre de bien-être","img":"@/assets/logo-noir.png" },
        
        
        { "name": "Parc Aventure Yverdon", "tags": ["aventure", "sport", "nature"], "state": false,
        "description": "Découvrer le parc Aventure en famille ou seul ! ",
        "img":"@/img/logo-noir.png"},
        
        
        { "name": "Musée d’Yverdon et région", "tags": ["culture", "loisirs", "détente"], "state": false,
        "img":"@/assets/logo-noir.png",
      "description": "Découvrez l'histoire à travers les expositions du musée." },
        
        
        
        { "name": "Maison d’Ailleurs", "tags": ["culture", "loisirs", "aventure"], "state": false,
        "img":"../assets/LogoB.jpg",
      "description": "Voyagez dans l'univers de la science-fiction et de l'imaginaire." },
        
        { "name": "Grottes de Vallorbe", "tags": ["aventure", "nature", "culture"], "state": false,
      "description": "Découvrez les grottes de Vallorbe et leur univers souterrain." },
                
        { "name": "Château de Grandson", "tags": ["culture", "histoire", "loisirs"], "state": false,
      "description": "Visitez le château de Grandson et découvrez son histoire." },
                
        { "name": "Ste-Croix - Boîtes à musique", "tags": ["culture", "loisirs", "histoire"], "state": false },
        
        { "name": "Plage d'Yverdon", "tags": ["détente", "nature", "loisirs"], "state": false,
      "description": "Lieu de détente et de loisirs pour toute la famille." },
       
      { "name": "Cinéma Bel-Air", "tags": ["loisirs", "culture", "détente"], "state": false,
      "description":"Un cinema avec les dernière sorties"},
        { "name": "EXPLORiT Loisirs & Découvertes", 
            "tags": ["famille", "éducation", "loisirs"], "state": false },
            {
                "name": "Forêt d’Yverdon-les-Bains pour le Trail et la Randonnée",
                "tags": ["nature", "aventure", "sport"],
                "state": false,
                "description": "Parcours de trail et de randonnée dans la forêt d'Yverdon-les-Bains."
            },

            {
                "name": "Jardins du Château d’Yverdon",
                "tags": ["culture", "détente", "loisirs"],
                "state": false,
                "description": "Détente et promenade dans les jardins du château d'Yverdon."
            },
            {
                "name": "Festival d’Yverdon-les-Bains",
                "tags": ["culture", "loisirs", "aventure"],
                "state": false,
                "description": "Festival de musique et de culture à Yverdon-les-Bains."
            },
            {
                "name": "Marché local d’Yverdon",
                "tags": ["culture", "loisirs", "nature"],
                "state": false,
                "description": "Découvrez les produits locaux et l'ambiance du marché d'Yverdon."
            },
            {
                "name": "Observatoire d’Yverdon-les-Bains",
                "tags": ["éducation", "aventure", "famille"],
                "state": false,
                "description": "Découvrez l'astronomie à l'observatoire d'Yverdon-les-Bains."
            }
        
          ]

        };
    },
    computed: {
      filteredActivities() {
        return this.activities.filter((activity) => {
          const scores = activity.tags.map(tag => this.tagsScores[tag]);
          const average = scores.reduce((a, b) => a + b, 0) / scores.length;
          return average > 1; 
        }).slice(0, 1); 
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
  border-radius: 50px;
  background-color: #447ebd00;
  border: 2px solid #008C6F;
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
  