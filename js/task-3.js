


const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
let value = input.value.trim()
console.log(output)
input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});