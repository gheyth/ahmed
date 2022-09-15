<template>
  <div>
    <Aside />
    <div>
      <Navbar />
      <main>
        <Nuxt />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue';
export default {
  components: {
    Navbar,
    Footer,
    Aside,
}
}
</script>

<style>
  main{
    background-image: url('~assets/img/section-bg.jpg');
  }
</style>