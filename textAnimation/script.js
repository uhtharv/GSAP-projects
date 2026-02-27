function breakText() {

var h1 = document.querySelector("h1")

var h1Text = h1.textContent

var splittedText = h1Text.split("")

var clutter = ""
splittedText.forEach(function(element, index){
    if (element === " ") {
            clutter += `<span class="char">&nbsp;</span>`;
        } else {
            clutter += `<span class="char">${element}</span>`;
        }
})

h1.innerHTML = clutter
console.log(clutter)
}

breakText()

gsap.from("h1 .char", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(2)",
    x: function(index) {
        if (index % 3 === 0) return -100;
        if (index % 3 === 1) return 100;
        return 0;                   
    },
    y: function(index) {
        if (index % 3 === 2) return -100;
    },
});