<template>
  <article  class="py-5">
    <div>
      <p>التصنيف:</p>
    </div>
    <section class="print absolute left-8 cursor-pointer w-8 h-8 my-0 mx-auto border border-basic-02 rounded-lg text-xl text-basic-02 bg-white flex items-center justify-center">
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
      //متغير لكل محتوى داخل صندوق
      let Boxs = document.querySelectorAll(".box")
      //متغير لايقونات النسخ
      let Copy = document.querySelectorAll(".fi-br-copy")
      //متغير نصي لحقوق النسخ
      let copyright = "[تم نسخ هذا النص من مشروع احمد - حاضنة غيث: https://gheyth.github.io/]"
      //مصفوفة فارغة
      let listArray = []
      //متغير لتكرار
      var i = 0;
      //كلما كان متغير التكرار اقل من عدد الصناديق اضف واحدا الى المتغير
      for (i; i < Boxs.length; i++) {
          //ثم انشئ كائن يحتوي على هذه البيانات
          const data = {
              //العنصر
              element: Boxs[i],
              //المحتوى النصي للعنصر
              content: Boxs[i].textContent,
              //عنصر الايقونة
              button: Copy[i],
              //الايدي
              id: i
          }
          //اضف جميع البيانات الى المصفوفة الفارغة
          listArray.push(data);
      }
      //لكل عنصر في المصفوفة
      listArray.forEach(element => {
          //كلما تم الضغط على الايقونة في العنصر
          element.button.onclick = function() {
              //قم بالنسخ الى الحافضة المحتوى النصي للعنصر مع حقوق النسخ
              navigator.clipboard.writeText(element.content + copyright);
              //اظهر اشعار انه تم النسخ بنجاح
              Swal.fire({
                  position: 'bottom-start',
                  icon: 'success',
                  title: 'تم نسخ النص بنجاح',
                  showConfirmButton: false,
                  timer: 1300,
              })
          }
      });
      //متغير لايقونة الطباعة
      let PrintPage = document.querySelector(".print");
      //عند الضغط على ايقونة الطباعة: اطبع الصفحة
      PrintPage.addEventListener("click", () => {
          window.print()
      })
    }
  }
</script>

<style scoped>
  article{
    background-image: url('~assets/img/section-bg.jpg');
    user-select: none;
  }
</style>