<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="12" cols="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Lenguajes y tecnologías en estudio</v-subheader>
        
      </v-col>
      <v-col lg="3" cols="6" v-for="(estudio,i) in estudios" :key="i">
        <v-card   max-width="250">
          

          <v-img
            
            :src="estudio.img"
          ></v-img>
          <v-divider class="mx-4"></v-divider>

          <v-card-title>{{estudio.nombre}}</v-card-title>

                  

         
                  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

    data() {
      return {
        estudios:[
          {nombre:'Node.js',img:'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original-wordmark.svg'},
          {nombre:'Flutter',img:'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/flutter/flutter-plain.svg'},
           {nombre:'mongoDB',img:'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original-wordmark.svg'},
           {nombre:'docker',img:'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original-wordmark.svg'}
        ]
      }
    },

};
</script>

<style lang="scss" scoped></style>
