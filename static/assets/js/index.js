console.log("START /assets/js/index.js")

//FOR OPEN AND CLOSE NAVBAR 
let navOpen = document.querySelector(".icon-resp")
let list = document.getElementsByTagName("aside")
let AllContent = document.getElementById("allcontent")

navOpen.addEventListener('click', () => {
  OpenAside()
})

///
let LinksAside = document.querySelectorAll(".all-bab a")

LinksAside.forEach(element => {
  element.addEventListener("click", () => {
    OpenAside()
  })
});

function OpenAside() {
  navOpen.children[0].classList.add("hidden")
  navOpen.children[1].classList.toggle("hidden")
  navOpen.children[2].classList.toggle("hidden")
  list[0].classList.toggle("aside-open")
}

//for slug 
function PageSlug(){
  let listArray = [];
  let Boxs = document.querySelectorAll(".box");
  let Copy = document.querySelectorAll(".fi-br-copy");
  let copyright = "[تم نسخ هذا النص من مشروع احمد - حاضنة غيث: https://gheyth.github.io/]";
  var i = 0;
  for (i = 0; i < Boxs.length; i++) {
      const data = {
          element: Boxs[i],
          content: Boxs[i].textContent,
          button: Copy[i],
          id: i
      };
      listArray.push(data);
  }
  listArray.forEach(element => {
      element.button.onclick = function () {
          navigator.clipboard.writeText(element.content + copyright);
          Swal.fire({
              position: "bottom-start",
              icon: "success",
              title: "تم نسخ النص بنجاح",
              showConfirmButton: false,
              timer: 1300,
          });
      };
  });
  let PrintPage = document.querySelector(".print");
  PrintPage.addEventListener("click", () => {
      window.print();
  });
  console.log("JvaScript start");
}