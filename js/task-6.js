

const controlsContainer = document.querySelector('#controls')
const inputNumber = document.querySelector('input[type="number"]')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const boxesContainer = document.querySelector('#boxes')
const max = inputNumber.getAttribute("max")
const maxNumber = Number(max)
const min = inputNumber.getAttribute("min")
const minNumber = Number(min)




buttonCreate.addEventListener("click", addBoxes)
buttonDestroy.addEventListener("click", destroyBoxes)

const amount = inputNumber.value

function addBoxes() {
  const amount = inputNumber.value;
  
  if (amount <= maxNumber && amount >= minNumber) {
    createBoxes(amount);
    inputNumber.innerHTML = '';
  } else {
    console.log(`Please enter a number from 1 to 100`)
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

    function createBoxes(amount) {
      boxesContainer.innerHTML = ''

      let divSize = 30;
      let div = 0;
      for (let i = 0; i < amount; i++) {
        div = document.createElement("div");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.backgroundColor = getRandomHexColor();
        divSize += 10;
      }
      boxesContainer.append(div)
    }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


console.log(boxesContainer)

