


const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const colorsResult = document.querySelector('.color')

button.addEventListener("click", getColor)

function getColor() {
  body.style.backgroundColor = getRandomHexColor()
  colorsResult.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}