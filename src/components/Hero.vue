<template>
    <div>
       <v-container class="pt-15">
           <v-row>
               <v-col lg="6" cols="12">
                   <h2 class="intro d-none d-sm-flex">Bienvenidos a mi Curriculum</h2>
                   <p class="descripcion">Me llamo Leonardo Esquivel soy un apasionado por la tecnología y los desafíos, 100% autodidacta. Actualmente de desempeño como desarrollador full stack para la policía de San Juan </p>
                      <!-- <v-btn color="success" rounded>Get Started</v-btn>
                      <v-btn color="indigo" rounded class="white--text ml-15"><v-icon>mdi-play-circle</v-icon> Ver Video</v-btn> -->
               </v-col>
               <v-col   lg="6" cols="12">
                  <!-- <img  width="50%" height="80%" style="margin-left:80px" src="../assets/yo.png"> -->
                  <lottie :options="defaultOptions" :width="500" :height="500" />
               </v-col>
           </v-row>
       </v-container>
    </div>
</template>

<script>
import * as animationData from '../assets/animacion.json'
    export default {
        data() {
           return {
               defaultOptions:{
                   animationData:animationData.default
               }
           }
       },
    }
</script>

<style lang="scss" scoped>
h2.intro{
    font-size: 80px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
    
    
}
p.descripcion{
  font-size: 19px;
  font-family: cursive;
  margin: 32px 0px;
  color: #444444ba;  
}

</style>