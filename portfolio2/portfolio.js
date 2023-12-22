

gsap.from("#main,.animate-charcter", {
    x: 1000,
    duration: 1,
    delay: 2,
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


gsap.from(".blue,.white1,.blue1,.blue1 img", {
    x:-500,
    opacity: 0,
    duration: 2,
    delay: 3,
    stagger:0.5
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


gsap.from(".navbar nav  ", {
    y: -200,
    duration: 1,
    delay: 1
})


let box1 =document.querySelector('.box1 h2')
 let boxx1=document.querySelector('.box1')
 let imgg=document.querySelector('.box1 img')

boxx1.addEventListener("mouseenter",function (e) {
    box1.style.visibility="visible"
    imgg.style.opacity="0.5"
 
       
})
boxx1.addEventListener("mouseleave",function (e) {
    box1.style.visibility="hidden"
    imgg.style.opacity="1"
  
     
})
let box2 =document.querySelector('.box2 h2')
 let boxx2=document.querySelector('.box2')
 let imgg2=document.querySelector('.box2 img')


boxx2.addEventListener("mouseenter",function (e) {
    box2.style.visibility="visible"
    imgg2.style.opacity="0.5"
 
       
})
boxx2.addEventListener("mouseleave",function (e) {
    box2.style.visibility="hidden"
    imgg2.style.opacity="1"
  
     
})
let box3 =document.querySelector('.box3 h2')
 let boxx3=document.querySelector('.box3')
 let imgg3=document.querySelector('.box3 img')
 


boxx3.addEventListener("mouseenter",function (e) {
    box3.style.visibility="visible"
    imgg3.style.opacity="0.5"
 
       
})
boxx3.addEventListener("mouseleave",function (e) {
    box3.style.visibility="hidden"
    imgg3.style.opacity="1"
  
     
})
let box4 =document.querySelector('.box4 h2')
 let boxx4=document.querySelector('.box4')
 let imgg4=document.querySelector('.box4 img')

boxx4.addEventListener("mouseenter",function (e) {
    box4.style.visibility="visible"
    imgg4.style.opacity="0.5"
 
       
})
boxx4.addEventListener("mouseleave",function (e) {
    box4.style.visibility="hidden"
    imgg4.style.opacity="1"
  
     
})

gsap.from(".box1 ",{
    x:-200,
    opacity:0,
    duration:2,
    delay :1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
    }
})
gsap.from(".box2 ",{
    y:-200,
    opacity:0,
    duration:2,
    delay :3,
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
    }
})
gsap.from(".box3 ",{
    y:200,
    opacity:0,
    duration:2,
    delay :4,
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
    }
})
gsap.from(".box4 ",{
    y:200,
    opacity:0,
    duration:2,
    delay :5,
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
    }
})
gsap.from(".progimg img",{
    x:-1000,
    opacity:0,
    duration:4,
    delay:1,
    scrollTrigger:{
        trigger:".progimg img",
        scroller:"body"
    }
})
gsap.from(".thirdp"),{
    x:-1000,
    opacity:0,
    duration:4,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".firstp",
        scroller:"body"
    }
}