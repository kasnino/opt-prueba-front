<template>
  <v-app>
    <header-app></header-app>
    <v-main class="container--main pa-2">
      <v-row>
        <v-col class="col-2 pa-0 ma-0" v-if="$vuetify.breakpoint.smAndUp">
          <v-navigation-drawer permanent width="100%" height="500" v-if="this.$route.name == 'dashboard'">
            <v-row class="fill-height" no-gutters>
              <v-list class="grow">
                <v-list-item v-for="link in items" :key="link" link>
                     <router-link :to="link.url">
                 
                  <v-list-item-title >
                        <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                      </v-list-item-action>
                        <span class="nav-dashboard" v-text="link.title"></span>
                  </v-list-item-title>
                     </router-link>
                </v-list-item>
              </v-list>
            </v-row>
          </v-navigation-drawer>
        </v-col>
        <v-col class="col-10 pa-0 ma-0">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <v-footer height="65px" color="#25294a">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", url: "/" },
        { title: "About", icon: "mdi-forum", url: "/" },
        { title: "lorem input", icon: "mdi-eye", url: "/" },
        { title: "lorem input", icon: "mdi-home", url: "/" },
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true,
      title: "Principal Layout",
    };
  },
  name: "App",
};
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
.nav-dashboard{
  color: #666666;
  font-family: Poppins-Regular;
}

.nav-dashboard:hover{
  color: #e30613;
  font-weight: bold;
}
.container--main {
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
  src: url("/assets/fonts/Poppins-Regular.ttf");
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: none !important;
}
.theme--light.v-text-field:not(.v-input--has-state):hover
  > .v-input__control
  > .v-input__slot:before {
  border-color: none !important;
}
</style>
