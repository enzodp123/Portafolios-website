let header = document.querySelector(".header");
let span = document.querySelector(".span");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("blur", window.scrollY > 3);
    span.classList.toggle("animation-span", window.scrollY > 100)
})