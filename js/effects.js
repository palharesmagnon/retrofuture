const buttons = document.querySelectorAll(".input-group > .button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", activeButton)
}

function activeButton() {
    let current = document.querySelectorAll('.active')
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
}