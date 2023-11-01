

gsap.from("#main,.animate-charcter", {
    x: 1000,
    duration: 1,
    delay: 1,
    stagger: 1
})

gsap.from(" .secpage .aboutme", {
    y: 200,
    delay: 1,
    opacity: 0,
    duration: 3,
    stagger:0.5,
    scrollTrigger: {
        trigger: " .secpage .aboutme",
        scroller: "body",
        marker:"true",
        
        
    }

})
gsap.from(" .thirdpage", {
    y: 200,
    delay: 1,
    opacity: 0,
    duration: 3,
    stagger:0.5,
    scrollTrigger: {
        trigger: " .thirdpage",
        scroller: "body",
        marker:"true",
        
        
    }

})

gsap.from(".images", {
    opacity: 0,
    duration: 2,
    delay: 3
})
gsap.from(".cont", {
    opacity: 0,
    duration: 2,
    delay: 5
})
gsap.from(".img1,.img2,.img3,.img4", {
    y: 500,
    opacity: 0,
    duration: 2,
    delay: 7,
    stagger: 0.3
})


gsap.from("nav ul ", {
    y: -100,
    duration: 1,
    delay: 3
})
// let box1 =document.querySelector('.box1')

// box1.addEventListener('mouseover',function () {
//     box1.style.opacity="0.5"
       
     
// })

