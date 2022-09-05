<template>
  <header class="bg-white z-20 w-full m-auto sticky top-0 z-50">
    <div class="h-20 px-8 border-b-2 border-basic-02 flex justify-between items-center">
      <!-- icons for responsive -->
      <div class="icon-resp text-basic-02 text-xl relative">
        <span class="animate-ping -top-1 -left-1 absolute h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-angles-right hidden"></i>
      </div>
      <!-- icons for responsive -->
      <div class="">
        <NuxtLink to="/"><img class="w-9" src="../assets/img/big-logo.png"></NuxtLink>
      </div>
    </div>
  </header>
</template>


<style>
  .list-nav-resp{
    transition: all 0.2s;
  }
  .icon-resp {
    display: block;
    font-size: 28px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>