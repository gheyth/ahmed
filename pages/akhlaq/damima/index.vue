<template>
  <section>
    <IntroBlog title="الْأَخْلَاَقُ الذَّمِيمَةُ" info="هَيْئَةٌ لِلنَّفْسِ رَاسِخَةٌ تَصْدُرُ عَنْهَا أَفْعَالٌ قَبِيحَةٌ"/>
    
    <div class="list-articles py-10 px-10">
      <div class="max">
        <div class="flex justify-between items-center w-4/5 my-7 mx-auto">
        
        <div class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">قائمة الأحاديث</p>
        </div>
        <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between w-18">

        <a target="_blank" href="https://github.com/gheyth/ahmed/issues/new" class="bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-sensor-alert w-5 h-5"></i>
        </a>
        <NuxtLink to="/akhlaq" class="bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
        </NuxtLink>
        </div>

        </div>

        <ul class="w-4/5 m-auto my-0">
          <li class="bg-white border border-basic-02 rounded-md mb-4 p-2 hover:border-r-4 hover:border-basic-02" v-for="article of info" :key="article.slug">
            <NuxtLink class="" :to="{ name: 'akhlaq-damima-slug', params: { slug: article.slug } }">
              <div class="flex items-center">
                <i class="fi fi-rs-browser text-basic-02 w-4 h-4 ml-2"></i>
                <h2 class="text-basic-02 font-black text-lg">{{ article.title }}</h2>
              </div>
              <div>
                <p class="border text-xs text-slate-600 inline-block rounded p-1 mt-2"><i class="fi fi-sr-label ml-2"></i>{{ article.tag }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import IntroBlog from '~/components/blog/intro-blog.vue'
  export default {
    async asyncData({ $content }) {
      const info = await $content('akhlaq/damima')
        .fetch()

      return {
        info
      }
    },
    components: {
      IntroBlog
    },
    head: {
      title: "الأخلاق الذميمة"
    }
  }
</script>

<style scoped>
  .background{
    background-image: url('~assets/img/back-akhlaq.jpg');
  }
</style>