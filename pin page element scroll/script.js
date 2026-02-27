gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 0%",
        end: "top -150%",
        markers: false,
        scrub: 2,
        pin: true
    }
})

gsap.from("#page1 h1, img", {
    y: -100,
    opacity: 0,
    duration: 1.3,
    ease: "bounce.out",
    stagger: 0.2
})

gsap.to("#page3 img", {
    scrollTrigger: {
        trigger: "#page3",
        start: "top 40%"
    },
    duration: 1,
    delay: 0.5,
    rotation: 180,
    ease: "power2.out"
})

