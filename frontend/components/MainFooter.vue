
<template>
  <footer class="main-bg-navbar">

      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <div class="subtitle is-light">
          Turisteame
            </div>
        </nuxt-link>
      </div>


  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>
<style>
.subtitle{
  color: azure;
}
footer{
  width: 100%;
  height:6vh;
  bottom: 0;
}
</style>
