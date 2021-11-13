<template>
  <div id="app">

   
    <div id="" class="p-0">
      <header-app></header-app>
    </div>
    <div class="container-main p-0">
    <router-view />
    </div>

 
  </div>
</template>

<style lang="scss">

body, html{

    font-family: Poppins-Regular;
}

#app{
    font-family: Poppins-Regular;
}
.container-main{
  background:#f9f9f9d7;
}

@font-face {
  font-family: Poppins-Regular;
  src: url("./assets/fonts/Poppins-Regular.ttf");
}
</style>
