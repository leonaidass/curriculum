<template>
  <div id="app">
    <v-app>
      <NavBar/>

      <v-main>
         <Hero/>
         <SobreMi/>
         <Portafolio/>
         <Proyectos/>
         <Contacto/>
         <Footer/>
      </v-main>


    </v-app>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import SobreMi from "./components/SobreMi.vue";
import Portafolio from "./components/Portafolio.vue";
import Proyectos from "./components/Proyectos.vue";
import Contacto from "./components/Contacto.vue";
import Footer from "./components/Footer.vue";
  export default {
    components:{
      NavBar,
      Hero,
      SobreMi,
      Portafolio,
      Proyectos,
      Contacto,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
