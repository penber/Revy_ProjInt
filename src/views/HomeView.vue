<template>

<div id="conteneur">

  <NavBarr :activeClass="'Accueil'"/>

        <section id="welcome-section">

          <div id=textentre>
            
            <h1>Bienvenue à Yverdon</h1>

            <p>Découvrez notre belle ville et
               plongez-vous dans son atmosphère enrichissante et multiculturelle !</p>

           

            <div id="buttons">
               
            </div>

          </div>
        </section>

  <SectionOne></SectionOne>

  <PresentTindr></PresentTindr>

<MicrotrotComponent></MicrotrotComponent>



</div>

<RevyFooter></RevyFooter>
</template>

<script>

import PresentTindr from '../components/Accueil/PresentTindr.vue'
import SectionOne from '../components/Accueil/SectionOne.vue'
import MicrotrotComponent from '../components/Accueil/MicrotrotComponent.vue'
import RevyFooter from '../components/RevyFooter.vue'
import '../assets/styles/global.css'; 
import NavBarr from '@/components/NavBarr.vue';
export default {
  name: 'HomeView',
  components: {
    PresentTindr,
    SectionOne,
    MicrotrotComponent,
    RevyFooter,
    NavBarr
  },
  
    mounted() {
    this.$emit('update:showNavBar', false);

  },
  unmounted() {
    this.$emit('update:showNavBar', true);
  },
 

}
</script>


<style scoped>


#conteneur{
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: hidden;
  background-color: #F4F0E9;
  background-image: url('@/assets/Accueil/lignetrajet.png');
  background-repeat: no-repeat;
  background-position: center;

}


#nav-items a {
  color: white;
  font-weight: 380;
  text-decoration: none;
  padding:15px;

}
#main-nav {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    width: 90vw;
    background-color: #ffffff00;
    padding: 15px;
}


#nav-items {
  width: fit-content;
  padding: 0;
  justify-content: space-between;
}




#welcome-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    background: url('@/assets/Accueil/landingimg2.png') no-repeat center center;
    background-size: cover;
    color: #fff;
    background-color: rgb(162, 199, 223);

  }

#welcome-section div {
    text-align: left;
}


#textentre {
  position: relative;
  bottom: 18vh;
left: 2vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  align-content: center;

  padding: 15px;

    text-align: center;
    color: #ffffff;
    max-width: 800px;

    margin: 15px;
}

#textentre h1 {
  font-family: 'typotitre', sans-serif;

    font-size: 4em;
  
}

#textentre p {
  font-family: 'typotexte', sans-serif;

    font-size: 1.2em;
    max-width: 550px;
 
}
#textentre p, #textentre h1{
  
  margin:10px;
}


#buttons {

    display: flex;
    justify-content: space-around;
    align-items: center;
      margin-top: 50px;
    width: fit-content;
    max-width: 90%;

}
button {
        padding: 1.3em 3em;
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
        margin-right: 5%;
      }

      
      #Mybutton:active {
        transform: translateY(-1px);
      }


button:active {
  transform: translateY(-1px);
}

h1 {
    font-size: 3em;
}




 
@media (min-width: 360px) and (max-width: 1000px) {

  #listeact {
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
  }
  #welcome-section{
    align-items: left;
    align-content: baseline  !important ;
    padding: 0px  !important ;
    margin: 0px  !important ;
  }

  #textentre {
    bottom:20vh;
    left: 0vh;
    padding: 15px  !important ;
    margin: 0px  !important ;
  }



  #nav-items a {
  color: white;
  font-weight: 480;
  text-decoration: none;
  padding:15px;
  letter-spacing: 2px;

}
}


</style>