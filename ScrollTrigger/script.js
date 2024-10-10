gsap.from("#page1 #box", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 360,
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 360,
    scrollTrigger: "#page2 #box",
})

gsap.from("#page3 #box", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body"
        
    },
})