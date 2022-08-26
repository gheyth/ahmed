<template>
  <aside
    class="aside z-20 bg-white fixed w-0 transition-all flex items-center flex-wrap justify-center text-slate-500 overflow-hidden">
    <div class="all-bab">
      <NuxtLink to="/"
        class="text-2xl w-24 h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02">
        <i class="fi fi-rs-home w-6 h-6"></i>
      </NuxtLink>
      <NuxtLink to="/ahadith"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02 hover:border-r-4 hover:border-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-comment-alt"></i>
        </div>
        <p class="text-xs">باب الأحاديث</p>
      </NuxtLink>

      <NuxtLink to="/akhlaq"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02 hover:border-r-4 hover:border-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-heart"></i>
        </div>
        <p class="text-xs">باب الأخلاق</p>
      </NuxtLink>

      <NuxtLink to="/doaa"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02 hover:border-r-4 hover:border-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-bulb"></i>
        </div>
        <p class="text-xs">باب الدعاء</p>
      </NuxtLink>

      <NuxtLink to="/sira"
        class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02 hover:border-r-4 hover:border-basic-02">
        <div class="flex items-center justify-center">
          <i class="fi fi-rs-location-alt"></i>
        </div>
        <p class="text-xs">السيرة النبوية</p>
      </NuxtLink>
      <div class="absolute bottom-0 left-0 right-0">
        <NuxtLink to="/about"
          class="text-base h-20 flex items-center justify-center flex-wrap flex-col transition-all hover:text-basic-02 hover:border-r-4 hover:border-basic-02">
          <div class="flex items-center justify-center">
            <i class="fi fi-rs-info"></i>
          </div>
          <p class="text-xs">حول الموقع</p>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .aside{
    /* height:calc(100vh - 80px); */
    top: 88px;
    right: 10px;
    border-radius:12px;
  }
  .all-bab{
    height: calc(100vh - 100px);
  }
  .aside-open{
    border: solid 1px #94682A;
    width: 96px;
  }
  a.nuxt-link-exact-active{
    border-right: solid 4px #94682A;
    color: #94682A;
  }
</style>