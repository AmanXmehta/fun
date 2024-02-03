var cr = document.querySelector("#crsr")
var crb = document.querySelector("#crsrb")

document.addEventListener("mousemove", function(dets){
    cr.style.left = dets.x+"px"
    cr.style.top = dets.y+"px"
    crb.style.left = dets.x -175 +"px"
    crb.style.top = dets.y -175+"px"

})

gsap.to(".nav", {
    backgroundColor: "black",
    duration:0.5,
    scrollTrigger:{
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start:"top -15%",
    end:"top -10%",
    scrub:0.5,

}
})
gsap.from("#span",{
    y:50,
    yoyo:true,
    duration:1,
    repeat:-1,
})

gsap.to("#span",{
    position:"relative",
    zIndex:-20,
    scrollTrigger:{
        trigger:"#span",
        scroll:"body",
        // markers:true,
        start:"top 66%",
        end:"top 67%",
        scrub:0.1,
    }
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroll:"body",
        markers:true,
        start:"top -55%",
        end:"top -100%",
        scrub:3
    }
})