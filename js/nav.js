let menuBtn = document.querySelector(".menu-btn");
let links = document.querySelector(".links");
menuBtn.addEventListener("click",()=>{
    links.classList.toggle("show");
})

let header = document.querySelector(".nav");

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos>672){
    header.classList.add("addBg");
  }
  else{
    header.classList.remove("addBg");
  }
  // if (prevScrollpos > currentScrollPos) {
  //   document.querySelector(".nav").style.top = "0";
  // } else {
  //   document.querySelector(".nav").style.top = "-60px";
  // }
  prevScrollpos = currentScrollPos;
}


