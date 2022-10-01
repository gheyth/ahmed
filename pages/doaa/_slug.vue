<template>
  <article  class="py-10 max">
    <Slug :subject=info.subject link="/doaa" />
    <nuxt-content :document="info" />
  </article>
</template>

<script>
import Slug from '~/components/blog/Slug.vue'
  export default {
    async asyncData({ $content, params }) {
        const info = await $content("doaa", params.slug).fetch();
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

<style scoped>
  article{
    background-image: url('~assets/img/section-bg.jpg');
    user-select: none;
  }
</style>