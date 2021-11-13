<template>
  <div>
    <div>
      <section class="sub-header">
        <b-row class="">
          <b-col>1 of 2</b-col>
          <div class="col-8 col-header text-white" variant="white">
            1 of 3
          </div>
        </b-row>
      </section>
      <b-navbar  class="bg-white navbar-shadown">
        <b-navbar-nav
          right
          class="
            navbar
            z-depth-5
            bd-navbar
            flex-column flex-md-row
            navbar-dark navbar-expand"
           >
          <b-nav-item href="#">Home</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
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

.navbar-shadown{
    box-shadow: 0px 15px 10px -13px #1111113b;
}
</style>
