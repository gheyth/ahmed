<template>
  <div>
    <Intro title="مَشْرُوعُ أَحْمَدْ" aya="وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ (4)" />
    <section class="main-for-main">
      <WhatAhmed />
      <Content />
    </section>
  </div>
</template>

<script>
import Intro from '../components/home/Intro.vue'
import WhatAhmed from '~/components/home/What-Ahmed.vue';
import Content from '~/components/home/content.vue';
export default {
  components: {
    Intro,
    WhatAhmed,
    Content
  }
}
</script>