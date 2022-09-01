<template>
  <div>
    <IntroBlog title="بَابُ الْأَحَادِيثِ" info="يَتَنَاوَلُ هَذَا الْبَابُ الْعَدِيدَ مِنَ الْأَحَادِيثِ الْأَكْثَرَ تَدَاوُلًا "/>
    
    <section class="list-articles max py-10 px-10">
      <h1 class="font-black text-basic-02 text-3xl mb-4">قائمة الأحاديث</h1>

      <ul class="w-4/5 m-auto my-0">
        <li class="bg-white border border-basic-02 rounded-md mb-4 p-2 hover:border-r-4 hover:border-basic-02" v-for="article of info" :key="article.slug">
          <NuxtLink class="" :to="{ name: 'ahadith-slug', params: { slug: article.slug } }">
            <div class="flex items-center">
              <i class="fi fi-rs-browser text-basic-02"></i>
              <h2 class="text-basic-02 font-black text-lg">{{ article.title }}</h2>
            </div>
            <div>
              <p class="border text-xs text-slate-600 inline-block rounded p-1 mt-2"><i class="fi fi-sr-label"></i>{{ article.tag }}</p>
            </div>
          </NuxtLink>
        </li>
    </ul>
    </section>
  </div>
</template>

<script>
import IntroBlog from '../../components/blog/intro-blog.vue'
  export default {
    async asyncData({ $content }) {
      const info = await $content('ahadith')
        .fetch()

      return {
        info
      }
    },
    components: {
      IntroBlog
    },
    head: {
      title: "بَابُ الْأَحَادِيثِ "
    }
  }
</script>

<style scoped>
  .background{
    background-image: url('~assets/img/background.jpg');
  }
  .list-articles{
    background-image: url('~assets/img/section-bg.jpg');
  }
  i{
    width:16px;
    height: 16px;
    margin-left: 9px;
  }
</style>