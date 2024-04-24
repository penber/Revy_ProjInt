<template>

  <div id="conteneurtindrr">
    
     <div id="texttindrr">
        <h1>Prépare-toi à découvrir tes coins de rêve, 
          là où même les mouettes auraient envie de faire un break !</h1>
        <p>Glisse vers la gauche ou la droite</p>
    </div>


    <div class="tindrr-container">
      

        <div id="vote">
          <button @click="dislikeActivity" class="like-button" id="jaimepo"></button>

      <transition name="swipe">
        <div v-if="currentActivityIndex < activities.length" class="activity-display">
          <ActCard :myData="currentActivity" :class="{ 'swipe-left': swipeLeft, 'swipe-right': swipeRight }"/>
        </div>
      </transition>
      <button @click="likeActivity" class="like-button" id="jaime"></button>

      </div>



      
     <div class="activity-counter">
        {{ currentActivityIndex + 1 }} sur {{ activities.length }}
      </div>
 

    </div>
  
  </div>
 
</template>

<script>

import ActCard from './ActCard.vue';
export default {

  name: 'FilteredActivities',
  components: {
    ActCard
  },
  props: {
    activities: Array
  },
  emits: ['liked'],
  data() {
    return {
      currentActivityIndex: 0,
      likedActivities: [],
      swipeLeft: false,
      swipeRight: false,
    };
  },

  computed: {
    currentActivity() {
      let activitey = this.activities[this.currentActivityIndex];
      console.log(activitey);
      return activitey;
    }
  },

  methods: {
    likeActivity() {
      let test = 0;
      this.swipeRight = true;
      if(test===0){
        setTimeout(() => this.processActivity('like'), 100);
      }
      test++;
        },
    dislikeActivity() {
      this.swipeLeft= true;
      setTimeout(() => this.processActivity('dislike'), 500);
        },  


    processActivity(action) {
      // Card animation logic before removing the card...
      if (action === 'like') {
        this.likedActivities.push(this.currentActivity);
      }
      this.moveToNextActivity();
    },
    moveToNextActivity() {
      setTimeout(() => {
        if (this.currentActivityIndex < this.activities.length - 1) {
          this.currentActivityIndex++;
          this.resetSwipe();

        } else {
          this.$emit('liked', this.likedActivities);
          this.resetSwipe();

        }
      }, 300); 
    },
    resetSwipe() {
      this.swipeLeft = false;
      this.swipeRight = false;
    }
  }
}
</script>

<style>

#conteneurtindrr {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
  max-width: 90%;
}

.tindrr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 50%;
  margin: auto;
}

#texttindrr {
  display: flex;

  flex-direction: column;
  align-items: left;
  text-align: left;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

#texttindrr h1 {
  width: 80%;
  font-size: 2.6em;
  color: #333;
  margin-bottom:0px;
}

#texttindrr p {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}


#vote {
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 20px;
  height: fit-content;
  align-items: center;
  margin-bottom: 30px;
}

.activity-display  {
  display: flex;
  flex-direction: row;
  align-items: center;
  width:80%;
  max-width: 370px;
  min-height: 350px;
  border-radius: 10px;
  min-width: fit-content;
  transition: transform 0.5s ease-out;

}

.actacard{
  bottom: 20px;
  left: 20px;
  z-index: 2;
}

.activity-card {
  margin-bottom: 20px;
  width: 50%;
}

.activity-display {
  /* ... */
  transition: transform 0.5s ease-out;
}

.swipe-left {
  transform: translateX(-100%) rotate(-20deg);
  opacity: 0;
}

.swipe-right {
  transform: translateX(100%) rotate(20deg);
  opacity: 0;
}

/* CSS transitions */
.swipe-enter-active, .swipe-leave-active {
  transition: opacity 0.5s;
}
.swipe-enter, .swipe-leave-to /* .swipe-leave-active in <2.1.8 */ {
  opacity: 0.1;
}


#jaime {
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
background-image: url('@/assets/Icons/like.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-color: #66666600;
padding: 0px;
padding-bottom: 0px;

}

#jaimepo {
  min-width: 80px;
  min-height: 80px;
  border-radius: 20%;
background-image: url('@/assets/Icons/dislike.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-color: #ffffff00;
}

.like-button, .dislike-button {
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.like-button:hover {
scale:1.1
}

.dislike-button:hover {
  scale:1.1
}

.activity-counter {
  font-size: 16px;
  color: #666;
}





</style>
