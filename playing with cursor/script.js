var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imgDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease:"expo.out"
    })
})

imgDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff74"
    })
})

imgDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "#ffffff"
    })
})