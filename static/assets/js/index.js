//FOR OPEN AND CLOSE NAVBAR 
let navOpen = document.querySelector(".icon-resp")
let list = document.getElementsByTagName("aside")
let AllContent = document.getElementById("allcontent")
navOpen.addEventListener('click', () => {
  console.log(navOpen.children)
  navOpen.children[0].classList.toggle("hidden")
  navOpen.children[1].classList.toggle("hidden")
  list[0].classList.toggle("aside-open")
  // AllContent.classList.toggle("content")
})