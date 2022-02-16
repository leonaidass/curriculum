<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" cols="12" class="text-center">
        <v-subheader class="text-h4 justify-center"
          >Lenguajes, tecnologías y programas de uso profesional</v-subheader
        >
      </v-col>

      <v-col lg="12" cols="12" class="mt-4">
        <div class="text-center">
          <v-chip
            @click="actPortafolio = 'front'"
            :color="actPortafolio === 'front' ? 'success' : ''"
            class="mx-5"
            >FrontEnd</v-chip
          >
          <v-chip
            @click="actPortafolio = 'back'"
            :color="actPortafolio === 'back' ? 'success' : ''"
            class="mx-5"
            >Backend</v-chip
          >
          <v-chip
            @click="actPortafolio = 'software'"
            :color="actPortafolio === 'software' ? 'success' : ''"
            class="mx-5"
            >Software</v-chip
          >
        </div>
      </v-col>
      <slot v-if="actPortafolio === 'front'">
        <v-col lg="2" cols="4" v-for="(item, i) in itemFront" :key="i">
          <v-card>
            <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            >
              <div style="width:132px">
<v-card-title>{{item.titulo}}</v-card-title>
            </div>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="actPortafolio === 'back'">
        <v-col lg="3" cols="4" v-for="(item, i) in itemback" :key="i">
          <v-card>
            <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
             
            >
              <v-card-title v-text="item.titulo"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="actPortafolio === 'software'">
        <v-col lg="2" cols="4" v-for="(item, i) in itemSoft" :key="i">
          <v-card>
            <v-img
              :src="item.imagen"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
             
            >

            <div style="width:132px">
<v-card-title>{{item.titulo}}</v-card-title>
            </div>
              
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
      actPortafolio: "front",
      itemFront: [
        {
          titulo: "HTML5",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          titulo: "CSS3",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          titulo: "javacript",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
        },
        {
          titulo: "Vue.js",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        },

        {
          titulo: "Bootstrap",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
        },
        {
          titulo: "Photoshop",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
        },
      ],
      itemback: [
        {
          titulo: "PHP",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/php/php-original.svg",
        },
        {
          titulo: "Laravel",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/laravel/laravel-plain.svg",
        },
        {
          titulo: "MySQL",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mysql/mysql-original-wordmark.svg",
        },
      ],
      itemSoft: [
        {
          titulo: "Gihub",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original.svg",
        },
        {
          titulo: "bitbucket",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bitbucket/bitbucket-original.svg",
        },
        {
          titulo: "slack",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/slack/slack-original.svg",
        },
        {
          titulo: "sourcetree",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/sourcetree/sourcetree-original.svg",
        },
        {
          titulo: "vscode",
          imagen:
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/vscode/vscode-original.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
