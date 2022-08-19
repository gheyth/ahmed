<template>
  <div class="all">
    <Aside />
    <div id="allcontent">
      <Navbar />
      <main class=" ">
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
  .all{
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
</style>