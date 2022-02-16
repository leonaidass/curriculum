<template>
  <v-footer padless>
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center">
          <v-toolbar-title >Leonardo Esquivel 2022</v-toolbar-title>
          <v-card-text>

           

          <v-btn
            v-for="(icon,i) in icons"
            :key="i"
            class="mx-4 white--black"
            icon
            @click="link(icon.dir)"
            
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        
        
        </v-col>
      
      </v-row>
    </v-col>
    
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [

        {icon:'mdi-facebook', dir:'https://www.facebook.com/profile.php?id=100009577582134'},
        {icon:'mdi-github', dir:'https://github.com/leonaidass'},
        {icon:'mdi-linkedin', dir:'https://www.linkedin.com/in/leonardo-marino-esquivel-91302611a/'},
        
        
        
        
        
      ],
    }),

    methods:{
      link(dir){
             location.href =dir;
      }
    }
  }
</script>

<style lang="scss" scoped></style>
