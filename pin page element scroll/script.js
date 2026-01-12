gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 0%",
        end: "top -150%",
        markers: false,
        scrub:3,
        pin:true
    }
})