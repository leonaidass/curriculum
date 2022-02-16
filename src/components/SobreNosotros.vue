<template>
    <div>
    <v-container>
       <v-row>
           <v-col cols="12" md="6">
          <img id="grupo" src="../assets/grupo.png" alt="">
           </v-col>
           <v-col lg="6">
         <v-subheader class="text-h4">Sobre Mi</v-subheader>
         <p>Soy Analista en Sistema de información, me especializo en el desarrollo de aplicaciones web, hace 2 años, del lado del 
             FrontEnd utilizando tecnologías como JavaScript, Vue.js, bootstrap, Vuetify, HTML y CSS3, también he trabajado del lado del Backend con PHP Framework Laravel y Codeigniter, arquitectura de base de datos MYSQL</p>
             <v-subheader class="text-h6">Formacion Academica</v-subheader>
             <v-list>
                 <v-list-item>
                     <v-icon color="green" class="mr-3">mdi-check-all</v-icon>
                     <v-list-item-subtitle>Secundario Completo Liceo P.A de Sarmiento año 2008</v-list-item-subtitle>
                 </v-list-item>
                 <v-list-item>
                     <v-icon color="green" class="mr-3">mdi-check-all</v-icon>
                     <v-list-item-subtitle>Analista en Sistemas de Computacion Instituto Cervantes año 2018</v-list-item-subtitle>
                 </v-list-item>
                 <v-subheader class="text-h6">Certificados</v-subheader>
                 <v-list-item link href="https://www.coderhouse.com/certificados/61f762020ad37f006d096029" target="_blank">
                     <v-icon color="green" class="mr-3">mdi-check-all</v-icon>
                     <v-list-item-subtitle  >Vue.js CoderHouse</v-list-item-subtitle>
                 </v-list-item>
             
             </v-list>
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
#grupo{
   
    width: 100%;
    height: 100%;
    
}
</style>