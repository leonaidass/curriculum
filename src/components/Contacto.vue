<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Contacto</v-subheader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          expedita!
        </p>
      </v-col>
      <v-col lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64702.749690312805!2d-68.57361515840225!3d-31.537357555739636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814029a33cd497%3A0xbff3a3a0233cfcb3!2sSan%20Juan!5e0!3m2!1ses-419!2sar!4v1643593229037!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col lg="6">
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="cantactoInfo.nombre"
            :counter="10"
            
            label="Nombre"
            required
          ></v-text-field>

          <v-text-field
            v-model="cantactoInfo.email"
            
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea  label="Mensaje" v-model="cantactoInfo.mensaje">

          </v-textarea>

        


          <v-btn
            
            color="success"
            class="mr-4"
            
          >
            Enviar
          </v-btn>

          
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            cantactoInfo:{
                nombre:"",
                email:"",
                mensaje:""
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>
