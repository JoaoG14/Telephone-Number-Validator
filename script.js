const userInput = document.getElementById("user-input")
const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const result = document.getElementById("results-div")

clearButton.addEventListener("click", () => {
  result.innerText = "";
})

checkButton.addEventListener('click', () => {
  if (userInput.value === "") {
    window.alert("Please provide a phone number")
  } else {

  }
})