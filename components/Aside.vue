<template>
  <aside class="aside z-20 bg-white fixed w-0 transition-all flex items-center flex-wrap justify-center rounded-3xl text-slate-500 overflow-hidden">
    <div>
      <NuxtLink to="/"
        class=" text-2xl w-24 h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <i class="fi fi-rs-home w-6 h-6"></i>
      </NuxtLink>
      <NuxtLink to="/"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-comment-alt"></i>
        </div>
        <p class="text-xs">باب الأحاديث</p>
      </NuxtLink>

      <NuxtLink to="/"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-heart"></i>
        </div>
        <p class="text-xs">باب الأخلاق</p>
      </NuxtLink>

      <NuxtLink to="/"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-bulb"></i>
        </div>
        <p class="text-xs">باب الدعاء</p>
      </NuxtLink>

      <NuxtLink to="/"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-location-alt"></i>
        </div>
        <p class="text-xs">السيرة النبوية</p>
      </NuxtLink>

      <NuxtLink to="/"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-info"></i>
        </div>
        <p class="text-xs">حول الموقع</p>
      </NuxtLink>
    </div>
  </aside>
</template>

<style scoped>
  .aside{
    height: calc(100vh - 100px);
    top: 100px;
    right: 10px;
    max-height: 500px;
  }
  .aside-open{
    box-shadow: 0 4px 8px -2px #cca35a, 0 0 0 1px #cca35a;
    width: 96px;
  }
</style>