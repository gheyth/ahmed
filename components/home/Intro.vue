<template>
  <section class="all-media w-full m-auto relative z-10">
    <video loop muted autoplay class="w-full vd calc-h">
      <source src="~assets/intro.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 justify-center items-center flex w-full calc-h flex-wrap	">
      <div>
        <h1 class="text-basic-01 text-7xl font-black">{{title}}</h1>
        <p class="text-basic-01 text-2xl mt-3">{{aya}}</p>
        <a class="text-white  text-center inline-block border-2 border-white w-full py-1 mt-5 rounded-xl hover:bg-basic-02 hover:border-basic-01 transition-all" href="#Content">
          اَلذَّهَاب إِلَى اَلْمُحْتَوَى
        </a>
      </div>
      <img class="w-36" src="~/assets/img/big-logo.png">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    aya:String
  }
}
</script>
<style>
  video {
    width: 100vw;
    object-fit: cover;
    position: sticky;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .vd{
    filter: brightness(0.3);
  }
</style>