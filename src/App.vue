<template>
  <v-app>
  <component :is="layout"></component>
  </v-app>
</template>

<script>
import PortadaLayout from './components/layouts/Portada'
import DashboardLayout from './components/layouts/Dashboard'
export default {
  name: "App",
   components: {PortadaLayout, DashboardLayout},
 data () {
      return {
        layout: 'portada-layout'
      }
    }
};
</script>
<style lang="scss" scoped>
.container--main{
  background: #f9f9f9;
}

div.v-input__slot {
  padding: 0 0px !important;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__slot {
  padding: 0 !important; 
    border-color: none !important;
}

@font-face {
  font-family: Poppins-Regular;
  src: url("./assets/fonts/Poppins-Regular.ttf");
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
  border-color: none !important;
}
.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
    border-color: none !important;
}

input{
  margin-left: 5px;
}

.v-input__icon--append .v-icon { 
    color: purple !important;
}
</style>