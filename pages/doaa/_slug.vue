<template>
  <article  class="py-10">
    <section class="flex justify-between items-center w-4/5 my-0 mx-auto">
      <section class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
        <p class="font-black">{{"عن" + " " + info.subject }}</p>
      </section>
      <section class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-center">
        <div class="print bg-white ml-2 flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-print w-5 h-5"></i>
        </div>
        <a target="_blank" href="https://github.com/gheyth/ahmed/issues/new" class="ml-2 bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-sensor-alert w-5 h-5"></i>
        </a>
        <NuxtLink to="/doaa" class="ml-2 bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
        </NuxtLink>
      </section>
    </section>
    
    <nuxt-content :document="info" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const info = await $content('doaa', params.slug).fetch()
      return { info }
    },
    head() {
        return{title:this.info.title}
    },
    mounted() {
      let listArray = []
      setTimeout(() => {
        let Boxs = document.querySelectorAll(".box")
        let Copy = document.querySelectorAll(".fi-br-copy")
        let copyright = "[تم نسخ هذا النص من مشروع احمد - حاضنة غيث: https://gheyth.github.io/]"
        var i = 0;
        for (i = 0; i < Boxs.length; i++) {
            const data = {
                element: Boxs[i],
                content: Boxs[i].textContent,
                button: Copy[i],
                id: i
            }
            listArray.push(data);
        }
        listArray.forEach(element => {
          element.button.onclick = function() {
              navigator.clipboard.writeText(element.content + copyright);
              Swal.fire({
                  position: 'bottom-start',
                  icon: 'success',
                  title: 'تم نسخ النص بنجاح',
                  showConfirmButton: false,
                  timer: 1300,
              })
          }
        });
        let PrintPage = document.querySelector(".print");
        PrintPage.addEventListener("click", () => {
            window.print()
        })
        console.log("JvaScript start")
      }, 2000);
    }
  }
</script>

<style scoped>
  article{
    background-image: url('~assets/img/section-bg.jpg');
    user-select: none;
  }
</style>