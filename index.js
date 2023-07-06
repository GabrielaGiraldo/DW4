const carrusel = document.querySelector("#carrusel")
const imags = document.querySelector("#carrusel").querySelectorAll(".imag")

var a = 0
function ac(value) {
    if (a+value >= 0 && a+value < imags.length) a += value
    var x = imags[a].offsetLeft
    carrusel.scrollLeft = parseInt(Math.min(Math.max(x, 0), carrusel.scrollWidth))
}