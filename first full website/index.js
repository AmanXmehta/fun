function loconotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
loconotive();


function imageChanger() {
    let element = document.querySelector(".element")
    let fixed = document.querySelector(".fixed-img")

    element.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })


    element.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })


    let elem = document.querySelectorAll(".elim")

    elem.forEach(function (e) {

        e.addEventListener("mouseenter", function () {

            let image = e.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${image})`

        })
    })


}
imageChanger();

function swiperAnimation() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation();

let menu = document.querySelector("nav h1")
.addEventListener("mouseenter", function(){
    menu.style.backgroundColor = "black"
})