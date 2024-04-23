<template>


<div id="corps">

  <header>
                <NavBarr :activeClass="'Carte'"/>
              </header>


    <div v-if="affiche==='accueil'">

    <div class="cortagus">
      <div id="titrecarte">
                  <h1>Bien kiffer la life à Yverdon-les-Bains !</h1>
                  <p>Pour être le champion de la jungle urbaine, faut que tu découvres tous les secrets de la ville ! 
                    Va fouiner sur les cartes pour trouver les spots qui vont te rendre la vie en ville carrément géniale !</p>
                </div>

<div id="mybuttonss">
  
<button @click="showquestion" id="Mybutton"> Trouver votre match</button>
<button @click="enliste" id="Mybutton" v-if="maporlist==='list'"> Sur la carte</button>
<button @click="enliste" id="Mybutton" v-if="maporlist==='map'">En liste</button>

</div>


<div v-if="maporlist==='list'">

<div v-if="affiche==='accueil'">
    <VosActivite v-if="Allactivite" :actdata="Allactivite"/>

    </div>
</div>

</div>
    <img src="@/assets/Carte/separation.png" alt="separation de page" id="separee">
    <div>
     



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

<div id="mapconteneur" v-if="maporlist==='map'">
  <CarteMob @enlist="enliste" />
</div>




  </div>


</template>

<script>
import QuestionY from '../components/QuestionY.vue';
import VosActivite from './VosActivite.vue';
import FilteredActivity from '../components/FilteredActivity.vue';
import NavBarr from '../components/NavBarr.vue';
import tindrrBackground from '@/assets/tindrrfond.png';
import CarteMob from '../components/Carte/CarteMob.vue';

export default {
    name: 'MeilleurYv',
    components: {
      QuestionY,
      VosActivite,
      NavBarr,
      FilteredActivity,
      CarteMob

    },
    data() {
        return {
            datareceived: false,
            affiche: "accueil",
            pretindrrdata: [],
            tindrrBackground,
            maporlist: "map",

            Allactivite:[
            { "name": "Bains thermaux d’Yverdon-les-Bains", "tags": ["détente", "loisirs", "nature"], "state": false,
        "description": "Profitez des bienfaits de l’eau thermale et des soins proposés par le centre thermal.",
        "img":"@/assets/BIenetre/Persntravail.png"},
                  {
            "name": "Maison d'Ailleurs",
            "tags": ["culture", "aventure", "loisirs"],
            "state": false,
            "location": {
              "latitude": 46.778474,
              "longitude": 6.641182
            }
          },
        
        { "name": "Centre Pro Natura de Champ-Pittet", "tags": ["nature", "détente", "culture"], "state": false,
        "description": "Centre de bien-être","img":"@/assets/LogoB.jpg" },
        
        
        { "name": "Parc Aventure Yverdon", "tags": ["aventure", "sport", "nature"], "state": false,
        "description": "Découvrer le parc Aventure en famille ou seul ! ",
        "img":"@/assets/LogoB.jpg"},
        
        
        { "name": "Musée d’Yverdon et région", "tags": ["culture", "loisirs", "détente"], "state": false,
        "img":"@/assets/LogoB.jpg",
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
        
          ],

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
      }
    
        }
    },
    props: {
        showNavBar: {
          type: Boolean,
          default: true,
          required: false
        }
    },

  mounted() {
    this.$emit('update:showNavBar', false);

 //   this.map = L.map('map').setView([46.778559, 6.641183], 13);
   // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //    attribution: '© OpenStreetMap contributors'
   // }).addTo(this.map);

    //for (const [name, location] of Object.entries(this.locations)) {
      //L.marker([location.latitude, location.longitude]).addTo(this.map)
     //   .bindPopup(name); 
    //}

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


<style>

header {
  margin-bottom:30px;
}
#corps {
  background-color: #F4F0E9;
  background-image: url('../assets/question/ligne.png');
  background-size: cover;
  background-repeat: repeat;
  background-position: bottom;  
  padding: 20px;
  min-height: 95vh;
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


.buttons {
  display: flex;
  flex-direction: row;
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