<template>
  <section class="calc-h flex items-center justify-center">
    <div class="w-1/2">
      <div class="mb-7">
        <h1>ماهو غيث؟</h1>
        <p>هو حاضنة مشاريع إلكترونية يقوم على مبدأ إحتضان او جمع عدة مشاريع دينية رقمية اخرى.</p>
      </div>
      <div class="mb-7">
        <h1>ماهو أحمد</h1>
        <p>هو أحد المشاريع التي يقوم غيث بإحتضانها.
        و هو مشروع يشبه في شكله و مضمونه الموسوعة للأحاديث النبوية للرسول صلى الله عليه وسلم</p>
      </div>
      <div>
        <h1>المؤسس</h1>
        <p>هو: <a href="#">فارس جفافلية</a></p>
      </div>

    </div>
  </section>
</template>

<style scoped>
  section{
    background-image: url('~assets/img/section-bg.jpg');
  }
  h1{
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 8px;
    border-right: solid 6px #94682A ;
    padding: 6px;
    border-radius: 6px;
    background-color: #fff;
    display: inline-block;
  }
  p{
    font-size:20px;
  }
  h1, p{
    /* text-align: center; */
    color: #94682A;
  }
  @media (max-width:800px){
    section{
      height: auto;
      padding: 50px 0 50px 0;
    }
  }
</style>