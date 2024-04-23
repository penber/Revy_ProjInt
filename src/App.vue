<template>
   
 
    <router-view />

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!',
      showNavBar: true,

    }
  },  
  methods: {
    sayHello() {
      alert(this.message);
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  max-width: 100vw;
  min-height: 100%;
  color: #2c3e50;
}

.active-link, .router-link-exact-active{
  color:  #42b983; /* Changez la couleur selon vos préférences */
}

#conteneur{
  max-height: 5%;
}

#main-nav {

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 5vh;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

#nav-items a {
    font-weight: 500;
    color: #333;
    text-decoration: none;
    margin: 0 10px;
    font-size: large;
}


#nav-items {
  width: 80%;
  display: flex;
  justify-content: right;
  padding: 15px;

}

#logo {
  max-height: 50px;
}



.hamburger-menu {
    background: none;
    border: none;
    font-size: 24px;
}

nav {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>




