<template>
  <div>
    <MainNav />

    <Nuxt />

    <MainFooter />
    <!-- <cookie-law-message /> -->
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import MainFooter from "@/components/MainFooter";
// import CookieLawMessage from '@/components/CookieLawMessage'
export default {
  components: {
    MainNav,
    MainFooter,
    // CookieLawMessage
  },
  data() {
    return {

    };
  },
  mounted(){
    const token = localStorage.getItem('jwt-token')
    // const token = this.$cookies.get('jwt-token')
    this.$store.dispatch('login',token)
  }
};
</script>
