

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
  inputNumber.value = ''
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

    function createBoxes(amount) {
      boxesContainer.innerHTML = ''

      let divSize = 30;
      let divContainer = '';
      for (let i = 0; i < amount; i++) {
        let div = `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()};"></div>`;
        divContainer += div
        divSize += 10;
      }
      
      boxesContainer.innerHTML = divContainer;
      
    }

    


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




