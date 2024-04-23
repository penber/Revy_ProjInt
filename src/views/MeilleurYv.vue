<template>


<div id="corps">




          <header>
            <NavBarr :activeClass="'ymeilleur'"/>
          </header>

          <button id="Mybutton" @click="voittt" v-if="affiche ==='resultats'">Voir Toutes les activités </button >

<div v-if="affiche === 'accueil'" >

  <div class="cortagus">

<div id="titrecarte">
  <h1>Ce ne sont pas les activités qui manquent !</h1>
  <p>Yverdon regorge d'activités passionnantes, mais toutes ne sont pas faites pour toi. Passe notre test personnalisé et découvre les activités qui correspondent parfaitement à tes goûts et à tes intérêts.</p>
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
        <div v-if="affiche ==='resultats'">

        <VosActivite :actdata="datareceived" />      
        </div>

    
          <div v-if="maporlist==='map'" class="mymap">
            <CarteMob @enlist="enliste" v-if="affiche === 'accueil'"/>

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
            Allactivite:[
            { "name": "Bains thermaux d’Yverdon-les-Bains", "tags": ["détente", "loisirs", "nature"], "state": false,
        "description": "Profitez des bienfaits de l’eau thermale et des soins proposés par le centre thermal.",
        "img":"@/assets/BIenetre/Persntravail.png"},
        
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
  background-position: bottom;  
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
    width: 100%;
    max-width: 200px;
        padding: 1em 2em;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
      }

      
      
      #Mybutton:hover {
        background-color: #a0dfe2;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
      }
      
      #Mybutton:active {
        transform: translateY(-1px);
      }
</style>