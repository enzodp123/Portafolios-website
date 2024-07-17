let header = document.querySelector(".header");
let span = document.querySelector(".span");
let span2 = document.querySelector(".span-2");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("blur", window.scrollY > 3);
    span.classList.toggle("animation-span", window.scrollY > 300)
    span2.classList.toggle("scroll", window.scrollY > 650)
})

//scroll JQUERY

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
    });
});