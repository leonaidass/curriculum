<template>
    <div>
         <v-app-bar style="padding:0px 10px" color="white" app light elevation="6" elevate-on-scroll>
        <v-toolbar-title>
          CV Leonardo Esquivel 2022
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-list class=" d-none d-sm-flex">
          <v-list-item link v-for="(item,i) in menusItem" :key="i" :to="menusItem.ruta">
            <v-list-item-title>
              {{item.titulo}}
            </v-list-item-title>
          </v-list-item>
         
            
        </v-list> -->

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        


      </v-app-bar>
      <v-navigation-drawer
      app
      v-model="drawer"
      
      temporary
    >
      <v-list-item >
        

        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
        
          v-for="item in menusItem"
          :key="item.titulo"
          link
         
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              drawer: null,
                menusItem:[
          {titulo:'Inicio', ruta:'home', icon:'mdi-home' },
          {titulo:'Sobre Mi', ruta:'mi',icon:'mdi-account-details'},
          {titulo:'Portafolio', ruta:'portafolio',icon:'mdi-briefcase'},
          {titulo:'En Estudio', ruta:'proyecto',icon:'mdi-application-edit'},
          {titulo:'Contacto', ruta:'contacto',icon:'mdi-email-edit'}
        ]
      
            }
        },
        methods:{
          enviar(){
            
          }
        }
    }
</script>

<style>
.v-toolbar__title{
  color: rgb(76 175 80);
  font-family: cursive;
  font-weight: bold;
}

</style>