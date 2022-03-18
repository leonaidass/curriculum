<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="12" cols="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Contacto</v-subheader>
      </v-col>
      <v-col lg="6" cols="12">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54411.608476972564!2d-68.5676962743409!3d-31.531697570133552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814029a33cd497%3A0xbff3a3a0233cfcb3!2sSan%20Juan%2C%20San%20Juan%20Province!5e0!3m2!1sen!2sar!4v1647625919054!5m2!1sen!2sar"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col lg="6" cols="12">
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="cantactoInfo.nombre"
            :counter="10"
            label="Nombre"
            :rules="nameRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="cantactoInfo.email"
            label="E-mail"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-textarea label="Mensaje" v-model="cantactoInfo.mensaje">
          </v-textarea>

          <v-btn color="success" class="mr-4" @click="enviar()"> Enviar </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="success">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      snackbar: false,
      text: "E-mail enviado correctamente Gracias por contactarme te respodere a la brevedad.",
      timeout: 2000,
      valid: false,
      cantactoInfo: {
        nombre: "",
        email: "",
        mensaje: "",
      },
      nameRules: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          v.length >= 3 || "Este campo debe contener al menos 3 caracteres",
      ],

      emailRules: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          /.+@.+/.test(v) || "Por favor complete con una dirección de e-mail",
      ],
    };
  },

  methods: {
    enviar() {
      if (this.$refs.form.validate()) {
        axios
          .post("https://formspree.io/f/mayvoyjl", this.cantactoInfo)
          .then((res) => {
            console.log(res.data);
            this.snackbar = true;
            this.$refs.form.reset();
            this.cantactoInfo = {
              nombre: "",
              email: "",
              mensaje: "",
            };
            this.valid = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
