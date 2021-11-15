<template>
  <div class="home">
    <v-row class="mt-5 justify-center pa-0 ma-0" style="width: 100%">
      <v-col
        cols="12"
        md="5"
        lg="5"
        class="d-flex justify-start pa-3"
        :class="{
          'pa-0 ma-0 ': $vuetify.breakpoint.xsOnly,
        }"
      >
        <login-app></login-app>
      </v-col>
      <v-col
        cols="12"
        md="7"
        lg="7"
        class="d-flex justify-center align-start text-center"
        :class="{
          'pa-0 ma-0 justify-center d-flex text-center':
            $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-row class="justify-start align-center text-center">
          <v-col class="col-10  mt-6 pa-0 ma-0">
            <div class="texto--home">
              Descubre la maravilla de tener
              <span style="color: #e30613">al alcance de tus manos</span>,
              aquello que estaba lejos
            </div>
          </v-col>
          <v-row class="p-0 m-0 mt-6">
            <v-col
              class="col-12 d-flex mt-7 justify-start align-start text-center"
            >
              <v-card
                class="pa-4 rounded-lg ml-0 card-area"
                width="570px"
                height="320px"
                style="border: 1px solid #666"
              >
                <div class="space"></div>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.texto--home {
  font-family: Poppins-Regular;
  font-size: 18px;
}

.card-area {
  border: 2px solid red;
}
</style>
