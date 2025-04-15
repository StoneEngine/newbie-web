let box = document.getElementById("minibox");

box.addEventListener("click", function() {
    const color = randomColor()
    document.body.style.backgroundColor = color
    document.getElementById("colorText").textContent = color
    console.log(randomColor());
})

function randomColor() {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
