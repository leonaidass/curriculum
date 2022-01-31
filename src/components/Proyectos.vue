<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Proyectos</v-subheader>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illo
          labore magnam eaque necessitatibus accusamus!
        </p>
      </v-col>
      <v-col lg="4" v-for="proyecto in 3" :key="proyecto">
        <v-card  class="mx-auto my-12" max-width="374">
          

          <v-img
            height="250"
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></v-img>

          <v-card-title>Web Development</v-card-title>

          <v-card-text>
           

           

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions >
              <v-btn color="success" rounded>Ver Mas</v-btn>
              <v-spacer/>
              <v-rating  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                  >
                 
              </v-rating>
          </v-card-actions>

          

         
                  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
