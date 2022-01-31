<template>
    <div>
         <v-app-bar style="padding:0px 90px" color="white" app light elevation="6" elevate-on-scroll>
        <v-toolbar-title>
          WebSite 100% Vuetify
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-list class="d-flex aling-center">
          <v-list-item link v-for="(item,i) in menusItem" :key="i" :to="menusItem.ruta">
            <v-list-item-title>
              {{item.titulo}}
            </v-list-item-title>
          </v-list-item>
          <v-btn text>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn outlined color="success">
              Bienvenidos
            </v-btn>
        </v-list>
      </v-app-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menusItem:[
          {titulo:'Inicio', ruta:'home'},
          {titulo:'Sobre Nosotros', ruta:'nosotros'},
          {titulo:'Portafolio', ruta:'portafolio'},
          {titulo:'Proyecto', ruta:'proyecto'},
          {titulo:'Galeria', ruta:'galeria'},
          {titulo:'Contacto', ruta:'contacto'}
        ]
      
            }
        },
    }
</script>

<style lang="scss">
.v-toolbar__title{
  color: rgb(76 175 80);
  font-size: 35px;
  font-family: cursive;
  font-weight: bold;
}

</style>