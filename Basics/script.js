let tl = gsap.timeline()


tl.from("#nav h1", {
    y: -30,
    duration: 1,
    delay: 0.5,
    opacity: 0
})

tl.from("#part2 h4", {
    y: -30, 
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
})


tl.from("#section",{
    y: -30,
    duration: 0.5,
    delay: 1,
    opacity: 0,
})





// gsap.to("#box1",{
//     x: 1200,
//     duration: 2,
//     borderRadius: "50%",
//     backgroundColor: "yellow",
//     scale: 1,
//     delay: 1,
//     ease: "power2.inOut",
//     rotate: 360,
//     yoyo: true,
//     repeat: -1,
// })

// gsap.to("#box2",{
//     x: 1200,
//     duration: 2,
//     borderRadius: "50%",
//     backgroundColor: "pink",
//     scale: 1,
//     delay: 1,
//     ease: "power2.inOut",
//     rotate: 360,
//     yoyo: true,
//     repeat: -1,
// })