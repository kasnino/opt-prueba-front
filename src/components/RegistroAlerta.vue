<template>
  <div>
    <v-card class="pa-4 rounded-lg  card--login elevation-3" 
    
     :class="{
          'pa-1 ma-0 ml-0 card-mobile justify-center ':
            $vuetify.breakpoint.xsOnly,
            'ml-5 card-desktop': $vuetify.breakpoint.smAndUp,
        }"
    >
            <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
              <v-col class="col-11 mt-5 pa-2 d-flex justify-start">
                <a href="">
                      <v-icon color="#666666" class="ml-1" size="20">
                    mdi-bell-ring
                  </v-icon>
                  <span class=" titulo--dashboard ml-2 pa-0 ma-0"
                    >Nueva pre-alerta</span
                  >
                
                </a>
              </v-col>
           </v-row>
      <v-row class="p-0 m-0 mt-4 justify-center">
        <v-col class="col-12">
          <v-form ref="form" v-model="valid" lazy-validation class="pa-0 ma-0">
            <div class="pa-0 ma-0">
              <v-row style="opacity: 0.86" class="pa-0 ma-0">
                <v-col cols="11" sm="11" class="pa-0 ma-0">
                  <v-text-field
                    hide-details="auto"
                    outlined
                    dense
                    style="border-width: 2px; font-size: 13px"
                    v-model="email"
                    :rules="[rules.required]"
                    placeholder="Tienda de procedencia"
                    class="pa-2 text-center"
                    elevation-0
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row style="opacity: 0.86" class="pa-0 ma-0">
                <v-col cols="7" sm="7" class="pa-0 ma-0">
                  <v-select
                    v-model="form.banco"
                    :items="bancos"
                    color="#25294a"
                    :rules="[rules.required]"
                    placeholder="Empresa de envio"
                    required
                    outlined
                    dense
                    class="pa-2"
                    style="border-width: 2px; font-size: 13px"
                    hide-details="auto"
                  ></v-select>
                </v-col>
                <v-col cols="4" sm="4" class="pa-0 ma-0">
                  <v-text-field
                    style="border-width: 2px; font-size: 13px"
                    hide-details="auto"
                    outlined
                    dense
                    :rules="[rules.required]"
                    placeholder="Valor del paquete"
                    class="pa-2 text-center"
                    elevation-0
                  >
                    <template v-slot:prepend-inner class="pa-0 ma-0">
                      <span
                        class="mt-1 pa-0"
                        style="font-size: 16px; color: #666666"
                        >$</span
                      >
                      <v-divider vertical class="ml-1"></v-divider>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                placeholder="Numero de tracking"
                color="#25294a"
                style="border-width: 2px; font-size: 13px"
                height="30"
                outlined
                hide-details="auto"
                dense
                class="pa-2 ma-0"
                :rules="[rules.required]"
                v-model="nombre"
              >
                <template v-slot:append-outer>
                  <v-icon color="#5BCEF8"> mdi-alert-circle-outline </v-icon>
                </template>
              </v-text-field>
              <v-row style="opacity: 0.86" class="pa-0 ma-0">
                <v-col cols="11" sm="11" class="pa-0 ma-0">
                  <v-select
                    v-model="form.banco"
                    :items="bancos"
                    color="#25294a"
                    :rules="[rules.required]"
                    placeholder="Tipo de paquete"
                    required
                    outlined
                    dense
                    class="pa-2"
                    style="border-width: 2px; font-size: 13px"
                    hide-details="auto"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row style="opacity: 0.86" class="pa-2 ma-0">
                <v-col cols="11" sm="11" class="pa-0 ma-0">
                  <v-textarea
                    v-model="infocompleta"
                    outlined
                    dense
                    class=""
                    height="80"
                    style="border-width: 2px; font-size: 13px"
                    hide-details="auto"
                    :rules="[rules.required]"
                    color="#5BCEF8"
                    placeholder="Descripción del paquete"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>

            <v-row class="text-left d-flex justify-center">
              <v-col class="col-11 pa-2 d-flex justify-start">
                <a href="">
                  <span class="texto--registro pa-0 ma-0"
                    >¿Cómo te gustaría enviar el paquete a Venezuela?</span
                  >
                  <v-icon color="#5BCEF8" class="ml-1" size="20">
                    mdi-alert-circle-outline
                  </v-icon>
                </a>
              </v-col>

              <v-col class="col-11 pa-0 ma-0 d-flex justify-start">
                <v-radio-group v-model="row" row class="pa-0 ma-0 ml-1">
                  <v-radio size="10" value="radio-1" color="#5BCEF8"
                    ><template v-slot:label>
                      <div class="radio--botton">Maritimo</div>
                    </template></v-radio
                  >
                  <v-radio
                    value="radio-2"
                    color="#5BCEF8"
                    style="font-size: 12px !important"
                  >
                    <template v-slot:label>
                      <div class="radio--botton">Aereo</div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
               <v-row class=" justify-start "> 
              <v-col class="col-7 ml-8 pa-0  d-flex justify-start">
                <span class="texto--terminos pa-0 ma-0 ml-1"
                  >*El tipo de envío lo podrás modificar por medio de una
                  <a class="resaltado-condiciones">Solicitud especial</a> desde
                  tu almacén.</span
                >
              </v-col>
               </v-row>
            </v-row>
            <v-row style="opacity: 0.86" class="pa-2 ma-0">
              <v-col cols="11" sm="11" class=" pa-2 mt-5 ma-0">
                <v-btn
                  color="#e30613"
                  class="
                  elevation-3 rounded-lg 
                    text-white
                  
                    mt-6
                    text-capitalize
                    font-weight-bold
                  "
                  block
                  height="45"
                  @click="resetValidation"
                  style="
                    color: white;
                    font-family: Poppins-Regular;
                    font-size: 13px;
                  "
                >
                  Registrar pre-alerta
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      banco: "",
    });
    return {
      form: Object.assign({}, defaultForm),

      bancos: ["Bancolombia", "Davivienda", "Banco BBVA"],
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      infocompleta:'',
      show: true,
      show1: false,
      valid:'',
      nombre:'',
      column: null,
      row: null,
      email: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalido e-mail.";
        },
      },
    };
  },
  methods: {
    resetValidation() {
      return this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #666666 !important;
  text-decoration: none;
}

.resaltado-condiciones {
  text-decoration: #e30613 !important;
  color: #e30613 !important;
  font-size: 12px;
}
.v-input__icon--append .v-icon {
  color: purple !important;
}

.texto--registro {
  font-size: 11px;
}

.texto--terminos {
  font-size: 11px;
  color: #000;
}

.titulo--dashboard{
      font-size: 14px !important;
  color: #272727;
  font-weight: bold;
  font-family: Poppins-Regular;
}

.radio--botton {
  font-size: 12px !important;
  color: #666666;
  font-family: Poppins-Regular;
}

.card-desktop{
  width: 440px;
}

.card-mobile{
  width: 100%;
}
</style>
