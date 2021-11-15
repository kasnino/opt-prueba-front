<template>
    <div>
                 <v-row
                                v-for="(item, index) in 6"
                                :key="index"
                                class="text-left d-flex ml-2 justify-center"
                              >
                                <v-col
                                  class="
                                    col-4
                                    mt-2
                                    pa-1
                                    d-flex
                                    justify-center
                                    align-center
                                  "
                                >
                                  <v-card
                                    class="
                                      pa-4
                                      justify-center
                                      align-center
                                      d-flex
                                      rounded-lg
                                      elevation-3
                                    "
                                    height="85"
                                    width="85"
                                    :class="{
                                      'pa-0 ma-0 ml-2':
                                        $vuetify.breakpoint.smOnlyUp,
                                    }"
                                  >
                                    <v-img
                                      contain
                                      width="100%"
                                      :src="require('@/assets/amazon.png')"
                                    />
                                  </v-card>
                                </v-col>

                                <v-col
                                  class="col-7 mt-2 pa-0 d-flex justify-start"
                                >
                                  <div style="line-height: 15px" class="ma-1">
                                    <v-list-item-subtitle
                                      class="titulo-texto__card"
                                      >Login laptop
                                      <v-icon
                                        color="#666666"
                                        class="ml-1"
                                        size="20"
                                      >
                                        mdi-airplane
                                      </v-icon>
                                    </v-list-item-subtitle>
                                    <div
                                      class="texto__card--description mt-0"
                                      style="
                                        font-family: Poppins-Regular;
                                        font-size: 11px;
                                      "
                                    >
                                      Lenovo Legion 5 Gaming Laptop, pantalla
                                      IPS FHD (1920 x 1080), procesador AMD
                                      Ryzen 7 4800H, 16 GB
                                    </div>
                                    <v-list-item-subtitle
                                      class="texto_ver--resaltado"
                                      >ver más
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle
                                      class="fecha--card mt-1"
                                      >17/07/2021
                                    </v-list-item-subtitle>
                                  </div>
                                </v-col>

                                <v-col
                                  class="col-1 mt-5 pa-2 d-flex justify-center"
                                >
                                  <v-btn fab icon small class="text-center">
                                    <v-icon
                                      color="#666666"
                                      size="25"
                                      class="ml-1"
                                    >
                                      mdi-trash-can-outline
                                    </v-icon>
                                  </v-btn>
                                </v-col>
                              </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>