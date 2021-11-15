<template>
  <v-row class="p-0 m-0 mt-1 d-flex justify-center">
    <div class="">
      <v-col class="col-12">
        <div class="">
          <v-card class="pa-4 rounded-lg card--login elevation-3" width="410px">
            <div class="space"></div>
            <div class="text-center texto--formulario">Ingresa tus datos</div>

            <v-row class="p-0 m-0 mt-4 justify-center">
              <v-col class="col-9">
                <v-form ref="form" v-model="valid" lazy-validation class="pa-0 ma-0" >
                  <div class=" pa-0 ma-0">
                  <v-text-field
                    outlined
                hide-details="auto"
                  
                      height="40"
                  style="border-width: 2px; font-size: 13px"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    placeholder="Correo"
                    class="pa-0 ma-0 elevation-0"
                  ></v-text-field>

                  <v-text-field
                         outlined
                hide-details="auto"
                  
                      height="40"
                  style="border-width: 2px; font-size: 13px"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    placeholder="Contraseña"
                    :rules="[rules.required]"
                    @click:append="show1 = !show1"
                    class="pa-0 ma-0 mt-3 elevation-0"
              
                  ></v-text-field>
                </div>
                  <span class="texto--login pa-0 ma-0 mt-3"><a>¿Olvidaste la contraseña?</a></span>

                  <v-btn
                    color="#e30613"
                    class="text-white elevation-3 rounded-lg  mt-6 text-capitalize font-weight-bold"
                    block
                    height="45"
                    @click="resetValidation"
                    style="color:white; font-family: Poppins-Regular; "
                  >
                    Ingresar
                  </v-btn>
                </v-form>

                  <v-row class=" mt-1 justify-center d-flex text-center">
              <v-col class="col-8 d-flex justify-end">
                <a href="">
                 <span class="texto--login-down pa-0 ma-0 ">¿No tienes una cuenta aún?</span>
              </a>
              </v-col>
              <v-col class="col-4 d-flex justify-start">
                <a>
                 <span class="texto--login-down pa-0 ma-0 ">!Registrate¡</span>
                </a>
                
              </v-col>
              <div class="space--down"></div>
                  </v-row>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
         password: 'Password',
        food: null,
        checked: [],
        
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      show1: false,
      email: '',
       rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalido e-mail.'
          },
        },
     
    };
  
  },
    methods:{
        resetValidation(){
          return this.$router.push({name:'dashboard'});
        }
    }
};
</script>
<style lang="scss" scoped>
a{
  color: #e30613 !important;
  text-decoration: none;
}
.space{
  width: 100%;
  height:65px;
 
}
.space--down{
  width: 100%;
  height:45px;
 
}
.texto--formulario{
   font-family: Poppins-Regular;
   font-size: 12px;
    color: #666666;
}

.texto--login{
  color:#e30613 !important;
    font-family: Poppins-Regular;
    font-size: 13px;
  
}

.texto--login-down{
  color:#e30613 !important;
    font-family: Poppins-Regular;
    font-size: 12px;
    font-weight: 600;
  
}

.card--login{
  border-radius: 21px !important;
}
</style>
