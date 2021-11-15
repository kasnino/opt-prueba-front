<template>
  <v-app>
    <header-app></header-app>

    <v-content>
         <v-row class="justify-center pa-0 ma-0" style="width: 100%">
        <v-col class="col-2 green mt-4 pa-0 ma-0">
          <v-navigation-drawer
            permanent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            class="yellow"
          >
            <v-list>
              <v-list-tile value="true" v-for="(item, i) in items" :key="i">
                <v-list-tile-action>
                  <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-col>

        <v-col class="col-10 col-sm-10 purple mt-4 pa-0 ma-0">
          <router-view />
        </v-col>
      </v-row>
    </v-content>
    <v-footer :fixed="fixed" app class="">
      <span>&copy; 2017</span>
    </v-footer>
                  
                  
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire",
        },
      ],
      title: "Principal Layout",
    };
  },
  name: "App",
};
</script>
