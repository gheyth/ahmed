<template>
  <article  class="py-10 max">
    <Slug :subject=info.subject link="/ahadith" />
    <nuxt-content :document="info" />
  </article>
</template>

<script>
import Slug from '~/components/blog/Slug.vue'
  export default {
    async asyncData({ $content, params }) {
        const info = await $content("ahadith", params.slug).fetch();
        return { info };
    },
    head() {
        return { title: this.info.title };
    },
    mounted() {
        setTimeout(() => {
          PageSlug()
        }, 2000);
    },
    components: { Slug }
}
</script>

<style>
  /* main{
    background-image: url('~assets/img/section-bg.jpg');
    user-select: none;
  } */
</style>