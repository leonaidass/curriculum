<template>
   
   <v-container class="my-15">
       <v-row justify="center">
      <v-col lg="12" class="text-center">
          <v-subheader class="text-h4 justify-center">Portafolio</v-subheader>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, ullam!</p>
          </v-col>
          <v-col lg="12">
         <div class="text-center">
             <v-chip @click="actPortafolio='webapp'" :color="actPortafolio==='webapp' ? 'success':''" class="mx-5">Web App</v-chip>
             <v-chip @click="actPortafolio='mobileapp'" :color="actPortafolio==='mobileapp' ? 'success':''" class="mx-5">Mobile App</v-chip>
             <v-chip @click="actPortafolio='desktopapp'" :color="actPortafolio==='desktopapp' ? 'success':''" class="mx-5">Desktop App</v-chip>
         </div>
          </v-col>
          <slot v-if="actPortafolio==='webapp'" >
              <v-col lg="3" v-for="(item,i) in itemWeb" :key="i">
           <v-card>
               <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="item.titulo"></v-card-title>
            </v-img>
           </v-card>
          </v-col>
          </slot>
          <slot v-if="actPortafolio==='mobileapp'" >
              <v-col lg="3" v-for="(item,i) in itemMobile" :key="i">
           <v-card>
               <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="item.titulo"></v-card-title>
            </v-img>
           </v-card>
          </v-col>
          </slot>
          <slot v-if="actPortafolio==='desktopapp'" >
              <v-col lg="3" v-for="(item,i) in itemDesktop" :key="i">
           <v-card>
               <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="item.titulo"></v-card-title>
            </v-img>
           </v-card>
          </v-col>
          </slot>
       </v-row>
   </v-container>
  
</template>

<script>
    export default {
        data() {
                 return {
                actPortafolio:'webapp',
                itemWeb:[{titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'},
                {titulo:'App Web', imagen:'https://talentgrid.io/wp-content/uploads/2020/12/vueart.png'}],
                itemMobile:[{titulo:'App Mobile', imagen:'https://1.bp.blogspot.com/-VO3irdDsux4/XhS-LIullAI/AAAAAAAACaw/Si9viL6FZkw_Djnnt1XEWMkBiWVpMMClQCLcBGAsYHQ/s640/Dise%25C3%25B1o%2Ba%2BFlutter.png'}],
                itemDesktop:[{titulo:'App Desktop', imagen:'https://www.muycomputerpro.com/wp-content/uploads/2021/09/oracle-java-17.jpg'}]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>