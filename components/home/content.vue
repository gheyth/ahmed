<template>
  <section id="Content" class="h-screen w-full py-32 px-10 flex justify-center items-center">
    <div>
      <h1 class="text-center text-basic-02 text-6xl font-semibold">اَلْمُحْتَوَى</h1>
      <div class="cards grid gap-8 grid-cols-4 grid-rows-none flex-wrap">
        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rs-comment-alt text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">باب الأحاديث</h3>
          <p class="text-center text-basic-01">يتناول هذا الباب الاحاديث الاكثر تداولا</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rs-heart text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">باب الأخلاق</h3>
          <p class="text-center text-basic-01">يتناول هذا الباب الأحاديث التي تتكلم عن الادب و الأخلاق</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rs-bulb text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">باب الدعاء</h3>
          <p class="text-center text-basic-01">يتناول هذا الباب أكثر الأدعية التي قالها الرسول صلى الله عليه وسلم</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rs-location-alt text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">السيرة النبوية</h3>
          <p class="text-center text-basic-01">السيرة النبوية و أهم الأحداث في حياة الرسول صلى الله عليه وسلم</p>
        </div>
      </div>
      <div class="flex justify-center w-full mt-7">
        <button class="more text-white text-center my-0 mx-auto inline-block py-1 mt-5 rounded-xl bg-basic-02 w-36">إعرف المزيد</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let ButtonMore = document.querySelector(".more");
    ButtonMore.addEventListener("click", () => {
      OpenAside()
    })
  }
}
</script>