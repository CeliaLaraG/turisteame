<template>
  <nav
    aria-label="main navigation"
    class="navbar main-bg-navbar"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <div class="subtitle is-light">
          Turisteame
            </div>
        </nuxt-link>
        <a
          aria-expanded="false"
          aria-label="menu"
          class="navbar-burger"
          data-target="navbarBasicExample"
          role="button"
        >
          <!-- <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span> -->
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            exact-active-class="selected"
            class="navbar-item"
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
          >
            {{ item.name }}
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                v-if="!isAuth"
                class="button is-warning"
                href="/registro"
              >
                <strong >Crear cuenta</strong>
              </a>
              <nuxt-link
                v-if="!isAuth"
                class="button is-light is-outlined"
                to="/login"
              >
                Acceder
              </nuxt-link>
              <!-- <a
                v-if="isAuth"
                class="button is-warning is-outlined"
                href="/mis-pedidos"
              >
                <strong>Mis favoritos</strong>
              </a> -->
              <nuxt-link
                v-if="isAuth"
                class="button is-light is-outlined"
                to="/perfil"
              >
                {{ currentUser.firstname }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  props: {
    items: Array,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
    // cartTotal() {
    //   return this.$store.getters.cartTotal
    // },
    // showContinueOrderBtn() {
    //   return this.cartTotal > 0 && this.$route.path !== "/menu";
    // },
    // currentUser() {
    //   return this.$store.getters.currentUser
    // },
  },
};
</script>
<style>
 .subtitle{
   color: azure;
 }

</style>
