<template>
  <article  class="py-5">
    <div>
      <p>التصنيف:</p>
    </div>
    <section class="print z-30 absolute left-8 cursor-pointer w-8 h-8 my-0 mx-auto border border-basic-02 rounded-lg text-xl text-basic-02 bg-white flex items-center justify-center">
      <i class="fi fi-rr-print w-5 h-5"></i>
    </section>
    <nuxt-content :document="info" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const info = await $content('ahadith', params.slug).fetch()
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