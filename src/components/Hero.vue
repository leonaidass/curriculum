<template>
    <div>
       <v-container class="pt-15">
           <v-row>
               <v-col lg="6" cols="12">
                   <h2 class="intro ">Bienvenidos a mi Portafolio con Vuetify</h2>
                   <p class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sequi, quidem. Consequatur repellendus, veritatis aliquam dolorum quia asperiores,
                      accusantium facilis eveniet dignissimos ratione autem voluptatum 
                      mollitia quis odio! Aspernatur, dolor hic!</p>
                      <v-btn color="success" rounded>Get Started</v-btn>
                      <v-btn color="indigo" rounded class="white--text ml-15"><v-icon>mdi-play-circle</v-icon> Ver Video</v-btn>
               </v-col>
               <v-col  class="d-none d-sm-flex" lg="6">
                  <img  width="50%" height="80%" style="margin-left:80px" src="../assets/yo.png">
               </v-col>
           </v-row>
       </v-container>
    </div>
</template>

<script>
    export default {
        
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