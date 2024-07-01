


const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const colorsResult = document.querySelector('.color')

button.addEventListener("click", getColor)

function getColor() {
  const random = getRandomHexColor()
  body.style.backgroundColor = random
  colorsResult.textContent = random
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}