<template>
  <div id="app">
    <v-app>
      <NavBar/>

      <v-main>
         <Hero/>
         <SobreNosotros/>
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
import SobreNosotros from "./components/SobreNosotros.vue";
import Portafolio from "./components/Portafolio.vue";
import Proyectos from "./components/Proyectos.vue";
import Contacto from "./components/Contacto.vue";
import Footer from "./components/Footer.vue";
  export default {
    components:{
      NavBar,
      Hero,
      SobreNosotros,
      Portafolio,
      Proyectos,
      Contacto,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
