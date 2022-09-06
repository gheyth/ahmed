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
  .content{
    width: calc(100% - 96px);
    float: left;
  }
</style>