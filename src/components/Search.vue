<template>
  <div>
    <v-row class="mt-2 justify-center pa-0 ma-0" style="width: 100%">
      <pre></pre>
      <v-col
        cols="12"
        md="10"
        lg="10"
        class="d-flex  justify-center align-center"
        :class="{
          'pa-0 ma-0 justify-center d-flex text-center':
            $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-text-field
          placeholder="Escriba aqui"
          dense
          
          v-model.number="Crytonumero"
          :class="{ '': $vuetify.breakpoint.smAndUp }"
          name="is_review"
          class="elevation-0 rounded-r-xl pa-0 ma-0"
          height="45px"
          style=""
          background-color="#eaeaea"
          v-model="searchbook"
          @keyup.enter="$emit('tengo_resultados', searchbook)"
        >
          <template v-slot:append v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              color="#e30613"
              class="btn--search ml-10 white--text rounded-r-xl"
              height="45"
              :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
              style="
                color: white;
                font-family: Poppins-Regular;
                font-size: 12px;
              "
            >
              Buscar ahora
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
      <!-- <v-col cols="12" class="pa-0 ma-0">
        <v-btn
          color="#4abc96"
          class="rounded-0 btn--search white--text"
          height="50"
          width="100%"
          :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
          @click="deleteTypedItem()"
          v-if="$vuetify.breakpoint.xsOnly"
        >
          Buscar
        </v-btn>
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Crytonumero: "",
      searchbook: "",
      category: "category text",
      items: ["Nombre", "Autor"],
      e1: "Autor",
    };
  },
  methods: {
    deleteTypedItem() {},

    searchpalabra(palabra) {
      return alert(palabra);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn--search {
  background: #e30613;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  text-transform: none;
}
.btn--desktop {
  width: 100px;
}
.align-btn {
  margin-top: -4px !important;
}

.search-field {
  border: 2px solid #000;
}
</style>
