<template>
  <div class="flex justify-between items-center w-4/5 my-0 mx-auto">
      <div class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
        <p class="font-black">عن {{subject}}</p>
      </div>
      <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between w-28">
        <div class="print bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-print w-5 h-5"></i>
        </div>
        <a target="_blank" href="https://github.com/gheyth/ahmed/issues/new" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-sensor-alert w-5 h-5"></i>
        </a>
        <NuxtLink :to="link" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    subject: String,
    link: String
  }
}
</script>