<template>
  <div class="background w-full h-96 flex justify-center items-center">
    <div class="text-basic-01 text-border">
      <h1 class="intro-blog-h1 font-black text-5xl text-center">{{title}}</h1>
      <p class="intro-blog-p text-3xl mt-5 text-center">{{info}}</p>
      <!-- <p class="number text-base mt-10 text-center border border-basic-02 w-60 m-auto rounded-md"></p> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    info:String
  }
}
</script>

<style scoped>
  .background{
    background-color: #000;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 25vh;
  }
  .text-border{
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
</style>