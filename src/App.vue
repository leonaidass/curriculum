<template>
  <div id="app">
    <v-app>
      <NavBar/>

      <v-main>
         <Hero/>
         <SobreNosotros/>
      </v-main>


    </v-app>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import SobreNosotros from "./components/SobreNosotros.vue";
  export default {
    components:{
      NavBar,
      Hero,
      SobreNosotros
    }
  }
</script>

<style lang="scss" scoped>

</style>
