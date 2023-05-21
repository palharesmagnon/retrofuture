const navigation = document.querySelector(".navigation")
const buttons = document.querySelectorAll(".button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", active)
}

function active() {
    let current = document.querySelectorAll('.active')
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
}