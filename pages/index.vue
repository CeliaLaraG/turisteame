
<template>
  <div class="home">
    <section class="delicious-menu">
       <Slider />
      <div class="container">
        <ArticleItem     />
        <!-- v-for="article in articles"
        :key="article.id"
        :title="title"
        :image="image"
        :content="content" // excerpt-->
      </div>
    </section>
  </div>


</template>

<script>
import Slider from "~/components/partials/Slider";
import ArticleItem from '~/components/partials/ArticleItem.vue';
// import Article from '~/plugins/api/resources/articles';
export default {
  name: "HomePage",
  components: {
    Slider,
    ArticleItem
  },
  data() {
    return {
      articles: []
    };
  },


  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {

  },
  // async beforeMount() {
  //   try {
  //     this.articles = await this.$api.articles.list();
  //   } catch (error) {
  //     alert("Error cargando los artículos");
  //   }
  // },
};
</script>
