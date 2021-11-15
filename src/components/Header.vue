<template>
  <div>
    <div>
      <section class="sub-header">
        <v-row class="">
          <v-col>
            <v-row>
              <v-col class="col-7"> </v-col>
              <v-col class="col-5 justify-end d-flex pa-0 ma-0">
                <div id="triangulo"></div>
              </v-col>
            </v-row>
          </v-col>
          <div class="col-7 col-header text-white" variant="white"></div>
        </v-row>
      </section>
      <v-app-bar
        elevation="3"
        flat
        rounded
        shaped
        class="white"
        color="white"
        height="75px"
      >
        <v-row v-if="$vuetify.breakpoint.mdAndUp">
          <v-col class="col-5 d-flex justify-end align-center text-center">
            <div class="align-center justify-center text-center">
              <img :src="require('@/assets/telf.png')" />
            </div>
            <div class="ml-2 caption font-weight-bold">+1 (786)600.72.96</div>

            <div class="ma-3 ml-3">
              <img :src="require('@/assets/Correo.png')" />
            </div>
            <div class="caption font-weight-bold">+1 (786)600.72.96</div>
          </v-col>
          <v-col class="col-7 d-flex justify-end align-center text-center">
            <div class="ma-3 ml-3">
              <img :src="require('@/assets/Ubicacion.png')" />
            </div>
            <div class="caption font-weight-bold">
              5989nw 102nd ave, Miami,<br />FL 33178, United States
            </div>

            <search-app></search-app>
          </v-col>
        </v-row>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-header {
  height: 150px;
  background: white;
}

.col-header {
  background: white;
  background: #25294a;
  height: 150px;
}

.navbar-shadown {
  box-shadow: 0px 15px 10px -13px #1111113b;
}

#triangulo {
  width: 0;
  height: 0;
  border: 97px solid #25294a;
  border-left: 126px solid transparent;
  border-top: 75px solid transparent;
}

#triangulo::after {
  content: "";
  width: 150px;
  height: 100px;
  background: #428bca;
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg);
  -ms-transform: skew(20deg);
  -o-transform: skew(20deg);
  transform: skew(20deg);
}
</style>
