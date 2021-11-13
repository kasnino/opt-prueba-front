<template>
  <b-row class="p-0 m-0 mt-5 d-flex">
    <div class="d-flex justify-content-end">
      <b-col class="col-12">
        <div class="vue-tempalte p-2">
          <b-card rounded="lg" class="d-flex justify-center card-login">
            <form rounded="lg">
              <div class="text-center d-flex justify-content-center">Ingresa tus datos</div>

              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="" label-for="input-1" class="mt-4">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="Correo"
                    placeholder="Enter email"
                    required
                    class="font-placeholder form-control-lg p-2"
                     height="40px"   
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label=""
                  class="mt-4"
                  label-for="input-2"
                  
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="contraseña"
                    required
                    class="font-placeholder"
                  ></b-form-input>
                </b-form-group>
              </b-form>

              <b-row class="p-0 m-0 mt-3">
                <b-col class="col-12  p-0 m-0">
                  <div class="d-grid pa-0">
                    <button class="btn btn-primary" type="button">
                      Button
                    </button>
                  </div>
                </b-col>
              </b-row>
            </form>
          </b-card>
        </div>
      </b-col>
    </div>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
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
    };
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.card-login {
  border-radius: 15px;
  box-shadow: 0 1px 6px rgba(182, 182, 182, 0.75);
}
label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: left;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554ff;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}

.font-placeholder{
    font-size: 13px;
}
</style>
