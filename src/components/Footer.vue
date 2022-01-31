<template>
  <v-footer padless>
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center">
          <v-toolbar-title >Web Vuetify</v-toolbar-title>
          <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--black"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-subheader>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores laborum adipisci officia error, vero deleniti itaque necessitatibus suscipit enim.</v-subheader>
        <v-form class="mt-4">
             <v-text-field label="Email" outlined dense/>
             <v-btn color="success" rounded>Suscribite</v-btn>

            
        </v-form>
        </v-col>
      
      </v-row>
    </v-col>
    
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="scss" scoped></style>
