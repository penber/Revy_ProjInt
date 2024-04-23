<template>

<div class="card">
<!--   <div class="card-image">
    <img :src="myData.img">
   </div> -->
  <div class="card-content">
    <h3>{{myData.name}}</h3>
    <p>{{myData.description}}</p>
  </div>
</div>





</template>

<script>
export default {
  name: 'ActCard',

  props: {
    myData: Object
  },
  mounted() {
    console.log("actdtata:" + this.myData)
  }
}
</script>

<style>



.card {
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  widows: auto;
 min-width: 200px;
 height: 200px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all .2s;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
 overflow: hidden;
}

.card:hover {
 box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
}

.card-image {
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height:auto; /* Assurez-vous que l'image garde son ratio */
  object-fit: cover; /* Couvre la zone de l'image sans la déformer */
}


.card-content {
  padding: 15px;
  background: #fff;
  overflow: hidden;
}

.card-content h3 {
  margin-top: 0;
  color: #333;
}

.card-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}


</style>