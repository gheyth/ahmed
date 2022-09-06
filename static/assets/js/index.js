console.log("START JS FROM index.js")

//FOR OPEN AND CLOSE NAVBAR 
let navOpen = document.querySelector(".icon-resp")
let list = document.getElementsByTagName("aside")
let AllContent = document.getElementById("allcontent")
let ButtonMore = document.querySelector(".more");

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

ButtonMore.addEventListener("click", () => {
  OpenAside()
})

function OpenAside() {
  navOpen.children[0].classList.add("hidden")
  navOpen.children[1].classList.toggle("hidden")
  navOpen.children[2].classList.toggle("hidden")
  list[0].classList.toggle("aside-open")
}