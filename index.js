const carrusel = document.querySelector("#carrusel")
const imags = document.querySelector("#carrusel").querySelectorAll(".imag")

var current = 0
function update(value) {
    if (current+value >= 0 && current+value < imags.length) current += value
    var number = imags[current].offsetLeft
    carrusel.scrollLeft = parseInt(Math.min(Math.max(number, 0), carrusel.scrollWidth))
}