<template>
  <div class="about">
    <div class="text-center"></div>
    <div class="ml-8 mt-5 texto--registro">Bienvenido al dashboard</div>
    <v-row class="justify-center pa-0 ma-0" style="width: 100%">
      <v-col
        cols="12"
        md="5"
        lg="5"
        class="d-flex justify-start pa-3"
        :class="{
          'pa-0 ma-0 ': $vuetify.breakpoint.xsOnly,
        }"
      >
        <registro-app></registro-app>
      </v-col>
      <v-col
        cols="12"
        md="7"
        lg="7"
        class="d-flex justify-center align-center text-center"
        :class="{
          'pa-1 ma-0 justify-center d-flex text-center':
            $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-row class="justify-center pa-0 ma-0" style="width: 100%">
          <v-col
            sm="11"
            class="col-12 mt-2 justify-center align-center pa-0 ma-0"
          >
            <v-alert
              v-model="alert"
              class="rounded-lg ma-2"
              color="#e30613"
              border="left"
              elevation="2"
              colored-border
            >
              <div class="text-left ml-2">Lorem ipsum</div>
              <div class="radio--botton text-left ml-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                felis nisl, mattis ut sapien nec, tempus malesuada eros.
                Maecenas sodales placerat dui, ut rutrum ipsum.
              </div>
            </v-alert>
          </v-col>
          <v-row class="justify-center pa-0 ma-0" style="width: 100%">
            <v-col
              sm="11"
              class="col-12 ml-3 d-flex justify-start align-start text-center"
            >
              <v-card
                class="pa-3 rounded-lg scroll card--login elevation-3"
                style="height: 470px; overflow-y: scroll"
              >
                <v-row class="p-0 m-0 mt-0 justify-center">
                  <v-col class="col-12">
                    <div class="pa-0 ma-0">
                      <v-row style="opacity: 0.86" class="pa-0 ma-0">
                        <v-col
                          cols="12"
                          sm="11"
                          class="pa-0 ma-0"
                          style="height: 470px"
                        >
                          <v-row class="text-left d-flex justify-center">
                            <v-col
                              class="col-11 mt-2 pa-2 ml-7 d-flex justify-start"
                            >
                              <v-icon color="#666666" class="ml-1" size="20">
                                mdi-bell-ring
                              </v-icon>
                              <span class="titulo--dashboard ml-2 pa-0 ma-0"
                                >Mi lista de pre-alertas (6)</span
                              >
                            </v-col>
                          </v-row>

                          <v-row class="text-left pa-4 justify-end">
                            <v-col class="col-12 mt-0 ml-4 pa-2">
                                <lista-envios></lista-envios>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
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
  data() {
    return {
      alert: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.radio--botton {
  font-size: 12px !important;
  color: #666666;
  font-family: Poppins-Regular;
  font-weight: 400;
}

.texto--registro {
  font-size: 12px !important;
  color: #666666;
  font-family: Poppins-Regular;
}

.titulo--dashboard {
  font-size: 14px !important;
  color: #272727;
  font-weight: bold;
  font-family: Poppins-Regular;
}

.titulo-texto__card {
  font-size: 11px !important;
  color: #272727;
  font-weight: bold;
  font-family: Poppins-Regular;
}

.texto__card--description {
  color: #666666;
  font-size: 12px;
  font-family: Poppins-Regular;
}

.texto_ver--resaltado {
  text-decoration: underline;
  font-size: 11px;
  font-family: Poppins-Regular;
}

.fecha--card {
  color: #666666;
  font-size: 10px;
}
</style>
